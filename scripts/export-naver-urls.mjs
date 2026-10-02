import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const columnDir = path.resolve(rootDir, 'content', 'column');
const qaDir = path.resolve(rootDir, 'content', 'qa');

// 1. 기본 주요 랜딩페이지
const priorityPages = [
  'https://healimbp.com/',
  'https://healimbp.com/column/',
  'https://healimbp.com/qa/',
  'https://healimbp.com/about/',
  'https://healimbp.com/treatments/',
  'https://healimbp.com/location/',
  'https://healimbp.com/reviews/',
  'https://healimbp.com/consultation/',
  'https://healimbp.com/media/'
];

// 2. 전체 칼럼 URL 추출
const columnFiles = fs.existsSync(columnDir)
  ? fs.readdirSync(columnDir).filter(f => f.endsWith('.md') && f !== '_index.md')
  : [];
const columnUrls = columnFiles.map(file => {
  const slug = file.replace(/\.md$/, '');
  return `https://healimbp.com/column/${slug}/`;
});

// 3. 전체 Q&A URL 추출
const qaFiles = fs.existsSync(qaDir)
  ? fs.readdirSync(qaDir).filter(f => f.endsWith('.md') && f !== '_index.md')
  : [];
const qaUrls = qaFiles.map(file => {
  const slug = file.replace(/\.md$/, '');
  return `https://healimbp.com/qa/${slug}/`;
});

const allUrls = [...priorityPages, ...columnUrls, ...qaUrls];

// 전체 URL 파일 저장
const outputPath = path.resolve(rootDir, 'naver_urls_to_submit.txt');
fs.writeFileSync(outputPath, allUrls.join('\n'), 'utf8');

// 네이버 서치어드바이저 1일 최대 50건 요청 기준 배치 분할 파일 생성
const batchSize = 50;
const totalBatches = Math.ceil(allUrls.length / batchSize);
const batchFiles = [];

for (let i = 0; i < totalBatches; i++) {
  const batchUrls = allUrls.slice(i * batchSize, (i + 1) * batchSize);
  const batchPath = path.resolve(rootDir, `naver_urls_batch_${i + 1}.txt`);
  fs.writeFileSync(batchPath, batchUrls.join('\n'), 'utf8');

  // 네이버 서치어드바이저 입력창(도메인 뒤 경로만 넣는 형태) 전용 파일 생성
  const batchPaths = batchUrls.map(u => {
    const p = u.replace('https://healimbp.com', '');
    return p === '' ? '/' : p;
  });
  const batchPathsFile = path.resolve(rootDir, `naver_paths_batch_${i + 1}.txt`);
  fs.writeFileSync(batchPathsFile, batchPaths.join('\n'), 'utf8');

  batchFiles.push(`naver_paths_batch_${i + 1}.txt (${batchUrls.length}개)`);
}

console.log(`✅ [네이버 수집 URL 내보내기 완료]`);
console.log(`- 전체 수집 대상 URL: 총 ${allUrls.length}개 (주요 ${priorityPages.length}개 + 칼럼 ${columnUrls.length}개 + Q&A ${qaUrls.length}개)`);
console.log(`- 서치어드바이저 입력용 경로 파일 (${totalBatches}개 파일):`);
batchFiles.forEach(bf => console.log(`  • ${bf}`));

