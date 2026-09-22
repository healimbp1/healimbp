import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/incheon-tic',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (B패턴 메인 썸네일)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2438" />
      <stop offset="50%" stop-color="#123b53" />
      <stop offset="100%" stop-color="#0a1a29" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌱 소아청소년 뇌신경 틱장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#e0f2fe" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
        눈 깜빡임에서 킁킁 소리로 번질 때의 해법
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0c4a6e" letter-spacing="-1.5">
      인천 틱장애 한의원 3단계 회복 로드맵
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      기저핵 미성숙 · 흔한 3대 오해 · 1:1 맞춤 한방 치료
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0369a1">
          버릇이 아닌 '뇌 기저핵의 운동 조절 미성숙'
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          불필요한 움직임을 걸러내는 뇌의 필터 기능이 덜 발달하여 나타나는 신경학적 신호
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0369a1">
          지적과 다그침이 틱을 악화시키는 '풍선 효과'
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          참으라고 압박할수록 뇌 속 긴장 압력이 높아져 음성 틱이나 복합 틱으로 전이 위험
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0369a1">
          뇌 자생력을 깨우는 3단계 맞춤 치료 로드맵
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          기저핵 진정 한약 · 두뇌 뉴로피드백 · 두개천골 추나로 스스로 조절하는 힘 복원
        </text>
      </g>
    </g>

    <!-- Bottom Footer Branding -->
    <g transform="translate(55, 755)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#0f172a" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#38bdf8">
        해아림한의원 인천부평점
      </text>
      <text x="320" y="45" font-family="${fontFamilies}" font-size="16" fill="#94a3b8">
        | 부평역 7번 출구 · 소아청소년 뇌신경 틱장애 1:1 맞춤 치료
      </text>
    </g>
  </g>
</svg>`;
}

// 2. CHAPTER 01 (흔히 겪는 3대 오해와 함정 카드)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2438" />
      <stop offset="50%" stop-color="#123b53" />
      <stop offset="100%" stop-color="#0a1a29" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="38" rx="8" fill="#fee2e2" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 01. 3대 오해와 함정
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      틱장애 부모님들이 흔히 빠지는 3가지 함정
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      잘못된 대처가 오히려 틱을 만성화시키고 악화시킬 수 있습니다
    </text>

    <!-- 3 Mistake Boxes -->
    <g transform="translate(55, 220)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#dc2626" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">함정 1. 지적과 훈육</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          "눈 똑바로 떠라, 소리 내지 마라" 다그침
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#450a0a">
          • 틱은 아이가 고의로 하는 버릇이 아니라 뇌의 불수의적 신호입니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#450a0a">
          • 지적받을수록 불안과 긴장 압력이 높아져 틱이 2배로 폭발합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          → 올바른 대처: 보아도 모른 척하는 '의도적 무시'가 필수입니다.
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#475569" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">함정 2. 무조건 방치</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          "크면 저절로 다 낫겠지" 골든타임 낭비
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 초기 눈 깜빡임이 4주 이상 지속되거나 코·목·어깨로 내려오면 치료 신호입니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 방치할 경우 음성 틱과 뚜렛증후군, ADHD, 강박증으로 번질 수 있습니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 올바른 대처: 발병 초기 뇌 성장 단계에서 조기 개입해야 합니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#0284c7" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">함정 3. 단순 억제</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
          신경 차단제만 의존하다 겪는 반동 틱
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 중추신경을 강제로 누르는 약물은 졸림, 무기력, 집중력 저하 우려가 있습니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 뇌가 스스로 조절하는 '자생력'을 길러주지 않으면 약을 끊을 때 재발합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 올바른 대처: 기저핵의 자생적 필터 기능을 회복시켜야 합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7">
        💡 해아림 핵심: 아이를 탓하지 말고, 뇌신경 발달을 돕는 근본 치료를 시작해야 합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. CHAPTER 02 (왜 안 나았을까? 3대 심층 원인 카드)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2438" />
      <stop offset="50%" stop-color="#123b53" />
      <stop offset="100%" stop-color="#0a1a29" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="38" rx="8" fill="#e0f2fe" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">
        CHAPTER 02. 3대 심층 원인
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      왜 틱장애가 반복되고 번질까? 3대 원인
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      눈에 보이는 증상 이면에 자리 잡은 뇌 신경계의 불균형
    </text>

    <!-- 3 Root Cause Blocks -->
    <g transform="translate(55, 220)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#0284c7" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">1. 기저핵 필터링 저하</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">운동 제어 여과기 기능 미숙</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 뇌 기저핵은 필요한 움직임만 내보내고 불필요한 동작을 걸러내는 정밀 필터입니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 기저핵 발달이 미성숙하면 새어나간 신경 신호가 근육을 흔들어 틱으로 표출됩니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 치료 타깃: 기저핵 신경계의 안정과 운동 조절 성숙 촉진
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#16a34a" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">2. 편도체-전두엽 불균형</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d">정서적 불안과 스트레스 과민</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 새 학기, 시험, 훈육, 낯선 환경 등에서 편도체가 과각성되어 불안이 치솟습니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 전두엽의 억제 조절력이 약해지며 긴장감이 신체 틱 동작으로 폭발합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#15803d">
          → 치료 타깃: 전두엽 억제력 강화 및 뇌파(알파파) 안정화
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fefce8" stroke="#fef08a" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#ca8a04" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">3. 간풍내동·심담허겁</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#a16207">체질적 풍(風)과 열(熱)의 울체</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 한의학에서는 바람이 흔들리듯 근육이 떨리는 것을 간의 풍열(肝風)로 봅니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 심장과 쓸개의 기운이 약해져 사소한 자극에도 쉽게 놀라고 불안해하는 상태입니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#a16207">
          → 치료 타깃: 간의 풍열을 끄고 심담을 보하는 체질 맞춤 탕약
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1">
        💡 뇌 신경계와 체질적 원인을 함께 다스려야 재발 없는 완치가 가능합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. CHAPTER 03 (3단계 회복 로드맵 카드)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2438" />
      <stop offset="50%" stop-color="#123b53" />
      <stop offset="100%" stop-color="#0a1a29" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="38" rx="8" fill="#e0f2fe" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">
        CHAPTER 03. 3단계 로드맵
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      3단계 회복 로드맵 &amp; 1:1 맞춤 한방 치료
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      스스로 뇌 신경을 조절하는 힘을 단계별로 완성합니다
    </text>

    <!-- 3 Timeline Step Boxes -->
    <g transform="translate(55, 220)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#0284c7" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">1단계: 급성 진정기</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">[과열된 기저핵 흥분 진정]</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 뇌간과 기저핵의 과도한 도파민 흥분을 가라앉히는 맞춤 탕약 (억간산, 시호청간탕 가감)
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 안면·목 주변 근육 긴장을 풀어주는 풍지혈, 백회혈 무통 침구 및 맞춤 약침
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 목표: 눈 깜빡임, 고개 꺾임, 킁킁거림 등 틱 증상 빈도 50% 이상 감소
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#16a34a" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">2단계: 기능 복원기</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d">[뇌파 안정 &amp; 신경망 훈련]</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 뇌파를 스스로 안정적인 SMR/알파파로 유지하도록 훈련하는 뉴로피드백 &amp; 감각통합훈련
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 두개골과 척추의 긴장을 풀어 뇌척수액 순환을 정상화하는 두개천골 추나요법(CST)
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#15803d">
          → 목표: 스트레스나 피로 상황에서도 스스로 틱을 조절하는 제어력 복원
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fefce8" stroke="#fef08a" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#ca8a04" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">3단계: 체질 강화기</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#a16207">[재발 방지 &amp; 뇌 자생력 완성]</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 심포와 비위를 보하고 기혈을 채워 뇌 성장을 돕는 귀비탕, 보심건비 체질 한약
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 가정 내 환경 교정 및 정서적 안정감을 위한 1:1 양육 코칭 지도
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#a16207">
          → 목표: 치료 종결 후에도 새 학기나 시험 기간에 재발 없는 안정 상태 유지
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1">
        💡 해아림 3단계 치료는 억제가 아닌 아이 뇌의 자율 조절력을 길러줍니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. CHAPTER 04 (가정 내 3대 실천 수칙 카드)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2438" />
      <stop offset="50%" stop-color="#123b53" />
      <stop offset="100%" stop-color="#0a1a29" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="38" rx="8" fill="#e0f2fe" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">
        CHAPTER 04. 가정 실천 수칙
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      진료실 밖에서 부모님이 지켜야 할 3대 수칙
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      가정의 올바른 양육 환경이 틱장애 치료의 절반을 완성합니다
    </text>

    <!-- 3 Action Blocks -->
    <g transform="translate(55, 220)">
      <!-- Action 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#0284c7" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">수칙 1. 의도적 무시</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">눈길도 주지 말고 모른 척하기</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 아이가 틱 증상을 보일 때 쳐다보거나 멈추라고 지적하지 않는 것이 최고의 지지입니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 틱에 대한 관심과 지적을 거두어야 아이의 뇌 편도체가 불안을 내려놓습니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 실천법: 증상 자체보다 아이가 좋아하는 놀이와 대화로 자연스럽게 전환
        </text>
      </g>

      <!-- Action 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#16a34a" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">수칙 2. 미디어 과자극 차단</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d">스마트폰·게임 도파민 과부하 방지</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#14532d">
          • 빠른 화면 전환과 게임의 자극은 뇌 기저핵을 과흥분시켜 틱을 폭발시킵니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#14532d">
          • 하루 미디어 시간을 제한하고 줄넘기, 가벼운 러닝 등 유산소 신체 놀이로 전환합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
          → 실천법: 취침 1시간 전 스마트폰 전면 금지 및 가족 야외 산책
        </text>
      </g>

      <!-- Action 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fefce8" stroke="#fef08a" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#ca8a04" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">수칙 3. 취침 전 이완 루틴</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#a16207">따뜻한 온수 족욕과 복식호흡</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#713f12">
          • 취침 90분 전 40도 따뜻한 물에 15분간 발을 담그면 상체로 쏠린 열이 순환됩니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#713f12">
          • 부모님과 함께하는 4-7-8 이완 호흡으로 밤사이 깊은 수면을 유도해 뇌를 회복합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ca8a04">
          → 실천법: 규칙적인 수면 리듬 유지와 따뜻한 스킨십 마사지
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1">
        💡 부모님의 따뜻하고 의연한 믿음이 아이의 뇌를 가장 빠르게 치유합니다.
      </text>
    </g>
  </g>
</svg>`;
}

async function renderCards() {
  const cards = [
    { name: '01_naver_main_thumbnail.jpg', svg: generateMainThumbnail() },
    { name: '02_point1_cause.jpg', svg: generatePoint1() },
    { name: '03_point2_checklist.jpg', svg: generatePoint2() },
    { name: '04_point3_treatment.jpg', svg: generatePoint3() },
    { name: '05_point4_selfcare.jpg', svg: generatePoint4() }
  ];

  for (const card of cards) {
    const resvg = new Resvg(card.svg, {
      fitTo: { mode: 'width', value: 1080 }
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    for (const dir of targetDirs) {
      const filePath = path.join(dir, card.name);
      fs.writeFileSync(filePath, pngBuffer);
      console.log(`Saved: ${filePath}`);
    }
  }
}

renderCards().then(() => {
  console.log('All Incheon Tic B-Pattern Cards rendered successfully!');
});
