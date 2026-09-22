import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/luwon-subway-panic-hyperventilation',
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
      <stop offset="50%" stop-color="#311042" />
      <stop offset="100%" stop-color="#0f0728" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e11d48" />
      <stop offset="100%" stop-color="#f43f5e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🚇 만원지하철 공황장애 · 과호흡 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#fff1f2" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#be123c">
        출근길 지하철 문 닫히는 순간 숨 막히고 질식 공포? 편도체 오작동의 진실
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      루원시티 만원지하철 공황장애 · 과호흡 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#e11d48">
      가짜 화재경보 차단 · 이산화탄소 균형 &amp; 3단계 맞춤 한약 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fff1f2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🚨</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 3대 오해</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">의지박약이 아닌 뇌신경 오작동</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#e11d48">과호흡의 치명적 역설</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fff1f2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">편도체 가짜경보 &amp; 뇌혈관 수축</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#e11d48">광장공포증 3대 심층병리</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fff1f2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">청심안신탕 &amp; 뇌자생력 회복</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#e11d48">3단계 안심 복원 로드맵</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fff1f2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🫁</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 응급 대처</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">4-7-8 호흡 &amp; 감각 그라운딩</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#e11d48">지하철 안 3대 실천 수칙</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (루원시티/가정역에서 7호선/차량 15분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#e11d48" text-anchor="middle">
      "질식하지 않습니다. 편도체의 가짜 경보를 끄면 지하철 출퇴근이 다시 편안해집니다."
    </text>
  </g>
</svg>`;
}

// 2. POINT 01 (CHAPTER 01: 3대 오해와 과호흡 기전 카드)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#311042" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#fff1f2" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#e11d48" text-anchor="middle">
        CHAPTER 01. 환자의 3대 오해
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "숨이 안 쉬어져 헐떡이며 들이마셨다?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#e11d48">
      ❌ 과호흡 증후군과 공황발작의 치명적 착각
    </text>

    <!-- 3 Misconceptions Box -->
    <g transform="translate(50, 215)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="125" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="30" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">
          ❌ 오해 1: "내 마음이 약하고 담력이 부족해서 그렇다?"
        </text>
        <text x="30" y="70" font-family="${fontFamilies}" font-size="15" fill="#334155">
          공황장애는 의지력 문제가 아닌, 뇌의 공포 경보 장치인 '편도체'가 오작동하여 발생하는 신체적 질환입니다.
        </text>
        <text x="30" y="95" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#e11d48">
          ➔ 자책할수록 교감신경 긴장도가 높아져 발작 빈도가 잦아집니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="860" height="125" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="30" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">
          ❌ 오해 2: "산소가 부족하니 숨을 더 가쁘게 헐떡여야 한다?"
        </text>
        <text x="30" y="70" font-family="${fontFamilies}" font-size="15" fill="#334155">
          과호흡으로 숨을 몰아쉬면 혈중 이산화탄소가 빠져나가 뇌혈관이 수축되고 어지럼증·손발 마비가 발생합니다.
        </text>
        <text x="30" y="95" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#e11d48">
          ➔ 들이쉬는 것이 아니라 '천천히 길게 내쉬는 호흡'이 정답입니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 280)">
        <rect x="0" y="0" width="860" height="125" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="30" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">
          ❌ 오해 3: "신경안정제(자낙스)만 먹으면 완치된다?"
        </text>
        <text x="30" y="70" font-family="${fontFamilies}" font-size="15" fill="#334155">
          신경안정제는 뇌신경을 일시 억제할 뿐 자율신경 조절력과 예기불안의 악순환 고리를 끊지 못합니다.
        </text>
        <text x="30" y="95" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#e11d48">
          ➔ 약물 의존도가 높아지면 대중교통 탑승에 대한 공포가 더욱 굳어집니다.
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "지하철 안에서 절대 질식해 죽지 않습니다."
      </text>
      <text x="430" y="74" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#e11d48" text-anchor="middle">
        편도체의 가짜 화재경보를 끄고 이산화탄소 균형을 맞춰야 공황이 멈춥니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 공황장애 &amp; 광장공포증 클리닉
    </text>
  </g>
</svg>`;
}

// 3. POINT 02 (CHAPTER 02: 왜 안 나았을까? 3대 심층 원인 카드)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#311042" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="260" height="40" rx="20" fill="#fff1f2" />
      <text x="130" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#e11d48" text-anchor="middle">
        CHAPTER 02. 3대 심층 원인
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      만원지하철 공황발작의 3대 심층 병리
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#e11d48">
      밀폐 공간·질식 공포를 유발하는 뇌신경과 호흡의 복합 붕괴
    </text>

    <!-- 3 Root Cause Boxes -->
    <g transform="translate(50, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fff1f2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🔥</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 편도체(불안 중추) 오작동으로 인한 '가짜 화재경보'
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 실제 위험이 없음에도 뇌가 "목숨이 위험하다"고 착각해 비상벨을 울림
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 교감신경 폭주로 심장이 터질 듯 뛰고 혈압이 급상승하며 전신 식은땀 분출
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fff1f2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💨</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 과호흡으로 인한 저탄산혈증 &amp; 뇌혈관 급격 수축
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 헐떡이는 호흡으로 이산화탄소(CO2)가 과다 배출되어 혈액이 알칼리화됨
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌혈관이 수축되며 뇌 산소 공급이 급감 ➔ 심한 어지럼증·시야 흐림·실신 공포
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fff1f2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🚪</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 광장공포증(Agoraphobia) &amp; 예기불안의 악순환
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • "지하철 문이 닫히면 탈출할 수 없다"는 인지 왜곡이 뇌에 공포 회로로 각인
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 개찰구에 다가가기만 해도 심장이 뛰고 식은땀이 나는 조건반사 고착화
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#fff1f2" stroke="#fecdd3" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c" text-anchor="middle">
        💡 3대 심층 원인을 동시에 치료해야 대중교통을 혼자서도 편안하게 이용할 수 있습니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (CHAPTER 03: 3단계 한방 치료 로드맵 카드)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#311042" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#fff1f2" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#e11d48" text-anchor="middle">
        CHAPTER 03. 3단계 회복치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      해아림 3단계 안심 복원 솔루션
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#e11d48">
      약물 내성 없이, 뇌 스스로 공포 신호를 차단하도록 자생력 완성
    </text>

    <!-- 3 Treatment Boxes -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#fff1f2" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🧯</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          1단계: 청심안신(淸心安神) - 편도체 과열 냉각 &amp; 가짜경보 차단
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 시호, 황련, 용골, 모려 등으로 심포열을 내리고 교감신경 흥분 급속 진정
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 지하철 문이 닫힐 때 솟구치는 급성 과호흡과 심장 두근거림 즉각 소통
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#fff1f2" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚖️</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          2단계: 자율신경 시소 복원 &amp; 횡격막 호흡 안정
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 온담탕, 반하후박탕 처방으로 흉격의 담음을 제거하고 부교감신경 이완력 촉진
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 상경추·흉추 추나요법으로 뇌간 미주신경을 활성화하여 과호흡 원천 차단
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#fff1f2" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🎯</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          3단계: 예기불안 탈감작 &amp; 뇌파 뉴로피드백 훈련
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 귀비탕, 천왕보심단으로 심담 기혈을 보충하여 공포 회로를 둔감화(탈감작)
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 만원 지하철, 터널, 엘리베이터 등 밀폐 공간에서도 평온한 뇌파 유지 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#fff1f2" stroke="#fecdd3" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c" text-anchor="middle">
        💡 양약 복용 중단 없이 안전하게 병행 치료하며 점진적으로 약물을 줄여나갑니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (CHAPTER 04: 환자 실천 수칙 카드 - 약선차 제외)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#311042" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#fff1f2" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#e11d48" text-anchor="middle">
        CHAPTER 04. 실전 행동수칙
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      만원지하철 과호흡 응급 대처 3대 수칙
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#e11d48">
      밀폐 공간에서 숨이 턱 막힐 때 즉각적인 신체 안정 루틴
    </text>

    <!-- 3 Lifestyle Tips (Zero Tea) -->
    <g transform="translate(50, 215)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#fff1f2" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫁</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 들이쉬지 말고 '입으로 8초간 길게 내쉬기' (CO2 보존)
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 헐떡이는 흉식호흡을 멈추고 입술을 오므린 채 풍선 불듯 8초간 길게 내쉼
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 양손을 모아 코와 입에 대고(컵핸드) 숨을 쉬면 이산화탄소 분압이 정상화됨
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#fff1f2" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">👣</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 감각 그라운딩(5-4-3-2-1)으로 외부 현실에 앵커링
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 발바닥이 전철 바닥을 누르는 단단한 감각, 손잡이의 차가운 감촉에 집중
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 눈에 보이는 광고판 글자 3개를 마음속으로 소리 내어 읽으며 뇌 주의 전환
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#fff1f2" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🛁</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 취침 90분 전 족욕 &amp; 기상 직후 15분 햇볕 쬐기
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 밤 40도 족욕으로 상체 열을 내리고 아침 자연광으로 세로토닌 합성
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 자율신경 일주기 리듬을 고정하여 출근 시간대 편도체 과각성 예방
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#fff1f2" stroke="#fecdd3" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c" text-anchor="middle">
        💡 올바른 호흡법과 뇌신경 밸런스 치료가 결합될 때 공황은 100% 극복됩니다.
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
  console.log('Rendering Luwon Subway Panic Card Images (B-Pattern with 3 Root Causes on Card 3)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1(), '02_point1_cause.jpg');
  await renderCard(generatePoint2(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4(), '05_point4_selfcare.jpg');
  console.log('All 5 B-pattern cards generated successfully!');
}

run().catch(console.error);
