import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/gyeyang-jakjeon-autonomic-sweat',
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
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#8b5cf6" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">⚡ 자율신경실조증 · 상열하한 · 식은땀</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#eef2ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#4338ca">
        얼굴은 불타듯 덥고 식은땀 나는데 발끝은 얼음장? 검사상 정상인 이유
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      계양구 작전동 자율신경실조증 · 상열하한 한약
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#6366f1">
      수승화강(水昇火降) 붕괴 회복 · 교감신경 안정 &amp; 3단계 맞춤 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌡️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 3대 오해</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">단순 갱년기·다한증이 아닌</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#6366f1">자율신경 조절 중추의 고장</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">❄️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">상열하한(上熱下寒) 불균형</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#6366f1">말초혈관 수축과 뇌열 울체</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">수승화강 맞춤한약 &amp; 추나</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#6366f1">3단계 신경회복 로드맵</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eef2ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 실전 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">취침 전 족욕 &amp; 4-7-8 호흡</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#6366f1">가정 내 3대 행동 루틴</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (작전동에서 인천 1호선 지하철 10분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#6366f1" text-anchor="middle">
      "신경성이라는 말에 좌절하지 마세요. 무너진 자율신경의 시소를 다시 맞춰드립니다."
    </text>
  </g>
</svg>`;
}

// 2. POINT 01 (3대 오해 및 발병 기전 카드)
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
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#eef2ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#6366f1" text-anchor="middle">
        CHAPTER 01. 흔한 3대 오해
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "검사상 다 정상인데 왜 이럴까요?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#6366f1">
      자율신경계 온도 조절 장치(시소)의 고장
    </text>

    <!-- 3 Misconceptions Box -->
    <g transform="translate(50, 215)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="125" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="30" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">
          ❌ 오해 1: "단순 갱년기 열감이나 체질적 다한증이다?"
        </text>
        <text x="30" y="70" font-family="${fontFamilies}" font-size="15" fill="#334155">
          호르몬 수치가 정상이어도 스트레스와 과로로 교감신경이 과열되면 땀샘과 혈관이 제멋대로 폭주합니다.
        </text>
        <text x="30" y="95" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#6366f1">
          ➔ 방치할수록 어지럼증, 가슴두근거림, 만성 불면증으로 악화됩니다.
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="860" height="125" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="30" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">
          ❌ 오해 2: "상체에 열이 나니 찬물과 에어컨으로 식히면 된다?"
        </text>
        <text x="30" y="70" font-family="${fontFamilies}" font-size="15" fill="#334155">
          찬 음료는 위장과 하초를 더욱 차갑게 얼려, 열을 위로 솟구치게 만드는 '상열하한'을 심화시킵니다.
        </text>
        <text x="30" y="95" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#6366f1">
          ➔ 겉은 덥고 속은 얼어붙는 악순환이 반복됩니다.
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 280)">
        <rect x="0" y="0" width="860" height="125" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="30" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">
          ❌ 오해 3: "신경안정제만 먹으면 저절로 낫는다?"
        </text>
        <text x="30" y="70" font-family="${fontFamilies}" font-size="15" fill="#334155">
          대증적인 신경 억제제는 뇌의 조절력을 일시 마비시킬 뿐, 무너진 인체 수승화강 순환을 고치지 못합니다.
        </text>
        <text x="30" y="95" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#6366f1">
          ➔ 약효가 떨어지면 반동성 식은땀과 열감이 재발합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="100" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="42" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "자율신경은 인체의 자동 온도조절기(보일러)입니다."
      </text>
      <text x="430" y="74" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#6366f1" text-anchor="middle">
        교감-부교감신경의 시소 균형을 맞추어야 땀과 열감이 제자리를 찾습니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 자율신경실조증 클리닉
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
      <rect x="0" y="0" width="260" height="40" rx="20" fill="#eef2ff" />
      <text x="130" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#6366f1" text-anchor="middle">
        CHAPTER 02. 3대 심층 원인
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      상열하한 &amp; 식은땀의 3대 심층 병리
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#6366f1">
      머리는 뜨겁고 발은 차가운 수승화강(水昇火降) 순환 단절의 진실
    </text>

    <!-- 3 Root Cause Boxes -->
    <g transform="translate(50, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🩸</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 교감신경 과항진 &amp; 혈관 수축·이완 조절 실패
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 머리·얼굴 혈관은 비정상적으로 확장되어 안면홍조와 열감 폭발
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 사지 말초 혈관은 극도로 수축하여 손발이 얼음장처럼 차갑고 저림
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💧</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 수승화강(水昇火降) 단절 &amp; 인체 냉각수 고갈
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 만성 피로로 신장의 음혈·진액(냉각수)이 마르며 심화(心火)가 위로만 치솟음
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 상하 기혈 순환로가 막혀 겉은 덥고 속(장부와 아랫배)은 냉각되는 병리 고착
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#eef2ff" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🌙</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 도한(盜汗) : 수면 중 쏟아지는 자율신경성 식은땀
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 밤에 부교감신경이 이완되지 못하고 뇌신경이 흥분하여 땀을 도둑처럼 분출
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 수면 중 진액이 소모되면서 자고 일어나도 개운하지 않고 만성 탈진 지속
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">
        💡 3대 심층 원인을 동시에 다스려야 상하 혈류와 체온의 항상성이 복원됩니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (3단계 회복 로드맵 카드)
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
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#eef2ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#6366f1" text-anchor="middle">
        CHAPTER 03. 3단계 회복치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      해아림 3단계 수승화강 회복 솔루션
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#6366f1">
      상체 열은 맑게 내리고, 하체 냉기는 따뜻하게 데워 자율신경 정상화
    </text>

    <!-- 3 Treatment Boxes -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🔥</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          1단계: 청열안신(淸熱安神) - 급성 열감 &amp; 식은땀 진정
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 황련, 시호, 치자 등으로 심장과 뇌로 치솟은 급성 화기(火氣) 소통
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 폭주하는 교감신경을 급속 냉각하여 야간 식은땀과 안면홍조 즉각 진정
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚖️</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          2단계: 수승화강(水昇火降) - 자율신경 시소 밸런스 재건
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 지백지황탕, 육미지황탕으로 신장 음혈(음수)을 보충하여 하체 보온
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 상하 혈류 순환로를 개통하여 손발 냉증과 상체 열감 동시 해소
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🎯</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          3단계: 두개천골 추나 &amp; 신경조절 약침 훈련
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 후두하근과 상경추를 교정하여 뇌간 뇌혈류 및 미주신경 활성 촉진
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 부교감신경 이완력을 극대화하여 재발 없는 자생적 항상성 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">
        💡 양약 복용 중단 없이 안전하게 병행 치료하며 점진적으로 자생력을 되찾습니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (환자 및 가족 실천 수칙 카드 - 약선차 제외)
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
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#eef2ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#6366f1" text-anchor="middle">
        CHAPTER 04. 실전 행동 수칙
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      자율신경을 안정시키는 3대 행동 루틴
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#6366f1">
      상체 열은 내리고 하체는 따뜻하게 순환시키는 생활 속 물리적 습관
    </text>

    <!-- 3 Lifestyle Tips (Zero Tea) -->
    <g transform="translate(50, 215)">
      <!-- Tip 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🛁</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 취침 90분 전 15분 따뜻한 족욕 (수승화강 물리적 유도)
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 39~40도의 따뜻한 물에 복사뼈 위까지 담가 발끝 말초 혈관을 확장
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 머리에 몰린 혈류를 하체로 끌어내려 야간 식은땀과 입면장애 예방
        </text>
      </g>

      <!-- Tip 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🫁</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 열감이 솟구칠 때 4-7-8 횡격막 이완 호흡법
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 코로 4초 들이마시고, 7초 멈추고, 입으로 8초간 길게 내쉬는 복식 호흡
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 과열된 교감신경 흥분을 3분 안에 가라앉히고 부교감신경을 즉각 활성화
        </text>
      </g>

      <!-- Tip 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eef2ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🤝</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 찬물·얼음물 섭취 중단 &amp; 가족의 공감 지지
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 위장을 차갑게 얼리는 냉수 대신 체온과 유사한 미온수를 수시로 음용
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 가족은 "꾀병이다, 마음 편히 먹어라" 다그치지 말고 신체적 고통을 공감
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eef2ff" stroke="#c7d2fe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4338ca" text-anchor="middle">
        💡 올바른 생활 관리와 체질 맞춤 치료가 결합될 때 완치의 길이 열립니다.
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
  console.log('Rendering Gyeyang Jakjeon Autonomic Sweat Card Images...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1(), '02_point1_cause.jpg');
  await renderCard(generatePoint2(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
