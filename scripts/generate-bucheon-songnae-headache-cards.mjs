import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-songnae-cervicogenic-headache',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (C타입 썸네일)
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🚨 경추성 두통 &amp; 뒷목 통증 오답노트</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="580" height="40" rx="8" fill="#fee2e2" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        뒷목이 뻣뻣하고 관자놀이·눈알까지 쑤실 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="43" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부천 송내역 경추성 두통·후두신경통 종결 오답노트
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#475569" letter-spacing="-0.5">
      진통제 남용의 덫 · 후두하근 신경 포착 · 경추 추나 한방 해법
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
          오답 1: "머리가 깨질 듯 아프니 진통제만 늘린다?"
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4c0519">
          👉 팩트: 원인은 뇌가 아닌 목! 진통제 과용은 만성 약물과용두통(MOH)을 부릅니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ffe4e6" />
        <circle cx="67" cy="67" r="26" fill="#e11d48" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#881337">
          오답 2: "뇌 MRI 정상이니 스트레스성 신경통이다?"
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4c0519">
          👉 팩트: 굳어진 경추 1~3번 후두하근이 대후두신경을 짓눌러 눈·관자놀이로 방사통 유발!
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ffe4e6" />
        <circle cx="67" cy="67" r="26" fill="#e11d48" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#881337">
          오답 3: "목을 우두둑 꺾거나 세게 마사지하면 풀린다?"
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4c0519">
          👉 팩트: 경추 미세 인대를 손상시켜 신경 자극을 악화! 정밀 추나요법이 필수입니다.
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

// 2. CHAPTER 01: 오답 1 (진통제의 역설)
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
      <rect x="0" y="0" width="310" height="36" rx="8" fill="#fee2e2" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c">
        ⚠️ 진통제 먹을수록 머리가 더 아픈 이유
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="36" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      "머리가 깨질 듯 아프니 진통제만 삼킨다?"
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      목 신경이 짓눌린 통증을 진통제로 덮으면 약물과용두통(MOH)에 빠집니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- Explanation Blocks -->
    <g transform="translate(55, 230)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          송내역 직장인들의 흔한 습관: 습관적 두통약 복용
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 모니터 작업 후 관자놀이가 쑤실 때마다 게보린·이지엔 등 진통제를 상비약처럼 복용
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#dc2626" font-weight="bold">
          • 결과: 처음 1알로 듣던 약이 2알, 3알로 늘어나고 약효가 떨어지면 반동 두통 발생!
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#15803d">
          의학적 팩트: 통증 수용체 과민화와 뇌 피로
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 진통제는 통증 신호를 잠시 차단할 뿐, 목 근육의 신경 압박을 1도 해결하지 못함
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#15803d" font-weight="bold">
          • 뇌 중추의 통증 조절 시스템이 망가져 사소한 긴장에도 극심한 통증을 느끼게 됨!
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          💡 역발상 즉각 해법: 진통제를 멈추고 '목 신경 압박'을 풀어라!
        </text>
        <text x="35" y="80" font-family="${fontFamilies}" font-size="16" fill="#334155">
          통증의 진원지인 상부 경추(C1-C3) 후두하근의 굳음을 정밀 약침과 추나로 이완시켜야
        </text>
        <text x="35" y="108" font-family="${fontFamilies}" font-size="15" fill="#64748b">
          지긋지긋한 두통약의 굴레에서 완전히 벗어날 수 있습니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="55" rx="14" fill="#0f172a" />
      <text x="430" y="34" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        두통약은 임시 가림막일 뿐, 치료제가 아닙니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. CHAPTER 02: 오답 2 (뇌 MRI 정상 착각)
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
        ⚠️ 뇌 검사 해도 안 나오는 이유
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="36" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      "뇌 MRI 정상이니 그냥 신경성 두통이다?"
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      원인은 뇌 실질이 아니라, 뒷목 '대후두신경'이 올가미에 묶인 것입니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- Explanation Blocks -->
    <g transform="translate(55, 230)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          신경과 검사 정상의 함정: 뇌에는 이상이 없다
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 뇌 MRI·MRA를 찍어도 뇌혈관이나 뇌 실질은 깨끗하여 "신경성 스트레스" 진단
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#dc2626" font-weight="bold">
          • 환자는 눈알이 빠질 듯 아프고 관자놀이가 쿵쾅거리는데 답답함만 가중!
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#15803d">
          의학적 팩트: 경추-삼차신경핵 복합체(TCC) 방사통
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 경추 1~3번에서 나오는 대후두신경·소후두신경이 후두하근에 의해 압박(포착)
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#15803d" font-weight="bold">
          • 신경 신호가 삼차신경핵으로 전달되어 뒷목 ➡️ 정수리 ➡️ 관자놀이 ➡️ 눈 뒤 통증 유발!
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          💡 역발상 치료의 핵심: '목 구조 교정 &amp; 후두신경 감압'
        </text>
        <text x="35" y="80" font-family="${fontFamilies}" font-size="16" fill="#334155">
          뇌를 볼 것이 아니라, 굳어버린 경추 관절과 후두하근을 풀어 신경 압박을 해제해야
        </text>
        <text x="35" y="108" font-family="${fontFamilies}" font-size="15" fill="#64748b">
          눈 피로, 어지럼증, 관자놀이 조임 통증이 한 번에 사라집니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="55" rx="14" fill="#0f172a" />
      <text x="430" y="34" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        경추성 두통은 뇌의 병이 아닌 '경추와 신경의 구조적 질환'입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. CHAPTER 03: 오답 3 (목 꺾기/강한 마사지 위험)
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
        ⚠️ 목을 망치는 잘못된 스트레칭 습관
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="36" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      "목을 우두둑 꺾거나 강하게 마사지하면 된다?"
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      불안정한 경추에 가하는 강한 충격은 인대 파열과 신경 염증을 부릅니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- Explanation Blocks -->
    <g transform="translate(55, 230)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#991b1b">
          우두둑 소리의 착각과 경추 인대 손상
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 목이 뻐근할 때 고개를 세게 돌려 뼈 소리를 내면 순간 시원한 듯 착각
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#dc2626" font-weight="bold">
          • 반복되면 경추 지지 인대가 늘어나 관절 불안정성이 심해지고 두통이 만성화!
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#15803d">
          의학적 팩트: 섬세한 미세 교정과 신경 안정화 필요
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 경추 주변은 척추동맥과 뇌신경이 밀집된 초민감 구역으로 강한 압박은 금물
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#15803d" font-weight="bold">
          • 한방 전문의의 정밀 추나요법으로 1mm 단위의 미세 정렬을 맞춰야 안전합니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          💡 바른 접근: 억지 꺾기 대신 '턱 당기기(Chin-in)' &amp; 온찜질
        </text>
        <text x="35" y="80" font-family="${fontFamilies}" font-size="16" fill="#334155">
          무리하게 목을 돌리지 말고, 턱을 가슴 쪽으로 가볍게 당겨 후두하근을 늘려주는
        </text>
        <text x="35" y="108" font-family="${fontFamilies}" font-size="15" fill="#64748b">
          안전한 등척성 운동과 따뜻한 찜질로 근막 긴장을 완화해야 합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="55" rx="14" fill="#0f172a" />
      <text x="430" y="34" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        목 관절을 억지로 꺾는 것은 목에 지속적인 상처를 입히는 행위입니다.
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
        🏥 해아림 1:1 경추·두통 통합 솔루션
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      경추성 두통을 종결짓는 4-Step 치료
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      진통제 없이 후두신경 감압과 경추 정렬로 맑은 머리를 되찾습니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- 4 Treatment Pillars -->
    <g transform="translate(55, 225)">
      <!-- Pillar 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#0f766e" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">정밀 후두신경 감압 약침 &amp; 침구치료</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">풍지(風池), 견정(肩井), 백회(百會)에 안심 약침을 시술하여 신경 염증과 부종 즉각 제거</text>
      </g>

      <!-- Pillar 2 -->
      <g transform="translate(0, 130)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#0d9488" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">한방 경추·두개천골 교정 추나요법</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">틀어진 상부 경추(C1-C3)를 1mm 단위로 교정하여 척추동맥 뇌혈류 순환을 정상화</text>
      </g>

      <!-- Pillar 3 -->
      <g transform="translate(0, 260)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#059669" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">1:1 맞춤 근이완·통증 제어 한약 처방</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">갈근탕, 청상견통탕, 사역산 가감으로 뒷목의 어혈을 풀고 신경성 혈관 경련 완화</text>
      </g>

      <!-- Pillar 4 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#10b981" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">4</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">첨단 뉴로피드백 &amp; 자율신경 훈련</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">만성 통증으로 과민해진 중추신경계 감작(Sensitization)을 리셋하여 재발 방지</text>
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
  console.log('Rendering 5 C-Type Card News for Bucheon Songnae Cervicogenic Headache...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Wrong1(), '02_point1_wrong1.jpg');
  await renderCard(generatePoint2Wrong2(), '03_point2_wrong2.jpg');
  await renderCard(generatePoint3Wrong3(), '04_point3_wrong3.jpg');
  await renderCard(generatePoint4Treatment(), '05_point4_treatment.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
