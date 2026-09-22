import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-sangdong-nocturnal-awakening',
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
      <stop offset="100%" stop-color="#080c1e" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#0d9488" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">💓 수면 자율신경 &amp; 야간 각성 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#eef2ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4f46e5">
        새벽 2~3시, 갑자기 심장이 쿵쾅거리고 식은땀 흘리며 깬다면?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 상동역 야간각성 · 심장두근거림 원인과 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#4f46e5">
      심장내과 이상 없음 · 교감신경 야간 폭주 · 3단계 통잠 회복 로드맵
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">⚠️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 3대 오해</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">심장 질환 공포 &amp; 대증요법</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">심전도 정상인데 왜 뛸까?</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">야간 코르티솔 &amp; 심신불교</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">자율신경 불균형의 진실</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">청뇌안신탕 &amp; 성상신경절</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">3단계 통잠 회복 시스템</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 행동 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">침상 4-7-8 &amp; 족욕 루틴</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">야간 자율신경 진정법</text>
      </g>
    </g>

    <!-- Bottom Hospital Info Box -->
    <g transform="translate(55, 535)">
      <rect x="0" y="0" width="860" height="150" rx="20" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.5" />
      
      <circle cx="55" cy="75" r="32" fill="#6366f1" />
      <text x="55" y="85" font-family="${fontFamilies}" font-size="28" fill="#ffffff" text-anchor="middle">🏥</text>

      <text x="110" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 (부천 상동역 인접)
      </text>
      <text x="110" y="82" font-family="${fontFamilies}" font-size="16" fill="#334155">
        한방침구과 전문의 권형근 대표원장 1:1 정밀 진료
      </text>
      <text x="110" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#4f46e5">
        📍 부평역 7번 출구 도보 5분 (부천 상동역에서 7호선/1호선 10분) | 🌙 월·수·금 20시 야간진료
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

// 2. POINT 01 (3대 오해와 함정)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="50%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#080c1e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad1)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#6366f1" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 01. 야간 각성 3대 오해</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    자다가 심장이 터질 듯 쿵쾅거리는 진짜 이유
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#a5b4fc" letter-spacing="-0.5">
    심장 질환이 아닌 수면 중 교감신경의 급격한 과항진(Nocturnal Panic)
  </text>

  <!-- 3 Trap Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">오해 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫀</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        1. "심장마비나 심근경색이 아닐까?"라는 파국적 공포
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 응급실이나 심장내과에서 24시간 홀터 및 심전도 검사를 받아도 "정상" 판정을 받습니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심장의 구조적 문제가 아니라, 자율신경계가 수면 중에 비상 사이렌을 잘못 울린 것입니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 진실: 심장 자체의 병이 아니라, 심장을 조절하는 자율신경 중추(뇌간)의 오작동입니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#d97706" text-anchor="middle">오해 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💊</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        2. 수면유도제나 청심환으로 억지로 눌러 잠들려는 시도
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 약물로 뇌를 마취시키면 입면은 되지만, 약효가 떨어지는 새벽 2~4시에 반동성 각성이 터집니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 상체로 치솟은 허열(虛熱)을 끄지 않고 증상만 누르면 야간 식은땀과 두근거림이 만성화됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 진실: 수면 억제제가 아닌 자율신경계 항상성을 복원하는 원인 치료가 필요합니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0e7ff" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#4338ca" text-anchor="middle">오해 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#3730a3">
        3. "낮에 푹 쉬면 밤에 안 깨겠지?" 누적된 뇌 피로의 방치
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 낮의 육체적 휴식과 무관하게, 뇌의 DMN(기본모드신경망)이 과열되어 있으면 밤에 각성합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • "오늘 밤에도 또 심장이 뛰며 깨면 어쩌지?"라는 수면 공포가 조건화되어 각성을 촉발합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#eef2ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#4338ca">
        👉 해법: 뇌파를 안정시키고 자율신경계 브레이크를 되살리는 한방 치료가 핵심입니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#0f172a" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a5b4fc" text-anchor="middle">
      💡 "야간 각성은 심장 질환이 아니며, 자율신경계의 균형을 바로잡으면 깊은 통잠을 되찾을 수 있습니다."
    </text>
  </g>
</svg>
`;
}

// 3. POINT 02 (3대 심층 원인)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="50%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#080c1e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#6366f1" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 02. 야간 각성 3대 심층 원인</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    왜 하필 새벽 2~4시에 눈이 번쩍 떠질까요?
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#a5b4fc" letter-spacing="-0.5">
    야간 코르티솔 서지 · 심신불교(상열하한) · REM 수면 분절
  </text>

  <!-- 3 Root Cause Cards -->
  <g transform="translate(60, 225)">
    <!-- Cause 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0e7ff" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#4338ca" text-anchor="middle">원인 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">📈</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 야간 코르티솔 서지(Cortisol Surge)와 부교감신경 실조
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 정상 수면 중에는 부교감신경이 우세하여 맥박과 체온이 떨어져야 합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 부신 피로로 인해 밤중에 각성 호르몬(코르티솔)이 급상승하며 맥박이 100회 이상 치솟습니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#eef2ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#4338ca">
        👉 핵심: 뇌 자율신경계의 야간 리듬(HRV)을 안정시켜 심박수를 안정화해야 합니다.
      </text>
    </g>

    <!-- Cause 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c" text-anchor="middle">원인 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🔥</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        2. 한의학적 심신불교(心腎不交)와 상열하한(上熱下寒)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심장의 화기(火氣)를 식혀줄 신장의 수기(水氣)와 진액이 마르면 불기운이 머리로 솟구칩니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 가슴 답답함, 상체 식은땀(도한), 입마름과 함께 심장이 요동치며 잠에서 깨어납니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 핵심: 열을 내리고 진액을 보충하는 수승화강(水昇火降) 한약 처방이 필요합니다.
      </text>
    </g>

    <!-- Cause 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow2)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">원인 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫁</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. REM 수면 단계의 과호흡과 야간 공황발작(Nocturnal Panic)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 꿈을 꾸는 얕은 수면 단계에서 뇌의 편도체가 과각성되며 무호흡이나 과호흡이 발생합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • "숨이 막혀 죽을 것 같다"는 신체 공포와 함께 잠에서 깨어나 불안에 휩싸이게 됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 핵심: 뇌파 조절 훈련과 자율신경 약침으로 깊은 서파 수면 비율을 높여야 합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#0f172a" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a5b4fc" text-anchor="middle">
      💡 "상체로 치솟은 화기를 내리고 진액을 보충하면 밤새 깨지 않고 아침까지 푹 잘 수 있습니다."
    </text>
  </g>
</svg>
`;
}

// 4. POINT 03 (3단계 한방 치료 시스템)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="50%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#080c1e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#6366f1" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 03. 해아림 3단계 치료</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    밤새 깨지 않는 7~8시간 통잠을 되찾는 3단계 치료
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#a5b4fc" letter-spacing="-0.5">
    급성 야간 진정 ➔ 자율신경 균형 복원 ➔ 수면 자생력 완성
  </text>

  <!-- 3 Step Treatment Cards -->
  <g transform="translate(60, 225)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0e7ff" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#4338ca" text-anchor="middle">1단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        [1단계: 급성 진정기] 청뇌안신 맞춤 한약 (천왕보심단 · 귀비탕 · 온담탕)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심장의 허열을 내리고 심신을 안정시켜 야간 각성 빈도와 심장 두근거림을 즉각 진정시킵니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 진액을 보충하여 야간 식은땀(도한), 입마름, 가슴 답답함(흉민)을 빠르게 해소합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#047857">
        👉 목표: 새벽에 심장이 뛰어 벌떡 일어나는 야간 발작 차단 및 기본 입면 안정화
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#d97706" text-anchor="middle">2단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💉</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        [2단계: 자율신경 복원기] 성상신경절 약침 및 두뇌 뉴로피드백 훈련
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 경추부 성상신경절(SGB) 약침으로 밤에 폭주하는 교감신경을 이완하고 미주신경 톤을 회복합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 두뇌 뉴로피드백으로 뇌파(Alpha/Theta파)를 유도하여 수면 중 뇌의 과각성을 방지합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 목표: 수면 유지 시간 증가 및 새벽 2~4시 강제 각성 회수 80% 이상 감소
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#f0fdf4" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534" text-anchor="middle">3단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">✨</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#166534">
        [3단계: 수면 자생력 완성기] 뇌 수면 주기 복원 및 완전 통잠 유지
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 깊은 서파 수면(Delta파) 비율이 정상화되어 아침에 피로 없이 개운하게 일어납니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 한약 복용을 격일로 줄여가며 치료를 종결해도 재발 없이 안정적인 통잠을 유지합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#166534">
        👉 목표: 어떤 수면제나 안정제 없이도 스스로 편안하게 아침까지 자는 뇌 자생력 구축
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#0f172a" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a5b4fc" text-anchor="middle">
      💡 "한방침구과 전문의의 1:1 맞춤 진료로 지친 자율신경계를 바로잡고 편안한 밤을 선물합니다."
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
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="50%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#080c1e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#6366f1" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 04. 야간 응급 진정 수칙</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    자다가 심장이 쿵쾅거릴 때 즉각 대처법 3가지
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#a5b4fc" letter-spacing="-0.5">
    뇌에 "위험하지 않다"는 신호를 보내는 물리적·호흡 이완 루틴
  </text>

  <!-- 3 Selfcare Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0e7ff" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#4338ca" text-anchor="middle">수칙 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫁</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 누운 채로 날숨을 길게 뱉는 '침상 4-7-8 이완 복식호흡'
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 벌떡 일어나지 말고, 손을 아랫배에 얹은 채 코로 4초 들이쉬고 7초 멈춘 뒤 입으로 8초간 길게 내쉽니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 길게 내뱉는 날숨이 미주신경을 자극하여 치솟은 심박수를 1~2분 안에 급격히 떨어뜨립니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#eef2ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#4338ca">
        👉 실천: "심장마비가 아니며 금방 가라앉는다"고 스스로에게 말하며 천천히 호흡하세요.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c" text-anchor="middle">수칙 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💆</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        2. 쇄골 아래 · 전중혈(가슴 정중앙) 온찜질 및 지압
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 양쪽 젖가슴 사이 정중앙(전중혈)과 쇄골 안쪽을 손가락 끝으로 부드럽게 원을 그리며 마사지합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 흉곽 내 긴장된 근육과 신경 다발을 이완시켜 가슴 답답함과 조여드는 질식감을 해소합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 실천: 따뜻한 수건을 가슴 위에 얹어주면 자율신경 이완 효과가 배가됩니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">수칙 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🚫</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 스마트폰 시계 보지 않기 &amp; 야식·음주 완전 차단
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 깨어났을 때 시계를 보면 "벌써 3시네, 내일 출근 어쩌지"라는 불안이 심박수를 더 올립니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 취침 전 술(알코올)은 야간 혈당 스파이크와 교감신경 폭발을 일으키므로 절대 금물입니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 침실 시계를 보이지 않는 곳으로 치우고, 저녁 8시 이후 공복을 유지하세요.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#0f172a" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#a5b4fc" text-anchor="middle">
      💡 "충분한 암막 환경과 복식호흡 등 작은 습관이 밤새 평온한 수면을 지켜줍니다."
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
  console.log('All 5 awakening cards generated successfully!');
}

buildCards().catch(console.error);
