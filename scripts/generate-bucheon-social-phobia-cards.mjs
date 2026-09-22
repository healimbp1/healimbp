import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-social-phobia',
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 뇌신경 &amp; 자율신경 사회불안장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="580" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f766e">
        사람들 앞 발표 불안 · 시선 공포 · 목소리와 손떨림
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 사회공포증 원인과 1:1 맞춤 한방 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="600" fill="#2d6a59">
      내성적인 성격 탓이 아닌 편도체 과각성과 자율신경 불균형의 문제입니다
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 원인 분석</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">편도체 과민 &amp; 교감신경 폭주</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">타인의 시선을 위협으로 인식</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">발표 공포 · 적면 · 식사 불안</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">7가지 주요 증상 체크리스트</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 맞춤 솔루션</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">사역산 · 귀비탕 · 천왕보심단</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">심비양허 &amp; 간기울결 체질 처방</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2ed" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧘</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 생활 실천</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">4-7-8 이완호흡 &amp; 주의분산</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0d9488">시선 고정 탈피 행동 루틴</text>
      </g>
    </g>

    <!-- Clinic Info Footer Banner -->
    <g transform="translate(55, 530)">
      <rect x="0" y="0" width="860" height="90" rx="16" fill="#f0f7f4" stroke="#c2ded3" stroke-width="1.5" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#115e59">
        🏥 해아림한의원 인천부평점 · 부평역 7번 출구 (도보 5분)
      </text>
      <text x="35" y="66" font-family="${fontFamilies}" font-size="15" fill="#2d6a59">
        월·수·금 20시 야간진료 | 편도체 안정 1:1 맞춤 한방 치료 | 032-719-3472
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
      <text x="145" y="25" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">사회공포증(사회불안장애)은 왜 생길까요?</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#042f2e" letter-spacing="-1">
      "내성적이라서가 아닙니다. 뇌 편도체의 과잉 경보입니다"
    </text>
    <text x="55" y="172" font-family="${fontFamilies}" font-size="20" fill="#4a5f57">
      시선이나 발표 상황을 생명에 위협이 되는 위급 상황으로 착각해 자율신경이 폭주합니다.
    </text>

    <!-- 3 Mechanism Cards -->
    <g transform="translate(55, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#0d9488" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">1. 뇌 편도체(Amygdala)의 비상 사이렌 오작동</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155" line-height="1.6">
          • 사람들의 평범한 눈빛과 시선을 '맹수의 공격'과 같은 위험 신호로 오인식합니다.
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 이성을 담당하는 전두엽이 감정 브레이크를 제어하지 못해 극도의 공포가 유발됩니다.
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [기전] 공포 조절 회로의 역치 저하 및 조건반사적 불안 증폭
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 205)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#2d6a59" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">2. 교감신경의 급격한 항진과 신체화 증상</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 아드레날린이 분비되면서 심장이 터질 듯 뛰고 혈압이 급격히 상승합니다.
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 말초 혈관 수축으로 손발 떨림, 성대 근육 긴장으로 목소리 떨림, 얼굴 붉어짐(적면) 발생
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [기전] 자율신경계 교감-부교감 불균형에 의한 투쟁-도피 반응
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 410)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#14b8a6" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">3. 한의학적 병리 : 심담허겁(心膽虛怯) &amp; 간기울결(肝氣鬱結)</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 심장과 담의 기운이 허해 작은 자극에도 쉽게 놀라고 위축되는 체질적 소인
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 억압된 스트레스로 기운이 뭉쳐 상체로 열이 치솟고 가슴이 답답해지는 상열하한 상태
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [치료 핵심] 심장 기운을 보하고(안심) 막힌 기혈을 소통(소간해울)
        </text>
      </g>
    </g>

    <!-- Bottom summary quote -->
    <g transform="translate(55, 855)">
      <rect x="0" y="0" width="860" height="65" rx="12" fill="#e6f4f0" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e" text-anchor="middle">
        💡 사회공포증은 '의지력'으로 참는 것이 아니라, 뇌 신경계의 과민성을 치료해야 합니다.
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
      <text x="145" y="25" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">사회공포증 자가진단 체크리스트</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#042f2e" letter-spacing="-1">
      "나도 혹시 사회불안장애일까? 7가지 문항 체크"
    </text>
    <text x="55" y="172" font-family="${fontFamilies}" font-size="20" fill="#4a5f57">
      아래 항목 중 3개 이상 해당되고 6개월 이상 지속된다면 전문 상담이 필요합니다.
    </text>

    <!-- Checklist 7 items -->
    <g transform="translate(55, 210)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">1. 사람들 앞에서 발표하거나 주목받을 때 목소리나 손이 심하게 떨린다.</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 80)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">2. 낯선 사람과 눈을 마주치는 것이 두렵고, 시선을 어디에 둘지 몰라 불안하다.</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 160)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">3. 대화 중 얼굴이 붉어지거나(적면공포) 땀이 비 오듯 흘러 당황스럽다.</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 240)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">4. 타인이 지켜보는 식사 자리나 서명할 때 손이 떨려 회피하게 된다.</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 320)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">5. 모임이나 약속 며칠 전부터 미리 불안해 잠을 설치는 예기불안이 심하다.</text>
      </g>

      <!-- Item 6 -->
      <g transform="translate(0, 400)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">6. "남들이 나를 무능하거나 이상하게 볼 것"이라는 두려움에 사로잡힌다.</text>
      </g>

      <!-- Item 7 -->
      <g transform="translate(0, 480)">
        <rect x="0" y="0" width="860" height="68" rx="12" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="35" cy="34" r="16" fill="#e0f2ed" />
        <text x="35" y="41" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488" text-anchor="middle">✓</text>
        <text x="68" y="41" font-family="${fontFamilies}" font-size="18" fill="#1e293b">7. 불안 때문에 사회 활동, 취업 면접, 승진 시험 등을 포기하거나 회피한다.</text>
      </g>
    </g>

    <!-- Diagnosis Criteria Box -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">
        ⚠️ 판정 기준 및 조기 진단의 중요성
      </text>
      <text x="35" y="70" font-family="${fontFamilies}" font-size="16" fill="#7f1d1d">
        • 1~2개 : 가벼운 상황성 긴장 (생활 관리 및 이완 훈련으로 개선 가능)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c">
        • 3개 이상 : 사회공포증 의심 단계 (뇌 편도체 안정 및 1:1 맞춤 한방 치료 권장)
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
      <text x="145" y="25" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">해아림한의원 1:1 맞춤 한방 치료</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#042f2e" letter-spacing="-1">
      "자율신경 밸런스를 회복하고 뇌 편도체를 안정시킵니다"
    </text>
    <text x="55" y="172" font-family="${fontFamilies}" font-size="20" fill="#4a5f57">
      약물 의존 없이 스스로 긴장을 조절할 수 있는 뇌 신경계의 자생력을 기릅니다.
    </text>

    <!-- 4 Treatment Step Cards -->
    <g transform="translate(55, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="130" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="65" r="28" fill="#e0f2ed" />
        <text x="50" y="73" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🌿</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">1. 체질별 맞춤 한약 처방 (사역산 · 귀비탕 · 천왕보심단)</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 사역산/시호가용골모려탕 : 간기울결(긴장, 떨림, 상열감) 해소 및 중추신경 안정
        </text>
        <text x="95" y="102" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 귀비탕/천왕보심단 : 심비양허(가슴 두근거림, 만성 피로, 예기불안) 보강
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 145)">
        <rect x="0" y="0" width="860" height="130" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="65" r="28" fill="#e0f2ed" />
        <text x="50" y="73" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⚡</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">2. 뇌신경 조절 침구 및 전침 치료</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 백회(百會), 신문(神門), 내관(內關), 풍지(風池) 등 핵심 경혈 자극
        </text>
        <text x="95" y="102" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 교감신경 흥분을 진정시키고 부교감신경을 활성화하여 전신 근육 긴장 완화
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 290)">
        <rect x="0" y="0" width="860" height="130" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="65" r="28" fill="#e0f2ed" />
        <text x="50" y="73" font-family="${fontFamilies}" font-size="24" text-anchor="middle">💧</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">3. 경혈 약침 치료 (천연 생약 정제 성분)</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 심포경과 간경의 주요 경혈에 무균 정제 한약액을 직접 주입
        </text>
        <text x="95" y="102" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 가슴 답답함, 목 이물감(매핵기), 뒷목과 어깨 결림을 신속하게 경감
        </text>
      </g>

      <!-- Box 4 -->
      <g transform="translate(0, 435)">
        <rect x="0" y="0" width="860" height="130" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="65" r="28" fill="#e0f2ed" />
        <text x="50" y="73" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🧠</text>
        <text x="95" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">4. 인지행동 및 이완 훈련 (호흡 &amp; 주의분산)</text>
        <text x="95" y="75" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 왜곡된 부정적 신념 교정 및 자기초점적 주의(Self-focused attention) 전환
        </text>
        <text x="95" y="102" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 실전 발표 및 대인 관계 상황에서 즉각 활용 가능한 신체 이완 프로토콜
        </text>
      </g>
    </g>

    <!-- Bottom summary box -->
    <g transform="translate(55, 800)">
      <rect x="0" y="0" width="860" height="120" rx="16" fill="#eef7f4" stroke="#c2ded3" stroke-width="1.5" />
      <text x="35" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#115e59">
        🌿 해아림 치료의 차별점
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="16" fill="#2d6a59">
        • 졸림이나 집중력 저하 없는 맑은 정신 유지 | 점진적 양약 감량(Tapering) 병행 가능
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="16" fill="#2d6a59">
        • 치료 종료 후에도 불안 조절 능력이 스스로 유지되는 뇌 신경망 강화
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
      <text x="145" y="25" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">생활 속 실천 가능한 이완 &amp; 행동 루틴</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#042f2e" letter-spacing="-1">
      "긴장되는 순간, 즉각 교감신경을 진정시키는 3가지 루틴"
    </text>
    <text x="55" y="172" font-family="${fontFamilies}" font-size="20" fill="#4a5f57">
      일상과 발표 직전에 손쉽게 따라 할 수 있는 과학적 신체 이완 요법입니다.
    </text>

    <!-- 3 Actionable Tips -->
    <g transform="translate(55, 215)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#0d9488" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">1. 4-7-8 이완 복식 호흡법 (발표 3분 전 실천)</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 4초간 코로 깊게 숨을 들이마시고, 7초간 숨을 멈춘 뒤, 8초간 입으로 천천히 내쉽니다.
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 미주신경(부교감신경)을 즉각 자극해 치솟은 심박수와 호흡을 안정시켜 줍니다.
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [효과] 과호흡 방지 및 가슴 두근거림 급속 진정
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 205)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#2d6a59" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">2. 스팟 포커스 분산 훈련 (주의 집중 외부 전환)</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • "내 목소리가 떨리나?" 같은 내면 신체 감각 대신, 벽시계·빔프로젝터 등 외부 사물에 집중
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 청중 전체의 눈 대신 '미간 사이'나 '뒤쪽 벽면'을 바라보며 시선 부담 완화
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [효과] 자기초점적 주의 함정 탈출 및 시선 공포 완화
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 410)">
        <rect x="0" y="0" width="860" height="185" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="0" y="0" width="12" height="185" rx="6" fill="#14b8a6" />
        <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">3. 점진적 근육이완법 (PMR) &amp; 발바닥 그라운딩</text>
        <text x="40" y="80" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 양 주먹과 어깨를 5초간 꽉 쥐었다가 한 번에 '툭' 풀며 이완감을 뇌에 각인
        </text>
        <text x="40" y="112" font-family="${fontFamilies}" font-size="17" fill="#334155">
          • 서 있거나 앉아 있을 때 발바닥 전체가 바닥에 닿는 감각에 집중해 신체 지지감 확보
        </text>
        <text x="40" y="145" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0d9488">
          ➔ [효과] 손떨림, 성대 경직, 다리 후들거림 완화
        </text>
      </g>
    </g>

    <!-- Bottom summary quote -->
    <g transform="translate(55, 855)">
      <rect x="0" y="0" width="860" height="65" rx="12" fill="#e6f4f0" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f766e" text-anchor="middle">
        💡 하루 10분 꾸준한 이완 훈련은 뇌의 공포 반응 회로를 재구성하는 데 큰 도움이 됩니다.
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
  console.log('Generating 5 cards for Bucheon Social Phobia...');
  await renderAndSave(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderAndSave(generateCauseCard(), '02_point1_cause.jpg');
  await renderAndSave(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderAndSave(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderAndSave(generateSelfcareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
