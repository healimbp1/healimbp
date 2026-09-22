import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveThumbnail, detectCategoryId } from './thumbnail-resolver.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const columnDir = path.join(__dirname, '..', 'content', 'column');

const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');

console.log(`Total md files: ${files.length}`);

let mismatchList = [];

files.forEach(file => {
  const mdPath = path.join(columnDir, file);
  const content = fs.readFileSync(mdPath, 'utf8');

  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : '';

  const catMatch = content.match(/category:\s*"([^"]+)"/);
  const cat = catMatch ? catMatch[1] : '';

  const imgMatch = content.match(/image:\s*"([^"]+)"/);
  const currentImage = imgMatch ? imgMatch[1] : '';

  const slug = file.replace(/\.md$/, '');

  const detectedCat = detectCategoryId(cat, cat, title, slug);
  const resolvedThumb = resolveThumbnail({
    categoryId: cat,
    categoryName: cat,
    title,
    slug,
    currentImage
  });

  // Check if resolved thumbnail actually matches title topic!
  console.log(`\n[${file}]`);
  console.log(`  Title: ${title}`);
  console.log(`  Category: ${cat} -> ${detectedCat}`);
  console.log(`  Resolved: ${resolvedThumb}`);
});
