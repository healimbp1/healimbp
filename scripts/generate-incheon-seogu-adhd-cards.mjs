import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const outputDir = 'c:/Users/PC/Downloads/home/static/blog-images/incheon-seogu-adhd';
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
      <stop offset="0%" stop-color="#0b1b36" />
      <stop offset="50%" stop-color="#142c54" />
      <stop offset="100%" stop-color="#081426" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-220" y="0" width="440" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">소아청소년 &amp; 성인 ADHD 두뇌클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 50)">
      <rect x="0" y="0" width="530" height="40" rx="8" fill="#e0f2fe" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
        산만함과 미루기 "의지나 성격의 문제가 아닙니다"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      인천 서구 ADHD 한의원 맞춤 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      전두엽 실행기능 저하 &amp; 도파민 불균형 회복 솔루션
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">
          전두엽(뇌 브레이크) 실행기능 발달 지연 분석
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          주의집중 유지와 충동 억제를 담당하는 전두엽 신경 회로의 활성도 저하 집중 진단
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">
          과잉행동형 vs 조용한 주의력결핍형 1:1 정밀 감별
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          멍하니 딴생각하는 조용한 ADHD 및 성인기 만성 미루기·브레인포그 맞춤 감별
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">
          1:1 맞춤 한약 &amp; 뉴로피드백 두뇌훈련 &amp; 두개천골 추나
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          뇌신경망 자생력을 길러 부작용 부담 없이 스스로 조절하는 통합 한방 치료
        </text>
      </g>
    </g>

    <!-- Bottom Footer Inside Card -->
    <g transform="translate(55, 760)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0f172a" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 대표원장 권형근 (한방침구과 전문의)
      </text>
      <text x="430" y="63" font-family="${fontFamilies}" font-size="14" fill="#93c5fd" text-anchor="middle">
        인천 서구(청라·검단·루원시티) 인접 ｜ 부평역 7번 출구 ｜ 1:1 심층 예약진료
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 01: CAUSE ANALYSIS CARD (원인 분석 카드)
function generateCauseCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#091830" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 01</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">ADHD의 신경생리학적 핵심 원인</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "아이가 게으르거나 산만한 것이 아닙니다"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#93c5fd" letter-spacing="-0.5">
    전두엽의 실행기능(브레이크) 미성숙과 신경전달물질 불균형 때문입니다
  </text>

  <!-- 3 Summary Boxes -->
  <g transform="translate(60, 235)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e0f2fe" />
      <circle cx="72" cy="75" r="24" fill="#0284c7" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">전두엽 실행기능(뇌 사령탑) 발달 지연</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">충동을 억제하고 계획을 세우며 집중을 유지하는 전두엽 회로가</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">또래보다 2~3년 성장이 지연되어 불필요한 자극을 걸러내지 못합니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7">👉 '안 하는 것'이 아니라 뇌 기능상 '조절이 안 되는 상태'입니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fef3c7" />
      <circle cx="72" cy="75" r="24" fill="#d97706" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b45309">도파민 &amp; 노르에피네프린 신경전달 불균형</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">동기부여와 주의집중 유지를 돕는 신경전달물질의 수용체 작용이 부족해</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#334155">지루한 일상 과제를 견디기 어렵고 즉각적인 자극(스마트폰/게임)에만 빠져듭니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#d97706">👉 과잉몰입과 주의산만이 극단적으로 공존하는 이유입니다.</text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5" filter="url(#shadow1)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#fee2e2" />
      <circle cx="72" cy="75" r="24" fill="#dc2626" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#b91c1c">반복된 다그침과 자존감 저하의 악순환</text>
      <text x="135" y="102" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">"집중 좀 해라", "왜 또 잊어버렸니"라는 꾸중이 누적되면</text>
      <text x="135" y="138" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">자존감이 꺾이고 2차적으로 우울, 불안, 적대적 반항장애로 발전합니다.</text>
      <text x="135" y="178" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#be123c">👉 뇌 발달 취약점을 이해하고 조기에 신경학적 치료를 시작해야 합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 ADHD는 뇌의 조절 회로가 성숙하는 과정의 취약점이므로 근본 자생력을 키워주어야 합니다.
    </text>
  </g>
</svg>
  `;
}

// 3. POINT 02: SELF-CHECKLIST CARD (자가진단 체크리스트 카드)
function generateChecklistCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#091830" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 02</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">소아·청소년·성인 ADHD 자가진단</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "혹시 우리 아이도, 나 자신도 ADHD일까요?"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#93c5fd" letter-spacing="-0.5">
    3가지 이상 지속된다면 전두엽 기능 및 뇌파 정밀 검사가 필요합니다.
  </text>

  <!-- Checklist List Box Container -->
  <g transform="translate(60, 230)">
    <rect x="0" y="0" width="960" height="690" rx="24" fill="#ffffff" filter="url(#shadow2)" />
    
    <!-- Item 1 -->
    <g transform="translate(40, 35)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e0f2fe" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
        수업이나 업무 중 사소한 자극에도 주의가 쉽게 분산되고 멍하니 딴생각을 한다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        전두엽의 선택적 주의집중 및 자극 필터링 기능 저하를 의미합니다.
      </text>
    </g>

    <!-- Item 2 -->
    <g transform="translate(40, 135)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e0f2fe" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
        지시사항을 끝까지 듣지 못하고, 물건을 자주 잃어버리며 약속·마감을 자주 어긴다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        작업기억력(Working Memory) 부족 및 계획 수립 장애의 대표 신호입니다.
      </text>
    </g>

    <!-- Item 3 -->
    <g transform="translate(40, 235)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e0f2fe" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
        가만히 앉아있지 못하고 손발을 꼼지락거리거나 몸을 끊임없이 움직인다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        과잉행동·충동형의 대표적 양상이며, 성인은 내적 안절부절감으로 나타납니다.
      </text>
    </g>

    <!-- Item 4 -->
    <g transform="translate(40, 335)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e0f2fe" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
        상대방의 말을 끝까지 기다리지 못하고 불쑥 끼어들거나 감정 기복이 심하다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        충동 조절(뇌 브레이크) 회로 미성숙으로 교우관계나 대인관계 마찰 유발.
      </text>
    </g>

    <!-- Item 5 -->
    <g transform="translate(40, 435)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e0f2fe" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
        시작하기 전까지 엄청난 미루기를 반복하며, 마감 직전에야 벼락치기로 몰입한다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        성인 ADHD 및 청소년기 주의력 결핍형(조용한 ADHD) 환자의 핵심 패턴.
      </text>
    </g>

    <!-- Item 6 -->
    <g transform="translate(40, 535)">
      <rect x="0" y="0" width="880" height="85" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
      <circle cx="45" cy="42" r="20" fill="#e0f2fe" />
      <text x="45" y="50" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
      <text x="85" y="38" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
        공부나 독서에는 10분을 못 버티지만 유튜브·게임·SNS에는 몇 시간씩 과몰입한다.
      </text>
      <text x="85" y="66" font-family="${fontFamilies}" font-size="15" fill="#475569">
        집중력 총량 부족이 아닌, '자극 의존적 주의 배분 불균형'을 나타냅니다.
      </text>
    </g>

    <!-- Warning inside Checklist -->
    <g transform="translate(40, 630)">
      <text x="440" y="30" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0369a1" text-anchor="middle">
        ※ 조용한 ADHD나 성인 ADHD는 겉으로 드러나지 않아 방치되기 쉬우므로 조기 진단이 중요합니다.
      </text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 해아림한의원은 뇌기능검사, 뇌파검사, 자율신경계검사로 1:1 맞춤 감별을 진행합니다.
    </text>
  </g>
</svg>
  `;
}

// 4. POINT 03: TREATMENT STEP CARD (맞춤 한방 치료 카드)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#091830" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 03</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">해아림 4대 뇌신경 밸런스 통합 솔루션</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "일시적 각성이 아닌, 뇌의 자생력을 깨웁니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#93c5fd" letter-spacing="-0.5">
    체질 맞춤 한약 + 뉴로피드백 두뇌훈련 + 두개천골 추나 + 약침 요법
  </text>

  <!-- 3 Treatment Step Boxes -->
  <g transform="translate(60, 235)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e0f2fe" />
      <circle cx="72" cy="75" r="24" fill="#0284c7" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">체질 맞춤 총뇌(聰腦) 한약 1:1 개별 처방</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 심비양허형(기혈 부족·기억력 감퇴): 귀비탕, 총명탕 가감 처방</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 간기울결·간양상항형(짜증·충동성·흥분): 사역산, 시호청간탕 가감</text>
      <text x="135" y="164" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 식욕 저하, 수면 장애, 틱 유발 등 화학 약물 부작용 부담 없는 안전한 치료</text>
    </g>

    <!-- Step 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e0f2fe" />
      <circle cx="72" cy="75" r="24" fill="#0284c7" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">뉴로피드백 &amp; 바이오피드백 두뇌 훈련</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 전두엽 주의집중 뇌파(SMR파·저베타파)를 스스로 강화하는 자기조절 훈련</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 산만한 세타파를 억제하여 작업기억력과 학습 지속 능력을 향상</text>
      <text x="135" y="164" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 게임처럼 재미있게 훈련하며 뇌 신경망의 영구적 신경가소성 촉진</text>
    </g>

    <!-- Step 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow3)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e0f2fe" />
      <circle cx="72" cy="75" r="24" fill="#0284c7" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">두개천골 뇌순환 추나 &amp; 신경안정 약침</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 턱관절과 상부 경추(C1-C2)를 교정하여 뇌척수액 순환과 뇌 혈류 개통</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 백회, 신문, 풍지, 태충혈 약침으로 과열된 신경계를 빠르게 진정</text>
      <text x="135" y="164" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 신체 긴장과 뇌 피로를 해소하여 틱장애, 수면장애 동반 증상 동시 개선</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
      💡 해아림한의원 인천부평점 ｜ 032-508-8575 ｜ 1:1 두뇌 맞춤 클리닉
    </text>
  </g>
</svg>
  `;
}

// 5. POINT 04: SELF-CARE CARD (생활 속 실천 팁 카드 - 약선차 제외)
function generateSelfCareCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#091830" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="130" height="42" rx="21" fill="#0284c7" />
    <text x="65" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">POINT 04</text>
    <text x="150" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7dd3fc">ADHD 집중력을 높이는 3대 실천 팁</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "의지가 아닌 '환경과 행동 루틴'을 바꿔야 합니다"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#93c5fd" letter-spacing="-0.5">
    전두엽 부담을 덜어주고 자기조절력을 길러주는 현실적 생활 습관
  </text>

  <!-- 3 Tip Boxes -->
  <g transform="translate(60, 235)">
    <!-- Tip 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e0f2fe" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⏱️</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">1. 시각적 타이머 활용 &amp; 15분 단위 쪼개기 루틴</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0284c7">남은 시간이 눈으로 보이는 시각 타이머(타임타이머) 사용</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">막연한 시간 개념을 구체화하고, "15분 집중 후 3분 휴식"처럼 과제를</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">작게 쪼개어 전두엽의 인지 과부하를 줄이고 성취감을 제공합니다.</text>
    </g>

    <!-- Tip 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e0f2fe" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🎯</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">2. 1회 1지시 원칙 &amp; 즉각적인 구체적 칭찬</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0284c7">여러 가지를 한꺼번에 말하지 말고 눈을 맞추며 한 번에 하나씩 지시</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">작은 행동이라도 완료했을 때 즉시 "방금 책 정리한 모습 멋졌어!"처럼</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">구체적으로 인정하여 뇌의 도파민 보상 회로를 긍정적으로 자극합니다.</text>
    </g>

    <!-- Tip 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e0f2fe" />
      <text x="72" y="85" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🏃</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0369a1">3. 매일 30분 유산소 운동 &amp; 4-7-8 이완 호흡</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0284c7">줄넘기·러닝 등 땀 흘리는 운동으로 뇌신경 성장인자(BDNF) 분비 촉진</text>
      <text x="135" y="136" font-family="${fontFamilies}" font-size="17" fill="#334155">운동은 도파민과 노르에피네프린을 자연스럽게 높여주며, 흥분이나</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="17" fill="#334155">조급함이 올라올 땐 4-7-8 호흡으로 뇌 자율신경을 차분히 리셋합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#082f49" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle">
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
  
  // also copy to generalDir if desired
  const generalFilePath = path.join(generalDir, fileName);
  fs.writeFileSync(generalFilePath, pngBuffer);
  
  console.log(`Saved: ${filePath}`);
}

async function main() {
  console.log('Generating Incheon Seo-gu ADHD blog card set...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateCauseCard(), '02_point1_cause.jpg');
  await renderCard(generateChecklistCard(), '03_point2_checklist.jpg');
  await renderCard(generateTreatmentCard(), '04_point3_treatment.jpg');
  await renderCard(generateSelfCareCard(), '05_point4_selfcare.jpg');
  console.log('All 5 cards created successfully in:', outputDir);
}

main().catch(console.error);
