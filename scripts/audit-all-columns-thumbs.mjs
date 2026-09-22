import fs from 'fs';
import path from 'path';
import { resolveThumbnail } from './thumbnail-resolver.mjs';

const columnDir = 'c:/Users/PC/Downloads/home/content/column';
const files = fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md');

let depressionCount = 0;
let mismatchCount = 0;

for (const f of files) {
  const content = fs.readFileSync(path.join(columnDir, f), 'utf8');
  const title = (content.match(/title:\s*"([^"]+)"/) || [])[1] || '';
  const category = (content.match(/category:\s*"([^"]+)"/) || [])[1] || '';
  const slug = f.replace('.md', '');
  
  const res = resolveThumbnail({ slug, title, categoryName: category });
  
  const isDepressionImg = res.includes('depression');
  const isActuallyDepression = (title + ' ' + category).includes('우울') || (title + ' ' + category).includes('번아웃') || (title + ' ' + category).includes('화병') || (title + ' ' + category).includes('무기력') || (title + ' ' + category).includes('스트레스');
  
  if (isDepressionImg && !isActuallyDepression) {
    console.error(`❌ MISMATCH: ${slug} | Title: "${title}" | Cat: "${category}" => Resolved: ${res}`);
    mismatchCount++;
  }
}

console.log(`\nAudit Complete: Checked ${files.length} column files.`);
console.log(`Mismatches where non-depression column got depression image: ${mismatchCount}`);
