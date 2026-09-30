import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 칼럼 정규 발행 시간 (KST 기준: 08:00, 12:00, 16:00, 20:00)
const COLUMN_HOURS = [8, 12, 16, 20];
// Q&A 정규 발행 시간 (KST 기준: 10:00)
const QA_HOURS = [10];

let lastColumnRunHour = -1;
let lastQaRunHour = -1;

console.log('🕒 [HealimBP Unified Scheduler] 홈페이지 칼럼 & Q&A 자동발행 상시 감시 스케줄러 가동');
console.log(`📅 의학 칼럼 발행 시간: 매일 ${COLUMN_HOURS.map(h => `${h}:00`).join(', ')}`);
console.log(`📅 임상 Q&A 발행 시간: 매일 ${QA_HOURS.map(h => `${h}:00`).join(', ')}`);
console.log('------------------------------------------------------------');

function checkAndRun() {
  const now = new Date();
  // KST 시간 계산 (UTC + 9)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const kst = new Date(utc + (3600000 * 9));
  
  const currentHour = kst.getHours();
  const currentMinute = kst.getMinutes();

  // 1. 칼럼 자동발행 체크
  if (COLUMN_HOURS.includes(currentHour) && currentMinute < 5 && lastColumnRunHour !== currentHour) {
    lastColumnRunHour = currentHour;
    console.log(`\n⏰ [${kst.toLocaleString('ko-KR')}] ${currentHour}:00 정규 칼럼 자동발행 트리거 가동!`);
    
    try {
      execSync('node scripts/auto-publish-column.mjs', { cwd: rootDir, stdio: 'inherit' });
      console.log(`✅ [${currentHour}:00] 칼럼 자동발행 및 Cloudflare 배포 완료\n`);
    } catch (err) {
      console.error(`❌ [${currentHour}:00] 칼럼 자동발행 중 오류 발생:`, err.message);
    }
  }

  // 2. Q&A 자동발행 체크
  if (QA_HOURS.includes(currentHour) && currentMinute < 5 && lastQaRunHour !== currentHour) {
    lastQaRunHour = currentHour;
    console.log(`\n⏰ [${kst.toLocaleString('ko-KR')}] ${currentHour}:00 정규 Q&A 자동발행 트리거 가동!`);
    
    try {
      execSync('node scripts/auto-publish-qa.mjs', { cwd: rootDir, stdio: 'inherit' });
      console.log(`✅ [${currentHour}:00] Q&A 자동발행 및 Cloudflare 배포 완료\n`);
    } catch (err) {
      console.error(`❌ [${currentHour}:00] Q&A 자동발행 중 오류 발생:`, err.message);
    }
  }
}

// 30초마다 시간 체크
setInterval(checkAndRun, 30000);
checkAndRun();
