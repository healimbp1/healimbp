import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveThumbnail } from './thumbnail-resolver.mjs';
import { extractSmartCardData, generateHealimTistoryThumbnailSvg } from './exact-tistory-thumbnail-builder.mjs';

const testCases = [
  {
    title: '인천 만수동 한의원 공황장애, 갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법',
    categoryName: '공황 · 불안 & 강박증',
    slug: 'post-mansu-panic'
  },
  {
    title: '부천 상동 소아청소년 틱장애, 눈깜빡임과 헛기침 틱 증상 한방 치료 원리',
    categoryName: '소아청소년 틱 · 성인 ADHD',
    slug: 'post-bucheon-sangdong-tic'
  },
  {
    title: '인천 청라 한의원 불면증, 수면제 의존 탈출과 안전한 단약 테이퍼링',
    categoryName: '불면증 · 수면장애',
    slug: 'post-cheongna-insomnia'
  },
  {
    title: '시흥 배곧 자율신경실조증, 얼굴은 덥고 발끝은 차가운 상열하한과 식은땀',
    categoryName: '자율신경 & 실신·어지럼증·이명',
    slug: 'post-siheung-baegot-autonomic'
  },
  {
    title: '검단신도시 미주신경성 실신, 지하철이나 버스에서 눈앞이 캄캄해지고 쓰러질 때',
    categoryName: '자율신경 & 실신·어지럼증·이명',
    slug: 'post-geomdan-syncope'
  },
  {
    title: '갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법',
    categoryName: '공황 · 불안 & 강박증',
    slug: 'post-pure-panic'
  }
];

console.log('=== [지역 + 질환 100% 일치 썸네일 데이터 검증] ===\n');

for (const tc of testCases) {
  const cardData = extractSmartCardData(tc.title, tc.categoryName);
  const resolvedPath = resolveThumbnail({
    title: tc.title,
    categoryName: tc.categoryName,
    slug: tc.slug
  });

  console.log(`📌 제목: ${tc.title}`);
  console.log(`🏷️ 썸네일 뱃지: ${cardData.badge}`);
  console.log(`🎯 썸네일 타이틀: ${cardData.title}`);
  console.log(`💬 서브 훅: ${cardData.subHook}`);
  console.log(`🖼️ 리졸브된 썸네일 경로: ${resolvedPath}`);
  console.log('─'.repeat(70) + '\n');
}
