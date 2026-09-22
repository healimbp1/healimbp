import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-beombak-throat-clearing-tic',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 대표 썸네일)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#062e24" />
      <stop offset="50%" stop-color="#0c4a3b" />
      <stop offset="100%" stop-color="#031c16" />
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 소아 음성틱 · 헛기침 · 비염 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#ecfdf5" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#047857">
        비염약 먹여도 계속되는 '음음', '켁켁' 소리! 단순 감기가 아닙니다
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 범박동 아이 헛기침 · 음음소리 틱 감별치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#059669">
      알레르기 비염 vs 음성 틱장애 감별 · 기저핵 뇌발달 &amp; 1:1 맞춤 한약
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e6f4ef" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🗣️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 발병 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">기저핵 억제 회로의 미성숙</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">전조 감각 충동의 뇌기전</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e6f4ef" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 감별 진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">비염 헛기침 vs 음성 틱장애</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">상황별 핵심 감별 포인트</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e6f4ef" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">뇌 성장 맞춤한약 &amp; 비강청열</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">3단계 뇌자생력 솔루션</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e6f4ef" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 부모 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">소리 지적 금지 &amp; 이완 루틴</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">가정 내 3대 행동 관리</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f0f7f4" stroke="#d5e5df" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (범박동·옥길동에서 자가용/대중교통 15분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">
      "다그치지 마세요. 뇌신경이 편안해지면 헛기침과 음음 소리는 스스로 사라집니다."
    </text>
  </g>
</svg>`;
}

// 2. POINT 01 (원인 분석 카드)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#062e24" />
      <stop offset="100%" stop-color="#0f4034" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#ecfdf5" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#059669" text-anchor="middle">
        POINT 01. 발병 기전
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      헛기침 · 음음 소리가 멈추지 않는 이유
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#059669">
      목의 염증이 아닌 '기저핵(Basal Ganglia)' 뇌신경 억제 조절 미숙
    </text>

    <!-- Explanation Box 1 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="180" rx="20" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
        🧠 뇌의 신호 필터링 브레이크 이상
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155" line-height="1.6">
        사람의 뇌 기저핵은 불필요한 행동이나 소리를 걸러내는 '브레이크' 역할을 합니다.
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        성장기 아이의 뇌 발달 불균형으로 기저핵의 억제력이 약해지면, 목에 느껴지는 답답함을
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">
        참지 못하고 '음음', '켁켁' 소리로 분출하는 음성 틱(Vocal Tic)이 발생합니다.
      </text>
    </g>

    <!-- Explanation Box 2 -->
    <g transform="translate(50, 420)">
      <rect x="0" y="0" width="860" height="230" rx="20" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#047857">
        ⚡ '전조 감각 충동(Premonitory Urge)'의 진실
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#059669" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">목 안의 간질거림·답답함:</tspan> 아이는 목에 무언가 걸린 듯한 찝찝한 불쾌감을 강하게 느낌
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#059669" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">소리를 내야만 해소:</tspan> '음음', '켁켁' 소리를 내야만 잠시 그 불쾌감이 시원하게 풀림
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#059669" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">비염의 방아쇠 역할:</tspan> 비염으로 목 뒤로 콧물이 넘어가면 감각이 예민해져 틱이 유발·악화
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#f0f7f4" stroke="#d5e5df" stroke-width="1" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922" text-anchor="middle">
        "아이가 고의로 장난치거나 버릇이 나빠서 내는 소리가 아닙니다."
      </text>
      <text x="430" y="74" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">
        비강 점막의 열을 내리고 기저핵의 조절 능력을 키워주어야 소리가 멎습니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 소아청소년 뇌신경 틱장애 클리닉
    </text>
  </g>
</svg>`;
}

// 3. POINT 02 (감별 체크리스트 카드)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#062e24" />
      <stop offset="100%" stop-color="#0f4034" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#ecfdf5" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#059669" text-anchor="middle">
        POINT 02. 감별 체크리스트
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      비염 헛기침 vs 음성 틱장애 감별법
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      다음 중 3개 이상 해당된다면 단순 호흡기 질환이 아닌 음성 틱을 의심해야 합니다.
    </text>

    <!-- Checklist Items -->
    <g transform="translate(50, 210)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#ecfdf5" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">1. 이비인후과·소아과 비염약을 2~3주 이상 복용해도 소리가 지속된다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">목이나 코의 염증이 호전되었는데도 헛기침 패턴이 멈추지 않고 반복됨</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 98)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#ecfdf5" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">2. TV·스마트폰 시청 중이거나 피곤할 때 소리의 빈도가 더 잦아진다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">시각적 도파민 자극이나 뇌 피로도가 높아질 때 음음 소리가 급증함</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 196)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#ecfdf5" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">3. "소리 내지 마"라고 지적하면 잠시 참았다가 더 크게 폭발한다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">의식적으로 억제하려 할수록 뇌의 전조 감각 충동이 극대화되어 나타남</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 294)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#ecfdf5" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">4. 눈 깜빡임, 코 찡긋, 고개 털기 등 근육 움직임이 함께 관찰된다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">운동 틱과 음성 틱이 복합적으로 나타나는 틱장애의 전형적인 이행 과정</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 392)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#ecfdf5" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">5. 잠들었을 때는 헛기침이나 음음 소리가 완전히 사라진다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">신경계가 안정되는 수면 중에는 틱 증상이 멈추는 것이 가장 결정적인 차이</text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">
        💡 초기 3~6개월 내에 뇌신경 밸런스를 바로잡아야 만성 틱과 뚜렛으로의 진행을 막습니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (한방 치료 원리 카드)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#062e24" />
      <stop offset="100%" stop-color="#0f4034" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#ecfdf5" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#059669" text-anchor="middle">
        POINT 03. 1:1 맞춤 한방치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      해아림 3단계 뇌자생력 복합 솔루션
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      단순 증상 억제가 아닌, 호흡기 면역과 뇌신경 억제 회로를 동시에 강화
    </text>

    <!-- 3 Treatment Boxes -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          1단계: 비강청열(鼻腔淸熱) &amp; 뇌신경 성장 맞춤 한약
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 비염 후비루 점막 열을 식히는 갈근, 신이, 반하후박탕 배합
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 기저핵 흥분을 안정시키고 신경 조절력을 키우는 억간산, 백복신 1:1 가감
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🎯</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          2단계: 두개천골 교정 &amp; 비강 추나요법
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 경추 정렬 및 두개골 미세 리듬을 교정하여 뇌척수액 순환과 뇌압 안정
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 비강 내 공기 순환로를 확보하여 목과 코의 불쾌한 감각 자극 원천 차단
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          3단계: 무통 스티커 침 &amp; 뉴로피드백 두뇌 훈련
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 통증 없는 자석침·피내침으로 풍지, 영향, 합곡혈의 기혈 순환 촉진
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 스스로 뇌파를 조절하고 충동을 억제하는 자율신경 조절력 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">
        💡 아이의 간과 신장에 부담 없는 순수 안심 규격 한약재만을 사용합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (부모 행동 수칙 카드 - 약선차 제외)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#062e24" />
      <stop offset="100%" stop-color="#0f4034" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#ecfdf5" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#059669" text-anchor="middle">
        POINT 04. 부모 대처 수칙
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      가정에서 꼭 지켜야 할 부모 3대 행동 수칙
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      부모의 차분하고 일관된 태도가 아이의 뇌신경 긴장을 풀어주는 최고의 명약입니다.
    </text>

    <!-- 3 Parenting Tips (Zero Tea) -->
    <g transform="translate(50, 215)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🤫</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 소리를 지적하거나 눈치 주지 말고 모른 척 넘어가기
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • "그 소리 좀 그만해", "목 가다듬지 마" 같은 지적은 긴장도를 높여 틱 악화
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 아이가 소리를 낼 때 무반응으로 대하고, 편안한 대화로 주의를 자연스럽게 전환
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">📵</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 스마트폰·유튜브 도파민 차단 및 신체 놀이 전환
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 빠른 화면 전환과 영상 자극은 뇌신경을 극도로 흥분시켜 음성 틱을 폭발시킴
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 화면을 끄고 자전거 타기, 줄넘기, 산책 등 대근육을 쓰는 야외 활동 유도
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🛁</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 취침 90분 전 따뜻한 족욕과 4-7-8 이완 호흡
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 39~40도의 따뜻한 물에 15분간 발을 담가 상체로 몰린 신경열(상열) 하강
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 잠들기 전 부모와 함께 숨을 깊게 들이쉬고 내쉬며 자율신경을 안정화
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">
        💡 부모가 불안해하지 않고 묵묵히 지지해줄 때 아이의 뇌는 가장 빠르게 회복됩니다.
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
  console.log('Rendering Beombak Throat Clearing Tic Card Images...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1(), '02_point1_cause.jpg');
  await renderCard(generatePoint2(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
