import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { convertColumnToTistoryHtml } from './render-tistory.mjs';
import { resolveThumbnail } from './thumbnail-resolver.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const columnDir = path.join(rootDir, 'content', 'column');
const exportDir = path.join(rootDir, 'static', 'tistory-export');

if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}

const botToken = process.env.TELEGRAM_BOT_TOKEN || '8825145197:AAFNSDxXpqCBq1c0BW93kDbrtDC7Ncr2Bxk';
const chatId = process.env.TELEGRAM_CHAT_ID || '2026055528';

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendTodayColumn(slug) {
  const mdPath = path.join(columnDir, `${slug}.md`);
  if (!fs.existsSync(mdPath)) {
    throw new Error(`Column file not found: ${mdPath}`);
  }

  const mdContent = fs.readFileSync(mdPath, 'utf8');
  const frontmatterMatch = mdContent.match(/^---([\s\S]*?)---\r?\n([\s\S]*)$/);
  const fm = frontmatterMatch ? frontmatterMatch[1] : '';
  const rawBody = frontmatterMatch ? frontmatterMatch[2] : mdContent;

  const title = (fm.match(/title:\s*"([^"]+)"/) || [])[1] || slug;
  const category = (fm.match(/category:\s*"([^"]+)"/) || [])[1] || '자율신경 & 실신·어지럼증·이명';
  const date = (fm.match(/date:\s*"([^"]+)"/) || [])[1] || '2026-09-29';
  const tagsMatch = fm.match(/tags:\s*\[(.*?)\]/);
  const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.replace(/["'\s]/g, '')).filter(Boolean) : ['김포검단한의원', '자율신경실조증', '미주신경성실신', '부평한의원'];
  const image = (fm.match(/image:\s*"([^"]+)"/) || [])[1] || '';

  const relThumb = resolveThumbnail({ categoryName: category, title, slug, currentImage: image });
  const absThumbPath = path.join(rootDir, 'static', relThumb.replace(/^\//, ''));
  
  if (!fs.existsSync(absThumbPath)) {
    throw new Error(`Resolved thumbnail not found on disk: ${absThumbPath}`);
  }

  const thumbBuffer = fs.readFileSync(absThumbPath);
  const thumbExt = path.extname(absThumbPath).toLowerCase() === '.png' ? 'png' : 'jpg';
  const thumbMime = thumbExt === 'png' ? 'image/png' : 'image/jpeg';
  const thumbFileName = `thumbnail_${slug}.${thumbExt}`;

  const columnObj = { title, category, categoryName: category, image: relThumb, slug };
  const fullTistoryHtml = convertColumnToTistoryHtml(mdContent, slug, columnObj);
  const outHtmlPath = path.join(exportDir, `tistory_${slug}.html`);
  fs.writeFileSync(outHtmlPath, fullTistoryHtml, 'utf8');

  let cleanBody = rawBody
    .replace(/<div class="voice-box">([\s\S]*?)<\/div>/gi, (m, g) => {
      const lines = g.match(/<div class="voice-line">(.*?)<\/div>/gi) || [];
      return lines.map(l => `> "${l.replace(/<[^>]+>/g, '').trim()}"`).join('\n') + '\n\n';
    })
    .replace(/<div class="toc">[\s\S]*?<\/div>/gi, '')
    .replace(/<div class="section-label">(.*?)<\/div>/gi, '\n■ [$1]')
    .replace(/<div class="[^"]*">([\s\S]*?)<\/div>/gi, '$1')
    .replace(/<span class="bg-\[#2F5D50\][^>]*>(Q\d+)<\/span>\s*<span>(.*?)<\/span>[\s\S]*?<p class="[^"]*">([\s\S]*?)<\/p>/gi, '\n$1. $2\n답변: $3\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/[*_#`]/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  let titleP1 = title;
  let titleP2 = title.replace(/^\[[^\]]+\]\s*/, '').replace(/\s*\([^)]+\)$/, '');
  let titleP3 = `${category} ｜ ${titleP2} 1:1 맞춤 한방 치료 가이드`;

  console.log(`\n======================================================`);
  console.log(`📤 [오늘자 칼럼 텔레그램 발송] ${title}`);
  console.log(`📂 Category: ${category}`);
  console.log(`🖼️ Thumbnail: ${absThumbPath}`);
  console.log(`======================================================`);

  // STEP 1: 고화질 대표 썸네일 사진 전송
  const photoCaption = `🖼️ <b>[오늘의 의학 칼럼 100% 매칭 썸네일]</b>\n\n` +
    `📝 <b>칼럼 제목:</b> <code>${escapeHtml(title)}</code>\n` +
    `📅 <b>발행일:</b> ${escapeHtml(date)}\n` +
    `📂 <b>진료 분야:</b> ${escapeHtml(category)}\n` +
    `🏷️ <b>추천 태그:</b> <code>${escapeHtml(tags.map(t => `#${t}`).join(' '))}</code>`;

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
  console.log(`   ✅ 1단계: 100% 매칭 썸네일 사진 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // STEP 2: 원클릭 복사용 대본 (마크다운 볼드 0%)
  const copyMsg = `📋 <b>[티스토리/블로그 원클릭 복사용 대본]</b>
<i>※ 본문 및 강조 문구에 마크다운 볼드 기호(**)가 일체 없어 에디터에 바로 붙여넣으실 수 있습니다.</i>

🎯 <b>[블로그 포스팅용 추천 제목 옵션]</b>
1️⃣ <b>표준 지역명형:</b>
<code>${escapeHtml(titleP1)}</code>

2️⃣ <b>질환 기전 집중형:</b>
<code>${escapeHtml(titleP2)}</code>

3️⃣ <b>1:1 맞춤 솔루션형:</b>
<code>${escapeHtml(titleP3)}</code>

────────────────────────────────────
${escapeHtml(cleanBody)}
────────────────────────────────────

📍 <b>[부평점 진료 안내 링크 세트]</b>
• 공식 홈페이지: https://healimbp.com/column/${slug}/
• 네이버 간편예약: https://booking.naver.com/booking/13/bizes/934695
• 카카오톡 상담: https://pf.kakao.com/_Tcxcxoxj
• 대표 전화: 032-719-3472 (부평역 7번 출구)`;

  const MAX_LEN = 3800;
  if (copyMsg.length <= MAX_LEN) {
    const textRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: copyMsg, parse_mode: 'HTML', disable_web_page_preview: true })
    });
    const textJson = await textRes.json();
    if (!textJson.ok) throw new Error(textJson.description || JSON.stringify(textJson));
  } else {
    const part1 = copyMsg.slice(0, MAX_LEN);
    const part2 = copyMsg.slice(MAX_LEN);
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: part1, parse_mode: 'HTML', disable_web_page_preview: true })
    });
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: part2, parse_mode: 'HTML', disable_web_page_preview: true })
    });
  }
  console.log(`   ✅ 2단계: 깔끔한 복사용 대본 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // STEP 3: 완결형 티스토리 HTML 파일 발송
  const htmlFormData = new FormData();
  htmlFormData.append('chat_id', chatId);
  htmlFormData.append('caption', `📝 <b>[완결형 티스토리 서식 HTML]</b>\n${escapeHtml(title)}\n\n티스토리 기본 모드 또는 HTML 모드에 복사해 넣으시면 고급 서식이 완벽하게 적용됩니다.`);
  htmlFormData.append('parse_mode', 'HTML');
  htmlFormData.append('document', new Blob([fullTistoryHtml], { type: 'text/html;charset=utf-8' }), `tistory_${slug}.html`);

  const htmlRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: htmlFormData
  });
  const htmlJson = await htmlRes.json();
  if (!htmlJson.ok) throw new Error(htmlJson.description || JSON.stringify(htmlJson));
  console.log(`   ✅ 3단계: 완결형 HTML 파일 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // STEP 4: 전체 원고 TXT 파일 발송
  const txtFormData = new FormData();
  txtFormData.append('chat_id', chatId);
  txtFormData.append('caption', `📄 <b>[전체 원고 텍스트 TXT]</b>\n${escapeHtml(title)} 순수 원고 파일입니다.`);
  txtFormData.append('parse_mode', 'HTML');
  txtFormData.append('document', new Blob([cleanBody], { type: 'text/plain;charset=utf-8' }), `${slug}_post.txt`);

  const txtRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: txtFormData
  });
  const txtJson = await txtRes.json();
  if (!txtJson.ok) throw new Error(txtJson.description || JSON.stringify(txtJson));
  console.log(`   ✅ 4단계: 원고 파일(TXT) 전송 완료!`);

  console.log(`\n🎉 [발송 성공] 오늘 칼럼 4단계 패키지가 텔레그램으로 전송되었습니다!`);
}

// 오늘자 칼럼 전송 실행
sendTodayColumn('post-2026-09-29-autonomic-2305');
