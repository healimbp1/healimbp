import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const outputDir = 'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-sangok-tmj-headache';
const generalDir = 'c:/Users/PC/Downloads/home/static/blog-images';
const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(generalDir)) {
  fs.mkdirSync(generalDir, { recursive: true });
}

// 1. MAIN THUMBNAIL CARD (1080x1080)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#08201b" />
      <stop offset="50%" stop-color="#113830" />
      <stop offset="100%" stop-color="#061814" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#14b8a6" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">턱관절 통증 ｜ 스트레스 두통 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 50)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        입 벌릴 때 '딱' 소리와 관자놀이 조임 통증이 반복될 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#0c2620" letter-spacing="-1.5">
      부평 산곡동 턱관절 통증 스트레스 두통 한방 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#2d4a42" letter-spacing="-0.5">
      턱-경추-삼차신경 불균형과 만성 두통 심층 회복 로드맵
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2ece7" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0d9488" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          진통제만으로 안 낫는 '턱-경추-삼차신경' 악순환 규명
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          턱관절 장애가 뇌막과 경추 신경을 자극해 유발하는 긴장성 편두통 집중 감별
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          스트레스 과각성과 무의식적 이악물기·저작근 긴장 해소
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          교감신경 과열로 인한 교근·측두근 경결 및 수면 중 이악물기 근본 조절
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          체질 한약 ｜ 턱관절 추나요법 ｜ 경혈 신경약침 통합 치료
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          상열을 내리고 경추-턱관절 정렬을 바로잡는 단계별 1:1 맞춤 한방 솔루션
        </text>
      </g>
    </g>

    <!-- Bottom Footer Inside Card -->
    <g transform="translate(55, 760)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0c2620" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 대표원장 권형근 (한방침구과 전문의)
      </text>
      <text x="430" y="63" font-family="${fontFamilies}" font-size="14" fill="#a7f3d0" text-anchor="middle">
        부평역 7번 출구 도보 1분 ｜ 월·수·금 야간진료 20시 ｜ 1:1 심층 예약제
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. CHAPTER 01: 3 MISTAKES & TRAPS CARD (3대 오해와 함정 카드)
function generateMistakesCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#08201b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#0d9488" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 01</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">턱관절·두통 환자가 빠지는 3대 오해와 함정</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "진통제만 먹으면 턱과 머리 통증이 정말 해결될까요?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    원인을 모른 채 증상만 억제하면 턱관절 마모와 만성 두통이 굳어집니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 235)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">"단순히 턱 뼈나 치아만의 문제다?" (국소적 착각)</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">턱관절은 뇌신경(삼차신경) 및 상부경추(C1-C2)와 긴밀하게 연결되어 있습니다.</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">스트레스로 뇌신경이 과각성되면 측두근이 수축해 편두통과 안면통이 함께 터집니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 턱만 볼 것이 아니라 목뼈 정렬과 자율신경 긴장도를 함께 다스려야 합니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fef3c7" />
      <circle cx="72" cy="75" r="24" fill="#d97706" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309">진통소염제와 근이완제 장기 복용의 함정</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">약으로 감각만 일시 차단하면 턱 디스크 이탈과 경추 불균형은 그대로 방치되어</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">약효가 떨어질 때마다 더 심한 관자놀이 조임과 턱 걸림이 반복됩니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 통증 억제를 넘어 턱관절과 디스크의 생체 역학적 균형을 회복해야 합니다.</text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fee2e2" />
      <circle cx="72" cy="75" r="24" fill="#dc2626" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c">"스트레스 덜 받고 참으면 낫겠지?" (방치의 함정)</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">수면 중 무의식적 이악물기·이갈이는 뇌가 스트레스를 방출하는 생리적 반응입니다.</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">참는다고 낫지 않으며 방치 시 관절염, 만성 이명, 어지럼, 안면비대칭으로 번집니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 교감신경 과열을 식히고 저작근의 긴장을 해소하는 조기 치료가 필수입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 냄비 뚜껑을 누르는 진통제보다 턱을 짓누르는 스트레스 신경 과열을 끄는 것이 핵심입니다.
    </text>
  </g>
</svg>
  `;
}

// 3. CHAPTER 02: 3 DEEP ROOT CAUSES CARD (3대 심층 원인 카드)
function generateDeepCausesCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#08201b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#0d9488" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 02</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">왜 낫지 않고 반복될까? 3대 심층 원인</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "턱관절 통증과 두통은 삼차신경과 경추의 경고 신호입니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    삼차신경핵 과민화 + 상부경추(C1-C2) 비틀림 + 스트레스 교감신경 과열
  </text>

  <!-- 3 Deep Cause Boxes -->
  <g transform="translate(60, 235)">
    <!-- Cause 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">삼차신경핵(Trigeminal Nucleus) 과민화와 연관통</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">턱관절 감각을 지배하는 삼차신경은 상부경추 신경과 뇌간에서 합류합니다.</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">턱관절 염증 신호가 관자놀이, 정수리, 안구 뒤쪽으로 퍼져 만성 편두통을 만듭니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 턱과 뇌신경의 연관통 회로를 안정시켜야 지긋지긋한 두통이 멈춥니다.</text>
    </g>

    <!-- Cause 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">상부경추(C1-C2) 비틀림과 턱관절 중심축 붕괴</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">거북목·일자목으로 1·2번 목뼈가 틀어지면 아래턱(하악골)이 뒤로 밀려나며</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">턱관절 디스크를 짓누르고 입을 벌릴 때 딱딱 소리와 개구 장애를 유발합니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 경추와 턱관절의 3차원 중심축을 동시에 맞추지 않으면 재발합니다.</text>
    </g>

    <!-- Cause 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">스트레스 과각성 &amp; 간기울결(肝氣鬱結)·상열(上熱)</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">만성 긴장으로 교감신경이 폭주하면 저작근(교근·측두근)이 무의식적으로 수축하고,</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">상체로 치솟은 울화(上熱)가 두경부 혈관을 압박해 머리가 터질 듯 아파옵니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 울체된 간기를 풀고 상초의 열을 식혀야 턱의 뻐근함이 근본 치유됩니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 정밀 뇌파 자율신경 검사와 턱관절 역학 평가로 신경계 불균형을 정확히 진단합니다.
    </text>
  </g>
</svg>
  `;
}

// 4. CHAPTER 03: 3-STEP RECOVERY ROADMAP CARD (3단계 회복 로드맵 카드)
function generateRoadmapCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#08201b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#0d9488" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 03</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">해아림 3단계 회복 로드맵 &amp; 한방 치료</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "턱관절 통증 진정부터 두통 재발 방지까지 체계적 회복"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    체질 한약 + 턱관절·경추 추나 + 신경약침 + 두뇌 이완 훈련
  </text>

  <!-- 3 Step Roadmap Boxes -->
  <g transform="translate(60, 235)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">1단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">[급성 진정기] 과열된 삼차신경 진정 &amp; 저작근 염증 완화</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 체질 맞춤 한약: 사역산, 시호소간탕, 천궁다조산 가감 처방</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 억울된 스트레스 열을 내리고 관자놀이·턱 주위 근막 염증과 급성 통증 즉각 진정</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 수면 중 무의식적 이악물기 강도를 줄이고 두통 빈도를 빠르게 낮춥니다.</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">2단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">[구조 복원기] 턱관절·상부경추 추나 &amp; 경혈 신경약침</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 턱관절-상부경추(C1-C2) 균형 교정 추나로 디스크 압박 및 개구장애 해소</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 하관·협거·풍지·견정혈 정제 한약 약침으로 굳은 심부 저작근·경막 긴장 이완</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 입을 벌릴 때의 걸림과 소리를 바로잡고 뒷목·어깨 뻐근함을 시원하게 개통합니다.</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">3단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">[체질 강화기] 자율신경 안정 &amp; 뇌 자생력 완성 (재발 방지)</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 귀비탕, 천왕보심단 가감으로 심포(心包)의 진액을 보하고 신경 피로 회복</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 뇌파 바이오피드백 훈련으로 스트레스 저항력 및 근육 자율 이완력 완성</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 스트레스 상황에서도 턱이 굳지 않는 맑고 통증 없는 일상을 완성합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      🌱 해아림한의원 인천부평점 ｜ 032-508-8575 ｜ 1:1 맞춤 원인 치료
    </text>
  </g>
</svg>
  `;
}

// 5. CHAPTER 04: HOME PROTOCOL CARD (행동 수칙 카드 - 약선차 제외)
function generateHomeProtocolCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#08201b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#0d9488" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 04</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">진료실 밖 환자 &amp; 가족 3대 행동 수칙</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "치료 효과를 극대화하는 일상 속 턱근육 이완 루틴"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    턱관절 압력을 낮추고 뇌신경 긴장을 푸는 물리적 생활 관리 (약선차 배제)
  </text>

  <!-- 3 Protocol Boxes -->
  <g transform="translate(60, 235)">
    <!-- Protocol 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">👅</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">1. 혀 위치 바로잡기 'N(은)' 발음 루틴 &amp; 치아 떼기 습관</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">평상시 윗니·아랫니는 2~3mm 떨어져 있어야 합니다 ('N' 위치에 혀 두기)</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">혀끝을 위 앞니 안쪽 잇몸에 대고 입술은 가볍게 다물어 무의식적 이악물기를 차단합니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">모니터나 스마트폰에 '이 떼기' 스티커를 붙여 수시로 턱 근육에 들어간 힘을 뺍니다.</text>
    </g>

    <!-- Protocol 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">♨️</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">2. 측두근·후두하근 온찜질 &amp; 4-7-8 자율신경 이완 호흡</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">관자놀이와 뒷목 15분 온찜질 ｜ 코로 4초·멈춤 7초·입으로 8초 호흡</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">취침 전 따뜻한 온찜질로 굳은 저작근을 풀고, 이완 호흡으로 교감신경을 다운시킵니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">40도 미온수 족욕을 병행해 머리로 치솟은 열(上熱)을 발끝으로 내려 수면을 돕습니다.</text>
    </g>

    <!-- Protocol 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🤝</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">3. 가족과 보호자의 결정적 대처법 (예민함 지적 금지 &amp; 정서 지지)</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">"턱 좀 가만히 둬라", "왜 이렇게 예민해?"라는 핀잔은 절대 금물</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">턱관절 통증과 두통은 신경계의 과부하로 인한 고통입니다. "긴장이 많이 쌓였구나,</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">편하게 쉬자"는 가족의 따뜻한 공감이 뇌 편도체를 안정시켜 근육을 이완시킵니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      🌱 해아림한의원 인천부평점 ｜ 032-508-8575 ｜ 부평역 7번 출구
    </text>
  </g>
</svg>
  `;
}

async function renderCard(svgString, fileName) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  
  const filePath = path.join(outputDir, fileName);
  fs.writeFileSync(filePath, pngBuffer);
  
  // also copy to generalDir
  const generalFilePath = path.join(generalDir, fileName);
  fs.writeFileSync(generalFilePath, pngBuffer);
  
  console.log(`Saved: ${filePath}`);
}

async function main() {
  console.log('Generating Bupyeong Sangok-dong TMJ & Headache blog card set (Pattern B)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateMistakesCard(), '02_point1_cause.jpg');
  await renderCard(generateDeepCausesCard(), '03_point2_checklist.jpg');
  await renderCard(generateRoadmapCard(), '04_point3_treatment.jpg');
  await renderCard(generateHomeProtocolCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in:', outputDir);
}

main().catch(console.error);
