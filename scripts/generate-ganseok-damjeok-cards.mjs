import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/ganseok-damjeok-dyspepsia',
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
      <stop offset="0%" stop-color="#14281d" />
      <stop offset="50%" stop-color="#1f3d2b" />
      <stop offset="100%" stop-color="#0d1f15" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#15803d" />
      <stop offset="100%" stop-color="#22c55e" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 신경성 소화불량 · 담적병 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#f0fdf4" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#15803d">
        내시경은 정상인데 명치가 돌처럼 꽉 막히고 헛구역질·두통까지?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      인천 간석동 신경성 소화불량 · 담적병 한의원
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#16a34a">
      위장 외벽 독소 배출 · 뇌-장축 자율신경 회복 &amp; 1:1 맞춤 한약
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#dcfce7" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🫃</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 01. 발병 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">위장 외벽에 굳은 담적(痰積)</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#15803d">뇌-장축 미주신경 마비</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#dcfce7" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">📋</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 02. 자가진단</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">명치 압통 · 두통 · 매핵기</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#15803d">담적병 5대 징후 체크</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#dcfce7" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">온중소적탕 &amp; 복부 심부온열</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#15803d">3단계 위장 자생력 완성</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#dcfce7" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🚶</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">POINT 04. 실전 루틴</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">식후 평지 산책 &amp; 복식호흡</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#15803d">생활 속 위장 케어 3선</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (간석동/간석오거리에서 지하철 5~10분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">
      "굳어진 위장을 부드럽게 풀면, 지긋지긋한 체기와 두통이 함께 사라집니다."
    </text>
  </g>
</svg>`;
}

// 2. POINT 01 (원인 분석 카드)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14281d" />
      <stop offset="100%" stop-color="#1e3a2b" />
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
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      내시경에 안 나오는 만성 체기의 진실
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d">
      위장 외벽 근육층에 쌓여 굳어지는 '담적(痰積)' 독소
    </text>

    <!-- Explanation Box 1 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="180" rx="20" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f2922">
        🧠 뇌-장 축(Gut-Brain Axis)과 자율신경 마비
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155" line-height="1.6">
        위장은 뇌와 미주신경으로 직결되어 있어 '제2의 뇌'라 불립니다.
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        스트레스를 받으면 교감신경이 과열되어 위장으로 가는 혈류를 차단하고 연동운동을 멈춥니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#15803d">
        ➔ 위장 점막 안쪽이 아닌 '외벽 근육층'이 굳어지므로 내시경에는 깨끗하게 보입니다.
      </text>
    </g>

    <!-- Explanation Box 2 -->
    <g transform="translate(50, 420)">
      <rect x="0" y="0" width="860" height="230" rx="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
        ⚡ 담적 독소가 전신으로 퍼지는 3대 과정
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#16a34a" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">음식물 부패 및 가스 발생:</tspan> 소화되지 못한 찌꺼기가 위장에 정체되어 부패 가스 폭발
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#16a34a" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">위장 외벽 경화(담적병):</tspan> 독소가 점막을 뚫고 외벽 근육층에 쌓여 명치가 돌처럼 딱딱해짐
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#16a34a" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">전신 혈류 오염:</tspan> 담적 독소가 혈액을 타고 머리로 가면 어지럼증·두통, 목으로 가면 매핵기 유발
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#f0fdf4" stroke="#dcfce7" stroke-width="1" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922" text-anchor="middle">
        "단순 소화제는 일시적 방편일 뿐입니다."
      </text>
      <text x="430" y="74" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">
        굳어진 담적 독소를 녹여 배출하고 자율신경을 풀어주어야 위장이 다시 움직입니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 신경성 위장질환 클리닉
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
      <stop offset="0%" stop-color="#14281d" />
      <stop offset="100%" stop-color="#1e3a2b" />
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
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      담적병 &amp; 신경성 소화불량 5대 징후
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#15803d">
      3개 이상 해당된다면 위장 외벽의 담적 독소 정밀 치료가 필요합니다.
    </text>

    <!-- Checklist Items -->
    <g transform="translate(50, 210)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#dcfce7" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">1. 내시경 검사는 정상인데 식후 늘 명치가 꽉 막히고 답답하다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">조기 포만감: 조금만 먹어도 밥그릇을 내려놓게 되고 체기가 지속됨</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 98)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#dcfce7" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">2. 명치와 배꼽 사이를 손가락으로 누르면 딱딱하고 찌릿한 통증이 있다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">담적의 직접적 징후: 위장 근육층이 돌처럼 굳어져 만져지는 압통점</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 196)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#dcfce7" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">3. 소화불량과 함께 만성 어지럼증, 편두통, 머리 무거움이 동반된다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">담훈(痰暈) &amp; 담궐두통: 담음 독소가 뇌 혈류를 방해하여 브레인포그 유발</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 294)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#dcfce7" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">4. 목에 가래나 이물질이 걸린 듯 삼켜도 안 넘어가는 느낌이 있다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">매핵기(梅核氣): 역류성 위장 독소가 식도와 인후부를 압박하는 현상</text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 392)">
        <rect x="0" y="0" width="860" height="85" rx="14" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="22" width="40" height="40" rx="8" fill="#dcfce7" />
        <text x="45" y="49" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d" text-anchor="middle">✓</text>
        <text x="85" y="38" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f2922">5. 잦은 트림, 헛구역질, 복부 가스 팽만으로 바지가 늘 갑갑하다</text>
        <text x="85" y="63" font-family="${fontFamilies}" font-size="14" fill="#64748b">위장 내 유독 가스 정체 및 연동운동 부전으로 인한 복압 상승</text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">
        💡 위장 근육층의 담적을 배출하면 소화뿐 아니라 전신 증상이 함께 치유됩니다.
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
      <stop offset="0%" stop-color="#14281d" />
      <stop offset="100%" stop-color="#1e3a2b" />
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
        POINT 03. 1:1 맞춤 한방치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      해아림 3단계 담적 배출 &amp; 뇌-장 복원
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#15803d">
      굳은 위장을 따뜻하게 녹이고 자율신경 연동운동을 정상화
    </text>

    <!-- 3 Treatment Boxes -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#dcfce7" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          1단계: 온중소적(溫中消積) 1:1 체질 맞춤 한약
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 반하, 후박, 지실, 향부자 등 굳어진 담적 독소를 분해·배출하는 처방
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 위장 점막 혈류를 개선하여 정체된 위장 연동운동을 스스로 회복
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#dcfce7" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🔥</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          2단계: 복부 심부 온열 &amp; 중완혈 약침 치료
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 위장의 모혈(募穴)인 중완, 거궐혈에 순수 한약재 정제 약침 직접 투여
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 심부 온열 자극으로 차갑게 얼어붙은 복부 근막과 평활근 이완
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#dcfce7" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🧠</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          3단계: 뇌-장축 미주신경 추나 &amp; 자율신경 훈련
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 상경추와 흉추를 교정하여 뇌에서 위장으로 내려가는 미주신경 활성화
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#4a5f57">
          • 스트레스 시 위장이 멈추지 않는 튼튼한 뇌-장 항상성 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">
        💡 위장 소화 기능뿐만 아니라 두통, 어지럼증, 피로감이 함께 호전됩니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (생활 관리 루틴 카드 - 약선차 제외)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#14281d" />
      <stop offset="100%" stop-color="#1e3a2b" />
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
        POINT 04. 생활 속 실천팁
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922" letter-spacing="-1">
      담적을 없애는 생활 속 3대 위장 루틴
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#15803d">
      물리적이고 행동학적인 루틴으로 위장 근육의 자생력을 키우세요.
    </text>

    <!-- 3 Lifestyle Tips (Zero Tea) -->
    <g transform="translate(50, 215)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#dcfce7" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🚶</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 식후 30분 바로 눕지 말고 가벼운 평지 산책
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 식후 20~30분간 가볍게 걸으면 중력과 다리 근육 수축이 위장 연동운동 촉진
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 위장 내 음식물 정체 시간을 줄여 부패 가스 발생 원천 차단
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#dcfce7" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🍽️</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 한 입에 30번 꼭꼭 씹기 &amp; 식사 중 찬물 제한
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 침 속의 프티알린 효소와 음식을 완벽히 섞어 위장의 소화 부담을 50% 경감
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 식사 중 찬물이나 다량의 국물은 위산과 소화효소를 희석시키므로 최소화
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#dcfce7" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🤲</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 취침 전 복부 시계방향 마사지 &amp; 4-7-8 호흡
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 배꼽 주변을 손바닥으로 따뜻하게 시계방향으로 5분간 둥글게 마사지
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 횡격막 복식호흡으로 위장 평활근을 부드럽게 이완시키고 깊은 숙면 유도
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#15803d" text-anchor="middle">
        💡 올바른 식습관과 맞춤 한방 치료가 함께할 때 위장은 다시 편안해집니다.
      </text>
    </g>
  </g>
</svg>`;
}

async function renderCard(svgStr, filename) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1080 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  for (const dir of targetDirs) {
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, pngBuffer);
    console.log(`Saved: ${filePath}`);
  }
}

async function run() {
  console.log('Rendering Ganseok Damjeok Dyspepsia Card Images...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1(), '02_point1_cause.jpg');
  await renderCard(generatePoint2(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
