import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendTelegramNotification } from './generate-column.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const columnDir = path.join(rootDir, 'content', 'column');

// 가장 최근에 발행된 2개 칼럼 재전송
const targetSlugs = [
  'post-2026-09-18-insomnia-3540',
  'post-2026-09-18-panic-4485'
];

async function resend() {
  console.log('🚀 [healimbp.com] 1:1 완벽 일치 썸네일 탑재 칼럼 텔레그램 재전송 시작...');

  for (const slug of targetSlugs) {
    const mdPath = path.join(columnDir, `${slug}.md`);
    if (!fs.existsSync(mdPath)) {
      console.error(`File not found: ${mdPath}`);
      continue;
    }

    const md = fs.readFileSync(mdPath, 'utf8');
    const titleMatch = md.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : slug;
    const catMatch = md.match(/category:\s*"([^"]+)"/);
    const category = catMatch ? catMatch[1] : '신경정신과';
    const dateMatch = md.match(/date:\s*"([^"]+)"/);
    const date = dateMatch ? dateMatch[1] : '2026-09-18';
    const sumMatch = md.match(/summary:\s*"([^"]+)"/);
    const summary = sumMatch ? sumMatch[1] : '';

    const column = {
      title,
      categoryName: category,
      category: category,
      date,
      summary,
      contentHtml: md
    };

    console.log(`\n📤 [전송 처리] "${title}" (${slug})`);
    await sendTelegramNotification(column, slug);
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log('\n🎉 [healimbp.com] 텔레그램 재전송 완료!');
}

resend().catch(err => {
  console.error('Error:', err);
});
