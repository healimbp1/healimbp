import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/dangha-postpartum-anxiety',
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
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2d0f1f" />
      <stop offset="50%" stop-color="#4d1a36" />
      <stop offset="100%" stop-color="#1f0714" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ec4899" />
      <stop offset="100%" stop-color="#f472b6" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌸 산후 불안증 · 산후 우울증 두뇌 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#fce7f3" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="670" height="40" rx="8" fill="#fdf2f8" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#db2777">
        "출산 후 이유 없이 눈물이 왈칵 쏟아지고 심장이 쿵쾅거릴 때"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#2d1222" letter-spacing="-1.2">
      검단 당하동 산후 불안증 | 눈물과 심장 두근거림
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#db2777">
      모성애 부족이 아닌, 기혈 고갈과 자율신경 실조 3단계 회복 로드맵
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#fdf4f8" stroke="#fbcfe8" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⚠️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2d1222">CHAPTER 01. 3대 오해</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#6b4c5e">"엄마가 마음이 약해서?"</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">의지 부족이 아닌 뇌신경계 신호</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#fdf4f8" stroke="#fbcfe8" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fce7f3" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2d1222">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#6b4c5e">호르몬 급락과 기혈 허약</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#db2777">수면박탈로 인한 자율신경 붕괴</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#fdf4f8" stroke="#fbcfe8" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🍵</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2d1222">CHAPTER 03. 3단계 회복</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#6b4c5e">수유 중 안심 보혈보심 한약</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">골반·두개추나 &amp; 뇌파 안정</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#fdf4f8" stroke="#fbcfe8" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fef3c7" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#2d1222">CHAPTER 04. 가족 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#6b4c5e">남편의 야간 수유 분담</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#d97706">연속 4시간 통잠 &amp; 햇볕 산책</text>
      </g>
    </g>

    <!-- Bottom Clinical Message Box -->
    <g transform="translate(55, 525)">
      <rect x="0" y="0" width="860" height="215" rx="20" fill="#fdf2f8" stroke="#fbcfe8" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#831843">
        💡 한방침구과 전문의 권형근 대표원장의 진료 노트
      </text>
      <text x="35" y="82" font-family="${fontFamilies}" font-size="16" fill="#9d174d">
        "아이를 보며 눈물이 나고 가슴이 뛰는 것은 모성애가 부족해서가 아닙니다."
      </text>
      <text x="35" y="112" font-family="${fontFamilies}" font-size="16" fill="#9d174d">
        "출산과 수유로 산모의 몸과 뇌 에너지가 고갈되었다는 SOS 신호입니다."
      </text>
      <text x="35" y="142" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#db2777">
        "엄마의 마음과 기혈을 채워주면, 아이를 마주하는 눈빛에 다시 따뜻한 미소가 번집니다."
      </text>
      <text x="35" y="180" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#be185d">
        검단신도시 · 당하동 · 원당동 · 마전동 · 불로동 산후 불안증 수면클리닉
      </text>
    </g>

    <!-- Bottom Hospital Info Footer -->
    <g transform="translate(55, 770)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#2d0f1f" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff">
        해아림한의원 인천부평점
      </text>
      <text x="260" y="45" font-family="${fontFamilies}" font-size="15" fill="#fbcfe8">
        부평역 7번 출구 북광장 · 월·수·금 야간진료 (저녁 8시)
      </text>
      <text x="750" y="45" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ffffff">
        ☎ 032-719-3472
      </text>
    </g>
  </g>
</svg>`;
}

// 2. POINT 01 (CHAPTER 01 3대 오해와 함정)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2d0f1f" />
      <stop offset="50%" stop-color="#4d1a36" />
      <stop offset="100%" stop-color="#1f0714" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-250" y="0" width="500" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">⚠️ CHAPTER 01. 산후 불안의 3대 오해</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#fce7f3" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#2d1222">
      "출산 후 눈물과 불안, 왜 엄마 탓이 아닐까요?"
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#dc2626">
      산모를 자책과 죄책감으로 몰아넣는 3대 오해와 진실
    </text>

    <!-- 3 Flow Step Boxes -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b91c1c" text-anchor="middle">1</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          "내가 모성애가 부족해서 아기를 보고 우는 걸까?" (자책의 덫)
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 아이가 너무 예쁜데도 이유 없이 눈물이 쏟아지고 가슴이 쿵쾅거리는 혼란
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 산모의 성격이나 인성 문제가 아니라, 뇌 신경전달물질이 바닥난 신호
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          👉 죄책감을 가질수록 스트레스 호르몬(코르티솔)이 폭증해 악화됩니다.
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#ffedd5" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c2410c" text-anchor="middle">2</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#9a3412">
          "시간이 지나면 저절로 낫는 단순 산후 우울감이다?" (방치의 위험)
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 2주 이내 가볍게 스쳐가는 '베이비 블루스'와 달리 1달 이상 지속되는 불안
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 숨 막힘, 식은땀, 불면증, 아기에게 나쁜 일이 생길 것 같은 강박 사고
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ea580c">
          👉 방치 시 만성 산후 우울증과 공황장애로 고착화될 수 있습니다.
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#f3e8ff" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7e22ce" text-anchor="middle">3</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6b21a8">
          "수유 중이라 한약도 양약도 무조건 참아야 한다?" (인내의 역효과)
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 아기에게 약 성분이 갈까 봐 극심한 고통 속에서 독박 육아를 감내
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 엄마가 극도의 불안 상태면 모유 질 저하 및 아기와의 애착 형성 장애 유발
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#9333ea">
          👉 수유 중에도 안심하고 복용하는 순한 보혈·안신 한약이 필요합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#2d0f1f" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#fbcfe8" text-anchor="middle">
        💡 산모가 건강하고 평온해야 아기도 비로소 깊은 안정감을 배웁니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. POINT 02 (CHAPTER 02 왜 안 나았을까? 3대 심층 원인 해설)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2d0f1f" />
      <stop offset="50%" stop-color="#4d1a36" />
      <stop offset="100%" stop-color="#1f0714" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="#db2777" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🧠 CHAPTER 02. 산후 불안의 3대 심층 원인</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#fce7f3" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#2d1222">
      출산 후 왜 몸과 뇌가 동시에 무너질까?
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#db2777">
      단순 피로가 아닌, 호르몬 급락과 기혈 고갈로 인한 3대 기능 붕괴
    </text>

    <!-- 3 Deep Root Causes Boxes -->
    <g transform="translate(55, 145)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fdf2f8" stroke="#fbcfe8" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fce7f3" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#db2777" text-anchor="middle">1</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#9d174d">
          호르몬 절벽(Estrogen Crash)과 기분 조절 회로 마비
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 임신 중 최고조였던 여성호르몬이 출산 직후 100분의 1로 급격히 곤두박질
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 뇌 속 세로토닌·도파민 수용체가 충격을 받아 감정 조절이 불가능해짐
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#db2777">
          👉 이유 없이 눈물이 터지고 사소한 소리에도 가슴이 철렁 내려앉습니다.
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#dc2626" text-anchor="middle">2</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          출혈과 수유로 인한 '기혈허약(氣血虛弱) &amp; 심포열(心胞熱)'
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 출산 시 대량 출혈과 쉴 새 없는 모유 수유로 피와 진액이 극도로 고갈
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 심장과 뇌를 적셔줄 혈액(심혈)이 부족해져 심장이 쿵쾅거리고 불안 초조
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          👉 산후 기혈을 돋우고 심장을 보양하는 안신 치료가 절실합니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#f3e8ff" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7e22ce" text-anchor="middle">3</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6b21a8">
          2~3시간 단위 수유로 인한 만성 수면박탈과 교감신경 폭주
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 밤낮없는 쪽잠으로 깊은 서파 수면이 붕괴되고 편도체 과각성 고착
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 아이가 자고 있어도 심장이 두근거려 다시 잠들지 못하는 수면장애 발생
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#9333ea">
          👉 자율신경계 시소를 안정시키고 뇌 자생력을 복원해야 합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Notice Box -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#2d0f1f" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#fbcfe8" text-anchor="middle">
        💡 산후 불안은 기혈을 보하고 자율신경을 안정시키면 깨끗하게 회복됩니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (CHAPTER 03 3단계 회복 로드맵)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2d0f1f" />
      <stop offset="50%" stop-color="#4d1a36" />
      <stop offset="100%" stop-color="#1f0714" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🌿 CHAPTER 03. 3단계 회복 로드맵</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#fce7f3" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#2d1222">
      엄마의 기혈을 채우는 3단계 맞춤 치료
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      수유 중에도 안심 복용하는 맞춤 한약과 자율신경 리셋 솔루션
    </text>

    <!-- 3 Step Treatment Cards -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🍵</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          [1단계: 급성 안정기] 안심보혈(安心補血) 산후 맞춤한약
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 부족해진 혈액과 진액을 채우고 심장의 과열을 식혀주는 산후 안심 처방
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 귀비탕, 보혈안신탕, 가미온담탕 등 식약처 안심 규격 한약재 조제
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 수유 중에도 아기에게 해가 없는 순한 처방으로 가슴 두근거림과 눈물 진정
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">👐</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          [2단계: 기능 복원기] 골반·두개천골 추나요법 &amp; 무통 침
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 출산 후 틀어진 골반과 상경추를 바로잡아 뇌척수액 순환과 뇌압 안정
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 통증 없는 무통 침으로 백회, 신문, 내관혈을 자극해 흉곽 긴장 완화
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 굳어 있던 가슴과 어깨 통증을 풀고 깊은 호흡을 유도
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">⚡</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          [3단계: 체질 강화기] 뉴로피드백 &amp; 뇌 자생력 완성
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 불안정한 하이베타파를 억제하고 안정적인 알파파를 강화하는 훈련
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 심박변이도(HRV) 조절로 육아 스트레스에 대한 내적 회복탄력성 극대화
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 아기와 눈을 마주치며 행복감을 느끼는 따뜻한 모아 애착 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice Box -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#2d0f1f" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#fbcfe8" text-anchor="middle">
        🏥 한방침구과 전문의 권형근 대표원장 1:1 맞춤 정밀 진료
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (CHAPTER 04 가족 3대 수칙)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2d0f1f" />
      <stop offset="50%" stop-color="#4d1a36" />
      <stop offset="100%" stop-color="#1f0714" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🏡 CHAPTER 04. 산후 회복 가족 3대 수칙</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#fce7f3" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#2d1222">
      엄마와 아기를 지키는 가정 내 3대 실천 수칙
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      남편과 가족의 지지가 산모의 뇌신경 회복을 3배 앞당깁니다.
    </text>

    <!-- 3 Action Boxes -->
    <g transform="translate(55, 145)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🛌</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 01. 남편의 야간 수유 분담으로 '연속 4시간 통잠' 보장
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 2시간마다 깨는 토막잠은 뇌신경을 파괴하는 주범입니다.
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 주 2~3회는 남편이 유축 수유나 분유를 전담하여 산모가 4시간 이상 연속 숙면
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 깊은 서파 수면이 확보되어야 세로토닌과 기혈이 급속히 재생됩니다.
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">☀️</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 02. 오전 유모차 15분 햇볕 산책 &amp; 4-7-8 이완 호흡
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 하루 종일 어두운 실내에서 독박 육아를 하면 산후 우울감이 극대화됨
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 오전 10~11시 사이 가볍게 햇볕을 쬐며 4-7-8 이완 호흡 실천
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 천연 항우울 물질인 세로토닌 합성을 촉진하고 상열감을 해소합니다.
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">❤️</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 03. 비교와 훈수 금지! "고생 많았어" 무조건적 공감
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • "다른 엄마들은 다 잘하는데 왜 유난이야?"라는 말은 산모 가슴에 비수가 됨
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • "당신이 세상에서 가장 위대한 일을 해냈어, 내가 도울게" 따뜻한 지지와 위로
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 가족의 따뜻한 품이 산모의 불안을 잠재우는 최고의 안식처입니다.
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#2d0f1f" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#fbcfe8" text-anchor="middle">
        💡 산모의 마음이 회복될 때 아이의 세상도 가장 따뜻하고 안전해집니다.
      </text>
    </g>
  </g>
</svg>`;
}

async function renderCard(svgStr, filename) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1080 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  for (const dir of targetDirs) {
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, pngBuffer);
    console.log(`Saved: ${filePath}`);
  }
}

async function run() {
  console.log('Rendering Dangha Postpartum Anxiety Cards (Thumbnail + Point1 + Point2 + Point3 + Point4)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
