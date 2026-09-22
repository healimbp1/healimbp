import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bugae-child-tic-relapse',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (B패턴 메인 썸네일 요약 카드)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="50%" stop-color="#065f46" />
      <stop offset="100%" stop-color="#022c22" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#34d399" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌱 소아청소년 뇌신경 · 새학기 틱장애 재발 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="640" height="40" rx="8" fill="#ecfdf5" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#047857">
        방학 땐 괜찮다가 새학기 시작 후 다시 눈깜빡임·음음소리? 뇌 성장 솔루션
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부개동 초등학생 새학기 틱장애 재발
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#059669">
      기저핵 필터 기능 성숙 · 평간식풍 한약 3단계 회복 로드맵
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">⚠️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 3대 오해</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">버릇·의지 착각과 지적의 독</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">참을수록 심해지는 풍선효과</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">기저핵 억제 필터 미성숙</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">새학기 긴장과 간화(肝火) 울체</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">억간산 맞춤한약 &amp; 뇌파훈련</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">3단계 두뇌 성장 로드맵</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 행동 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">모른 척하기 &amp; 미디어 차단</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">가정 내 3대 치유 환경</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (부개동에서 지하철 1정거장 / 자가용 5~10분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">
      "틱은 아이의 잘못이 아닙니다. 뇌 기저핵의 스스로 제어하는 힘을 길러주어야 합니다."
    </text>
  </g>
</svg>`;
}

// 2. POINT 01 (CHAPTER 01: 3대 오해와 함정 카드)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#022c22" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="280" height="40" rx="20" fill="#ecfdf5" />
      <text x="140" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#059669" text-anchor="middle">
        CHAPTER 01. 3대 오해와 함정
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      초등학생 틱장애 부모님이 빠지는 3대 함정
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669">
      아이의 뇌를 더 긴장하게 만드는 잘못된 대처의 진실
    </text>

    <!-- 3 Misconception Boxes -->
    <g transform="translate(50, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fee2e2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">❌</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 오해: "나쁜 버릇이니까 따끔하게 혼내면 멈춘다?"
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 진실: 틱은 딸꾹질과 같은 불수의적 운동 신경 증상입니다.
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 지적하고 혼낼수록 불안감이 극대화되어 '풍선 효과'처럼 증상이 폭발합니다.
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fee2e2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚠️</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 오해: "방학 때 쉬면 저절로 나으니 그냥 두면 된다?"
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 진실: 스트레스가 줄어 잠시 숨어있을 뿐, 뇌 신경 기능은 미성숙 상태입니다.
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 새학기 환경 변화나 시험, 교우 관계 스트레스가 오면 더 심하게 재발합니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#ecfdf5" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💡</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 오해: "눈만 깜빡거리니 안과나 이비인후과 약만 먹이면 된다?"
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 진실: 결막염이나 비염 치료 후에도 지속된다면 뇌 신경학적 틱장애입니다.
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 초기에 뇌 기저핵의 흥분을 가라앉히지 않으면 음성 틱으로 전이됩니다.
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">
        💡 아이를 다그치지 않고 뇌 신경계의 안정적 성장을 도와주는 것이 근본 치료의 첫걸음입니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 소아청소년 틱장애 클리닉
    </text>
  </g>
</svg>`;
}

// 3. POINT 02 (CHAPTER 02: 왜 안 나았을까? 3대 심층 원인 카드 - 3박스 해설)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#022c22" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="280" height="40" rx="20" fill="#ecfdf5" />
      <text x="140" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#059669" text-anchor="middle">
        CHAPTER 02. 3대 심층 원인
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      새학기 틱장애가 재발하는 3대 심층 병리
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      환경 변화와 뇌신경계 발달 불균형이 만들어내는 생리학적 기전
    </text>

    <!-- 3 Root Cause Boxes -->
    <g transform="translate(50, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#ecfdf5" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🧠</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 기저핵(Basal Ganglia) 억제 필터 미성숙
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 불필요한 근육 움직임과 소리를 걸러내는 뇌의 '거름망' 기능이 덜 발달
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 전두엽과 기저핵 사이의 신호 제어 불균형으로 의지와 무관하게 신호 유출
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#ecfdf5" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🔥</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 새학기 적응 스트레스와 간화(肝火)·간풍(肝風) 울체
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 새로운 반, 담임 선생님, 친구 관계, 학업 부담으로 인한 정서적 압박감
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 스트레스로 간기(肝氣)가 울결되고 화(火)가 치솟아 풍(風)이 얼굴과 목으로 발현
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#ecfdf5" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚡</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 편도체 과민성과 전각감각충동(Premonitory Urge)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 눈이 뻑뻑하거나 목구멍이 간질거리는 찝찝한 감각 충동을 뇌가 참지 못함
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 불안과 흥분이 겹치면 감각 민감도가 3~4배 증가하여 틱 동작이 연쇄적으로 발생
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">
        💡 3대 심층 원인을 다스려 기저핵의 스스로 제어하는 능력을 키워주어야 재발을 끊습니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 소아청소년 틱장애 클리닉
    </text>
  </g>
</svg>`;
}

// 4. POINT 03 (CHAPTER 03: 3단계 회복 로드맵 카드)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#022c22" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="300" height="40" rx="20" fill="#ecfdf5" />
      <text x="150" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#059669" text-anchor="middle">
        CHAPTER 03. 3단계 회복 로드맵
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      기저핵 안정 &amp; 재발 방지 3단계 맞춤 치료
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      아이의 체질과 두뇌 발달 속도에 맞춘 해아림 1:1 한방 통합 솔루션
    </text>

    <!-- 3 Roadmap Steps -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#ecfdf5" />
        <text x="70" y="60" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">STEP 01</text>
        <text x="70" y="85" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669" text-anchor="middle">진정기</text>
        
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1단계: 평간식풍(平肝熄風) 체질 한약 &amp; 급성 틱 억제
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 억간산·시호가용골모려탕·온담탕: 간열(肝熱)을 식히고 심장 긴장 해소
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 눈깜빡임, 고개 흔들기, 헛기침 등 급격한 운동·음성 틱 증상 신속 완화
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#ecfdf5" />
        <text x="70" y="60" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">STEP 02</text>
        <text x="70" y="85" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669" text-anchor="middle">강화기</text>
        
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2단계: 뇌파 뉴로피드백 &amp; 감각통합 생기능조절 훈련
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 전두엽-기저핵 간 억제성 신경회로를 강화하여 감각 충동 스스로 제어
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 무통 소아 침구 및 자율신경 약침으로 두경부 혈류 순환 촉진
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#ecfdf5" />
        <text x="70" y="60" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">STEP 03</text>
        <text x="70" y="85" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669" text-anchor="middle">안정기</text>
        
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3단계: 두뇌 성장 완성 &amp; 새학기 환경 재발 방지
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 정서적 회복 탄력성을 높여 학업이나 시험 스트레스 상황에서도 안정 유지
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 성인기 틱이나 만성 뚜렛으로의 악화를 원천 차단하는 완전 종결
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">
        💡 3단계 체계적 관리는 아이의 자존감을 지키며 틱을 건강하게 졸업하게 합니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 소아청소년 틱장애 클리닉
    </text>
  </g>
</svg>`;
}

// 5. POINT 04 (CHAPTER 04: 환자·가족 3대 행동 수칙 카드)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#022c22" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="300" height="40" rx="20" fill="#ecfdf5" />
      <text x="150" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#059669" text-anchor="middle">
        CHAPTER 04. 부모님 행동 수칙
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      틱장애 아이를 위한 가정 내 3대 치유 수칙
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669">
      아이의 두뇌 긴장을 풀어주는 실전 환경 관리 (약선차 제외)
    </text>

    <!-- 3 Action Rules -->
    <g transform="translate(50, 215)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#ecfdf5" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🙈</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 틱 증상을 모른 척 넘어가기 (지적 및 눈치 금지)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • "눈 깜빡이지 마", "소리 내지 마"라는 지적은 아이에게 극심한 불안 유발
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 못 본 척 편안하게 대화하고, 아이가 좋아하는 놀이로 자연스럽게 주의 분산
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#ecfdf5" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">📵</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 스마트폰·게임 스크린타임 차단 (시각 뇌 과흥분 억제)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 빠른 화면 전환과 강한 자극은 도파민을 과다 분비시켜 틱을 즉각 악화
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 취침 2시간 전 전자기기 사용을 금하고 가벼운 야외 산책이나 보드게임 권장
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#ecfdf5" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">❤️</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 4-7-8 이완 호흡 &amp; 결과보다 과정 칭찬하기
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 잠들기 전 부모와 함께 4초 흡기-7초 멈춤-8초 호기 복식호흡으로 부교감 활성
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 새학기 성적이나 숙제 압박 대신 아이의 노력에 아낌없는 지지와 애정 표현
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">
        💡 부모님의 따뜻한 지지와 한방 치료가 함께할 때 아이의 틱은 완전히 멈춥니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 소아청소년 틱장애 클리닉
    </text>
  </g>
</svg>`;
}

async function renderCard(svgStr, filename) {
  const resvg = new Resvg(svgStr, {
    fitTo: {
      mode: 'width',
      value: 1080
    }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  for (const dir of targetDirs) {
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, pngBuffer);
    console.log(`Saved: ${filePath}`);
  }
}

async function main() {
  console.log('Rendering Bugae Child Tic Relapse Card Images (B-Pattern)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1(), '02_point1_cause.jpg');
  await renderCard(generatePoint2(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4(), '05_point4_selfcare.jpg');
  console.log('All 5 B-pattern cards generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
