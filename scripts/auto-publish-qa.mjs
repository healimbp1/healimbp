import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function runAutoPublishQA() {
  console.log('====================================================');
  console.log('💬 [1/3] Q&A 상담사례 자동 생성 & 인덱스 재구축 & 텔레그램 전송 시작...');
  console.log('====================================================');
  
  try {
    execSync('node scripts/generate-daily-qa.mjs', { cwd: rootDir, stdio: 'inherit' });
    console.log('\n✅ Q&A 생성 및 텔레그램 전송 완료!\n');
  } catch (err) {
    console.error('❌ Q&A 생성 실패:', err.message);
    process.exit(1);
  }

  console.log('====================================================');
  console.log('🔍 [2/3] Q&A 인덱스 무결성 검증 & _index.md 동기화...');
  console.log('====================================================');
  try {
    execSync('node scripts/rebuild-qa-index.mjs', { cwd: rootDir, stdio: 'inherit' });
    console.log('\n✅ Q&A 인덱스 동기화 완료!\n');
  } catch (err) {
    console.warn('⚠️ Q&A 인덱스 재구축 경고 (계속 진행):', err.message);
  }

  console.log('====================================================');
  console.log('☁️ [3/3] Cloudflare Pages 사이트 빌드 & 실시간 배포...');
  console.log('====================================================');
  try {
    execSync('node scripts/deploy-cloudflare.mjs', { cwd: rootDir, stdio: 'inherit' });
    console.log('\n🎉 [전체 완료] Q&A 생성, 인덱스 갱신, 텔레그램 알림, Cloudflare 배포까지 모두 완료되었습니다!');
  } catch (err) {
    console.error('❌ Cloudflare 배포 실패:', err.message);
    process.exit(1);
  }
}

runAutoPublishQA();
