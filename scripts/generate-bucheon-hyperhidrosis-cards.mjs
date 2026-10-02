import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-sangdong-hyperhidrosis',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091b24" />
      <stop offset="50%" stop-color="#0d2e29" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-235" y="0" width="470" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">💧 자율신경 &amp; 긴장성 다한증 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        긴장만 하면 손발이 축축해지고 흥건할 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 상동 긴장성 수족다한증 원인과 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38544c" letter-spacing="-0.5">
      교감신경 과열 · 심음부족 · 긴장성 식은땀의 1:1 근본 해법
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
          땀샘 문제가 아닌 '흉부 교감신경' 과흥분 상태
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          긴장·불안 신호가 흉부 자율신경절을 자극하여 손발 말초 땀샘 스위치를 과각성
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          상열하한(上熱下寒)과 심음부족(心陰不足)의 불균형
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          심장 진액 부족으로 상체와 손발로 치솟는 허열(虛熱)을 식히는 근본 원인 치료
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          예기불안 악순환 차단 및 1:1 맞춤 한방 치료
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          보상성 부작용 걱정 없이 자율신경 밸런스를 바로잡아 스스로 땀을 조절하는 힘 회복
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

// 2. CHAPTER 01: 3대 오해와 함정
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091b24" />
      <stop offset="50%" stop-color="#0d2e29" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🔍 CHAPTER 01. 3대 오해와 함정</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="220" height="36" rx="8" fill="#fee2e2" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c">
        ⚠️ 치료를 늦추는 잘못된 상식
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      수족다한증, 왜 바르는 약만으로 안 나을까?
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      단순히 피부 땀구멍만 막아서는 자율신경 과흥분을 해결할 수 없습니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2eee8" stroke-width="2" />

    <!-- 3 Misconceptions Blocks -->
    <g transform="translate(55, 230)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#fee2e2" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          오해 1. "땀 억제제나 보톡스로 땀구멍만 막으면 된다?"
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569" leading="1.5">
          👉 땀구멍을 강제로 막으면 다른 부위(등·가슴·엉덩이)로 땀이 쏟아지는
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
          '보상성 다한증'이 유발될 수 있어 체내 열 조절 중추를 다스려야 합니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#fee2e2" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          오해 2. "체질상 몸에 열이 많아 더워서 흘리는 땀이다?"
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          👉 긴장성 다한증은 체온 조절 땀과 달리, 춥거나 시원한 곳에서도
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
          대인관계·시험·발표 등 '정신적 스트레스'에 반응하여 쏟아지는 자율신경성 땀입니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#fee2e2" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          오해 3. "마음을 편하게 먹고 의지로 참으면 낫는다?"
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          👉 "땀나면 어쩌지?"라는 의식 자체가 편도체를 자극해 땀을 더 폭발시키는
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
          예기불안 악순환이 발생하므로 신경계의 긴장 역치를 낮추는 치료가 필수적입니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#f1f5f9" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155" text-anchor="middle">
        💡 해아림 한방치료는 땀샘 억제가 아닌 '과열된 자율신경 브레이크'를 복원합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. CHAPTER 02: 왜 안 나았을까? 3대 심층 원인
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091b24" />
      <stop offset="50%" stop-color="#0d2e29" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-220" y="0" width="440" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🔬 CHAPTER 02. 왜 안 나았을까? 3대 원인</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="310" height="36" rx="8" fill="#e0f2fe" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1">
        🧠 자율신경계 &amp; 한의학적 기전 분석
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      손발 식은땀을 부르는 3가지 핵심 기전
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      겉으로 보이는 땀 뒤편에는 3가지 신경·체질적 불균형이 자리 잡고 있습니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2eee8" stroke-width="2" />

    <!-- 3 Deep Mechanism Blocks -->
    <g transform="translate(55, 230)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dcfce7" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">01</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#14532d">
          흉부 교감신경절 과흥분 (땀샘 온·오프 스위치 고장)
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 사소한 긴장이나 감정 자극에도 흉부 T2~T4 교감신경절이 과각성
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 손바닥·발바닥 에크린 땀샘으로 아세틸콜린 신경전달물질이 폭발적 분비
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dcfce7" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">02</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#14532d">
          심음부족(心陰不足)과 상열하한(上熱下寒)
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 심장의 진액과 음혈(陰血)이 소모되어 열을 식히는 냉각수가 고갈된 상태
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 하체와 복부는 차가운데 상체와 손발로만 허열(虛熱)이 치솟아 식은땀 유발
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dcfce7" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">03</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#14532d">
          편도체 불안 회로의 '조건반사적 각성'
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • "악수할 때 축축하면 어쩌지?", "시험지 젖으면 어쩌지?"라는 예기불안
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 뇌 편도체가 위험 상황으로 오작동하여 자율신경 과흥분을 증폭시킴
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#e6f7f3" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e" text-anchor="middle">
        🌿 3가지 원인을 동시에 바로잡아야 보상성 부작용 없는 온전한 회복이 가능합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. CHAPTER 03: 3단계 회복 로드맵
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091b24" />
      <stop offset="50%" stop-color="#0d2e29" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">✨ CHAPTER 03. 3단계 회복 로드맵 &amp; 맞춤 치료</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="310" height="36" rx="8" fill="#e6f7f3" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        🏥 해아림 1:1 자율신경 맞춤 한방 솔루션
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      교감신경 진정부터 두뇌 자생력 회복까지
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      단계별 한약 처방과 침구·두뇌 훈련으로 자율신경 밸런스를 정상화합니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2eee8" stroke-width="2" />

    <!-- 3 Step Roadmap Blocks -->
    <g transform="translate(55, 230)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#0f766e" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 1</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
          급성 교감신경 과흥분 진정 &amp; 흉부 열(熱) 배출
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 신문(神門)·내관(內關)·노궁(勞宮)혈 정밀 자침으로 긴장 완화
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 사역산(四逆散)·황련해독탕 가감 처방으로 가슴의 맺힌 열과 긴장성 땀 1차 제어
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#0d9488" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 2</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
          심음(心陰) 보강 &amp; 수승화강(水昇火降) 순환 회복
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 귀비탕(歸脾湯)·천왕보심단 가감으로 심장의 진액을 채우고 허열 진정
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 척추·경추 교정 추나요법으로 흉곽 자율신경 신경망 압박 해소
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#059669" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 3</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
          편도체 안정 &amp; 두뇌 자생력 강화 (재발 방지)
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 첨단 뉴로피드백 &amp; 바이오피드백 훈련으로 뇌파 안정성 및 스트레스 저항력 극대화
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 예기불안 회로를 근본적으로 끊어내어 치료 종료 후에도 안정 상태 유지
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0f2922" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        🛡️ 식약처 규격 hGMP 인증 안심한약재만 엄선하여 원내에서 1:1 맞춤 조제합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. CHAPTER 04: 환자·가족 3대 행동 수칙
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091b24" />
      <stop offset="50%" stop-color="#0d2e29" />
      <stop offset="100%" stop-color="#061817" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 CHAPTER 04. 일상 속 실천 3대 수칙</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="280" height="36" rx="8" fill="#e6f7f3" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        💡 스스로 실천하는 자율신경 관리 루틴
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      손발 식은땀을 줄이는 3가지 생활 요법
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      일상 속 작은 습관 변화가 교감신경 흥분을 가라앉히는 든든한 밑거름이 됩니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2eee8" stroke-width="2" />

    <!-- 3 Action Habits Blocks -->
    <g transform="translate(55, 230)">
      <!-- Habit 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 1. 긴장 순간 '4-7-8 이완 호흡'으로 교감신경 다운
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 4초간 코로 들이마시고, 7초간 숨을 멈춘 뒤, 8초간 입으로 천천히 내쉬기
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 횡격막 미주신경을 활성화하여 1~2분 만에 손발로 가는 과각성 신호를 차단
        </text>
      </g>

      <!-- Habit 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 2. 취침 전 38~40℃ 족욕으로 '상열하한' 개선
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 자기 전 15~20분간 따뜻한 물에 발을 담가 하체 혈류 순환을 촉진
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 상체로 몰린 열을 아래로 끌어내려 손발 긴장성 땀과 야간 식은땀 완화
        </text>
      </g>

      <!-- Habit 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 3. 교감신경 흥분제(카페인·알코올·스마트폰) 엄격 차단
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 커피·에너지음료의 고카페인은 교감신경을 즉각 자극해 땀샘을 개방시킵니다.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 취침 1시간 전 스마트폰 블루라이트를 차단하여 멜라토닌과 자율신경 안정 유도
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0f2922" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        🌱 손발 다한증은 혼자 끙끙 앓는 질환이 아닙니다. 자율신경의 균형을 되찾아보세요.
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
  
  // Convert PNG to high quality JPEG
  const jpgBuffer = await sharp(pngData).jpeg({ quality: 95 }).toBuffer();

  for (const dir of targetDirs) {
    const fullPath = path.join(dir, filename);
    fs.writeFileSync(fullPath, jpgBuffer);
    console.log(`Saved: ${fullPath}`);
  }
}

async function main() {
  console.log('Rendering 5 Card News for Bucheon Sangdong Hyperhidrosis...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
