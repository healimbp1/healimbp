import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/samsan-throat-foreign-body-maehaekgi',
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
      <stop offset="0%" stop-color="#14532d" />
      <stop offset="50%" stop-color="#166534" />
      <stop offset="100%" stop-color="#052e16" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#16a34a" />
      <stop offset="100%" stop-color="#4ade80" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 목 이물감 · 매핵기(梅核氣) · 삼킴곤란 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="640" height="40" rx="8" fill="#f0fdf4" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#15803d">
        목에 가래나 알사탕 걸린 듯 답답한데 검사상 정상? 기체증 치료
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부평 삼산동 목 이물감 · 매핵기 삼킴곤란
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#16a34a">
      식도 평활근 긴장 해소 · 반하후박탕 1:1 맞춤 한방 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0fdf4" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🫁</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 발병 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">기체증 &amp; 식도괄약근 경련</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#16a34a">스트레스성 인후두 긴장</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0fdf4" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">뱉어도 안 나오고 삼켜도 남음</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#16a34a">매핵기 5대 체크리스트</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0fdf4" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">반하후박탕 &amp; 경추부 약침</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#16a34a">3단계 기체 해소 솔루션</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#f0fdf4" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧘</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 실전 루틴</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">헛기침 멈춤 &amp; 목 근막 이완</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#16a34a">인후부 3대 생활 수칙</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (삼산동에서 7호선/자가용 10분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#16a34a" text-anchor="middle">
      "목에 걸린 매실 씨앗은 억지로 뱉는 것이 아닌, 가슴 속 울체된 기운을 풀어야 사라집니다."
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
      <stop offset="0%" stop-color="#14532d" />
      <stop offset="100%" stop-color="#052e16" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#f0fdf4" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#16a34a" text-anchor="middle">
        POINT 01. 발병 기전
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      목에 매실 씨앗이 걸린 듯한 '매핵기'의 실체
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#16a34a">
      내시경 검사상 이상이 없는데도 삼킴곤란과 이물감이 지속되는 원인
    </text>

    <!-- Explanation Box 1 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="180" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        ⚡ 스트레스와 기체증(氣滯證)의 인후부 과긴장
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        과도한 스트레스, 억울된 감정, 불안이 누적되면 자율신경계 교감신경이 과열됩니다.
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        목 주위 윤상인두근과 식도 상부 괄약근이 비정상적으로 경련·수축하여 이물감을 유발합니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
        ➔ 실제 이물질이 없어도 뇌신경은 무언가 꽉 막혀있다고 지속 착각합니다.
      </text>
    </g>

    <!-- Explanation Box 2 -->
    <g transform="translate(50, 420)">
      <rect x="0" y="0" width="860" height="230" rx="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d">
        💧 담음(痰飮) 결합과 헛기침의 악순환
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#16a34a" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">점막 건조 &amp; 담음 울결:</tspan> 기운이 뭉치며 체액이 끈적한 담음으로 변해 인후벽에 밀착
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#16a34a" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">잦은 켁켁거림(헛기침):</tspan> 억지로 뱉으려 할수록 성대와 인후 점막이 마찰되어 염증 악화
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#16a34a" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">삼킴 공포 조건화:</tspan> 침을 삼킬 때마다 목 조임과 숨 막힘 공포로 불안 신경망 형성
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "위산 억제제만으로 낫지 않는 목 이물감"
      </text>
      <text x="430" y="74" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#16a34a" text-anchor="middle">
        가슴과 목에 맺힌 기체증(氣滯)을 소통시켜야 식도 근육이 부드럽게 풀립니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 매핵기 &amp; 자율신경 클리닉
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
      <stop offset="0%" stop-color="#14532d" />
      <stop offset="100%" stop-color="#052e16" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="220" height="40" rx="20" fill="#f0fdf4" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#16a34a" text-anchor="middle">
        POINT 02. 자가진단
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      만성 목 이물감 · 매핵기 5대 자가진단
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#16a34a">
      역류성 식도염 약을 먹어도 차도가 없다면 확인해보세요
    </text>

    <!-- Checklist Items -->
    <g transform="translate(50, 215)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="18" width="48" height="48" rx="10" fill="#f0fdf4" />
        <text x="44" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">
          1. 목에 가래, 솜뭉치, 알사탕이 걸려있는 듯 답답하다
        </text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#475569">
          목 안쪽이 꽉 막힌 느낌이 수주~수개월간 지속됨
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 100)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="18" width="48" height="48" rx="10" fill="#f0fdf4" />
        <text x="44" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">
          2. 뱉으려 해도 나오는 것이 없고, 삼켜도 넘어가지 않는다
        </text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#475569">
          불통즉통(不通則痛) : 헛기침을 해도 배출되지 않는 전형적 매핵기
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 200)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="18" width="48" height="48" rx="10" fill="#f0fdf4" />
        <text x="44" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">
          3. 음식이나 물을 먹을 때는 괜찮은데 침 삼킬 때 유독 거슬린다
        </text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#475569">
          실제 기질적 폐색이 아닌 신경성 기능 장애의 핵심 감별점
        </text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="18" width="48" height="48" rx="10" fill="#f0fdf4" />
        <text x="44" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">
          4. 스트레스를 받거나 피곤할 때 목 조임이 심해진다
        </text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#475569">
          감정 변화 및 업무 긴장에 따라 증상의 강도가 민감하게 요동침
        </text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 400)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="18" width="48" height="48" rx="10" fill="#f0fdf4" />
        <text x="44" y="50" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#16a34a" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">
          5. 가슴 답답함, 잦은 한숨, 명치 팽만감, 어깨 결림이 동반된다
        </text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#475569">
          상체 기혈 순환 정체로 인한 화병 및 담적 증후군 복합 발현
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 730)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">
        💡 2개 이상 해당된다면 단순 염증이 아닌 신경성 기체증 치료가 필요합니다.
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
      <stop offset="0%" stop-color="#14532d" />
      <stop offset="100%" stop-color="#052e16" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#f0fdf4" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#16a34a" text-anchor="middle">
        POINT 03. 한방 맞춤 치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      목의 꽉 막힌 기운을 뚫는 3단계 맞춤 치료
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#16a34a">
      울체된 기혈을 소통시키고 인후부 긴장을 해소하는 해아림 솔루션
    </text>

    <!-- 3 Treatment Steps -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0fdf4" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌿</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1단계: 체질 맞춤 행기이기(行氣理氣) 한약 처방
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 반하후박탕·사역산·시호소간산: 흉격의 맺힌 기운을 풀고 담음 삭힘
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 인후 점막의 진액을 보충하고 식도 상부 괄약근 경련을 신속히 이완
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0fdf4" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚡</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2단계: 인후부 신경 이완 자율신경 약침 &amp; HRV 훈련
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 경추부와 흉곽의 자율신경 절에 정제 한약 약침을 주입해 교감신경 진정
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 바이오피드백을 통해 호흡 및 심박 변이도를 안정시키고 스트레스 내성 증대
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0fdf4" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💆</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3단계: 경추·흉곽 근막 이완 침구 &amp; 두개천골요법(CST)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 천돌·인영·풍지·단중혈 자극으로 인후두 근육과 흉골 긴장 즉각 해소
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 횡격막과 미주신경 경로를 부드럽게 이완하여 편안한 호흡과 삼킴 복원
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">
        💡 3단계 치료로 기체증과 식도 경련을 동시에 풀어야 재발 없는 시원함을 얻습니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 매핵기 &amp; 자율신경 클리닉
    </text>
  </g>
</svg>`;
}

// 5. POINT 04 (실전 생활 루틴 카드)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14532d" />
      <stop offset="100%" stop-color="#052e16" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#f0fdf4" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#16a34a" text-anchor="middle">
        POINT 04. 실전 생활 루틴
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      목 이물감 완화를 위한 3대 홈케어 수칙
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#16a34a">
      인후부 점막과 신경을 이완시키는 물리적 루틴 (약선차 제외)
    </text>

    <!-- 3 Action Rules -->
    <g transform="translate(50, 215)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0fdf4" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🚫</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 켁켁거리며 억지로 뱉는 습관 멈추기 (헛기침 금지)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 헛기침은 목 점막을 강하게 마찰시켜 부종과 이물감을 2배로 악화시킴
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 답답할 때는 침을 꿀꺽 삼키거나 미온수를 한 모금 천천히 넘기기
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0fdf4" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🧣</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 흉쇄유돌근 온찜질 &amp; 목 어깨 근막 스트레칭
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 따뜻한 수건으로 목 앞쪽과 옆쪽을 10분간 찜질하여 식도 주변 근육 이완
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 턱을 가볍게 당기고 좌우로 천천히 목을 늘려주는 스트레칭 매일 3회 실천
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#f0fdf4" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🫁</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 4-7-8 흉곽 이완 복식호흡 &amp; 수분 자주 섭취
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 4초 흡기 - 7초 멈춤 - 8초 호기로 가슴에 맺힌 화기를 아래로 내리기
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 하루 1.5L 미온수를 조금씩 자주 마셔 인후 점막의 건조함을 방지
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">
        💡 올바른 생활 습관과 맞춤 한방 치료가 더해지면 답답했던 목이 상쾌하게 뚫립니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 매핵기 &amp; 자율신경 클리닉
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
  console.log('Rendering Samsan Maehaekgi Card Images (A-Pattern)...');
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
