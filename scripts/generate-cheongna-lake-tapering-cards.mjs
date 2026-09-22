import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/cheongna-lake-sleeping-pills-tapering',
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
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌙 수면유도제 내성 · 안전한 단약 &amp; 감약 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="640" height="40" rx="8" fill="#eef2ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4338ca">
        수면제 끊고 싶은데 반동성 불면이 두렵다면? 뇌 자생력 회복 로드맵
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      청라 호수공원 수면유도제 내성 · 단약 한의원
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#6366f1">
      GABA 수용체 안정 · 반동성 불면 예방 3단계 테이퍼링(감약) 솔루션
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">💊</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 3대 오해</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">갑작스러운 단약의 역효과</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#6366f1">반동성 불면과 의존성의 함정</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">GABA 수용체 둔화 &amp; 상열</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#6366f1">뇌 자체 수면 조절 기전 마비</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">청심안신탕 &amp; 뉴로피드백</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#6366f1">3단계 안전 감약 테이퍼링</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 행동 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">취침 전 족욕 &amp; 4-7-8 호흡</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#6366f1">가정 내 3대 수면 리셋 루틴</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (청라 호수공원에서 7호선/자가용 15~20분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#6366f1" text-anchor="middle">
      "수면제를 억지로 끊는 것이 아닌, 뇌 스스로 잠들 힘을 길러 안전하게 줄여갑니다."
    </text>
  </g>
</svg>`;
}

// 2. POINT 01 (CHAPTER 01: 3대 오해와 함정 카드)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="280" height="40" rx="20" fill="#eef2ff" />
      <text x="140" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#6366f1" text-anchor="middle">
        CHAPTER 01. 3대 오해와 함정
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      수면유도제 복용 환자가 겪는 3대 함정
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6366f1">
      약 복용을 무작정 중단하거나 방치했을 때 찾아오는 악순환의 진실
    </text>

    <!-- 3 Misconception Boxes -->
    <g transform="translate(50, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fee2e2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">❌</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 오해: "독한 마음먹고 오늘 밤부터 당장 약을 끊겠다?"
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 진실: 준비 없는 단약은 극심한 반동성 불면과 심장 두근거림, 공황을 유발
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 수면 공포가 오히려 더 심해져 결국 이전보다 더 강한 약을 찾게 됩니다.
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fee2e2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚠️</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 오해: "효과가 떨어지면 용량을 2배로 늘리면 된다?"
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 진실: 수용체 내성이 생겨 약을 늘려도 얕은 수면만 늘고 새벽에 깹니다.
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 다음 날 낮 동안 기억력 저하, 어지럼증, 브레인포그 등 부작용만 증폭됩니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💡</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 오해: "한번 시작한 수면제는 평생 못 끊는다?"
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 진실: 뇌 자체의 수면 진정 물질 분비 능력을 회복시키면 끊을 수 있습니다.
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 체계적인 한방 감약(테이퍼링)을 통해 부작용 없이 단약에 도달할 수 있습니다.
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">
        💡 수면제는 억지로 끊는 것이 아니라, 뇌가 스스로 잠들 힘을 길러 자연스럽게 졸업하는 것입니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 수면장애 &amp; 단약 테이퍼링 클리닉
    </text>
  </g>
</svg>`;
}

// 3. POINT 02 (CHAPTER 02: 왜 안 나았을까? 3대 심층 원인 카드 - 3박스 해설)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="280" height="40" rx="20" fill="#eef2ff" />
      <text x="140" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#6366f1" text-anchor="middle">
        CHAPTER 02. 3대 심층 원인
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      수면제 내성과 단약 실패의 3대 심층 병리
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#6366f1">
      수면제 복용 중단 시 뇌신경계에서 일어나는 생리학적 불균형 해설
    </text>

    <!-- 3 Root Cause Boxes -->
    <g transform="translate(50, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🧬</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. GABA 수용체 둔화 &amp; 뇌 브레이크 시스템 마비
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 외부 약물로 수용체를 강제 자극하면 뇌 스스로 분비하는 GABA 활성이 소실
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 약을 중단하는 순간 뇌의 브레이크가 풀리며 폭발적인 각성 상태에 직면
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🔥</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 수승화강(水昇火降) 붕괴 &amp; 뇌열(腦熱) 과열 상태
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 장기간의 수면 장애로 심장과 뇌의 화(火)가 치솟고 신장의 음혈이 바닥남
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 심부체온이 떨어지지 않아 누워도 가슴이 답답하고 머리가 뜨거워 입면 실패
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚡</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 편도체 과활성화 &amp; 야간 각성 공포의 조건화
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • '오늘 밤 약 안 먹으면 또 못 잘 텐데'라는 예기불안이 교감신경을 즉각 자극
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 침대에 눕는 행위 자체가 공포 반응으로 조건반사화되어 맥박이 치솟음
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">
        💡 수용체 회복과 뇌열 진정, 불안 회로 재배선을 동시에 진행해야 단약에 성공합니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 수면장애 &amp; 단약 테이퍼링 클리닉
    </text>
  </g>
</svg>`;
}

// 4. POINT 03 (CHAPTER 03: 3단계 회복 로드맵 카드)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="300" height="40" rx="20" fill="#eef2ff" />
      <text x="150" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#6366f1" text-anchor="middle">
        CHAPTER 03. 3단계 회복 로드맵
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      수면유도제 안전 감약 &amp; 뇌 자생력 복원
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#6366f1">
      반동성 불면을 방지하는 해아림만의 1:1 맞춤 통합 테이퍼링 시스템
    </text>

    <!-- 3 Roadmap Steps -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="60" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">STEP 01</text>
        <text x="70" y="85" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#6366f1" text-anchor="middle">준비기</text>
        
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1단계: 신경 완충기 형성 &amp; 청심안신 한약 병행 (1~4주)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 기존 복용 수면제는 유지하면서, 맞춤 한약으로 뇌신경 억제력과 음혈 보충
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 수면의 질(깊은 델타파 비율)을 먼저 끌어올려 감약할 수 있는 체력 구축
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="60" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">STEP 02</text>
        <text x="70" y="85" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#6366f1" text-anchor="middle">감약기</text>
        
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2단계: 뇌파 뉴로피드백 &amp; 25~50% 미세 테이퍼링 (4~8주)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌파 훈련으로 자율신경을 안정시키며 수면제를 4분의 1~반 알씩 서서히 감량
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 침구·약침 치료로 뇌혈류를 개선하여 반동성 금단 불안을 원천 차단
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="60" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">STEP 03</text>
        <text x="70" y="85" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#6366f1" text-anchor="middle">자립기</text>
        
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3단계: 완전 단약 성공 &amp; 수면 항상성 유지 (8~12주)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 양약 완전 중단 후에도 한약 복용 간격을 격일로 줄여가며 자생력 확인
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 약 없이도 스스로 매일 밤 델타파 깊은 수면에 진입하는 정상 뇌 기능 완성
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">
        💡 3단계 맞춤 로드맵을 거치면 약에 대한 심리적 의존과 반동성 불안 없이 안전하게 단약됩니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 수면장애 &amp; 단약 테이퍼링 클리닉
    </text>
  </g>
</svg>`;
}

// 5. POINT 04 (CHAPTER 04: 환자·가족 3대 행동 수칙 카드)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="300" height="40" rx="20" fill="#eef2ff" />
      <text x="150" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#6366f1" text-anchor="middle">
        CHAPTER 04. 환자·가족 행동 수칙
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      안전한 수면제 단약을 위한 3대 실천 수칙
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6366f1">
      뇌의 자연 수면 생체시계를 다시 켜는 물리적·행동학적 셀프케어
    </text>

    <!-- 3 Action Rules -->
    <g transform="translate(50, 215)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🛁</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 취침 90분 전 40℃ 온수 족욕 (심부체온 하강 유도)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 발끝 말초 혈관을 확장해 체내 열을 방출시킴으로써 수면 최적 온도 형성
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 15~20분간 편안히 족욕 후 잠자리에 들면 자연스러운 졸림이 유도됩니다.
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🫁</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 잠자리 4-7-8 이완 복식호흡 &amp; 스마트폰 침실 격리
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 4초 흡기 - 7초 정지 - 8초 호기를 5회 반복하여 미주신경(부교감) 즉각 활성
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 취침 1시간 전 블루라이트를 전면 차단하여 자연 멜라토닌 분비 촉진
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🕊️</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. '안 자면 어때' 마인드셋 &amp; 20분 자극 조절법
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 눕고 20분 이상 잠이 안 오면 억지로 버티지 말고 침대 밖으로 나와 독서
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • '침대 = 잠자는 곳'이라는 뇌의 긍정적 연합을 다시 회복시킵니다.
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">
        💡 올바른 행동 수칙과 한방 치료가 결합될 때 완벽한 수면 독립이 완성됩니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 수면장애 &amp; 단약 테이퍼링 클리닉
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
  console.log('Rendering Cheongna Lake Sleeping Pills Tapering Card Images (B-Pattern)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1(), '02_point1_cause.jpg');
  await renderCard(generatePoint2(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4(), '05_point4_selfcare.jpg');
  console.log('All 5 B-pattern cards generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
