import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-yeokgok-insomnia-awakening',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (A타입 정석 가이드형)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="50%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#0a1128" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌙 수면장애 &amp; 자율신경 밸런스 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="580" height="40" rx="8" fill="#eff6ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1d4ed8">
        새벽 2~3시만 되면 눈이 번쩍 떠지고 못 잘 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="43" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      부천 역곡 자주 깨는 수면유지장애 불면증 치료법
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#475569" letter-spacing="-0.5">
      뇌 각성 과열 · 심담허겁 · 델타파 깊은 숙면 유도 한방 가이드
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#eff6ff" />
        <circle cx="67" cy="67" r="26" fill="#2563eb" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#1e3a8a">
          입면장애 vs 수면유지장애의 명확한 차이
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          잠들기는 하나 2~3시간 만에 깨어 밤을 지새우는 뇌 신경계 각성 과열 상태
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#eff6ff" />
        <circle cx="67" cy="67" r="26" fill="#2563eb" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#1e3a8a">
          간화상염(肝火上炎)과 심신불교(心腎不交) 해소
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          심장과 간의 허열을 내리고 신장의 수기(水氣)를 채워 숙면 회로를 복원
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#eff6ff" />
        <circle cx="67" cy="67" r="26" fill="#2563eb" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#1e3a8a">
          수면제 내성·의존 없는 1:1 맞춤 자생력 치료
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          맞춤 한약 · 침구치료 · 뉴로피드백 훈련으로 아침이 개운한 수면 구조 회복
        </text>
      </g>
    </g>

    <!-- Bottom Clinic Info Bar -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="72" rx="16" fill="#0b132b" />
      <text x="40" y="44" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#93c5fd">
        해아림한의원 인천부평점
      </text>
      <text x="820" y="44" font-family="${fontFamilies}" font-size="17" fill="#cbd5e1" text-anchor="end">
        한방침구과 전문의 권형근 대표원장 1:1 직접 진료
      </text>
    </g>
  </g>
</svg>`;
}

// 2. POINT 01: 원인기전 (수면유지장애의 실체)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="50%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#0a1128" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">💡 POINT 01. 수면유지장애 원인기전</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="280" height="36" rx="8" fill="#eff6ff" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#1d4ed8">
        🧠 뇌신경계 &amp; 한의학적 기전 해설
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      잠은 드는데 왜 새벽 2~3시에 깰까요?
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      수면을 유지해 주는 뇌 델타파(깊은 수면) 억제 회로가 조기 각성된 결과입니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- 3 Cause Mechanisms -->
    <g transform="translate(55, 230)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dbeafe" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">01</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#1e3a8a">
          뇌 시상하부 각성 중추(Orexin)의 비정상적 조기 과열
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 수면 후반부로 가면서 멜라토닌 분비가 유지되지 못하고 교감신경이 조기 점화
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 얕은 수면(REM) 단계에서 작은 소리나 호흡 변화에도 번쩍 깨어 각성 상태 돌입
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dbeafe" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">02</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#1e3a8a">
          간화상염(肝火上炎)과 심담허겁(心膽虛怯)
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 직장·대인 스트레스로 간의 열기(肝火)가 치솟아 새벽 1~3시(간경맥 시간대)에 각성
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 심장과 담이 허약해져 가슴 두근거림, 악몽, 가위눌림과 함께 깜짝 놀라며 깸
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dbeafe" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">03</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#1e3a8a">
          '안 자면 내일 망한다'는 수면 강박 악순환
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 깬 순간 시계를 확인하고 "벌써 3시네, 4시간밖에 못 자네"라며 초조함 폭발
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 스트레스 호르몬(코르티솔)이 솟구쳐 남은 새벽을 뜬눈으로 새우는 패턴 고착
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0b132b" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#93c5fd" text-anchor="middle">
        💡 수면유지장애는 수면유도제가 아닌 '수면 유지 뇌파 복원'이 해답입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. POINT 02: 자가진단 체크리스트
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="50%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#0a1128" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">📋 POINT 02. 수면유지장애 자가진단</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="36" rx="8" fill="#eff6ff" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#1d4ed8">
        ✓ 나의 수면 건강 자가 체크
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      수면유지장애 위험도 자가진단 7문항
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      3개 이상 해당된다면 수면 뇌파 밸런스 회복 치료가 필요한 상태입니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- 7 Checklist Items -->
    <g transform="translate(55, 230)">
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dbeafe" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">1. 잠든 후 2~3시간 만에 깨어나며, 하룻밤에 2회 이상 자주 깬다.</text>
      </g>

      <g transform="translate(0, 75)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dbeafe" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">2. 새벽에 깬 뒤 다시 잠드는 데 30분~1시간 이상 소요되거나 못 잔다.</text>
      </g>

      <g transform="translate(0, 150)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dbeafe" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">3. 깰 때 가슴이 두근거리거나 식은땀, 불안감이 엄습한다.</text>
      </g>

      <g transform="translate(0, 225)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dbeafe" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">4. 밤새 꿈을 생생하게 많이 꾸어 자고 일어나도 머리가 무겁다.</text>
      </g>

      <g transform="translate(0, 300)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dbeafe" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">5. 알람이 울리기 훨씬 전(새벽 4~5시)에 눈이 떠지고 다시 잠이 안 온다.</text>
      </g>

      <g transform="translate(0, 375)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dbeafe" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">6. 낮 동안 극심한 피로, 집중력 저하, 두통, 어지럼증을 겪는다.</text>
      </g>

      <g transform="translate(0, 450)">
        <rect x="0" y="0" width="860" height="65" rx="14" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="18" y="14" width="36" height="36" rx="8" fill="#dbeafe" />
        <text x="36" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1d4ed8" text-anchor="middle">✓</text>
        <text x="70" y="40" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#1e293b">7. 수면유도제를 복용해도 새벽에 깨는 증상이 지속되거나 내성이 생긴다.</text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#eff6ff" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#1d4ed8" text-anchor="middle">
        📊 3개 이상 체크 시, 뇌파 및 자율신경계 정밀 검사를 권장합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03: 1:1 맞춤 치료법
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="50%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#0a1128" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">✨ POINT 03. 1:1 맞춤 한방 치료 솔루션</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="310" height="36" rx="8" fill="#eff6ff" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#1d4ed8">
        🏥 해아림 4-Step 델타파 숙면 프로그램
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      수면제 없이 스스로 통잠 자는 뇌 자생력
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      체질별 한약과 뇌신경 침구치료, 두뇌 훈련으로 수면 리듬을 정상화합니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- 4 Treatment Blocks -->
    <g transform="translate(55, 225)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#2563eb" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">1:1 맞춤 청열안신(淸熱安神) 한약 처방</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">산조인탕, 귀비탕, 천왕보심단 가감으로 간화(肝火)를 내리고 심신(心神)을 안정</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 130)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#1d4ed8" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">정밀 뇌신경 침구 &amp; 안심 약침 치료</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">백회(百會), 신문(神門), 안면(安眠), 삼음교(三陰交) 자침으로 야간 뇌 각성 진정</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 260)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#0284c7" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">경추·두개천골 이완 추나요법</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">긴장된 후두하근과 경추를 교정하여 뇌 척수액 순환과 뇌간 자율신경 안정 유도</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="118" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="20" y="20" width="45" height="78" rx="10" fill="#0d9488" />
        <text x="42" y="65" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">4</text>
        <text x="85" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">첨단 뉴로피드백 수면 뇌파 훈련</text>
        <text x="85" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">야간 델타파(서파 수면) 진입 훈련을 통해 자주 깨는 수면 조각화 현상을 근본 개선</text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 785)">
      <rect x="0" y="0" width="860" height="50" rx="12" fill="#0b132b" />
      <text x="430" y="32" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#93c5fd" text-anchor="middle">
        🛡️ 식약처 규격 hGMP 안심한약재만 엄선 조제 · 한방침구과 전문의 권형근 대표원장
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04: 생활 속 실천팁 3가지 (약선차 제외)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b132b" />
      <stop offset="50%" stop-color="#1c2541" />
      <stop offset="100%" stop-color="#0a1128" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌿 POINT 04. 통잠을 위한 3대 수면 루틴</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="280" height="36" rx="8" fill="#eff6ff" />
      <text x="20" y="24" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#1d4ed8">
        💡 수면의 질을 높이는 신체·행동 루틴
      </text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1.2">
      새벽 각성을 막는 3가지 실천 행동 요법
    </text>
    <text x="55" y="175" font-family="${fontFamilies}" font-size="22" fill="#475569">
      작은 생활 습관의 변화가 뇌 생체시계를 다시 맞추는 열쇠가 됩니다.
    </text>

    <line x1="55" y1="205" x2="915" y2="205" stroke="#e2e8f0" stroke-width="2" />

    <!-- 3 Self-Care Action Blocks -->
    <g transform="translate(55, 230)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dbeafe" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#1e3a8a">
          루틴 1. 기상 직후 15분 아침 햇볕 쬐기 (생체시계 리셋)
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 아침 햇빛이 눈의 망막을 통해 시교차상핵(SCN)을 자극하여 세로토닌 합성
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 정확히 14~15시간 뒤 밤에 멜라토닌으로 전환되어 새벽 각성을 강력히 차단
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 168)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dbeafe" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#1e3a8a">
          루틴 2. 취침 90분 전 38~40℃ 족욕 &amp; 심부 체온 하강
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 따뜻한 족욕으로 말초 혈관을 확장해 체열을 발산시킨 뒤 90분 후 심부 체온 다운
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 자연스러운 졸음과 함께 깊은 델타파(서파 수면) 수면 유지 시간을 극대화
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 336)">
        <rect x="0" y="0" width="860" height="150" rx="18" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="48" height="48" rx="12" fill="#dbeafe" />
        <text x="49" y="56" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#1d4ed8" text-anchor="middle">✓</text>
        
        <text x="90" y="55" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#1e3a8a">
          루틴 3. 새벽에 깼을 때 '시계 절대 보지 않기' 원칙
        </text>
        <text x="90" y="90" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 시계를 보는 순간 뇌는 시간을 계산하며 교감신경을 급격히 각성시킵니다.
        </text>
        <text x="90" y="118" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 침실에서 시계를 치우고, 눈을 감은 채 4-7-8 이완 호흡으로 누워만 계세요.
        </text>
      </g>
    </g>

    <!-- Bottom Tag Bar -->
    <g transform="translate(55, 775)">
      <rect x="0" y="0" width="860" height="60" rx="14" fill="#0b132b" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#93c5fd" text-anchor="middle">
        🌙 스스로 잠드는 힘을 되찾을 때, 매일 아침 상쾌한 일상이 시작됩니다.
      </text>
    </g>
  </g>
</svg>`;
}

async function renderCard(svgStr, filename) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });
  const pngData = resvg.render().asPng();
  const jpgBuffer = await sharp(pngData).jpeg({ quality: 95 }).toBuffer();

  for (const dir of targetDirs) {
    const fullPath = path.join(dir, filename);
    fs.writeFileSync(fullPath, jpgBuffer);
    console.log(`Saved: ${fullPath}`);
  }
}

async function main() {
  console.log('Rendering 5 A-Type Card News for Bucheon Yeokgok Insomnia Awakening...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

main().catch(console.error);
