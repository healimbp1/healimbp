import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { convertColumnToTistoryHtml } from './render-tistory.mjs';
import { buildTistoryThumbnailPng } from './exact-tistory-thumbnail-builder.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const columnDir = path.join(__dirname, '..', 'content', 'column');

const testSlugs = [
  'post-2026-09-18-insomnia-3540',
  'post-2026-09-18-panic-4485',
  'vasovagal-syncope',
  'stress-headache-digestion',
  'tmj-bruxism-stress',
  'tinnitus-autonomic-dizziness',
  'bupyeong-adult-adhd'
];

testSlugs.forEach(slug => {
  const mdPath = path.join(columnDir, `${slug}.md`);
  if (!fs.existsSync(mdPath)) {
    console.log(`File not found: ${slug}`);
    return;
  }
  const md = fs.readFileSync(mdPath, 'utf8');
  const titleMatch = md.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : slug;
  const catMatch = md.match(/category:\s*"([^"]+)"/);
  const category = catMatch ? catMatch[1] : '';

  const col = {
    title,
    category,
    categoryName: category
  };

  const html = convertColumnToTistoryHtml(md, slug, col);
  const b64Match = html.match(/src="data:image\/png;base64,([^"]+)"/);

  console.log(`\n========================================`);
  console.log(`[SLUG: ${slug}]`);
  console.log(`  Title: ${title}`);
  console.log(`  Category: ${category}`);
  console.log(`  Embedded Base64 Thumbnail Generated: ${!!b64Match} (Length: ${b64Match ? b64Match[1].length : 0})`);
});
