import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-neuropsychiatry',
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
      <stop offset="0%" stop-color="#071e22" />
      <stop offset="50%" stop-color="#0b3834" />
      <stop offset="100%" stop-color="#051717" />
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
      <rect x="0" y="0" width="580" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f766e">
        공황장애 · 불면증 · 우울증 · 불안 · 자율신경실조증
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 신경정신과 한의원 1:1 맞춤 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="600" fill="#2d6a59">
      약물 의존 걱정 없이 뇌 자생력과 자율신경 밸런스를 회복합니다
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 원인 분석</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">편도체 과열 &amp; 자율신경 실조</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">심신일여(心身一如) 뇌신경 불균형</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">두근거림 · 수면장애 · 어지럼</text>
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
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 생활 실천</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">4-7-8 이완호흡 &amp; 수면 루틴</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">점진적 근육이완 &amp; 햇볕 세로토닌</text>
      </g>
    </g>

    <!-- Clinic Info Footer Banner -->
    <g transform="translate(55, 530)">
      <rect x="0" y="0" width="860" height="90" rx="16" fill="#f0f7f4" stroke="#c2ded3" stroke-width="1.5" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#115e59">
        🏥 해아림한의원 인천부평점 · 부평역 7번 출구 (도보 5분)
      </text>
      <text x="35" y="66" font-family="${fontFamilies}" font-size="15" fill="#2d6a59">
        월·수·금 20시 야간진료 | 뇌신경계 1:1 맞춤 한방 치료 | 032-719-3472
      </text>
    </g>
  </g>
</svg>`;
}

// 2. POINT 01 (원인 분석 기전 카드)
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071e22" />
      <stop offset="50%" stop-color="#0b3834" />
      <stop offset="100%" stop-color="#051717" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Card Container -->
  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow2)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Top Step Tag -->
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="130" height="36" rx="8" fill="#0d9488" />
      <text x="65" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
      <text x="145" y="25" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">신경정신과 질환, 몸과 뇌는 어떻게 연결되어 있을까요?</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#042f2e" letter-spacing="-1">
      "마음의 병이 아닌 뇌 신경계와 자율신경의 생물학적 불균형"
    </text>
    <text x="55" y="172" font-family="${fontFamilies}" font-size="20" fill="#4a5f57">
      과도한 스트레스가 편도체를 자극하고 교감신경을 폭주시킵니다.
    </text>

    <!-- 3 Mechanism Cards -->
    <g transform="translate(55, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#0d9488" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">1. 뇌 변연계(편도체-해마)의 과각성과 조절 역치 저하</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 공포·불안을 담당하는 편도체가 과열되어 사소한 자극에도 비상경보를 발동합니다.
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 이성을 관장하는 전두엽의 통제력이 약화되어 불안, 공황, 우울 악순환 형성
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [기전] 뇌신경 전달물질(세로토닌·GABA) 불균형 및 억제성 회로 약화
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 205)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#2d6a59" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">2. 자율신경계 실조증 (교감 과항진 &amp; 부교감 억제)</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 가속 페달(교감신경)만 밟히고 브레이크(부교감신경)가 듣지 않는 상태
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 심계항진, 호흡곤란, 어지럼증, 소화불량, 만성 불면 등 다양한 전신 신체화 증상 유발
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [기전] 내과 검사상 정상이나 환자는 극심한 고통을 겪는 기능적 이상
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 410)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#14b8a6" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">3. 한의학적 심신일여(心身一如) &amp; 장부 불균형</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 심비양허(심장·비장 쇠약), 간기울결(스트레스 울체), 음허화왕(허열 상승)
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 정신과 신체는 하나라는 원리로 오장육부의 기혈 순환과 뇌 기능을 동시에 회복
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [치료 목표] 뇌신경 진정과 신체 자생력을 함께 복구하는 전인적 치료
        </text>
      </g>
    </g>

    <!-- Bottom summary quote -->
    <g transform="translate(55, 855)">
      <rect x="0" y="0" width="860" height="65" rx="12" fill="#e6f4f0" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e" text-anchor="middle">
        💡 한방 신경정신과는 뇌 신경계의 과민성을 낮추고 신체 장부의 균형을 함께 치료합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. POINT 02 (자가진단 체크리스트 카드)
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071e22" />
      <stop offset="50%" stop-color="#0b3834" />
      <stop offset="100%" stop-color="#051717" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Card Container -->
  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow3)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Top Step Tag -->
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="130" height="36" rx="8" fill="#0d9488" />
      <text x="65" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
      <text x="145" y="25" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">신경정신과 주요 진료 자가진단</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#042f2e" letter-spacing="-1">
      "내 몸과 마음에 나타나는 7가지 위험 신호 체크"
    </text>
    <text x="55" y="172" font-family="${fontFamilies}" font-size="20" fill="#4a5f57">
      아래 항목 중 3개 이상 지속된다면 뇌신경계 전문 한방 진료가 필요합니다.
    </text>

    <!-- Checklist 7 items -->
    <g transform="translate(55, 210)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">1. 이유 없이 심장이 심하게 두근거리고 가슴이 답답해 숨쉬기 힘들다. (공황·불안)</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 80)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">2. 잠들기까지 30분 이상 걸리거나 자주 깨며 깊은 잠을 못 잔다. (불면증)</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 160)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">3. 검사상 이상이 없으나 만성 두통, 어지럼증, 이명 증상이 반복된다. (자율신경)</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 240)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">4. 매사에 의욕이 없고 무기력하며 작은 일에도 짜증과 눈물이 난다. (우울증·화병)</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 320)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">5. 사람들 앞에 서거나 낯선 시선을 마주치면 손과 목소리가 떨린다. (사회공포증)</text>
      </g>

      <!-- Item 6 -->
      <g transform="translate(0, 400)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">6. 신경정신과 양약을 복용 중이나 졸림·멍함 부작용으로 감량을 원한다.</text>
      </g>

      <!-- Item 7 -->
      <g transform="translate(0, 480)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">7. 스트레스를 받으면 체기, 복통, 목 이물감(매핵기) 등 신체 증상이 악화된다.</text>
      </g>
    </g>

    <!-- Diagnosis Criteria Box -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">
        ⚠️ 치료 시기를 놓치면 안 되는 이유
      </text>
      <text x="35" y="70" font-family="${fontFamilies}" font-size="16" fill="#7f1d1d">
        • 초기에는 단순 피로로 보이지만, 방치 시 공황장애·우울증·만성 불면으로 복합 악화됩니다.
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c">
        • 조기에 뇌신경 조절력을 회복시키면 재발률을 낮추고 양약 의존을 예방할 수 있습니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (1:1 맞춤 한방 치료 솔루션 카드)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071e22" />
      <stop offset="50%" stop-color="#0b3834" />
      <stop offset="100%" stop-color="#051717" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Card Container -->
  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow4)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Top Step Tag -->
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="130" height="36" rx="8" fill="#0d9488" />
      <text x="65" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
      <text x="145" y="25" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">해아림한의원 1:1 맞춤 통합 치료 프로그램</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#042f2e" letter-spacing="-1">
      "뇌 기능 회복과 자율신경 조절의 4단계 통합 솔루션"
    </text>
    <text x="55" y="172" font-family="${fontFamilies}" font-size="20" fill="#4a5f57">
      중추신경계 진정, 기혈 보강, 장부 기능 개선으로 온전한 일상을 되찾아 드립니다.
    </text>

    <!-- 4 Treatment Step Cards -->
    <g transform="translate(55, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="130" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="65" r="28" fill="#e0f2ed" />
        <text x="50" y="73" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🌿</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">1. 원인별 체질 맞춤 한약 (사역산 · 귀비탕 · 천왕보심단 · 온담탕)</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 뇌 편도체 과열 진정, 신경전달물질 밸런스 회복, 가슴 두근거림 및 상열감 해소
        </text>
        <text x="95" y="102" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 의존성과 내성 걱정 없는 천연 생약 성분 | 양약 병행 및 감량(Tapering) 지원
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 145)">
        <rect x="0" y="0" width="860" height="130" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="65" r="28" fill="#e0f2ed" />
        <text x="50" y="73" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⚡</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">2. 뇌신경 조절 침구 및 전침 치료</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 백회(百會), 신문(神門), 내관(內關), 풍지(風池), 단중(膻中) 등 주요 경혈 자극
        </text>
        <text x="95" y="102" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 교감신경 긴장 완화, 부교감신경 활성화를 통한 신체 이완 및 뇌파 안정
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 290)">
        <rect x="0" y="0" width="860" height="130" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="65" r="28" fill="#e0f2ed" />
        <text x="50" y="73" font-family="${fontFamilies}" font-size="24" text-anchor="middle">💧</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">3. 경혈 약침 &amp; 두개천골 추나요법</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 무균 정제 한약액을 경혈에 주입하여 가슴 답답함, 어지럼, 두통 즉각 완화
        </text>
        <text x="95" y="102" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 경추 정렬 및 뇌척수액 순환을 촉진하여 자율신경계 과부하 해소
        </text>
      </g>

      <!-- Box 4 -->
      <g transform="translate(0, 435)">
        <rect x="0" y="0" width="860" height="130" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="65" r="28" fill="#e0f2ed" />
        <text x="50" y="73" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🧠</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">4. 인지이완 훈련 &amp; 1:1 심층 상담</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 불안과 우울을 유발하는 자동적 사고 패턴 교정 및 스트레스 대처력 증진
        </text>
        <text x="95" y="102" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 일상과 수면에서 즉각 적용할 수 있는 과학적 이완 루틴 체득
        </text>
      </g>
    </g>

    <!-- Bottom summary box -->
    <g transform="translate(55, 800)">
      <rect x="0" y="0" width="860" height="120" rx="16" fill="#eef7f4" stroke="#c2ded3" stroke-width="1.5" />
      <text x="35" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#115e59">
        🌿 해아림 치료의 핵심 가치
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="16" fill="#2d6a59">
        • 낮 동안 졸림이나 인지기능 저하 없이 맑은 정신을 유지하며 일상생활 가능
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="16" fill="#2d6a59">
        • 치료 종료 후에도 뇌 신경계 스스로 안정 상태를 유지하는 회복 탄력성 완성
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (생활 속 힐링 실천 팁 카드 - 약선차 배제, 신체/행동 루틴)
function generateSelfcareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow5" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#071e22" />
      <stop offset="50%" stop-color="#0b3834" />
      <stop offset="100%" stop-color="#051717" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Card Container -->
  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow5)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Top Step Tag -->
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="130" height="36" rx="8" fill="#0d9488" />
      <text x="65" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
      <text x="145" y="25" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">생활 속 뇌신경 밸런스 회복 루틴</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#042f2e" letter-spacing="-1">
      "교감신경을 낮추고 뇌를 쉬게 하는 3가지 실천법"
    </text>
    <text x="55" y="172" font-family="${fontFamilies}" font-size="20" fill="#4a5f57">
      매일 꾸준히 실천하면 자율신경 회복과 수면의 질이 크게 개선됩니다.
    </text>

    <!-- 3 Actionable Tips -->
    <g transform="translate(55, 215)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#0d9488" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">1. 4-7-8 이완 복식호흡 (기상 직후 &amp; 취침 전 5분)</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 4초간 코로 숨을 들이마시고, 7초간 멈춘 후, 8초간 입으로 천천히 내쉽니다.
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 흉식호흡을 복식호흡으로 전환하여 뇌간의 호흡중추와 미주신경을 안정시킵니다.
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [효과] 긴장성 과호흡 방지 및 심장 박동수 안정
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 205)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#2d6a59" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">2. 기상 직후 15분 아침 햇볕 쬐기 &amp; 가벼운 보행</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 아침 햇볕은 행복 호르몬인 [세로토닌] 분비를 촉진하고 뇌 생체시계를 리셋합니다.
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 14~16시간 뒤 수면 호르몬인 [멜라토닌]으로 자연 전환되어 야간 불면증을 해소합니다.
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [효과] 우울감 완화 및 자연스러운 수면-각성 주기 확립
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 410)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#14b8a6" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">3. 취침 90분 전 온수 족욕(40℃) &amp; 디지털 디톡스</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 발을 따뜻하게 하여 혈액을 하체로 순환시키면 심부 체온이 서서히 내려가 수면 유도
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 스마트폰의 블루라이트를 차단하여 뇌 편도체의 야간 각성을 예방합니다.
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [효과] 상열하한(上熱下寒) 교정 및 숙면 환경 조성
        </text>
      </g>
    </g>

    <!-- Bottom summary quote -->
    <g transform="translate(55, 855)">
      <rect x="0" y="0" width="860" height="65" rx="12" fill="#e6f4f0" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e" text-anchor="middle">
        💡 작은 행동 루틴의 반복이 지친 뇌 신경계에 안전하다는 강력한 신호를 보냅니다.
      </text>
    </g>
  </g>
</svg>`;
}

async function renderAndSave(svgContent, fileName) {
  const resvg = new Resvg(svgContent, {
    fitTo: { mode: 'width', value: 1080 }
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
  console.log('Generating 5 cards for Bucheon Neuropsychiatry...');
  await renderAndSave(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderAndSave(generateCauseCard(), '02_point1_cause.jpg');
  await renderAndSave(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderAndSave(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderAndSave(generateSelfcareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
