import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/geomdan-smartphone-tic',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 대표 썸네일 요약 카드)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="50%" stop-color="#0f372e" />
      <stop offset="100%" stop-color="#022019" />
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🩺 소아청소년 뇌신경 &amp; 틱장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#ecfdf5" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#047857">
        유튜브·게임만 보면 눈 깜빡임과 킁킁거림이 폭발할 때?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      검단신도시 소아 틱장애 미디어 과각성
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#059669">
      시각신경 자극 · 기저핵 도파민 불균형 1:1 맞춤 한방 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">📱</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 발병 기전</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">시각신경 과자극 &amp; 도파민 폭주</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">기저핵 브레이크 마모 현상</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가 진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">미디어 노출 후 틱 악화 신호</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">전두엽 피로 5대 체크리스트</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 맞춤 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">청간식풍 탕약 &amp; 뇌파 훈련</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">기저핵 억제력 3단계 회복</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 생활 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">스크린 타임 룰 &amp; 안구 이완</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">가정 내 시각 휴식 3대 루틴</text>
      </g>
    </g>

    <!-- Bottom Message Box -->
    <g transform="translate(55, 540)">
      <rect x="0" y="0" width="860" height="180" rx="16" fill="#f8fafc" stroke="#e2ece7" />
      <text x="30" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
        💡 스마트폰 화면은 왜 틱을 증폭시킬까요?
      </text>
      <text x="30" y="82" font-family="${fontFamilies}" font-size="16" fill="#475569">
        초당 수십 번 깜빡이는 청색광과 빠른 프레임 전환이 망막을 통해 시각 피질과 기저핵을 직격합니다.
      </text>
      <text x="30" y="112" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">
        과다 분비된 도파민이 불필요한 근육 신호를 걸러내는 '기저핵의 브레이크 필터'를 마비시킵니다.
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        단순히 폰을 뺏는 것만으로는 안 되며, 과열된 뇌 시각 경로와 신경계를 안정시켜야 합니다.
      </text>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 750)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="42" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="72" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        한방침구과 전문의 권형근 대표원장 진료 | 부평역 7번 출구 | 월·수·금 야간진료 8시
      </text>
      <g transform="translate(680, 15)">
        <rect x="0" y="0" width="180" height="52" rx="12" fill="#059669" />
        <text x="90" y="33" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">1:1 소아 틱 상담</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 2. POINT 1 CARD (원인기전)
function generatePoint1Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="50%" stop-color="#0f372e" />
      <stop offset="100%" stop-color="#022019" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🧠 POINT 01. 신경학적 발병 기전</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 45)">
      <text x="0" y="36" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
        스마트폰 영상이 기저핵을 과열시키는 이유
      </text>
      <text x="0" y="76" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#059669">
        시각 자극 과부하가 부르는 '두뇌 브레이크 시스템' 마모
      </text>
    </g>

    <!-- 3 Mechanism Flow Cards -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fee2e2" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">📱</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          1단계. 초고속 프레임 &amp; 블루라이트의 망막 폭격
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 숏폼, 게임 등 1초에 수십 번 변하는 강렬한 시각 자극이 시신경을 강타
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 후두엽(시각피질)과 시상(Thalamus)이 쉴 틈 없이 과각성 상태로 돌입
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
          👉 눈의 깜빡임 조절 반사가 마비되고 안구 건조·피로 극대화
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fff7ed" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">⚡</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#c2410c">
          2단계. 기저핵 도파민 과잉 분출 &amp; 흥분성 폭주
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 즉각적 보상 자극으로 인해 뇌 속 신경전달물질 '도파민'이 과다 분비
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 운동 억제 회로를 담당하는 '기저핵(Basal Ganglia)'의 제어 능력 마비
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ea580c">
          👉 불필요한 운동 신호를 걸러내지 못하고 밖으로 터져 나옴
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#ecfdf5" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">👁️</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#065f46">
          3단계. 눈 깜빡임, 고개 흔들기, 헛기침 틱 폭발
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 스마트폰을 볼 때 및 화면을 끈 직후 반동적으로 틱 증상이 급증
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 전두엽의 자기조절력(브레이크)이 방전되어 스스로 제어 불가능
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          👉 시각 신경로 진정 및 기저핵 조절 치료가 시급합니다
        </text>
      </g>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 730)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        한방침구과 전문의 권형근 대표원장 | 부평역 7번 출구 | 032-719-3472
      </text>
    </g>
  </g>
</svg>`;
}

// 3. POINT 2 CARD (자가진단 체크리스트)
function generatePoint2Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="50%" stop-color="#0f372e" />
      <stop offset="100%" stop-color="#022019" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">📋 POINT 02. 자가진단 체크리스트</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 45)">
      <text x="0" y="36" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
        미디어 노출 후 틱 악화 &amp; 전두엽 피로 5대 신호
      </text>
      <text x="0" y="76" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#059669">
        우리 아이의 뇌가 시각 과부하에 걸려 있는지 확인해보세요
      </text>
    </g>

    <!-- Checklist 5 Items -->
    <g transform="translate(55, 135)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="88" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="45" cy="44" r="20" fill="#ecfdf5" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">스마트폰·태블릿을 볼 때 눈 깜빡임 빈도가 2~3배 급증한다</text>
        <text x="85" y="66" font-family="${fontFamilies}" font-size="14" fill="#64748b">화면 속 빠른 움직임에 반응하여 안면 근육 경련이 심화됨</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 103)">
        <rect x="0" y="0" width="860" height="88" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="45" cy="44" r="20" fill="#ecfdf5" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">미디어를 끄고 난 직후 고개 까딱임이나 '음음' 음성틱이 쏟아진다</text>
        <text x="85" y="66" font-family="${fontFamilies}" font-size="14" fill="#64748b">억제되었던 도파민 신경망의 반동성 과흥분 현상</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 206)">
        <rect x="0" y="0" width="860" height="88" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="45" cy="44" r="20" fill="#ecfdf5" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">화면을 못 보게 제지하면 극도의 짜증과 분노 폭발을 보인다</text>
        <text x="85" y="66" font-family="${fontFamilies}" font-size="14" fill="#64748b">도파민 중독 회로로 인한 감정 조절 중추(변연계)의 과각성</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 309)">
        <rect x="0" y="0" width="860" height="88" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="45" cy="44" r="20" fill="#ecfdf5" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">잠들기 직전까지 틱을 하거나, 자다가 자주 깨서 보챈다</text>
        <text x="85" y="66" font-family="${fontFamilies}" font-size="14" fill="#64748b">시각 잔상이 수면 멜라토닌 분비를 차단하여 야간 뇌 이완 방해</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 412)">
        <rect x="0" y="0" width="860" height="88" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="45" cy="44" r="20" fill="#ecfdf5" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">피곤하거나 어두운 방에서 스마트폰을 볼 때 틱이 절정에 달한다</text>
        <text x="85" y="66" font-family="${fontFamilies}" font-size="14" fill="#64748b">시신경 피로 누적으로 뇌 기저핵 필터링 기능 완전 붕괴</text>
      </g>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 730)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        2개 이상 해당 시 기저핵 도파민 회로 안정 및 전문 검사 권장
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 3 CARD (맞춤치료)
function generatePoint3Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="50%" stop-color="#0f372e" />
      <stop offset="100%" stop-color="#022019" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 POINT 03. 1:1 맞춤 한방 치료</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 45)">
      <text x="0" y="36" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
        시각 과각성 틱장애 3단계 맞춤 한방 치료
      </text>
      <text x="0" y="76" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#059669">
        간화(肝火)를 내리고 기저핵 브레이크를 복원하는 통합 솔루션
      </text>
    </g>

    <!-- 3 Treatment Step Cards -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#ecfdf5" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🌿</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          1단계. 청간식풍(淸肝熄風) &amp; 안신(安神) 1:1 맞춤 한약
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 억간산(抑肝散), 시호가용골모려탕, 영각구등음 가감방 처방
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 시신경 과열로 치솟은 간화(풍열)를 끄고 도파민 수용체의 과민성을 진정
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          👉 불수의적인 눈 깜빡임과 안면 경련 충동을 빠르게 소실
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#eff6ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">📍</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          2단계. 시신경 이완 침구 &amp; 무통 자석침 치료
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 찬죽, 태양, 풍지(눈 주변 및 시각피질 혈류 개선) + 태충, 신문(흥분 완화)
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 어린아이도 아프지 않게 받는 무통 자석침과 청정 한약재 약침 요법
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#2563eb">
          👉 뇌간과 경추 주변 신경 긴장을 해소하고 안구 피로 즉각 완화
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fdf4ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🧠</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          3단계. 뇌파 조절(뉴로피드백) &amp; 감각통합 훈련
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 전두엽의 억제 뇌파(SMR파)를 강화하고 과각성된 하이베타파 다운
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 미디어 자극 속에서도 스스로 뇌를 안정시킬 수 있는 신경 자생력 완성
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#9333ea">
          👉 재발 방지 및 학습 집중력 동시 개선
        </text>
      </g>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 730)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        한방침구과 전문의 권형근 대표원장 | 부평역 7번 출구 | 032-719-3472
      </text>
      <g transform="translate(680, 15)">
        <rect x="0" y="0" width="180" height="52" rx="12" fill="#059669" />
        <text x="90" y="33" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">네이버 간편예약</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 5. POINT 4 CARD (생활팁 - 약선차 제외)
function generatePoint4Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="50%" stop-color="#0f372e" />
      <stop offset="100%" stop-color="#022019" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">💡 POINT 04. 가정 내 생활 수칙 3가지</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 45)">
      <text x="0" y="36" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
        시각 피질을 쉬게 하는 일상 실천 루틴
      </text>
      <text x="0" y="76" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#059669">
        스마트폰 강제 압수 대신 뇌신경을 안정시키는 환경 솔루션
      </text>
    </g>

    <!-- 3 Action Cards -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#ecfdf5" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">⏱️</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          수칙 01. '20-20-20 규칙'과 취침 2시간 전 스크린 오프
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 화면을 20분 보면 20초간 6미터(20피트) 먼 곳을 바라보며 안구 근육 이완
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 취침 전 스마트폰 사용은 뇌를 밤새 각성시키므로 침실 전자기기 퇴출
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          👉 망막의 과부하를 줄여 야간 틱 증상 발생을 예방합니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#eff6ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🌳</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          수칙 02. 자연광 아래 30분 야외 활동 (초록 시야 확보)
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 공원이나 놀이터에서 넓은 시야를 바라보며 뛰어노는 시간 확보
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 자연광은 세로토닌을 분비시키고 좁아진 시각 초점을 넓혀 뇌를 이완
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#2563eb">
          👉 전두엽의 억제 조절 회로가 자연스럽게 강화됩니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fdf4ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🛁</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          수칙 03. 취침 1시간 전 따뜻한 족욕 15분 &amp; 안구 온찜질
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 40도 정도의 따뜻한 물에 발을 담가 상체와 머리로 쏠린 열(上熱)을 하강
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 따뜻한 물수건으로 눈가를 5분간 덮어 눈 주변 근막과 신경 이완
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#9333ea">
          👉 교감신경을 끄고 편안한 깊은 수면으로 유도합니다.
        </text>
      </g>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 730)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        한방침구과 전문의 권형근 대표원장 | 부평역 7번 출구 | 032-719-3472
      </text>
    </g>
  </g>
</svg>`;
}

async function renderCard(svgStr, outPath) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1080 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(outPath, pngBuffer);
}

async function run() {
  console.log('Rendering Geomdan Smartphone Tic Cards (Thumbnail + Point1 + Point2 + Point3 + Point4)...');
  
  const cards = [
    { name: '01_naver_main_thumbnail.jpg', svg: generateMainThumbnail() },
    { name: '02_point1_cause.jpg', svg: generatePoint1Card() },
    { name: '03_point2_checklist.jpg', svg: generatePoint2Card() },
    { name: '04_point3_treatment.jpg', svg: generatePoint3Card() },
    { name: '05_point4_selfcare.jpg', svg: generatePoint4Card() }
  ];

  for (const card of cards) {
    for (const dir of targetDirs) {
      const outPath = path.join(dir, card.name);
      await renderCard(card.svg, outPath);
      console.log(`Saved: ${outPath}`);
    }
  }

  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
