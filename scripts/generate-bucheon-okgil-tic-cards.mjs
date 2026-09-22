import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-okgil-child-tic',
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
      <stop offset="0%" stop-color="#061d19" />
      <stop offset="50%" stop-color="#0d3b32" />
      <stop offset="100%" stop-color="#041714" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌱 소아청소년 틱장애 &amp; 두뇌발달 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f766e">
        안과 가도 이상 없는데... 초등 아이 눈 깜빡임이 점점 심해진다면?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 옥길동 초등 틱장애 초기증상과 한방 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#0d9488">
      단순 습관 감별 · 뇌 기저핵 발달 불균형 · 조기 골든타임 치료법
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">👀</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 초기 신호</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">눈 깜빡임 &amp; 하행성 진행</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">단순 안과 질환과의 감별법</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">운동틱 · 음성틱 5대 증상</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">초기 틱장애 위험도 자가 점검</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🩺</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">성장 맞춤 한약 &amp; 두뇌훈련</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">기저핵 조절력 및 뇌 자생력 강화</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 양육 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">의도적 무시 &amp; 스크린 제한</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">가정 내 스트레스 차단 루틴</text>
      </g>
    </g>

    <!-- Bottom Hospital Info Box -->
    <g transform="translate(55, 535)">
      <rect x="0" y="0" width="860" height="150" rx="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
      
      <circle cx="55" cy="75" r="32" fill="#0d9488" />
      <text x="55" y="85" font-family="${fontFamilies}" font-size="28" fill="#ffffff" text-anchor="middle">🏥</text>

      <text x="110" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 (부천 옥길·범박 인접)
      </text>
      <text x="110" y="82" font-family="${fontFamilies}" font-size="16" fill="#334155">
        한방침구과 전문의 권형근 대표원장 1:1 소아 뇌신경 진료
      </text>
      <text x="110" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0f766e">
        📍 부평역 7번 출구 도보 5분 (부천 옥길·범박에서 자가용/대중교통 15~20분) | 🌙 야간진료
      </text>
    </g>

    <!-- Footer Copyright -->
    <text x="485" y="715" font-family="${fontFamilies}" font-size="14" fill="#94a3b8" text-anchor="middle">
      Healim Korean Medicine Clinic Incheon Bupyeong Clinic • All Rights Reserved
    </text>
  </g>
</svg>
`;
}

// 2. POINT 01 (초기 신호 및 원인 기전)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#061d19" />
      <stop offset="50%" stop-color="#0d3b32" />
      <stop offset="100%" stop-color="#041714" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad1)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0d9488" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 틱장애 발병 원인 기전</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    아이의 눈 깜빡임, 왜 단순 습관이 아닐까요?
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    뇌 기저핵(Basal Ganglia)의 조절 미숙과 하행성 진행 패턴
  </text>

  <!-- 3 Cause Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e6f7f3" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">기전 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🧠</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 뇌의 운동 필터 '기저핵(Basal Ganglia)'의 조절 미숙
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 기저핵은 불필요한 근육 움직임을 걸러내는 '정수기 필터' 역할을 합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 성장기 뇌 발달 불균형으로 필터 기능이 떨어지면 무의식적인 근육 경련(눈 깜빡임)이 새어 나옵니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 진실: 아이가 일부러 하는 버릇이 아니라, 뇌 신경 신호 조절이 미숙해 발생하는 현상입니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c" text-anchor="middle">기전 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚠️</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        2. 눈에서 코 ➔ 입 ➔ 목 ➔ 어깨로 번지는 '하행성 진행'
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 초기에는 눈 깜빡임으로 시작하지만, 방치하면 코 찡긋, 입 벌림, 고개 꺾기, 어깨 으쓱으로 내려옵니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 근육 움직임(운동틱)에 이어 '음음', '헛기침', '킁킁' 같은 음성틱이 결합되어 만성화될 수 있습니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 경고: 눈 깜빡임 단계에서 조기에 차단해야 전신 복합 틱으로 번지는 것을 막을 수 있습니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">기전 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 새학기 환경 변화 · 긴장감과 한의학적 간풍내동(肝風內動)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 초등학교 입학, 학년 진급, 학업 스트레스, 디지털 자극은 소아의 간(肝)에 풍열(風熱)을 일으킵니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 지적을 받으면 긴장도가 치솟아 풍(風)이 더욱 강해지면서 틱 증상이 폭발적으로 증가합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 해법: 풍열을 가라앉히고 뇌신경을 안정시키는 평간식풍(平肝熄風) 한방 치료가 필요합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 "틱장애는 부모의 잘못도, 아이의 탓도 아닙니다. 뇌 성장의 불균형을 맞추면 깨끗이 치료됩니다."
    </text>
  </g>
</svg>
`;
}

// 3. POINT 02 (자가진단 체크리스트)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#061d19" />
      <stop offset="50%" stop-color="#0d3b32" />
      <stop offset="100%" stop-color="#041714" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0d9488" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 소아 틱장애 자가진단표</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    초등학생 틱장애 의심 증상 체크리스트
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    아래 항목 중 2가지 이상이 2~4주 이상 지속된다면 조기 진단이 필요합니다.
  </text>

  <!-- 5 Checklist Rows -->
  <g transform="translate(60, 225)">
    <rect x="0" y="0" width="960" height="745" rx="24" fill="#ffffff" filter="url(#shadow2)" />

    <!-- Item 1 -->
    <g transform="translate(40, 35)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">01</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        눈을 유난히 빠르게 깜빡이거나, 눈동자를 위나 옆으로 치켜뜬다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        안과 진료상 알레르기 결막염, 시력 이상, 안구건조증이 없음에도 지속되는 경우
      </text>
    </g>
    <line x1="40" y1="115" x2="920" y2="115" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 2 -->
    <g transform="translate(40, 135)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">02</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        코를 찡긋거리거나, 입을 크게 벌리고 턱을 앞으로 내미는 동작을 반복한다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        눈에서 얼굴 아래 부위로 운동틱이 확산되는 2단계 진행 신호
      </text>
    </g>
    <line x1="40" y1="215" x2="920" y2="215" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 3 -->
    <g transform="translate(40, 235)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">03</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        목을 한쪽으로 까딱거리거나 어깨를 으쓱거리는 동작을 수시로 한다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        경추부 및 승모근 긴장과 결합된 복합 근육틱 발병 단계
      </text>
    </g>
    <line x1="40" y1="315" x2="920" y2="315" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 4 -->
    <g transform="translate(40, 335)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">04</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        감기나 비염이 아닌데도 '음음', '헛기침', '킁킁' 소리를 낸다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        성대 및 호흡기 근육의 불수의적 수축으로 인한 단순 음성틱 신호
      </text>
    </g>
    <line x1="40" y1="415" x2="920" y2="415" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 5 -->
    <g transform="translate(40, 435)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">05</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        스마트폰·TV를 보거나 피곤하고 긴장할 때 증상이 훨씬 심해진다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        시각적 자극 과부하 및 뇌 신경 피로도에 따른 전형적인 틱 증상 악화 양상
      </text>
    </g>

    <!-- Score Guide Box -->
    <g transform="translate(40, 530)">
      <rect x="0" y="0" width="880" height="175" rx="16" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
      <text x="30" y="38" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
        📊 자가진단 평가 및 조기 대처 기준
      </text>
      <text x="30" y="72" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
        • <tspan font-weight="bold" fill="#059669">1개 해당 (발병 4주 이내):</tspan> 일과성 틱장애 의심 단계 (가정 내 스트레스 완화 및 경과 관찰)
      </text>
      <text x="30" y="102" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
        • <tspan font-weight="bold" fill="#d97706">2~3개 해당 (1~3개월 지속):</tspan> 진행성 틱장애 단계 (뇌기능 정밀 검사 및 조기 치료 골든타임)
      </text>
      <text x="30" y="132" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
        • <tspan font-weight="bold" fill="#dc2626">운동틱 + 음성틱 복합 (1년 이상):</tspan> 만성 틱장애 및 뚜렛증후군 (1:1 뇌 자생력 통합 치료 필수)
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 "틱 증상이 나타난 지 1~3개월 이내의 초기 단계에 치료를 시작하는 것이 가장 예후가 좋습니다."
    </text>
  </g>
</svg>
`;
}

// 4. POINT 03 (한방 치료 솔루션)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#061d19" />
      <stop offset="50%" stop-color="#0d3b32" />
      <stop offset="100%" stop-color="#041714" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0d9488" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 해아림 1:1 맞춤 치료</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    뇌 성장을 돕고 틱을 잠재우는 3단계 한방 치료
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    신경 억제제 부작용 없이 기저핵 스스로 조율하는 힘을 키웁니다
  </text>

  <!-- 3 Step Treatment Cards -->
  <g transform="translate(60, 225)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e6f7f3" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">1단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌱</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 소아 성장 맞춤 한약 (억간산 · 시호청간탕 · 보심건뇌탕)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 흥분된 간기(肝氣)의 풍열을 내리고 기저핵-전두엽 간 신경전달물질의 균형을 복원합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 쓴맛을 줄이고 천연 과즙 등을 가미하여 초등학생도 거부감 없이 편안하게 복용합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 효과: 졸림·소화장애·성장 저하 없는 식약처 hGMP 인증 규격 청정 한약재 탕전
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">2단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💆</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0369a1">
        2. 소아 무통 침구 및 두개천골 추나요법 (CST)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 아프지 않은 자석 스티커 침(자석침)과 레이저 침으로 아이들의 침 공포를 완벽히 해소합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 부드러운 두개천골 추나로 경추와 후두부의 긴장을 풀어 뇌척수액 순환을 원활하게 합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 효과: 신체 긴장을 즉각적으로 이완시키고 뇌로 가는 혈류를 맑게 개선합니다.
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">3단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🎧</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 두뇌 뉴로피드백 &amp; 감각통합 훈련 (NeuronFlex)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 게임처럼 재미있게 참여하며 뇌파(Alpha파)를 스스로 안정시키는 자가 조절력을 훈련합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 시각-청각 감각통합 능력을 향상시켜 주의 집중력 강화와 충동성 억제를 동시에 완성합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 효과: 치료 종료 후에도 뇌 신경망이 스스로 안정성을 유지하여 재발을 방지합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 "한방침구과 전문의의 1:1 맞춤 진료로 아이의 두뇌 성장과 마음의 안정을 함께 지킵니다."
    </text>
  </g>
</svg>
`;
}

// 5. POINT 04 (부모 양육 수칙)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#061d19" />
      <stop offset="50%" stop-color="#0d3b32" />
      <stop offset="100%" stop-color="#041714" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0d9488" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 부모 3대 양육 수칙</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    가정에서 틱을 줄이는 부모님의 3가지 행동 원칙
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    지적하지 않고 뇌가 편안히 쉴 수 있는 양육 환경을 만듭니다
  </text>

  <!-- 3 Selfcare Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">수칙 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🤫</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        1. '의도적 무시(모른 척하기)'와 지적·혼내기 절대 금지
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • "눈 똑바로 떠라", "기침 참아라"라고 지적하면 아이는 극심한 불안과 죄책감을 느낍니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 지적받아 참으려고 애쓸수록 뇌의 긴장도가 폭발하여 잠시 후 증상이 몇 배로 터져 나옵니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 실천: 증상을 보더라도 전혀 눈치채지 못한 것처럼 자연스럽게 다른 대화로 관심을 돌려주세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#d97706" text-anchor="middle">수칙 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">📵</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        2. 스마트폰 · 태블릿 · 유튜브 스크린 타임 엄격 제한
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 화면의 빠르고 현란한 빛 자극은 시신경을 과열시키고 도파민 분비를 불규칙하게 만듭니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 특히 유튜브 쇼츠, 릴스, 액션 게임 등은 뇌의 기저핵을 극도로 피로하게 만들어 틱을 악화시킵니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 평일 스크린 사용을 최소화하고, 취침 2시간 전에는 모든 전자기기를 차단하세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e6f7f3" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">수칙 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌳</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        3. 햇볕 쬐는 야외 활동 &amp; 충분한 수면 환경
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 하루 30분 이상 공원 산책, 자전거 타기, 줄넘기 등 큰 근육을 쓰는 유산소 운동을 함께하세요.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 자연광을 쬐면 세로토닌이 충전되고 뇌의 불필요한 긴장 에너지가 건강하게 배출됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 실천: 매일 밤 일정한 시간에 잠자리에 들 수 있도록 어둡고 조용한 수면 환경을 만들어주세요.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 "부모님의 따뜻한 공감과 기다림이 아이의 뇌를 가장 빠르게 안정시키는 최고의 명약입니다."
    </text>
  </g>
</svg>
`;
}

// 빌드 및 저장
async function buildCards() {
  const cards = [
    { name: '01_naver_main_thumbnail', svg: generateMainThumbnail() },
    { name: '02_point1_cause', svg: generatePoint1Cause() },
    { name: '03_point2_checklist', svg: generatePoint2Checklist() },
    { name: '04_point3_treatment', svg: generatePoint3Treatment() },
    { name: '05_point4_selfcare', svg: generatePoint4Selfcare() }
  ];

  for (const card of cards) {
    const resvg = new Resvg(card.svg, {
      fitTo: { mode: 'width', value: 1080 },
      font: { loadSystemFonts: true }
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    for (const dir of targetDirs) {
      const filePath = path.join(dir, `${card.name}.jpg`);
      fs.writeFileSync(filePath, pngBuffer);
      console.log(`Saved: ${filePath}`);
    }
  }
  console.log('All 5 child tic cards generated successfully!');
}

buildCards().catch(console.error);
