import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-sinjungdong-vasovagal',
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
      <stop offset="0%" stop-color="#0c1824" />
      <stop offset="50%" stop-color="#142c42" />
      <stop offset="100%" stop-color="#08101a" />
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌀 미주신경성실신 &amp; 어지럼증 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#e0f2fe" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0369a1">
        지하철 출퇴근길 핑 돌고 식은땀 흘리며 주저앉았다면?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 신중동 미주신경성실신 어지럼증 검사
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#0284c7">
      전조증상 감별 · HRV 자율신경 검사 · 뇌 혈류 자생력 회복
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 발병 기전</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">미주신경 과흥분 &amp; 뇌허혈</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">자율신경 브레이크 오작동</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 전조 증상</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">시야 암전 · 식은땀 · 구역감</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">실신 위험 5대 체크리스트</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🩺</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">보중익기탕 &amp; 자율신경약침</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">HRV 정밀검사 &amp; 맞춤 처방</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 응급 대처</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">다리 꼬기 &amp; 웅크리기 자세</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">실신 낙상 방지 긴급 요령</text>
      </g>
    </g>

    <!-- Bottom Hospital Info Box -->
    <g transform="translate(55, 535)">
      <rect x="0" y="0" width="860" height="150" rx="20" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
      
      <circle cx="55" cy="75" r="32" fill="#0284c7" />
      <text x="55" y="85" font-family="${fontFamilies}" font-size="28" fill="#ffffff" text-anchor="middle">🏥</text>

      <text x="110" y="52" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 (부천 신중동 인접)
      </text>
      <text x="110" y="82" font-family="${fontFamilies}" font-size="16" fill="#334155">
        한방침구과 전문의 권형근 대표원장 1:1 직접 진료
      </text>
      <text x="110" y="112" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        📍 부평역 7번 출구 도보 5분 (부천 신중동에서 7호선/1호선 10분) | 🌙 월·수·금 20시 야간진료
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
      <stop offset="0%" stop-color="#0c1824" />
      <stop offset="50%" stop-color="#142c42" />
      <stop offset="100%" stop-color="#08101a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad1)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0284c7" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01. 실신 발생 원인 기전</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    갑자기 눈앞이 캄캄해지며 주저앉는 이유
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#7dd3fc" letter-spacing="-0.5">
    미주신경 과반사 · 말초 혈관 확장 · 일시적 뇌 혈류 저하(뇌 허혈)
  </text>

  <!-- 3 Cause Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">기전 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        1. 부교감신경(미주신경)의 과도한 브레이크 오작동
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 만원 지하철, 피로, 극심한 통증, 주사 바늘 공포 시 미주신경이 과도하게 흥분합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심장 박동수가 급격히 떨어지고(서맥), 혈압을 유지하는 혈관 긴장도가 풀려버립니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 결과: 하체로 피가 쏠리며 뇌로 올라가는 혈액량이 일시적으로 급감합니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">기전 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">👁️</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        2. 시야 암전(블랙아웃/화이트아웃)과 식은땀 동반
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 뇌 뒤쪽 시각 중추와 전두엽에 산소 공급이 부족해지며 시야가 하얗거나 깜깜해집니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 전신 혈류 부족에 반응하여 이마와 목덜미에 차가운 식은땀이 쏟아지고 다리에 힘이 풀립니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 경고: 이때 서서 버티면 뇌 혈류가 완전히 차단되어 의식을 잃고 쓰러지게 됩니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow1)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">기전 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">📉</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 한의학적 기허하함(氣虛下陷)과 심담허겁(心膽虛怯)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 기운이 위로 뻗지 못하고 아래로 푹 꺼지며(기허하함), 심장과 담이 약해져 잘 놀랍니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 비위(소화기)의 기운을 끌어올리고 심신을 튼튼히 보강해야 실신 재발을 막을 수 있습니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 해법: 양기를 위로 끌어올리는 보중익기(補中益氣) 및 자율신경 조절 한방 치료가 필수입니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 "실신은 뇌가 뇌 혈류를 확보하기 위해 몸을 강제로 눕히는 인체의 마지막 방어 기전입니다."
    </text>
  </g>
</svg>
`;
}

// 3. POINT 02 (전조증상 체크리스트)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c1824" />
      <stop offset="50%" stop-color="#142c42" />
      <stop offset="100%" stop-color="#08101a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0284c7" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02. 실신 전조 체크리스트</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    미주신경성 실신 5대 전조 신호 자가진단
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#7dd3fc" letter-spacing="-0.5">
    아래 증상이 나타나면 서 있지 말고 즉시 자리에 앉거나 누워야 합니다.
  </text>

  <!-- 5 Checklist Rows -->
  <g transform="translate(60, 225)">
    <rect x="0" y="0" width="960" height="745" rx="24" fill="#ffffff" filter="url(#shadow2)" />

    <!-- Item 1 -->
    <g transform="translate(40, 35)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">01</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        지하철이나 버스 안에서 서 있을 때 갑자기 머리가 핑 돌고 어지럽다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        밀폐되고 더운 환경에서 정맥혈이 하체로 정체되며 뇌 관류압이 급감하는 초기 신호
      </text>
    </g>
    <line x1="40" y1="115" x2="920" y2="115" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 2 -->
    <g transform="translate(40, 135)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">02</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        눈앞이 하얗게 흐려지거나(화이트아웃) 터널처럼 좁아지며 캄캄해진다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        망막 및 뇌 후두엽 시각 피질로 가는 미세 혈류가 급격히 차단되는 전형적 전조증상
      </text>
    </g>
    <line x1="40" y1="215" x2="920" y2="215" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 3 -->
    <g transform="translate(40, 235)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">03</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        이마와 목덜미에 차가운 식은땀이 쏟아지고 얼굴이 창백해진다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        말초 혈관 수축 및 자율신경계 급변으로 인한 체온 조절 장애 반응
      </text>
    </g>
    <line x1="40" y1="315" x2="920" y2="315" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 4 -->
    <g transform="translate(40, 335)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">04</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        속이 울렁거리고 메스꺼우며(구역감) 배가 아프거나 화장실에 가고 싶다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        미주신경이 위장관을 과도하게 자극하여 발생하는 소화기 연관 증상
      </text>
    </g>
    <line x1="40" y1="415" x2="920" y2="415" stroke="#f1f5f9" stroke-width="2" />

    <!-- Item 5 -->
    <g transform="translate(40, 435)">
      <circle cx="28" cy="28" r="24" fill="#fee2e2" />
      <text x="28" y="36" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">05</text>
      <text x="75" y="24" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f2922">
        귀에서 삐- 소리가 나거나 주변 소리가 멀어지며 하체에 힘이 풀린다
      </text>
      <text x="75" y="50" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        의식 소실 직전 10~30초 전의 응급 단계 (지체 없이 즉시 바닥에 주저앉아야 함)
      </text>
    </g>

    <!-- Score Guide Box -->
    <g transform="translate(40, 530)">
      <rect x="0" y="0" width="880" height="175" rx="16" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.5" />
      <text x="30" y="38" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
        📊 자가진단 평가 및 조기 대처 기준
      </text>
      <text x="30" y="72" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
        • <tspan font-weight="bold" fill="#059669">전조증상만 있고 실신 안 함:</tspan> 미주신경성 실신 전조 단계 (자율신경 조절 치료로 완치율 높음)
      </text>
      <text x="30" y="102" font-family="${fontFamilies}" font-size="15" fill="#d97706">
        • <tspan font-weight="bold" fill="#d97706">1~2회 실신 경험:</tspan> 기립성 뇌허혈 진행 단계 (HRV 자율신경 정밀 검사 필수)
      </text>
      <text x="30" y="132" font-family="${fontFamilies}" font-size="15" fill="#dc2626">
        • <tspan font-weight="bold" fill="#dc2626">반복 실신 및 외상 발생:</tspan> 만성 실신 장애 (낙상 골절 방지를 위한 1:1 맞춤 한방 치료 필수)
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 "전조증상이 나타났을 때 서서 버티지 않고 즉시 앉는 것만으로도 실신을 100% 예방할 수 있습니다."
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
      <stop offset="0%" stop-color="#0c1824" />
      <stop offset="50%" stop-color="#142c42" />
      <stop offset="100%" stop-color="#08101a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0284c7" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03. 해아림 1:1 맞춤 치료</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    실신 재발을 막고 자율신경을 다스리는 3대 솔루션
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#7dd3fc" letter-spacing="-0.5">
    3대 정밀 검사 ➔ 뇌 혈류 강화 한약 ➔ 미주신경 약침 치료
  </text>

  <!-- 3 Step Treatment Cards -->
  <g transform="translate(60, 225)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">1단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">📊</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        1. 3대 정밀 검사 (HRV 자율신경 · 뇌파 · 체열 진단)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심박변이도(HRV) 검사로 교감-부교감신경의 불균형 정도와 스트레스 저항도를 수치화합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 적외선 체열 진단(DITI)으로 상열하한 및 말초 혈액 순환 상태를 정밀하게 평가합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 효과: 원인 불명 어지럼증의 신경학적·체질적 숨은 원인을 명확하게 규명합니다.
      </text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#f0fdf4" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534" text-anchor="middle">2단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#166534">
        2. 양기를 끌어올리는 체질 맞춤 한약 (보중익기탕 · 영계출감탕 · 사역산)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 아래로 처진 기운을 머리로 끌어올려(승양거함) 기립 시 뇌 혈류 관류압을 강력하게 유지합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 심담(心膽)을 보강하여 긴장과 스트레스 상황에서도 미주신경이 과반사되지 않도록 방어합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0fdf4" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#166534">
        👉 효과: 식약처 hGMP 인증 규격 청정 한약재로 원내 맞춤 탕전하여 혈관 탄력성을 강화합니다.
      </text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow3)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">3단계</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💉</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 성상신경절 약침 및 자율신경 두뇌 훈련 (NeuronFlex)
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 경추부 성상신경절(SGB) 약침으로 과민해진 미주신경의 흥분을 안정화시킵니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 두뇌 뉴로피드백 훈련으로 뇌 혈관 자율 조절력을 회복시켜 실신 재발을 완벽히 차단합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 효과: 만원 지하철, 통증, 긴장 상황에서도 혈압과 맥박이 흔들리지 않는 자생력 구축
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 "한방침구과 전문의의 1:1 맞춤 진료로 자율신경계 균형을 되찾아 언제 어디서나 당당히 설 수 있습니다."
    </text>
  </g>
</svg>
`;
}

// 5. POINT 04 (응급 대처법)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.16" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c1824" />
      <stop offset="50%" stop-color="#142c42" />
      <stop offset="100%" stop-color="#08101a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Top Badge -->
  <g transform="translate(60, 55)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#0284c7" />
    <text x="170" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04. 실신 전조 응급 대처</text>
  </g>

  <text x="60" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    어지럽고 눈앞이 흐려질 때 3대 즉각 대처법
  </text>
  <text x="60" y="188" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#7dd3fc" letter-spacing="-0.5">
    뇌 혈류를 즉각 복원하고 실신 낙상을 막는 물리적 기동법
  </text>

  <!-- 3 Selfcare Cards -->
  <g transform="translate(60, 225)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fee2e2" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626" text-anchor="middle">대처 1</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🧎</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">
        1. 체면 차리지 말고 "즉시 바닥에 웅크려 앉기"
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 어지럼을 느끼는 순간 지하철 바닥이나 길가라도 상관없이 즉시 쪼그려 앉아야 합니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 머리 위치를 심장보다 낮추면 중력에 의해 뇌로 가는 혈류가 수초 내에 회복됩니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fef2f2" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b91c1c">
        👉 핵심: 서서 버티려다 쓰러지면 뇌진탕이나 안면 골절 등 치명적인 2차 부상을 입습니다.
      </text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 250)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#e0f2fe" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1" text-anchor="middle">대처 2</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🦵</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f2922">
        2. 하체 피를 뇌로 짜 올리는 '대항 기동법(다리 꼬기)'
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 앉을 수 없는 상황이라면 즉시 양다리를 X자로 꼬고 종아리·허벅지·엉덩이에 강하게 힘을 줍니다.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 하체 정맥에 고여있던 혈액을 심장과 뇌로 강제로 밀어 올려 혈압을 수축기 기준 15~20mmHg 올립니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#f0f9ff" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">
        👉 실천: 양손을 깍지 끼고 양옆으로 강하게 잡아당기는 손 깍지 당기기도 효과적입니다.
      </text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 500)">
      <rect x="0" y="0" width="960" height="230" rx="22" fill="#ffffff" filter="url(#shadow4)" />
      <rect x="25" y="25" width="90" height="180" rx="16" fill="#fef3c7" />
      <text x="70" y="85" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#92400e" text-anchor="middle">대처 3</text>
      <text x="70" y="140" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💧</text>
      
      <text x="140" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#92400e">
        3. 기상 시 3단계 기립 &amp; 충분한 수분 섭취
      </text>
      <text x="140" y="98" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 아침에 일어날 때 '누운 상태 ➔ 앉아서 1분 ➔ 천천히 기립'의 3단계를 거치세요.
      </text>
      <text x="140" y="128" font-family="${fontFamilies}" font-size="16" fill="#475569">
        • 혈장량을 유지하기 위해 미온수를 하루 1.5~2L 섭취하고 필요시 소량의 소금을 보충합니다.
      </text>
      <rect x="140" y="152" width="790" height="34" rx="6" fill="#fffbeb" />
      <text x="155" y="175" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#b45309">
        👉 실천: 혈관이 이완되는 뜨거운 탕 목욕이나 사우나는 피하는 것이 안전합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Insight Bar -->
  <g transform="translate(60, 995)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 "전조 대처법과 함께 한방 자율신경 원인 치료를 병행하면 실신 공포에서 완전히 벗어날 수 있습니다."
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
  console.log('All 5 vasovagal cards generated successfully!');
}

buildCards().catch(console.error);
