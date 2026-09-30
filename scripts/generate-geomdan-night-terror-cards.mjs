import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/geomdan-night-terror',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091e3a" />
      <stop offset="50%" stop-color="#14345e" />
      <stop offset="100%" stop-color="#051326" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#60a5fa" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌙 소아 야경증 · 수면장애 두뇌 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#dbe7f5" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="670" height="40" rx="8" fill="#eff6ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#1d4ed8">
        "자다 깨서 비명 지르고 우는 아이, 왜 엄마를 못 알아볼까요?"
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f1f38" letter-spacing="-1.2">
      소아 야경증 | 자다 깨서 비명 지르고 울 때
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#2563eb">
      검단 원당동 학부모 수면 가이드 · 비렘수면 각성장애와 맞춤 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⚠️</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1f38">POINT 01. 비렘 각성장애</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">깊은 수면 중 의식은 잠들고</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#dc2626">몸의 공포 중추만 깨어난 상태</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#e0f2fe" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🔍</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1f38">POINT 02. 악몽과의 감별</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">아침에 전혀 기억하지 못하는</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#0284c7">야경증 특유의 뇌파 발작</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#ecfdf5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🍵</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1f38">POINT 03. 1:1 맞춤 한약</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">안신영심(安神寧心) 처방</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">심신열 진정 &amp; 무통 자석침</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 140)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fef3c7" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">🏡</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1f38">POINT 04. 부모 대처 수칙</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">억지로 깨우지 말고 안전 확보</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#d97706">미디어 차단 &amp; 적정 수면 환경</text>
      </g>
    </g>

    <!-- Bottom Clinical Message Box -->
    <g transform="translate(55, 525)">
      <rect x="0" y="0" width="860" height="215" rx="20" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        💡 한방침구과 전문의 권형근 대표원장의 진료 노트
      </text>
      <text x="35" y="82" font-family="${fontFamilies}" font-size="16" fill="#334155">
        "소아 야경증은 아이의 성격이 나약해서가 아니라, 수면 뇌파 조절 능력이 아직 미성숙해서 생깁니다."
      </text>
      <text x="35" y="112" font-family="${fontFamilies}" font-size="16" fill="#334155">
        "발작 시 억지로 깨우면 공포가 더 커지므로 안전하게 안아주며 뇌신경을 안정시켜야 합니다."
      </text>
      <text x="35" y="142" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb">
        "심포(心胞)의 열을 내리고 뇌 자생력을 깨워 아이와 온 가족의 통잠을 되찾아드립니다."
      </text>
      <text x="35" y="180" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#64748b">
        검단신도시 · 원당동 · 당하동 · 마전동 · 불로동 소아 수면클리닉
      </text>
    </g>

    <!-- Bottom Hospital Info Footer -->
    <g transform="translate(55, 770)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#091e3a" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff">
        해아림한의원 인천부평점
      </text>
      <text x="260" y="45" font-family="${fontFamilies}" font-size="15" fill="#93c5fd">
        부평역 7번 출구 북광장 · 월·수·금 야간진료 (저녁 8시)
      </text>
      <text x="750" y="45" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ffffff">
        ☎ 032-719-3472
      </text>
    </g>
  </g>
</svg>`;
}

// 2. POINT 01 (원인 기전 분석 카드)
function generatePoint1Cause() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091e3a" />
      <stop offset="50%" stop-color="#14345e" />
      <stop offset="100%" stop-color="#051326" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">⚠️ POINT 01. 야경증의 신경학적 원인</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#dbe7f5" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f1f38">
      "아이가 눈을 뜨고 우는데 왜 엄마를 못 알아볼까요?"
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#dc2626">
      의식은 잠들어 있고, 공포 중추와 자율신경계만 깨어난 '비렘수면 각성장애'
    </text>

    <!-- 3 Flow Step Boxes -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#fee2e2" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b91c1c" text-anchor="middle">1</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          비렘(NREM) 수면 3단계에서 얕은 잠으로 넘어갈 때의 오작동
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 잠든 지 1~3시간 뒤 가장 깊은 수면 단계에서 수면 뇌파 전환 실패
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 이성을 담당하는 대뇌피질은 깊이 잠들어 있고, 생존 본능의 뇌간만 깨어남
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          👉 눈을 뜨고 울부짖어도 부모의 목소리와 얼굴을 인식하지 못합니다.
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#ffedd5" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#c2410c" text-anchor="middle">2</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#9a3412">
          편도체 과흥분 &amp; 교감신경계 폭주 발작
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 공포를 느끼는 편도체가 발작적으로 흥분하며 심장이 분당 160회 이상 박동
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 온몸에 땀을 비 오듯 흘리고 동공이 풀린 채 사방으로 버둥거리며 비명
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ea580c">
          👉 달래려고 안아주어도 뿌리치며 도망치려는 극심한 공포 반응을 보입니다.
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#faf5ff" stroke="#d8b4fe" stroke-width="1.5" />
        <circle cx="50" cy="50" r="26" fill="#f3e8ff" />
        <text x="50" y="58" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7e22ce" text-anchor="middle">3</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#6b21a8">
          한의학적 심포열(心胞熱) &amp; 심담허겁(心膽虛怯)
        </text>
        <text x="95" y="85" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 낮 동안의 낯선 환경, 어린이집 적응, 시각 미디어 과다로 심장에 열이 뭉침
        </text>
        <text x="95" y="115" font-family="${fontFamilies}" font-size="16" fill="#475569">
          • 기질적으로 겁이 많고 예민한 아이가 밤마다 놀라 깨는 수면 불균형
        </text>
        <text x="95" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#9333ea">
          👉 심장의 열을 식히고 담력을 키워주는 한방 소아 안신 치료가 필요합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#091e3a" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#93c5fd" text-anchor="middle">
        💡 아이의 뇌신경계가 안정되면 밤마다 찾아오던 비명과 울음은 말끔히 사라집니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. POINT 02 (자가진단 체크리스트 카드)
function generatePoint2Checklist() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091e3a" />
      <stop offset="50%" stop-color="#14345e" />
      <stop offset="100%" stop-color="#051326" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#0284c7" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">📋 POINT 02. 소아 수면장애 자가진단</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#dbe7f5" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f1f38">
      악몽일까, 야제증일까, 야경증일까?
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#0284c7">
      아래 5가지 중 3가지 이상 해당된다면 소아 야경증 정밀 진단이 필요합니다.
    </text>

    <!-- 5 Checklist Items -->
    <g transform="translate(55, 140)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8fafc" stroke="#bae6fd" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#0284c7" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1f38">
          1. 잠든 지 1~3시간 뒤 갑자기 자지러지게 비명을 지르며 일어난다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
          새벽 후반부가 아닌, 입면 후 초반 깊은 잠 단계에서 일어나는 전형적 양상
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 115)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8fafc" stroke="#bae6fd" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#0284c7" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1f38">
          2. 눈을 뜨고 있지만 부모를 알아보지 못하고 달래도 진정되지 않는다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
          대뇌가 잠들어 있어 이름을 부르거나 안아주어도 반응하지 않고 뿌리침
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 230)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8fafc" stroke="#bae6fd" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#0284c7" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1f38">
          3. 식은땀을 뻘뻘 흘리고 호흡이 가쁘며 심장이 미친 듯 뛴다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
          교감신경이 극도로 항진되어 공포에 질린 자율신경 발작 증상 동반
        </text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(0, 345)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8fafc" stroke="#bae6fd" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#0284c7" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1f38">
          4. 10~20분간 심하게 울부짖다가 갑자기 스르륵 잠에 빠져든다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
          발작이 끝나면 언제 그랬냐는 듯 자연스럽게 깊은 수면으로 복귀
        </text>
      </g>

      <!-- Item 5 -->
      <g transform="translate(0, 460)">
        <rect x="0" y="0" width="860" height="100" rx="14" fill="#f8fafc" stroke="#bae6fd" stroke-width="1.5" />
        <circle cx="45" cy="50" r="22" fill="#0284c7" />
        <text x="45" y="58" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="85" y="42" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f1f38">
          5. 다음 날 아침 어젯밤 일어난 일을 전혀 기억하지 못한다
        </text>
        <text x="85" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
          악몽은 꿈의 내용을 생생하게 기억하지만 야경증은 완전한 기억 상실
        </text>
      </g>
    </g>

    <!-- Bottom Action Notice -->
    <g transform="translate(55, 735)">
      <rect x="0" y="0" width="860" height="105" rx="18" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">
        💡 야경증이 지속되면 성장호르몬 분비 저하와 낮 시간 집중력 저하로 이어집니다.
      </text>
      <text x="430" y="78" font-family="${fontFamilies}" font-size="15" fill="#0284c7" text-anchor="middle">
        아이의 뇌신경 발달을 위해 조기에 수면 리듬을 바로잡아 주어야 합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. POINT 03 (1:1 맞춤 한방 치료 솔루션 카드)
function generatePoint3Treatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091e3a" />
      <stop offset="50%" stop-color="#14345e" />
      <stop offset="100%" stop-color="#051326" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🌿 POINT 03. 1:1 맞춤 한방 치료</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#dbe7f5" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f1f38">
      불안정한 수면 뇌파를 바로잡는 3단계 치료
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      억지 수면유도제가 아닌, 아이 뇌 스스로 깊은 잠을 유지하는 자생력 완성
    </text>

    <!-- 3 Step Treatment Cards -->
    <g transform="translate(55, 145)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🍵</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f1f38">
          1. 안신영심(安神寧心) 소아 맞춤 한약 처방
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 심장의 뭉친 열을 내리고 간기를 편안하게 하여 불안과 공포를 진정
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 온담탕, 귀비탕, 천왕보심단, 포룡환 등 식약처 안심 규격 한약재 조제
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 쓴맛 없이 순하게 복용하며 깊은 비렘수면의 연속성을 회복
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">👐</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f1f38">
          2. 두개천골 추나요법 &amp; 무통 자석침 치료
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 두개골과 상경추의 미세 리듬을 교정하여 뇌척수액 순환과 뇌압 안정화
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 아프지 않은 무통 자석침으로 백회, 신문, 내관, 용천혈을 자극해 이완
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 수면 중 뇌신경의 과도한 전기적 흥분을 부드럽게 가라앉힘
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f8faf9" stroke="#d5e5df" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#ecfdf5" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">⚡</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f1f38">
          3. 뉴로피드백 &amp; 감각통합 두뇌 훈련
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 실시간 시각 훈련을 통해 불안정한 각성 뇌파를 스스로 안정 뇌파로 유도
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 감각 과민성을 낮추고 자율신경계 회복탄력성을 극대화
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          ✓ 치료가 끝난 후에도 스스로 안정된 통잠을 유지하는 뇌 자생력 완성
        </text>
      </g>
    </g>

    <!-- Bottom Notice Box -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#091e3a" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">
        🏥 한방침구과 전문의 권형근 대표원장 1:1 맞춤 정밀 진료
      </text>
    </g>
  </g>
</svg>`;
}

// 5. POINT 04 (생활 팁 & 학부모 대처 수칙 카드)
function generatePoint4Selfcare() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.22" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091e3a" />
      <stop offset="50%" stop-color="#14345e" />
      <stop offset="100%" stop-color="#051326" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#059669" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">🏡 POINT 04. 생활 속 힐링 실천 팁</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#dbe7f5" stroke-width="2" />
    
    <text x="55" y="65" font-family="${fontFamilies}" font-size="32" font-weight="bold" fill="#0f1f38">
      야경증 발작 시 학부모 3대 대처 수칙
    </text>
    <text x="55" y="105" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#059669">
      아이의 뇌를 당황시키지 않고 안전하게 수면을 이어주는 실천법
    </text>

    <!-- 3 Action Boxes -->
    <g transform="translate(55, 145)">
      <!-- Rule 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🛑</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 01. 억지로 흔들어 깨우거나 불을 환하게 켜지 마세요
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 강제로 깨우면 아이는 극심한 혼란과 공포를 느껴 증상이 악화됩니다.
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 조명을 어둡게 유지한 채 아이가 부딪히지 않도록 주변 위험물만 치워주세요.
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ "엄마 여기 있어, 괜찮아" 부드러운 목소리로 감싸 안아주세요.
        </text>
      </g>

      <!-- Rule 2 -->
      <g transform="translate(0, 195)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">📱</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 02. 취침 2시간 전 시각 미디어(스마트폰·TV) 완벽 차단
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 자극적인 만화, 유튜브 숏폼, 게임은 잠든 후에도 뇌를 과각성 상태로 유지
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 저녁 시간 정적인 그림책 읽기나 잔잔한 음악으로 두뇌 긴장을 이완
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 뇌가 깊은 수면 사이클에 원활하게 진입하도록 돕습니다.
        </text>
      </g>

      <!-- Rule 3 -->
      <g transform="translate(0, 390)">
        <rect x="0" y="0" width="860" height="175" rx="18" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5" />
        <rect x="25" y="25" width="70" height="70" rx="14" fill="#dcfce7" />
        <text x="60" y="70" font-family="${fontFamilies}" font-size="30" text-anchor="middle">🌡️</text>
        <text x="115" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#166534">
          수칙 03. 침실 적정 온도(20~22도) 유지 &amp; 취침 전 족욕
        </text>
        <text x="115" y="82" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 방이 덥거나 두꺼운 이불로 땀을 흘리면 수면 중 각성 빈도가 대폭 증가
        </text>
        <text x="115" y="110" font-family="${fontFamilies}" font-size="15" fill="#374151">
          • 잠들기 전 따뜻한 족욕으로 머리의 상열감을 내리고 시원한 침실 환경 조성
        </text>
        <text x="115" y="140" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#15803d">
          ✓ 수승화강을 유도하여 밤새 깨지 않는 깊은 숙면을 완성합니다.
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(55, 765)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#091e3a" />
      <text x="430" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#93c5fd" text-anchor="middle">
        💡 부모님의 불안을 덜어내고 침착하게 대응할 때 아이의 수면 뇌파도 안정됩니다.
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
  console.log('Rendering Geomdan Night Terror Cards (Thumbnail + Point1 + Point2 + Point3 + Point4)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generatePoint1Cause(), '02_point1_cause.jpg');
  await renderCard(generatePoint2Checklist(), '03_point2_checklist.jpg');
  await renderCard(generatePoint3Treatment(), '04_point3_treatment.jpg');
  await renderCard(generatePoint4Selfcare(), '05_point4_selfcare.jpg');
  console.log('All 5 cards generated successfully!');
}

run().catch(console.error);
