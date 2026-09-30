import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/siheung-eungye-child-tic',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 대표 썸네일 카드)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#818cf8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌱 소아청소년 뇌신경 &amp; 틱장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#eef2ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4f46e5">
        "음-음", "켁-켁" 헛기침 소리… 혼내거나 지적하지 마세요
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      시흥 은계지구 소아 틱장애 헛기침 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#4f46e5">
      뇌 기저핵 불균형 회복 · 음성틱 조기 진단 1:1 맞춤 한방 솔루션
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">POINT 01. 발병 기전</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">뇌 기저핵 억제 조절 미숙</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">의지가 아닌 신경학적 브레이크 마모</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">POINT 02. 자가 진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">비염약 안 듣는 헛기침 5대 체크</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">감기 헛기침 vs 음성틱 감별</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">평간식풍 한약 &amp; 뇌파 훈련</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">소아 맞춤 4단계 통합 케어</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">POINT 04. 부모 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">지적 금지 &amp; 전자기기 셧다운</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">가정 내 3대 행동 관리</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (시흥 은계지구에서 수인로/서해선 15~20분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 완비
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4f46e5" text-anchor="middle">
      "아이가 일부러 내는 소리가 아닙니다. 뇌 기저핵의 브레이크 힘을 키워주어야 합니다."
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
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#eef2ff" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4f46e5" text-anchor="middle">
        POINT 01. 발병 기전
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      아이가 자꾸 헛기침 소리를 내는 이유
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#4f46e5">
      뇌 기저핵의 운동 억제 필터 미성숙으로 인한 '불필요한 음성 신호 방출'
    </text>

    <!-- Explanation Box 1 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="180" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        🚗 뇌의 브레이크 페달 마모 (기저핵-전두엽 회로 이상)
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        기저핵은 수많은 뇌 신호 중 불필요한 운동과 소리를 걸러내는 '필터' 역할을 합니다.
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        기저핵의 성장이 미숙하거나 과도한 긴장·스트레스를 받으면 억제 기능이 약화됩니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#4f46e5">
        ➔ 성대와 호흡근을 움직이라는 불필요한 명령이 튀어나와 헛기침으로 폭발합니다.
      </text>
    </g>

    <!-- Explanation Box 2 -->
    <g transform="translate(50, 420)">
      <rect x="0" y="0" width="860" height="230" rx="20" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#3730a3">
        ⚡ 전조감각충동(Premonitory Urge)과 틱의 하행성 진행
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#4f46e5" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">목의 답답함:</tspan> 목구멍이 간지럽거나 뭔가 걸린 듯한 불쾌한 찜찜함이 선행됨
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#4f46e5" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">헛기침 방출:</tspan> 소리를 내야만 비로소 일시적 시원함을 느끼는 생리적 충동
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#4f46e5" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">하행성 확산:</tspan> 눈 깜빡임 ➔ 코 찡긋 ➔ 헛기침 ➔ 어깨 들썩임으로 악화 전 조기 차단 필요
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "아이의 나쁜 버릇이나 고집이 절대 아닙니다."
      </text>
      <text x="430" y="74" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4f46e5" text-anchor="middle">
        기저핵의 억제 조절력을 높이고 흥분된 신경계를 안정시켜야 소리가 멈춥니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 소아청소년 틱장애 클리닉
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
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#eef2ff" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4f46e5" text-anchor="middle">
        POINT 02. 자가진단
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      소아 헛기침 음성틱 5대 체크리스트
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#4f46e5">
      감기·비염 약을 2주 이상 먹어도 헛기침이 지속될 때 점검하세요
    </text>

    <!-- Checklist Items -->
    <g transform="translate(50, 215)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="78" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <rect x="20" y="18" width="42" height="42" rx="8" fill="#eef2ff" />
        <text x="41" y="47" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4f46e5" text-anchor="middle">✓</text>
        <text x="80" y="47" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
          "음-음", "켁-켁", "킁-킁" 소리를 1분에도 수차례 반복한다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 93)">
        <rect x="0" y="0" width="860" height="78" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <rect x="20" y="18" width="42" height="42" rx="8" fill="#eef2ff" />
        <text x="41" y="47" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4f46e5" text-anchor="middle">✓</text>
        <text x="80" y="47" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
          이비인후과나 소아과에서 후두·기관지에 이상이 없다고 한다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 186)">
        <rect x="0" y="0" width="860" height="78" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <rect x="20" y="18" width="42" height="42" rx="8" fill="#eef2ff" />
        <text x="41" y="47" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4f46e5" text-anchor="middle">✓</text>
        <text x="80" y="47" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
          TV/스마트폰을 보거나 긴장·스트레스를 받을 때 소리가 더 심해진다.
        </text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 279)">
        <rect x="0" y="0" width="860" height="78" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <rect x="20" y="18" width="42" height="42" rx="8" fill="#eef2ff" />
        <text x="41" y="47" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4f46e5" text-anchor="middle">✓</text>
        <text x="80" y="47" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
          눈 깜빡임, 코 찡긋, 목 꺾기 등 근육 움직임이 함께 나타난 적이 있다.
        </text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 372)">
        <rect x="0" y="0" width="860" height="78" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
        <rect x="20" y="18" width="42" height="42" rx="8" fill="#eef2ff" />
        <text x="41" y="47" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4f46e5" text-anchor="middle">✓</text>
        <text x="80" y="47" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a">
          잠잘 때는 신기하게 소리를 전혀 내지 않고 편안하게 잔다.
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 695)">
      <rect x="0" y="0" width="860" height="90" rx="16" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1.5" />
      <text x="430" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#3730a3" text-anchor="middle">
        💡 위 항목 중 2개 이상 해당된다면 단순 감기가 아닌 음성틱입니다.
      </text>
      <text x="430" y="68" font-family="${fontFamilies}" font-size="15" fill="#4f46e5" text-anchor="middle">
        지적하거나 참게 하지 마시고, 기저핵 조절력을 강화하는 조기 치료가 필요합니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 소아청소년 틱장애 클리닉
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
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#eef2ff" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4f46e5" text-anchor="middle">
        POINT 03. 한방 맞춤치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      기저핵 자생력을 키우는 4단계 통합 솔루션
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#4f46e5">
      졸림이나 처짐 없이 뇌 스스로 억제 회로를 완성하는 안전한 한방 치료
    </text>

    <!-- 4 Treatment Cards -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="205" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="50" height="30" rx="8" fill="#4f46e5" />
        <text x="45" y="41" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 1</text>
        <text x="80" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">정밀 두뇌 기능 평가</text>
        
        <text x="20" y="85" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 뇌기능 스트레스 &amp; 뇌파 분석
        </text>
        <text x="20" y="115" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 주의집중력 및 인지 반응 검사
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 체질 및 심신 불안도 정밀 진맥
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="205" rx="18" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1.5" />
        <rect x="20" y="20" width="50" height="30" rx="8" fill="#4338ca" />
        <text x="45" y="41" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 2</text>
        <text x="80" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#312e81">평간식풍 1:1 맞춤한약</text>
        
        <text x="20" y="85" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
          • 억간산: 간기울체 &amp; 근육 긴장 이완
        </text>
        <text x="20" y="115" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
          • 시호가용골모려탕: 뇌 흥분 진정
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#1e293b">
          • 온담탕: 담음 울체 &amp; 성대 울림 해소
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 225)">
        <rect x="0" y="0" width="415" height="205" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="50" height="30" rx="8" fill="#4f46e5" />
        <text x="45" y="41" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 3</text>
        <text x="80" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">뉴로피드백 &amp; 두뇌훈련</text>
        
        <text x="20" y="85" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 스스로 뇌파를 조절하는 훈련
        </text>
        <text x="20" y="115" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 기저핵 브레이크 회로 강화
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 감각통합 훈련으로 충동 억제
        </text>
      </g>

      <!-- Step 4 -->
      <g transform="translate(445, 225)">
        <rect x="0" y="0" width="415" height="205" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="50" height="30" rx="8" fill="#4f46e5" />
        <text x="45" y="41" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">STEP 4</text>
        <text x="80" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">소아 무통 침 &amp; 경추 추나</text>
        
        <text x="20" y="85" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 아프지 않은 자석침·스티커침
        </text>
        <text x="20" y="115" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 백회·풍지혈 순환 침구 치료
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#334155">
          • 경추 정렬로 두개내 뇌압 해소
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 695)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#3730a3" text-anchor="middle">
        💡 뇌 신경계가 스스로 조절할 수 있는 힘을 길러주어 성인 틱으로의 악화를 차단합니다.
      </text>
    </g>

    <text x="480" y="810" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
    </text>
  </g>
</svg>`;
}

// 5. POINT 04 (생활 실천 카드 - 약선차 배제)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#eef2ff" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4f46e5" text-anchor="middle">
        POINT 04. 부모 실천 수칙
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      가정에서 지키는 부모의 3대 행동 수칙
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#4f46e5">
      아이의 긴장과 불안을 낮추고 뇌 신경을 안정시키는 일상 관리 루틴
    </text>

    <!-- 3 Habit Cards -->
    <g transform="translate(50, 215)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="16" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🤫</text>
        <text x="140" y="55" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          1. 기침 소리 지적 및 눈치 주기 절대 금지 (무관심의 지혜)
        </text>
        <text x="140" y="85" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • "소리 내지 마", "참아봐"라는 지적은 아이에게 극심한 압박과 2차 긴장을 유발
        </text>
        <text x="140" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 소리가 나도 모른 척 넘어가고, 자연스럽게 다른 놀이로 주의를 전환해주세요.
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="16" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">📱</text>
        <text x="140" y="55" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          2. 스마트폰·유튜브·게임 블루라이트 셧다운
        </text>
        <text x="140" y="85" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 빠른 시각 자극과 전자파는 도파민 회로를 자극해 틱을 급격히 폭발시킵니다.
        </text>
        <text x="140" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 스크린 타임을 제한하고 취침 2시간 전에는 전자기기 사용을 완전히 차단하세요.
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="16" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🏃</text>
        <text x="140" y="55" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          3. 햇볕 쬐며 뛰어놀기 &amp; 취침 전 따뜻한 족욕
        </text>
        <text x="140" y="85" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 하루 30분 신체 에너지를 건강하게 발산하여 뇌의 신경 흥분 물질을 배출
        </text>
        <text x="140" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 취침 전 15분 미온수 족욕과 복식호흡으로 근육을 이완시키고 숙면을 유도하세요.
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#3730a3" text-anchor="middle">
        💡 부모님의 따뜻한 공감과 안전한 한방 치료가 우리 아이의 건강한 성장을 지킵니다.
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
  console.log('Rendering Siheung Eun-gye Child Tic Card Images (A-Pattern)...');
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
