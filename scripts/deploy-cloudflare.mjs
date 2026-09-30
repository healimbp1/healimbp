import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🚀 [1/2] Hugo 사이트 정적 빌드 시작 (hugo --minify --buildFuture)...');
try {
  execSync('hugo --minify --buildFuture', { cwd: rootDir, stdio: 'inherit' });
  console.log('✅ Hugo 빌드 완료!\n');
} catch (err) {
  console.error('❌ Hugo 빌드 실패:', err.message);
  process.exit(1);
}

const npxCmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

console.log('☁️ [2/2] Cloudflare Pages 배포 시작 (healimbp)...');
try {
  execSync(`${npxCmd} wrangler pages deploy ./public --project-name=healimbp --branch=main --commit-dirty=true`, {
    cwd: rootDir,
    stdio: 'inherit'
  });
  console.log('\n🎉 Cloudflare Pages 배포가 성공적으로 완료되었습니다!');
  console.log('🔗 공식 사이트: https://healimbp.com');
  console.log('🔗 미리보기: https://healimbp.pages.dev');
} catch (err) {
  console.error('\n❌ Cloudflare Pages 배포 중 오류가 발생했습니다.');
  console.log('💡 만약 로그인이 필요하다면 터미널에서 "npx wrangler login"을 먼저 1회 실행해주세요.');
  process.exit(1);
}
