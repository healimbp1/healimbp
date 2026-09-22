import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const outputDir = 'c:/Users/PC/Downloads/home/static/blog-images/incheon-dizziness';
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
    <rect x="-220" y="0" width="440" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">어지럼증 &amp; 자율신경·신경정신 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 50)">
      <rect x="0" y="0" width="530" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        MRI·이비인후과 정상인데 땅이 울렁거릴 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0c2620" letter-spacing="-1.5">
      인천 어지럼증 신경정신과 한방 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#2d4a42" letter-spacing="-0.5">
      신경성 어지럼·PPPD·자율신경실조증 심층 회복 로드맵
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
          귀·뇌 검사상 안 나오는 '심인성·경추성 어지럼' 규명
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          공황·불안·스트레스와 상부경추 비틀림으로 인한 전정신경핵 과민 집중 감별
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          단순 신경안정제 의존을 끊는 3단계 근본 회복 로드맵
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          급성 진정기 → 경추 정렬 및 뇌 혈류 개통 → 뇌 자생력 및 전정보상 강화
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          체질 한약 &amp; 두개천골 추나 &amp; 자율신경 약침 통합 케어
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          과열된 교감신경을 진정시키고 뇌간 혈류를 맑게 뚫어주는 1:1 맞춤 치료
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
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">어지럼증 환자가 빠지는 3대 오해와 함정</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "신경 안정제만 먹으면 정말 완치될까요?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    원인을 모른 채 증상만 억제하면 만성화와 반동 불안이 반복됩니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 235)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">"검사에 안 나오니 마음이 약해서 그렇다?" (의지의 함정)</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">MRI·이비인후과가 정상이라고 꾀병이 아닙니다. 뇌 신경계의 전정신경핵과</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">자율신경계가 극도로 과열되어 신체화 증상으로 폭발한 실제 질환입니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 "마음 편히 먹어라"는 훈계는 죄책감과 2차 불안만 가중시킵니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fef3c7" />
      <circle cx="72" cy="75" r="24" fill="#d97706" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309">전정억제제(어지럼약) 장기 복용의 함정</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">어지럼약을 오래 먹으면 뇌가 스스로 균형을 맞추는 '전정 보상 작용'을</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">차단하여, 약을 끊었을 때 더 심한 울렁거림과 만성 멍함을 겪게 됩니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 전정계 스스로 적응하고 회복할 수 있는 뇌 자생력을 깨워야 합니다.</text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fee2e2" />
      <circle cx="72" cy="75" r="24" fill="#dc2626" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c">신경안정제(항불안제) 의존과 반동 불안</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">신경정신과 약물로 뇌를 일시 마비시키면 단기 불안은 가라앉지만,</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">내성이 생겨 용량이 늘어나고 약효가 떨어질 때 극심한 어지럼이 재발합니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 자율신경계 항상성을 스스로 복원하는 한방 치료가 필요한 이유입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 냄비 뚜껑을 누르는 약물보다 가스 불(자율신경 과열)을 끄는 근본 치료가 우선입니다.
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

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "어지럼증의 진짜 뿌리는 뇌간과 자율신경에 있습니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    감각 통합 오류(PPPD) + 상부경추 혈류 장애 + 자율신경계 시소 붕괴
  </text>

  <!-- 3 Deep Cause Boxes -->
  <g transform="translate(60, 235)">
    <!-- Cause 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">만성 지속성 체위-지각 어지럼 (PPPD) 과민화</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">과거 이석증이나 전정신경염을 앓은 뒤, 뇌 신경계가 불안·공포와 결합하여</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">전정보상 회로가 굳어버린 상태입니다. 마트·엘리베이터·복잡한 곳에서 악화됩니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 전정신경핵의 시각-체성감각 불일치를 재학습시켜 주어야 합니다.</text>
    </g>

    <!-- Cause 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">상부경추(C1-C2) 비틀림과 추골동맥 뇌혈류 저하</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">스마트폰·거북목으로 1·2번 목뼈가 틀어지면 뇌로 올라가는 혈관(추골동맥)이 눌려</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">뇌간과 소뇌에 산소 공급이 부족해지며 뒷목 뻐근함과 브레인포그가 발생합니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 목뼈 정렬과 경막 긴장 완화가 동반되지 않으면 재발을 막을 수 없습니다.</text>
    </g>

    <!-- Cause 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">자율신경 실조증 &amp; 상열하한(上熱下寒)·담음(痰飮)</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">만성 스트레스로 교감신경이 폭주하면 머리는 뜨겁고 손발은 차가워지며(상열하한),</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">위장 노폐물(담음)이 상초를 교란해 메스꺼움, 가슴 두근거림, 식은땀을 유발합니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 심포(心包)와 간울(肝鬱)의 화(火)를 내리고 담음을 청소해야 합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 정밀 뇌파 검사와 자율신경 HRV 검사로 신경계 불균형을 수치로 확인합니다.
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

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "증상 진정부터 재발 방지까지 체계적으로 회복합니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    체질 한약 + 두개천골 추나 + 자율신경 약침 + 뇌파 두뇌훈련
  </text>

  <!-- 3 Step Roadmap Boxes -->
  <g transform="translate(60, 235)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">1단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">[급성 진정기] 과열된 뇌신경 진정 &amp; 담음·화열 제거</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 체질 맞춤 한약: 반하백출천마탕, 영계출감탕, 시호가용골모려탕 가감 처방</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 위장 노폐물을 배출하고 뇌간 울혈을 식혀 극심한 울렁거림과 불안 즉각 완화</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 양약(신경안정제)의 의존도를 낮추고 수면의 질을 먼저 개선합니다.</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">2단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">[기능 복원기] 상부경추 정렬 추나 &amp; 자율신경 약침</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 상부경추(C1-C2) 및 턱관절 교정으로 추골동맥 뇌혈류 통로 완전 개통</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 풍지·백회·신문혈 정제 한약 약침으로 후두하근 이완 및 교감신경 다운시프트</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 머리의 멍함(브레인포그)과 스펀지를 걷는 듯한 부유감을 걷어냅니다.</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">3단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">[체질 강화기] 뇌 자생력 완성 &amp; 전정보상 재발 방지</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 보중익기탕, 자음건비탕 가감으로 기혈 보강 및 심신 회복 탄력성 완성</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 시각-전정 재활 감각통합 훈련 및 뇌파 바이오피드백으로 뇌 기능 자립</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 복잡한 마트, 대중교통, 스트레스 상황에서도 흔들리지 않는 뇌 완성.</text>
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

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "치료와 함께 실천하는 일상 속 뇌신경 리셋 루틴"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    전정 감각을 안정시키고 자율신경을 다스리는 물리적 생활 관리 (약선차 배제)
  </text>

  <!-- 3 Protocol Boxes -->
  <g transform="translate(60, 235)">
    <!-- Protocol 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌬️</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">1. 4-7-8 자율신경 이완 호흡 &amp; 온수 족욕 그라운딩</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">코로 4초 들이마시고 ｜ 7초 숨을 멈추고 ｜ 입으로 8초 천천히 내뱉기</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">어지럼과 공포감이 치솟을 때 즉시 교감신경을 다운시킵니다. 취침 전 40도 미온수</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">15분 족욕으로 머리로 쏠린 화열을 발끝으로 내려주는 상열하한 해소가 필수입니다.</text>
    </g>

    <!-- Protocol 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">👁️</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">2. 시선 고정 전정재활 운동 &amp; 3단계 기립 습관</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">벽의 한 점(글자)을 응시한 채 고개를 좌우·상하로 천천히 10회 흔들기</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">시각-전정 반사를 훈련해 공간 지각력을 회복시키고, 일어날 때는 '누움→앉아서</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">10초 머무름→기립'의 3단계를 지켜 기립성 뇌혈류 저하를 예방합니다.</text>
    </g>

    <!-- Protocol 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🤝</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">3. 가족과 보호자의 결정적 대처법 (비난 금지 &amp; 공감 지지)</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f766e">"검사도 정상인데 왜 그래?", "마음 굳게 먹어"라는 말은 절대 금물</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">환자의 어지럼 공포는 생리적인 실제 고통입니다. "몸이 많이 지쳤구나, 천천히</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">쉬어도 괜찮아"라는 정서적 안전기지가 뇌의 편도체 안정을 유도합니다.</text>
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
  console.log('Generating Incheon Dizziness blog card set (Pattern B)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateMistakesCard(), '02_point1_cause.jpg');
  await renderCard(generateDeepCausesCard(), '03_point2_checklist.jpg');
  await renderCard(generateRoadmapCard(), '04_point3_treatment.jpg');
  await renderCard(generateHomeProtocolCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in:', outputDir);
}

main().catch(console.error);
