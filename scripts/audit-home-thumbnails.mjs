import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveThumbnail, detectCategoryId } from './thumbnail-resolver.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseDir = path.join(__dirname, '..', 'content', 'column');

const dirs = fs.readdirSync(baseDir).filter(d => !d.startsWith('_') && fs.statSync(path.join(baseDir, d)).isDirectory());

console.log(`Total columns in home: ${dirs.length}`);

let issues = [];

dirs.forEach(slug => {
  const mdPath = path.join(baseDir, slug, 'index.md');
  if (!fs.existsSync(mdPath)) return;

  const md = fs.readFileSync(mdPath, 'utf8');
  const titleMatch = md.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : '';

  const catMatch = md.match(/category:\s*"([^"]+)"/);
  const cat = catMatch ? catMatch[1] : '';

  const imgMatch = md.match(/image:\s*"([^"]+)"/);
  const currentImage = imgMatch ? imgMatch[1] : '';

  const resolved = resolveThumbnail({
    categoryId: cat,
    categoryName: cat,
    title: title,
    slug: slug,
    currentImage: currentImage
  });

  const catId = detectCategoryId(cat, cat, title, slug);

  // Check if resolved image matches title/slug topic
  console.log(`\n[${slug}]`);
  console.log(`  Title: ${title}`);
  console.log(`  Category: ${cat} -> Detected: ${catId}`);
  console.log(`  Frontmatter Image: ${currentImage}`);
  console.log(`  Resolved Thumbnail: ${resolved}`);
});
