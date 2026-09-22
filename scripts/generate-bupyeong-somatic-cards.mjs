import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-somatic',
  'c:/Users/PC/Downloads/home/static/blog-images/depression-somatic'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (신체화 · 담적 · 두통 · 턱관절 클리닉)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14211e" />
      <stop offset="50%" stop-color="#1c332e" />
      <stop offset="100%" stop-color="#0f1a18" />
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 신체화 · 담적 &amp; 턱관절 · 두통 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="600" height="40" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#047857">
        검사엔 이상 없다는데 온몸이 아프고 소화가 안 될 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      신체화장애 · 담적병 · 턱관절 한방 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#2d6a59" letter-spacing="-0.5">
      뇌-자율신경 긴장을 풀고 신체 경락 기혈 순환을 바로잡는 1:1 솔루션
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#0d9488" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
          스트레스가 신체 통증으로 발현되는 '신체화 기전'
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          심리적 억압과 자율신경 불균형으로 명치 답답함, 근육 경직, 만성 통증 유발
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
          뇌-장 축(Brain-Gut Axis)과 턱관절-경추 연쇄 긴장
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          위장관 운동 장애(담적)와 턱관절 이갈이·편두통이 상호 연계되어 만성화
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0e7ff" />
        <circle cx="67" cy="67" r="26" fill="#4f46e5" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f2922">
          1:1 소적건비 탕약 &amp; 두개천골 추나 · 전침 요법
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          위장 담적을 삭히고 턱관절과 경추 근막을 이완하여 통증의 악순환 차단
        </text>
      </g>
    </g>

    <!-- Bottom Footer Bar -->
    <g transform="translate(55, 755)">
      <rect x="0" y="0" width="860" height="75" rx="16" fill="#1e293b" />
      <text x="430" y="46" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 부평역 7번 출구 도보 5분 (032-719-3472)
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. POINT 1 (원인기전)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
  </defs>
  <rect width="1080" height="1080" fill="#14211e" />
  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />
    <text x="55" y="80" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0d9488">POINT 01. 발생 기전 분석</text>
    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922">검사엔 이상 없다는데 왜 온몸이 아플까요?</text>
    <text x="55" y="170" font-family="${fontFamilies}" font-size="20" fill="#475569">뇌와 자율신경이 몸으로 보내는 SOS 신호, 신체화의 진실</text>
    
    <g transform="translate(55, 220)">
      <rect x="0" y="0" width="860" height="200" rx="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
      <text x="40" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#166534">1. 뇌-장-신경 축의 과부하</text>
      <text x="40" y="95" font-family="${fontFamilies}" font-size="18" fill="#374151">지속적인 스트레스와 피로는 자율신경을 교란시켜 위장관 평활근 경련과</text>
      <text x="40" y="130" font-family="${fontFamilies}" font-size="18" fill="#374151">혈류 저하를 유발하며 소화불량(담적)과 명치 통증을 만듭니다.</text>
    </g>

    <g transform="translate(55, 450)">
      <rect x="0" y="0" width="860" height="200" rx="20" fill="#fefce8" stroke="#fef08a" stroke-width="1.5" />
      <text x="40" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#854d0e">2. 근막 긴장과 중추 감작화(Central Sensitization)</text>
      <text x="40" y="95" font-family="${fontFamilies}" font-size="18" fill="#374151">무의식적인 턱관절 이악물기와 목·어깨 경직이 굳어지면 작은 자극에도</text>
      <text x="40" y="130" font-family="${fontFamilies}" font-size="18" fill="#374151">뇌가 심한 통증으로 증폭해 인지하는 중추성 통증 회로가 형성됩니다.</text>
    </g>

    <g transform="translate(55, 680)">
      <rect x="0" y="0" width="860" height="200" rx="20" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="40" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1e40af">3. 한의학의 담음(痰飮)과 기체(氣滯)</text>
      <text x="40" y="95" font-family="${fontFamilies}" font-size="18" fill="#374151">기운이 뭉쳐 순환하지 못하면 체내 노폐물인 담적이 쌓여 두통, 어지럼,</text>
      <text x="40" y="130" font-family="${fontFamilies}" font-size="18" fill="#374151">가슴 답답함, 전신 유주성 통증(여기저기 돌아가며 아픔)을 유발합니다.</text>
    </g>
  </g>
</svg>
  `;
}

// 3. POINT 2 (체크리스트)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
  </defs>
  <rect width="1080" height="1080" fill="#14211e" />
  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />
    <text x="55" y="80" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0d9488">POINT 02. 자가진단 체크리스트</text>
    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922">신체화 &amp; 담적병 의심 5대 대표 증상</text>
    
    <g transform="translate(55, 180)">
      <rect x="0" y="0" width="860" height="120" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <text x="35" y="68" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">✓ 1. 내시경은 정상인데 명치가 돌덩이처럼 꽉 막히고 트림이 자주 난다</text>
    </g>
    <g transform="translate(55, 320)">
      <rect x="0" y="0" width="860" height="120" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <text x="35" y="68" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">✓ 2. 아침에 일어나면 턱이 뻐근하고 관자놀이와 목덜미가 지끈거린다</text>
    </g>
    <g transform="translate(55, 460)">
      <rect x="0" y="0" width="860" height="120" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <text x="35" y="68" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">✓ 3. 신경을 쓰거나 스트레스를 받으면 체하거나 배가 살살 아프며 설사한다</text>
    </g>
    <g transform="translate(55, 600)">
      <rect x="0" y="0" width="860" height="120" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <text x="35" y="68" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">✓ 4. 병원 검사상 이상이 없다는 말을 듣지만 통증으로 일상이 무너진다</text>
    </g>
    <g transform="translate(55, 740)">
      <rect x="0" y="0" width="860" height="120" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <text x="35" y="68" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">✓ 5. 목에 가래 낀 듯한 이물감(매핵기)과 가슴 답답함이 수시로 느껴진다</text>
    </g>
  </g>
</svg>
  `;
}

// 4. POINT 3 (치료법)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
  </defs>
  <rect width="1080" height="1080" fill="#14211e" />
  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />
    <text x="55" y="80" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0d9488">POINT 03. 한방 맞춤 치료</text>
    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922">해아림한의원 1:1 맞춤 신체화 치료 솔루션</text>
    
    <g transform="translate(55, 180)">
      <rect x="0" y="0" width="860" height="170" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
      <text x="35" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#166534">💊 1. 소적건비(消積健脾) &amp; 소간해울(疏肝解鬱) 맞춤 탕약</text>
      <text x="35" y="90" font-family="${fontFamilies}" font-size="16.5" fill="#374151">• 위장 외벽의 담적을 삭히고 위장 평활근 탄력성을 복원 (반하사심탕, 평위산 가감방)</text>
      <text x="35" y="125" font-family="${fontFamilies}" font-size="16.5" fill="#374151">• 가슴속 뭉친 울화를 풀어주고 자율신경계 과각성을 안정 (사역산, 분심기음)</text>
    </g>

    <g transform="translate(55, 370)">
      <rect x="0" y="0" width="860" height="170" rx="18" fill="#fefce8" stroke="#fde047" stroke-width="1.5" />
      <text x="35" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#854d0e">🩺 2. 경혈 약침 &amp; 심부 전침 요법</text>
      <text x="35" y="90" font-family="${fontFamilies}" font-size="16.5" fill="#374151">• 중완혈, 족삼리, 전중혈 약침으로 소화기 신경망 염증 진정 및 흉격 이완</text>
      <text x="35" y="125" font-family="${fontFamilies}" font-size="16.5" fill="#374151">• 턱관절 교근·측두근 및 후두하근 심부 자극으로 신경 포착과 두통 즉각 해소</text>
    </g>

    <g transform="translate(55, 560)">
      <rect x="0" y="0" width="860" height="170" rx="18" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" />
      <text x="35" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#1e40af">💆 3. 두개천골 CST &amp; 턱관절 FCST 추나요법</text>
      <text x="35" y="90" font-family="${fontFamilies}" font-size="16.5" fill="#374151">• 상부경추(C1-C2)와 턱관절의 구조적 비틀림을 교정하여 뇌척수액 순환 촉진</text>
      <text x="35" y="125" font-family="${fontFamilies}" font-size="16.5" fill="#374151">• 뇌간과 미주신경의 물리적 압박을 해소하여 전신 자율신경 항상성 회복</text>
    </g>

    <g transform="translate(55, 750)">
      <rect x="0" y="0" width="860" height="150" rx="18" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.5" />
      <text x="35" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#6b21a8">⚡ 4. 뇌파 바이오피드백 &amp; HRV 자율신경 훈련</text>
      <text x="35" y="90" font-family="${fontFamilies}" font-size="16.5" fill="#374151">• 스트레스 상황에서도 통증과 소화 장애가 재발하지 않도록 신경계 탄력성 강화</text>
    </g>
  </g>
</svg>
  `;
}

// 5. POINT 4 (생활관리 루틴 - 약선차 내용 제외)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
  </defs>
  <rect width="1080" height="1080" fill="#14211e" />
  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />
    <text x="55" y="80" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0d9488">POINT 04. 생활 속 실천 팁</text>
    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922">오늘부터 실천하는 신체화 &amp; 담적 관리 루틴 3가지</text>
    
    <g transform="translate(55, 200)">
      <rect x="0" y="0" width="860" height="200" rx="20" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
      <text x="40" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#166534">1. 식후 15분 천천히 걷기 &amp; 복부 온열 찜질</text>
      <text x="40" y="95" font-family="${fontFamilies}" font-size="17" fill="#374151">식사 후 바로 눕지 않고 가볍게 산책하여 위장 연동운동을 돕고,</text>
      <text x="40" y="130" font-family="${fontFamilies}" font-size="17" fill="#374151">취침 전 배꼽 주변을 따뜻하게 찜질하여 장간막 혈류를 활성화합니다.</text>
    </g>

    <g transform="translate(55, 430)">
      <rect x="0" y="0" width="860" height="200" rx="20" fill="#fefce8" stroke="#fde047" stroke-width="1.5" />
      <text x="40" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#854d0e">2. 턱관절 이완 '혀끝 입천장 대기(N 발음 자세)'</text>
      <text x="40" y="95" font-family="${fontFamilies}" font-size="17" fill="#374151">치아가 닿지 않도록 위아래 어금니를 살짝 떼고 혀끝을 위 앞니 뒤 입천장에</text>
      <text x="40" y="130" font-family="${fontFamilies}" font-size="17" fill="#374151">가볍게 붙여 턱과 측두근의 무의식적 긴장을 풀어줍니다.</text>
    </g>

    <g transform="translate(55, 660)">
      <rect x="0" y="0" width="860" height="200" rx="20" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" />
      <text x="40" y="55" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1e40af">3. 취침 전 4-7-8 횡격막 이완 호흡</text>
      <text x="40" y="95" font-family="${fontFamilies}" font-size="17" fill="#374151">4초간 코로 숨을 들이마시고, 7초간 숨을 멈춘 뒤, 8초간 입으로 천천히 내쉬며</text>
      <text x="40" y="130" font-family="${fontFamilies}" font-size="17" fill="#374151">부교감신경을 활성화해 자는 동안 근육과 내장의 회복을 유도합니다.</text>
    </g>
  </g>
</svg>
  `;
}

function renderSvg(svgStr, outPath) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      fontDirs: ['C:\\Windows\\Fonts'],
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });
  const pngData = resvg.render();
  fs.writeFileSync(outPath, pngData.asPng());
  console.log(`Rendered: ${outPath}`);
}

const cards = [
  { name: '01_naver_main_thumbnail.jpg', gen: generateMainThumbnail },
  { name: '02_point1_cause.jpg', gen: generatePoint1 },
  { name: '03_point2_checklist.jpg', gen: generatePoint2 },
  { name: '04_point3_treatment.jpg', gen: generatePoint3 },
  { name: '05_point4_selfcare.jpg', gen: generatePoint4 }
];

for (const dir of targetDirs) {
  for (const card of cards) {
    const p = path.join(dir, card.name);
    renderSvg(card.gen(), p);
  }
}

console.log('✅ All Somatic card news generated successfully!');
