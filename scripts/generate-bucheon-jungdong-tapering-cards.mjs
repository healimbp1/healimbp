import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-jungdong-tapering',
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
      <stop offset="0%" stop-color="#081b24" />
      <stop offset="50%" stop-color="#0d3240" />
      <stop offset="100%" stop-color="#05141c" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0d9488" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌙 불면증 &amp; 수면제 테이퍼링 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#e0f2fe" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0369a1">
        스틸녹스·졸피뎀 없이는 못 자는데... 끊으려니 반동불면이 두렵다면?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 중동 스틸녹스 감약 · 안전한 테이퍼링 로드맵
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#0284c7">
      약물 내성 극복 · 반동 불안 차단 · 자연 수면 뇌 자생력 회복
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">⚠️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 3대 오해</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">급단약의 위험 &amp; 반동불면</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">단약 실패의 결정적 함정</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">GABA 수용체 둔화 &amp; 과각성</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">수면 스위치 고장의 뇌과학</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 감약 로드맵</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">청뇌안신 한약 &amp; 점진 감약</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">3단계 체계적 단약 프로세스</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 행동 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">90분 수면주기 &amp; 족욕 루틴</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">생체 리듬 물리적 재부팅</text>
      </g>
    </g>

    <!-- Bottom Hospital Info Box -->
    <g transform="translate(55, 535)">
      <rect x="0" y="0" width="860" height="150" rx="20" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
      
      <circle cx="55" cy="75" r="32" fill="#0284c7" />
      <text x="55" y="85" font-family="${fontFamilies}" font-size="28" fill="#ffffff" text-anchor="middle">🏥</text>

      <text x="110" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 (부천 중동 인접)
      </text>
      <text x="110" y="82" font-family="${fontFamilies}" font-size="16" fill="#334155">
        한방침구과 전문의 권형근 대표원장 1:1 정밀 진료
      </text>
      <text x="110" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
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

// 2. POINT 01 (수면제 단약 실패 3대 오해와 함정)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081b24" />
      <stop offset="50%" stop-color="#0d3240" />
      <stop offset="100%" stop-color="#05141c" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad1)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0284c7" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 01. 단약 실패의 3대 함정</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    스틸녹스, 왜 마음대로 끊으면 더 잠을 못 잘까요?
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#7dd3fc" letter-spacing="-0.5">
    의지 부족이 아닌 약물 수용체 반동 현상과 잘못된 단약 방식의 한계
  </text>

  <!-- 3 Trap Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">함정 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💥</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        1. "의지로 한 번에 끊겠다"는 급단약(Cold Turkey)의 파국
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 수면제를 갑자기 중단하면 이전보다 심각한 '반동성 불면'과 극심한 야간 불안이 폭발합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • "나는 약 없이는 절대 못 자는구나"라는 절망감에 빠져 이전보다 더 많은 용량을 먹게 됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 진실: 뇌가 준비되지 않은 급작스러운 중단은 반드시 약물 재복용의 악순환을 부릅니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#d97706" text-anchor="middle">함정 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">📉</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        2. 약물 내성으로 인한 용량 증가와 몽유·기억 소실 부작용
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 졸피뎀(스틸녹스) 복용이 수개월 이상 지속되면 수면 유도 효과가 떨어져 용량을 늘리게 됩니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 한밤중 음식을 먹거나 전화를 걸고도 다음 날 기억하지 못하는 전향성 기억상실이 나타납니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 진실: 약효가 떨어졌다고 증량하면 신경계 독성과 의존성만 기하급수적으로 커집니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">함정 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⏳</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0369a1">
        3. 수면제는 '강제 전원 차단기'일 뿐 근본 치료제가 아니다
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 수면제는 뇌를 마취시켜 잠에 빠지게 할 뿐, 자연스러운 깊은 서파수면(Deep Sleep)을 만들지 못합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 아침에 일어나도 뇌 피로가 풀리지 않고 낮 동안 브레인포그와 무기력증이 지속됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 해법: 뇌의 자연 수면 스위치를 되살리며 서서히 줄여나가는 '테이퍼링'이 필수입니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 "수면제는 끊는 것이 아니라, 뇌가 스스로 잠들 수 있을 때 비로소 자연스럽게 줄어드는 것입니다."
    </text>
  </g>
</svg>
`;
}

// 3. POINT 02 (수면제 의존 심층 원인)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081b24" />
      <stop offset="50%" stop-color="#0d3240" />
      <stop offset="100%" stop-color="#05141c" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0284c7" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 02. 수면 장애 3대 심층 원인</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    왜 내 뇌는 스스로 잠들지 못할까요?
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#7dd3fc" letter-spacing="-0.5">
    GABA 수용체 둔화 · 상열하한 불균형 · 조건화된 수면 예기불안
  </text>

  <!-- 3 Root Cause Cards -->
  <g transform="translate(60, 225)">
    <!-- Cause 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">원인 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🧬</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. GABA 수용체 둔화(다운레귤레이션)와 자연 멜라토닌 고갈
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 외부에서 인위적인 수면제를 계속 투여하면 뇌의 억제성 신경물질(GABA) 수용체가 둔화됩니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 뇌 스스로 수면 스위치를 켜는 능력이 퇴화되어 약물 없이는 각성 상태가 풀리지 않습니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 핵심: 둔화된 수용체 감도를 되살리고 뇌 신경망 자생력을 복원해야 합니다.
      </text>
    </g>

    <!-- Cause 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c" text-anchor="middle">원인 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🔥</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        2. 자율신경계 과열과 한의학적 심비양허(心脾兩虛) · 음허화왕
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 과도한 스트레스와 신경 소모로 심장과 비장의 진액이 마르고 상체로 허열(虛熱)이 치솟습니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 가슴 두근거림, 야간 식은땀, 미열감이 교감신경을 흥분시켜 밤새 뇌를 과각성 상태로 유지합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 핵심: 열을 내리고 진액을 보충하는 청열안신(淸熱安神) 처방으로 자율신경을 안정시켜야 합니다.
      </text>
    </g>

    <!-- Cause 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">원인 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⏰</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. "오늘 밤도 못 자면 어쩌지?" 침대 위 수면 예기불안 조건화
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 침대에 눕는 순간 뇌가 '잠자는 곳'이 아니라 '잠과 싸우는 전쟁터'로 인식하여 긴장합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 수면 뇌파가 고주파수(Beta/Gamma파)로 치솟으며 강박적인 잠에 대한 집착이 형성됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 핵심: 뇌파를 안정시키는 뉴로피드백 훈련과 인지행동 치료로 조건화를 끊어내야 합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 "원인을 알면 해답이 보입니다. 몸의 불균형을 바로잡으면 수면제 없이도 깊은 잠이 가능합니다."
    </text>
  </g>
</svg>
`;
}

// 4. POINT 03 (3단계 안전한 감약 로드맵)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081b24" />
      <stop offset="50%" stop-color="#0d3240" />
      <stop offset="100%" stop-color="#05141c" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0284c7" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 03. 안전한 3단계 감약 로드맵</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    반동불면 없이 수면제를 줄이는 해아림 솔루션
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#7dd3fc" letter-spacing="-0.5">
    한약 병용 ➔ 점진적 감약(테이퍼링) ➔ 완전 단약 유지의 과학적 단계
  </text>

  <!-- 3 Step Treatment Cards -->
  <g transform="translate(60, 225)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">1단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🛡️</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        [1단계: 병용 안정기 (1~4주)] 수면제 유지 + 청뇌안신 한약 병용
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 기존 수면제는 그대로 복용하면서 귀비탕·천왕보심단 등 체질 맞춤 탕약을 병용합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 수면의 질(깊은 수면 시간)을 높이고, 단약에 대한 심리적 공포와 반동 불안을 잠재웁니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 목표: 약을 줄여도 견딜 수 있는 뇌 신경계의 기초 체력과 안정감 확보
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#d97706" text-anchor="middle">2단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">📉</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        [2단계: 점진적 감약기 (5~8주)] 수면제 1/4~1/2 미세 테이퍼링
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 수면제를 3/4 ➔ 1/2 ➔ 1/4로 서서히 쪼개어 줄여나가며 뇌 수용체의 반발을 차단합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 성상신경절 약침 및 두뇌 뉴로피드백 훈련으로 감약 과정의 불안과 금단 증상을 방어합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 목표: 수면제 복용량을 대폭 줄이면서도 수면 유지 시간과 입면 속도 정상화
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#f0fdf4" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534" text-anchor="middle">3단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">✨</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#166534">
        [3단계: 뇌 자생력 완성기 (9~12주)] 완전 단약 성공 및 재발 방지
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 수면제 복용을 완전히 중단하고, 한약 복용도 서서히 줄여 단약 상태를 유지합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 뇌의 Delta 수면 뇌파와 멜라토닌 분비 리듬이 스스로 정상 작동하여 자연 수면을 완성합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#166534">
        👉 목표: 어떤 약물도 없이 매일 밤 편안하게 잠들고 개운하게 일어나는 뇌 자생력 완성
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 "한방침구과 전문의의 과학적인 1:1 감약 프로토콜로 안전하게 수면제에서 벗어날 수 있습니다."
    </text>
  </g>
</svg>
`;
}

// 5. POINT 04 (환자와 가족 3대 행동 수칙)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#081b24" />
      <stop offset="50%" stop-color="#0d3240" />
      <stop offset="100%" stop-color="#05141c" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0284c7" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 04. 생활 속 3대 실천 수칙</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    수면제 테이퍼링 성공을 위한 생체 시계 리셋 루틴
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#7dd3fc" letter-spacing="-0.5">
    의지가 아닌 환경을 바꾸어 뇌에 자연 수면 신호를 보내는 물리적 요법
  </text>

  <!-- 3 Selfcare Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">수칙 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🛁</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 취침 90분 전 심부체온 하강을 유도하는 '따뜻한 족욕'
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 40~42도 따뜻한 물에 15~20분간 족욕을 하면 말초 혈관이 확장되어 열이 방출됩니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 족욕 후 90분이 지나면 심부 체온이 급격히 떨어지며 뇌에서 강력한 자연 졸음 신호를 켭니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 실천: 취침 직전 뜨거운 전신욕 대신, 취침 90분 전 족욕으로 상열하한을 해소하세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#d97706" text-anchor="middle">수칙 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">☀️</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        2. 기상 직후 15분 아침 햇볕 쬐기와 생체 시계 리셋
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 아침에 눈을 뜨자마자 햇볕을 15분 이상 쬐면 뇌 시교차상핵(SCN)의 타이머가 작동합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 햇볕을 쬔 지 정확히 14~15시간 뒤 밤에 천연 멜라토닌이 폭발적으로 합성 분비됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 아무리 늦게 잠들었더라도 기상 시간은 일정하게 맞추고 아침 햇볕을 보세요.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c" text-anchor="middle">수칙 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🛏️</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        3. '시계 보지 않기'와 20분 자극 조절법 (침대 분리)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 침대에 누워 20분 이상 잠이 오지 않으면 억지로 버티지 말고 즉시 거실로 나오세요.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 어두운 조명 아래서 복식호흡을 하다가 졸릴 때만 다시 침대로 들어갑니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 실천: 스마트폰과 시계를 멀리 치우고, 침대를 오직 '잠자는 공간'으로만 재학습시킵니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 "충분한 암막 환경과 이완 호흡 등 작은 물리적 습관이 수면제 없는 편안한 밤을 선물합니다."
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
  console.log('All 5 tapering cards generated successfully!');
}

buildCards().catch(console.error);
