import fs from 'fs';
import path from 'path';
import { resolveThumbnail } from './thumbnail-resolver.mjs';

const dir = './content/column';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== '_index.md');

let fixedCount = 0;
for (const f of files) {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  const title = (content.match(/title:\s*"([^"]+)"/) || [])[1] || '';
  const category = (content.match(/category:\s*"([^"]+)"/) || [])[1] || '';
  const image = (content.match(/image:\s*"([^"]+)"/) || [])[1] || '';
  const slug = f.replace(/\.md$/, '');
  
  const resolved = resolveThumbnail({ categoryName: category, title, slug, currentImage: image });
  
  if (image !== resolved) {
    content = content.replace(/image:\s*"[^"]+"/, `image: "${resolved}"`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[FIXED] ${f}: ${image} -> ${resolved}`);
    fixedCount++;
  }
}

console.log(`\n🎉 Total columns fixed: ${fixedCount} / ${files.length}`);
