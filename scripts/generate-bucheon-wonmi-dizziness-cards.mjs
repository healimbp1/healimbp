import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-wonmi-orthostatic-dizziness',
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
    <rect x="-250" y="0" width="500" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🚨 기립성 어지럼증 &amp; 실신 전조 오답노트</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="610" height="40" rx="8" fill="#fee2e2" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        일어설 때마다 눈앞이 캄캄하고 핑 돌며 주저앉을 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="41" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부천 원미동 기립성 어지럼증·실신 전조 종결 오답노트
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#475569" letter-spacing="-0.5">
      철분제 맹신의 함정 · 자율신경 혈관조절 부전 · 1:1 맞춤 한방 해법
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
          오답 1: "어지러우니 빈혈이겠지? 철분제만 먹는다?"
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4c0519">
          👉 팩트: 혈액 성분이 아니라, 일어설 때 뇌로 피를 올리는 자율신경 혈관 반사의 고장!
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ffe4e6" />
        <circle cx="67" cy="67" r="26" fill="#e11d48" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#881337">
          오답 2: "피곤해서 핑 도는 거니 카페인·영양제로 버틴다?"
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4c0519">
          👉 팩트: 고카페인은 교감신경을 탈진시키고 이뇨작용으로 체액을 줄여 실신 위험 급증!
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e11d48" />
        <circle cx="67" cy="67" r="26" fill="#e11d48" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#881337">
          오답 3: "눈앞이 캄캄해질 때 서서 눈 질끈 감고 버틴다?"
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#4c0519">
          👉 팩트: 뇌 혈류가 순간 차단되어 의식 잃고 낙상 골절 유발! 즉시 주저앉아야 안전!
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

// 2. CHAPTER 01: 오답 1 (철분제 맹신의 함정)
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
        ⚠️ 빈혈약 먹어도 어지러운 이유
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="36" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      "어지러우니 빈혈이겠지? 철분제만 삼킨다?"
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      혈액 수치는 정상인데, 일어설 때 뇌로 혈액을 올리는 펌프가 멈춘 것입니다.
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
          원미동 환자들의 흔한 오답: 자가진단 후 철분제 복용
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 앉았다 일어날 때 핑 돌면 빈혈이라 지레짐작하고 약국 철분제나 영양제 구입
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#dc2626" font-weight="bold">
          • 결과: 피검사상 헤모글로빈 정상! 속 쓰림과 변비만 생기고 어지럼증은 그대로!
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#15803d">
          의학적 팩트: 자율신경계 '혈관 수축 반사' 고장
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 일어설 때 중력으로 피 500~800ml가 하체로 쏠릴 때 하체 혈관이 즉시 조여져야 함
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#15803d" font-weight="bold">
          • 교감신경 반응이 느려 뇌 혈압이 순간 20mmHg 이상 급락하며 뇌 허혈 발생!
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          💡 역발상 즉각 해법: 피를 채우지 말고 '자율신경 조절력'을 깨워라!
        </text>
        <text x="35" y="80" font-family="${fontFamilies}" font-size="16" fill="#334155">
          심장 박동과 혈관 수축을 관장하는 자율신경 밸런스를 바로잡아야
        </text>
        <text x="35" y="108" font-family="${fontFamilies}" font-size="15" fill="#64748b">
          일어설 때 뇌로 신속하게 혈액이 공급되어 눈앞 암전과 핑 도는 증상이 사라집니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="55" rx="14" fill="#0f172a" />
      <text x="430" y="34" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        기립성 어지럼증은 '피 부족'이 아닌 '신경 조절 부전'입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. CHAPTER 02: 오답 2 (카페인/영양제 남용)
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
        ⚠️ 커피 마실수록 실신 위험 증가
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="36" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      "단순 피로니 커피·에너지 음료로 버틴다?"
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      고카페인의 이뇨작용과 교감신경 탈진이 미주신경성 실신을 부릅니다.
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
          피로 회복의 착각: 카페인 각성에 의존
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 피로해서 어지럽다고 느껴 하루 3~4잔 커피나 고카페인 드링크 섭취
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#dc2626" font-weight="bold">
          • 결과: 일시적으로 심장만 빨리 뛸 뿐, 이뇨작용으로 혈액량이 줄어 기립 시 급격한 허탈감!
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#15803d">
          의학적 팩트: 미주신경(부교감) 과반응과 혈압 급락
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 카페인으로 과열된 심장이 한계에 달하면, 뇌는 보호를 위해 미주신경을 급격히 흥분시킴
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#15803d" font-weight="bold">
          • 심박수가 뚝 떨어지고 전신 혈관이 이완되며 식은땀·메스꺼움과 함께 실신 전조 발생!
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          💡 역발상 치료의 핵심: '기혈(氣血) 보강 &amp; 심장 펌핑력 회복'
        </text>
        <text x="35" y="80" font-family="${fontFamilies}" font-size="16" fill="#334155">
          억지 각성제를 끊고, 심비(心脾)의 기운을 돋우는 맞춤 한약으로 혈관 탄력을 높여야
        </text>
        <text x="35" y="108" font-family="${fontFamilies}" font-size="15" fill="#64748b">
          식은땀, 울렁거림, 다리 풀림 없이 안정된 혈류가 유지됩니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="55" rx="14" fill="#0f172a" />
      <text x="430" y="34" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        카페인은 자율신경을 지치게 만드는 독이 될 수 있습니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. CHAPTER 03: 오답 3 (서서 버티는 위험한 착각)
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
        ⚠️ 2차 낙상 골절을 부르는 최악의 행동
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="36" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      "눈앞이 캄캄할 때 서서 눈 질끈 감고 버틴다?"
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      뇌 혈류가 순간적으로 단절되어 의식을 잃고 바닥에 쓰러집니다.
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
          실신 전조 시 가장 위험한 행동: 서서 버티기
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 시야가 흐려지고(Blackout) 머리가 붕 뜰 때 "잠깐 지나가겠지" 하며 선 채로 심호흡
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#dc2626" font-weight="bold">
          • 결과: 3~5초 내 뇌 산소 공급 중단으로 기절, 머리 부딪힘 및 안면 골절 위험!
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="18" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="50" height="50" rx="12" fill="#dcfce7" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#15803d">
          의학적 응급 대처: 즉시 주저앉아 머리를 낮춰라
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 전조 증상이 감지되는 즉시 쪼그려 앉거나 바닥에 누워 다리를 높게 올리기
        </text>
        <text x="90" y="120" font-family="${fontFamilies}" font-size="16" fill="#15803d" font-weight="bold">
          • 다리를 꼬고 종아리·허벅지에 힘을 주는 '대항 기법(Counter-pressure)'으로 혈류 환류!
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          💡 근본 해결책: '자율신경계 반응 속도'를 재훈련하라!
        </text>
        <text x="35" y="80" font-family="${fontFamilies}" font-size="16" fill="#334155">
          응급 처치는 사고를 막을 뿐, 일어설 때마다 반복되는 어지럼증은
        </text>
        <text x="35" y="108" font-family="${fontFamilies}" font-size="15" fill="#64748b">
          자율신경 조절 한약과 침구 치료로 체위 변화에 대처하는 혈관 반사력을 길러야 합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 780)">
      <rect x="0" y="0" width="860" height="55" rx="14" fill="#0f172a" />
      <text x="430" y="34" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle">
        어지럼증이 느껴지는 순간 즉시 자리에 앉는 것이 생명을 지킵니다.
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
      <rect x="0" y="0" width="320" height="36" rx="8" fill="#e6f7f3" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        🏥 해아림 1:1 기립성 어지럼증 솔루션
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      기립성 어지럼증을 종결짓는 3-Step 한방 치료
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      자율신경계 혈관 반사 회복과 뇌 혈류 재배치로 맑은 일상을 되찾습니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- 3 Step Blocks -->
    <g transform="translate(55, 230)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#0f766e" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 1</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f172a">
          심비(心脾) 기혈 보강 &amp; 심장 펌핑력 강화
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 보중익기탕(補中益氣湯), 삼출건비탕(蔘출健脾湯) 처방으로 전신 기력과 혈류량 보충
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 소화기 흡수력을 높여 두뇌로 맑은 기혈이 끊김 없이 공급되도록 기초 체력 완성
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#0d9488" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 2</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f172a">
          자율신경 밸런스 회복 &amp; 혈관 수축 반사 정상화
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 영계출감탕(苓桂朮甘湯), 사역산(四逆散) 가감으로 상열하한(上熱下寒) 담음 울체 해소
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 백회(百會), 족삼리(足三里), 태충(太衝) 정밀 자침으로 기립 시 혈관 수축 속도 촉진
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="90" height="40" rx="10" fill="#059669" />
        <text x="70" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 3</text>
        
        <text x="130" y="53" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f172a">
          경추 혈류 통로 확보 &amp; 하체 제2의 심장 펌프 재건
        </text>
        <text x="130" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 경추 추나요법으로 척추동맥을 열어 뇌간·소뇌 혈류량 즉각 개선
        </text>
        <text x="130" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 종아리(가자미근) 혈액 펌핑 운동 및 자율신경 훈련 연계로 실신 재발 원천 차단
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0f2922" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#a7f3d0" text-anchor="middle">
        🛡️ 식약처 규격 hGMP 안심한약재만 사용 · 1:1 맞춤 원내 탕전 조제
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
  console.log('Rendering 5 C-Type Card News for Bucheon Wonmi Orthostatic Dizziness...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Wrong1(), '02_point1_wrong1.jpg');
  await renderCard(generatePoint2Wrong2(), '03_point2_wrong2.jpg');
  await renderCard(generatePoint3Wrong3(), '04_point3_wrong3.jpg');
  await renderCard(generatePoint4Treatment(), '05_point4_treatment.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
