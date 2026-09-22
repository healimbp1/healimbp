import fs from 'fs';
import path from 'path';

const dir = './content/column';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== '_index.md');

const list = [];
for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const title = (content.match(/title:\s*"([^"]+)"/) || [])[1] || '';
  const date = (content.match(/date:\s*"([^"]+)"/) || [])[1] || '';
  const category = (content.match(/category:\s*"([^"]+)"/) || [])[1] || '';
  const image = (content.match(/image:\s*"([^"]+)"/) || [])[1] || '';
  list.push({ file: f, slug: f.replace(/\.md$/, ''), title, date, category, image });
}

list.sort((a, b) => b.date.localeCompare(a.date));
console.log('--- TOP 10 LATEST COLUMNS BY DATE ---');
list.slice(0, 10).forEach((item, idx) => {
  console.log(`${idx + 1}. [${item.date}] (${item.slug}) ${item.category} | ${item.title}`);
  console.log(`   Image: ${item.image}\n`);
});
