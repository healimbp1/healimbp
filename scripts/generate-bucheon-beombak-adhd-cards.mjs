import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-beombak-adhd',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (B타입 썸네일)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14213d" />
      <stop offset="50%" stop-color="#1b2a4a" />
      <stop offset="100%" stop-color="#0b132b" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-250" y="0" width="500" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🧠 소아청소년 ADHD &amp; 두뇌신경 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="600" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        산만함과 충동성, 단순 훈육 부족이 아닌 두뇌 브레이크 신호
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 범박동 소아청소년 ADHD 집중력 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38544c" letter-spacing="-0.5">
      전두엽 억제기능 미숙 · 도파민 불균형 · 1:1 맞춤 두뇌 조절 로드맵
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
          산만함은 '성격'이 아닌 전두엽 실행기능 저하
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          불필요한 자극을 걸러내고 행동을 멈추는 두뇌 브레이크 시스템의 미성숙
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          혼내고 다그칠수록 무너지는 아이의 자존감
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          지속적인 부정적 피드백은 2차 불안, 틱, 우울, 반항장애로 이어질 수 있습니다
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          3단계 맞춤 한약 &amp; 두뇌 훈련으로 자생력 완성
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          두뇌 과열 진정 → 전두엽 활성화 → 자기통제력 강화로 집중력과 자신감 회복
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
      <stop offset="0%" stop-color="#14213d" />
      <stop offset="50%" stop-color="#1b2a4a" />
      <stop offset="100%" stop-color="#0b132b" />
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
      <rect x="0" y="0" width="240" height="36" rx="8" fill="#fee2e2" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c">
        ⚠️ 부모님들이 흔히 하는 착각
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      ADHD, 왜 야단치고 혼내도 안 고쳐질까?
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      아이가 일부러 그러는 것이 아니라 두뇌 조절 신호가 오작동하기 때문입니다.
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
          오해 1. "어릴 때는 다 산만하지, 크면 저절로 낫는다?"
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          👉 미치료 시 70% 이상이 청소년기 학습 부진, 50%는 성인기 ADHD로 지속됩니다.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
          초등 학령기 전두엽 발달의 골든타임에 조기 치료적 개입이 필수적입니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#fee2e2" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          오해 2. "스마트폰이나 게임만 줄이고 버릇을 고치면 된다?"
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          👉 게임 몰입은 집중력이 좋은 것이 아니라 강력한 즉각 보상에 뇌가 끌리는 현상입니다.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
          스마트폰 금지만으로는 전두엽의 지속적 주의 집중력이 저절로 생기지 않습니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#fee2e2" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          오해 3. "의지력이 약하고 성의가 없어서 숙제를 안 끝낸다?"
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          👉 계획을 세우고 실행하며 충동을 참는 작업기억(Working Memory) 신경망의 피로입니다.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
          의지 부족으로 다그치면 아이는 자책감과 정서적 반항심만 키우게 됩니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#f1f5f9" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155" text-anchor="middle">
        💡 ADHD는 '나쁜 태도'가 아니라 '두뇌 신경망의 브레이크 기능 저하'입니다.
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
      <stop offset="0%" stop-color="#14213d" />
      <stop offset="50%" stop-color="#1b2a4a" />
      <stop offset="100%" stop-color="#0b132b" />
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
        🧠 소아 두뇌신경망 &amp; 전두엽 기전 해설
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      집중을 방해하는 3가지 심층 신경학적 기전
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      두뇌 신경계 내부의 3가지 불균형이 주의 통제를 무너뜨립니다.
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
          전두엽(Prefrontal Cortex) 실행기능 &amp; 브레이크 미성숙
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 행동을 멈추고 충동을 억제하는 전두엽 기저핵 회로의 성장 속도 지연
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 주변의 사소한 시청각 자극에 즉각 반응하여 주의가 쉽게 흩어짐
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dcfce7" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">02</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#14532d">
          도파민 · 노르에피네프린 신경전달 불균형
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 동기부여와 주의 유지에 필수적인 신경물질의 분비 및 재흡수 이상
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 지루하거나 지속적인 과제를 수행할 때 두뇌 보상회로가 쉽게 꺼짐
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dcfce7" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">03</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#14532d">
          심담허겁(心膽虛怯) &amp; 간양상항(肝陽上亢) 한의학적 기전
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 심장과 담의 기운이 약해 불안을 느끼거나, 간의 화기가 치솟아 두뇌 과열
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 상체로 쏠린 열감과 과각성 상태가 뇌간 신경계를 끊임없이 흥분시킴
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#e6f7f3" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e" text-anchor="middle">
        🌿 두뇌의 과열을 식히고 전두엽 기능을 깨워야 스스로 멈추는 힘이 생깁니다.
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
      <stop offset="0%" stop-color="#14213d" />
      <stop offset="50%" stop-color="#1b2a4a" />
      <stop offset="100%" stop-color="#0b132b" />
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
        🏥 해아림 1:1 소아청소년 ADHD 근본 치료
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      두뇌 과열 진정부터 전두엽 실행력 완성까지
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      맞춤 한약, 무통 침구 치료, 두뇌 훈련으로 스스로 조절하는 힘을 기릅니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2eee8" stroke-width="2" />

    <!-- 3 Step Blocks -->
    <g transform="translate(55, 230)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#0f766e" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 1</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
          두뇌 과열 진정 &amp; 뇌간 각성 조절 (충동성 완화)
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 억간산(抑肝散), 시호가용골모려탕(柴胡加龍骨牡蠣湯) 가감 처방으로 흥분 가라앉힘
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 태충(太衝), 신문(神門) 무통 자침으로 신경계 긴장 완화 및 숙면 유도
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#0d9488" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 2</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
          전두엽 활성화 &amp; 주의집중 신경망 강화
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 총명탕(聰明湯) 가감방 및 귀비탕(歸脾湯)으로 두뇌 기혈 순환 촉진
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 백회(百會), 사신총(四神聰) 두피 혈자리 자극으로 전두엽 혈류량 및 집중력 향상
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#059669" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 3</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
          자기통제력 완성 &amp; 두뇌 훈련 연계 (재발 방지)
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 뉴로피드백(Neurofeedback) 및 시청각 통합 훈련으로 뇌파 밸런스 확립
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 학업 스트레스 저항력을 높이고 아이 스스로 감정과 행동을 제어하는 자생력 완성
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0f2922" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        🛡️ 식약처 규격 hGMP 안심한약재만 사용 · 성장기 소아 맞춤 안심 처방
      </text>
    </g>
  </g>
</svg>`;
}

// 5. CHAPTER 04: 일상 속 실천 3대 수칙 (약선차 제외)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14213d" />
      <stop offset="50%" stop-color="#1b2a4a" />
      <stop offset="100%" stop-color="#0b132b" />
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 CHAPTER 04. ADHD 가정 내 3대 행동 수칙</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="280" height="36" rx="8" fill="#e6f7f3" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        💡 부모님이 함께하는 생활 환경 코칭
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      아이의 집중력을 키우는 3가지 양육 습관
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      작은 환경 변화와 지지가 전두엽 성장을 돕는 든든한 밑거름이 됩니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2eee8" stroke-width="2" />

    <!-- 3 Habits Blocks -->
    <g transform="translate(55, 230)">
      <!-- Habit 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 1. 시각적 타이머 활용 &amp; 과제 '15분 쪼개기'
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 긴 과제는 압박감을 줍니다. "15분 집중하고 5분 쉬기"로 잘게 분할해 주세요.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 눈으로 시간이 줄어드는 시각 타이머(Time Timer)로 남은 시간 직관적 인지
        </text>
      </g>

      <!-- Habit 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 2. 70% 완성에도 '즉각적이고 구체적인 칭찬'
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • "책상에 앉아 첫 문제를 푼 것"처럼 과정의 작은 성공을 즉시 칭찬해 주세요.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 결과가 완벽하지 않더라도 노력한 순간을 인정하면 도파민 보상회로가 자극됩니다.
        </text>
      </g>

      <!-- Habit 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 3. 매일 30분 유산소 운동 &amp; 취침 1시간 전 스마트폰 OFF
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 줄넘기, 빠른 걷기, 트램펄린 등 리드미컬한 운동은 전두엽 혈류량을 촉진합니다.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 잠들기 전 블루라이트를 차단하여 깊은 수면을 취해야 두뇌 피로가 회복됩니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0f2922" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        🌱 아이를 탓하지 않는 부모님의 따뜻한 이해가 치유의 가장 큰 힘입니다.
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
  console.log('Rendering 5 B-Type Card News for Bucheon Beombak ADHD...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
