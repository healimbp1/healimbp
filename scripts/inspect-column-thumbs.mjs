import fs from 'fs';
import path from 'path';
import { resolveThumbnail } from './thumbnail-resolver.mjs';

const dir = './content/column';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== '_index.md');

let mismatches = 0;
for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const title = (content.match(/title:\s*"([^"]+)"/) || [])[1] || '';
  const category = (content.match(/category:\s*"([^"]+)"/) || [])[1] || '';
  const image = (content.match(/image:\s*"([^"]+)"/) || [])[1] || '';
  const slug = f.replace(/\.md$/, '');
  
  const resolved = resolveThumbnail({ categoryName: category, title, slug, currentImage: image });
  
  if (image !== resolved) {
    mismatches++;
    console.log(`[MISMATCH] ${f}`);
    console.log(`   Title: ${title}`);
    console.log(`   Cat:   ${category}`);
    console.log(`   Current:  ${image}`);
    console.log(`   Resolved: ${resolved}\n`);
  }
}

console.log(`Total checked: ${files.length}, Mismatches: ${mismatches}`);
