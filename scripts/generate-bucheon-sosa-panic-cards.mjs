import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-sosa-subway-panic',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (C타입 오답노트형)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#dc2626" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🚨 지하철 과호흡 &amp; 공황발작 오답노트</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="580" height="40" rx="8" fill="#fee2e2" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        "숨이 턱 막히고 쓰러질 것 같아요" 환승 통로의 공포
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="43" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부천 소사역 지하철 과호흡·공황발작 종결 오답노트
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#475569" letter-spacing="-0.5">
      과호흡의 역설 · 편도체 오작동 · 1:1 뇌신경 밸런스 회복법
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Wrong/Fact Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ffe4e6" />
        <circle cx="67" cy="67" r="26" fill="#e11d48" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#881337">
          오답 1: "숨이 부족하니 더 깊게 헐떡여야 산다?"
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4c0519">
          👉 팩트: 산소 부족이 아니라 과호흡으로 인한 이산화탄소 고갈이 질식감을 만듭니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ffe4e6" />
        <circle cx="67" cy="67" r="26" fill="#e11d48" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#881337">
          오답 2: "심장이나 폐에 치명적인 이상이 생긴 것이다?"
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4c0519">
          👉 팩트: 심장·폐는 건강하며, 뇌 편도체 화재경보기가 허위 신호를 울린 것입니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ffe4e6" />
        <circle cx="67" cy="67" r="26" fill="#e11d48" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#881337">
          오답 3: "정신력이 약해서 그러니 지하철을 피하면 된다?"
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4c0519">
          👉 팩트: 회피할수록 공포 반경이 넓어지며, 심담허겁과 자율신경 회복이 핵심입니다.
        </text>
      </g>
    </g>

    <!-- Bottom Clinic Info Bar -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="72" rx="16" fill="#0f172a" />
      <text x="40" y="44" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#38bdf8">
        해아림한의원 인천부평점
      </text>
      <text x="820" y="44" font-family="${fontFamilies}" font-size="17" fill="#cbd5e1" text-anchor="end">
        한방침구과 전문의 권형근 대표원장 1:1 직접 진료
      </text>
    </g>
  </g>
</svg>`;
}

// 2. CHAPTER 01: 오답 1 (과호흡의 역설)
function generatePoint1Wrong1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">❌ CHAPTER 01. 치명적 오답 1</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="320" height="36" rx="8" fill="#fee2e2" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c">
        ⚠️ 숨이 안 쉬어질 때 가장 많이 하는 실수
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="36" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      "산소가 부족하니 가슴으로 헐떡여야 산다?"
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      숨을 급하게 몰아쉴수록 뇌혈관은 수축하고 질식감은 더 심해집니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- Detailed Explanation Blocks -->
    <g transform="translate(55, 230)">
      <!-- Box 1: 오답의 실체 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          환승 통로 과호흡(Hyperventilation)의 치명적 역설
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 소사역 만원 환승 통로에서 가슴이 답답해지면 본능적으로 입을 벌려 숨을 들이마심
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#dc2626" font-weight="bold">
          • 결과: 체내 이산화탄소(CO2)가 비정상적으로 빠져나가 혈액이 알칼리화(호흡성 알칼리증)됨
        </text>
      </g>

      <!-- Box 2: 팩트 폭격 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#15803d">
          의학적 팩트: 산소 과다가 뇌혈류를 옥죕니다
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • CO2가 고갈되면 뇌혈관이 수축하여 정작 뇌세포로 가는 산소 공급이 차단됨
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#15803d" font-weight="bold">
          • 손발 저림, 핑 도는 어지럼, 눈앞이 깜깜해지는 실신 전조 증상이 바로 이 때문!
        </text>
      </g>

      <!-- Box 3: 응급 대처법 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          💡 역발상 즉각 대처: "들이마시지 말고, 길게 내쉬어라!"
        </text>
        <text x="35" y="80" font-family="${fontFamilies}" font-size="16" fill="#334155">
          숨을 더 쉬려 하지 말고, 입술을 오므린 채 천천히 8초 동안 숨을 내뱉는 데 집중해야 합니다.
        </text>
        <text x="35" y="108" font-family="${fontFamilies}" font-size="15" fill="#64748b">
          체내 CO2 농도가 정상으로 회복되어야 뇌혈관이 열리고 질식감이 사라집니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="55" rx="14" fill="#0f172a" />
      <text x="430" y="34" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        질식감은 숨이 모자라서가 아니라, 잘못된 호흡 방식 때문에 생깁니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. CHAPTER 02: 오답 2 (심장/폐의 병이라는 착각)
function generatePoint2Wrong2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">❌ CHAPTER 02. 치명적 오답 2</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="310" height="36" rx="8" fill="#fee2e2" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c">
        ⚠️ 응급실 가도 "이상 없다"는 이유
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="36" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      "심장이 터질 것 같으니 심장병이 분명하다?"
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      심장과 폐는 정상이며, 두뇌의 '화재경보기(편도체)'가 오작동한 것입니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- Detailed Explanation Blocks -->
    <g transform="translate(55, 230)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          응급실 뺑뺑이의 늪: 심전도·폐 CT 정상
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 119를 타고 응급실에 도착하면 신기하게도 심박수가 가라앉고 모든 검사가 '정상'
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#dc2626" font-weight="bold">
          • "신경성입니다"라는 말만 듣고 귀가하지만 다음 날 출근길에 똑같이 재발!
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#15803d">
          의학적 팩트: 편도체 과민 &amp; 심담허겁(心膽虛怯)
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 불이 안 났는데도 화재경보기가 사이렌을 울리듯, 편도체가 가짜 위급 신호를 발송
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#15803d" font-weight="bold">
          • 교감신경을 폭발시켜 심장을 강타하는 '뇌신경계 과민 반응'이 본질입니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          💡 치료의 핵심: 심장 약이 아니라 '뇌 신경회로 진정'
        </text>
        <text x="35" y="80" font-family="${fontFamilies}" font-size="16" fill="#334155">
          심장을 고칠 것이 아니라, 교감신경 폭주를 유발하는 뇌 시상하부-편도체 축의 흥분 역치를
        </text>
        <text x="35" y="108" font-family="${fontFamilies}" font-size="15" fill="#64748b">
          한방 맞춤 방제와 침구치료로 안정시켜야 완치에 도달합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="55" rx="14" fill="#0f172a" />
      <text x="430" y="34" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        심장은 편도체의 오작동 명령에 성실하게 뛰었을 뿐 죄가 없습니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. CHAPTER 03: 오답 3 (정신력 탓 & 회피의 함정)
function generatePoint3Wrong3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">❌ CHAPTER 03. 치명적 오답 3</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="310" height="36" rx="8" fill="#fee2e2" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c">
        ⚠️ 일상을 갉아먹는 회피 행동의 덫
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="36" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      "마음이 나약해서이니 대중교통을 안 타면 된다?"
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      피할수록 공포 구역은 버스, 엘리베이터, 극장, 터널로 번져나갑니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- Detailed Explanation Blocks -->
    <g transform="translate(55, 230)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          회피(Avoidance)가 낳는 광장공포증으로의 악화
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 소사역 환승을 피해 택시를 타기 시작하지만, 곧 꽉 막힌 도로에서도 공황 발생
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#dc2626" font-weight="bold">
          • "내가 나약해서 그래"라는 자책은 세로토닌·GABA 신경물질을 더 고갈시킵니다.
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#15803d">
          의학적 팩트: 뇌신경 전달물질 고갈과 생체 에너지 고갈
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 공황은 정신력이 아니라, 만성 과로와 뇌 피로로 억제성 신경계가 마비된 질환
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#15803d" font-weight="bold">
          • 뇌의 브레이크 물질(GABA)을 보강하고 기혈(氣血)을 채워주면 100% 극복 가능!
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          💡 바른 접근: 신경계 자생력을 길러 안전지대를 넓혀라
        </text>
        <text x="35" y="80" font-family="${fontFamilies}" font-size="16" fill="#334155">
          한방 맞춤 치료로 신체 과민도를 낮춘 후, 작은 성공 경험을 쌓아가며
        </text>
        <text x="35" y="108" font-family="${fontFamilies}" font-size="15" fill="#64748b">
          지하철과 일상의 자유를 온전히 되찾는 근본 치료가 이루어져야 합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="55" rx="14" fill="#0f172a" />
      <text x="430" y="34" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        공황장애는 마음의 나약함이 아닌, 치유가 필요한 신경계의 탈진입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. CHAPTER 04: 오답을 종결짓는 1:1 맞춤 치료
function generatePoint4Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#090d16" />
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">✨ CHAPTER 04. 오답을 끝내는 한방 치료</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="310" height="36" rx="8" fill="#e6f7f3" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        🏥 해아림 1:1 두뇌·자율신경 통합 솔루션
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      과호흡·공황발작을 종결짓는 4단계 치료
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      신경안정제 의존 없이 뇌 자생력을 키워 평온한 일상으로 복귀합니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- 4 Treatment Pillars -->
    <g transform="translate(55, 225)">
      <!-- Pillar 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#0f766e" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">1:1 맞춤 청열안신(淸熱安神) 한약 처방</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">시호가용골모려탕, 귀비탕, 사역산 가감으로 편도체 과열과 가슴 두근거림 즉각 진정</text>
      </g>

      <!-- Pillar 2 -->
      <g transform="translate(0, 130)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#0d9488" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">뇌신경 조절 침구 &amp; 경혈 자극 치료</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">백회(百會), 신문(神門), 단중(膻中) 정밀 자침으로 흉부 압박감과 호흡 곤란 완화</text>
      </g>

      <!-- Pillar 3 -->
      <g transform="translate(0, 260)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#059669" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">경추·흉추 이완 추나요법 (신경 통로 확보)</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">굳어진 횡격막과 경추 흉곽을 교정하여 자율신경 줄기와 뇌혈류 순환 개선</text>
      </g>

      <!-- Pillar 4 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#10b981" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">4</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">첨단 뉴로피드백 &amp; 바이오피드백 훈련</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">실시간 뇌파 훈련으로 예기불안 회로를 소멸시키고 스트레스 저항력 극대화</text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="50" rx="12" fill="#0f172a" />
      <text x="430" y="32" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        🛡️ 식약처 hGMP 안심한약재 사용 · 한방침구과 전문의 권형근 대표원장 직접 진료
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
  console.log('Rendering 5 C-Type Card News for Bucheon Sosa Subway Panic...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Wrong1(), '02_point1_wrong1.jpg');
  await renderCard(generatePoint2Wrong2(), '03_point2_wrong2.jpg');
  await renderCard(generatePoint3Wrong3(), '04_point3_wrong3.jpg');
  await renderCard(generatePoint4Treatment(), '05_point4_treatment.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
