import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const bucheonTicDir = path.join(rootDir, 'static', 'blog-images', 'bucheon-tic');
const rootBlogImagesDir = path.join(rootDir, 'static', 'blog-images');

[bucheonTicDir, rootBlogImagesDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const fontFamilies = "'Malgun Gothic', '맑은 고딕', 'Pretendard', -apple-system, sans-serif";

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .trim();
}

// 1. 01_naver_main_thumbnail.jpg
function generateCard1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06221e" />
      <stop offset="100%" stop-color="#0c3830" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 72)">
    <rect x="-240" y="-24" width="480" height="48" rx="24" fill="#0d9488" />
    <text x="0" y="8" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}" letter-spacing="-0.02em">
      🌿 소아청소년 &amp; 성인 틱장애 클리닉
    </text>
  </g>

  <!-- White Main Container -->
  <g filter="url(#shadow)">
    <rect x="54" y="126" width="972" height="900" rx="36" fill="#ffffff" />
  </g>

  <!-- Sub Hook -->
  <g transform="translate(108, 172)">
    <rect x="0" y="0" width="864" height="46" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
    <text x="24" y="30" font-size="18.5" font-weight="bold" fill="#047857" font-family="${fontFamilies}">
      아이의 눈 깜빡임 · 킁킁거림 "혼내거나 참으라 하지 마세요"
    </text>
  </g>

  <!-- Main Title -->
  <g transform="translate(108, 268)">
    <text font-size="38" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}" letter-spacing="-0.03em">
      부천 틱장애 한의원 맞춤 치료 가이드
    </text>
  </g>

  <g transform="translate(108, 314)">
    <text font-size="20" font-weight="bold" fill="#334155" font-family="${fontFamilies}">
      뇌 기저핵 흥분을 가라앉히고 두뇌 자생력을 키우는 1:1 한방 치료 솔루션
    </text>
  </g>

  <line x1="108" y1="346" x2="972" y2="346" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="6,6" />

  <!-- 3 Steps -->
  <g transform="translate(108, 372)">
    <rect x="0" y="0" width="864" height="128" rx="18" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="1.5" />
    <circle cx="64" cy="64" r="28" fill="#0d9488" />
    <text x="64" y="73" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">1</text>
    <text x="120" y="52" font-size="20" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">01. 기저핵 운동 억제 회로 &amp; 감각 과민 진단</text>
    <text x="120" y="86" font-size="15.5" font-weight="normal" fill="#475569" font-family="${fontFamilies}">의지의 문제가 아닌 두뇌 피질-기저핵 성장 불균형 정밀 평가</text>
  </g>

  <g transform="translate(108, 520)">
    <rect x="0" y="0" width="864" height="128" rx="18" fill="#fefce8" stroke="#fef08a" stroke-width="1.5" />
    <circle cx="64" cy="64" r="28" fill="#d97706" />
    <text x="64" y="73" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">2</text>
    <text x="120" y="52" font-size="20" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">02. 평간식풍(平肝熄風) 순한 맞춤 한약 &amp; 약침</text>
    <text x="120" y="86" font-size="15.5" font-weight="normal" fill="#475569" font-family="${fontFamilies}">과흥분된 두뇌 열감을 내리고 기저핵 성장과 안정 유도</text>
  </g>

  <g transform="translate(108, 668)">
    <rect x="0" y="0" width="864" height="128" rx="18" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
    <circle cx="64" cy="64" r="28" fill="#2563eb" />
    <text x="64" y="73" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">3</text>
    <text x="120" y="52" font-size="20" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">03. 두개천골 CST &amp; 무통 자침 &amp; 뉴로피드백</text>
    <text x="120" y="86" font-size="15.5" font-weight="normal" fill="#475569" font-family="${fontFamilies}">상부경추 이완 및 두뇌 신경망 밸런스 훈련으로 재발 차단</text>
  </g>

  <!-- Footer -->
  <g transform="translate(108, 826)">
    <rect x="0" y="0" width="864" height="64" rx="16" fill="#0f172a" />
    <text x="432" y="39" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">
      해아림한의원 인천부평점 · 대표원장 권형근 (부평역 7번 출구 도보 5분 ｜ 032-719-3472)
    </text>
  </g>
</svg>
  `.trim();
}

// 2. 02_point1_cause.jpg (POINT 01 원인 분석)
function generateCard2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06221e" />
      <stop offset="100%" stop-color="#0c3830" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 72)">
    <rect x="-240" y="-24" width="480" height="48" rx="24" fill="#0d9488" />
    <text x="0" y="8" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">
      🔍 POINT 01. 틱장애 원인 분석
    </text>
  </g>

  <g filter="url(#shadow)">
    <rect x="54" y="126" width="972" height="900" rx="36" fill="#ffffff" />
  </g>

  <g transform="translate(108, 172)">
    <rect x="0" y="0" width="864" height="46" rx="10" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
    <text x="24" y="30" font-size="18" font-weight="bold" fill="#b91c1c" font-family="${fontFamilies}">
      "틱은 나쁜 버릇이 아닙니다! 뇌 기저핵의 브레이크 조절 기능 미성숙입니다"
    </text>
  </g>

  <g transform="translate(108, 260)">
    <text font-size="34" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">
      기저핵(Basal Ganglia)의 운동 제어 불균형
    </text>
    <text x="0" y="44" font-size="19" font-weight="normal" fill="#475569" font-family="${fontFamilies}">
      불필요한 움직임을 걸러내는 뇌 속 거름망 회로의 일시적 과부하
    </text>
  </g>

  <!-- 3 Cause Boxes -->
  <g transform="translate(108, 360)">
    <rect x="0" y="0" width="864" height="135" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
    <rect x="20" y="20" width="95" height="95" rx="14" fill="#fee2e2" />
    <text x="67" y="78" font-size="32" font-weight="bold" fill="#dc2626" text-anchor="middle" font-family="${fontFamilies}">01</text>
    <text x="135" y="54" font-size="20" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">전두엽-기저핵 운동 조절 루프 미성숙</text>
    <text x="135" y="88" font-size="15.5" font-weight="normal" fill="#475569" font-family="${fontFamilies}">신체 근육의 미세한 움직임을 억제하는 브레이크 기능이 아직 덜 성숙한 상태</text>
  </g>

  <g transform="translate(108, 515)">
    <rect x="0" y="0" width="864" height="135" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
    <rect x="20" y="20" width="95" height="95" rx="14" fill="#fef3c7" />
    <text x="67" y="78" font-size="32" font-weight="bold" fill="#d97706" text-anchor="middle" font-family="${fontFamilies}">02</text>
    <text x="135" y="54" font-size="20" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">전조감각충동 (Premonitory Urge)</text>
    <text x="135" y="88" font-size="15.5" font-weight="normal" fill="#475569" font-family="${fontFamilies}">목이나 눈가가 답답하고 간지러워 틱 동작을 해야만 시원해지는 뇌 감각 신호</text>
  </g>

  <g transform="translate(108, 670)">
    <rect x="0" y="0" width="864" height="135" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
    <rect x="20" y="20" width="95" height="95" rx="14" fill="#e0e7ff" />
    <text x="67" y="78" font-size="32" font-weight="bold" fill="#4f46e5" text-anchor="middle" font-family="${fontFamilies}">03</text>
    <text x="135" y="54" font-size="20" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">환경적 자극 &amp; 스트레스에 의한 증폭</text>
    <text x="135" y="88" font-size="15.5" font-weight="normal" fill="#475569" font-family="${fontFamilies}">새 학기, 시험, 스마트폰 과몰입, 부모님의 잦은 지적으로 증상이 급격히 악화</text>
  </g>

  <!-- Footer -->
  <g transform="translate(108, 830)">
    <rect x="0" y="0" width="864" height="60" rx="14" fill="#0f172a" />
    <text x="432" y="37" font-size="16.5" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">
      해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
    </text>
  </g>
</svg>
  `.trim();
}

// 3. 03_point2_checklist.jpg (POINT 02 자가진단 체크리스트)
function generateCard3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06221e" />
      <stop offset="100%" stop-color="#0c3830" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 72)">
    <rect x="-240" y="-24" width="480" height="48" rx="24" fill="#0d9488" />
    <text x="0" y="8" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">
      📋 POINT 02. 틱장애 자가진단
    </text>
  </g>

  <g filter="url(#shadow)">
    <rect x="54" y="126" width="972" height="900" rx="36" fill="#ffffff" />
  </g>

  <g transform="translate(108, 172)">
    <rect x="0" y="0" width="864" height="46" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
    <text x="24" y="30" font-size="18" font-weight="bold" fill="#047857" font-family="${fontFamilies}">
      우리 아이 틱 증상 5대 체크리스트 (2개 이상 해당 시 정밀 상담 권장)
    </text>
  </g>

  <g transform="translate(108, 255)">
    <!-- Item 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="864" height="92" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <circle cx="45" cy="46" r="20" fill="#0d9488" />
      <text x="45" y="54" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">✓</text>
      <text x="85" y="42" font-size="18.5" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">눈을 깜빡이거나 눈동자를 위아래로 치켜뜨는 행동을 반복한다</text>
      <text x="85" y="68" font-size="14.5" font-weight="normal" fill="#64748b" font-family="${fontFamilies}">가장 흔한 초기 단순 운동 틱 증상 (안과 진료 후에도 지속)</text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(0, 110)">
      <rect x="0" y="0" width="864" height="92" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <circle cx="45" cy="46" r="20" fill="#0d9488" />
      <text x="45" y="54" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">✓</text>
      <text x="85" y="42" font-size="18.5" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">감기나 비염이 없는데도 "킁킁, 음음, 헛기침" 소리를 낸다</text>
      <text x="85" y="68" font-size="14.5" font-weight="normal" fill="#64748b" font-family="${fontFamilies}">이비인후과 약을 복용해도 호전되지 않는 단순 음성 틱</text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(0, 220)">
      <rect x="0" y="0" width="864" height="92" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <circle cx="45" cy="46" r="20" fill="#0d9488" />
      <text x="45" y="54" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">✓</text>
      <text x="85" y="42" font-size="18.5" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">고개를 앞뒤로 젖히거나 어깨를 으쓱거리는 동작을 한다</text>
      <text x="85" y="68" font-size="14.5" font-weight="normal" fill="#64748b" font-family="${fontFamilies}">눈에서 얼굴 ➔ 목 ➔ 어깨 ➔ 몸통으로 진행되는 양상</text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(0, 330)">
      <rect x="0" y="0" width="864" height="92" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <circle cx="45" cy="46" r="20" fill="#0d9488" />
      <text x="45" y="54" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">✓</text>
      <text x="85" y="42" font-size="18.5" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">긴장하거나 피곤할 때, 스마트폰 볼 때 증상이 더 잦아진다</text>
      <text x="85" y="68" font-size="14.5" font-weight="normal" fill="#64748b" font-family="${fontFamilies}">좋아하는 활동에 몰입할 때는 줄어들고 이완 시 반동 발생</text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(0, 440)">
      <rect x="0" y="0" width="864" height="92" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <circle cx="45" cy="46" r="20" fill="#0d9488" />
      <text x="45" y="54" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">✓</text>
      <text x="85" y="42" font-size="18.5" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">지적하거나 못 하게 하면 잠깐 참다가 더 폭발적으로 한다</text>
      <text x="85" y="68" font-size="14.5" font-weight="normal" fill="#64748b" font-family="${fontFamilies}">의지 통제가 불가능한 틱장애의 가장 전형적인 특징</text>
    </g>
  </g>

  <!-- Footer -->
  <g transform="translate(108, 830)">
    <rect x="0" y="0" width="864" height="60" rx="14" fill="#0f172a" />
    <text x="432" y="37" font-size="16.5" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">
      해아림한의원 인천부평점 · 1:1 맞춤 소아청소년 두뇌 클리닉
    </text>
  </g>
</svg>
  `.trim();
}

// 4. 04_point3_treatment.jpg (POINT 03 맞춤 한방 치료 - 3단 와이드 카드)
function generateCard4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06221e" />
      <stop offset="100%" stop-color="#0c3830" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Header Badge -->
  <g transform="translate(540, 72)">
    <rect x="-240" y="-24" width="480" height="48" rx="24" fill="#0d9488" />
    <text x="0" y="8" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">
      🩺 POINT 03. 1:1 맞춤 한방 치료
    </text>
  </g>

  <!-- Main White Box -->
  <g filter="url(#shadow)">
    <rect x="54" y="126" width="972" height="900" rx="36" fill="#ffffff" />
  </g>

  <g transform="translate(108, 172)">
    <rect x="0" y="0" width="864" height="46" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
    <text x="24" y="30" font-size="18" font-weight="bold" fill="#047857" font-family="${fontFamilies}">
      강제 억제가 아닌 두뇌 자생력을 키우는 해아림 3대 통합 치료 솔루션
    </text>
  </g>

  <!-- 3 Big Horizontal Treatment Cards -->
  <g transform="translate(108, 255)">
    <!-- Solution 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="864" height="175" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
      <rect x="25" y="25" width="125" height="125" rx="16" fill="#dcfce7" />
      <circle cx="87" cy="87" r="34" fill="#16a34a" />
      <text x="87" y="99" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">01</text>
      
      <text x="175" y="58" font-size="22" font-weight="bold" fill="#14532d" font-family="${fontFamilies}">체질 맞춤 한약 처방 (평간식풍 · 청열안신)</text>
      <text x="175" y="96" font-size="16.5" font-weight="normal" fill="#334155" font-family="${fontFamilies}">• 억간산 · 온담탕 가감방으로 과흥분된 기저핵의 신경 열감 진정</text>
      <text x="175" y="128" font-size="16.5" font-weight="normal" fill="#334155" font-family="${fontFamilies}">• 졸림·무기력 없는 순한 천연 생약으로 뇌 신경망의 자생적 성숙 유도</text>
    </g>

    <!-- Solution 2 -->
    <g transform="translate(0, 195)">
      <rect x="0" y="0" width="864" height="175" rx="18" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <rect x="25" y="25" width="125" height="125" rx="16" fill="#dbeafe" />
      <circle cx="87" cy="87" r="34" fill="#2563eb" />
      <text x="87" y="99" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">02</text>
      
      <text x="175" y="58" font-size="22" font-weight="bold" fill="#1e3a8a" font-family="${fontFamilies}">무통 자침 &amp; 뇌신경 약침 치료 (소아 전용)</text>
      <text x="175" y="96" font-size="16.5" font-weight="normal" fill="#334155" font-family="${fontFamilies}">• 통증 없는 무통 자침(스티커침)으로 아이 거부감 없는 편안한 치료</text>
      <text x="175" y="128" font-size="16.5" font-weight="normal" fill="#334155" font-family="${fontFamilies}">• 백회 · 풍지 · 신문혈을 자극하여 뇌 혈류 순환 및 신경전달물질 안정화</text>
    </g>

    <!-- Solution 3 -->
    <g transform="translate(0, 390)">
      <rect x="0" y="0" width="864" height="175" rx="18" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5" />
      <rect x="25" y="25" width="125" height="125" rx="16" fill="#f3e8ff" />
      <circle cx="87" cy="87" r="34" fill="#9333ea" />
      <text x="87" y="99" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">03</text>
      
      <text x="175" y="58" font-size="22" font-weight="bold" fill="#581c87" font-family="${fontFamilies}">두개천골 CST &amp; 뉴로피드백 두뇌 훈련</text>
      <text x="175" y="96" font-size="16.5" font-weight="normal" fill="#334155" font-family="${fontFamilies}">• 상부 경추 정렬 및 뇌척수액 순환을 촉진해 목·어깨 신체 긴장 완화</text>
      <text x="175" y="128" font-size="16.5" font-weight="normal" fill="#334155" font-family="${fontFamilies}">• 뇌파 자가조절 훈련으로 전두엽-기저핵의 자율 억제 회로를 강화해 재발 차단</text>
    </g>
  </g>

  <!-- Footer -->
  <g transform="translate(108, 830)">
    <rect x="0" y="0" width="864" height="60" rx="14" fill="#0f172a" />
    <text x="432" y="37" font-size="16.5" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">
      해아림한의원 인천부평점 · 대표원장 권형근 (부평역 7번 출구)
    </text>
  </g>
</svg>
  `.trim();
}

// 5. 05_point4_selfcare.jpg (POINT 04 생활 속 실천 팁 - 약선차 제외)
function generateCard5() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06221e" />
      <stop offset="100%" stop-color="#0c3830" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 72)">
    <rect x="-240" y="-24" width="480" height="48" rx="24" fill="#0d9488" />
    <text x="0" y="8" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">
      💡 POINT 04. 생활 속 힐링 실천 팁
    </text>
  </g>

  <g filter="url(#shadow)">
    <rect x="54" y="126" width="972" height="900" rx="36" fill="#ffffff" />
  </g>

  <g transform="translate(108, 172)">
    <rect x="0" y="0" width="864" height="46" rx="10" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
    <text x="24" y="30" font-size="18" font-weight="bold" fill="#047857" font-family="${fontFamilies}">
      가정에서 부모님이 실천하는 3가지 두뇌 안정 환경 루틴
    </text>
  </g>

  <!-- 3 Action Blocks -->
  <g transform="translate(108, 255)">
    <!-- Tip 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="864" height="175" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <rect x="25" y="25" width="125" height="125" rx="16" fill="#ecfdf5" />
      <circle cx="87" cy="87" r="34" fill="#059669" />
      <text x="87" y="99" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">01</text>
      
      <text x="175" y="58" font-size="22" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">절대 지적하거나 눈치 주지 않는 '무관심 훈육'</text>
      <text x="175" y="96" font-size="16" font-weight="normal" fill="#475569" font-family="${fontFamilies}">• "그만해", "왜 또 그래?" 지적은 아이의 뇌 편도체에 불안을 가중시킵니다.</text>
      <text x="175" y="128" font-size="16" font-weight="normal" fill="#475569" font-family="${fontFamilies}">• 억제 반동으로 틱이 2~3배 악화되므로 모른 척 자연스럽게 넘겨주세요.</text>
    </g>

    <!-- Tip 2 -->
    <g transform="translate(0, 195)">
      <rect x="0" y="0" width="864" height="175" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <rect x="25" y="25" width="125" height="125" rx="16" fill="#eff6ff" />
      <circle cx="87" cy="87" r="34" fill="#2563eb" />
      <text x="87" y="99" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">02</text>
      
      <text x="175" y="58" font-size="22" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">취침 2시간 전 스마트폰 · 전자기기 완벽 차단</text>
      <text x="175" y="96" font-size="16" font-weight="normal" fill="#475569" font-family="${fontFamilies}">• 빠른 화면 전환과 강한 블루라이트는 도파민을 과다 분비시켜 기저핵을 흥분시킵니다.</text>
      <text x="175" y="128" font-size="16" font-weight="normal" fill="#475569" font-family="${fontFamilies}">• 대신 보드게임, 가벼운 신체 놀이, 독서 대화 시간을 늘려주세요.</text>
    </g>

    <!-- Tip 3 -->
    <g transform="translate(0, 390)">
      <rect x="0" y="0" width="864" height="175" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <rect x="25" y="25" width="125" height="125" rx="16" fill="#fefce8" />
      <circle cx="87" cy="87" r="34" fill="#d97706" />
      <text x="87" y="99" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">03</text>
      
      <text x="175" y="58" font-size="22" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}">목 · 어깨 온열 찜질 &amp; 취침 90분 전 족욕 루틴</text>
      <text x="175" y="96" font-size="16" font-weight="normal" fill="#475569" font-family="${fontFamilies}">• 40℃ 따뜻한 물에 15분간 발을 담그면 상체로 치솟은 허열(上熱)이 내려갑니다.</text>
      <text x="175" y="128" font-size="16" font-weight="normal" fill="#475569" font-family="${fontFamilies}">• 부교감신경이 활성화되어 밤사이 뇌파가 안정되고 깊은 숙면을 취하게 됩니다.</text>
    </g>
  </g>

  <!-- Footer -->
  <g transform="translate(108, 830)">
    <rect x="0" y="0" width="864" height="60" rx="14" fill="#0f172a" />
    <text x="432" y="37" font-size="16.5" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">
      해아림한의원 인천부평점 · 대표원장 권형근 (부평역 7번 출구)
    </text>
  </g>
</svg>
  `.trim();
}

function renderSvgToPng(svg, outputPath) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      fontDirs: ['C:\\Windows\\Fonts'],
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });
  const pngBuffer = resvg.render().asPng();
  fs.writeFileSync(outputPath, pngBuffer);
  return pngBuffer;
}

async function run() {
  console.log('🚀 [부천 틱장애] 고화질 5종 카드뉴스 렌더링 시작...');

  const cards = [
    { svg: generateCard1(), filename: '01_naver_main_thumbnail.jpg' },
    { svg: generateCard2(), filename: '02_point1_cause.jpg' },
    { svg: generateCard3(), filename: '03_point2_checklist.jpg' },
    { svg: generateCard4(), filename: '04_point3_treatment.jpg' },
    { svg: generateCard5(), filename: '05_point4_selfcare.jpg' }
  ];

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const path1 = path.join(bucheonTicDir, card.filename);
    const path2 = path.join(rootBlogImagesDir, card.filename);

    renderSvgToPng(card.svg, path1);
    fs.copyFileSync(path1, path2);
    console.log(`✅ [${i + 1}/5] 생성 완료: ${card.filename}`);
  }

  console.log('\n🎉 부천 틱장애 전용 5종 고화질 카드뉴스 생성 및 저장 완료!');
}

run().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
