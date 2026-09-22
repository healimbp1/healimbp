import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/cheongna-adult-insomnia-shallow-sleep',
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
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="50%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#070b19" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#60a5fa" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌙 성인 불면증 · 얕은잠 · 자율신경 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#eff6ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#1d4ed8">
        밤새 꿈꾸고 작은 소리에도 번쩍? 자율신경 과각성과 서파수면 결손
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      청라국제도시 성인 불면증 · 얕은잠 자율신경
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#2563eb">
      밤새 켜진 뇌신경 스위치 OFF · 델타파 서파수면 복원 1:1 맞춤 한약
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eff6ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 발병 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">교감신경 과각성 &amp; 델타파 결손</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#2563eb">얕은 렘수면만 반복되는 병리</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eff6ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">다몽(多夢) · 야간각성 · 피로</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#2563eb">얕은잠 불면증 5대 체크</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eff6ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">청심안신탕 &amp; 뇌파 뉴로피드백</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#2563eb">3단계 깊은 수면 복원 솔루션</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eff6ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🛋️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 실전 루틴</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">아침 햇볕 15분 &amp; 90분 족욕</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#2563eb">생체시계 서카디언 세팅</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (청라국제도시에서 7호선/자가용 15~20분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle">
      "수면제의 강제 마비가 아닌, 뇌 스스로 델타파 깊은 숙면을 유지하도록 치료합니다."
    </text>
  </g>
</svg>`;
}

// 2. POINT 01 (원인 분석 카드)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="100%" stop-color="#1c2541" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#eff6ff" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#2563eb" text-anchor="middle">
        POINT 01. 발병 기전
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      8시간 누워있어도 뇌가 피곤한 이유
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#2563eb">
      교감신경 과각성으로 인한 '3단계 깊은 서파수면(N3)' 결손
    </text>

    <!-- Explanation Box 1 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="180" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        🧠 스마트폰 백그라운드 앱 100개 켜진 상태
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155" line-height="1.6">
        낮 동안의 과로와 스트레스로 교감신경이 과열되면, 밤이 되어도 뇌가 스위치를 끄지 못합니다.
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        몸은 침대에 누워있지만 뇌파는 고베타파(각성파)를 뿜어내며 얕은 렘(REM)수면만 맴돕니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#2563eb">
        ➔ 작은 소리에도 눈이 번쩍 떠지고 밤새 꿈에 시달리는 이유입니다.
      </text>
    </g>

    <!-- Explanation Box 2 -->
    <g transform="translate(50, 420)">
      <rect x="0" y="0" width="860" height="230" rx="20" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1d4ed8">
        ⚡ 뇌 글림프 시스템(Glymphatic System) 청소 중단
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#2563eb" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">깊은 델타파(서파) 수면 부재:</tspan> 뇌세포가 수축하여 뇌척수액으로 독소를 씻어내는 과정이 멈춤
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#2563eb" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">베타 아밀로이드 축적:</tspan> 뇌 피로 물질이 청소되지 않아 기상 시 머리가 깨질 듯 무거움
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#2563eb" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">만성 브레인포그 유발:</tspan> 낮 동안 집중력 저하, 건망증, 만성 피로의 악순환 고착화
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "수면의 시간보다 중요한 것은 '깊은 수면 파장의 비율'입니다."
      </text>
      <text x="430" y="74" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle">
        과열된 자율신경을 식히고 델타파 수면을 유도해야 맑은 두뇌가 회복됩니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 수면장애 &amp; 자율신경 클리닉
    </text>
  </g>
</svg>`;
}

// 3. POINT 02 (자가진단 체크리스트 카드)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="100%" stop-color="#1c2541" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#eff6ff" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#2563eb" text-anchor="middle">
        POINT 02. 자가진단
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      얕은 잠 &amp; 자율신경 불면증 5대 징후
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#2563eb">
      다음 중 3개 이상 해당된다면 수면 구조 복원 치료가 시급합니다.
    </text>

    <!-- Checklist Items -->
    <g transform="translate(50, 210)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#eff6ff" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#2563eb" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">1. 밤새 영화를 보듯 생생한 꿈을 꾸며 아침에 온몸이 뻐근하다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">다몽(多夢): 깊은 비렘수면에 들어가지 못하고 렘수면 단계에 갇혀있는 증상</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 98)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#eff6ff" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#2563eb" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">2. 시계 초침 소리, 문밖 발자국 소리 등 작은 소음에도 화들짝 깬다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">감각 역치 저하: 뇌간의 감각 필터링 시스템이 꺼져 외부 자극에 과민 반응</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 196)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#eff6ff" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#2563eb" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">3. 하룻밤에 2~3회 이상 소변을 보러 가거나 이유 없이 잠에서 깬다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">수면 분절: 연속적인 수면 사이클이 깨져 심장과 뇌의 피로가 누적됨</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 294)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#eff6ff" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#2563eb" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">4. 낮 동안 머리에 안개가 낀 듯 멍하고 뒷목과 어깨가 딱딱하게 굳어있다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">자율신경 긴장: 승모근과 후두하근 경결로 뇌 혈류 저하 및 브레인포그 발생</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 392)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#eff6ff" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#2563eb" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">5. 수면제를 먹어도 몽롱하기만 할 뿐 개운한 숙면을 취하지 못한다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">약물 한계: 인위적 마취 상태는 자연 서파수면을 만들어내지 못함</text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#1d4ed8" text-anchor="middle">
        💡 뇌파와 자율신경 리듬을 회복해야 얕은 잠의 늪에서 벗어날 수 있습니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (한방 맞춤 치료 카드)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="100%" stop-color="#1c2541" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#eff6ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#2563eb" text-anchor="middle">
        POINT 03. 1:1 맞춤 한방치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      해아림 3단계 델타파 수면 복원 솔루션
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#2563eb">
      약물 의존 없이, 뇌 스스로 깊은 델타파 서파수면을 유지하도록 치료
    </text>

    <!-- 3 Treatment Boxes -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eff6ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌙</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          1단계: 청심안신(淸心安神) &amp; 교감신경 급속 냉각
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 산조인, 백자인, 황련 등으로 심포열을 내리고 과각성된 뇌신경 흥분 완화
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 밤에 켜져 있던 뇌 스위치를 부드럽게 끄고 자연스러운 입면을 유도
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eff6ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌊</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          2단계: 3단계 서파수면(N3) 유도 &amp; 뇌 독소 배출
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 천왕보심단, 귀비탕 가감방으로 뇌세포에 진액을 채우고 깊은 잠 비율 확대
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌 글림프 시스템을 활성화하여 기상 시 맑고 상쾌한 두뇌 컨디션 회복
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eff6ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🎯</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          3단계: 두개천골 추나 &amp; 뇌파 뉴로피드백 훈련
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 상경추와 후두하근을 교정하여 뇌간 수면 중추로 통하는 혈류 공급 촉진
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 스스로 델타파와 세타파 수면 리듬을 유지하는 자생적 수면 뇌 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#1d4ed8" text-anchor="middle">
        💡 수면제 복용 중단 없이 안전하게 병행하며 자연스럽게 약물을 감약(테이퍼링)합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (생활 관리 루틴 카드 - 약선차 제외)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="100%" stop-color="#1c2541" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#eff6ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#2563eb" text-anchor="middle">
        POINT 04. 실전 수면루틴
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      깊은 잠을 부르는 생활 속 3대 수면 습관
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#2563eb">
      약에 의존하지 않고 생체 서카디언 리듬을 자연스럽게 세팅하세요.
    </text>

    <!-- 3 Lifestyle Tips (Zero Tea) -->
    <g transform="translate(50, 215)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eff6ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">☀️</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 기상 직후 15분 아침 햇볕 쬐기 (생체시계 15시간 타이머)
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 아침 햇볕이 망막을 자극해 세로토닌을 분비하고 뇌 시계를 정확히 0점 리셋
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 햇볕을 쬔 시점으로부터 15시간 뒤 밤 멜라토닌이 폭발적으로 분비됨
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eff6ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🛁</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 취침 90분 전 15분 따뜻한 족욕 &amp; 심부체온 하강
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 40도 온수로 발끝 혈관을 열어 심부 체온을 올린 뒤 서서히 떨어뜨림
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 족욕 후 90분이 지나는 시점에 체온이 급강하하며 강력한 자연 졸음 유발
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eff6ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">📵</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 취침 1시간 전 스마트폰 블루라이트 차단 &amp; 4-7-8 호흡
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 블루라이트는 뇌를 대낮으로 착각하게 만드므로 침실 조도를 낮추고 폰 격리
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 4-7-8 이완 복식호흡으로 심박수를 낮추고 부교감신경 이완 상태 확립
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#1d4ed8" text-anchor="middle">
        💡 올바른 생체 리듬 세팅과 맞춤 한방 치료가 결합될 때 숙면이 완성됩니다.
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
  console.log('Rendering Cheongna Insomnia Card Images (A-Pattern)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1(), '02_point1_cause.jpg');
  await renderCard(generatePoint2(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4(), '05_point4_selfcare.jpg');
  console.log('All 5 A-pattern cards generated successfully!');
}

run().catch(console.error);
