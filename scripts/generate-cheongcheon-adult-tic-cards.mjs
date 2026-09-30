import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/cheongcheon-adult-tic',
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
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🗣️ 성인 틱장애 · 음성틱 두뇌 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="670" height="40" rx="8" fill="#ecfdf5" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#047857">
        "회의실에서 참으려 할수록 더 터져 나오는 '큼큼' 헛기침의 진실"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.2">
      청천동 성인 틱장애 | '큼큼' 헛기침 · 음성틱
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#059669">
      직장 스트레스로 인한 뇌 기저핵 불균형과 1:1 맞춤 한방 치료법
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⚠️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 기저핵 과부하</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#4a5f57">만성 과로와 번아웃으로 인한</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">뇌 운동 억제 브레이크 마모</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🗣️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 전조감각충동</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#4a5f57">목구멍이 간질거리고 답답한</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">신체 불쾌감으로 인한 헛기침</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🍵</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 청간안신 한약</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#4a5f57">억간산 · 사역산 맞춤 처방</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">뇌신경 흥분 완화 &amp; 긴장 이완</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">💼</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 직장인 뇌 리셋</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#4a5f57">모니터 시각 피로 컷오프</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">4-7-8 호흡 &amp; 취침 전 온수 족욕</text>
      </g>
    </g>

    <!-- Bottom Clinical Message Box -->
    <g transform="translate(55, 525)">
      <rect x="0" y="0" width="860" height="215" rx="20" fill="#f2f7f4" stroke="#c2ded5" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1b4332">
        💡 한방침구과 전문의 권형근 대표원장의 진료 노트
      </text>
      <text x="35" y="82" font-family="${fontFamilies}" font-size="16" fill="#2d5a4c">
        "성인 틱장애는 어릴 때 완치된 줄 알았던 소인(素因)이 성인기 극심한 과로와 스트레스로 재발하는 것입니다."
      </text>
      <text x="35" y="112" font-family="${fontFamilies}" font-size="16" fill="#2d5a4c">
        "의지력으로 억지로 참으려 하면 대인기피와 사회불안으로 악화될 수 있습니다."
      </text>
      <text x="35" y="142" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857">
        "뇌 기저핵의 자율 조절력을 회복하면 직장 생활에서도 당당하고 편안해질 수 있습니다."
      </text>
      <text x="35" y="180" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#52796f">
        부평구 청천동 · 갈산동 · 산곡동 · 삼산동 성인 틱장애 두뇌 클리닉
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">⚠️ POINT 01. 성인 틱장애 병리 기전</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f2922">
      "성인이 되어서 왜 틱이 다시 나타날까요?"
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#dc2626">
      의지의 나약함이 아닌, 과로와 스트레스로 인한 뇌 기저핵 브레이크 마모
    </text>

    <!-- 3 Flow Step Boxes -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b91c1c" text-anchor="middle">1</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          만성 과로 &amp; 직무 스트레스로 인한 기저핵(브레이크) 과열
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 어린 시절 잠재되어 있던 틱 소인이 성인기 과도한 업무 피로로 재발
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 불필요한 운동 신호를 차단하는 뇌 기저핵의 흥분-억제 시소 균형 붕괴
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          👉 무의식적으로 목 가다듬는 소리와 헛기침 신호가 터져 나옵니다.
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fef3c7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b45309" text-anchor="middle">2</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e">
          목구멍이 타들어가는 듯한 '전조감각충동'
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 헛기침 직전, 목에 모래알이나 가래가 낀 것 같은 극심한 불쾌감 발생
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • '큼큼', '음음' 소리를 내어 성대를 진동시켜야만 일시적으로 해소됨
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#d97706">
          👉 이비인후과 검사상 후두나 성대에는 아무런 이상이 없습니다.
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d" text-anchor="middle">3</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          사회적 눈치와 참음으로 인한 '반동 폭발 &amp; 대인불안'
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 조용한 사무실, 회의실에서 눈치를 보며 억지로 참다 보면 전두엽 과열
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#4b5563">
          • 긴장이 풀리는 퇴근 후나 주말에 2배 이상의 격렬한 틱으로 폭발
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
          👉 "내가 이상해 보일까?" 하는 사회공포증으로 악화되기 전 치료해야 합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0c4a3b" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        💡 성인 틱은 습관이 아닌, 지친 뇌신경계에 휴식과 조절력을 주어야 할 질환입니다.
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">📋 POINT 02. 성인 틱장애 자가진단</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f2922">
      단순 헛기침일까, 성인 음성틱일까?
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      아래 5가지 중 2가지 이상 해당되고 지속된다면 조기 진단이 필요합니다.
    </text>

    <!-- 5 Checklist Items -->
    <g transform="translate(55, 140)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8faf9" stroke="#d1fae5" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#10b981" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 비염이나 감기가 없는데 '큼큼', '음음', '켁켁' 소리를 반복한다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          이비인후과 약을 먹어도 목 가다듬는 소리가 줄어들지 않고 계속됨
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 115)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8faf9" stroke="#d1fae5" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#10b981" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 직장 회의, 발표, 긴장 상황이나 과로할 때 증상이 심해진다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          스트레스를 받거나 업무 마감 직전 헛기침 빈도가 통제 불능으로 증가
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 230)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8faf9" stroke="#d1fae5" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#10b981" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 목이 간질거리고 답답하여 소리를 내야만 편안해진다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          성대를 울려 신체 불쾌감(전조감각충동)을 해소하려는 충동이 듦
        </text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 345)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8faf9" stroke="#d1fae5" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#10b981" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          4. 참으려고 하면 가슴이 조여오고 나중에 더 심하게 터진다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          사무실에서 억지로 참다가 퇴근 후 혼자 있을 때 반동 틱으로 폭발
        </text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 460)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8faf9" stroke="#d1fae5" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#10b981" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          5. 헛기침과 함께 눈 깜빡임, 턱 내밀기, 어깨 들썩임이 동반된다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          음성 틱과 운동 틱이 복합적으로 얽혀 나타나는 양상
        </text>
      </g>
    </g>

    <!-- Bottom Action Notice -->
    <g transform="translate(55, 735)">
      <rect x="0" y="0" width="860" height="105" rx="18" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46" text-anchor="middle">
        💡 성인 틱은 부끄러워 숨길수록 뇌신경 긴장이 가중되어 악화됩니다.
      </text>
      <text x="430" y="78" font-family="${fontFamilies}" font-size="15" fill="#047857" text-anchor="middle">
        원인을 바로잡으면 성인기에도 충분히 깨끗하게 치료될 수 있습니다.
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
      기저핵의 억제 조절력을 복원하는 3단계 치료
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      졸림이나 인지저하 부작용 없이, 뇌 자생력을 깨워 틱 충동을 잠재웁니다.
    </text>

    <!-- 3 Step Treatment Cards -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🍵</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          1. 청간안신(淸肝安神) 맞춤 한약 처방
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 스트레스로 과열된 간(肝)의 화를 내리고 뇌신경을 안정시키는 1:1 탕약
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 억간산, 사역산, 시호청간탕, 가미귀비탕 등 식약처 규격 안심 한약재 사용
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 기저핵의 브레이크 회로를 정상화하여 무의식적 운동 신호 누출 차단
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">👐</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          2. 두개천골 추나요법 &amp; 인후부 약침 치료
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 상경추와 후두골의 변위를 교정하여 뇌척수액 순환 촉진 및 뇌압 안정
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 인후부 근막 긴장과 성대 주변 어혈을 풀어주는 청열 약침 및 전침 시술
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 목에 낀 듯한 이물감과 찜찜한 전조감각충동을 즉각적으로 완화
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">⚡</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          3. 뉴로피드백 &amp; 자율신경 조절 훈련
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 실시간 뇌파 훈련으로 과각성된 하이베타파를 낮추고 SMR(안정파) 강화
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 충동 억제력과 스트레스 저항성을 길러 긴장 상황에서도 틱을 조절
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 치료가 끝난 후에도 스스로 안정된 뇌파를 유지하는 장기 자생력 완성
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

// 5. POINT 04 (생활 팁 & 직장인 뇌 리셋 수칙 카드)
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
      직장인 뇌 과열을 식히는 3대 힐링 루틴
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      의지로 참지 않고, 뇌신경 피로를 풀어 틱 충동을 가라앉히는 물리적 실천법
    </text>

    <!-- 3 Action Boxes -->
    <g transform="translate(55, 145)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">💻</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          루틴 01. '50분 근무 후 5분 시각 피로 컷오프'
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 컴퓨터 모니터의 블루라이트와 깜빡임은 뇌 기저핵을 끊임없이 자극합니다.
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 50분 집중 후 5분간 창밖 먼 곳을 바라보거나 눈을 감고 후두부 근육을 이완
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 시각 신경의 과부하를 줄여 헛기침 충동을 낮춥니다.
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🫁</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          루틴 02. 긴장 상황 '4-7-8 횡격막 이완 호흡'
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 회의나 발표 직전 목이 조여올 때 코로 4초 들이쉬고 7초 멈춘 뒤 8초간 길게 내쉼
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 미주신경을 자극하여 성대와 후두부 주변의 과도한 근육 수축을 즉각 이완
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 목에 차오르는 전조감각충동의 압력을 부드럽게 분산시킵니다.
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🛁</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          루틴 03. 취침 전 40도 온수 족욕 15분 &amp; 카페인 컷
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 오후 2시 이후 커피·에너지음료 등 고카페인은 기저핵을 강하게 각성시킴
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 취침 전 따뜻한 족욕으로 상체의 열을 발끝으로 순환시켜 깊은 숙면 유도
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 하루 동안 쌓인 뇌 피로를 씻어내어 다음 날 틱 발생 빈도를 현저히 낮춥니다.
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0c4a3b" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        💡 틱을 참으려는 노력보다, 뇌의 휴식과 피로 해소가 가장 빠른 치유의 길입니다.
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
  console.log('Rendering Cheongcheon Adult Tic Cards (Thumbnail + Point1 + Point2 + Point3 + Point4)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
