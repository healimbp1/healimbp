import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { convertColumnToTistoryHtml } from './render-tistory.mjs';
import { resolveThumbnail } from './thumbnail-resolver.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const columnDir = path.join(rootDir, 'content', 'column');
const exportDir = path.join(rootDir, 'static', 'tistory-export');

if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}

const botToken = process.env.TELEGRAM_BOT_TOKEN || '8673980673:AAHRmp8S-FwQPBzPyPT-uea0OQ-zWzpM1Lc';
const chatId = process.env.TELEGRAM_CHAT_ID || '2026055528';

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const targetSlugs = [
  'post-2026-09-18-insomnia-3540',
  'post-2026-09-18-panic-4485',
  'post-2026-09-17-autonomic-2012',
  'post-2026-09-17-somatic-5437'
];

async function run() {
  console.log('🚀 [Telegram 4 Columns Sender] Preparing 4 latest columns transmission...');

  for (let i = 0; i < targetSlugs.length; i++) {
    const slug = targetSlugs[i];
    const mdPath = path.join(columnDir, `${slug}.md`);
    if (!fs.existsSync(mdPath)) {
      console.warn(`⚠️ Markdown file not found: ${mdPath}`);
      continue;
    }

    const mdContent = fs.readFileSync(mdPath, 'utf8');
    const frontmatterMatch = mdContent.match(/^---([\s\S]*?)---\r?\n([\s\S]*)$/);
    if (!frontmatterMatch) continue;

    const fm = frontmatterMatch[1];
    const rawBody = frontmatterMatch[2];

    const title = (fm.match(/title:\s*"([^"]+)"/) || [])[1] || '';
    const category = (fm.match(/category:\s*"([^"]+)"/) || [])[1] || '신경정신과 클리닉';
    const date = (fm.match(/date:\s*"([^"]+)"/) || [])[1] || '';
    const tagsMatch = fm.match(/tags:\s*\[(.*?)\]/);
    const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.replace(/["'\s]/g, '')).filter(Boolean) : [];
    const image = (fm.match(/image:\s*"([^"]+)"/) || [])[1] || '';

    // 1. 썸네일 경로 매칭 및 버퍼 로드
    const relThumb = resolveThumbnail({ categoryName: category, title, slug, currentImage: image });
    const absThumbPath = path.join(rootDir, 'static', relThumb.replace(/^\//, ''));
    
    if (!fs.existsSync(absThumbPath)) {
      console.error(`❌ Thumbnail file not found: ${absThumbPath}`);
      continue;
    }

    const thumbBuffer = fs.readFileSync(absThumbPath);
    const thumbExt = path.extname(absThumbPath).toLowerCase() === '.png' ? 'png' : 'jpg';
    const thumbMime = thumbExt === 'png' ? 'image/png' : 'image/jpeg';
    const thumbFileName = `thumbnail_${slug}.${thumbExt}`;

    console.log(`\n📌 [${i + 1}/${targetSlugs.length}] ${title}`);
    console.log(`   📅 날짜: ${date} ｜ 📂 카테고리: ${category}`);
    console.log(`   🖼️ 썸네일 매칭: ${relThumb} (${thumbBuffer.length} bytes)`);

    // 2. 티스토리 완결 HTML 파일 생성 및 저장
    const columnObj = {
      title,
      category,
      categoryName: category,
      image: relThumb,
      slug
    };
    const fullTistoryHtml = convertColumnToTistoryHtml(mdContent, slug, columnObj);
    const outHtmlPath = path.join(exportDir, `tistory_${slug}.html`);
    fs.writeFileSync(outHtmlPath, fullTistoryHtml, 'utf8');

    // 3. 마크다운 볼드(**) 없는 깨끗한 복사용 본문 생성
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

    // 3대 제목 생성
    let titleP1 = title;
    let titleP2 = title.replace(/^\[[^\]]+\]\s*/, '').replace(/\s*\([^)]+\)$/, '');
    let titleP3 = `${category} ｜ ${titleP2} 1:1 맞춤 한방 치료 가이드`;

    const bookingUrl = `https://booking.naver.com/booking/13/bizes/934695`;
    const kakaoUrl = `https://pf.kakao.com/_Tcxcxoxj`;
    const columnUrl = `https://healimbp.com/column/${slug}/`;

    // 4. 텔레그램 발송
    try {
      // Step 1: Send Photo with Rich Caption
      const photoCaption = `🖼️ <b>[홈페이지 칼럼 100% 매칭 썸네일 #${i + 1}]</b>\n\n` +
        `📝 <b>칼럼 제목:</b> <code>${escapeHtml(title)}</code>\n` +
        `📅 <b>발행일:</b> ${escapeHtml(date)}\n` +
        `📂 <b>진료 분야:</b> ${escapeHtml(category)}\n` +
        `🏷️ <b>추천 태그:</b> <code>${escapeHtml(tags.map(t => `#${t}`).join(' '))}</code>`;

      const photoFormData = new FormData();
      photoFormData.append('chat_id', chatId);
      photoFormData.append('caption', photoCaption);
      photoFormData.append('parse_mode', 'HTML');
      const photoBlob = new Blob([thumbBuffer], { type: thumbMime });
      photoFormData.append('photo', photoBlob, thumbFileName);

      const photoRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
        method: 'POST',
        body: photoFormData
      });
      const photoJson = await photoRes.json();
      if (!photoJson.ok) {
        console.warn(`   ⚠️ Photo send note: ${JSON.stringify(photoJson.description || photoJson)}`);
      } else {
        console.log(`   ✅ 1단계: 100% 일치 대표 썸네일 사진 전송 완료!`);
      }

      await new Promise(r => setTimeout(r, 600));

      // Step 2: Send Clean Text Script
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
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: copyMsg, parse_mode: 'HTML', disable_web_page_preview: true })
        });
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
      console.log(`   ✅ 2단계: 마크다운 볼드 없는 깔끔한 대본 전송 완료!`);

      await new Promise(r => setTimeout(r, 600));

      // Step 3: Send Tistory HTML Document File
      const docFormData = new FormData();
      docFormData.append('chat_id', chatId);
      docFormData.append('caption', `📝 <b>[티스토리 HTML 모드 전용 파일 #${i + 1}]</b>\n파일을 열어 전체 복사(Ctrl+A ➔ Ctrl+C) 후 티스토리 에디터 [HTML] 모드에 붙여넣으시면 상단 맞춤 썸네일과 모든 박스/비교표 서식이 100% 완벽하게 적용됩니다.`);
      docFormData.append('parse_mode', 'HTML');
      const docBlob = new Blob([fullTistoryHtml], { type: 'text/html;charset=utf-8' });
      docFormData.append('document', docBlob, `tistory_${slug}.html`);

      const docRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
        method: 'POST',
        body: docFormData
      });
      const docJson = await docRes.json();
      if (!docJson.ok) {
        console.warn(`   ⚠️ Document send note: ${JSON.stringify(docJson.description || docJson)}`);
      } else {
        console.log(`   ✅ 3단계: 썸네일 내장 완결형 티스토리 HTML 파일 전송 완료!`);
      }

      await new Promise(r => setTimeout(r, 1000));
    } catch (err) {
      console.error(`   ❌ 전송 중 예외 (${slug}):`, err.message);
    }
  }

  console.log(`\n🎉 어제/최근 4개 칼럼의 티스토리 패키지 생성이 완료되었습니다!`);
}

run().catch(console.error);
