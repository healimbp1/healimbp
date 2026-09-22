import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/gyesan-insomnia-early-awakening',
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
      <stop offset="0%" stop-color="#091428" />
      <stop offset="50%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#050a14" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌙 불면증 · 새벽 4시 조기각성 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#eef2ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4338ca">
        알람도 안 울렸는데 새벽 3~4시면 눈이 번쩍? 수면유지장애의 진실
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      계산역 불면증 · 새벽 4시 강제기상 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#4f46e5">
      코르티솔 조기 분비 차단 · 뇌파 안정 &amp; 서파수면 회복 맞춤 한약
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">⏰</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 3대 오해</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">나이 탓이 아닌 신경계 이상</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">조기각성(EMA) 수면장애</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">스트레스 호르몬 조기 스파이크</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">편도체 과각성 &amp; 간열 울체</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">청간안신탕 &amp; 서파수면 복원</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">3단계 뇌자생력 로드맵</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🛋️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 수면 행동</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">20분 탈침대 &amp; 아침 햇볕</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#4f46e5">생체시계 재설정 루틴</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (계산역에서 인천 1호선 지하철 5~7분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4f46e5" text-anchor="middle">
      "새벽에 눈떠도 다시 잠들 수 있도록, 뇌의 깊은 수면 파장을 되찾아 드립니다."
    </text>
  </g>
</svg>`;
}

// 2. POINT 01 (3대 오해 및 조기각성 기전 카드)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091428" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#eef2ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4f46e5" text-anchor="middle">
        CHAPTER 01. 환자의 3대 오해
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "새벽 4시에 눈이 떠지는 것은..."
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4f46e5">
      나이 탓이 아닌 '조기각성(Early Morning Awakening)' 수면장애
    </text>

    <!-- 3 Misconceptions Box -->
    <g transform="translate(50, 215)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="125" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="30" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">
          ❌ 오해 1: "나이가 들어서 아침잠이 줄어든 자연스러운 현상이다?"
        </text>
        <text x="30" y="70" font-family="${fontFamilies}" font-size="15" fill="#334155">
          아침에 개운하게 일어나는 것과 달리, 새벽에 심장이 뛰며 불안하게 깨어 다시 못 자는 것은 명백한 병리입니다.
        </text>
        <text x="30" y="95" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#4f46e5">
          ➔ 방치하면 만성 피로, 뇌기능 저하(브레인포그), 우울증으로 이어집니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="860" height="125" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="30" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">
          ❌ 오해 2: "다시 잠들기 위해 침대에서 억지로 눈을 감고 버틴다?"
        </text>
        <text x="30" y="70" font-family="${fontFamilies}" font-size="15" fill="#334155">
          침대에서 뒤척이며 시계를 볼수록 뇌는 '침대 = 고통과 각성의 공간'으로 조건반사를 학습합니다.
        </text>
        <text x="30" y="95" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#4f46e5">
          ➔ 침대에만 누우면 뇌가 더 또렷해지는 악순환에 빠집니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 280)">
        <rect x="0" y="0" width="860" height="125" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="30" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">
          ❌ 오해 3: "수면제 용량을 늘리거나 술(야주) 한잔 마시고 잔다?"
        </text>
        <text x="30" y="70" font-family="${fontFamilies}" font-size="15" fill="#334155">
          알코올과 수면제는 깊은 서파수면을 파괴하고 3~4시간 뒤 간에서 분해되며 반동성 조기각성을 촉발합니다.
        </text>
        <text x="30" y="95" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#4f46e5">
          ➔ 얕은 잠만 반복되어 아침에 머리가 무겁고 탈진 상태가 됩니다.
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "수면의 양보다 중요한 것은 '깊은 수면 유지력'입니다."
      </text>
      <text x="430" y="74" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4f46e5" text-anchor="middle">
        새벽에 과열되는 뇌신경 흥분을 식혀주어야 아침까지 끊김 없이 숙면합니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 수면장애 클리닉
    </text>
  </g>
</svg>`;
}

// 3. POINT 02 (CHAPTER 02: 왜 안 나았을까? 3대 심층 원인 카드)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091428" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="260" height="40" rx="20" fill="#eef2ff" />
      <text x="130" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4f46e5" text-anchor="middle">
        CHAPTER 02. 3대 심층 원인
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      새벽 4시 강제 각성의 3대 심층 병리
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#4f46e5">
      단순 수면 부족이 아닌 신경호르몬·장부열·뇌파의 복합 불균형
    </text>

    <!-- 3 Root Cause Boxes -->
    <g transform="translate(50, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚡</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">
          1. 코르티솔(스트레스 호르몬)의 비정상적 조기 스파이크
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 아침 7시에 나와야 할 각성 호르몬이 새벽 3~4시부터 폭발적으로 치솟음
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 심장을 뛰게 만들고 편도체를 과자극하여 공포·불안감과 함께 뇌를 강제 기상시킴
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🔥</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f172a">
          2. 간열(肝熱) 울체 &amp; 심담허겁(心膽虛怯)의 한방 병리
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 새벽 1~3시 간(肝) 경락 해독 시간에 피로와 화기(火氣)를 식히지 못함
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌로 뿜어지는 울열이 얕은 잠을 깨우고 가슴 답답함과 식은땀을 유발
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌊</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 깊은 3단계 서파수면(N3) 결손 &amp; 뇌간 필터링 피로
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 수면 후반부 깊은 델타파 수면이 소실되어 외부 미세 자극에도 뇌가 즉시 각성
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌 독소(베타 아밀로이드) 청소가 중단되어 기상 시 극심한 두통과 브레인포그 발생
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">
        💡 3대 심층 원인을 동시에 다스려야 아침 알람까지 끊김 없는 숙면이 가능합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (3단계 한방 치료 로드맵 카드)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091428" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#eef2ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4f46e5" text-anchor="middle">
        CHAPTER 03. 3단계 회복치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      해아림 깊은 수면 3단계 복원 솔루션
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#4f46e5">
      약물 의존 없이, 뇌 스스로 밤새 깊은 수면 파장을 유지하도록 회복
    </text>

    <!-- 3 Treatment Boxes -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌙</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          1단계: 청간안신(淸肝安神) - 새벽 코르티솔 스파이크 차단
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 시호, 황련, 산조인 등으로 간열(肝熱)과 심포 열을 내려 새벽 뇌 각성 방지
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 심장 두근거림과 야간 불안을 진정시켜 4시 강제 기상 패턴 즉각 차단
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌊</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          2단계: 서파수면(Slow-Wave) 복원 &amp; 뇌척수액 청소
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 귀비탕, 천왕보심단으로 심담 기혈을 보충하여 깊은 3단계 서파수면 유도
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 수면 중 뇌 독소(베타 아밀로이드) 배출을 촉진하여 기상 시 맑은 뇌 회복
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🎯</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f2922">
          3단계: 두개천골 추나 &amp; 뇌파 뉴로피드백 훈련
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 상부 경추 정렬 교정으로 뇌간 자율신경 중추 혈류 공급 정상화
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 델타파·세타파 수면 리듬을 강화하여 수면 유지력과 자생적 완치 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">
        💡 수면제 복용 중에도 병행 가능하며, 자연스럽게 수면제 감약(테이퍼링)을 유도합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (수면 행동 루틴 카드 - 약선차 제외)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091428" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#eef2ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#4f46e5" text-anchor="middle">
        CHAPTER 04. 실전 수면수칙
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      새벽 조기각성을 끊어내는 3대 행동 루틴
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#4f46e5">
      침대와 뇌의 각성 연결고리를 끊고 생체 서카디언 리듬을 리셋하세요.
    </text>

    <!-- 3 Lifestyle Tips (Zero Tea) -->
    <g transform="translate(50, 215)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🚪</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 20분 이상 잠들지 못하면 침대 밖으로 탈출하기
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 시계를 보지 말고 어두운 거실 소파로 이동하여 가벼운 책 읽기나 명상
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 졸음이 다시 쏟아질 때만 침대로 돌아가 '침대=각성' 조건반사 차단
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">☀️</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 기상 직후 15분 아침 햇볕 쬐기 (생체시계 고정)
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 망막을 통해 자연광을 흡수하여 세로토닌 합성 및 생체시계 타이머 작동
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 햇볕 쬔 시점으로부터 정확히 15시간 뒤 밤 멜라토닌 분비 예약
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🛁</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 취침 90분 전 족욕 &amp; 4-7-8 이완 복식호흡
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 40도 온수에 15분 족욕 후 체온이 서서히 떨어질 때 졸음 유발
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 잠들기 전 4-7-8 호흡으로 심박수와 교감신경을 안정시켜 깊은 잠 유도
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">
        💡 수면 환경과 행동 루틴을 바로잡는 것이 재발 없는 완치의 지름길입니다.
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
  console.log('Rendering Gyesan Insomnia Card Images...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1(), '02_point1_cause.jpg');
  await renderCard(generatePoint2(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
