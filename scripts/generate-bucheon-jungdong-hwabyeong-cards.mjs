import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-jungdong-hwabyeong',
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
      <stop offset="0%" stop-color="#1f1116" />
      <stop offset="50%" stop-color="#3b1d28" />
      <stop offset="100%" stop-color="#14090e" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e11d48" />
      <stop offset="100%" stop-color="#ea580c" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🔥 화병 · 가슴답답 · 매핵기 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#ffe4e6" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#be123c">
        목에 가시 걸린 듯 답답하고 가슴 명치가 꽉 막혀 한숨만 나온다면?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 중동 화병 · 가슴답답 매핵기 한약 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#e11d48">
      이비인후과 이상 없음 · 맺힌 울화(鬱火) 소통 · 반하후박탕 맞춤 처방
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ffe4e6" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🔥</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 발병 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">간기울결 &amp; 식도 평활근 경련</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#e11d48">목 이물감 매핵기의 병리</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ffe4e6" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">명치 압통 · 잦은 한숨 · 열감</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#e11d48">화병 5대 핵심 증상 체크</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ffe4e6" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">반하후박탕 &amp; 전중혈 약침</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#e11d48">3단계 울화 소통 솔루션</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ffe4e6" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 생활 루틴</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">흉곽 확장 호흡 &amp; 온찜질</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#e11d48">가슴 답답함 즉각 완화법</text>
      </g>
    </g>

    <!-- Bottom Hospital Info Box -->
    <g transform="translate(55, 535)">
      <rect x="0" y="0" width="860" height="150" rx="20" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
      
      <circle cx="55" cy="75" r="32" fill="#e11d48" />
      <text x="55" y="85" font-family="${fontFamilies}" font-size="28" fill="#ffffff" text-anchor="middle">🏥</text>

      <text x="110" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 (부천 중동 인접)
      </text>
      <text x="110" y="82" font-family="${fontFamilies}" font-size="16" fill="#334155">
        한방침구과 전문의 권형근 대표원장 1:1 정밀 진단 및 처방
      </text>
      <text x="110" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#be123c">
        📍 부평역 7번 출구 도보 5분 (부천 중동에서 1호선·7호선 10~15분) | 🌙 월·수·금 20시 야간진료
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

// 2. POINT 01 (원인 기전 분석)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1f1116" />
      <stop offset="50%" stop-color="#3b1d28" />
      <stop offset="100%" stop-color="#14090e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad1)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#e11d48" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 매핵기 발병 원인 기전</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    목에 뭔가 걸린 느낌, 왜 뱉어도 안 나올까요?
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#fda4af" letter-spacing="-0.5">
    이물질이 아닌 스트레스와 울화(鬱火)로 인한 식도 평활근 경련
  </text>

  <!-- 3 Cause Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#ffe4e6" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#be123c" text-anchor="middle">기전 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🍑</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        1. 한의학 고유 병증 '매핵기(梅核氣)' - 기와 담음의 엉킴
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • '목구멍에 매실 씨앗(梅核)이 걸려 삼켜도 안 넘어가고 뱉어도 안 나오는 느낌'을 뜻합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 스트레스로 기(氣)가 뭉치고 체내 수분 대사 찌꺼기(담음)가 인후부에 정체되어 발생합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fff1f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#be123c">
        👉 진실: 실제 종양이나 이물질이 없어도, 뭉친 기운이 식도 신경을 압박해 이물감을 느낍니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#d97706" text-anchor="middle">기전 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🔥</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        2. 억압된 감정과 울화(鬱火)로 인한 간기울결(肝氣鬱結)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 분노, 서러움, 불안을 밖으로 표출하지 못하고 속으로 삭이면 간의 소통 기능이 막힙니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 울체된 불기운이 가슴(전중혈)과 목구멍으로 치솟아 명치 압통과 가슴 조임, 열감을 유발합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 핵심: 억압된 울화를 풀어주어야 목 이물감과 가슴 답답함이 동시에 사라집니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">기전 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫁</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        3. 자율신경 과흥분으로 인한 식도 괄약근 및 횡격막 경련
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 교감신경이 과항진되면 하부식도 괄약근과 상부 식도 조임근이 비정상적으로 수축합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 횡격막이 굳어 호흡이 얕아지고, 가슴이 답답해 무의식적으로 '깊은 한숨'을 자주 쉬게 됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 해법: 자율신경계를 안정시키고 횡격막을 이완하는 이기(理氣) 한방 치료가 필요합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#14090e" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#fda4af" text-anchor="middle">
      💡 "매핵기와 화병은 억지로 참는다고 낫지 않으며, 맺힌 기운을 틔워주어야 숨통이 트입니다."
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
      <stop offset="0%" stop-color="#1f1116" />
      <stop offset="50%" stop-color="#3b1d28" />
      <stop offset="100%" stop-color="#14090e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#e11d48" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 화병 · 매핵기 자가진단</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    혹시 나도 화병? 5대 핵심 증상 체크리스트
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#fda4af" letter-spacing="-0.5">
    아래 증상 중 3가지 이상 해당된다면 울화 소통 한방 치료가 필요합니다.
  </text>

  <!-- 5 Checklist Rows -->
  <g transform="translate(60, 225)">
    <rect x="0" y="0" width="960" height="745" rx="24" fill="#ffffff" filter="url(#shadow2)" />

    <!-- Item 1 -->
    <g transform="translate(40, 35)">
      <circle cx="28" cy="28" r="24" fill="#ffe4e6" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#e11d48" text-anchor="middle">01</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        목에 가래나 알약이 걸린 듯 답답하며 뱉거나 삼켜도 사라지지 않는다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        이비인후과 내시경 검사상 이상이 없으나 음식물을 삼킬 때는 오히려 덜한 전형적 매핵기
      </text>
    </g>
    <line x1="40" y1="115" x2="920" y2="115" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 2 -->
    <g transform="translate(40, 135)">
      <circle cx="28" cy="28" r="24" fill="#ffe4e6" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#e11d48" text-anchor="middle">02</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        가슴 정중앙(명치·흉골)이 꽉 막힌 듯 답답하고 묵직한 돌을 얹은 것 같다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        양 젖가슴 사이 전중혈(膻中穴)을 손가락으로 누르면 심한 압통과 통증 발생
      </text>
    </g>
    <line x1="40" y1="215" x2="920" y2="215" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 3 -->
    <g transform="translate(40, 235)">
      <circle cx="28" cy="28" r="24" fill="#ffe4e6" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#e11d48" text-anchor="middle">03</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        숨이 끝까지 깊게 안 쉬어져 무의식적으로 '땅이 꺼져라 한숨'을 자주 쉰다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        횡격막 긴장으로 인한 호흡 제한을 인체가 보상하기 위해 한숨으로 표출
      </text>
    </g>
    <line x1="40" y1="315" x2="920" y2="315" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 4 -->
    <g transform="translate(40, 335)">
      <circle cx="28" cy="28" r="24" fill="#ffe4e6" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#e11d48" text-anchor="middle">04</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        얼굴과 머리로 뜨거운 열감이 훅 치솟고, 가슴이 두근거리며 잠들기 힘들다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        간화(肝火)와 심화(心火)가 위로 치솟는 상열하한 및 야간 각성 동반
      </text>
    </g>
    <line x1="40" y1="415" x2="920" y2="415" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 5 -->
    <g transform="translate(40, 435)">
      <circle cx="28" cy="28" r="24" fill="#ffe4e6" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#e11d48" text-anchor="middle">05</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        사소한 일에도 화가 폭발하거나 서러움이 북받치고 소화가 전혀 안 된다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        자율신경 조절 한계 초과로 인한 정서적 폭발 및 신경성 위장장애(담적)
      </text>
    </g>

    <!-- Score Guide Box -->
    <g transform="translate(40, 530)">
      <rect x="0" y="0" width="880" height="175" rx="16" fill="#fff1f2" stroke="#fda4af" stroke-width="1.5" />
      <text x="30" y="38" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#be123c">
        📊 자가진단 평가 및 조기 대처 기준
      </text>
      <text x="30" y="72" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
        • <tspan font-weight="bold" fill="#059669">1~2개 해당:</tspan> 초기 신경성 인후두 긴장 단계 (스트레스 관리 및 호흡 요법으로 완화)
      </text>
      <text x="30" y="102" font-family="${fontFamilies}" font-size="15" fill="#d97706">
        • <tspan font-weight="bold" fill="#d97706">3~4개 해당:</tspan> 매핵기 및 화병 진행 단계 (HRV 자율신경 검사 및 맞춤 탕약 권장)
      </text>
      <text x="30" y="132" font-family="${fontFamilies}" font-size="15" fill="#dc2626">
        • <tspan font-weight="bold" fill="#dc2626">5개 모두 해당:</tspan> 만성 화병 및 신체화장애 단계 (1:1 울화 소통 표적 한방 치료 필수)
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#14090e" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#fda4af" text-anchor="middle">
      💡 "위장약이나 신경안정제로 해결되지 않는 목 이물감, 맺힌 기운을 풀면 가슴이 시원해집니다."
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
      <stop offset="0%" stop-color="#1f1116" />
      <stop offset="50%" stop-color="#3b1d28" />
      <stop offset="100%" stop-color="#14090e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#e11d48" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 해아림 1:1 맞춤 치료</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    맺힌 울화를 풀고 목을 틔우는 3대 한방 솔루션
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#fda4af" letter-spacing="-0.5">
    울체된 기운 소통 ➔ 담음 배출 ➔ 횡격막 이완 및 자율신경 안정
  </text>

  <!-- 3 Step Treatment Cards -->
  <g transform="translate(60, 225)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#ffe4e6" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#be123c" text-anchor="middle">1단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 매핵기 표적 맞춤 한약 (반하후박탕 · 사역산 · 분심기음)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 반하·후박·복령·자소엽으로 구성된 처방이 목구멍에 엉킨 기와 담음을 삭혀 이물감을 씻어냅니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 치솟은 간화(肝火)를 식히고 맺힌 가슴의 기운을 사방으로 소통시켜 숨통을 시원하게 틔워줍니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fff1f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#be123c">
        👉 효과: 식약처 hGMP 인증 규격 청정 한약재로 원내 맞춤 탕전하여 위장관까지 편안해집니다.
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">2단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💉</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0369a1">
        2. 전중혈 · 천돌혈 약침 및 자율신경 경혈 침구 치료
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 목 오목한 곳(천돌혈)과 가슴 정중앙(전중혈)에 청열 약침을 주입해 경련된 식도 근육을 이완합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 내관(內關), 태충(太衝) 혈자리를 자극하여 굳어버린 횡격막을 풀고 깊은 복식호흡을 유도합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 효과: 가슴을 짓누르던 무거운 압박감과 명치 통증이 즉각적으로 완화됩니다.
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">3단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🎧</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 두뇌 뉴로피드백 &amp; 스트레스 감각통합 훈련 (NeuronFlex)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 스트레스에 과잉 반응하는 뇌 편도체의 과열을 낮추고 뇌파(Alpha파)를 스스로 조절합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 신체화 장애로 번지기 쉬운 불안과 분노 감정을 건강하게 다스리는 뇌 자생력을 완성합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 효과: 감정 스트레스 속에서도 목이 조여들지 않는 항상성과 심신의 회복탄력성 구축
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#14090e" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#fda4af" text-anchor="middle">
      💡 "한방침구과 전문의의 1:1 맞춤 진료로 억눌린 울화를 시원하게 씻어내 드립니다."
    </text>
  </g>
</svg>
`;
}

// 5. POINT 04 (생활 속 행동 수칙)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1f1116" />
      <stop offset="50%" stop-color="#3b1d28" />
      <stop offset="100%" stop-color="#14090e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#e11d48" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 가슴 이완 실천 루틴</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    답답한 가슴과 목을 틔우는 3가지 일상 관리법
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#fda4af" letter-spacing="-0.5">
    울화와 긴장을 물리적으로 해소하는 호흡 및 경혈 이완법
  </text>

  <!-- 3 Selfcare Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#ffe4e6" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#be123c" text-anchor="middle">루틴 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💆</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 가슴 전중혈 온찜질 및 쇄골·흉쇄유돌근 마사지
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 양 가슴 사이 전중혈에 따뜻한 수건을 얹고 손가락 끝으로 부드럽게 원을 그리며 지압하세요.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 목 옆 흉쇄유돌근을 위에서 아래로 부드럽게 쓸어내려 식도 주변의 신경 긴장을 풀어줍니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fff1f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#be123c">
        👉 실천: 하루 10분 온찜질로 가슴의 굳은 근막을 이완시키면 목 이물감이 크게 줄어듭니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">루틴 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫁</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0369a1">
        2. 가슴을 활짝 펴는 '흉곽 확장 이완 호흡'
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 양팔을 벌려 가슴을 활짝 펴며 코로 숨을 깊게 들이마시고, 입으로 천천히 길게 내뱉습니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 억눌려 있던 횡격막이 상하로 크게 움직이며 갇혀있던 가슴 속 답답한 공기를 배출합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 실천: 한숨을 쉬고 싶을 때 억지로 참지 말고, 의식적으로 가슴을 펴며 길게 호흡하세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">루틴 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">✍️</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 감정 억압 털어내기 &amp; 취침 전 족욕 루틴
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 마음에 담아둔 답답한 감정을 일기장에 솔직하게 글로 쏟아내며 심리적 배출구를 만드세요.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 취침 90분 전 40도 따뜻한 물에 족욕을 하여 상체로 솟구친 열을 발끝으로 끌어내립니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 발끝이 따뜻해지고 상체 열이 식으면 밤에 가슴 두근거림 없이 편안하게 잠듭니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#14090e" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#fda4af" text-anchor="middle">
      💡 "충분한 물리적 이완과 감정 표현 루틴이 가슴과 목을 시원하게 지켜줍니다."
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
  console.log('All 5 hwabyeong cards generated successfully!');
}

buildCards().catch(console.error);
