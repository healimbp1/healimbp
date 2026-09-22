const fs = require('fs');
const path = require('path');
const { columnThumbnailDB } = require('c:/Users/PC/Downloads/healim-clinic/scripts/exact-thumbnail-builder.js');

const upcomingSlugs = [
  'intercostal-neuralgia-chest-pain',
  'tinnitus-dizziness-autonomic-care',
  'chronic-ankle-instability-chuna',
  'allergic-rhinitis-seasonal-bopyego',
  'traffic-accident-autonomic-trauma',
  'postpartum-body-pain-sanhuboyak',
  'cubital-tunnel-ulnar-nerve-chuna',
  'myofascial-rhomboid-scapular-pain',
  'globus-hystericus-throat-lump-bopyego'
];

upcomingSlugs.forEach(slug => {
  const mdPath = `c:/Users/PC/Downloads/healim-clinic/content/column/${slug}/index.md`;
  const md = fs.readFileSync(mdPath, 'utf8');
  const titleMatch = md.match(/title:\s*"([^"]+)"/);
  const dateMatch = md.match(/date:\s*([^\r\n]+)/);
  const dbData = columnThumbnailDB[slug];

  console.log(`\n========================================`);
  console.log(`[SLUG: ${slug}]`);
  console.log(`  예약 일시: ${dateMatch ? dateMatch[1] : 'N/A'}`);
  console.log(`  칼럼 본문 제목: ${titleMatch ? titleMatch[1] : 'N/A'}`);
  console.log(`  썸네일 카드 제목: ${dbData ? dbData.title : 'N/A'}`);
  console.log(`  썸네일 서브훅:   ${dbData ? dbData.subHook : 'N/A'}`);
  console.log(`  썸네일 1단계:    ${dbData ? dbData.step1.title : 'N/A'}`);
  console.log(`  썸네일 2단계:    ${dbData ? dbData.step2.title : 'N/A'}`);
  console.log(`  썸네일 3단계:    ${dbData ? dbData.step3.title : 'N/A'}`);
});
