import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/geomdan-child-tic',
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
      <stop offset="0%" stop-color="#062e24" />
      <stop offset="50%" stop-color="#0c4a3b" />
      <stop offset="100%" stop-color="#031c16" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-250" y="0" width="500" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 소아 틱장애 · 두뇌 자생력 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="650" height="40" rx="8" fill="#ecfdf5" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#047857">
        "참으라고 다그치면 왜 틱이 더 심하게 폭발할까요?"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      검단 틱장애 한의원 | 눈 깜빡임 · 킁킁 헛기침
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#059669">
      억지로 참게 하면 안 되는 뇌신경학적 이유와 1:1 맞춤 치료법
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⚠️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 참음의 역효과</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#4a5f57">의식적 억제는 전두엽을 과열시키고</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">이후 2배의 반동 틱을 유발합니다</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 기저핵 미성숙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#4a5f57">불필요한 동작을 걸러내는</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">뇌 브레이크 시스템의 과부하</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">💊</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 1:1 맞춤 한약</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#4a5f57">청열안신 맞춤 한약 처방</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">뇌신경 흥분 완화 &amp; 두뇌 밸런스</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 부모 대처 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#4a5f57">지적 없는 편안한 수용</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">미디어 차단 &amp; 따뜻한 족욕 루틴</text>
      </g>
    </g>

    <!-- Bottom Clinical Message Box -->
    <g transform="translate(55, 525)">
      <rect x="0" y="0" width="860" height="215" rx="20" fill="#f2f7f4" stroke="#c2ded5" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1b4332">
        💡 한방침구과 전문의 권형근 대표원장의 진료 노트
      </text>
      <text x="35" y="82" font-family="${fontFamilies}" font-size="16" fill="#2d5a4c" line-height="26">
        "아이가 눈을 깜빡이거나 헛기침을 하는 것은 눈이나 목에 이상이 있어서가 아니라,"
      </text>
      <text x="35" y="112" font-family="${fontFamilies}" font-size="16" fill="#2d5a4c">
        "뇌 기저핵에서 불필요한 운동 신호를 걸러내지 못해 터져 나오는 신호입니다."
      </text>
      <text x="35" y="142" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857">
        "다그치지 않고 뇌 자생력을 깨워주는 1:1 맞춤 치료가 완치의 지름길입니다."
      </text>
      <text x="35" y="180" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#52796f">
        검단신도시 · 원당동 · 당하동 · 마전동 · 불로동 소아 틱장애 진료
      </text>
    </g>

    <!-- Bottom Hospital Info Footer -->
    <g transform="translate(55, 770)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#0c4a3b" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff">
        해아림한의원 인천부평점
      </text>
      <text x="260" y="45" font-family="${fontFamilies}" font-size="15" fill="#a7f3d0">
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
      <stop offset="0%" stop-color="#062e24" />
      <stop offset="50%" stop-color="#0c4a3b" />
      <stop offset="100%" stop-color="#031c16" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">⚠️ POINT 01. 뇌신경학적 원인 기전</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f2922">
      "참으라고 하면 왜 더 심해질까요?"
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#dc2626">
      의지의 문제가 아닌, 뇌 기저핵 브레이크 미성숙과 '전조감각충동'의 진실
    </text>

    <!-- 3 Flow Step Boxes -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b91c1c" text-anchor="middle">1</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          뇌 기저핵(Basal Ganglia) 브레이크 기능의 미성숙
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 대뇌피질에서 발생한 수많은 생각과 운동 신호 중 '불필요한 동작'을 걸러내지 못함
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 자동차 브레이크 패드가 닳아 미끄러지듯, 눈 깜빡임·헛기침 신호가 무의식적으로 방출
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          👉 아이의 나쁜 버릇이 아니라, '뇌신경계 조절 기능이 덜 성숙한 것'입니다.
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fef3c7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b45309" text-anchor="middle">2</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e">
          참을수록 차오르는 '전조감각충동(Premonitory Urge)'
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 틱을 하기 직전, 눈이 뻑뻑하거나 목이 간질거리고 답답한 찜찜한 신체 불쾌감
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 가려운 곳을 긁지 못하게 강요받는 것과 같은 극심한 고통이 내부에 축적됨
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#d97706">
          👉 아이는 틱 동작을 해야만 비로소 그 타들어가는 불쾌감에서 해방됩니다.
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">3</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          억제 후 긴장이 풀릴 때 터지는 '반동 폭발 현상'
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 학교나 학원에서는 눈치 보며 안간힘을 쓰고 참다가, 집에 오면 틱이 2배로 폭발
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 지적을 받으면 전두엽이 과열되면서 뇌 자생력과 회복 탄력성이 크게 저하됨
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
          👉 억지로 참는 훈련이 아닌, '기저핵 스스로 조절력을 찾는 치료'가 필요합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0c4a3b" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        💡 틱은 혼낼 대상이 아닌, 뇌신경계의 균형을 되찾아 주어야 할 치유의 신호입니다.
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
      <stop offset="0%" stop-color="#062e24" />
      <stop offset="50%" stop-color="#0c4a3b" />
      <stop offset="100%" stop-color="#031c16" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">📋 POINT 02. 자가진단 체크리스트</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f2922">
      단순한 버릇일까, 틱장애일까?
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      2가지 이상 해당하고 4주 이상 지속된다면 조기 진단이 필요합니다.
    </text>

    <!-- 5 Checklist Items -->
    <g transform="translate(55, 140)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8faf9" stroke="#d1fae5" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#10b981" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 눈을 질끈 감거나 흰자가 보일 정도로 치켜뜬다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          안과에서 알레르기 결막염 안약을 넣어도 눈 깜빡임이 멈추지 않고 지속됨
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 115)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8faf9" stroke="#d1fae5" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#10b981" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 비염·감기가 없는데도 '음음', '킁킁' 헛기침을 반복한다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          이비인후과 약을 먹어도 목 가다듬는 소리나 헛기침이 줄어들지 않음
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 230)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8faf9" stroke="#d1fae5" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#10b981" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 스마트폰·TV를 보거나 긴장할 때 증상이 심해진다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          시각 신경 과부하가 걸리거나 시험, 새 학기 등 스트레스 상황에서 빈도 증가
        </text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 345)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8faf9" stroke="#d1fae5" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#10b981" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          4. 지적하면 잠깐 멈추지만, 잠시 후 더 크게 터져 나온다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          의식적으로 잠깐 참을 수는 있으나 이내 반동으로 더 격렬해지는 전형적 양상
        </text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 460)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8faf9" stroke="#d1fae5" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#10b981" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          5. 코 찡긋, 턱 내밀기, 어깨 들썩임으로 부위가 이동한다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          눈에서 코, 입, 목, 어깨로 증상이 위에서 아래로 이동하거나 복합화됨
        </text>
      </g>
    </g>

    <!-- Bottom Action Notice -->
    <g transform="translate(55, 735)">
      <rect x="0" y="0" width="860" height="105" rx="18" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46" text-anchor="middle">
        💡 틱 증상이 나타난 지 3~6개월 이내의 초기 치료 골든타임이 결정적입니다.
      </text>
      <text x="430" y="78" font-family="${fontFamilies}" font-size="15" fill="#047857" text-anchor="middle">
        방치하면 뚜렛증후군이나 성인기 틱으로 만성화될 수 있으므로 조기 정밀검사가 중요합니다.
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
      <stop offset="0%" stop-color="#062e24" />
      <stop offset="50%" stop-color="#0c4a3b" />
      <stop offset="100%" stop-color="#031c16" />
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
      기저핵 자생력을 깨우는 3단계 치료
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      단순 증상 억제가 아닌, 두뇌 신경계의 불균형을 바로잡아 재발을 막습니다.
    </text>

    <!-- 3 Step Treatment Cards -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🍵</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          1. 청열안신(淸熱安神) 체질 맞춤 한약
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 과열된 뇌신경 흥분을 가라앉히고 간기울결(肝氣鬱結)을 풀어주는 맞춤 처방
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 억간산, 시호가용골모려탕, 사역산 등 순하고 안전한 식약처 안심 한약재 사용
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 기저핵의 흥분-억제 시소 균형을 맞춰 스스로 운동 신호를 걸러내도록 유도
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">👐</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          2. 두개천골 추나요법 &amp; 무통 자석침 치료
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 상경추와 두개골의 미세 변위를 바로잡아 뇌척수액 순환과 뇌압 안정
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 아프지 않은 무통 자석침과 은나노 침으로 안면 신경과 경혈(백회, 신문, 태충) 자극
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 안구 주변과 경목부 근막 긴장을 즉각적으로 이완시켜 신체 불쾌감 해소
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">⚡</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          3. 뉴로피드백 &amp; 감각통합 두뇌 훈련
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 뇌파를 실시간으로 모니터링하며 불안정한 과각성 뇌파를 스스로 안정화
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 충동 억제력과 주의집중력을 강화하여 틱 충동을 스스로 조절하는 힘 완성
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 치료 종료 후에도 스스로 안정된 뇌파를 유지하는 장기 자생력 완성
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

// 5. POINT 04 (생활 팁 & 학부모 3대 행동 수칙 카드)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#062e24" />
      <stop offset="50%" stop-color="#0c4a3b" />
      <stop offset="100%" stop-color="#031c16" />
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
      진료실 밖 학부모 필수 3대 행동 수칙
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      가정 내 환경과 부모님의 태도가 아이의 회복 속도를 2배 앞당깁니다.
    </text>

    <!-- 3 Action Boxes -->
    <g transform="translate(55, 145)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">👁️</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 01. '못 본 척, 안 들은 척' 무관심이 최고의 약입니다
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • "눈 깜빡이지 마", "기침 그만해"라는 지적과 걱정 어린 눈빛 일체 멈추기
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 지적을 받으면 아이는 수치심과 불안을 느껴 뇌신경이 더 강하게 과열됩니다.
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 아이의 증상을 없는 것처럼 편안하게 대화하고 눈을 맞춰주세요.
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">📱</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 02. 시각 신경 과부하 차단 &amp; 자연 햇볕 쬐기
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 스마트폰, 유튜브 숏폼, 게임 등 빠른 시각적 자극은 기저핵을 강하게 흥분시킴
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 취침 2시간 전 모든 전자기기를 끄고, 낮 동안 30분 이상 가벼운 야외 산책
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 자연광을 쬐어 멜라토닌 분비와 뇌신경 안정 호르몬을 활성화합니다.
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🛁</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 03. 취침 전 40도 온수 족욕 &amp; 4-7-8 이완 호흡
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 잠들기 60분 전 15분간 따뜻한 족욕으로 하체 혈류를 틔우고 상열감 해소
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 아이와 함께 4초 들이쉬고 7초 멈춘 뒤 8초간 길게 내쉬는 호흡 루틴 실천
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 교감신경의 긴장을 풀고 깊은 서파 수면으로 두뇌 회복력을 극대화합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0c4a3b" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        💡 부모의 여유롭고 따뜻한 시선이 아이 뇌신경 치료의 가장 강력한 지지대입니다.
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
  console.log('Rendering Geomdan Tic Suppression Cards (Thumbnail + Point1 + Point2 + Point3 + Point4)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
