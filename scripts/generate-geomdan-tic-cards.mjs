import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/geomdan-child-tic-eyeblink',
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">👀 소아 틱장애 · 눈깜빡임 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#ecfdf5" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#047857">
        안약 넣어도 안 낫는 눈 깜빡임? 결막염이 아닌 뇌신경 틱장애의 진실
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      검단신도시 소아 틱장애 · 안과 눈깜빡임
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#059669">
      안과 오진 종결 · 기저핵 억제 회로 발달 &amp; 1:1 맞춤 한약 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 오답 1</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">"결막염·속눈썹 찌름이다?"</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">기저핵 신경 조절 미성숙</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 오답 2</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">"참으라고 지적하면 낫는다?"</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">음성틱·얼굴틱 확산 위험</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 오답 3</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">"유튜브·게임으로 달랜다?"</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">시각 도파민 과각성 폭주</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 맞춤치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">평간식풍 맞춤한약 &amp; 뇌훈련</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">1:1 근본 뇌자생력 치료</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f0f7f4" stroke="#d5e5df" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (검단신도시에서 인천 1호선 지하철 직결)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">
      "눈의 문제가 아닙니다. 뇌신경 억제력을 키워주면 눈 깜빡임은 스스로 멈춥니다."
    </text>
  </g>
</svg>`;
}

// 2. 오답 1 카드 (02_point1_wrong1.jpg)
function generateWrong1() {
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
      <rect x="0" y="0" width="230" height="40" rx="20" fill="#fee2e2" />
      <text x="115" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 01. 오답 1 파헤치기
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "결막염·속눈썹 찌름이라 안약만 넣는다?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#dc2626">
      ❌ 눈의 염증이 아닌 '기저핵 뇌신경 억제 조절' 미성숙의 진실
    </text>

    <!-- Content Box 1: 오해 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="170" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        ❌ 잘못된 진단과 처치: "안과에서 안약만 몇 달째..."
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        안과에서 알레르기 결막염, 안구건조증, 속눈썹 찔림 진단을 받고 안약을 넣어도
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        아이는 여전히 눈을 세게 질끈 감거나 흰자가 보이도록 눈을 치켜뜨며 깜빡입니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        ➔ 눈 자체의 질환이 아니므로 점안액으로는 근본적인 호전이 불가능합니다.
      </text>
    </g>

    <!-- Content Box 2: 과학적 진실 -->
    <g transform="translate(50, 410)">
      <rect x="0" y="0" width="860" height="235" rx="20" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#047857">
        💡 뇌과학 팩트: 기저핵 억제 필터링 브레이크의 미성숙
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#059669" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">전조 감각 충동(Premonitory Urge):</tspan> 눈 주위가 찝찝하고 뻑뻑해 깜빡여야만 해소됨
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#059669" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">기저핵 브레이크 이상:</tspan> 불필요한 안륜근(눈 주변 근육) 수축 신호를 걸러내지 못함
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#059669" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">결정적 증거:</tspan> 신경계가 이완되는 수면 중에는 눈 깜빡임이 100% 완전히 멈춤
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="95" rx="16" fill="#f0f7f4" stroke="#d5e5df" stroke-width="1" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922" text-anchor="middle">
        "안약에 의존하다 골든타임을 놓치지 마세요."
      </text>
      <text x="430" y="70" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">
        기저핵의 불균형을 바로잡는 조기 뇌신경 치료가 필수적입니다.
      </text>
    </g>

    <text x="480" y="825" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 소아 틱장애 오답노트
    </text>
  </g>
</svg>`;
}

// 3. 오답 2 카드 (03_point2_wrong2.jpg)
function generateWrong2() {
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
      <rect x="0" y="0" width="230" height="40" rx="20" fill="#fee2e2" />
      <text x="115" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 02. 오답 2 파헤치기
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "참으라고 다그치면 고쳐진다?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#dc2626">
      ❌ 지적과 훈육이 부르는 '틱의 하향 전이(코·입·음성)'
    </text>

    <!-- Content Box 1: 훈육의 치명적 함정 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="170" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        ❌ 치명적 실수: "눈 깜빡이지 마! 참아봐!"
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        부모의 지적과 눈치는 아이의 편도체(불안 중추)를 극도로 자극합니다.
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        아이는 억지로 참으려 애쓰지만, 참을수록 뇌의 전조 감각 충동은 풍선처럼 부풀어 오릅니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        ➔ 혼자 있을 때나 긴장이 풀릴 때 2~3배로 폭발하게 됩니다.
      </text>
    </g>

    <!-- Content Box 2: 틱의 악화 과정 -->
    <g transform="translate(50, 410)">
      <rect x="0" y="0" width="860" height="235" rx="20" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#047857">
        💡 틱장애의 전형적인 하향 진행 경로
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#059669" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">1단계 (눈):</tspan> 단순 눈 깜빡임, 눈동자 굴리기, 치켜뜨기
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#059669" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">2단계 (코·입·목):</tspan> 지적받은 후 코 찡긋, 입 벌리기, 고개 털기로 번짐
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#059669" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">3단계 (음성 틱):</tspan> 헛기침, '음음', '켁켁' 소리로 발전하며 만성화
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="95" rx="16" fill="#f0f7f4" stroke="#d5e5df" stroke-width="1" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922" text-anchor="middle">
        "지적하지 말고 완벽히 모른 척해야 합니다."
      </text>
      <text x="430" y="70" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">
        부모의 불안이 사라질 때 아이의 뇌신경 긴장도 풀려납니다.
      </text>
    </g>

    <text x="480" y="825" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 소아 틱장애 오답노트
    </text>
  </g>
</svg>`;
}

// 4. 오답 3 카드 (04_point3_wrong3.jpg)
function generateWrong3() {
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
      <rect x="0" y="0" width="230" height="40" rx="20" fill="#fee2e2" />
      <text x="115" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 03. 오답 3 파헤치기
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "스마트폰·유튜브로 달래면 된다?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#dc2626">
      ❌ 시각적 도파민 과각성과 틱 폭발의 악순환
    </text>

    <!-- Content Box 1: 미디어의 역효과 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="170" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        ❌ 잘못된 대처: "영상 볼 때는 얌전하니 괜찮다?"
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        영상을 볼 때는 뇌가 일시적으로 초집중(과몰입)하여 안 깜빡이는 것처럼 보이지만,
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        빠른 화면 전환과 강력한 블루라이트는 뇌의 기저핵에 과도한 도파민을 쏟아붓습니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        ➔ 스마트폰을 끄는 순간 억눌렸던 눈 깜빡임이 2~3배로 폭발합니다.
      </text>
    </g>

    <!-- Content Box 2: 신경계 과열 -->
    <g transform="translate(50, 410)">
      <rect x="0" y="0" width="860" height="235" rx="20" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#047857">
        💡 미디어 과다 노출이 부르는 3대 악영향
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#059669" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">시신경 과피로:</tspan> 안구 건조와 시각 피로도가 극대화되어 깜빡임 유발
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#059669" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">전두엽 억제력 마비:</tspan> 빠른 자극에 익숙해진 뇌가 스스로 충동을 통제하지 못함
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#059669" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">수면의 질 저하:</tspan> 밤에 멜라토닌 분비가 억제되어 뇌 회복이 중단됨
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="95" rx="16" fill="#f0f7f4" stroke="#d5e5df" stroke-width="1" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922" text-anchor="middle">
        "스크린 타임을 줄이고 야외 신체 놀이로 전환해야 합니다."
      </text>
      <text x="430" y="70" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">
        대근육을 움직일 때 뇌의 신경 에너지가 건강하게 배출됩니다.
      </text>
    </g>

    <text x="480" y="825" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 소아 틱장애 오답노트
    </text>
  </g>
</svg>`;
}

// 5. 맞춤치료 카드 (05_point4_treatment.jpg)
function generateTreatment() {
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
        CHAPTER 04. 오답 종결 맞춤치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      해아림 1:1 기저핵 발달 한방 솔루션
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      인위적 억제제 없이, 뇌 스스로 충동을 조절하는 3단계 자생력 완성
    </text>

    <!-- 3 Treatment Boxes -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          1. 평간식풍(平肝熄風) &amp; 기저핵 안정 맞춤 한약
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 억간산, 시호청간탕, 백복신 등으로 과열된 뇌 열독을 내리고 신경 흥분 완화
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 기저핵과 전두엽의 억제 회로 성장을 도와 눈 깜빡임 충동을 자연 소멸
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🎯</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          2. 두개천골 교정 및 비강 추나요법
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 상경추와 두개골 미세 리듬을 교정하여 뇌척수액 순환과 뇌압 안정
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 안면부와 시신경으로 가는 혈류를 틔워 눈의 답답함과 이물감 해소
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          3. 무통 자석침 &amp; 뉴로피드백 두뇌 훈련
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 아프지 않은 자석침으로 정명, 찬죽, 태양혈을 자극해 안구 긴장 완화
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 스스로 뇌파를 조절하고 충동을 다스리는 자기 통제력 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#047857" text-anchor="middle">
        💡 초기 3~6개월 골든타임 내 치료 시 만성화 없이 깨끗하게 완치됩니다.
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
  console.log('Rendering C-Type Geomdan Tic Card Images (Thumbnail + Wrong1 + Wrong2 + Wrong3 + Treatment)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateWrong1(), '02_point1_wrong1.jpg');
  await renderCard(generateWrong2(), '03_point2_wrong2.jpg');
  await renderCard(generateWrong3(), '04_point3_wrong3.jpg');
  await renderCard(generateTreatment(), '05_point4_treatment.jpg');
  console.log('All 5 C-type cards generated successfully!');
}

run().catch(console.error);
