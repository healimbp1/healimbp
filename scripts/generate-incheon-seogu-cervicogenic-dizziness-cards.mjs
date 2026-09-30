import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/incheon-seogu-cervicogenic-dizziness',
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
      <stop offset="0%" stop-color="#0c2620" />
      <stop offset="50%" stop-color="#134e42" />
      <stop offset="100%" stop-color="#061a15" />
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 경추성 어지럼증 &amp; 자율신경 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="600" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f766e">
        이비인후과·뇌 MRI 정상인데 땅이 꺼지고 붕 뜰 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      인천 서구 경추성 어지럼증 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#0d9488">
      상부경추 아탈구 교정 · 추골동맥 혈류 개통 3단계 회복 로드맵
    </text>

    <!-- 3 Key Core Points Grid -->
    <g transform="translate(55, 245)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e6f7f3" />
        <circle cx="67" cy="67" r="26" fill="#0d9488" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          귀 검사에 안 나오는 '경추-고유수용감각 불일치' 규명
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          거북목·일자목으로 인한 상부경추(C1-C2) 비틀림과 전정신경핵 과민 감별
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          단순 신경안정제·전정억제제 의존을 끊는 3단계 근본 치료
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          급성 진정기 ➔ 경추 정렬 및 뇌 혈류 개통 ➔ 뇌 자생력 및 전정보상 완성
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          두개천골 추나 &amp; 뇌혈류 한약 &amp; 후두하근 약침 통합 케어
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          추골동맥 압박을 해소하고 뇌간·소뇌에 맑은 혈류를 공급하는 1:1 맞춤 치료
        </text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 745)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#0c2620" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="430" y="72" font-family="${fontFamilies}" font-size="14" fill="#a7f3d0" text-anchor="middle">
        부평역 7번 출구 북광장 도보 5분 (청라·루원시티 7호선/차량 10~15분) ｜ 월·수·금 야간진료 20시
      </text>
    </g>
  </g>
</svg>`;
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
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">경추성 어지럼증 환자의 3대 오해와 함정</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "귀 검사가 정상이면 정신과/신경성 문제일까요?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    목(경추)의 구조적 문제를 놓치면 원인 모를 어지럼이 만성화됩니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 235)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">"이비인후과 정상이니 마음의 병이다?" (귀만 보는 함정)</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">어지럼의 50% 이상은 귀가 아닌 목과 뇌신경계에서 옵니다. 이석증이 아니라고</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">꾀병이 아니며, 목뼈의 비틀림이 뇌로 왜곡된 균형 신호를 보내는 실질적 질환입니다.</text>
      <text x="135" y="174" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 "마음 편히 먹으라"는 조언은 환자의 고통을 외면하는 오답입니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fef3c7" />
      <circle cx="72" cy="75" r="24" fill="#d97706" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309">"목 뻐근함과 어지럼증은 따로따로?" (경추-전정 연결 무시)</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">목 근육(후두하근)에는 인체에서 가장 밀도 높은 위치 감각 수용기가 있습니다.</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">거북목·일자목으로 경추가 틀어지면 눈과 귀의 균형 신호와 충돌해 부유감이 생깁니다.</text>
      <text x="135" y="174" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 목 통증 치료와 어지럼증 치료는 반드시 하나로 통합되어야 합니다.</text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fee2e2" />
      <circle cx="72" cy="75" r="24" fill="#dc2626" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c">신경안정제·전정억제제 장기 복용의 한계</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#991b1b">약을 복용해 뇌를 일시적으로 잠재우면 단기 울렁거림은 덜하지만,</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#991b1b">뇌 스스로 균형을 맞추는 전정 보상 능력이 굳어져 약을 끊으면 재발합니다.</text>
      <text x="135" y="174" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 억제제가 아닌 경추 구조 교정과 뇌 혈류 개통이 근본 해법입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 냄비 뚜껑을 누르는 약물보다 가스 불(경추 긴장과 뇌혈류 저하)을 끄는 근본 치료가 우선입니다.
    </text>
  </g>
</svg>`;
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
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">왜 귀 검사엔 안 나오고 반복될까? 3대 심층 원인</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "경추성 어지럼증의 뿌리는 상부경추와 추골동맥에 있습니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    감각 통합 신호 왜곡 + 추골동맥 혈류 압박 + 교감신경 과흥분 악순환
  </text>

  <!-- 3 Deep Cause Boxes -->
  <g transform="translate(60, 235)">
    <!-- Cause 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f766e">상부경추(C1-C2) 고유수용감각 신경 신호의 왜곡</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">1·2번 목뼈 주변 후두하근이 굳으면, 목의 위치를 감지하는 센서가 오작동합니다.</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">눈(시각)과 귀(전정기관)는 가만히 있는데 목에서만 움직인다는 거짓 신호를 뇌에 보냅니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 뇌 전정신경핵에서 3대 감각 충돌이 일어나 붕 뜨고 스펀지를 밟는 어지럼 유발!</text>
    </g>

    <!-- Cause 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f766e">추골동맥(Vertebral Artery) 압박과 뇌간·소뇌 혈류 저하</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">경추 횡돌기 구멍을 통과해 뇌간으로 올라가는 추골동맥이 목뼈 비틀림으로 눌립니다.</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">평형을 담당하는 소뇌와 뇌간에 산소와 혈액이 부족해져 멍함(브레인포그)과 어지럼 발생.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 고개를 돌리거나 숙일 때 혈류가 더 막히며 핑 도는 증상이 악화됩니다.</text>
    </g>

    <!-- Cause 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f766e">만성 경추 통증으로 인한 교감신경 과흥분 &amp; 불안 악순환</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">목 주변의 성상신경절과 경추 교감신경총이 지속적인 통증 신호로 과열됩니다.</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">자율신경 불균형(상열하한)이 심해져 가슴 두근거림, 식은땀, 불안 공포로 이어집니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 경추 구조 교정과 함께 자율신경 안정이 동시에 치료되어야 하는 이유입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 정밀 경추 기능 검사와 자율신경 HRV 검사로 뇌신경계 불균형을 정확히 진단합니다.
    </text>
  </g>
</svg>`;
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
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">해아림 3단계 회복 로드맵 &amp; 1:1 맞춤 한방치료</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "경추 구조 교정부터 뇌 혈류 순환까지 체계적으로 회복합니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    두개천골 추나요법 + 뇌순환 맞춤한약 + 경추 심부약침 + 뉴로피드백
  </text>

  <!-- 3 Step Roadmap Boxes -->
  <g transform="translate(60, 235)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">1단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f766e">[구조 교정기] 상부경추(C1-C2) 정렬 &amp; 신경 압박 해소</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 두개천골 추나요법: 1·2번 목뼈와 후두골의 미세 변위를 정밀 교정</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 후두하근 심부 약침: 굳어버린 경추 심부 근육을 풀어 감각 신호 왜곡 차단</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 목의 뻣뻣함과 함께 눈앞이 침침하고 붕 뜨던 증상이 빠르게 완화됩니다.</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">2단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f766e">[기능 복원기] 추골동맥 뇌혈류 개통 &amp; 담음·어혈 청소</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 체질 맞춤 탕약: 반하백출천마탕, 천궁차조산, 사역산 가감 처방</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 백회·풍지 침구 치료: 뇌간·소뇌로 이어지는 혈류 순환을 활성화</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 머리를 짓누르던 두통, 브레인포그(멍함), 메스꺼움을 깨끗이 해소합니다.</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">3단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#0f766e">[자생력 완성기] 전정-경추 반사 강화 &amp; 재발 방지</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 귀비탕·보중익기탕 처방으로 기혈을 채우고 자율신경계 회복 탄력성 강화</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 뉴로피드백 &amp; 전정재활 훈련: 시각-경추-전정 감각의 완전한 재통합</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 장시간 업무나 스트레스 상황에서도 흔들림 없는 맑은 두뇌 상태 완성.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      🌱 해아림한의원 인천부평점 ｜ 032-508-8575 ｜ 1:1 심층 맞춤 진료
    </text>
  </g>
</svg>`;
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
    "경추를 바로 세우고 뇌 감각을 깨우는 일상 루틴"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    후두하근 긴장을 풀고 감각 충돌을 예방하는 물리·행동 요법
  </text>

  <!-- 3 Protocol Boxes -->
  <g transform="translate(60, 235)">
    <!-- Protocol 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🧘</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">1. '친 턱(Chin-tuck)' 경추 견인 &amp; 후두하근 온찜질</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">턱을 목구멍 쪽으로 가볍게 당겨 상부경추를 늘려주는 5초 스트레칭</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">스마트폰 사용 중 30분마다 실시하여 후두하근의 과긴장을 예방합니다. 취침 전</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">뒷목 머리 경계 부위에 10~15분 온찜질로 추골동맥 혈류 통로를 부드럽게 이완합니다.</text>
    </g>

    <!-- Protocol 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">👁️</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">2. 시선 고정 전정 안구 반사(VOR) 적응 운동</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">엄지손가락이나 벽의 글자를 응시하며 고개를 좌우로 천천히 회전하기</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">하루 2~3회 10회씩 실시하여 목의 움직임과 시선의 감각 불일치를 뇌가 스스로</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">재보정하도록 훈련합니다. 고개를 갑작스럽게 휙 돌리는 동작은 피해야 합니다.</text>
    </g>

    <!-- Protocol 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🤝</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">3. 가족과 보호자의 결정적 대처법 (신체적 실체 인정과 지지)</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">"검사도 멀쩡한데 왜 어지럽냐"는 타박은 불안과 근육 긴장을 극대화</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">경추성 어지럼증은 경추와 뇌간 신경계의 실제 감각 충돌로 인한 고통입니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">환자가 편안한 자세로 목의 긴장을 풀 수 있도록 심리적 안정 환경을 만들어주세요.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      🌱 해아림한의원 인천부평점 ｜ 032-508-8575 ｜ 부평역 7번 출구 북광장
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
  console.log('Rendering Incheon Seo-gu Cervicogenic Dizziness Card Images (B-Pattern)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateMistakesCard(), '02_point1_cause.jpg');
  await renderCard(generateDeepCausesCard(), '03_point2_checklist.jpg');
  await renderCard(generateRoadmapCard(), '04_point3_treatment.jpg');
  await renderCard(generateHomeProtocolCard(), '05_point4_selfcare.jpg');
  console.log('All 5 B-pattern cards generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
