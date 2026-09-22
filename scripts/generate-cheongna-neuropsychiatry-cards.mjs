import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/cheongna-neuropsychiatry',
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
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082026" />
      <stop offset="50%" stop-color="#0d3b38" />
      <stop offset="100%" stop-color="#061a1d" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 자율신경 한방신경정신과 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="600" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f766e">
        공황장애 · 불면증 · 우울증 · 불안장애 · 자율신경실조증
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      청라 신경정신과 한의원 1:1 맞춤 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="600" fill="#2d6a59">
      몸과 마음의 연결고리를 풀어 뇌 자생력과 자율신경을 회복합니다
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 기전 분석</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">편도체 과열 &amp; 자율신경 실조</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">심신일여(心身一如) 뇌신경 불균형</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">가슴답답 · 수면장애 · 어지럼</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">신경정신과 7대 주요 신체 증상</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 맞춤 솔루션</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">체질 맞춤 한약 &amp; 뇌신경 침구</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">양약 감량(Tapering) 병행 지원</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧘</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 생활 루틴</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">4-7-8 이완호흡 · 풍지혈 지압</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">기상 햇볕 15분 세로토닌 합성</text>
      </g>
    </g>

    <!-- Center Callout / Quote Box -->
    <g transform="translate(55, 530)">
      <rect x="0" y="0" width="860" height="175" rx="16" fill="#f0f9f6" stroke="#bbf7d0" stroke-width="1.5" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#115e59">
        💡 마음의 불안과 우울, 의지 부족이 아닌 신경계의 과부하입니다
      </text>
      <text x="40" y="82" font-family="${fontFamilies}" font-size="16" fill="#334155" line-height="1.6">
        신경정신과적 고통은 뇌 변연계(편도체)의 과각성과 자율신경의 밸런스 붕괴로 발생합니다.
      </text>
      <text x="40" y="112" font-family="${fontFamilies}" font-size="16" fill="#334155">
        한의학은 뇌와 오장육부(심·간·비·폐·신)의 유기적 연결고리를 바로잡아
      </text>
      <text x="40" y="142" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">
        신경전달물질의 자연스러운 분비와 자생적 회복력을 되살립니다.
      </text>
    </g>

    <!-- Bottom Footer Info -->
    <g transform="translate(55, 735)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#e2e8f0" stroke-width="1.5" />
      <text x="0" y="42" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="72" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        부평역 7번 출구 바로 앞 (인천 서구·청라·부천 인접) · 대표원장 권형근
      </text>
      
      <!-- Night Clinic Pill -->
      <g transform="translate(620, 22)">
        <rect x="0" y="0" width="240" height="42" rx="21" fill="#0d9488" />
        <text x="120" y="27" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">
          월·수·금 야간진료 20시
        </text>
      </g>
    </g>

  </g>
</svg>
  `;
}

// 2. POINT 01 (원인 분석 - 뇌신경계 과부하와 자율신경 기전)
function generatePoint1Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082026" />
      <stop offset="50%" stop-color="#0d3b38" />
      <stop offset="100%" stop-color="#061a1d" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Pill -->
  <g transform="translate(540, 65)">
    <rect x="-170" y="0" width="340" height="48" rx="24" fill="#0d9488" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🧠 POINT 01. 기전 분석</text>
  </g>

  <!-- Main Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />

    <text x="55" y="80" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      신경정신과 질환, 왜 몸의 증상으로 먼저 나타날까요?
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="21" font-weight="600" fill="#2d6a59">
      스트레스와 피로로 뇌 편도체가 과열되면 자율신경계가 함께 무너집니다
    </text>

    <!-- 3 Mechanism Cards -->
    <g transform="translate(55, 165)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="55" cy="67" r="30" fill="#fee2e2" />
        <text x="55" y="76" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🚨</text>
        <text x="110" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">편도체(Amygdala)의 과각성 &amp; 공포 알람 오작동</text>
        <text x="110" y="80" font-family="${fontFamilies}" font-size="16" fill="#4a5f57">위험 상황이 아님에도 뇌의 감정 중추가 과도하게 흥분하여 뇌가 '비상사태'로 착각합니다.</text>
        <text x="110" y="108" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">스마트폰 백그라운드 앱 100개가 꺼지지 않고 계속 배터리를 소모하는 상태</text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="55" cy="67" r="30" fill="#fef3c7" />
        <text x="55" y="76" font-family="${fontFamilies}" font-size="26" text-anchor="middle">⚡</text>
        <text x="110" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b45309">자율신경계 불균형 (교감 항진 vs 부교감 저하)</text>
        <text x="110" y="80" font-family="${fontFamilies}" font-size="16" fill="#4a5f57">가속 페달(교감신경)만 밟히고 브레이크(부교감신경)가 마모되어 심장 두근거림, 호흡곤란 유발.</text>
        <text x="110" y="108" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">심계정충(心悸怔忡) · 가슴 답답함 · 식은땀 · 과호흡 동반</text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="55" cy="67" r="30" fill="#e0e7ff" />
        <text x="55" y="76" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🔄</text>
        <text x="110" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#4338ca">뇌장축(Brain-Gut Axis)과 신체화 장애</text>
        <text x="110" y="80" font-family="${fontFamilies}" font-size="16" fill="#4a5f57">뇌와 장·오장육부는 미주신경으로 긴밀히 연결되어, 뇌의 불안이 소화기 장애·담적을 만듭니다.</text>
        <text x="110" y="108" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">신경성 위염 · 역류성 식도염 · 과민대장증후군 동반</text>
      </g>
    </g>

    <!-- Bottom Highlight Banner -->
    <g transform="translate(55, 660)">
      <rect x="0" y="0" width="860" height="160" rx="16" fill="#e6f7f3" stroke="#99f6e4" stroke-width="1.5" />
      <text x="40" y="42" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f766e">
        💡 한의학의 핵심 관점 : 심신일여 (心身一如)
      </text>
      <text x="40" y="76" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
        마음의 병은 몸의 기혈(氣血) 순환 장애와 오장육부의 열감(상열하한)에서 비롯됩니다.
      </text>
      <text x="40" y="106" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
        단순히 뇌 중추신경만 억제하는 것이 아니라, 무너진 자율신경과 장부의 불균형을 함께 다스려야
      </text>
      <text x="40" y="134" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
        약물 의존 없이 스스로 회복하는 뇌 자생력이 복원됩니다.
      </text>
    </g>

  </g>
</svg>
  `;
}

// 3. POINT 02 (자가진단 체크리스트)
function generatePoint2Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082026" />
      <stop offset="50%" stop-color="#0d3b38" />
      <stop offset="100%" stop-color="#061a1d" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Pill -->
  <g transform="translate(540, 65)">
    <rect x="-180" y="0" width="360" height="48" rx="24" fill="#0d9488" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">📋 POINT 02. 자가진단</text>
  </g>

  <!-- Main Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />

    <text x="55" y="80" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      뇌와 자율신경이 보내는 7대 과부하 신호
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#2d6a59">
      내과 검사상 이상이 없는데도 아래 증상이 3가지 이상 지속된다면 진료가 필요합니다
    </text>

    <!-- Checklist 7 items -->
    <g transform="translate(55, 160)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="62" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.2" />
        <circle cx="35" cy="31" r="16" fill="#0d9488" />
        <text x="35" y="38" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="70" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#1e293b">특별한 이유 없이 심장이 자주 두근거리고 조여오는 듯한 가슴 답답함이 있다.</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 72)">
        <rect x="0" y="0" width="860" height="62" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.2" />
        <circle cx="35" cy="31" r="16" fill="#0d9488" />
        <text x="35" y="38" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="70" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#1e293b">잠들기 어렵거나 자다가 자주 깨며, 자고 일어나도 개운하지 않고 피로가 누적된다.</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 144)">
        <rect x="0" y="0" width="860" height="62" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.2" />
        <circle cx="35" cy="31" r="16" fill="#0d9488" />
        <text x="35" y="38" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="70" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#1e293b">엘리베이터, 만원 지하철, 터널 등 밀폐된 공간이나 낯선 장소에서 극심한 불안을 느낀다.</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 216)">
        <rect x="0" y="0" width="860" height="62" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.2" />
        <circle cx="35" cy="31" r="16" fill="#0d9488" />
        <text x="35" y="38" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="70" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#1e293b">목에 무언가 걸린 듯한 이물감(매핵기)이나 만성 신경성 소화불량이 반복된다.</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 288)">
        <rect x="0" y="0" width="860" height="62" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.2" />
        <circle cx="35" cy="31" r="16" fill="#0d9488" />
        <text x="35" y="38" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="70" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#1e293b">앉았다 일어날 때 핑 도는 기립성 어지럼증이나 머리가 멍하고 무거운 두통이 잦다.</text>
      </g>

      <!-- Item 6 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="62" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.2" />
        <circle cx="35" cy="31" r="16" fill="#0d9488" />
        <text x="35" y="38" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="70" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#1e293b">사소한 자극에도 쉽게 짜증과 예민함이 폭발하고, 매사에 무기력하며 집중이 안 된다.</text>
      </g>

      <!-- Item 7 -->
      <g transform="translate(0, 432)">
        <rect x="0" y="0" width="860" height="62" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.2" />
        <circle cx="35" cy="31" r="16" fill="#0d9488" />
        <text x="35" y="38" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="70" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#1e293b">얼굴과 머리로는 열이 오르고(상열), 손발은 차가우며 식은땀이 수시로 흐른다.</text>
      </g>
    </g>

    <!-- Bottom Diagnosis Banner -->
    <g transform="translate(55, 680)">
      <rect x="0" y="0" width="860" height="145" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="40" y="42" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#b91c1c">
        ⚠️ 3개 이상 해당된다면 자율신경실조증 및 뇌신경 과각성 상태
      </text>
      <text x="40" y="76" font-family="${fontFamilies}" font-size="16" fill="#334155">
        초기에 방치하면 만성 공황장애, 우울증, 불면증, 신체화 장애로 진행될 수 있습니다.
      </text>
      <text x="40" y="106" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#991b1b">
        정밀한 뇌기능 및 자율신경 검사를 통해 1:1 맞춤 근본 치료를 시작해야 합니다.
      </text>
    </g>

  </g>
</svg>
  `;
}

// 4. POINT 03 (치료 솔루션 - 1:1 맞춤 한방 신경정신과 케어)
function generatePoint3Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082026" />
      <stop offset="50%" stop-color="#0d3b38" />
      <stop offset="100%" stop-color="#061a1d" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Pill -->
  <g transform="translate(540, 65)">
    <rect x="-190" y="0" width="380" height="48" rx="24" fill="#0d9488" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🌿 POINT 03. 맞춤 솔루션</text>
  </g>

  <!-- Main Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />

    <text x="55" y="80" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      해아림의 3단계 뇌신경 자생력 회복 솔루션
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#2d6a59">
      증상 억제가 아닌 뇌-자율신경의 스스로 균형 잡는 힘을 복원합니다
    </text>

    <!-- 3 Step Process -->
    <g transform="translate(55, 160)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="55" cy="72" r="30" fill="#ccfbf1" />
        <text x="55" y="80" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">1단계</text>
        <text x="110" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">체질 맞춤 한약 처방 (과열된 편도체 진정 &amp; 심화 화기 강하)</text>
        <text x="110" y="80" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">사역산, 귀비탕, 천왕보심단, 반하후박탕 등을 환자의 체질과 변증에 맞춰 1:1 조제합니다.</text>
        <text x="110" y="108" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">가슴 두근거림 완화 · 신경계 흥분 안정 · 수면 질 개선</text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="55" cy="72" r="30" fill="#ccfbf1" />
        <text x="55" y="80" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">2단계</text>
        <text x="110" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">뇌신경 침구 치료 &amp; 미주신경 약침 요법</text>
        <text x="110" y="80" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">백회, 신문, 내관, 태충, 풍지혈을 자극하여 뇌 혈류를 개선하고 자율신경계를 리셋합니다.</text>
        <text x="110" y="108" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">경추 긴장 해소 · 부교감신경 활성화 · 뇌 혈류 순환 촉진</text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="55" cy="72" r="30" fill="#ccfbf1" />
        <text x="55" y="80" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f766e" text-anchor="middle">3단계</text>
        <text x="110" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">인지행동 훈련 &amp; 양약 감량(Tapering) 안심 병행</text>
        <text x="110" y="80" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">불안 유발 왜곡 인지를 교정하고, 복용 중인 신경과 약물의 안전한 단계적 감량을 돕습니다.</text>
        <text x="110" y="108" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">금단 증상 및 반동 현상 최소화 · 치료 종료 후 재발 방지</text>
      </g>
    </g>

    <!-- Bottom Quote Box -->
    <g transform="translate(55, 660)">
      <rect x="0" y="0" width="860" height="155" rx="16" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
      <text x="40" y="42" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#166534">
        ✨ 억제가 아닌 조화(調和) : 뇌의 자연스러운 리듬을 되찾아드립니다
      </text>
      <text x="40" y="76" font-family="${fontFamilies}" font-size="16" fill="#334155">
        한의학 신경정신과 치료는 강제로 졸리게 하거나 감정을 둔화시키지 않습니다.
      </text>
      <text x="40" y="106" font-family="${fontFamilies}" font-size="16" fill="#334155">
        낮에는 맑고 활기차게, 밤에는 깊고 편안하게 쉴 수 있는
      </text>
      <text x="40" y="134" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d">
        자연스러운 자율신경 생체 리듬을 회복하도록 돕습니다.
      </text>
    </g>

  </g>
</svg>
  `;
}

// 5. POINT 04 (생활 관리 루틴 - 약선차 배제, 물리/행동/환경 루틴)
function generatePoint4Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082026" />
      <stop offset="50%" stop-color="#0d3b38" />
      <stop offset="100%" stop-color="#061a1d" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Pill -->
  <g transform="translate(540, 65)">
    <rect x="-180" y="0" width="360" height="48" rx="24" fill="#0d9488" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🧘 POINT 04. 생활 루틴</text>
  </g>

  <!-- Main Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />

    <text x="55" y="80" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      진료실에서 권하는 일상 속 뇌신경 이완 3대 루틴
    </text>
    <text x="55" y="125" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#2d6a59">
      매일 10분, 무너진 자율신경을 안정시키는 과학적 실천 팁
    </text>

    <!-- 3 Self Care Tips -->
    <g transform="translate(55, 160)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="55" cy="72" r="30" fill="#ccfbf1" />
        <text x="55" y="80" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🫁</text>
        <text x="110" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">1. 미주신경 스위치를 켜는 '4-7-8 이완 호흡법'</text>
        <text x="110" y="80" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">4초간 코로 숨을 깊게 들이마시고, 7초간 숨을 참은 뒤, 8초간 입으로 천천히 내쉽니다.</text>
        <text x="110" y="108" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">교감신경 차단 &amp; 부교감신경 활성화 · 급성 불안 및 가슴 두근거림 즉각 진정</text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="55" cy="72" r="30" fill="#ccfbf1" />
        <text x="55" y="80" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💆</text>
        <text x="110" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">2. 후두하근 이완 &amp; '풍지혈(風池穴)' 지압</text>
        <text x="110" y="80" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">뒷목 양쪽 머리카락이 시작되는 오목한 부위를 엄지손가락으로 원을 그리며 3초간 지그시 누릅니다.</text>
        <text x="110" y="108" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">뇌 혈류 순환 개선 · 긴장성 두통 및 목·어깨 결림 완화</text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="55" cy="72" r="30" fill="#ccfbf1" />
        <text x="55" y="80" font-family="${fontFamilies}" font-size="26" text-anchor="middle">☀️</text>
        <text x="110" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">3. 기상 직후 15분 아침 햇볕 &amp; 취침 90분 전 족욕</text>
        <text x="110" y="80" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">아침 햇볕은 낮 동안 세로토닌을, 15시간 뒤 밤의 멜라토닌을 합성해 수면 리듬을 리셋합니다.</text>
        <text x="110" y="108" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0d9488">40도 온수 15분 족욕으로 상열하한(上熱下寒) 해소 및 숙면 유도</text>
      </g>
    </g>

    <!-- Bottom Footer Callout -->
    <g transform="translate(55, 660)">
      <rect x="0" y="0" width="860" height="155" rx="16" fill="#f0f9f6" stroke="#99f6e4" stroke-width="1.5" />
      <text x="40" y="42" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f766e">
        🌿 당신의 지친 몸과 마음, 결코 혼자 짊어지지 마세요
      </text>
      <text x="40" y="76" font-family="${fontFamilies}" font-size="16" fill="#334155">
        해아림한의원 인천부평점은 환자 한 분 한 분의 목소리에 깊이 귀 기울이며
      </text>
      <text x="40" y="106" font-family="${fontFamilies}" font-size="16" fill="#334155">
        스스로 일어설 수 있는 자생력을 되찾으실 때까지 든든한 동반자가 되어드립니다.
      </text>
      <text x="40" y="134" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
        부평역 7번 출구 앞 (청라·서구·부천 인접) · 월·수·금 야간진료 20시
      </text>
    </g>

  </g>
</svg>
  `;
}

// EXECUTE GENERATION
async function renderAndSave(svgString, fileName) {
  const resvg = new Resvg(svgString, {
    fitTo: {
      mode: 'width',
      value: 1080
    }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  for (const dir of targetDirs) {
    const filePath = path.join(dir, fileName);
    fs.writeFileSync(filePath, pngBuffer);
    console.log(`Saved: ${filePath}`);
  }
}

async function main() {
  console.log('Generating Cheongna Neuropsychiatry Blog Cards...');
  await renderAndSave(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderAndSave(generatePoint1Card(), '02_point1_cause.jpg');
  await renderAndSave(generatePoint2Card(), '03_point2_checklist.jpg');
  await renderAndSave(generatePoint3Card(), '04_point3_treatment.jpg');
  await renderAndSave(generatePoint4Card(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
