import fs from 'fs';
import path from 'path';

const dir = './content/column';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== '_index.md');

const all = [];
for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const title = (content.match(/title:\s*"([^"]+)"/) || [])[1] || '';
  const date = (content.match(/date:\s*"([^"]+)"/) || [])[1] || '';
  const category = (content.match(/category:\s*"([^"]+)"/) || [])[1] || '';
  const image = (content.match(/image:\s*"([^"]+)"/) || [])[1] || '';
  all.push({ file: f, slug: f.replace(/\.md$/, ''), title, date, category, image });
}

console.log('--- 4 CORE MASTER COLUMNS ---');
const master4 = [
  'child-tic-disorder',
  'panic-disorder-breathing',
  'autonomic-fatigue',
  'sleep-onset-insomnia'
];
console.table(all.filter(a => master4.includes(a.slug)));
