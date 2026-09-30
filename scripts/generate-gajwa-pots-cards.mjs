import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/gajwa-pots-dizziness',
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
      <stop offset="0%" stop-color="#0f2942" />
      <stop offset="50%" stop-color="#14375a" />
      <stop offset="100%" stop-color="#091b2e" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <linearGradient id="alertGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#dc2626" />
      <stop offset="100%" stop-color="#ef4444" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-270" y="0" width="540" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🩺 뇌신경 &amp; 자율신경실조 기립성 어지럼 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="640" height="40" rx="8" fill="#eff6ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1d4ed8">
        앉았다 일어설 때 눈앞이 핑 돌고 심장이 쿵쾅거릴 때?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      가좌동 기립성 빈맥 증후군 (POTS)
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#2563eb">
      철분제나 빈혈약으로 안 낫는 기립성 어지럼증의 진짜 원인
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">오답 01. 단순 빈혈 착각</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">피 부족 아닌 자율신경 반사 마비</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">철분제 먹어도 어지럼 지속</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">오답 02. 이석증 오진</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">귀 평형기관 이상 아닌 뇌허혈</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">이비인후과 검사상 이상 무</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">오답 03. 무리한 유산소</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">체력 문제로 착각해 억지 러닝</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">심장 과부하 및 실신 위험</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#d1fae5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⭕</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46">정답. 1:1 맞춤 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">승기보혈 탕약 &amp; 자율신경침</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">혈관 수축력 및 뇌혈류 정상화</text>
      </g>
    </g>

    <!-- Bottom Message Box -->
    <g transform="translate(55, 540)">
      <rect x="0" y="0" width="860" height="180" rx="16" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="30" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1e293b">
        💡 기립성 빈맥 증후군 (POTS)이란?
      </text>
      <text x="30" y="82" font-family="${fontFamilies}" font-size="16" fill="#475569">
        일어설 때 혈액이 하체로 쏠리면서 뇌혈류가 급감하고, 이를 보상하려 심장이
      </text>
      <text x="30" y="112" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">
        10분 이내에 분당 30회 이상(또는 120회 이상) 폭증하며 어지럼을 유발하는 질환
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        심장 자체의 이상이 아닌, 하체 혈관을 수축시키는 '자율신경 조절 기능 실조'가 근본 원인입니다.
      </text>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 750)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="42" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="72" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        한방침구과 전문의 권형근 대표원장 진료 | 부평역 7번 출구 | 월·수·금 야간진료 8시
      </text>
      <g transform="translate(680, 15)">
        <rect x="0" y="0" width="180" height="52" rx="12" fill="#2563eb" />
        <text x="90" y="33" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">1:1 정밀 검사</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 2. WRONG 01 CARD (오답 1: 단순 빈혈 착각)
function generateWrong1Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2942" />
      <stop offset="50%" stop-color="#14375a" />
      <stop offset="100%" stop-color="#091b2e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Chapter Header -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">❌ CHAPTER 01. 가장 흔한 오답 01</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 50)">
      <text x="0" y="38" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#991b1b" letter-spacing="-1">
        "단순 빈혈인 줄 알고 철분제만 먹었어요"
      </text>
      <text x="0" y="80" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#475569">
        빈혈 수치(헤모글로빈)는 정상인데 왜 일어설 때마다 아찔할까?
      </text>
    </g>

    <!-- Comparison 2 Box Section -->
    <g transform="translate(55, 170)">
      <!-- Left: Mistaken Belief -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="340" rx="20" fill="#fef2f2" stroke="#fca5a5" stroke-width="2" />
        <rect x="25" y="25" width="130" height="36" rx="8" fill="#dc2626" />
        <text x="90" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">환자의 오해</text>
        
        <text x="25" y="100" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          "몸에 피가 부족해서"
        </text>
        <text x="25" y="130" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          "어지러운 거겠지?"
        </text>

        <text x="25" y="175" font-family="${fontFamilies}" font-size="16" fill="#64748b" line-height="1.6">
          • 내과 피검사에서 정상 진단
        </text>
        <text x="25" y="210" font-family="${fontFamilies}" font-size="16" fill="#64748b">
          • 철분제, 비타민 복용해도 지속
        </text>
        <text x="25" y="245" font-family="${fontFamilies}" font-size="16" fill="#64748b">
          • 일어설 때 심장이 먼저 쿵쾅거림
        </text>
        <text x="25" y="280" font-family="${fontFamilies}" font-size="16" fill="#64748b">
          • 속 메스꺼움과 식은땀 동반
        </text>
      </g>

      <!-- Right: Medical Fact -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="340" rx="20" fill="#eff6ff" stroke="#93c5fd" stroke-width="2" />
        <rect x="25" y="25" width="130" height="36" rx="8" fill="#2563eb" />
        <text x="90" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">의학적 팩트</text>
        
        <text x="25" y="100" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1e3a8a">
          혈관 수축 자율신경
        </text>
        <text x="25" y="130" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1e3a8a">
          반사 기능의 일시 마비!
        </text>

        <text x="25" y="175" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 피의 양이 부족한 게 아님
        </text>
        <text x="25" y="210" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 일어설 때 하체 혈관 수축 실패
        </text>
        <text x="25" y="245" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 혈액이 중력 따라 하체로 쏠림
        </text>
        <text x="25" y="280" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">
          • 뇌혈류 급감 → 뇌허혈 어지럼
        </text>
      </g>
    </g>

    <!-- Key Takeaway Banner -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="175" rx="16" fill="#fff7ed" stroke="#fdba74" />
      <text x="30" y="42" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#c2410c">
        ⚠️ 팩트 폭격 : 철분제로는 자율신경을 고칠 수 없습니다
      </text>
      <text x="30" y="80" font-family="${fontFamilies}" font-size="16" fill="#431407">
        기립성 빈맥은 혈액 속 헤모글로빈 부족이 아니라, 서 있는 순간 즉각 혈관을 조여
      </text>
      <text x="30" y="110" font-family="${fontFamilies}" font-size="16" fill="#431407">
        피를 뇌로 올려 보내는 <tspan font-weight="bold" fill="#ea580c">자율신경 반사 시스템(교감신경 혈관 긴장도)</tspan>이 무너진 질환입니다.
      </text>
      <text x="30" y="142" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#c2410c">
        👉 혈관의 수축 반사력을 회복시키는 자율신경 치료가 필수적입니다.
      </text>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 750)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        부평역 7번 출구 | 자율신경계 기능 검사(HRV) &amp; 뇌기능 정밀 검사
      </text>
    </g>
  </g>
</svg>`;
}

// 3. WRONG 02 CARD (오답 2: 이석증 오진)
function generateWrong2Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2942" />
      <stop offset="50%" stop-color="#14375a" />
      <stop offset="100%" stop-color="#091b2e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Chapter Header -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">❌ CHAPTER 02. 가장 흔한 오답 02</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 50)">
      <text x="0" y="38" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#991b1b" letter-spacing="-1">
        "이석증인 줄 알고 이비인후과만 다녔어요"
      </text>
      <text x="0" y="80" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#475569">
        귀 검사, 뇌 MRI 모두 정상인데 왜 일어설 때마다 세상이 흔들릴까?
      </text>
    </g>

    <!-- Differences Table Grid -->
    <g transform="translate(55, 170)">
      <rect x="0" y="0" width="860" height="340" rx="20" fill="#f8fafc" stroke="#cbd5e1" />
      
      <!-- Table Header -->
      <line x1="0" y1="70" x2="860" y2="70" stroke="#cbd5e1" stroke-width="2" />
      <line x1="430" y1="0" x2="430" y2="340" stroke="#cbd5e1" stroke-width="2" />
      
      <text x="215" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#64748b" text-anchor="middle">귀 질환 (이석증·전정신경염)</text>
      <text x="645" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#2563eb" text-anchor="middle">기립성 빈맥 (POTS / 자율신경)</text>

      <!-- Row 1 -->
      <text x="35" y="115" font-family="${fontFamilies}" font-size="17" fill="#334155">🌀 <tspan font-weight="bold">회전성 어지럼</tspan> (천장이 빙빙 돎)</text>
      <text x="465" y="115" font-family="${fontFamilies}" font-size="17" fill="#1e3a8a">🌫️ <tspan font-weight="bold">비회전성 아찔함</tspan> (눈앞 깜깜·휘청임)</text>

      <!-- Row 2 -->
      <text x="35" y="170" font-family="${fontFamilies}" font-size="17" fill="#334155">🛌 <tspan font-weight="bold">고개 돌리거나 누울 때</tspan> 악화</text>
      <text x="465" y="170" font-family="${fontFamilies}" font-size="17" fill="#1e3a8a">🧍 <tspan font-weight="bold">누웠다 일어설 때</tspan> 즉각 발생</text>

      <!-- Row 3 -->
      <text x="35" y="225" font-family="${fontFamilies}" font-size="17" fill="#334155">💓 <tspan font-weight="bold">맥박 변화 없음</tspan></text>
      <text x="465" y="225" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626">💓 일어서면 심장 30회↑ 폭증</text>

      <!-- Row 4 -->
      <text x="35" y="280" font-family="${fontFamilies}" font-size="17" fill="#334155">👂 귀 이명, 난청, 구토 동반</text>
      <text x="465" y="280" font-family="${fontFamilies}" font-size="17" fill="#1e3a8a">🧠 뇌 브레인포그, 멍함, 만성 피로</text>
    </g>

    <!-- Key Takeaway Banner -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="175" rx="16" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="30" y="42" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1d4ed8">
        💡 발병 부위의 오해 : 귀가 아닌 '하지 혈액 펌핑 부전'
      </text>
      <text x="30" y="80" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
        이석증 치료(이석치환술)를 받아도 낫지 않는 이유는 원인이 귀에 없기 때문입니다.
      </text>
      <text x="30" y="110" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
        서 있을 때 하체에 고인 피를 뇌로 뿜어 올리지 못해 생기는 <tspan font-weight="bold" fill="#2563eb">'뇌혈류 순환 저하'</tspan>입니다.
      </text>
      <text x="30" y="142" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#1d4ed8">
        👉 뇌와 자율신경의 상하 혈액 순환 축을 바로잡아야 합니다.
      </text>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 750)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        부평역 7번 출구 | 원인 불명 만성 어지럼증·자율신경 정밀 감별
      </text>
    </g>
  </g>
</svg>`;
}

// 4. WRONG 03 CARD (오답 3: 무리한 유산소 운동)
function generateWrong3Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2942" />
      <stop offset="50%" stop-color="#14375a" />
      <stop offset="100%" stop-color="#091b2e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Chapter Header -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">❌ CHAPTER 03. 가장 흔한 오답 03</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 50)">
      <text x="0" y="38" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#991b1b" letter-spacing="-1">
        "체력 탓하며 억지로 유산소 운동만 했어요"
      </text>
      <text x="0" y="80" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#475569">
        심장이 이미 분당 130회 뛰는데, 억지로 달리면 왜 실신할까?
      </text>
    </g>

    <!-- Visual Hazard Flow -->
    <g transform="translate(55, 170)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="265" height="340" rx="16" fill="#fef2f2" stroke="#fca5a5" />
        <text x="132" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">STEP 01</text>
        <text x="132" y="80" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b" text-anchor="middle">기립 시 뇌혈류 급감</text>
        <circle cx="132" cy="150" r="45" fill="#fee2e2" />
        <text x="132" y="162" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🧠⚡</text>
        <text x="20" y="235" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          서 있는 것만으로도
        </text>
        <text x="20" y="262" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          뇌로 가는 혈류량이
        </text>
        <text x="20" y="289" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626" text-anchor="start">
          30~40% 일시 감소
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(295, 0)">
        <rect x="0" y="0" width="265" height="340" rx="16" fill="#fff7ed" stroke="#fdba74" />
        <text x="132" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ea580c" text-anchor="middle">STEP 02</text>
        <text x="132" y="80" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#c2410c" text-anchor="middle">심장 보상성 폭주</text>
        <circle cx="132" cy="150" r="45" fill="#ffedd5" />
        <text x="132" y="162" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💓🔥</text>
        <text x="20" y="235" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          뇌를 살리기 위해
        </text>
        <text x="20" y="262" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          심장이 쿵쾅거리며
        </text>
        <text x="20" y="289" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ea580c" text-anchor="start">
          분당 120~140회 폭증
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(595, 0)">
        <rect x="0" y="0" width="265" height="340" rx="16" fill="#fef2f2" stroke="#f87171" stroke-width="2" />
        <text x="132" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">STEP 03 (위험)</text>
        <text x="132" y="80" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#7f1d1d" text-anchor="middle">무리한 러닝 강행</text>
        <circle cx="132" cy="150" r="45" fill="#fee2e2" />
        <text x="132" y="162" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚠️😵</text>
        <text x="20" y="235" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          근육으로 혈액 분산
        </text>
        <text x="20" y="262" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          뇌 산소 공급 완전 차단
        </text>
        <text x="20" y="289" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b91c1c" text-anchor="start">
          눈앞 깜깜 실신(Syncope)
        </text>
      </g>
    </g>

    <!-- Key Takeaway Banner -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="175" rx="16" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="30" y="42" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1e293b">
        💡 올바른 운동 처방 : 서서 달리기 ❌ → 누워서 하는 하지 운동 ⭕
      </text>
      <text x="30" y="80" font-family="${fontFamilies}" font-size="16" fill="#475569">
        기립성 빈맥 환자에게 서서 뛰는 러닝머신은 독입니다. 
      </text>
      <text x="30" y="110" font-family="${fontFamilies}" font-size="16" fill="#475569">
        <tspan font-weight="bold" fill="#2563eb">누워서 타는 실내 자전거(리컴번트), 수영, 누워서 다리 들기</tspan> 등 중력 영향을 받지 않는
      </text>
      <text x="30" y="142" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#2563eb">
        하체 종아리 근육 펌프 강화 운동부터 단계적으로 시작해야 합니다.
      </text>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 750)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        부평역 7번 출구 | 1:1 환자 맞춤 운동 지도 &amp; 자율신경 회복 처방
      </text>
    </g>
  </g>
</svg>`;
}

// 5. TREATMENT CARD (오답을 종결짓는 1:1 역발상 맞춤치료)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2942" />
      <stop offset="50%" stop-color="#14375a" />
      <stop offset="100%" stop-color="#091b2e" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">⭕ CHAPTER 04. 오답 종결 솔루션</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 45)">
      <text x="0" y="36" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
        기립성 빈맥을 종결짓는 1:1 맞춤 한방 치료
      </text>
      <text x="0" y="76" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#059669">
        혈관 수축 반사력 회복 &amp; 뇌 혈류 순환 정상화 3대 복합 솔루션
      </text>
    </g>

    <!-- 3 Step Solution Cards -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#ecfdf5" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🌿</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          01. 청상강화(淸上降火) &amp; 승기보혈(升氣補血) 1:1 맞춤 한약
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 영계출감탕, 보중익기탕, 사역산 가감방 처방
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 상체로 치솟은 허열을 내리고 하초의 수기(水氣)와 기혈을 끌어올려 혈관 수축력 회복
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          👉 일어설 때 심장이 폭주하지 않도록 자율신경계 과흥분을 안정
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#eff6ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">📍</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          02. 자율신경 조절 침구 &amp; 전침 치료
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 족삼리, 삼음교, 태충(하체 혈액 펌핑 혈자리) + 백회, 풍지(뇌혈류 개선 혈자리)
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 교감신경과 부교감신경의 상호 반사 밸런스를 즉각적으로 조절
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#2563eb">
          👉 뇌로 가는 혈류 저항을 낮추고 하지 정맥 환류 촉진
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fdf4ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">💆</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          03. 경추·두개천골 추나요법 &amp; 뇌파 안정 훈련
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 일자목·거북목으로 좁아진 추골동맥(경추 혈관)의 압박을 해소
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌척수액 순환을 원활히 하고 뉴로피드백을 통해 과민해진 뇌신경 이완
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#9333ea">
          👉 만성 어지럼, 브레인포그, 긴장성 두통의 동시 소실
        </text>
      </g>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 730)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        한방침구과 전문의 권형근 대표원장 | 부평역 7번 출구 | 032-719-3472
      </text>
      <g transform="translate(680, 15)">
        <rect x="0" y="0" width="180" height="52" rx="12" fill="#059669" />
        <text x="90" y="33" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">네이버 간편예약</text>
      </g>
    </g>
  </g>
</svg>`;
}

async function renderCard(svgStr, outPath) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1080 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(outPath, pngBuffer);
}

async function run() {
  console.log('Rendering Gajwa POTS Dizziness Cards (Thumbnail + Wrong1 + Wrong2 + Wrong3 + Treatment)...');
  
  const cards = [
    { name: '01_naver_main_thumbnail.jpg', svg: generateMainThumbnail() },
    { name: '02_point1_wrong1.jpg', svg: generateWrong1Card() },
    { name: '03_point2_wrong2.jpg', svg: generateWrong2Card() },
    { name: '04_point3_wrong3.jpg', svg: generateWrong3Card() },
    { name: '05_point4_treatment.jpg', svg: generateTreatmentCard() }
  ];

  for (const card of cards) {
    for (const dir of targetDirs) {
      const outPath = path.join(dir, card.name);
      await renderCard(card.svg, outPath);
      console.log(`Saved: ${outPath}`);
    }
  }

  console.log('All 5 C-type cards generated successfully!');
}

run().catch(console.error);
