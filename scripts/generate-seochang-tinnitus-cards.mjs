import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/seochang-pulsatile-tinnitus-brain-ringing',
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
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#c084fc" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🔔 박동성 이명 · 머리 울림 · 뇌명증(腦鳴症) 오답노트</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="640" height="40" rx="8" fill="#f5f3ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#6d28d9">
        귀에서 심장 뛰는 슉슉 소리? 이비인후과 이상 없을 때 3대 오답 종결
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      인천 서창동 박동성 이명 · 머리 울림 뇌명증
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#7c3aed">
      뇌혈관 난류 해소 · 청각 뇌신경 과감작 안정 &amp; 1:1 맞춤 한약 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 오답 1</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">"귀에서 나니 귀만 치료?"</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">두경부 혈관 난류·혈류 저항</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 오답 2</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">"적응하고 살아야 할 불치?"</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">청각피질 과흥분 만성화</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 오답 3</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">"안정제·순환제만 복용?"</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">수승화강 붕괴와 상열하한</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f5f3ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 맞춤치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">통규이명탕 &amp; CST 교정</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#7c3aed">1:1 근본 뇌혈류 치료</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (서창동에서 제2경인/자가용 15~20분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7c3aed" text-anchor="middle">
      "귀를 막아도 들리는 박동 소리, 두경부 뇌혈관의 압력과 과열된 자율신경을 다스려야 멈춥니다."
    </text>
  </g>
</svg>`;
}

// 2. 오답 1 카드 (02_point1_wrong1.jpg)
function generateWrong1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#fee2e2" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 01. 오답 1 파헤치기
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "귀에서 소리 나니 귀(청력)만 치료한다?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#dc2626">
      ❌ 달팽이관 문제가 아닌 '두경부 뇌혈관 난류 및 혈류 저항'의 진실
    </text>

    <!-- Content Box 1: 오해 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="170" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        ❌ 잘못된 접근: "이비인후과 검사에서 청력 정상이라는데..."
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        청력도 정상이고 고막 염증도 없는데, 베개에 귀를 대면 심장 박동에 맞춰
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        '슉-슉-', '쿵-쿵-' 피 흐르는 소리가 귓속과 머리를 쾅쾅 울립니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        ➔ 귀 자체의 질환이 아니므로 일반적인 이비인후과 약으로는 호전되지 않습니다.
      </text>
    </g>

    <!-- Content Box 2: 과학적 진실 -->
    <g transform="translate(50, 410)">
      <rect x="0" y="0" width="860" height="235" rx="20" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6d28d9">
        💡 뇌혈류 팩트: 경정맥·경동맥 혈관 벽의 마찰음과 압력 상승
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#7c3aed" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">혈관 난류(Turbulence):</tspan> 경추부 근육 경직과 스트레스로 혈관이 좁아져 소용돌이 발생
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#7c3aed" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">측두골 골전도:</tspan> 귀 바로 옆을 지나가는 혈관의 파동이 뼈를 타고 청각 신경으로 직격
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#7c3aed" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">체위성 변화:</tspan> 누운 자세나 고개를 돌릴 때 혈관 압박이 심해져 소리가 극대화됨
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="95" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "귀가 아닌 '두경부 뇌혈관의 압력'을 낮춰야 합니다."
      </text>
      <text x="430" y="70" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7c3aed" text-anchor="middle">
        혈류 저항을 풀고 뇌저부 순환을 정상화하는 한방 치료가 핵심입니다.
      </text>
    </g>

    <text x="480" y="825" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 박동성 이명 오답노트
    </text>
  </g>
</svg>`;
}

// 3. 오답 2 카드 (03_point2_wrong2.jpg)
function generateWrong2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#fee2e2" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 02. 오답 2 파헤치기
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "불치병이니 백색소음 듣고 적응해라?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#dc2626">
      ❌ 방치가 부르는 '청각 피질 과감작'과 만성 뇌명증(머리 울림)의 덫
    </text>

    <!-- Content Box 1: 오해 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="170" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        ❌ 잘못된 방치: "그냥 신경 끄고 살라는데..."
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        병원에서 '특별한 치료법이 없으니 백색소음 앱을 틀고 적응하라'고 하지만,
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        밤마다 조용해지면 쿵쿵거리는 소리에 잠을 못 자고 극심한 불안과 우울에 빠집니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        ➔ 방치할수록 뇌의 청각 네트워크가 소리를 더 민감하게 증폭시킵니다.
      </text>
    </g>

    <!-- Content Box 2: 과학적 진실 -->
    <g transform="translate(50, 410)">
      <rect x="0" y="0" width="860" height="235" rx="20" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6d28d9">
        💡 뇌신경 팩트: 뇌명증(腦鳴症)으로의 중추성 전이
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#7c3aed" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">청각 중추 과감작:</tspan> 초기 귀의 소리를 방치하면 뇌 피질 자체가 소리를 스스로 생성
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#7c3aed" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">뇌명증(머리 울림):</tspan> 소리가 귀를 넘어 머리 전체가 웅웅 울리는 복합 신경증으로 악화
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#7c3aed" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">수면·자율신경 파괴:</tspan> 야간 각성과 만성 불면증으로 이어져 뇌 피로도 폭증
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="95" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "이명은 적응하는 병이 아니라, 치료해야 하는 신경 신호입니다."
      </text>
      <text x="430" y="70" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7c3aed" text-anchor="middle">
        뇌신경의 흥분을 끄고 청각 경로를 안정시켜야 소리가 사라집니다.
      </text>
    </g>

    <text x="480" y="825" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 박동성 이명 오답노트
    </text>
  </g>
</svg>`;
}

// 4. 오답 3 카드 (04_point3_wrong3.jpg)
function generateWrong3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#fee2e2" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 03. 오답 3 파헤치기
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "신경안정제·혈액순환제만 먹으면 끝?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#dc2626">
      ❌ 수승화강(水昇火降) 붕괴와 신음허(腎陰虛)를 놓친 대증 처방의 한계
    </text>

    <!-- Content Box 1: 오해 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="170" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        ❌ 대증요법의 한계: "약 먹을 땐 멍하고, 끊으면 다시 슉슉..."
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        신경안정제는 뇌를 일시적으로 마비시켜 덜 느끼게 할 뿐 원인을 치료하지 못하며,
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        일반 혈액순환제는 뇌저부 미세혈관의 울혈과 자율신경 과열을 해결하지 못합니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        ➔ 근본적인 체질 불균형과 인체 냉각수 고갈을 채워야 합니다.
      </text>
    </g>

    <!-- Content Box 2: 과학적 진실 -->
    <g transform="translate(50, 410)">
      <rect x="0" y="0" width="860" height="235" rx="20" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6d28d9">
        💡 한의학 팩트: 수승화강 실조와 상열하한(上熱下寒)의 병리
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#7c3aed" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">신음허(腎陰虛):</tspan> 만성 피로와 노화로 신장의 진액이 말라 뇌혈관 냉각 기능 상실
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#7c3aed" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">심화항성(心火亢盛):</tspan> 화(火)가 위로만 치솟아 귓속과 두부 혈관 압력을 급상승시킴
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#7c3aed" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">담화(痰火) 울체:</tspan> 탁한 담음이 혈류를 방해해 혈관벽 마찰음 유발
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="95" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "상체의 열을 내리고 신장의 음혈을 채워야 합니다."
      </text>
      <text x="430" y="70" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7c3aed" text-anchor="middle">
        수승화강이 완성될 때 귀와 머리의 소음이 자연스럽게 잦아듭니다.
      </text>
    </g>

    <text x="480" y="825" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 박동성 이명 오답노트
    </text>
  </g>
</svg>`;
}

// 5. 맞춤 치료 카드 (05_point4_treatment.jpg)
function generateTreatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="280" height="40" rx="20" fill="#f5f3ff" />
      <text x="140" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#7c3aed" text-anchor="middle">
        CHAPTER 04. 오답 종결 맞춤 치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      박동성 이명 &amp; 뇌명증 종결 3단계 솔루션
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#7c3aed">
      뇌혈관 압력 강하 · 청신경 과감작 진정 해아림 1:1 맞춤 한방 치료
    </text>

    <!-- 3 Treatment Steps -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f5f3ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌿</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1단계: 체질 맞춤 통규이명(通竅耳鳴) &amp; 보음강화 한약
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 통규이명탕·보음강화탕·영계출감탕: 뇌혈관 난류를 가라앉히고 혈류 저항 해소
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 신장의 진액을 보충하여 상체로 치솟은 화기를 식히고 청신경 영양 공급
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f5f3ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚡</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2단계: 청신경 안정 자율신경 약침 &amp; 뇌파 뉴로피드백
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 경추부와 측두부 자율신경 절에 정제 한약 약침 시술로 신경 흥분 진정
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌파 훈련으로 과감작된 청각 피질의 고베타파를 억제하고 안정 알파파 강화
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f5f3ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💆</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3단계: 두경부 혈관 근막 이완 침구 &amp; 두개천골요법(CST)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 이문·청궁·예풍·풍지혈 자극으로 측두골과 경추 주변 미세 혈액순환 촉진
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌척수액 순환을 정상화하고 두개골 압박을 해소하여 뇌명증 완전 종결
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#6d28d9" text-anchor="middle">
        💡 3단계 원인 치료가 결합될 때 밤마다 괴롭히던 박동성 이명에서 해방됩니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 박동성 이명 &amp; 뇌명증 클리닉
    </text>
  </g>
</svg>`;
}

async function renderCard(svgStr, filename) {
  const resvg = new Resvg(svgStr, {
    fitTo: {
      mode: 'width',
      value: 1080
    }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  for (const dir of targetDirs) {
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, pngBuffer);
    console.log(`Saved: ${filePath}`);
  }
}

async function main() {
  console.log('Rendering Seochang Pulsatile Tinnitus Card Images (C-Pattern)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateWrong1(), '02_point1_wrong1.jpg');
  await renderCard(generateWrong2(), '03_point2_wrong2.jpg');
  await renderCard(generateWrong3(), '04_point3_wrong3.jpg');
  await renderCard(generateTreatment(), '05_point4_treatment.jpg');
  console.log('All 5 C-pattern cards generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
