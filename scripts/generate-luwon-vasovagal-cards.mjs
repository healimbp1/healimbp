import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/luwon-vasovagal-syncope-bus',
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
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🚌 미주신경성 실신 · 버스 어지러움 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="640" height="40" rx="8" fill="#f0f9ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0369a1">
        출퇴근길 버스에서 눈앞이 캄캄해지고 식은땀? 미주신경 과반사의 신호
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      루원시티 미주신경성실신 · 버스 어지러움
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#0284c7">
      자율신경 저혈압 조절 · 뇌 혈류 순환 복원 1:1 맞춤 한방 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0f9ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 발병 기전</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">미주신경 과반사 &amp; 뇌허혈</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">부교감 급발진과 혈압 급락</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0f9ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 전조 증상</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">시야 암전 · 식은땀 · 구역감</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">실신 위험 5대 체크리스트</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0f9ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">승기보혈 한약 &amp; 뇌혈류침</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">3단계 자율신경 회복 솔루션</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0f9ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🦵</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 응급 대처</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">다리 꼬기 혈압 방어 자세</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#0284c7">버스 안 실전 예방 루틴</text>
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
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7" text-anchor="middle">
      "단순 빈혈이 아닙니다. 자율신경의 뇌 혈류 조절력을 강화해야 재발을 막을 수 있습니다."
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
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#f0f9ff" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0284c7" text-anchor="middle">
        POINT 01. 발병 기전
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      만원 버스에서 핑 돌며 주저앉는 이유
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7">
      미주신경(부교감신경) 과반사로 인한 일시적 뇌 혈류 공급 중단
    </text>

    <!-- Explanation Box 1 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="180" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        🫀 브레이크의 급발진 (미주신경 과반사)
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        환기가 안 되는 답답한 버스 안에서 오래 서 있거나, 피로·스트레스가 누적된 상태일 때
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        부교감신경인 미주신경이 오작동하여 심박수를 급격히 떨어뜨리고 혈관을 이완시킵니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
        ➔ 혈액이 다리 쪽으로 쏠리며 뇌로 가는 혈압이 급격히 곤두박질칩니다.
      </text>
    </g>

    <!-- Explanation Box 2 -->
    <g transform="translate(50, 420)">
      <rect x="0" y="0" width="860" height="230" rx="20" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
        ⚡ 일시적 뇌허혈(Brain Ischemia)과 블랙아웃
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#0284c7" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">뇌 산소 공급 급감:</tspan> 뇌 혈류가 순간적으로 차단되며 시신경과 청각 신경 기능 저하
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#0284c7" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">시야 암전(Blackout):</tspan> 눈앞이 하얘지거나 캄캄해지며 이명과 함께 식은땀 분출
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#0284c7" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">기립 불능 및 실신:</tspan> 신체가 뇌 혈류를 확보하기 위해 스스로 바닥으로 주저앉음
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "단순한 빈혈이나 영양 부족이 아닙니다."
      </text>
      <text x="430" y="74" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7" text-anchor="middle">
        자율신경의 혈관 수축 반사력과 심장 펌프력을 함께 올려야 재발을 막습니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 미주신경성실신 &amp; 자율신경 클리닉
    </text>
  </g>
</svg>`;
}

// 3. POINT 02 (자가진단 전조증상 카드)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#f0f9ff" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0284c7" text-anchor="middle">
        POINT 02. 전조 증상
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      실신 직전 나타나는 5대 골든타임 신호
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7">
      쓰러지기 1~2분 전 내 몸이 보내는 비상 경고 체크리스트
    </text>

    <!-- Checklist Items -->
    <g transform="translate(50, 215)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="18" width="48" height="48" rx="10" fill="#f0f9ff" />
        <text x="44" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">
          1. 만원 버스나 지하철 등 밀폐 공간에서 가슴이 답답하고 핑 돈다
        </text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#475569">
          오래 서 있을 때 다리로 피가 쏠리며 머리가 아찔해지는 느낌
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 100)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="18" width="48" height="48" rx="10" fill="#f0f9ff" />
        <text x="44" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">
          2. 눈앞이 하얘지거나 까맣게 암전(Blackout)된다
        </text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#475569">
          주변이 흐릿해지며 터널 속에 들어간 것처럼 시야가 좁아짐
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 200)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="18" width="48" height="48" rx="10" fill="#f0f9ff" />
        <text x="44" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">
          3. 이마와 손발에서 차가운 식은땀이 비 오듯 쏟아지고 속이 울렁거린다
        </text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#475569">
          자율신경 불균형으로 인한 급격한 체온 저하 및 구역감 발생
        </text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="18" width="48" height="48" rx="10" fill="#f0f9ff" />
        <text x="44" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">
          4. 귀에서 '삐-' 소리가 나거나 주변 소리가 멀어지듯 멍멍해진다
        </text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#475569">
          내이(달팽이관)로 가는 미세 혈류 감소로 청각 왜곡 현상 동반
        </text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 400)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="18" width="48" height="48" rx="10" fill="#f0f9ff" />
        <text x="44" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">
          5. 다리에 힘이 쭉 빠져 주저앉게 되고 하품이 연달아 나온다
        </text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#475569">
          뇌가 산소를 보충하려는 반사 반응 및 하지 근육 긴장도 소실
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 730)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">
        💡 2개 이상 해당된다면 전조증상 인지 즉시 '바닥에 주저앉아 머리를 숙여야' 부상을 방지합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (한방 맞춤 치료 카드)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#f0f9ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0284c7" text-anchor="middle">
        POINT 03. 한방 맞춤 치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      뇌 혈류를 끌어올리는 3단계 통합 치료
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#0284c7">
      자율신경 조절력과 심혈관 탄력성을 강화하는 해아림 솔루션
    </text>

    <!-- 3 Treatment Steps -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0f9ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌿</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1단계: 체질 맞춤 승기·익기보혈(昇氣補血) 한약
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 보중익기탕·사물탕·영계출감탕: 기혈을 보강하여 심장 펌프력 증대
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 중기하함(中氣下陷)을 끌어올려 기립 시 뇌 혈류가 떨어지는 현상 완벽 방어
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0f9ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚡</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2단계: 자율신경 조절 약침 &amp; HRV 바이오피드백
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • HRV 정밀 검사 기반 교감-부교감신경의 급격한 불균형 반사 억제
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 순수 한약재 추출 자율신경 약침으로 신경 전달 물질 항상성 정상화
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0f9ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💆</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3단계: 뇌혈류 개선 특화 침구 &amp; 두개천골요법(CST)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 백회·풍지·내관·족삼리혈 자극으로 두경부 혈관 긴장 완화 및 미세 순환 촉진
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌척수액 순환을 원활히 하여 뇌신경계 피로를 해소하고 기립 내구성 완성
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">
        💡 3단계 치료를 통해 혈관 반사력을 회복하면 버스·지하철 공포증에서 해방됩니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 미주신경성실신 &amp; 자율신경 클리닉
    </text>
  </g>
</svg>`;
}

// 5. POINT 04 (실전 응급 대처 루틴 카드)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#f0f9ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0284c7" text-anchor="middle">
        POINT 04. 실전 응급 루틴
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      버스 안 어지럼증 발생 시 3대 응급 수칙
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0284c7">
      실신을 막는 물리적 혈압 방어 자세와 생활 관리 (약선차 제외)
    </text>

    <!-- 3 Action Rules -->
    <g transform="translate(50, 215)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0f9ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🦵</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 다리 꼬고 하체 힘주기 (혈압 방어 자세)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 서 있는 상태에서 양다리를 꼬고 엉덩이와 종아리 근육을 강하게 쥐어짜기
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 하체에 정체된 혈액을 심장과 뇌로 강제 펌핑하여 순간적 혈압 상승 유도
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0f9ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🧎</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 즉시 쪼그려 앉기 또는 머리를 무릎 사이로 숙이기
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 창피하다고 서서 버티지 말고 즉시 바닥에 쪼그려 앉아 머리를 낮추기
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 심장과 뇌의 높낮이 차이를 없애 실신으로 인한 2차 외상 사고를 원천 방지
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0f9ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💧</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 기상 후 미온수 500ml 섭취 &amp; 까치발 운동 루틴
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 출근 전 충분한 수분과 전해질을 섭취해 혈관 내 혈액 용적 확보
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 평소 하루 50회 까치발 들기 운동으로 제2의 심장인 종아리 근육 단련
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1" text-anchor="middle">
        💡 올바른 응급 대처법 숙지와 한방 원인 치료로 대중교통을 안심하고 이용하세요.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 미주신경성실신 &amp; 자율신경 클리닉
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
  console.log('Rendering Luwon Vasovagal Syncope Card Images (A-Pattern)...');
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
