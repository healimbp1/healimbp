import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/sangok-insomnia-tapering',
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
      <stop offset="0%" stop-color="#071b2f" />
      <stop offset="50%" stop-color="#0f2e4d" />
      <stop offset="100%" stop-color="#051221" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌙 수면장애 · 수면제 테이퍼링 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#d9e6f2" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="670" height="40" rx="8" fill="#eff6ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#1d4ed8">
        "스틸녹스·자낙스 없이는 10분도 못 잘 때, 반동불안 없는 단약법"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f1e2e" letter-spacing="-1.2">
      산곡동 수면장애 | 수면제 끊고 자연수면 찾기
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#2563eb">
      약물 의존 끊는 부평 환자의 3단계 수면 자생력 회복 로드맵
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⚠️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1e2e">CHAPTER 01. 단약의 함정</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">의지만으로 갑자기 끊으면</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">극심한 반동 불면과 공황 유발</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1e2e">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">뇌간망상체 과각성 상태와</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">수면 스위치(자생력) 고갈</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1e2e">CHAPTER 03. 3단계 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">청열안신 맞춤 한약 처방</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">단계별 25% 테이퍼링 감량</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fef3c7" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1e2e">CHAPTER 04. 수면 홈루틴</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">기상 직후 햇볕 15분 산책</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#d97706">취침 90분 전 40도 온수 족욕</text>
      </g>
    </g>

    <!-- Bottom Clinical Message Box -->
    <g transform="translate(55, 525)">
      <rect x="0" y="0" width="860" height="215" rx="20" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        💡 한방침구과 전문의 권형근 대표원장의 진료 노트
      </text>
      <text x="35" y="82" font-family="${fontFamilies}" font-size="16" fill="#334155">
        "수면제는 뇌를 억지로 재우는 마취제일 뿐, 뇌 본연의 수면 기능을 회복시키지 못합니다."
      </text>
      <text x="35" y="112" font-family="${fontFamilies}" font-size="16" fill="#334155">
        "뇌 자생력을 먼저 채워주면서 서서히 줄여나갈 때, 금단현상 없이 안전하게 단약할 수 있습니다."
      </text>
      <text x="35" y="142" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">
        "매일 밤 약 없이도 편안하게 깊은 잠에 드는 일상을 되찾아드립니다."
      </text>
      <text x="35" y="180" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#64748b">
        부평구 산곡동 · 청천동 · 갈산동 · 삼산동 · 부개동 불면증 수면클리닉
      </text>
    </g>

    <!-- Bottom Hospital Info Footer -->
    <g transform="translate(55, 770)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#0f2e4d" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff">
        해아림한의원 인천부평점
      </text>
      <text x="260" y="45" font-family="${fontFamilies}" font-size="15" fill="#93c5fd">
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
      <stop offset="0%" stop-color="#071b2f" />
      <stop offset="50%" stop-color="#0f2e4d" />
      <stop offset="100%" stop-color="#051221" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-250" y="0" width="500" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">⚠️ CHAPTER 01. 수면제 단약의 3대 함정</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#d9e6f2" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f1e2e">
      "수면제를 그냥 끊으면 왜 지옥을 맛볼까요?"
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#dc2626">
      환자들이 가장 많이 빠지는 3대 오해와 반동성 불면의 위험성
    </text>

    <!-- 3 Flow Step Boxes -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b91c1c" text-anchor="middle">1</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          "오늘부터 독하게 끊겠다"는 무모한 급단약
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 수면제(스틸녹스, 자낙스 등)를 갑자기 끊으면 GABA 수용체가 극도로 흥분
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 복용 전보다 2~3배 심한 '반동성 불면(Rebound Insomnia)'과 야간 공황발작 발생
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          👉 뇌신경이 준비되지 않은 상태에서의 급단약은 100% 실패로 이어집니다.
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#ffedd5" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c2410c" text-anchor="middle">2</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#9a3412">
          약으로 자는 잠은 '진짜 수면'이 아니라는 진실
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 수면제는 뇌를 강제로 마취시키는 얕은 잠을 유도해 깊은 렘(REM) 수면을 억제
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 8시간을 누워 있어도 뇌 독소가 청소되지 않아 다음 날 극심한 몽롱함과 피로 누적
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ea580c">
          👉 인위적 진정이 아닌 '자연 수면 뇌파 복원'이 진짜 치료입니다.
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#f3e8ff" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7e22ce" text-anchor="middle">3</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6b21a8">
          내성과 의존성으로 인한 약물 증량의 늪
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 반 알에서 한 알, 두 알로 늘어나며 뇌 자체 멜라토닌 분비 기능이 마비됨
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • "약 없이는 절대 못 잘 것 같다"는 예기불안이 수면 공포증으로 고착화
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#9333ea">
          👉 한방 탕약으로 뇌 자생력을 채워주면서 서서히 줄여나가야 합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0f2e4d" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#93c5fd" text-anchor="middle">
        💡 수면제는 끊는 것이 아니라, 뇌가 스스로 잠들 수 있을 때 비로소 '졸업'하는 것입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. POINT 02 (CHAPTER 02 왜 안 나았을까? 3대 심층 원인)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071b2f" />
      <stop offset="50%" stop-color="#0f2e4d" />
      <stop offset="100%" stop-color="#051221" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-250" y="0" width="500" height="48" rx="24" fill="#0284c7" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🧠 CHAPTER 02. 불면의 3대 심층 원인</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#d9e6f2" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f1e2e">
      왜 쉽게 낫지 않고 밤마다 깨어날까?
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#0284c7">
      단순 피로가 아닌, 뇌 신경계와 자율신경계가 보내는 3대 기능 고장 신호
    </text>

    <!-- 3 Deep Root Causes Boxes -->
    <g transform="translate(55, 145)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#e0f2fe" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0284c7" text-anchor="middle">1</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
          뇌간망상체 과각성 &amp; 수면 스위치 오작동
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 수면을 관장하는 뇌간망상체와 시상하부가 스트레스로 인해 각성 모드로 고정
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 몸은 천근만근 피곤한데 뇌는 대낮처럼 깨어 잡생각이 꼬리를 물고 이어짐
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          👉 뇌신경 흥분을 다운시프트시키는 한방 이완 처방이 필요합니다.
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#16a34a" text-anchor="middle">2</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d">
          심신불교(心腎不交)와 자율신경 상열하한(上熱下寒)
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 심장의 열은 머리로 치솟고, 신장의 차가운 기운은 아래에 머무는 순환 장애
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 머리와 가슴은 답답하고 화끈거리는데, 발끝은 시려 잠에 깊이 들지 못함
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
          👉 수승화강(水昇火降)을 통해 체온과 혈류 밸런스를 맞춰야 합니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fdf4ff" stroke="#f0abfc" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fae8ff" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c026d3" text-anchor="middle">3</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#a21caf">
          만성 스트레스로 인한 뇌 자생력 및 회복탄력성 고갈
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 세로토닌이 밤에 멜라토닌으로 원활하게 합성되지 않아 생체리듬 붕괴
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 새벽 3~4시면 어김없이 깨어 다시 잠들지 못하는 조기각성·수면유지장애
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#c026d3">
          👉 뇌 기능을 보강하고 스스로 호르몬을 분비하는 자생력을 키워야 합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Notice Box -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0f2e4d" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#93c5fd" text-anchor="middle">
        💡 뇌 신경계의 근본 원인을 치료할 때 비로소 약물 없이 통잠을 잘 수 있습니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (CHAPTER 03 3단계 회복 로드맵 & 맞춤치료)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071b2f" />
      <stop offset="50%" stop-color="#0f2e4d" />
      <stop offset="100%" stop-color="#051221" />
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
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#d9e6f2" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f1e2e">
      수면제 안전 감량 &amp; 3단계 회복 로드맵
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      금단현상 없이 뇌 자생력을 채워 자연 수면을 완성하는 정밀 치료법
    </text>

    <!-- 3 Step Treatment Cards -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🍵</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f1e2e">
          [1단계: 급성 진정기] 과열된 뇌신경 가라앉히기
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 청열안신(淸熱安神) 맞춤 한약 처방 (귀비탕, 가미온담탕, 시호가용골모려탕)
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 기존 양약 복용을 유지하며 뇌신경 흥분을 먼저 가라앉히고 수면의 질 확보
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 수면제 없이도 뇌가 스스로 이완할 수 있는 신경학적 기초 체력 마련
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">📉</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f1e2e">
          [2단계: 감량 전환기] 테이퍼링 &amp; 자율신경 복원
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 양약을 25%씩 단계별로 미세 감량하며 반동불안 없는 안전한 단약 유도
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 두개천골 추나요법 &amp; 무통 전침으로 상경추 긴장을 풀고 뇌척수액 순환 촉진
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 양약 의존도를 0으로 줄이면서도 밤에 깨지 않고 유지되는 깊은 잠 완성
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">⚡</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f1e2e">
          [3단계: 체질 강화기] 뉴로피드백 &amp; 자연 수면 뇌파 고정
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뉴로피드백 훈련으로 델타파(서파수면)와 알파파(안정파) 자율 조절 능력 극대화
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 천왕보심단, 보중익기탕 처방으로 오장육부 허약 보강 및 재발 방지 완성
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 치료 종료 후에도 평생 약 없이 스스로 잠드는 뇌 자생력 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice Box -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0f2e4d" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">
        🏥 한방침구과 전문의 권형근 대표원장 1:1 맞춤 정밀 진료
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (CHAPTER 04 자연 수면 리셋 홈 루틴)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071b2f" />
      <stop offset="50%" stop-color="#0f2e4d" />
      <stop offset="100%" stop-color="#051221" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🏡 CHAPTER 04. 자연 수면 리셋 홈 루틴</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#d9e6f2" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f1e2e">
      진료실 밖 자연 수면 리듬 깨우기 3대 수칙
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      의지로 잠을 청하지 않고, 신체 환경을 바꾸어 자연 수면을 유도하는 물리 요법
    </text>

    <!-- 3 Action Boxes -->
    <g transform="translate(55, 145)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">☀️</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 01. 기상 직후 '15분 자연 햇볕 산책'으로 생체 시계 세팅
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 아침 햇볕이 눈의 망막에 들어오는 순간 뇌 시상하부의 수면 타이머 작동
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 정확히 15시간 뒤 밤에 자연 수면 호르몬인 '멜라토닌'이 폭발적으로 분비됨
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 밤에 잘 자려면 아침 햇볕부터 쬐어야 합니다.
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🛁</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 02. 취침 90분 전 '40도 온수 족욕 15분' (심부체온 하강)
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 잠에 들기 위해서는 몸속 심부 체온이 0.5~1도 떨어져야 합니다.
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 취침 90분 전 족욕으로 말초혈관을 열어두면 열이 방출되며 체온이 서서히 하강
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 머리의 상열감을 내리고 자연스러운 수면 유도 신호를 완성합니다.
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🫁</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 03. 침대 위 시계 치우기 &amp; '4-7-8 이완 호흡법'
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 시계를 보며 "몇 시간 못 자겠네" 초조해하는 순간 교감신경이 다시 과각성됨
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 4초 들이쉬고 7초 멈춘 뒤 8초간 길게 내쉬는 호흡으로 미주신경 이완 유도
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 20분 이상 잠이 안 오면 거실로 나와 어두운 조명 아래서 호흡하세요.
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0f2e4d" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#93c5fd" text-anchor="middle">
        💡 부모와 환자 본인의 조급함을 내려놓을 때, 뇌는 스스로 깊은 잠을 기억해 냅니다.
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
  console.log('Rendering Sangok Insomnia Tapering Cards (Thumbnail + Point1 + Point2 + Point3 + Point4)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
