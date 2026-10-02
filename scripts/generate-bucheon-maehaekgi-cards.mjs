import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-sinjungdong-maehaekgi',
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
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 매핵기 &amp; 만성 담적병 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="580" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        목에 가래 걸린 듯 답답하고 뱉어도 안 나올 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="43" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 신중동 매핵기·목이물감 담적병 한방 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#38544c" letter-spacing="-0.5">
      칠정울결 · 위장 담적 가스 · 인후두 신경 과민의 1:1 근본 해법
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
          이비인후과 '이상 없음'의 실체: 매핵기(梅核氣)
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          매실 씨앗이 목에 걸린 듯 뱉어도 안 나오고 삼켜도 안 넘어가는 신경성 이물감
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          칠정울결(스트레스)과 위장 담적(痰積)의 결합
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          가슴에 맺힌 화기와 소화기 독소가 상부 식도 괄약근을 쥐어짜는 이중 압박
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#d5e8e0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0f766e" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#133d32">
          반하후박탕 &amp; 소요산 맞춤 한약과 경추 이완
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4e6d63">
          목구멍 근육 긴장을 풀고 위장 담음을 삭혀 가슴과 목을 시원하게 뚫어주는 치료
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
      <rect x="0" y="0" width="220" height="36" rx="8" fill="#fee2e2" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c">
        ⚠️ 헛기침할수록 심해지는 이유
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      목이물감, 왜 위산억제제로 안 나을까?
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      단순 위산 역류가 아니라 자율신경과 식도 평활근 경련의 문제입니다.
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
          오해 1. "역류성 식도염이니 위산억제제(PPI)만 먹으면 낫는다?"
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          👉 내시경상 식도 점막 염증이 없는데도 위산 분비만 억제하면
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
          위장 소화력이 더 떨어져 담적(痰積)이 심해지고 목 압박감은 지속됩니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#fee2e2" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          오해 2. "가래가 낀 것이니 캑캑 소리 내며 억지로 뱉어야 한다?"
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          👉 실제 가래가 아니라 목구멍 점막이 부어 느끼는 허상(虛像)입니다.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
          억지로 헛기침을 반복하면 후두 점막이 헐고 마찰열로 이물감이 배가됩니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#fee2e2" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          오해 3. "단순 목감기나 피로이니 따뜻한 물 마시면 저절로 낫는다?"
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          👉 칠정울결(스트레스)로 가슴의 기운이 뭉친 '기체증'은
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
          단순 수분 섭취로 풀리지 않으며, 울체된 기혈을 소통시키는 한방 치료가 필요합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#f1f5f9" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155" text-anchor="middle">
        💡 매핵기는 목 자체의 병이 아니라 '마음의 울화 + 위장의 담적'이 만든 합작품입니다.
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
        🧠 자율신경 &amp; 담적병 심층 기전 해설
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      목을 조여오는 3가지 복합 신경 기전
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      눈에 보이지 않는 3대 원인이 목구멍을 쥐어짜고 있습니다.
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
          칠정울결(七情鬱結)과 인후두 신경총 과민
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 억울함, 분노, 만성 불안이 가슴(전중혈)에 뭉쳐 상부 기운을 막아버림
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 목구멍 식도 괄약근 평활근이 쥐가 나듯 뭉쳐 좁아지며 이물감 유발
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dcfce7" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">02</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#14532d">
          위장 담적(痰積) 독소와 부패 가스 역류
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 소화되지 못한 노폐물이 위장 벽에 굳어 담적 독소와 가스 형성
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 식도를 타고 올라온 독성 가스가 후두 점막을 자극해 부종과 답답함 초래
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dcfce7" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">03</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#14532d">
          미주신경(Vagus nerve) 둔화 &amp; 흉쇄유돌근 긴장
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 일자목, 거북목, 구부정한 자세로 목 앞쪽 근육(흉쇄유돌근)이 경결
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 식도와 위장을 지배하는 미주신경이 압박받아 연하(삼킴) 반사 장애 발생
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#e6f7f3" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e" text-anchor="middle">
        🌿 마음의 기체를 풀고 위장 담적을 삭혀야 목구멍이 온전히 열립니다.
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
        🏥 해아림 1:1 매핵기·담적 근본 치료
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      울체된 기운을 뚫고 위장 담적을 삭히다
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      맞춤 한약과 경혈 자침, 경추 추나로 목과 가슴의 답답함을 해소합니다.
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
          인후두 신경 긴장 완화 &amp; 칠정울결 해소
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 반하후박탕(半夏厚朴湯), 소요산(逍遙散) 가감 처방으로 가슴의 울화 배출
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 천돌(天突), 단중(膻中), 내관(內關)혈 정밀 자침으로 식도 경련 즉각 완화
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#0d9488" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 2</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
          위장 담적(痰積) 삭힘 &amp; 소화기 연동운동 회복
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 평위산(平胃散), 이진탕(二陳湯) 가감으로 위장벽 노폐물 독소 제거
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 중완(中脘), 족삼리(足三里) 온침 치료로 복부 가스 배출 및 소화 흡수력 촉진
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#059669" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 3</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
          경추·흉곽 구조 교정 &amp; 자율신경 안정 (재발 방지)
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 경추 추나요법으로 미주신경 통로를 확보하고 흉쇄유돌근 굳음 해소
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 뉴로피드백 &amp; 자율신경 훈련 연계로 스트레스 역치를 높여 완치 도달
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0f2922" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        🛡️ 식약처 규격 hGMP 안심한약재만 사용 · 1:1 맞춤 원내 탕전 조제
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 CHAPTER 04. 목이물감 해소 3대 생활 수칙</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="280" height="36" rx="8" fill="#e6f7f3" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        💡 스스로 실천하는 인후두 관리 요법
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      목을 편안하게 만드는 3가지 행동 습관
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#4e6d63">
      목을 괴롭히던 잘못된 습관을 교정하면 이물감이 빠르게 줄어듭니다.
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
          수칙 1. 억지 헛기침 멈추고 '미온수 한 모금 삼키기'
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 목이 답답하다고 캑캑 소리 내며 뱉으려 하지 마세요. 성대와 점막이 붓습니다.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 이물감이 느껴질 때마다 미지근한 물을 한 모금 입에 머금고 천천히 꿀꺽 삼키기
        </text>
      </g>

      <!-- Habit 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 2. 흉쇄유돌근(목 옆 근육) &amp; 가슴 중앙 마사지
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 고개를 살짝 돌렸을 때 도드라지는 목 옆 근육을 엄지와 검지로 부드럽게 지압
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 가슴 정중앙(전중혈)을 손바닥으로 위에서 아래로 쓸어내려 울체된 화기 이완
        </text>
      </g>

      <!-- Habit 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#ccfbf1" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
          수칙 3. 식후 2시간 절대 눕지 않기 &amp; 과식·야식 금지
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 식사 후 바로 눕거나 엎드리면 위장 담적 가스가 식도로 치솟아 목을 압박
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 저녁 식사는 취침 3시간 전에 가볍게 마치고, 10분간 가벼운 산책 권장
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0f2922" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        🌱 답답했던 목과 가슴, 자율신경과 위장 담적이 풀리면 시원하게 뚫립니다.
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
  console.log('Rendering 5 B-Type Card News for Bucheon Sinjungdong Maehaekgi...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
