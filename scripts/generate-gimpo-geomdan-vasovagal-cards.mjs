import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/gimpo-geomdan-vasovagal',
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
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-270" y="0" width="540" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">⚡ 미주신경성 실신 · 출퇴근 어지러움 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="670" height="40" rx="8" fill="#f0f9ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0369a1">
        출퇴근길 갑자기 핑 돌고 식은땀? 미주신경 과반사 &amp; 뇌 혈류 저하 신호
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      김포 검단 미주신경성실신 · 출퇴근 어지러움
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#0284c7">
      자율신경 저혈압 조절 · 뇌 혈류 순환 복원 1:1 맞춤 한방 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0f9ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 발병 기전</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">미주신경 과반사 &amp; 뇌허혈</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">부교감 급발진과 혈압 급락</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0f9ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 전조 증상</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">시야 암전 · 식은땀 · 구역감</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">실신 위험 5대 체크리스트</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0f9ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">승기보혈 한약 &amp; 뇌혈류침</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">3단계 자율신경 회복 솔루션</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0f9ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 응급 대처</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">하지 압박 &amp; 즉시 쪼그려 앉기</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">낙상 예방 골든타임 행동수칙</text>
      </g>
    </g>

    <!-- Bottom Hospital Info Box -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="18" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <g transform="translate(30, 24)">
        <text x="0" y="24" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">해아림한의원 인천부평점</text>
        <text x="0" y="52" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">한방침구과 전문의 권형근 대표원장 1:1 전담 진료</text>
        <text x="0" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">부평역 7번 출구 바로 앞 | 월·수·금 야간진료 (20시) | 김포·검단 인접</text>
      </g>
      <g transform="translate(680, 42)">
        <rect x="0" y="0" width="150" height="52" rx="12" fill="#0284c7" />
        <text x="75" y="32" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">상담 · 예약 안내</text>
      </g>
    </g>

    <text x="485" y="730" font-family="${fontFamilies}" font-size="13" fill="#94a3b8" text-anchor="middle">
      ※ 본 카드뉴스는 의료 정보 제공을 목적으로 의료법을 준수하여 제작되었습니다.
    </text>
  </g>
</svg>`;
}

// 2. POINT 01 (원인 기전 카드)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 65)">
    <rect x="0" y="0" width="970" height="950" rx="32" fill="#ffffff" filter="url(#shadow)" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="120" height="36" rx="8" fill="#0284c7" />
      <text x="60" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
      <text x="135" y="26" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">미주신경성 실신의 발병 기전</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      왜 출퇴근길 지하철·버스에서 갑자기 쓰러질까요?
    </text>
    <text x="55" y="170" font-family="${fontFamilies}" font-size="18" fill="#64748b">
      심장병이 아니라 미주신경(부교감)의 급격한 오작동과 뇌 혈류 일시 중단 때문입니다.
    </text>

    <!-- 3 기전 박스 -->
    <g transform="translate(55, 205)">
      <!-- 박스 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="75" r="28" fill="#e0f2fe" />
        <text x="50" y="83" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🫀</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">1. 미주신경 과흥분으로 인한 심박수 급락</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="15" fill="#334155">밀폐된 환경, 피로, 긴장 자극에 부교감신경이 급격히 발진하여</text>
        <text x="95" y="100" font-family="${fontFamilies}" font-size="15" fill="#0284c7" font-weight="bold">심장이 분당 40~50회 이하로 서맥 상태에 빠집니다.</text>
      </g>

      <!-- 박스 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="150" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="75" r="28" fill="#e0f2fe" />
        <text x="50" y="83" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🩸</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">2. 말초 혈관 이완과 혈액 하체 쏠림</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="15" fill="#334155">혈관을 조여주는 교감신경 긴장도가 바닥으로 떨어져</text>
        <text x="95" y="100" font-family="${fontFamilies}" font-size="15" fill="#0284c7" font-weight="bold">혈액이 다리와 내장으로 몰리며 혈압이 급강하합니다.</text>
      </g>

      <!-- 박스 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="150" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="75" r="28" fill="#e0f2fe" />
        <text x="50" y="83" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🧠</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">3. 뇌 혈류 저하 및 일시적 의식 소실</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="15" fill="#334155">뇌로 공급되는 산소와 혈액이 수초간 차단되면서</text>
        <text x="95" y="100" font-family="${fontFamilies}" font-size="15" fill="#e11d48" font-weight="bold">눈앞이 캄캄해지고 몸에 힘이 빠져 바닥에 쓰러집니다.</text>
      </g>
    </g>

    <!-- 하단 핵심 요약 -->
    <g transform="translate(55, 725)">
      <rect x="0" y="0" width="860" height="90" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0369a1" text-anchor="middle">
        💡 "기질적 심장 질환이 없어도, 자율신경 조절력 저하로 실신이 반복될 수 있습니다."
      </text>
      <text x="430" y="68" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="middle">
        해아림한의원은 신경계 자생력을 길러 자율신경 급발진을 차단합니다.
      </text>
    </g>

    <text x="485" y="845" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 | 대표원장 권형근 (한방침구과 전문의)
    </text>
  </g>
</svg>`;
}

// 3. POINT 02 (전조증상 체크리스트)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 65)">
    <rect x="0" y="0" width="970" height="950" rx="32" fill="#ffffff" filter="url(#shadow)" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="120" height="36" rx="8" fill="#0284c7" />
      <text x="60" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
      <text x="135" y="26" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">미주신경성 실신 전조증상 체크</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      쓰러지기 직전 나타나는 5대 골든타임 전조증상
    </text>
    <text x="55" y="170" font-family="${fontFamilies}" font-size="18" fill="#64748b">
      다음 증상이 느껴진다면 즉시 자리에 주저앉아 뇌 혈류를 확보해야 합니다.
    </text>

    <!-- 5개 체크리스트 -->
    <g transform="translate(55, 205)">
      <!-- 항목 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="90" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="45" cy="45" r="18" fill="#e0f2fe" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7" text-anchor="middle">01</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">눈앞이 캄캄해지거나 하얗게 흐려지는 시야 장애</text>
        <text x="85" y="66" font-family="${fontFamilies}" font-size="14" fill="#64748b">뇌 시각 피질로 통하는 혈류량이 급격히 떨어지며 주변이 어두워집니다.</text>
      </g>

      <!-- 항목 2 -->
      <g transform="translate(0, 102)">
        <rect x="0" y="0" width="860" height="90" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="45" cy="45" r="18" fill="#e0f2fe" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7" text-anchor="middle">02</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">이마와 등 뒤로 쏟아지는 차가운 식은땀</text>
        <text x="85" y="66" font-family="${fontFamilies}" font-size="14" fill="#64748b">자율신경계 급반응으로 체온 조절 중추가 오작동하여 식은땀이 솟구칩니다.</text>
      </g>

      <!-- 항목 3 -->
      <g transform="translate(0, 204)">
        <rect x="0" y="0" width="860" height="90" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="45" cy="45" r="18" fill="#e0f2fe" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7" text-anchor="middle">03</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">속이 메스껍고 구토가 올라올 것 같은 오심감</text>
        <text x="85" y="66" font-family="${fontFamilies}" font-size="14" fill="#64748b">위장관을 지배하는 미주신경의 비정상적 경련 반응이 나타납니다.</text>
      </g>

      <!-- 항목 4 -->
      <g transform="translate(0, 306)">
        <rect x="0" y="0" width="860" height="90" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="45" cy="45" r="18" fill="#e0f2fe" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7" text-anchor="middle">04</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">하체에 힘이 쫙 빠지고 다리가 후들거리는 무력감</text>
        <text x="85" y="66" font-family="${fontFamilies}" font-size="14" fill="#64748b">체성 운동 신경의 긴장도가 풀리며 제자리 유지가 힘들어집니다.</text>
      </g>

      <!-- 항목 5 -->
      <g transform="translate(0, 408)">
        <rect x="0" y="0" width="860" height="90" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="45" cy="45" r="18" fill="#e0f2fe" />
        <text x="45" y="52" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7" text-anchor="middle">05</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">주변 소리가 멀어지거나 귓속에서 삐- 소리 이명</text>
        <text x="85" y="66" font-family="${fontFamilies}" font-size="14" fill="#64748b">내이 달팽이관 허혈로 청각 감각 전달이 일시 왜곡됩니다.</text>
      </g>
    </g>

    <!-- 하단 경고 배너 -->
    <g transform="translate(55, 725)">
      <rect x="0" y="0" width="860" height="90" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        ⚠️ "전조증상 발생 시 체면 차리지 말고 즉시 쪼그려 앉아야 2차 부상을 막습니다!"
      </text>
      <text x="430" y="68" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="middle">
        반복되는 실신은 뇌 신경계의 자생적 조절력 회복 치료가 반드시 필요합니다.
      </text>
    </g>

    <text x="485" y="845" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 | 대표원장 권형근 (한방침구과 전문의)
    </text>
  </g>
</svg>`;
}

// 4. POINT 03 (1:1 맞춤 한방 치료)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 65)">
    <rect x="0" y="0" width="970" height="950" rx="32" fill="#ffffff" filter="url(#shadow)" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="120" height="36" rx="8" fill="#0284c7" />
      <text x="60" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
      <text x="135" y="26" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">해아림한의원 1:1 맞춤 치료</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      자율신경계 균형과 뇌 혈류 순환을 복원하는 3단계
    </text>
    <text x="55" y="170" font-family="${fontFamilies}" font-size="18" fill="#64748b">
      화학적 억제가 아닌 뇌 신경망의 자생적 조절력을 회복시켜 실신 재발을 차단합니다.
    </text>

    <!-- 3단계 치료 솔루션 -->
    <g transform="translate(55, 205)">
      <!-- 치료 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <circle cx="50" cy="75" r="28" fill="#dcfce7" />
        <text x="50" y="83" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🌿</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">1단계: 승기보혈(昇氣補血) 1:1 맞춤 한약 처방</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="15" fill="#334155">심비양허 체질을 개선하고 말초 혈관의 탄력성과 수축력을 강화하여</text>
        <text x="95" y="100" font-family="${fontFamilies}" font-size="15" fill="#15803d" font-weight="bold">체위 변화나 스트레스 시에도 뇌 혈류량을 안정적으로 유지시킵니다.</text>
      </g>

      <!-- 치료 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="150" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <circle cx="50" cy="75" r="28" fill="#e0f2fe" />
        <text x="50" y="83" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🎯</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">2단계: 경추 자율신경 약침 &amp; 미세 순환 침구</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="15" fill="#334155">목 주변 성상신경절과 상부 경추 경혈에 순수 한약 정제 약침을 주입해</text>
        <text x="95" y="100" font-family="${fontFamilies}" font-size="15" fill="#0284c7" font-weight="bold">과항진된 미주신경을 진정시키고 뇌간 혈류 순환을 촉진합니다.</text>
      </g>

      <!-- 치료 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="150" rx="16" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5" />
        <circle cx="50" cy="75" r="28" fill="#f3e8ff" />
        <text x="50" y="83" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🧠</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#7e22ce">3단계: 두개천골 추나요법 &amp; 바이오피드백</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="15" fill="#334155">경추 1·2번 정렬을 바로잡아 뇌척수액 순환을 원활히 하고</text>
        <text x="95" y="100" font-family="${fontFamilies}" font-size="15" fill="#9333ea" font-weight="bold">자율신경 호흡 바이오피드백으로 심박 변이도(HRV)를 정상화합니다.</text>
      </g>
    </g>

    <!-- 하단 핵심 요약 -->
    <g transform="translate(55, 725)">
      <rect x="0" y="0" width="860" height="90" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922" text-anchor="middle">
        🩺 "체계적인 원인 진단과 1:1 맞춤 치료로 평온하고 안전한 일상을 되찾아 드립니다."
      </text>
      <text x="430" y="68" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
        한방침구과 전문의 권형근 대표원장이 1:1로 직접 진단하고 처방합니다.
      </text>
    </g>

    <text x="485" y="845" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 | 대표원장 권형근 (한방침구과 전문의)
    </text>
  </g>
</svg>`;
}

// 5. POINT 04 (생활 속 응급 대처법)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 65)">
    <rect x="0" y="0" width="970" height="950" rx="32" fill="#ffffff" filter="url(#shadow)" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="120" height="36" rx="8" fill="#0284c7" />
      <text x="60" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
      <text x="135" y="26" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">생활 속 응급 대처 &amp; 예방 루틴</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      실신을 예방하고 전조 시 대처하는 3대 행동 수칙
    </text>
    <text x="55" y="170" font-family="${fontFamilies}" font-size="18" fill="#64748b">
      약선차 없이도 일상에서 물리적·행동학적으로 실신 위험을 낮출 수 있습니다.
    </text>

    <!-- 3대 생활 수칙 박스 -->
    <g transform="translate(55, 205)">
      <!-- 수칙 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="75" r="28" fill="#e0f2fe" />
        <text x="50" y="83" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🦵</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">1. 전조증상 시 즉시 하지 근육 압박법 시행</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="15" fill="#334155">서 있는 상태에서 핑 돌면 다리를 X자로 꼬고 종아리와 허벅지에</text>
        <text x="95" y="100" font-family="${fontFamilies}" font-size="15" fill="#0284c7" font-weight="bold">강하게 힘을 주어 하체 혈액을 뇌로 즉시 밀어 올려줍니다.</text>
      </g>

      <!-- 수칙 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="150" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="75" r="28" fill="#e0f2fe" />
        <text x="50" y="83" font-family="${fontFamilies}" font-size="24" text-anchor="middle">💧</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">2. 기상 직후 미지근한 물 500ml 섭취</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="15" fill="#334155">밤새 손실된 혈액량을 보충하여 혈압 강하를 예방하고</text>
        <text x="95" y="100" font-family="${fontFamilies}" font-size="15" fill="#0284c7" font-weight="bold">출근길 대중교통 탑승 전 혈류 순환 속도를 정상화합니다.</text>
      </g>

      <!-- 수칙 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="150" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="75" r="28" fill="#e0f2fe" />
        <text x="50" y="83" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🪑</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">3. 장시간 서 있기 피하고 통풍 유지</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="15" fill="#334155">지하철·버스에서 답답할 때는 외투를 벗고 목 부위를 느슨히 하며,</text>
        <text x="95" y="100" font-family="${fontFamilies}" font-size="15" fill="#0284c7" font-weight="bold">까치발 운동을 수시로 반복하여 혈관 펌프를 작동시킵니다.</text>
      </g>
    </g>

    <!-- 하단 진료 안내 -->
    <g transform="translate(55, 725)">
      <rect x="0" y="0" width="860" height="90" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0369a1" text-anchor="middle">
        🏥 "미주신경성 실신, 참지 마시고 전문 의료진과 함께 근본 원인을 치료하세요."
      </text>
      <text x="430" y="68" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="middle">
        부평역 7번 출구 | 야간진료(월·수·금 20시) | 032-719-3472
      </text>
    </g>

    <text x="485" y="845" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 | 대표원장 권형근 (한방침구과 전문의)
    </text>
  </g>
</svg>`;
}

function renderAndSave(svgStr, filename) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1080 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  for (const dir of targetDirs) {
    fs.writeFileSync(path.join(dir, filename), pngBuffer);
  }
  console.log(`✅ [생성 완료] ${filename}`);
}

console.log('🚀 [김포 검단 미주신경성 실신] 고화질 5종 카드뉴스 렌더링 시작...');

renderAndSave(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
renderAndSave(generatePoint1Cause(), '02_point1_cause.jpg');
renderAndSave(generatePoint2Checklist(), '03_point2_checklist.jpg');
renderAndSave(generatePoint3Treatment(), '04_point3_treatment.jpg');
renderAndSave(generatePoint4Selfcare(), '05_point4_selfcare.jpg');

console.log('🎉 [전체 완료] 김포 검단 미주신경성 실신 전용 5종 카드뉴스 생성 완료!');
