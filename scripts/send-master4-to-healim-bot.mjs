import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveThumbnail } from './thumbnail-resolver.mjs';
import { parseMasterColumn } from './parse-master-column.mjs';
import { renderMasterColumnToTistoryHtml, renderMasterColumnToPlainText } from './format-master-column.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const columnDir = path.join(rootDir, 'content', 'column');
const exportDir = path.join(rootDir, 'static', 'tistory-export');

const botToken = '8825145197:AAFNSDxXpqCBq1c0BW93kDbrtDC7Ncr2Bxk';
const chatId = '2026055528';

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const master4Slugs = [
  'child-tic-disorder',
  'panic-disorder-breathing',
  'autonomic-fatigue',
  'sleep-onset-insomnia'
];

async function sendOneColumn(slug, i) {
  const mdPath = path.join(columnDir, `${slug}.md`);
  const mdContent = fs.readFileSync(mdPath, 'utf8');

  // 1. Structured Parsing
  const parsedData = parseMasterColumn(mdContent, slug);

  // 2. Generate Tistory HTML & Plain Text
  const fullTistoryHtml = renderMasterColumnToTistoryHtml(parsedData);
  const fullPlainText = renderMasterColumnToPlainText(parsedData, i);

  // Save to static/tistory-export/
  const outHtmlPath = path.join(exportDir, `tistory_${slug}.html`);
  const outTxtPath = path.join(exportDir, `script_${slug}.txt`);
  fs.writeFileSync(outHtmlPath, fullTistoryHtml, 'utf8');
  fs.writeFileSync(outTxtPath, fullPlainText, 'utf8');

  // 3. Resolve Thumbnail
  const relThumb = resolveThumbnail({
    categoryName: parsedData.category,
    title: parsedData.title,
    slug: slug,
    currentImage: parsedData.image
  });
  const absThumbPath = path.join(rootDir, 'static', relThumb.replace(/^\//, ''));
  const thumbBuffer = fs.readFileSync(absThumbPath);
  const thumbExt = path.extname(absThumbPath).toLowerCase() === '.png' ? 'png' : 'jpg';
  const thumbMime = thumbExt === 'png' ? 'image/png' : 'image/jpeg';
  const thumbFileName = `thumbnail_${slug}.${thumbExt}`;

  console.log(`\n======================================================`);
  console.log(`📤 [${i + 1}/${master4Slugs.length}] ${parsedData.title}`);
  console.log(`======================================================`);

  // STEP 1: Send High-Res Photo
  const photoCaption = `🖼️ <b>[홈페이지 건강칼럼 1:1 매칭 대표 썸네일 #${i + 1}]</b>\n\n` +
    `📝 <b>칼럼 제목:</b> <code>${escapeHtml(parsedData.title)}</code>\n` +
    `📂 <b>진료 분야:</b> ${escapeHtml(parsedData.category)}\n` +
    `🏷️ <b>추천 태그:</b> <code>${escapeHtml(parsedData.tags.map(t => `#${t}`).join(' '))}</code>`;

  const photoFormData = new FormData();
  photoFormData.append('chat_id', chatId);
  photoFormData.append('caption', photoCaption);
  photoFormData.append('parse_mode', 'HTML');
  photoFormData.append('photo', new Blob([thumbBuffer], { type: thumbMime }), thumbFileName);

  const photoRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
    method: 'POST',
    body: photoFormData
  });
  const photoJson = await photoRes.json();
  if (!photoJson.ok) throw new Error(photoJson.description || JSON.stringify(photoJson));
  console.log(`   ✅ 1단계: 대표 썸네일 사진 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // STEP 2: Send Plain Text Script (Clean Section Split for Telegram 4096 char limit)
  const splitMarker = '\n■ 04. 맞춤 한의학 변증';
  const splitIdx = fullPlainText.indexOf(splitMarker);

  if (splitIdx !== -1) {
    const part1 = fullPlainText.slice(0, splitIdx).trim();
    const part2 = fullPlainText.slice(splitIdx).trim();

    // Part 1
    const p1Msg = `📋 <b>[티스토리/블로그 원클릭 복사용 대본 #${i + 1} (1/2)]</b>\n` +
      `<i>※ 마크다운 볼드 기호(**) 일체 없음 / 에디터 바로 붙여넣기</i>\n\n` +
      `────────────────────────────────────\n` +
      `${escapeHtml(part1)}\n` +
      `────────────────────────────────────\n\n` +
      `<i>(👇 바로 아래 메시지로 2/2가 이어집니다)</i>`;

    const res1 = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: p1Msg, parse_mode: 'HTML', disable_web_page_preview: true })
    });
    const json1 = await res1.json();
    if (!json1.ok) throw new Error(json1.description || JSON.stringify(json1));

    await new Promise(r => setTimeout(r, 500));

    // Part 2
    const p2Msg = `📋 <b>[티스토리/블로그 원클릭 복사용 대본 #${i + 1} (2/2)]</b>\n\n` +
      `────────────────────────────────────\n` +
      `${escapeHtml(part2)}`;

    const res2 = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: p2Msg, parse_mode: 'HTML', disable_web_page_preview: true })
    });
    const json2 = await res2.json();
    if (!json2.ok) throw new Error(json2.description || JSON.stringify(json2));
  } else {
    // Single message
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: escapeHtml(fullPlainText), parse_mode: 'HTML', disable_web_page_preview: true })
    });
    const json = await res.json();
    if (!json.ok) throw new Error(json.description || JSON.stringify(json));
  }
  console.log(`   ✅ 2단계: 체계적인 단락/줄맞춤 복사용 원고 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // STEP 3: Send HTML Document File (Tistory HTML Mode)
  const docHtmlFormData = new FormData();
  docHtmlFormData.append('chat_id', chatId);
  docHtmlFormData.append('caption', `📝 <b>[티스토리 HTML 모드 전용 파일 #${i + 1}]</b>\n파일을 열어 전체 복사 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 상단 맞춤 썸네일과 모든 박스/비교표 서식이 100% 완벽하게 적용됩니다.`);
  docHtmlFormData.append('parse_mode', 'HTML');
  docHtmlFormData.append('document', new Blob([fullTistoryHtml], { type: 'text/html;charset=utf-8' }), `tistory_${slug}.html`);

  const docHtmlRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: docHtmlFormData
  });
  const docHtmlJson = await docHtmlRes.json();
  if (!docHtmlJson.ok) throw new Error(docHtmlJson.description || JSON.stringify(docHtmlJson));
  console.log(`   ✅ 3단계: 완결형 티스토리 HTML 파일 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // STEP 4: Send Plain Text File (One-Click TXT)
  const docTxtFormData = new FormData();
  docTxtFormData.append('chat_id', chatId);
  docTxtFormData.append('caption', `📄 <b>[전체 복사용 텍스트 파일 #${i + 1}]</b>\n모바일이나 메모장에서 끊김 없이 전체 원고를 한 번에 복사하여 블로그/티스토리에 게시하실 수 있습니다.`);
  docTxtFormData.append('parse_mode', 'HTML');
  docTxtFormData.append('document', new Blob([fullPlainText], { type: 'text/plain;charset=utf-8' }), `script_${slug}.txt`);

  const docTxtRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: docTxtFormData
  });
  const docTxtJson = await docTxtRes.json();
  if (!docTxtJson.ok) throw new Error(docTxtJson.description || JSON.stringify(docTxtJson));
  console.log(`   ✅ 4단계: 완결형 원고 텍스트 파일(TXT) 전송 완료!`);
}

async function run() {
  console.log('🚀 [Master 4 Columns Transmission] Starting transmission to @healim_column_bot...');
  for (let i = 0; i < master4Slugs.length; i++) {
    await sendOneColumn(master4Slugs[i], i);
    await new Promise(r => setTimeout(r, 1200));
  }
  console.log('\n🎉 [Master 4 Columns] All 4 columns successfully transmitted to @healim_column_bot!');
}

run().catch(console.error);
