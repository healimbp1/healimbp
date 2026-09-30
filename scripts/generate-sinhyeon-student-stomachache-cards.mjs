import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/sinhyeon-student-stomachache',
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🩺 수험생 뇌-장축 &amp; 긴장성 스트레스 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#ecfdf5" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#047857">
        시험 직전만 되면 배가 쥐어짜듯 아프고 설사할 때?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      검단 신현동 수험생 긴장성 복통
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#059669">
      과민성 대장 증후군 · 뇌-장축(Brain-Gut) 조절 1:1 맞춤 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 3대 오해</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">꾀병 오해와 진통제 남용</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">의지 아닌 뇌신경 신호 이상</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🔬</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">뇌-장축(Brain-Gut Axis) 과민</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">간기울결 &amp; 비위 허한증</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 맞춤 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">평간건비 탕약 &amp; 복부 온열침</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">3단계 뇌·장 자생력 로드맵</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 생활 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">복부 온찜질 · 이완 호흡법</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">수험생 시험 불안 완화 팁</text>
      </g>
    </g>

    <!-- Bottom Message Box -->
    <g transform="translate(55, 540)">
      <rect x="0" y="0" width="860" height="180" rx="16" fill="#f8fafc" stroke="#e2ece7" />
      <text x="30" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
        💡 장(腸)은 인체의 '제2의 뇌'입니다
      </text>
      <text x="30" y="82" font-family="${fontFamilies}" font-size="16" fill="#475569">
        시험 스트레스로 뇌의 편도체가 과각성되면, 미주신경을 통해 장으로 즉각 신호가 전달되어
      </text>
      <text x="30" y="112" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669">
        장 평활근이 비정상적으로 경련하고 수분 흡수를 멈춰 복통과 급박변을 유발합니다.
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        위장만 다스려선 안 되며, 뇌의 불안 중추와 자율신경계를 함께 다스려야 시험 당일 실력을 발휘합니다.
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
        <text x="90" y="33" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">1:1 수험생 상담</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 2. POINT 1 CARD (CHAPTER 01 3대 오해와 함정)
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
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">⚠️ CHAPTER 01. 흔히 겪는 3대 오해</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 45)">
      <text x="0" y="36" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
        수험생 복통, 가장 많이 빠지는 3대 함정
      </text>
      <text x="0" y="76" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#dc2626">
        "공부하기 싫어서 꾀병 부리는 거야?" 부모님의 오해가 아이를 무너뜨립니다
      </text>
    </g>

    <!-- 3 Misconception Cards -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fee2e2" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">❌</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          함정 01. "시험 보기 싫어서 꾀병 부리는 거다?"
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 내시경 검사상 염증이 없다고 해서 꾀병이 아닙니다.
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 아이는 실제로 쥐어짜는 듯한 극심한 복통과 장 경련 고통을 겪고 있습니다.
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
          👉 꾀병 취급은 아이의 시험 불안과 스트레스를 2배로 증폭시킵니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fee2e2" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">❌</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          함정 02. "지사제나 진통제만 먹여서 시험장에 보낸다?"
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 일시적으로 장 운동을 억제하는 약물은 장 무력증이나 극심한 변비를 유발합니다.
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 약효가 떨어지면 반동성 설사와 불안이 더 심해져 시험 당일 큰 낭패를 봅니다.
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
          👉 대증 약물은 임시방편일 뿐 뇌-장축 과민성을 해결하지 못합니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fee2e2" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">❌</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          함정 03. "마음 단단히 먹고 멘탈로 버텨라?"
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 자율신경계는 의지력으로 조절할 수 없는 불수의 신경입니다.
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • "참아야 한다"는 강박이 오히려 교감신경을 자극해 장 경련을 폭발시킵니다.
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">
          👉 의지 탓을 멈추고 신경학적·신체적 조절 치료를 시작해야 합니다.
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

// 3. POINT 2 CARD (CHAPTER 02 왜 안 나았을까? 3대 심층 원인 3박스)
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🔬 CHAPTER 02. 왜 안 나았을까? 3대 심층 원인</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 45)">
      <text x="0" y="36" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
        수험생 긴장성 복통의 3대 심층 메커니즘
      </text>
      <text x="0" y="76" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#059669">
        스트레스가 장을 쥐어짜는 '뇌-장 축(Brain-Gut Axis)'의 실체
      </text>
    </g>

    <!-- 3 Cause Cards -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#eff6ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🧠</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1e3a8a">
          원인 01. 뇌-장 축(Brain-Gut Axis) 신경 전달 이상
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌와 장은 미주신경으로 직결된 하나의 감정 네트워크입니다.
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌에서 감지한 시험 불안 신호가 0.1초 만에 장 신경총으로 직행하여 경련 유발
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#2563eb">
          👉 장내 감각신경 역치가 낮아져 작은 스트레스에도 쥐어짜는 통증 발생
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#ecfdf5" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🔥</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#065f46">
          원인 02. 간기울결(肝氣鬱結)과 비위허한(脾胃虛寒)
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 학업 스트레스로 간의 기운이 뭉치면(간기울결), 소화기(비위)를 공격합니다(간비불화).
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 배가 차갑고 소화력이 약해져(비위허한) 장내 가스가 차고 물설사 발생
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          👉 간의 기운을 풀고 위장을 따뜻하게 데워주는 체질 한방 치료 필수
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fff7ed" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">⚡</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#c2410c">
          원인 03. 교감신경 과항진 &amp; 장내 혈류 차단
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 긴장하면 교감신경이 폭주하여 혈액이 뇌와 근육으로만 쏠립니다.
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 위장관으로 가는 혈류가 차단되면서 소화 흡수 마비 및 장 연동운동 폭주
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ea580c">
          👉 자율신경계 균형을 맞춰야 장 혈류가 회복되고 복통이 멈춥니다
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
        부평역 7번 출구 | 뇌기능·자율신경 정밀 검사 &amp; 수험생 클리닉
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 3 CARD (CHAPTER 03 3단계 회복 로드맵)
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 CHAPTER 03. 3단계 회복 로드맵</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 45)">
      <text x="0" y="36" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
        수험생 긴장성 복통 3단계 맞춤 한방 치료
      </text>
      <text x="0" y="76" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#059669">
        뇌를 편안하게, 장을 따뜻하게! 시험 당일 최상의 컨디션 유지
      </text>
    </g>

    <!-- 3 Step Solution Cards -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#ecfdf5" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🌱</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          1단계 (급성기): 평간건비(平肝健脾) 1:1 맞춤 한약 처방
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 간기울결을 풀고 비위를 보하는 통사요방(痛瀉要方), 분심기음(分心氣飮) 처방
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 장내 이상 발효 가스를 제거하고 장 평활근의 과도한 경련을 신속히 이완
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          👉 졸림 없는 청정 한약으로 시험 공부 집중력 동시 향상
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#eff6ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🔥</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          2단계 (회복기): 복부 온열 뜸 &amp; 자율신경 조절 침구 치료
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 중완(中脘), 천추(天樞), 관원(關元)에 무연 온열 뜸을 놓아 하복부 혈류 촉진
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 내관(심신 안정), 태충(스트레스 완화), 족삼리(소화기 강화) 자극
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#2563eb">
          👉 차가워진 복부를 덥혀 긴장성 급박변과 설사 즉각 차단
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fdf4ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🧠</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          3단계 (안정기): 뇌파 조절(뉴로피드백) &amp; 시청각 이완 훈련
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 시험 압박감으로 과열된 뇌파(고베타파)를 낮추고 안정된 알파파 유도
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 실전 모의고사 상황에서도 장이 놀라지 않는 '두뇌 스트레스 저항력' 완성
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#9333ea">
          👉 시험장 화장실 불안 완벽 탈출 및 실전 성적 유지
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

// 5. POINT 4 CARD (CHAPTER 04 수험생과 부모님 3대 행동 수칙)
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">💡 CHAPTER 04. 수험생·부모 3대 수칙</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 45)">
      <text x="0" y="36" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
        진료실 밖 수험생 &amp; 부모님 실천 3대 수칙
      </text>
      <text x="0" y="76" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#059669">
        가정에서 장 경련을 줄이고 시험 불안을 잠재우는 일상 솔루션
      </text>
    </g>

    <!-- 3 Action Cards -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#ecfdf5" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🔥</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          수칙 01. 취침 전 복부 온찜질 15분 &amp; 찬 음식 엄격 제한
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 따뜻한 찜질팩으로 배꼽 주변을 15분간 덮어 장 평활근 이완
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 아이스 음료, 찬 우유, 튀김류 등 고FODMAP 자극 음식 피하기
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          👉 장 온도를 1도 올리면 경련 발생 빈도가 절반으로 감소합니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#eff6ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🌬️</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          수칙 02. 시험 시작 5분 전 '4-7-8 이완 복식호흡'
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 4초간 코로 깊게 숨을 들이마시고, 7초간 멈춘 뒤, 8초간 입으로 길게 내쉬기
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 과열된 교감신경을 즉각 끄고 미주신경(부교감)을 활성화
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#2563eb">
          👉 시험 직전 닥쳐오는 급박한 복통과 화장실 충동을 차단합니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fdf4ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">❤️</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
          수칙 03. 부모님의 '결과 압박 없는 따뜻한 신뢰와 격려'
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • "이번 시험 잘 봐야 해" 대신 "네가 최선을 다한 것만으로도 충분해"
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 아이의 배 아픔을 지적하거나 다그치지 않고 안아주기
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#9333ea">
          👉 부모의 안도감이 아이 뇌의 공포 중추(편도체)를 가장 빠르게 안정시킵니다.
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
  console.log('Rendering Sinhyeon Student Stomachache Cards (Thumbnail + Point1 + Point2 + Point3 + Point4)...');
  
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
