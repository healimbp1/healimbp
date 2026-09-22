const fs = require('fs');
const path = require('path');

const targetFile = 'c:/Users/PC/Downloads/healim-clinic/scripts/auto-publish-slot.js';
let content = fs.readFileSync(targetFile, 'utf8');

const oldFuncStart = content.indexOf('async function publishColumn(targetCol) {');
const oldFuncEnd = content.indexOf('async function autoPublishCurrentSlot() {');

const newFunc = `async function publishColumn(targetCol) {
  const { slug, md, dateStr } = targetCol;
  const match = md.match(/^---\\r?\\n([\\s\\S]*?)\\r?\\n---\\r?\\n([\\s\\S]*)$/);
  const frontmatterStr = match ? match[1] : '';
  const titleMatch = frontmatterStr.match(/title:\\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : slug;
  const categoryMatch = frontmatterStr.match(/category:\\s*"([^"]+)"/);
  const category = categoryMatch ? categoryMatch[1] : '척추·관절 통증';

  const thumbsDir = path.join(__dirname, '..', 'static', 'thumbnails');
  if (!fs.existsSync(thumbsDir)) {
    fs.mkdirSync(thumbsDir, { recursive: true });
  }
  const thumbPath = path.join(thumbsDir, \`\${slug}.png\`);

  console.log(\`\\n🚀 [발행 처리 시작] "\${title}" (\${slug})\`);

  // 1. 항상 1:1 완벽 맞춤 썸네일을 최신으로 먼저 강제 생성 (기존 오래된 캐시 방지)
  console.log(\`🖼️ 1:1 맞춤 카드 썸네일 실시간 최신 생성: \${slug}.png\`);
  const svg = generateCleanCardSVG({
    slug,
    title,
    category
  });
  const fontsDir = path.join(__dirname, 'fonts');
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 900 },
    font: {
      fontDirs: [fontsDir, 'C:\\\\Windows\\\\Fonts'],
      loadSystemFonts: true,
      defaultFontFamily: 'Pretendard'
    }
  });
  fs.writeFileSync(thumbPath, resvg.render().asPng());

  // 2. 최신 생성된 썸네일 PNG를 완벽히 내장하여 티스토리 HTML 변환
  const { tags, html } = convertMarkdownToTistoryHTML(md, slug);

  const photoCaption = \`🌟 <b>[해아림 정기 자동발행]</b>\\n\\n\` +
    \`📝 <b>제목:</b> <code>\${title}</code>\\n\` +
    \`📂 <b>카테고리:</b> \${category}\\n\` +
    \`📅 <b>발행일시:</b> <code>\${dateStr}</code>\\n\` +
    \`🏷️ <b>태그:</b> <code>\${tags.join(', ')}</code>\\n\\n\` +
    \`🌐 <b>공식 사이트:</b> https://healim-bp.com/column/\${slug}/\\n\` +
    \`📄 <i>아래 전송되는 HTML 파일을 복사하여 티스토리에 그대로 붙여넣으시면 됩니다.</i>\`;

  if (fs.existsSync(thumbPath)) {
    await sendTelegramPhoto(thumbPath, photoCaption);
  } else {
    await sendTelegramMessage(photoCaption);
  }

  await sleep(1000);

  const fileName = \`\${slug}.html\`;
  await sendTelegramDocument(fileName, html, \`📄 \${title} (티스토리 46번 서식 복사용)\`);

  recordSent(slug);
  console.log(\`✅ [발행 및 텔레그램 전송 완료] "\${title}"\`);
}

`;

content = content.slice(0, oldFuncStart) + newFunc + content.slice(oldFuncEnd);
fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully updated healim-clinic/scripts/auto-publish-slot.js');
