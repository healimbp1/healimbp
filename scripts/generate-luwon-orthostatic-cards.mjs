import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/luwon-orthostatic-hypotension',
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
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="50%" stop-color="#0f372e" />
      <stop offset="100%" stop-color="#022019" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🩺 뇌신경 &amp; 자율신경 기립성 어지럼 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#ecfdf5" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#047857">
        누웠다 일어날 때 눈앞이 캄캄하고 핑 돌 때? 뇌 혈류 저하의 경고
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      루원시티 가정동 기립성 저혈압 어지럼증
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#059669">
      자율신경 혈관 수축 반사 회복 · 뇌 혈류 순환 1:1 맞춤 한방 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 발병 기전</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">자율신경 혈관 반사 저하</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">일어설 때 일시적 뇌허혈 발생</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">시야 암전 · 이명 · 휘청임</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">기립성 어지럼 5대 체크리스트</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">승기보혈 한약 &amp; 뇌혈류침</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">4단계 자율신경 회복 솔루션</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🦵</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 생활 루틴</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">3단계 기립 &amp; 종아리 펌핑</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">일상 속 뇌 혈류 방어 수칙</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (루원시티 가정역에서 7호선/자가용 10~15분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">
      "단순 빈혈이 아닙니다. 자율신경의 혈관 수축 반사력을 강화해야 재발을 막을 수 있습니다."
    </text>
  </g>
</svg>`;
}

// 2. POINT 01 (원인 기전 카드)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#0f372e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#ecfdf5" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#047857" text-anchor="middle">
        POINT 01. 발병 기전
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      일어설 때 핑 돌며 눈앞이 캄캄해지는 이유
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669">
      중력에 의해 떨어진 혈액을 올려주지 못하는 '자율신경 혈관 수축 불능'
    </text>

    <!-- Explanation Box 1 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="180" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        🫀 혈관 펌프의 반응 지연 (자율신경 조절 장애)
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        누워있거나 앉아있다가 일어설 때 약 500~1000ml의 혈액이 하체와 복부로 쏠립니다.
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        정상인은 교감신경이 즉시 하체 혈관을 수축시키지만, 자율신경이 약화되면 반응이 지연됩니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#059669">
        ➔ 혈압이 순간적으로 급락하며 심장에서 뇌로 올리는 혈액량이 급감합니다.
      </text>
    </g>

    <!-- Explanation Box 2 -->
    <g transform="translate(50, 420)">
      <rect x="0" y="0" width="860" height="230" rx="20" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#065f46">
        ⚡ 일시적 뇌허혈(Cerebral Ischemia)과 시야 암전
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#059669" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">뇌 산소 공급 급감:</tspan> 뇌혈류가 순간 차단되며 전정신경핵과 시신경 기능이 일시 저하
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#059669" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">블랙아웃(시야 암전):</tspan> 눈앞이 하얘지거나 캄캄해지며 귀에서 삐- 이명 및 멍함 발생
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#059669" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">휘청임 및 주저앉음:</tspan> 뇌 혈류를 다시 확보하기 위해 신체가 바닥으로 주저앉게 됨
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "MRI나 이비인후과 검사에서 이상이 없다고 나오는 이유입니다."
      </text>
      <text x="430" y="74" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#059669" text-anchor="middle">
        기질적 손상이 아닌 '자율신경의 순간 조절력 저하'를 치료해야 근본 해결됩니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 기립성저혈압 &amp; 자율신경 클리닉
    </text>
  </g>
</svg>`;
}

// 3. POINT 02 (자가진단 체크리스트 카드)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#0f372e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#ecfdf5" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#047857" text-anchor="middle">
        POINT 02. 자가진단
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      기립성 저혈압 어지럼증 5대 자가진단
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669">
      앉았다 일어날 때, 아침 기상 시 내 몸이 보내는 뇌허혈 위험 신호
    </text>

    <!-- Checklist Items -->
    <g transform="translate(50, 215)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="78" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <rect x="20" y="18" width="42" height="42" rx="8" fill="#ecfdf5" />
        <text x="41" y="47" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="80" y="47" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
          누워있거나 앉아있다가 일어설 때 눈앞이 캄캄해지며 핑 돈다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 93)">
        <rect x="0" y="0" width="860" height="78" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <rect x="20" y="18" width="42" height="42" rx="8" fill="#ecfdf5" />
        <text x="41" y="47" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="80" y="47" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
          아침에 침대에서 일어날 때 중심을 잡지 못하고 벽을 짚게 된다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 186)">
        <rect x="0" y="0" width="860" height="78" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <rect x="20" y="18" width="42" height="42" rx="8" fill="#ecfdf5" />
        <text x="41" y="47" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="80" y="47" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
          조금만 오래 서 있어도 식은땀이 나고 뒷목이 뻐근하며 아득해진다.
        </text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 279)">
        <rect x="0" y="0" width="860" height="78" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <rect x="20" y="18" width="42" height="42" rx="8" fill="#ecfdf5" />
        <text x="41" y="47" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="80" y="47" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
          따뜻한 물로 샤워하거나 사우나를 하고 난 후 어지럼이 심해진다.
        </text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 372)">
        <rect x="0" y="0" width="860" height="78" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <rect x="20" y="18" width="42" height="42" rx="8" fill="#ecfdf5" />
        <text x="41" y="47" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#059669" text-anchor="middle">✓</text>
        <text x="80" y="47" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
          어지러울 때 즉시 쪼그려 앉거나 누우면 증상이 빠르게 가라앉는다.
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 695)">
      <rect x="0" y="0" width="860" height="90" rx="16" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="430" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#065f46" text-anchor="middle">
        💡 위 항목 중 2개 이상 해당된다면 단순 피로가 아닙니다.
      </text>
      <text x="430" y="68" font-family="${fontFamilies}" font-size="15" fill="#047857" text-anchor="middle">
        자율신경 기능과 뇌 혈류 조절력에 대한 정밀 진료 및 맞춤 한방 치료가 필요합니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 기립성저혈압 &amp; 자율신경 클리닉
    </text>
  </g>
</svg>`;
}

// 4. POINT 03 (맞춤 한방 치료 카드)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#0f372e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#ecfdf5" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#047857" text-anchor="middle">
        POINT 03. 한방 맞춤치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      뇌 혈류 자생력을 깨우는 4단계 솔루션
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669">
      혈압 억지 올리기가 아닌 자율신경 조절력과 뇌 혈류 순환의 근본 복원
    </text>

    <!-- 4 Treatment Cards -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="205" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="50" height="30" rx="8" fill="#059669" />
        <text x="45" y="41" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 1</text>
        <text x="80" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">정밀 자율신경 검사</text>
        
        <text x="20" y="85" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • HRV 자율신경 균형도 검사
        </text>
        <text x="20" y="115" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 뇌기능 스트레스 &amp; 뇌파 분석
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 체질 및 맥진을 통한 원인 감별
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="205" rx="18" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
        <rect x="20" y="20" width="50" height="30" rx="8" fill="#047857" />
        <text x="45" y="41" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 2</text>
        <text x="80" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46">승기보혈 1:1 맞춤한약</text>
        
        <text x="20" y="85" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
          • 보중익기탕: 중기 하함 리프팅
        </text>
        <text x="20" y="115" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
          • 귀비탕: 심비양허 및 뇌혈류 보충
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
          • 영계출감탕: 수독·담음 울체 해소
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 225)">
        <rect x="0" y="0" width="415" height="205" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="50" height="30" rx="8" fill="#059669" />
        <text x="45" y="41" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 3</text>
        <text x="80" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">뇌혈류 개통침 &amp; 추나</text>
        
        <text x="20" y="85" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 백회·풍지·신문 경혈 자극
        </text>
        <text x="20" y="115" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 두개천골 추나로 경추 정렬
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 추골동맥 혈류 통로 즉각 개통
        </text>
      </g>

      <!-- Step 4 -->
      <g transform="translate(445, 225)">
        <rect x="0" y="0" width="415" height="205" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="50" height="30" rx="8" fill="#059669" />
        <text x="45" y="41" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 4</text>
        <text x="80" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">뉴로·바이오피드백</text>
        
        <text x="20" y="85" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 자율신경 혈관 반사 훈련
        </text>
        <text x="20" y="115" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 기립 시 뇌파 불안정 제어
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 실신 공포 및 예기불안 차단
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 695)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#065f46" text-anchor="middle">
        💡 뇌 신경계의 자생력을 회복하여 기립 시 어지럼과 실신 불안을 근본적으로 종결합니다.
      </text>
    </g>

    <text x="480" y="810" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
    </text>
  </g>
</svg>`;
}

// 5. POINT 04 (생활 관리 실천 카드 - 약선차 배제)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#0f372e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#ecfdf5" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#047857" text-anchor="middle">
        POINT 04. 생활 속 실천팁
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      진료실 밖에서 지키는 3대 기립 실천 수칙
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#059669">
      뇌 혈류를 지키고 어지럼을 예방하는 현실적인 물리·행동 루틴
    </text>

    <!-- 3 Habit Cards -->
    <g transform="translate(50, 215)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="16" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⏳</text>
        <text x="140" y="55" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          1. 3단계 슬로우 기립 루틴 (3-Step Getting Up)
        </text>
        <text x="140" y="85" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 눈뜨고 누운 채 기지개 30초 ➔ 침대 끝에 걸터앉아 30초 ➔ 천천히 기립
        </text>
        <text x="140" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 급하게 벌떡 일어나는 습관을 차단하여 혈관 수축 반사 시간 확보
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="16" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🦵</text>
        <text x="140" y="55" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          2. 종아리 '제2의 심장' 펌핑 &amp; 다리 꼬기
        </text>
        <text x="140" y="85" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 일어서기 직전 발끝 당기기 10회, 평소 까치발 들기 운동으로 종아리 단련
        </text>
        <text x="140" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 서서 어지럼 조짐이 느껴질 땐 즉시 양다리를 X자로 꼬고 허벅지에 힘주기
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="16" fill="#ecfdf5" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💧</text>
        <text x="140" y="55" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          3. 기상 직후 미온수 500ml &amp; 고온욕 주의
        </text>
        <text x="140" y="85" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 아침 기상 직후 미온수를 마셔 밤사이 줄어든 혈관 내 순환 혈액 용적 보충
        </text>
        <text x="140" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 혈관을 과도하게 확장시키는 장시간 뜨거운 사우나나 온수욕 피하기
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#065f46" text-anchor="middle">
        💡 올바른 기립 습관과 한방 원인 치료가 결합할 때 재발 없는 맑은 하루가 시작됩니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 기립성저혈압 &amp; 자율신경 클리닉
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
  console.log('Rendering Luwon Orthostatic Hypotension Card Images (A-Pattern)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1(), '02_point1_cause.jpg');
  await renderCard(generatePoint2(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4(), '05_point4_selfcare.jpg');
  console.log('All 5 A-pattern cards generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
