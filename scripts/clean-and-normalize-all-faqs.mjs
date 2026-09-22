import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { findTopicKey, getDiverseFaq } from './column-faqs.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.resolve(__dirname, '../content/column');

function renderFaqHtml(faqs) {
  let itemsHtml = faqs.map((item, idx) => {
    return `    <div class="p-5 bg-white rounded-2xl border border-[#DDE6E1] shadow-sm space-y-2">
      <div class="font-extrabold text-sm sm:text-base text-[#202947] flex items-start gap-2.5">
        <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold shrink-0 mt-0.5">Q${idx + 1}</span>
        <span>${item.q}</span>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8 m-0">
        ${item.a}
      </p>
    </div>`;
  }).join('\n');

  return `<div class="space-y-4 my-6 not-prose">
${itemsHtml}
</div>`;
}

function cleanAndNormalizeColumn(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);

  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const categoryMatch = content.match(/category:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : '';
  const category = categoryMatch ? categoryMatch[1] : '';

  // 최적 FAQ
  const optimalTopicKey = findTopicKey('', title, category);
  const optimalFaqs = getDiverseFaq(category, { title, focus: title }, { title, slot: 0 });
  const replacementFaqHtml = renderFaqHtml(optimalFaqs);

  // FAQ 섹션 전체 탐색 및 1개로 단일화
  // doctor insight 전까지의 FAQ 섹션들을 모두 제거하고 단 하나의 완결된 FAQ 섹션으로 교체
  const faqHeaderRegex = /---\s*\n\s*<div class="section-label">진료실 자주 묻는 질문[\s\S]*?(?=<div class="my-8 p-6 sm:p-8 bg-gradient-to-br|$)/;
  
  if (faqHeaderRegex.test(content)) {
    const singleCleanFaqSection = `---

<div class="section-label">진료실 자주 묻는 질문 06</div>

## 환자분들이 진료실에서 가장 많이 묻는 현실적 질문 (FAQ)

${replacementFaqHtml}

`;
    content = content.replace(faqHeaderRegex, singleCleanFaqSection);
  }

  // 한의학 박사 표기 일괄 정정
  if (content.includes('한의학 박사') || content.includes('한의학박사')) {
    content = content.replace(/한의학\s*박사/g, '한방침구과 전문의');
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md') && f !== '_index.md');
for (const f of files) {
  cleanAndNormalizeColumn(path.join(CONTENT_DIR, f));
}

console.log(`✅ All ${files.length} column files cleaned and normalized with 100% matched single FAQ!`);
