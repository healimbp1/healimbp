import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-sangdong-driving-panic',
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
      <stop offset="0%" stop-color="#051b1e" />
      <stop offset="50%" stop-color="#0c3836" />
      <stop offset="100%" stop-color="#031616" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🚗 뇌신경 &amp; 자율신경 공황장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f766e">
        고속도로·터널·정체구간에서 갑자기 숨이 턱 막히고 핸들을 놓칠 것 같다면?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 상동 운전 중 공황발작 원인과 한방 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="25" font-weight="600" fill="#2d6a59">
      편도체 오경보 · 과호흡 역설 · 교감신경 폭발의 근본 해법
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 원인 분석</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">편도체 오작동 &amp; 폐쇄 공포</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">운전 상황별 자율신경 과열 기전</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">손떨림 · 질식감 · 예기불안</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">운전 공황 5대 핵심 증상 체크</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🩺</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">청뇌안신 한약 &amp; 두뇌훈련</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">뇌 자생력 복원 &amp; 감약 솔루션</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 응급 대처</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">4-7-8 호흡 &amp; 시야 분산법</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">운전 중 발작 즉각 완화 루틴</text>
      </g>
    </g>

    <!-- Bottom Hospital Info Box -->
    <g transform="translate(55, 535)">
      <rect x="0" y="0" width="860" height="150" rx="20" fill="#f0f7f5" stroke="#cbe2db" stroke-width="1.5" />
      
      <circle cx="55" cy="75" r="32" fill="#0d9488" />
      <text x="55" y="85" font-family="${fontFamilies}" font-size="28" fill="#ffffff" text-anchor="middle">🏥</text>

      <text x="110" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 (부천 상동 인접)
      </text>
      <text x="110" y="82" font-family="${fontFamilies}" font-size="16" fill="#334155">
        한방침구과 전문의 권형근 대표원장 1:1 직접 진료
      </text>
      <text x="110" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0f766e">
        📍 부평역 7번 출구 도보 5분 (부천 상동에서 전철/차량 10~15분) | 🌙 월·수·금 20시 야간진료
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

// 2. POINT 01 (원인 분석 카드)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#061c20" />
      <stop offset="50%" stop-color="#0d3b38" />
      <stop offset="100%" stop-color="#051819" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad1)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="320" height="42" rx="21" fill="#0d9488" />
    <text x="160" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 운전 공황 원인 기전</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    운전대만 잡으면 왜 숨이 막히고 손이 떨릴까요?
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    심장 마비가 아닌 뇌 편도체 과열과 폐쇄·탈출 불가 상황의 오작동
  </text>

  <!-- 3 Cause Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e6f7f3" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">기전 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🚨</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 뇌 편도체(Amygdala)의 '탈출 불가 상황' 오경보
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 수도권제1순환선 정체, 긴 터널, 고가도로 등 즉시 차를 세우기 어려운 공간을 위협으로 인식합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 이성적 판단을 담당하는 '전전두엽'의 통제력이 떨어지며 편도체가 생존 비상벨을 울립니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 결과: 실제 위험이 없는데도 몸이 "지금 당장 탈출해야 한다"고 착각해 발작을 유발합니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c" text-anchor="middle">기전 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫁</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        2. 가슴으로 헐떡이며 뇌혈관을 수축시키는 '과호흡의 역설'
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 숨이 가빠질 때 산소를 더 마시려고 얕고 빠르게 호흡하는 순간 혈중 이산화탄소가 급감합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 이산화탄소 부족으로 뇌혈관이 수축되어 극심한 어지럼증, 손발 저림, 질식감이 증폭됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 핵심: 산소가 부족해서가 아니라, 과도한 호흡으로 이산화탄소가 빠져나가 생긴 역설입니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">기전 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 자율신경계 과열과 한의학적 상열하한(上熱下寒)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 스트레스와 피로로 심장의 화기(火氣)가 뇌로 치솟고, 아랫배와 손발은 차가워집니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심담허겁(心膽虛怯) 상태에서 교감신경이 폭주해 핸들을 놓칠 것 같은 공포를 겪게 됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 한방 솔루션: 화기를 내리고 뇌혈류를 안정시키는 청뇌안신(淸腦安神) 처방이 필요합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 "공황발작은 결코 심장마비나 뇌졸중을 일으키지 않으며, 10~20분 내에 반드시 자연 소퇴합니다."
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
      <stop offset="0%" stop-color="#061c20" />
      <stop offset="50%" stop-color="#0d3b38" />
      <stop offset="100%" stop-color="#051819" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0d9488" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 운전 공황 자가진단표</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    혹시 나도? 운전 중 공황발작 체크리스트
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    아래 5가지 항목 중 3가지 이상 해당된다면 조기 진단과 치료가 필요합니다.
  </text>

  <!-- 5 Checklist Rows -->
  <g transform="translate(60, 225)">
    <rect x="0" y="0" width="960" height="745" rx="24" fill="#ffffff" filter="url(#shadow2)" />

    <!-- Item 1 -->
    <g transform="translate(40, 35)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">01</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        터널, 고가도로, 고속도로 진입 직전 숨이 가빠지고 가슴이 두근거린다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        막히는 구간이나 차를 갓길에 세울 수 없는 상황에 대한 극심한 사전 불안감
      </text>
    </g>
    <line x1="40" y1="115" x2="920" y2="115" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 2 -->
    <g transform="translate(40, 135)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">02</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        핸들을 잡은 손에 땀이 흥건하고 힘이 풀리거나 굳어버릴 것 같다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        자율신경계 과흥분으로 인한 말초 혈관 수축 및 이상 감각 발생
      </text>
    </g>
    <line x1="40" y1="215" x2="920" y2="215" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 3 -->
    <g transform="translate(40, 235)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">03</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        시야가 좁아지거나(터널 시야) 어지럽고 비현실감(이인증)이 느껴진다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        "내가 차를 통제하지 못해 사고를 낼 것 같다"는 파국적 두려움 엄습
      </text>
    </g>
    <line x1="40" y1="315" x2="920" y2="315" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 4 -->
    <g transform="translate(40, 335)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">04</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        운전 중 창문을 활짝 열거나 에어컨을 강하게 틀어야 겨우 숨이 쉬어진다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        차량 내부 공간에 갇혔다는 질식감에 대한 행동학적 회피 반응
      </text>
    </g>
    <line x1="40" y1="415" x2="920" y2="415" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 5 -->
    <g transform="translate(40, 435)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">05</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        운전이 두려워 고속도로를 피해 멀리 국도로 돌아가거나 운전을 회피한다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        예기불안과 회피 반응으로 일상생활과 출퇴근 범위가 심각하게 위축된 상태
      </text>
    </g>

    <!-- Score Guide Box -->
    <g transform="translate(40, 530)">
      <rect x="0" y="0" width="880" height="175" rx="16" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
      <text x="30" y="38" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
        📊 자가진단 평가 및 조기 대처 기준
      </text>
      <text x="30" y="72" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
        • <tspan font-weight="bold" fill="#059669">1~2개 해당:</tspan> 초기 스트레스성 자율신경 긴장 단계 (호흡 및 생활 관리로 안정화 가능)
      </text>
      <text x="30" y="102" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
        • <tspan font-weight="bold" fill="#d97706">3~4개 해당:</tspan> 공황발작 및 예기불안 형성 단계 (뇌신경·자율신경 정밀 검사 권장)
      </text>
      <text x="30" y="132" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
        • <tspan font-weight="bold" fill="#dc2626">5개 모두 해당:</tspan> 만성화 및 운전 공포증(광장공포증) 동반 (1:1 표적 한방 치료 필수)
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 "방치할수록 회피 반경이 넓어지므로, 초기에 뇌 자생력을 키워주는 것이 안전 운전의 지름길입니다."
    </text>
  </g>
</svg>
`;
}

// 4. POINT 03 (한방 치료 시스템)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#061c20" />
      <stop offset="50%" stop-color="#0d3b38" />
      <stop offset="100%" stop-color="#051819" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0d9488" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 해아림 1:1 맞춤 치료</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    약물 의존 없이 운전 자신감을 되찾는 3단계 치료
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    단순 신경 억제가 아닌 뇌-자율신경계 자생력 회복 시스템
  </text>

  <!-- 3 Step Treatment Cards -->
  <g transform="translate(60, 225)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e6f7f3" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">1단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 체질별 표적 맞춤 한약 (청뇌안신탕 · 사역산 · 귀비탕)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 과열된 편도체의 흥분을 가라앉히고 치솟은 상체 열감(상열하한)을 하강시킵니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심담허겁(心膽虛怯)을 보강하여 가슴 두근거림, 질식감, 불안감을 신속히 진정시킵니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 효과: 식약처 인증 hGMP 규격 청정 한약재로 원내 맞춤 탕전하여 안전합니다.
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">2단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💉</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0369a1">
        2. 성상신경절 약침 및 자율신경 경혈 침구 치료
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 경추부 성상신경절(SGB) 영역 약침으로 과항진된 교감신경의 긴장을 즉각 이완합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 내관(內關), 신문(神門), 단중(膻中) 혈자리를 자극해 흉곽 압박감과 숨참을 해소합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 효과: 굳어버린 횡격막과 호흡근을 이완하여 깊은 자연 복식호흡을 유도합니다.
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">3단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🎧</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 뇌파 조절 뉴로피드백 &amp; 감각통합 훈련 (NeuronFlex)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 공포 상황에서도 전두엽이 스스로 뇌파(Alpha파)를 안정적으로 조절하도록 훈련합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 신경안정제(자낙스 등) 복용 환자의 안전한 테이퍼링(감약 및 단약)을 완성합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 효과: 터널·고속도로 등 유사 스트레스 환경에서도 자율신경 항상성을 유지합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 "한방침구과 전문의의 1:1 진료로 뇌와 자율신경의 균형을 되찾아 안전하게 운전할 수 있습니다."
    </text>
  </g>
</svg>
`;
}

// 5. POINT 04 (운전 중 응급 대처 & 생활 관리 루틴)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#061c20" />
      <stop offset="50%" stop-color="#0d3b38" />
      <stop offset="100%" stop-color="#051819" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0d9488" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 운전 응급대처 &amp; 루틴</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    운전 중 공황 조짐이 올 때 3대 즉각 대처법
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#99f6e4" letter-spacing="-0.5">
    뇌에 "나는 안전하다"는 신호를 보내는 물리적·행동학적 이완 루틴
  </text>

  <!-- 3 Selfcare Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e6f7f3" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e" text-anchor="middle">대처 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫁</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 날숨을 2배 길게 내뱉는 '4-7-8 이완 복식호흡'
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 숨을 들이마시려 애쓰지 말고, 입을 모아 '4초 들이쉬고 7초 멈춘 뒤 8초간 길게' 후 내쉽니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 길게 내뱉는 날숨이 부교감신경(미주신경)을 자극해 1~2분 만에 심박수를 낮춥니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 실천: 빨대를 물고 공기를 천천히 뿜어낸다는 느낌으로 천천히 길게 호흡하세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">대처 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">👀</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0369a1">
        2. 좁아진 시야를 넓히는 '시야 분산(Grounding) 훈련'
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 앞차의 번호판, 주변 표지판 글씨, 도로 차선을 소리 내어 3가지 이상 읽어보세요.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 핸들의 촉감, 발바닥 페달의 압력을 느끼며 감각을 '현재의 현실'로 되돌립니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 실천: "불안한 신체 감각"에 쏠린 뇌의 주의를 "주변 외부 사물"로 전환합니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">대처 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🚗</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 가장 바깥 차선(하위 차선) 주행 &amp; 창문 환기
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 고속도로나 터널 주행 시 1차선 대신 언제든 갓길/쉼터로 빠질 수 있는 끝 차선을 이용합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 창문을 2~3cm 열어 시원한 바깥 공기를 쐬고 후두하근과 어깨 힘을 뺍니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 언제든 멈출 수 있다는 심리적 안전지대를 확보하는 것이 핵심입니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#042f2c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
      💡 "충분한 수면과 카페인 절제, 기상 직후 햇볕 쬐기 등 물리적 생활 루틴이 신경계를 튼튼히 합니다."
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
  console.log('All 5 cards generated successfully!');
}

buildCards().catch(console.error);
