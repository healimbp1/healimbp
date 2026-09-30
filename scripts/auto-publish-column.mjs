import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function runAutoPublish() {
  console.log('====================================================');
  console.log('📝 [1/3] 의학 칼럼 AI 자동 생성 & 텔레그램 봇 전송 시작...');
  console.log('====================================================');
  
  try {
    execSync('node scripts/generate-column.mjs', { cwd: rootDir, stdio: 'inherit' });
    console.log('\n✅ 칼럼 생성 및 텔레그램 전송 완료!\n');
  } catch (err) {
    console.error('❌ 칼럼 생성 실패:', err.message);
    process.exit(1);
  }

  console.log('====================================================');
  console.log('🔍 [2/3] 칼럼 무결성 & 썸네일 검증...');
  console.log('====================================================');
  try {
    execSync('node scripts/validate-columns.mjs', { cwd: rootDir, stdio: 'inherit' });
    console.log('\n✅ 칼럼 유효성 검증 통과!\n');
  } catch (err) {
    console.warn('⚠️ 칼럼 검증 경고 (계속 진행):', err.message);
  }

  console.log('====================================================');
  console.log('☁️ [3/3] Cloudflare Pages 사이트 빌드 & 실시간 배포...');
  console.log('====================================================');
  try {
    execSync('node scripts/deploy-cloudflare.mjs', { cwd: rootDir, stdio: 'inherit' });
    console.log('\n🎉 [전체 완료] 칼럼 생성, 텔레그램 알림, Cloudflare 배포까지 모두 완료되었습니다!');
  } catch (err) {
    console.error('❌ Cloudflare 배포 실패:', err.message);
    process.exit(1);
  }
}

runAutoPublish();
