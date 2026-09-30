import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/geomdan-subway-panic',
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
      <stop offset="0%" stop-color="#1e102d" />
      <stop offset="50%" stop-color="#3b1d5a" />
      <stop offset="100%" stop-color="#13071f" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#a78bfa" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🚇 출퇴근 공황장애 · 광장공포증 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#eedff8" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="670" height="40" rx="8" fill="#f5f3ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#6d28d9">
        "만원 전철 문 닫히는 순간 닥쳐온 질식감, 왜 숨이 안 쉬어질까요?"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#1f112e" letter-spacing="-1.2">
      공항철도 검암·계양 환승길 숨막힘
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#7c3aed">
      검단 직장인 출근길 공황발작과 1:1 맞춤 한방 치료 솔루션
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#faf8fc" stroke="#ddd6fe" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⚠️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f112e">POINT 01. 편도체 오작동</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#58486b">밀폐 공간에서 뇌 경보기가 오작동해</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">극심한 공포와 과호흡 유발</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#faf8fc" stroke="#ddd6fe" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⚡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f112e">POINT 02. 예기불안의 늪</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#58486b">"또 발작이 오면 어쩌지?" 하는 공포로</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">지하철 탑승 전부터 심장 두근거림</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#faf8fc" stroke="#ddd6fe" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🍵</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f112e">POINT 03. 청열안신 탕약</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#58486b">사역산 · 시호가용골모려탕</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">교감신경 다운시프트 &amp; 두개추나</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#faf8fc" stroke="#ddd6fe" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🧘</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f112e">POINT 04. 응급 대처법</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#58486b">내쉬는 숨 중심 4-7-8 호흡</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">5-4-3-2-1 감각 그라운딩</text>
      </g>
    </g>

    <!-- Bottom Clinical Message Box -->
    <g transform="translate(55, 525)">
      <rect x="0" y="0" width="860" height="215" rx="20" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#3b0764">
        💡 한방침구과 전문의 권형근 대표원장의 진료 노트
      </text>
      <text x="35" y="82" font-family="${fontFamilies}" font-size="16" fill="#581c87">
        "공황발작으로 죽거나 미쳐버리는 일은 절대 일어나지 않습니다."
      </text>
      <text x="35" y="112" font-family="${fontFamilies}" font-size="16" fill="#581c87">
        "뇌 속 편도체가 잘못 울린 '화재경보기 오작동'일 뿐입니다."
      </text>
      <text x="35" y="142" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7c3aed">
        "과열된 자율신경을 안정시키고 뇌 자생력을 깨워 편안한 출퇴근길을 되찾아드립니다."
      </text>
      <text x="35" y="180" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#9333ea">
        검단신도시 · 원당동 · 당하동 · 마전동 · 공항철도 검암/계양역 직장인 공황클리닉
      </text>
    </g>

    <!-- Bottom Hospital Info Footer -->
    <g transform="translate(55, 770)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#1e102d" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff">
        해아림한의원 인천부평점
      </text>
      <text x="260" y="45" font-family="${fontFamilies}" font-size="15" fill="#c4b5fd">
        부평역 7번 출구 북광장 · 월·수·금 야간진료 (저녁 8시)
      </text>
      <text x="750" y="45" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ffffff">
        ☎ 032-719-3472
      </text>
    </g>
  </g>
</svg>`;
}

// 2. POINT 01 (원인 기전 분석 카드)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e102d" />
      <stop offset="50%" stop-color="#3b1d5a" />
      <stop offset="100%" stop-color="#13071f" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">⚠️ POINT 01. 지하철 공황의 병리 기전</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#eedff8" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#1f112e">
      "만원 전철 문이 닫히는 순간, 왜 숨이 막힐까요?"
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#dc2626">
      심장 문제가 아닌, 편도체 경보기 오작동과 '과호흡의 역설'
    </text>

    <!-- 3 Flow Step Boxes -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b91c1c" text-anchor="middle">1</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          밀폐 공간 감지와 편도체(경보기) 오작동
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 만원 인파, 문 닫힘, 환기 부족을 뇌가 '탈출 불가능한 생명 위협'으로 착각
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 실제 불이 안 났는데 화재경보기가 울리듯 아드레날린이 혈관에 폭발적으로 분비
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          👉 심장이 미친 듯 뛰며 "지금 당장 죽을 것 같다"는 공포가 닥칩니다.
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#ffedd5" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c2410c" text-anchor="middle">2</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#9a3412">
          숨을 헐떡일수록 질식감이 심해지는 '과호흡의 역설'
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 숨이 안 쉬어진다고 가슴으로 가쁘게 몰아쉬면 혈중 이산화탄소 농도가 급감
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 뇌혈관이 수축하며 손발 저림, 안면 마비감, 극심한 어지럼증과 실신 공포 유발
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ea580c">
          👉 숨이 부족한 것이 아니라, '너무 많이 들이쉬어서' 생기는 증상입니다.
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#f3e8ff" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7e22ce" text-anchor="middle">3</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6b21a8">
          예기불안(Anticipatory Anxiety)과 광장공포증의 고착
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • "검암역에서 환승할 때 또 숨 막히면 어쩌지?" 하는 조건반사적 공포 형성
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 지하철, 터널, 엘리베이터, 영화관 등 밀폐된 장소 탑승 자체를 회피하게 됨
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#9333ea">
          👉 과열된 편도체 경보를 끄고 자율신경계 밸런스를 복원해야 완치됩니다.
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#1e102d" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#c4b5fd" text-anchor="middle">
        💡 공황발작은 결코 심장마비나 질식사로 이어지지 않는 뇌신경계 신호입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. POINT 02 (자가진단 체크리스트 카드)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e102d" />
      <stop offset="50%" stop-color="#3b1d5a" />
      <stop offset="100%" stop-color="#13071f" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#7c3aed" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">📋 POINT 02. 출퇴근 공황장애 자가진단</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#eedff8" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#1f112e">
      단순 출근 스트레스일까, 공황장애일까?
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#7c3aed">
      아래 5가지 중 3가지 이상 경험하셨다면 조기 정밀 진단이 필요합니다.
    </text>

    <!-- 5 Checklist Items -->
    <g transform="translate(55, 140)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#faf8fc" stroke="#ddd6fe" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#7c3aed" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f112e">
          1. 만원 전철 문이 닫히거나 터널에 진입할 때 숨이 턱 막힌다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#58486b">
          공기가 희박해진 것처럼 답답하고 가슴을 쥐어뜯고 싶은 질식감 발생
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 115)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#faf8fc" stroke="#ddd6fe" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#7c3aed" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f112e">
          2. 심장이 터질 듯 빠르게 뛰고 가슴에 강한 흉통·압박감이 든다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#58486b">
          심장마비가 올 것 같은 극심한 두근거림으로 응급실을 찾으나 검사는 정상
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 230)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#faf8fc" stroke="#ddd6fe" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#7c3aed" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f112e">
          3. 손발이 저리고 식은땀이 비 오듯 흐르며 어지러워 주저앉는다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#58486b">
          시야가 흐려지고 다리에 힘이 풀려 바닥에 쓰러질 것 같은 공포감 동반
        </text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 345)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#faf8fc" stroke="#ddd6fe" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#7c3aed" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f112e">
          4. '이러다 미쳐버리거나 죽을지도 모른다'는 파국적 공포가 밀려온다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#58486b">
          자제력을 잃고 이 공간에서 영영 빠져나가지 못할 것 같은 극도의 통제 상실감
        </text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 460)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#faf8fc" stroke="#ddd6fe" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#7c3aed" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f112e">
          5. 환승역(검암·계양)이나 다음 역에서 도중에 내려야만 진정된다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#58486b">
          개찰구 밖으로 나와 찬 공기를 쐬고 나서야 심박수가 서서히 가라앉음
        </text>
      </g>
    </g>

    <!-- Bottom Action Notice -->
    <g transform="translate(55, 735)">
      <rect x="0" y="0" width="860" height="105" rx="18" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.5" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#5b21b6" text-anchor="middle">
        💡 공황장애는 초기에 치료할수록 광장공포증으로의 악화를 100% 막을 수 있습니다.
      </text>
      <text x="430" y="78" font-family="${fontFamilies}" font-size="15" fill="#6d28d9" text-anchor="middle">
        신경안정제에만 의존하지 않고 편도체 조절력을 키우는 근본 치료가 중요합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (1:1 맞춤 한방 치료 솔루션 카드)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e102d" />
      <stop offset="50%" stop-color="#3b1d5a" />
      <stop offset="100%" stop-color="#13071f" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🌿 POINT 03. 1:1 맞춤 한방 치료</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#eedff8" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#1f112e">
      편도체 오작동을 끄는 3단계 맞춤 치료
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      내성 없는 한방 탕약과 두뇌 훈련으로 출퇴근길의 자유를 되찾아드립니다.
    </text>

    <!-- 3 Step Treatment Cards -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🍵</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1f112e">
          1. 청열안신(淸熱安神) 체질 맞춤 한약 처방
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 심장의 울체된 열을 식히고 간기를 소통시키는 1:1 맞춤 탕약
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 사역산, 시호가용골모려탕, 분심기음, 천왕보심단 처방
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 가슴 두근거림과 질식감을 진정시키고 예기불안을 근본적으로 차단
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">👐</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1f112e">
          2. 두개천골 추나요법 &amp; 흉격 이완 약침 치료
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 상경추와 후두골의 변위를 바로잡아 뇌척수액 순환 촉진 및 뇌압 안정
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 횡격막과 흉골 주변 단중혈에 정제된 청열 약침 및 전침 시술
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 굳어진 흉곽을 부드럽게 틔워 숨이 깊숙이 쉬어지도록 즉각 유도
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">⚡</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1f112e">
          3. 뉴로피드백 &amp; HRV 자율신경 조절 훈련
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 공포 상황에서 폭주하는 교감신경을 부교감신경으로 즉시 전환하는 훈련
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 편도체의 과민성을 낮추고 전두엽의 인지 통제력을 극대화
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 만원 전철이나 밀폐 공간에서도 공황 없이 편안하게 머무는 자생력 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice Box -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#1e102d" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">
        🏥 한방침구과 전문의 권형근 대표원장 1:1 맞춤 정밀 진료
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (생활 팁 & 지하철 응급 대처법 카드)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e102d" />
      <stop offset="50%" stop-color="#3b1d5a" />
      <stop offset="100%" stop-color="#13071f" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🏡 POINT 04. 지하철 공황 응급 대처법</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#eedff8" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#1f112e">
      만원 전철에서 공황이 올 때 3대 응급 수칙
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      불안에 휩쓸리지 않고 스스로 뇌신경을 안정시키는 물리적 그라운딩 기법
    </text>

    <!-- 3 Action Boxes -->
    <g transform="translate(55, 145)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🫁</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 01. '내쉬는 숨 중심 4-7-8 호흡'으로 과호흡 차단
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 숨이 안 쉬어진다고 헐떡이지 말고, 입술을 오므려 8초간 천천히 길게 내쉼
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 코로 4초 들이쉬고 7초 멈춘 뒤 8초간 내쉬면 혈중 이산화탄소 농도 회복
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 손발 저림과 어지럼증이 즉각적으로 잦아듭니다.
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">👀</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 02. '5-4-3-2-1 감각 그라운딩'으로 시선 돌리기
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 눈앞에 보이는 사물 5가지(광고판, 손잡이 등) 속으로 이름 붙이기
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 발바닥이 지하철 바닥에 닿는 단단한 감각과 차가운 손잡이 감촉에 집중
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 편도체에 쏠려 있던 뇌의 공포 스위치를 오감으로 분산시킵니다.
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">☕</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 03. 출근 전 '모닝 커피 완전 차단' &amp; 전날 밤 족욕
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 빈속의 모닝 커피는 교감신경을 급격히 자극하여 공황발작의 방아쇠가 됨
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 아침에는 미온수를 마시고, 전날 밤 40도 온수 족욕으로 숙면을 취해 뇌 피로 회복
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 출근길 뇌신경계의 역치를 높여 발작 발생을 사전에 예방합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#1e102d" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#c4b5fd" text-anchor="middle">
        💡 공황은 10~20분이 지나면 파도처럼 반드시 가라앉습니다. 두려워 마세요.
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
  console.log('Rendering Geomdan Subway Panic Cards (Thumbnail + Point1 + Point2 + Point3 + Point4)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
