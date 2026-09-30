import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/siheung-sincheon-hwabyeong',
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
      <stop offset="0%" stop-color="#2a0815" />
      <stop offset="50%" stop-color="#4c1224" />
      <stop offset="100%" stop-color="#19040c" />
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🔥 화병 · 가슴답답 · 신경정신 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#fff1f2" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#be123c">
        내과·심장검사 정상인데 가슴에 돌 얹은 듯 숨 막힐 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      시흥 신천역 화병 · 가슴 명치 답답함 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#e11d48">
      억압된 울화(鬱火) 소통 · 자율신경 상열하한 3단계 회복 로드맵
    </text>

    <!-- 3 Key Core Points Grid -->
    <g transform="translate(55, 245)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#fff5f5" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ffe4e6" />
        <circle cx="67" cy="67" r="26" fill="#e11d48" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          내과 검사에 안 나오는 '간기울결 &amp; 전중혈 기체' 규명
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          위내시경·심전도 정상인 가슴 답답함, 명치 통증, 잦은 한숨, 열감의 근본 원인
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#fff5f5" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          단순 신경안정제·소화제 의존을 끊는 3단계 근본 회복
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          급성 청열기 ➔ 기혈 소통 및 흉곽 이완 ➔ 심신 강화 및 자생력 완성 로드맵
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#fff5f5" stroke="#fecdd3" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          청열안신 한약 &amp; 전중혈 약침 &amp; 흉곽 추나 통합 치료
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          머리로 치솟는 화열을 내리고 꽉 막힌 가슴과 명치를 뻥 뚫어주는 1:1 맞춤 케어
        </text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 745)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#19040c" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="430" y="72" font-family="${fontFamilies}" font-size="14" fill="#fda4af" text-anchor="middle">
        부평역 7번 출구 북광장 도보 5분 (시흥 신천역 서해선/차량 15~20분) ｜ 월·수·금 야간진료 20시
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

  <rect width="1080" height="1080" fill="#2a0815" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#e11d48" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 01</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fda4af">화병 환자가 빠지는 3대 오해와 함정</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "그냥 참고 넘기면 시간이 해결해 줄까요?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fda4af" letter-spacing="-0.5">
    감정을 억누를수록 울화는 신체화 증상으로 폭발하여 몸을 망가뜨립니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 235)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fff1f2" />
      <circle cx="72" cy="75" r="24" fill="#e11d48" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#be123c">"나만 참으면 집안이 조용하겠지..." (인내의 역설)</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">억압된 분노와 억울함은 사라지지 않고 체내에서 '울화(鬱火)'로 응축됩니다.</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">결국 자율신경계가 과열되어 가슴 통증, 두근거림, 상열감, 불면증으로 폭발합니다.</text>
      <text x="135" y="174" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 참는 것은 미덕이 아니라 내 몸을 태우는 독입니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fef3c7" />
      <circle cx="72" cy="75" r="24" fill="#d97706" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309">"단순 위장병·역류성 식도염인 줄 알고 약만 먹는 함정"</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">명치가 꽉 막히고 체한 느낌에 소화제와 제산제를 달고 살지만 낫지 않습니다.</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">위장 자체의 염증이 아니라 신경성 교감신경 긴장으로 인한 '기체(氣滯)' 때문입니다.</text>
      <text x="135" y="174" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 굳어버린 명치와 흉곽의 자율신경 긴장을 풀어주어야 체기가 내려갑니다.</text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fee2e2" />
      <circle cx="72" cy="75" r="24" fill="#dc2626" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c">신경안정제·수면제 의존과 감정 둔화</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#991b1b">정신과 약물로 뇌를 일시 진정시키면 잠은 오지만 울화의 뿌리는 남습니다.</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#991b1b">내성이 생겨 약을 끊었을 때 더 심한 분노 폭발과 가슴 조임이 재발합니다.</text>
      <text x="135" y="174" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 자율신경계 상열하한을 근본적으로 해소하는 한방 치료가 필수적입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#19040c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#fda4af" text-anchor="middle">
      💡 냄비 뚜껑을 누르는 억제제보다 가스 불(가슴 속 맺힌 울화)을 끄는 근본 치료가 우선입니다.
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

  <rect width="1080" height="1080" fill="#2a0815" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#e11d48" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 02</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fda4af">왜 가슴·명치가 콱 막힐까? 3대 심층 원인</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "화병은 단순 스트레스가 아닌 신체화된 자율신경 질환입니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fda4af" letter-spacing="-0.5">
    간기울결(肝氣鬱結) + 전중혈 기체(氣滯) + 상열하한(上熱下寒)
  </text>

  <!-- 3 Deep Cause Boxes -->
  <g transform="translate(60, 235)">
    <!-- Cause 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fff1f2" />
      <circle cx="72" cy="75" r="24" fill="#e11d48" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#be123c">간기울결(肝氣鬱結) 및 심포화열(心包火熱)</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">감정을 소통시키는 간(肝)의 기운이 막히면 심장과 뇌신경계에 화열(火熱)이 치솟습니다.</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">편도체가 과각성되어 사소한 일에도 분노가 치밀고, 가슴이 쿵쾅거리며 터질 듯해집니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 심포와 간에 쌓인 울화를 식혀주는 청열(淸熱) 처방이 시급합니다.</text>
    </g>

    <!-- Cause 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fff1f2" />
      <circle cx="72" cy="75" r="24" fill="#e11d48" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#be123c">전중혈(膻中穴)과 명치의 기체 &amp; 흉곽 근막 유착</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">가슴 정중앙 전중혈과 명치 부위에 기운이 뭉치면 흉골 근막이 굳어 물리적 압박 발생.</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">손으로 살짝만 눌러도 극심한 통증이 느껴지고, 숨을 깊이 들이쉬지 못해 한숨을 쉽니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 굳어버린 흉곽을 이완하고 뭉친 혈자리를 뚫어주는 약침·추나가 필요합니다.</text>
    </g>

    <!-- Cause 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow2)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fff1f2" />
      <circle cx="72" cy="75" r="24" fill="#e11d48" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#be123c">자율신경 시소 붕괴 &amp; 상열하한(上熱下寒)</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">교감신경 폭주로 열은 얼굴과 가슴으로 솟구치고, 아랫배와 손발은 얼음처럼 차가워집니다.</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">체온 조절 및 수면 리듬이 붕괴되어 자다가 식은땀을 흘리며 깨고 만성 피로에 빠집니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 수승화강(水升火降)을 회복하여 머리는 맑고 손발은 따뜻하게 만들어야 합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#19040c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#fda4af" text-anchor="middle">
      💡 정밀 자율신경 HRV 검사와 뇌파 분석으로 울화의 깊이를 수치로 진단합니다.
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

  <rect width="1080" height="1080" fill="#2a0815" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#e11d48" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 03</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fda4af">해아림 3단계 회복 로드맵 &amp; 1:1 맞춤 한방치료</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "울화 배출부터 심신 안정까지 체계적으로 회복합니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fda4af" letter-spacing="-0.5">
    청열안신 맞춤한약 + 전중혈 소통약침 + 흉곽 추나요법 + 뉴로피드백
  </text>

  <!-- 3 Step Roadmap Boxes -->
  <g transform="translate(60, 235)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fff1f2" />
      <circle cx="72" cy="75" r="24" fill="#e11d48" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">1단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#be123c">[급성 청열기] 가슴의 울화(火)를 식히고 번열 배출</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 체질 맞춤 한약: 분심기음, 황련해독탕, 가미소요산, 시호가용골모려탕 처방</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 심장의 과열을 내리고 뇌 편도체의 흥분을 진정시켜 가슴 두근거림과 열감 완화</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 답답하던 가슴에 숨길이 열리고 밤에 잠을 편히 잘 수 있게 됩니다.</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fff1f2" />
      <circle cx="72" cy="75" r="24" fill="#e11d48" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">2단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#be123c">[기능 소통기] 굳어버린 명치·전중혈 개통 &amp; 흉곽 추나</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 전중(膻中)·구미(鳩尾) 정제 한약 약침: 뭉친 어혈과 기체를 직접 풀어 통증 제거</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 흉곽 및 횡격막 이완 추나요법: 쪼그라든 흉강을 넓혀 깊은 복식호흡 복원</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 명치 밑에 얹혀있던 돌덩이가 쑥 내려가며 소화와 호흡이 원활해집니다.</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fff1f2" />
      <circle cx="72" cy="75" r="24" fill="#e11d48" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">3단계</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#be123c">[심신 강화기] 기혈 보강 &amp; 스트레스 저항력 완성</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 귀비탕, 천왕보심단으로 소진된 진액을 보충하고 심신 회복 탄력성 강화</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 뇌파 자율조절 뉴로피드백: 스트레스 자극에도 감정이 흔들리지 않는 뇌 완성</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 억울함과 불안에서 벗어나 마음에 평온과 활력을 되찾습니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#19040c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#fda4af" text-anchor="middle">
      🌱 해아림한의원 인천부평점 ｜ 032-719-3472 ｜ 1:1 심층 맞춤 진료
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

  <rect width="1080" height="1080" fill="#2a0815" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#e11d48" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 04</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fda4af">진료실 밖 환자 &amp; 가족 3대 행동 수칙</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "가슴을 열고 감정의 불을 끄는 일상 힐링 루틴"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fda4af" letter-spacing="-0.5">
    울화를 가라앉히고 자율신경을 다스리는 물리·행동 요법
  </text>

  <!-- 3 Protocol Boxes -->
  <g transform="translate(60, 235)">
    <!-- Protocol 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fff1f2" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌬️</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#be123c">1. 전중혈 원형 지압 &amp; 4-7-8 이완 호흡법</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#be123c">양 젖가슴 사이 뼈(전중혈)를 엄지로 부드럽게 원을 그리며 3분간 지압</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">코로 4초 숨을 들이마시고 7초 멈춘 뒤, 입으로 8초 천천히 내뱉는 호흡을 반복하면</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">과열된 교감신경이 즉시 다운되며 가슴을 짓누르던 답답함이 부드럽게 풀립니다.</text>
    </g>

    <!-- Protocol 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fff1f2" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🦶</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#be123c">2. 취침 전 15분 온수 족욕 (수승화강 루틴)</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#be123c">40도 미온수에 복사뼈까지 담그고 머리로 쏠린 화열을 발끝으로 하강</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">화병 환자의 고질적인 상열하한(가슴 위 열감, 하체 냉증)을 물리적으로 해소합니다.</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">자다가 식은땀을 흘리거나 가슴이 답답해 깨는 수면장애를 극적으로 개선합니다.</text>
    </g>

    <!-- Protocol 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fff1f2" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🤝</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#be123c">3. 가족의 결정적 대처: "참아라/잊어라" 훈계 금지</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#be123c">"지나간 일인데 털어버려", "왜 아직도 그래"라는 말은 2차 분노 유발</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">화병은 참다 참다 신체화로 폭발한 병입니다. "그동안 혼자 참느라 얼마나 힘들었어"</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">라는 진심 어린 인정과 공감이 뇌의 울화를 녹이는 가장 큰 치유제입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#19040c" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#fda4af" text-anchor="middle">
      🌱 해아림한의원 인천부평점 ｜ 032-719-3472 ｜ 부평역 7번 출구 북광장
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
  console.log('Rendering Siheung Sincheon Hwabyeong Card Images (B-Pattern)...');
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
