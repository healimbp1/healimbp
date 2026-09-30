import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/mansu-hwabyeong',
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
      <stop offset="0%" stop-color="#2d0a0a" />
      <stop offset="50%" stop-color="#4a1515" />
      <stop offset="100%" stop-color="#1c0505" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#dc2626" />
      <stop offset="100%" stop-color="#f87171" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🔥 만성 화병 · 자율신경 상열하한 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#f3dada" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="670" height="40" rx="8" fill="#fef2f2" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#b91c1c">
        "억울함과 분노로 꽉 막힌 단중혈(膻中穴), 가슴 속 불을 끄는 법"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#1f1313" letter-spacing="-1.2">
      만수동 화병 한의원 | 가슴 답답함 · 상열감
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#dc2626">
      단중혈 홧병 통증과 머리로 솟구치는 열, 1:1 맞춤 청심 치료법
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#faf5f5" stroke="#f5d0d0" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🔥</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f1313">POINT 01. 울화의 병리</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#6b5b5b">간기울결로 가슴에 맺힌 열이</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">얼굴과 머리로 치솟는 상열하한</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#faf5f5" stroke="#f5d0d0" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⚡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f1313">POINT 02. 단중혈 압통</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#6b5b5b">가슴 한가운데를 누르면</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">비명이 나올 정도의 극심한 통증</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#faf5f5" stroke="#f5d0d0" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🍵</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f1313">POINT 03. 청심소간 한약</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#6b5b5b">분심기음 · 황련해독탕 처방</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">뭉친 열을 끄고 자율신경 안정</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#faf5f5" stroke="#f5d0d0" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🧘</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f1313">POINT 04. 자율신경 리셋</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#6b5b5b">4-7-8 이완 호흡 &amp; 온수 족욕</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">수승화강(水昇火降) 순환 완성</text>
      </g>
    </g>

    <!-- Bottom Clinical Message Box -->
    <g transform="translate(55, 525)">
      <rect x="0" y="0" width="860" height="215" rx="20" fill="#fdf7f7" stroke="#ebd2d2" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#4a1515">
        💡 한방침구과 전문의 권형근 대표원장의 진료 노트
      </text>
      <text x="35" y="82" font-family="${fontFamilies}" font-size="16" fill="#5c3838">
        "참고 억누르기만 했던 억울함과 분노는 사라지지 않고 가슴에 응어리(화병)로 남습니다."
      </text>
      <text x="35" y="112" font-family="${fontFamilies}" font-size="16" fill="#5c3838">
        "단중혈에 맺힌 울화를 풀고, 머리로 치솟는 열을 아래로 내려주는 치료가 필요합니다."
      </text>
      <text x="35" y="142" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c">
        "마음의 응어리와 자율신경 밸런스를 바로잡아 편안한 숨을 되찾아드립니다."
      </text>
      <text x="35" y="180" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#8c4b4b">
        남동구 만수동 · 서창동 · 구월동 · 간석동 · 도림동 화병 한방 클리닉
      </text>
    </g>

    <!-- Bottom Hospital Info Footer -->
    <g transform="translate(55, 770)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#2d0a0a" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff">
        해아림한의원 인천부평점
      </text>
      <text x="260" y="45" font-family="${fontFamilies}" font-size="15" fill="#fca5a5">
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
      <stop offset="0%" stop-color="#2d0a0a" />
      <stop offset="50%" stop-color="#4a1515" />
      <stop offset="100%" stop-color="#1c0505" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🔥 POINT 01. 화병의 병리 기전</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#f3dada" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#1f1313">
      "참기만 했던 분노, 왜 몸의 통증이 될까요?"
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#dc2626">
      간기울결(肝氣鬱結)과 단중혈에 맺힌 울화, 그리고 상열하한의 진실
    </text>

    <!-- 3 Flow Step Boxes -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b91c1c" text-anchor="middle">1</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          분노와 억울함의 억제 → 간기울결(肝氣鬱結)
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 표출하지 못한 감정과 억울함을 꾹꾹 참으며 기운의 소통이 꽉 막힘
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 기운이 뭉치면서 가슴 한가운데(단중혈)에 단단한 신체적 응어리 형성
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          👉 "답답해서 나도 모르게 휴- 깊은 한숨을 쉬게 되는 이유입니다."
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#ffedd5" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c2410c" text-anchor="middle">2</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#9a3412">
          뭉친 기운이 불로 변함 → 울화(鬱火)와 상열하한(上熱下寒)
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 갇힌 공기가 과열되듯 뭉친 기운에서 열이 발생하여 얼굴·머리로 치솟음
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 상체는 불처럼 뜨겁고 화끈거리는데, 아랫배와 손발은 차가워지는 불균형
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ea580c">
          👉 안면홍조, 정수리 열감, 입 마름, 두통, 가슴 쓰림이 동반됩니다.
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#f3e8ff" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7e22ce" text-anchor="middle">3</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6b21a8">
          자율신경계 폭주 → 교감신경 항진 &amp; 수면 붕괴
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 과열된 심포(心胞)와 편도체가 흥분하여 심장이 쿵쾅거리고 불안 초조
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 밤에도 뇌신경이 꺼지지 않아 입면장애, 조기각성, 악몽으로 악순환
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#9333ea">
          👉 단순 신경안정제가 아닌, '가슴 속 화(火)를 끄는 근본 치료'가 필요합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#2d0a0a" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#fca5a5" text-anchor="middle">
        💡 화병은 마음의 병이 아닌, 오장육부와 자율신경계가 과열된 실제 신체 질환입니다.
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
      <stop offset="0%" stop-color="#2d0a0a" />
      <stop offset="50%" stop-color="#4a1515" />
      <stop offset="100%" stop-color="#1c0505" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">📋 POINT 02. 화병 자가진단 체크리스트</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#f3dada" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#1f1313">
      내 가슴속 홧병 지수는 얼마일까?
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#dc2626">
      아래 5가지 중 3가지 이상 해당된다면 만성화된 화병 치료가 시급합니다.
    </text>

    <!-- 5 Checklist Items -->
    <g transform="translate(55, 140)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#faf5f5" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#dc2626" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f1313">
          1. 양 젖가슴 사이 한가운데(단중혈)를 누르면 자지러지게 아프다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#6b5b5b">
          가슴 뼈 중앙을 손가락으로 가볍게만 눌러도 깜짝 놀랄 만큼 찌릿한 통증
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 115)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#faf5f5" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#dc2626" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f1313">
          2. 가슴에 돌덩이가 얹힌 듯 답답하여 무의식적으로 깊은 한숨을 쉰다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#6b5b5b">
          숨을 끝까지 들이쉬기 힘들고 명치가 꽉 막혀 수시로 한숨을 내쉼
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 230)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#faf5f5" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#dc2626" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f1313">
          3. 얼굴과 머리로 훅 열이 솟구치고(상열감), 입이 마르고 쓰다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#6b5b5b">
          갱년기 열감처럼 뺨이 붉어지고 두피가 뜨거워지며 목에 이물감이 걸림
        </text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 345)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#faf5f5" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#dc2626" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f1313">
          4. 사소한 일에도 불쑥 분노가 치밀고, 억울함에 눈물이 왈칵 쏟아진다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#6b5b5b">
          감정 조절이 마음대로 되지 않고 과거의 서운한 일들이 생생하게 떠오름
        </text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 460)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#faf5f5" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#dc2626" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1f1313">
          5. 밤에 잡생각과 분노로 잠들기 힘들고, 심장이 쿵쾅거려 자주 깬다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#6b5b5b">
          새벽 2~4시 사이 가슴 답답함이나 열감으로 깨어나 다시 잠들지 못함
        </text>
      </g>
    </g>

    <!-- Bottom Action Notice -->
    <g transform="translate(55, 735)">
      <rect x="0" y="0" width="860" height="105" rx="18" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b" text-anchor="middle">
        💡 화병을 방치하면 고혈압, 만성 부정맥, 공황장애, 우울증으로 발전합니다.
      </text>
      <text x="430" y="78" font-family="${fontFamilies}" font-size="15" fill="#b91c1c" text-anchor="middle">
        내과에서 '이상 없다'는 말만 들었다면 자율신경과 울화의 정밀 진단이 필요합니다.
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
      <stop offset="0%" stop-color="#2d0a0a" />
      <stop offset="50%" stop-color="#4a1515" />
      <stop offset="100%" stop-color="#1c0505" />
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
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f2922">
      가슴 속 불(火)을 끄고 자생력을 깨우는 3단계 치료
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      단순 진정제가 아닌, 울화 배출과 자율신경 밸런스를 바로잡는 근본 솔루션
    </text>

    <!-- 3 Step Treatment Cards -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🍵</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          1. 청심소간(淸心疏肝) 맞춤 한약 처방
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 심장과 간에 뭉친 화(火)를 끄고 기운을 순환시키는 1:1 체질 맞춤 탕약
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 황련해독탕, 분심기음, 시호소간산, 가미소요산, 천왕보심단 처방
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 상열감을 진정시키고 답답했던 흉격(胸膈)을 틔워 편안한 호흡 회복
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">👐</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          2. 단중혈 청열약침 &amp; 두개천골 추나요법
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 가슴 정중앙 단중혈(膻中穴)과 전중혈에 정제된 청열 약침액 주입
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 경추와 흉추, 횡격막 근막 긴장을 이완하여 뇌척수액 순환과 뇌압 정상화
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 가슴을 짓누르던 돌덩이 같은 신체적 압박감과 결림을 즉각 해소
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">⚡</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          3. 뉴로피드백 &amp; 자율신경 조절 두뇌 훈련
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 흥분된 편도체를 안정시키고 전두엽의 감정 조절 회로를 강화하는 훈련
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 심박변이도(HRV) 바이오피드백으로 교감-부교감신경의 시소 균형 회복
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 스트레스 상황에서도 분노와 불안에 휩쓸리지 않는 내적 회복탄력성 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice Box -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0c4a3b" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">
        🏥 한방침구과 전문의 권형근 대표원장 1:1 맞춤 정밀 진료
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (생활 팁 & 자율신경 홈 루틴 카드)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2d0a0a" />
      <stop offset="50%" stop-color="#4a1515" />
      <stop offset="100%" stop-color="#1c0505" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🏡 POINT 04. 생활 속 힐링 실천 팁</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f2922">
      가슴 속 열을 내리는 3대 힐링 루틴
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      의지로 참는 것이 아닌, 신체 환경을 바꾸어 자율신경을 안정시키는 실천법
    </text>

    <!-- 3 Action Boxes -->
    <g transform="translate(55, 145)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🫁</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          루틴 01. 흉식 호흡을 멈추고 '4-7-8 복식 호흡' 실천하기
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 화병 환자는 얕고 빠른 흉식 호흡으로 가슴 압박감이 더 심해집니다.
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 코로 4초 들이쉬고, 7초간 멈춘 뒤, 입으로 8초간 길게 내쉬며 횡격막을 하강
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 미주신경을 자극하여 심박수를 안정시키고 흉격의 긴장을 틔웁니다.
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🛁</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          루틴 02. 취침 90분 전 '40도 온수 족욕 15분' (수승화강)
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 머리와 가슴으로 치솟은 울화를 발끝으로 끌어내리는 가장 효과적인 물리 요법
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 하체 혈관을 확장해 혈류 순환을 촉진하고 상열하한 불균형을 리셋
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 족욕 후 체온이 서서히 떨어지며 자연스러운 수면 유도 멜라토닌 활성화
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🚶</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          루틴 03. 기상 직후 15분 햇볕 걷기 &amp; 감정 배출 일기
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 아침 햇볕을 쬐며 흙길을 걸어 뇌 속 세로토닌을 깨우고 억압된 기운 해소
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 참았던 감정을 종이에 그대로 쏟아내는 '감정 일기'로 심리적 압력 배출
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 감정을 억누르지 않고 건강하게 시각화하여 뇌신경 과열을 예방합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0c4a3b" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        💡 마음을 다잡으려 애쓰기보다, 몸의 혈류와 신경 긴장을 먼저 풀어주세요.
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
  console.log('Rendering Mansu Hwabyeong Cards (Thumbnail + Point1 + Point2 + Point3 + Point4)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
