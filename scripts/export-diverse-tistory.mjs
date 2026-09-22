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

// 7대 핵심 대표 질환군 (다양성 완벽 보장)
const targetColumns = [
  { slug: 'child-tic-disorder', catBadge: '소아청소년 & 성인 뇌신경 클리닉', pattern: '소아 틱장애 기저핵 발달' },
  { slug: 'panic-disorder-breathing', catBadge: '공황 · 불안 & 강박증 클리닉', pattern: '공황발작 & 과호흡 응급대처' },
  { slug: 'autonomic-fatigue', catBadge: '자율신경 & 실신·어지럼증 클리닉', pattern: '자율신경실조증 & 만성피로' },
  { slug: 'sleep-onset-insomnia', catBadge: '불면증 & 수면장애 클리닉', pattern: '입면장애 & 수면 뇌파 안정' },
  { slug: 'adult-adhd-executive-dysfunction', catBadge: '성인 ADHD & 두뇌 클리닉', pattern: '성인 ADHD 실행기능 회복' },
  { slug: 'vasovagal-syncope', catBadge: '자율신경 & 실신·어지럼증 클리닉', pattern: '미주신경성 실신 & 뇌혈류' },
  { slug: 'damjeok-functional-dyspepsia', catBadge: '신체화 & 담적·두통·턱관절 클리닉', pattern: '담적병 & 뇌-장축 소화불량' }
];

const results = [];

for (let i = 0; i < targetColumns.length; i++) {
  const item = targetColumns[i];
  const mdPath = path.join(columnDir, `${item.slug}.md`);
  if (!fs.existsSync(mdPath)) continue;

  const mdContent = fs.readFileSync(mdPath, 'utf8');
  const frontmatterMatch = mdContent.match(/^---([\s\S]*?)---\r?\n([\s\S]*)$/);
  if (!frontmatterMatch) continue;

  const fm = frontmatterMatch[1];
  const rawBody = frontmatterMatch[2];

  const title = (fm.match(/title:\s*"([^"]+)"/) || [])[1] || '';
  const category = (fm.match(/category:\s*"([^"]+)"/) || [])[1] || '신경정신과 클리닉';
  const tagsMatch = fm.match(/tags:\s*\[(.*?)\]/);
  const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.replace(/["'\s]/g, '')).filter(Boolean) : [];
  const image = (fm.match(/image:\s*"([^"]+)"/) || [])[1] || '';

  const relThumb = resolveThumbnail({ categoryName: category, title, slug: item.slug, currentImage: image });
  const absThumbPath = path.join(rootDir, 'static', relThumb.replace(/^\//, ''));

  const columnObj = {
    title,
    category,
    categoryName: category,
    image: relThumb,
    slug: item.slug
  };
  const fullTistoryHtml = convertColumnToTistoryHtml(mdContent, item.slug, columnObj);
  const outHtmlPath = path.join(exportDir, `tistory_${item.slug}.html`);
  fs.writeFileSync(outHtmlPath, fullTistoryHtml, 'utf8');

  // Clean body for direct text copy
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

  results.push({
    index: i + 1,
    slug: item.slug,
    title,
    category,
    tags,
    relThumb,
    absThumbPath,
    outHtmlPath,
    cleanBody
  });
}

fs.writeFileSync(path.join(exportDir, 'export_manifest.json'), JSON.stringify(results, null, 2), 'utf8');
console.log(`✅ Successfully generated ${results.length} verified Tistory HTML packages in ${exportDir}`);
