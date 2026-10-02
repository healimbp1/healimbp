import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/sniffing-tic-treatment-recovery-process',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 썸네일)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091b2b" />
      <stop offset="50%" stop-color="#0c2e35" />
      <stop offset="100%" stop-color="#061820" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0ea5e9" />
    </linearGradient>
    <linearGradient id="pointGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#14b8a6" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-220" y="0" width="440" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌱 소아청소년 뇌신경 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#e0f2fe" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7">
        비염 약 먹여도 안 낫는 아이의 킁킁·음음 소리
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0c2340" letter-spacing="-1.5">
      소아 킁킁 음성틱 원인과
    </text>
    <text x="55" y="205" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0284c7" letter-spacing="-1.5">
      한방 치료 회복 로드맵
    </text>

    <!-- 3 Core Points Box Container -->
    <g transform="translate(55, 245)">
      
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="140" rx="20" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="25" y="28" width="80" height="34" rx="8" fill="#0284c7" />
        <text x="65" y="51" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">포인트 1</text>
        <text x="125" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">비염 vs 음성 틱 감별 (잠잘 때 소리 멈춤)</text>
        <text x="25" y="98" font-family="${fontFamilies}" font-size="17" fill="#475569">
          콧물·가래 없이 마른 헛기침 반복, 대뇌 이완 시 소리가 100% 멈추는 특징
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="140" rx="20" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="25" y="28" width="80" height="34" rx="8" fill="#0284c7" />
        <text x="65" y="51" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">포인트 2</text>
        <text x="125" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">뇌 기저핵 흥분 완화 &amp; 1:1 맞춤 한약</text>
        <text x="25" y="98" font-family="${fontFamilies}" font-size="17" fill="#475569">
          성대 근육을 자극하는 신경 과흥분을 억제하고 체질별 울열·담음 해소
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="140" rx="20" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="25" y="28" width="80" height="34" rx="8" fill="#0284c7" />
        <text x="65" y="51" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">포인트 3</text>
        <text x="125" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">지적 금지 &amp; 두뇌 감각 통합 훈련</text>
        <text x="25" y="98" font-family="${fontFamilies}" font-size="17" fill="#475569">
          주의·지적으로 인한 긴장 악화 차단, NeuronFlex 뇌파 훈련 병행
        </text>
      </g>

    </g>

    <!-- Bottom Footer Profile Bar -->
    <g transform="translate(55, 730)">
      <rect x="0" y="0" width="860" height="90" rx="18" fill="#0c2340" />
      <circle cx="55" cy="45" r="28" fill="#0284c7" />
      <text x="55" y="54" font-family="${fontFamilies}" font-size="24" fill="#ffffff" text-anchor="middle">🏥</text>
      
      <text x="100" y="40" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff">
        해아림한의원 인천부평점
      </text>
      <text x="100" y="66" font-family="${fontFamilies}" font-size="15" fill="#94a3b8">
        한방침구과 전문의 권형근 대표원장 | 부평역 7번 출구
      </text>

      <rect x="690" y="22" width="145" height="46" rx="12" fill="#0284c7" />
      <text x="762" y="51" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">1:1 맞춤 진료</text>
    </g>

  </g>
</svg>
  `;
}

function renderSvgToPng(svgString, outputPath) {
  const resvg = new Resvg(svgString, {
    fitTo: {
      mode: 'width',
      value: 1080
    }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(outputPath, pngBuffer);
  console.log(`✅ 이미지 생성 완료: ${outputPath}`);
}

const mainSvg = generateMainThumbnail();

// Output paths
const outputPaths = [
  'c:/Users/PC/Downloads/home/static/blog-images/sniffing-tic-treatment-recovery-process/01_naver_main_thumbnail.jpg',
  'c:/Users/PC/Downloads/home/static/blog-images/sniffing-tic-treatment-recovery-process.jpg'
];

for (const p of outputPaths) {
  renderSvgToPng(mainSvg, p);
}

console.log('🎉 썸네일 이미지 생성 성공!');
