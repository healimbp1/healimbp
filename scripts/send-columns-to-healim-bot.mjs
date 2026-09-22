import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { convertColumnToTistoryHtml } from './render-tistory.mjs';
import { resolveThumbnail } from './thumbnail-resolver.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const columnDir = path.join(rootDir, 'content', 'column');
const exportDir = path.join(rootDir, 'static', 'tistory-export');
const blogImagesDir = path.join(rootDir, 'static', 'blog-images');

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

/**
 * 블로그 포스트 폴더 (static/blog-images/[topic]/) 전송
 */
async function sendBlogPostFolder(topicDirName, index = 0) {
  const dirPath = path.join(blogImagesDir, topicDirName);
  if (!fs.existsSync(dirPath)) {
    throw new Error(`Topic directory not found: ${dirPath}`);
  }

  const files = fs.readdirSync(dirPath);
  const txtFile = files.find(f => f.endsWith('_post.txt') || f.endsWith('.txt'));
  const thumbFile = files.find(f => f === '01_naver_main_thumbnail.jpg' || f === '01_naver_main_thumbnail.png' || f.startsWith('01_'));

  if (!txtFile) {
    throw new Error(`No post.txt found in ${dirPath}`);
  }
  if (!thumbFile) {
    throw new Error(`No 01_ thumbnail found in ${dirPath}`);
  }

  const rawTxt = fs.readFileSync(path.join(dirPath, txtFile), 'utf8');
  const thumbAbsPath = path.join(dirPath, thumbFile);
  const thumbBuffer = fs.readFileSync(thumbAbsPath);
  const thumbExt = path.extname(thumbAbsPath).toLowerCase() === '.png' ? 'png' : 'jpg';
  const thumbMime = thumbExt === 'png' ? 'image/png' : 'image/jpeg';

  // 추출: 제목
  const titleMatch = rawTxt.match(/\[제목\s*옵션\][\s\S]*?(?:1️⃣|1\.|-)\s*([^\r\n]+)/) ||
                     rawTxt.match(/📌\s*제목:\s*([^\r\n]+)/) ||
                     rawTxt.match(/^([^\r\n]+)/);
  const title = titleMatch ? titleMatch[1].replace(/^[0-9\.\s\-_]+/, '').replace(/^1️⃣\s*/, '').trim() : topicDirName;

  // 추출: 태그
  const tagsMatch = rawTxt.match(/(?:#[\w가-힣]+(?:\s+#[\w가-힣]+)*)/);
  const tags = tagsMatch ? tagsMatch[0].split(/\s+/).filter(Boolean) : ['#해아림한의원', '#인천부평점', '#맞춤한방치료'];

  console.log(`\n======================================================`);
  console.log(`📤 [Blog Post #${index + 1}] ${title}`);
  console.log(`🖼️  Thumbnail: ${thumbAbsPath}`);
  console.log(`======================================================`);

  // STEP 1: 고화질 1:1 매칭 썸네일 사진 발송
  const photoCaption = `🖼️ <b>[블로그/칼럼 1:1 매칭 썸네일 #${index + 1}]</b>\n\n` +
    `📝 <b>포스팅 주제:</b> <code>${escapeHtml(title)}</code>\n` +
    `📂 <b>저장 폴더:</b> <code>static/blog-images/${escapeHtml(topicDirName)}/</code>\n` +
    `🏷️ <b>추천 태그:</b> <code>${escapeHtml(tags.join(' '))}</code>`;

  const photoFormData = new FormData();
  photoFormData.append('chat_id', chatId);
  photoFormData.append('caption', photoCaption);
  photoFormData.append('parse_mode', 'HTML');
  photoFormData.append('photo', new Blob([thumbBuffer], { type: thumbMime }), `thumb_${topicDirName}.${thumbExt}`);

  const photoRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
    method: 'POST',
    body: photoFormData
  });
  const photoJson = await photoRes.json();
  if (!photoJson.ok) throw new Error(photoJson.description || JSON.stringify(photoJson));
  console.log(`   ✅ 1단계: 100% 매칭 썸네일 사진 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // STEP 2: 복사용 텍스트 대본 (마크다운 ** 제거)
  const cleanTxt = rawTxt
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/<[^>]+>/g, '')
    .trim();

  const copyMsg = `📋 <b>[블로그/티스토리 원클릭 복사용 대본 #${index + 1}]</b>\n` +
    `<i>※ 마크다운 볼드(**)가 일체 없어 에디터에 바로 붙여넣으실 수 있습니다.</i>\n\n` +
    `────────────────────────────────────\n` +
    `${escapeHtml(cleanTxt)}\n` +
    `────────────────────────────────────`;

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

  // STEP 3: 원고 TXT 파일 발송
  const docTxtFormData = new FormData();
  docTxtFormData.append('chat_id', chatId);
  docTxtFormData.append('caption', `📄 <b>[원고 텍스트 파일 #${index + 1}]</b>\n${topicDirName} 포스팅 전체 원고 파일입니다.`);
  docTxtFormData.append('parse_mode', 'HTML');
  docTxtFormData.append('document', new Blob([cleanTxt], { type: 'text/plain;charset=utf-8' }), `${topicDirName}_post.txt`);

  const docRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: docTxtFormData
  });
  const docJson = await docRes.json();
  if (!docJson.ok) throw new Error(docJson.description || JSON.stringify(docJson));
  console.log(`   ✅ 3단계: 원고 파일(TXT) 전송 완료!`);
}

/**
 * 마크다운 칼럼 (content/column/[slug].md) 전송
 */
async function sendOneColumn(slug, i = 0) {
  const mdPath = path.join(columnDir, `${slug}.md`);
  if (!fs.existsSync(mdPath)) {
    throw new Error(`Column file not found: ${mdPath}`);
  }

  const mdContent = fs.readFileSync(mdPath, 'utf8');
  const frontmatterMatch = mdContent.match(/^---([\s\S]*?)---\r?\n([\s\S]*)$/);
  const fm = frontmatterMatch ? frontmatterMatch[1] : '';
  const rawBody = frontmatterMatch ? frontmatterMatch[2] : mdContent;

  const title = (fm.match(/title:\s*"([^"]+)"/) || [])[1] || slug;
  const category = (fm.match(/category:\s*"([^"]+)"/) || [])[1] || '신경정신과 클리닉';
  const date = (fm.match(/date:\s*"([^"]+)"/) || [])[1] || new Date().toISOString().split('T')[0];
  const tagsMatch = fm.match(/tags:\s*\[(.*?)\]/);
  const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.replace(/["'\s]/g, '')).filter(Boolean) : ['해아림한의원', '인천부평점'];
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

  const bookingUrl = `https://booking.naver.com/booking/13/bizes/934695`;
  const kakaoUrl = `https://pf.kakao.com/_Tcxcxoxj`;
  const columnUrl = `https://healimbp.com/column/${slug}/`;

  console.log(`\n======================================================`);
  console.log(`📤 [Column #${i + 1}] ${title}`);
  console.log(`📂 Category: ${category}`);
  console.log(`🖼️  Resolved Thumbnail: ${relThumb}`);
  console.log(`======================================================`);

  // 1. Send Photo (고화질 100% 매칭 대표 썸네일)
  const photoCaption = `🖼️ <b>[홈페이지 칼럼 100% 매칭 썸네일 #${i + 1}]</b>\n\n` +
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
  console.log(`   ✅ 1단계: 대표 썸네일 사진 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // 2. Send Text Script (마크다운 볼드 ** 0% 정자체 대본)
  const copyMsg = `📋 <b>[티스토리/블로그 원클릭 복사용 대본 #${i + 1}]</b>
<i>※ 본문 및 강조 문구에 마크다운 볼드 기호(**)가 일체 없어 에디터에 바로 붙여넣으실 수 있습니다.</i>

🎯 <b>[블로그 포스팅용 추천 제목 옵션]</b>
1️⃣ <b>표준 지역명형:</b>
<code>${escapeHtml(titleP1)}</code>

2️⃣ <b>질환 기전 집중형:</b>
<code>${escapeHtml(titleP2)}</code>

3️⃣ <b>1:1 맞춤 솔루션형:</b>
<code>${escapeHtml(titleP3)}</code>

─────────────────
${escapeHtml(cleanBody)}
─────────────────

🏥 <b>[해아림한의원 인천부평점 진료 안내]</b>
• 진료: 권형근 대표원장 (한방침구과 전문의 직접 진료)
• 위치: 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)
• 문의: 032-719-3472
• 야간진료: 월 · 수 · 금 저녁 8시까지
• 네이버예약: ${bookingUrl}
• 카카오톡상담: ${kakaoUrl}
• 칼럼원문: ${columnUrl}

🏷️ <b>[추천 태그]</b>
<code>${escapeHtml(tags.map(t => `#${t}`).join(' '))}</code>`;

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

  // 3. Send Document File (HTML 모드 전용)
  const docFormData = new FormData();
  docFormData.append('chat_id', chatId);
  docFormData.append('caption', `📝 <b>[티스토리 HTML 모드 전용 파일 #${i + 1}]</b>\n파일을 열어 전체 복사 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 상단 맞춤 썸네일과 모든 박스/비교표 서식이 100% 완벽하게 적용됩니다.`);
  docFormData.append('parse_mode', 'HTML');
  docFormData.append('document', new Blob([fullTistoryHtml], { type: 'text/html;charset=utf-8' }), `tistory_${slug}.html`);

  const docRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: docFormData
  });
  const docJson = await docRes.json();
  if (!docJson.ok) throw new Error(docJson.description || JSON.stringify(docJson));
  console.log(`   ✅ 3단계: 썸네일 내장 완결형 티스토리 HTML 파일 전송 완료!`);
}

async function run() {
  const args = process.argv.slice(2);
  let targetSlugs = [];
  let blogTopic = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--slug' && args[i + 1]) {
      targetSlugs.push(args[i + 1]);
      i++;
    } else if (args[i] === '--blog' && args[i + 1]) {
      blogTopic = args[i + 1];
      i++;
    }
  }

  // 1. 단일 블로그 포스트 폴더 전송 모드
  if (blogTopic) {
    console.log(`🚀 [Healim Bot] Sending blog post from folder: ${blogTopic}`);
    await sendBlogPostFolder(blogTopic, 0);
    console.log(`\n🎉 Transmission of blog ${blogTopic} completed!`);
    return;
  }

  // 2. 지정된 슬러그 전송 모드
  if (targetSlugs.length > 0) {
    console.log(`🚀 [Healim Bot] Sending ${targetSlugs.length} specified columns...`);
    for (let i = 0; i < targetSlugs.length; i++) {
      // blog-images 폴더인지 먼저 확인
      const blogDir = path.join(blogImagesDir, targetSlugs[i]);
      if (fs.existsSync(blogDir) && fs.statSync(blogDir).isDirectory()) {
        await sendBlogPostFolder(targetSlugs[i], i);
      } else {
        await sendOneColumn(targetSlugs[i], i);
      }
      await new Promise(r => setTimeout(r, 1200));
    }
    console.log('\n🎉 All specified items sent successfully!');
    return;
  }

  // 3. 기본 모드: 최신 발행 4개 마스터 칼럼 (틱장애, 공황장애, 자율신경, 불면증)
  const defaultMasterSlugs = [
    'child-tic-disorder',
    'panic-disorder-breathing',
    'autonomic-fatigue',
    'sleep-onset-insomnia'
  ];

  console.log('🚀 [Healim Column Bot Sender] Sending 4 Core Clinic Master Columns...');
  for (let i = 0; i < defaultMasterSlugs.length; i++) {
    console.log(`\n📤 [${i + 1}/${defaultMasterSlugs.length}] Processing ${defaultMasterSlugs[i]}...`);
    await sendOneColumn(defaultMasterSlugs[i], i);
    await new Promise(r => setTimeout(r, 1200));
  }
  console.log('\n🎉 [Healim Column Bot] All 4 master columns sent successfully to @healim_column_bot!');
}

run().catch(console.error);
