import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/dongam-panic-attack-palpitation',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (B패턴 메인 썸네일 요약 카드)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#450a0a" />
      <stop offset="50%" stop-color="#7f1d1d" />
      <stop offset="100%" stop-color="#1c0404" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#f87171" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">⚡ 공황발작 · 심장 두근거림 · 심전도 정상 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="640" height="40" rx="8" fill="#fef2f2" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#b91c1c">
        응급실 심전도 정상인데 죽을 것 같은 공포? 뇌 화재경보기 오류 치료
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      동암역 공황발작 · 가슴 두근거림 한의원
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#dc2626">
      편도체 과흥분 진정 · 교감신경 리셋 3단계 회복 로드맵
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fef2f2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">⚠️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 3대 오해</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">심장마비 착각과 의지력의 함정</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">참을수록 폭발하는 예기불안</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fef2f2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🧠</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 심층 원인</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">편도체 오작동과 과호흡</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">심담허겁 &amp; 뇌 화재경보기 오류</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fef2f2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">청심온담탕 &amp; 뉴로피드백</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">3단계 자율신경 안정 솔루션</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fef2f2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 행동 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">4-7-8 복식호흡 &amp; 감각 접지</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">응급 발작 즉각 제어 루틴</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (동암역에서 1호선 지하철 2정거장 / 5분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626" text-anchor="middle">
      "심장이 멎지 않습니다. 과열된 편도체의 잘못된 화재경보기를 끄면 안전해집니다."
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
      <stop offset="0%" stop-color="#450a0a" />
      <stop offset="100%" stop-color="#1c0404" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="280" height="40" rx="20" fill="#fef2f2" />
      <text x="140" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 01. 3대 오해와 함정
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      공황발작 환자가 겪는 3대 치명적 오해
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626">
      심장마비 공포와 예기불안의 악순환을 키우는 잘못된 상식
    </text>

    <!-- 3 Misconception Boxes -->
    <g transform="translate(50, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fee2e2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">❌</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 오해: "심장이 터질 것 같으니 심장마비로 죽을 것이다?"
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 진실: 공황발작은 교감신경의 일시적 과흥분일 뿐 심장 질환이 아닙니다.
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 발작으로 인해 실제로 심장이 멈추거나 질식사하지 않는다는 팩트 인지가 필수
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fee2e2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚠️</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 오해: "마음이 약해서 그러니 정신력으로 꾹 참으면 된다?"
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 진실: 자율신경계는 의지로 조절되지 않는 불수의신경입니다.
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 억지로 참으려 할수록 뇌의 공포 중추가 더 자극되어 발작 주기가 짧아집니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fef2f2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">💡</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 오해: "평생 신경안정제 약을 달고 살아야 한다?"
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 진실: 편도체 흥분을 진정시키고 심장 뇌신경 억제력을 길러주면 완치 가능
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 한방 치료를 통해 양약 의존 없이 스스로 발작을 통제할 수 있습니다.
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#fef2f2" stroke="#fca5a5" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">
        💡 공황발작은 죽을병이 아니라, 과열된 뇌신경 화재경보기의 오작동입니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 공황장애 &amp; 자율신경 클리닉
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
      <stop offset="0%" stop-color="#450a0a" />
      <stop offset="100%" stop-color="#1c0404" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="280" height="40" rx="20" fill="#fef2f2" />
      <text x="140" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 02. 3대 심층 원인
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      심전도 정상인데 심장이 뛰는 3대 심층 병리
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#dc2626">
      뇌의 공포 중추와 자율신경계가 만들어내는 생리학적 과각성 기전
    </text>

    <!-- 3 Root Cause Boxes -->
    <g transform="translate(50, 215)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fef2f2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🚨</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 편도체(Amygdala) 오작동 &amp; 가짜 화재경보 발령
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 실제 생명의 위협이 없는데도 편도체가 '비상사태'로 착각하여 경보 울림
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 아드레날린이 대량 분비되어 심박수를 분당 120~150회로 급상승시킴
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fef2f2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🫁</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 얕은 과호흡(Hyperventilation) &amp; 호흡성 알칼리증
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 숨이 안 쉬어진다는 공포로 가슴으로 헐떡거리며 이산화탄소 과다 배출
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 혈액 pH가 급상승하여 손발 저림, 어지럼증, 질식감 등의 신체화 악화
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fef2f2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">⚡</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. 심담허겁(心膽虛怯) &amp; 예기불안의 조건반사화
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 만성 피로와 스트레스로 심장과 담의 기운이 약해져 사소한 자극에도 놀람
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • '또 발작이 오면 어쩌지'라는 걱정 자체가 교감신경을 자극하는 악순환 형성
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#fef2f2" stroke="#fca5a5" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">
        💡 3대 심층 원인을 다스려 편도체의 민감도를 낮추어야 공황발작이 영구 소실됩니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 공황장애 &amp; 자율신경 클리닉
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
      <stop offset="0%" stop-color="#450a0a" />
      <stop offset="100%" stop-color="#1c0404" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="300" height="40" rx="20" fill="#fef2f2" />
      <text x="150" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 03. 3단계 회복 로드맵
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      공황발작 종결 &amp; 뇌 자생력 복원 로드맵
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#dc2626">
      편도체 진정 · 교감신경 리셋 해아림 1:1 맞춤 한방 치료
    </text>

    <!-- 3 Roadmap Steps -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fef2f2" />
        <text x="70" y="60" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">STEP 01</text>
        <text x="70" y="85" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">진정기</text>
        
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1단계: 청심온담(淸心溫膽) 맞춤 한약 &amp; 급성 발작 제어
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 청심온담탕·귀비탕·사역산: 심장의 화기를 식히고 담력을 튼튼히 보강
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 급격한 심장 두근거림, 가슴 답답함, 과호흡 빈도를 70% 이상 신속 감소
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fef2f2" />
        <text x="70" y="60" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">STEP 02</text>
        <text x="70" y="85" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">강화기</text>
        
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2단계: 뇌파 뉴로피드백 &amp; 자율신경 약침 요법
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 불안 시 폭발하는 고베타파를 억제하고 안정 알파파를 스스로 유도하는 뇌 훈련
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 순수 한약재 자율신경 약침으로 흉골 및 경추부의 교감신경 과열 차단
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fef2f2" />
        <text x="70" y="60" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">STEP 03</text>
        <text x="70" y="85" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">자립기</text>
        
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3단계: 편도체 안정화 완성 &amp; 예기불안 완전 극복
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 지하철, 터널, 엘리베이터 등 밀폐 공간에서도 공포 없이 편안함 유지
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 양약 감약 및 단약 후에도 뇌 스스로 자율신경 항상성을 유지하는 완치 도달
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#fef2f2" stroke="#fca5a5" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">
        💡 3단계 맞춤 치료로 편도체 브레이크를 되살리면 공황발작은 완전히 멈춥니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 공황장애 &amp; 자율신경 클리닉
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
      <stop offset="0%" stop-color="#450a0a" />
      <stop offset="100%" stop-color="#1c0404" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="300" height="40" rx="20" fill="#fef2f2" />
      <text x="150" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 04. 환자·가족 행동 수칙
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      공황발작 순간 즉시 진정시키는 3대 응급 수칙
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626">
      과호흡을 막고 뇌를 이완 모드로 전환하는 실전 루틴 (약선차 제외)
    </text>

    <!-- 3 Action Rules -->
    <g transform="translate(50, 215)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fef2f2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🫁</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          1. 4-7-8 이완 복식호흡 (과호흡 즉각 방어)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 4초 코로 흡기 - 7초 숨 멈춤 - 8초 입으로 길게 호기 (5회 반복)
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 횡격막을 자극해 부교감(미주신경)을 켜고 치솟는 맥박을 물리적으로 하강
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fef2f2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">👁️</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          2. 5-4-3-2-1 오감 그라운딩 (Grounding 접지 훈련)
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 보이는 것 5개, 만져지는 것 4개, 들리는 소리 3개, 냄새 2개, 맛 1개 찾기
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 공포에 빠진 뇌의 주의를 '지금 여기의 현실'로 강제 착륙시킵니다.
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="135" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="22" width="90" height="90" rx="12" fill="#fef2f2" />
        <text x="70" y="75" font-family="${fontFamilies}" font-size="34" text-anchor="middle">🛡️</text>
        <text x="135" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
          3. '10분 뒤면 반드시 가라앉는다' 팩트 셀프토크
        </text>
        <text x="135" y="75" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 공황발작은 10~20분에 피크에 달한 뒤 반드시 자연 소실되는 생리 반응
        </text>
        <text x="135" y="100" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • "불편할 뿐 위험하지 않다. 나는 안전하다"는 긍정 확언으로 편도체 안심
        </text>
      </g>
    </g>

    <!-- Bottom Result Card -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#fef2f2" stroke="#fca5a5" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#b91c1c" text-anchor="middle">
        💡 올바른 호흡과 한방 치료가 함께할 때 공황발작의 공포에서 완전히 벗어납니다.
      </text>
    </g>

    <text x="480" y="830" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 공황장애 &amp; 자율신경 클리닉
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
  console.log('Rendering Dongam Panic Attack Card Images (B-Pattern)...');
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
