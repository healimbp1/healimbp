import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-okgil-child-tic-eyeblink',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (A타입 정석 가이드형)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f291e" />
      <stop offset="50%" stop-color="#1b4332" />
      <stop offset="100%" stop-color="#081c15" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌱 소아청소년 두뇌 &amp; 틱장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="580" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        아이 눈 깜빡임·코 찡긋거림, 버릇이 아닙니다
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="43" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 옥길동 어린이 틱장애 초기 증상 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38544c" letter-spacing="-0.5">
      두뇌 기저핵 불균형 · 간풍내동 해소 · 1:1 맞춤 한방 가이드
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2eee8" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          단순 습관이 아닌 '뇌 기저핵 조절 미숙'
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          의도하지 않은 불필요한 근육 움직임을 걸러내지 못하는 두뇌 신경 발달의 문제
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          지적할수록 악화되는 '전두엽 억제 압박'
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          "그만해"라는 지적은 아이에게 스트레스(간화)를 유발하여 틱을 폭발시킵니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          순수 안심한약 &amp; 감각통합 두뇌 훈련
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          간풍(肝風)을 가라앉히고 뇌 성장을 도와 만성화 및 뚜렛 진행을 완벽 차단
        </text>
      </g>
    </g>

    <!-- Bottom Clinic Info Bar -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="72" rx="16" fill="#0f2922" />
      <text x="40" y="44" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#a7f3d0">
        해아림한의원 인천부평점
      </text>
      <text x="820" y="44" font-family="${fontFamilies}" font-size="17" fill="#e2ece7" text-anchor="end">
        한방침구과 전문의 권형근 대표원장 1:1 직접 진료
      </text>
    </g>
  </g>
</svg>`;
}

// 2. POINT 01: 원인기전 (기저핵 신호 불균형)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f291e" />
      <stop offset="50%" stop-color="#1b4332" />
      <stop offset="100%" stop-color="#081c15" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">💡 POINT 01. 소아 틱장애 원인기전</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="310" height="36" rx="8" fill="#e6f7f3" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        🧠 두뇌 발달 &amp; 한의학적 기전 분석
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      아이는 왜 눈을 깜빡이고 코를 찡긋할까요?
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      움직임을 통제하는 뇌 기저핵의 필터링 기능이 일시적으로 미숙해진 결과입니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2eee8" stroke-width="2" />

    <!-- 3 Mechanisms Blocks -->
    <g transform="translate(55, 230)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dcfce7" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">01</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#14532d">
          두뇌 기저핵(Basal Ganglia)의 신호 여과기능 이상
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 불필요한 근육 신호를 억제하고 걸러내는 기저핵-전두엽 회로의 성장이 지연됨
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 얼굴 근육으로 불필요한 운동 신호가 새어 나가 눈 깜빡임, 코 찡긋거림 발생
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dcfce7" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">02</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#14532d">
          간풍내동(肝風內動)과 열기(熱氣)의 상충
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 새 학기, 학원 과제, 스마트폰 과몰입으로 간(肝)에 스트레스 울열이 축적
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 바람(風)이 불면 나뭇가지가 흔들리듯, 아이의 신경계가 요동치며 경련성 틱 유발
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dcfce7" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">03</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#14532d">
          감각충동(Premonitory Urge)과 찝찝함
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 눈이나 코 주위가 간질간질하고 답답해 틱을 해야만 비로소 시원함을 느낌
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 야단치면 억지로 참다가 혼자 있을 때 틱이 2배로 폭발하는 특성을 보임
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0f2922" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        💡 틱은 혼내서 고치는 버릇이 아니라, 두뇌 성장을 도와 바로잡는 질환입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. POINT 02: 자가진단 체크리스트
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f291e" />
      <stop offset="50%" stop-color="#1b4332" />
      <stop offset="100%" stop-color="#081c15" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">📋 POINT 02. 소아 틱장애 자가진단</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="36" rx="8" fill="#e6f7f3" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        ✓ 우리 아이 틱 증상 체크
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      소아 운동틱 &amp; 음성틱 자가진단 7문항
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      2개 이상 4주 이상 지속된다면 초기 진단 및 뇌신경 밸런스 치료가 필요합니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2eee8" stroke-width="2" />

    <!-- 7 Checklist Items -->
    <g transform="translate(55, 230)">
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2ece7" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dcfce7" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">1. TV나 스마트폰을 볼 때, 집중할 때 유독 눈을 강하게 깜빡인다.</text>
      </g>

      <g transform="translate(0, 75)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2ece7" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dcfce7" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">2. 코를 찡긋거리거나 입을 씰룩거리고 턱을 앞으로 내미는 동작을 한다.</text>
      </g>

      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2ece7" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dcfce7" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">3. 목을 뒤로 젖히거나 어깨를 으쓱거리는 동작이 점점 아래로 내려온다.</text>
      </g>

      <g transform="translate(0, 225)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2ece7" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dcfce7" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">4. 비염이나 감기가 아닌데도 '음음', '킁킁', '켁켁' 소리를 반복한다.</text>
      </g>

      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2ece7" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dcfce7" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">5. 하지 말라고 주의를 주면 잠깐 참았다가 더 심하게 몰아서 한다.</text>
      </g>

      <g transform="translate(0, 375)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2ece7" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dcfce7" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">6. 긴장하거나 피곤할 때 증상이 심해지고, 편안하게 잘 때는 멈춘다.</text>
      </g>

      <g transform="translate(0, 450)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2ece7" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dcfce7" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">7. 눈 깜빡임이 멈추었다가 코 찡긋, 음음 소리 등 다른 형태로 변한다.</text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#e6f7f3" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e" text-anchor="middle">
        📊 증상이 눈에서 목·몸통으로 번지기 전, 골든타임 치료가 중요합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03: 1:1 맞춤 치료법
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f291e" />
      <stop offset="50%" stop-color="#1b4332" />
      <stop offset="100%" stop-color="#081c15" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">✨ POINT 03. 1:1 소아 틱장애 맞춤 솔루션</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="310" height="36" rx="8" fill="#e6f7f3" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        🏥 해아림 4-Step 두뇌 성장 한방 프로그램
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      졸림·부작용 없이 기저핵을 안정시키는 치료
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      순수 한약과 무통 침구치료, 두뇌 훈련으로 스스로 조절하는 힘을 기릅니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2eee8" stroke-width="2" />

    <!-- 4 Treatment Blocks -->
    <g transform="translate(55, 225)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#0f766e" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">1:1 맞춤 평간식풍(平肝熄風) 안심한약</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">억간산(抑肝散), 시호청간탕 가감으로 간의 흥분을 가라앉히고 뇌 성장을 촉진</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 130)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#0d9488" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">어린이 전용 무통 자석침 &amp; 레이저 침구</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">아프지 않은 스티커침과 레이저 자침으로 백회(百會), 태충(太衝) 혈자리를 안전 자극</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 260)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#059669" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">소아 경추·두개골 이완 소아 추나요법</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">긴장된 안면 신경과 상부 경추의 틀어짐을 바로잡아 뇌척수액 및 신경 순환 개선</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#10b981" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">4</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">IM 감각통합 &amp; 뉴로피드백 두뇌 훈련</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">타이밍 훈련과 뇌파 바이오피드백으로 기저핵과 전두엽의 억제 제어력을 영구 강화</text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="50" rx="12" fill="#0f2922" />
      <text x="430" y="32" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        🛡️ 식약처 hGMP 안심한약재 사용 · 한방침구과 전문의 권형근 대표원장 직접 진료
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04: 생활 속 실천팁 3가지 (약선차 제외)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f291e" />
      <stop offset="50%" stop-color="#1b4332" />
      <stop offset="100%" stop-color="#081c15" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 POINT 04. 틱 완화를 위한 부모 3대 수칙</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="280" height="36" rx="8" fill="#e6f7f3" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        💡 가정에서 꼭 지켜야 할 양육 가이드
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      아이의 틱을 줄이는 3가지 생활 요법
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      부모님의 편안한 태도가 아이 뇌신경계의 가장 강력한 치유제입니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2eee8" stroke-width="2" />

    <!-- 3 Action Habits Blocks -->
    <g transform="translate(55, 230)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 1. 증상 지적 금지 &amp; '자연스러운 무관심' 유지
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • "눈 깜빡이지 마", "코 왜 그래?"라는 지적은 아이에게 전두엽 과부하를 줌
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 틱을 할 때는 눈을 맞추지 말고 다른 놀이나 대화로 자연스럽게 주의를 전환
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 2. 스마트폰·게임·자극적 영상 미디어 엄격 차단
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 빠른 화면 전환과 시각 자극은 기저핵 도파민 분비를 교란해 틱을 폭증시킵니다.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 취침 전 미디어 사용을 금지하고 종이책 읽기나 조용한 보드게임으로 대체
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 3. 하루 30분 햇볕 아래 신체활동 &amp; 취침 전 마사지
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 줄넘기, 걷기, 자전거 등 대근육 운동으로 신체 에너지를 건강하게 발산
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 자기 전 아이의 어깨와 등, 종아리를 따뜻한 손으로 부드럽게 쓰다듬어 이완 유도
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0f2922" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        🌱 아이를 믿고 기다려주세요. 두뇌 균형이 잡히면 틱은 자연스럽게 멎습니다.
      </text>
    </g>
  </g>
</svg>`;
}

async function renderCard(svgStr, filename) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });
  const pngData = resvg.render().asPng();
  const jpgBuffer = await sharp(pngData).jpeg({ quality: 95 }).toBuffer();

  for (const dir of targetDirs) {
    const fullPath = path.join(dir, filename);
    fs.writeFileSync(fullPath, jpgBuffer);
    console.log(`Saved: ${fullPath}`);
  }
}

async function main() {
  console.log('Rendering 5 A-Type Card News for Bucheon Okgil Child Tic...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
