import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-songnae-adult-adhd',
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
      <stop offset="0%" stop-color="#0b1b2b" />
      <stop offset="50%" stop-color="#142c44" />
      <stop offset="100%" stop-color="#081420" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#0ea5e9" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🧠 직장인 성인ADHD · 실행기능장애</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#eff6ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#1d4ed8">
        게으른 게 아닙니다! 시작이 두렵고 마감이 버거운 전두엽 브레이크 고장
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      부천 송내역 직장인 성인ADHD 실행기능장애
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#2563eb">
      의지박약의 착각 종결 · 작업기억 &amp; 도파민 조절 · 1:1 맞춤 한약 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 01. 오답 1</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">"의지박약·게으름의 문제다?"</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">전두엽 도파민 신호 결손</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 02. 오답 2</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">"단순히 산만한 성격이다?"</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">작업기억 &amp; 우선순위 마비</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 03. 오답 3</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">"카페인·벼락치기로 버틴다?"</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">교감신경 폭주와 번아웃</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#eff6ff" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="26" text-anchor="middle">🌿</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">CHAPTER 04. 맞춤치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="15" fill="#475569">청뇌개규 &amp; 뇌신경 밸런스</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#2563eb">1:1 체질 맞춤 한방 솔루션</text>
      </g>
    </g>

    <!-- Clinic Info Footer Bar -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="135" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="35" y="38" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0f2922">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장
      </text>
      <text x="35" y="72" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 위치: 부평역 7번 출구 북광장 도보 5분 (송내역에서 급행 전철 5분 / 자가용 10분)
      </text>
      <text x="35" y="98" font-family="${fontFamilies}" font-size="15" fill="#475569">
        • 진료: 월·수·금 저녁 8시 야간진료 (화 19시 / 토 15시) | 무료 주차 지원
      </text>
    </g>

    <!-- Bottom Hook -->
    <text x="485" y="725" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle">
      "시작하지 못하는 고통, 자책하지 마세요. 전두엽의 실행 스위치를 다시 켜드립니다."
    </text>
  </g>
</svg>`;
}

// 2. 오답 1 카드 (02_point1_wrong1.jpg)
function generateWrong1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad2)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="230" height="40" rx="20" fill="#fee2e2" />
      <text x="115" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 01. 오답 1 파헤치기
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "의지가 약해서 미루고 딴짓을 한다?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#dc2626">
      ❌ 의지박약이 아닌 '전두엽 실행기능 회로' 결손의 팩트
    </text>

    <!-- Content Box 1: 오해 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="170" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        ❌ 흔한 오해와 자책: "마음가짐만 고쳐먹으면 된다?"
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        플래너를 사고 다이어리를 써봐도 시작이 안 되는 이유는 게을러서가 아닙니다.
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        행동을 개시하고 충동을 억제하는 전두엽의 '시동 버튼'이 물리적으로 눌리지 않는 상태입니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        ➔ 자책이 반복되면 가면성 우울증과 만성 무기력증으로 악화됩니다.
      </text>
    </g>

    <!-- Content Box 2: 과학적 진실 -->
    <g transform="translate(50, 410)">
      <rect x="0" y="0" width="860" height="235" rx="20" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1d4ed8">
        💡 뇌과학 팩트: 도파민 &amp; 노르에피네프린 신호 단절
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#2563eb" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">도파민 분비 결핍:</tspan> 뇌의 동기부여 및 보상 예측 회로가 작동하지 않아 시작이 극도로 어려움
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#2563eb" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">전두엽 브레이크 마비:</tspan> 사소한 자극(휴대폰, 잡념)을 차단하지 못하고 주의가 즉시 분산됨
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#2563eb" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">생물학적 질환:</tspan> 성격이나 인성의 문제가 아니므로 신경전달물질의 균형 치료가 필수
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="95" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "마음만 다잡는다고 해결되지 않습니다."
      </text>
      <text x="430" y="70" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle">
        전두엽의 혈류와 신경망을 물리적으로 치료해야 실행력이 되살아납니다.
      </text>
    </g>

    <text x="480" y="825" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 성인ADHD 오답노트
    </text>
  </g>
</svg>`;
}

// 3. 오답 2 카드 (03_point2_wrong2.jpg)
function generateWrong2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad3)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="230" height="40" rx="20" fill="#fee2e2" />
      <text x="115" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 02. 오답 2 파헤치기
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "단순히 산만한 성격이다?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#dc2626">
      ❌ '작업기억 &amp; 우선순위 스위칭' 마비의 병리
    </text>

    <!-- Content Box 1: 성인ADHD의 실제 모습 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="170" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        ❌ 잘못된 진단: "가만히 못 있는 과잉행동이 없으니 ADHD가 아니다?"
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        성인ADHD는 겉으로 날뛰지 않습니다. 대신 '머릿속이 24시간 과열'되어 있습니다.
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        스마트폰 백그라운드 앱 100개가 켜진 채 배터리가 방전되는 폰처럼 뇌가 버벅거립니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        ➔ 겉은 얌전해 보여도 뇌는 극심한 정보 과부하와 피로에 시달립니다.
      </text>
    </g>

    <!-- Content Box 2: 작업기억 마비의 증상 -->
    <g transform="translate(50, 410)">
      <rect x="0" y="0" width="860" height="235" rx="20" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1d4ed8">
        💡 직장인 작업기억(Working Memory) 마비 3대 징후
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#2563eb" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">단기 기억의 즉시 휘발:</tspan> 회의 중 지시를 듣고도 뒤돌아서면 메모리가 포맷되어 누락
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#2563eb" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">우선순위 스위칭 불능:</tspan> 업무가 몰리면 중요도 구분을 못 하고 머릿속이 백지가 됨
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#2563eb" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">사소한 디테일 실수:</tspan> 이메일 첨부 누락, 약속 시간 지각 등 잦은 직무상 오류
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="95" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "뇌의 RAM(단기 메모리) 용량을 비워주고 확장해야 합니다."
      </text>
      <text x="430" y="70" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle">
        체계적인 뇌신경 훈련과 맞춤 처방으로 작업기억의 안정성을 회복시킵니다.
      </text>
    </g>

    <text x="480" y="825" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 성인ADHD 오답노트
    </text>
  </g>
</svg>`;
}

// 4. 오답 3 카드 (04_point3_wrong3.jpg)
function generateWrong3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad4)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="230" height="40" rx="20" fill="#fee2e2" />
      <text x="115" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 03. 오답 3 파헤치기
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      "카페인·벼락치기로 버티면 된다?"
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#dc2626">
      ❌ 교감신경 폭주와 2차 번아웃의 함정
    </text>

    <!-- Content Box 1: 각성제/카페인 의존의 역효과 -->
    <g transform="translate(50, 215)">
      <rect x="0" y="0" width="860" height="170" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#b91c1c">
        ❌ 잘못된 대처: "하루 커피 4잔 + 마감 전 공포로 몰아붙이기"
      </text>
      <text x="35" y="85" font-family="${fontFamilies}" font-size="16" fill="#334155">
        시동이 꺼진 뇌를 억지로 깨우려 고카페인과 아드레날린을 남용하면
      </text>
      <text x="35" y="115" font-family="${fontFamilies}" font-size="16" fill="#334155">
        뇌는 도파민을 채우는 대신 자율신경계 교감신경만 비정상적으로 과열됩니다.
      </text>
      <text x="35" y="145" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
        ➔ 가슴 두근거림, 손떨림, 식은땀, 소화불량의 신체화 증상 동반
      </text>
    </g>

    <!-- Content Box 2: 야간 불면 & 브레인포그 악순환 -->
    <g transform="translate(50, 410)">
      <rect x="0" y="0" width="860" height="235" rx="20" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1d4ed8">
        💡 강제 각성이 부르는 파괴적 악순환
      </text>
      
      <g transform="translate(35, 75)">
        <circle cx="10" cy="12" r="4" fill="#2563eb" />
        <text x="25" y="18" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">야간 각성 &amp; 불면증:</tspan> 밤이 되어도 신경계가 꺼지지 않아 2~3시간 뒤척임
        </text>
        
        <circle cx="10" cy="47" r="4" fill="#2563eb" />
        <text x="25" y="53" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">수면 결손과 브레인포그:</tspan> 깊은 잠을 못 자 전두엽 기능이 다음 날 더욱 저하됨
        </text>
        
        <circle cx="10" cy="82" r="4" fill="#2563eb" />
        <text x="25" y="88" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          <tspan font-weight="bold">신경계 번아웃:</tspan> 결국 공황발작이나 극심한 우울감으로 무너지는 결과 초래
        </text>
      </g>
    </g>

    <!-- Bottom Highlight -->
    <g transform="translate(50, 675)">
      <rect x="0" y="0" width="860" height="95" rx="16" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
      <text x="430" y="40" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#0f172a" text-anchor="middle">
        "뇌를 채찍질하는 각성이 아닌, 스스로 숨 쉬게 하는 치료가 필요합니다."
      </text>
      <text x="430" y="70" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#2563eb" text-anchor="middle">
        과열된 신경을 식히고 뇌에 맑은 산소를 공급하는 근본 치료가 정답입니다.
      </text>
    </g>

    <text x="480" y="825" font-family="${fontFamilies}" font-size="15" fill="#64748b" text-anchor="middle">
      해아림한의원 인천부평점 · 성인ADHD 오답노트
    </text>
  </g>
</svg>`;
}

// 5. 맞춤치료 카드 (05_point4_treatment.jpg)
function generateTreatment() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.1" />
    </filter>
    <linearGradient id="bgGrad5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad5)" />

  <!-- Main Container -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="960" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" />

    <!-- Top Badge -->
    <g transform="translate(50, 45)">
      <rect x="0" y="0" width="240" height="40" rx="20" fill="#eff6ff" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#2563eb" text-anchor="middle">
        CHAPTER 04. 오답 종결 맞춤치료
      </text>
    </g>

    <!-- Title -->
    <text x="50" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
      해아림 1:1 역발상 뇌신경 맞춤 치료
    </text>
    <text x="50" y="172" font-family="${fontFamilies}" font-size="20" font-weight="600" fill="#2563eb">
      인위적 각성제 의존 없이, 뇌 스스로 집중력과 작업기억을 유지하도록 회복
    </text>

    <!-- 3 Treatment Boxes -->
    <g transform="translate(50, 215)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eff6ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🌿</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          1. 청뇌개규(淸腦開竅) &amp; 1:1 체질 맞춤 한약
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 원지, 석창포, 백복신 등 뇌신경 순환 및 기억 인출을 돕는 본초 배합
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 전두엽 혈류 공급 개선 · 뇌세포 피로 독소 배출 및 도파민 수용체 감도 안정
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 165)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eff6ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🎯</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          2. 두경부 뇌혈류 개선 상경추 추나요법
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 거북목, 일자목, 상부 승모근 긴장으로 좁아진 추골동맥 뇌혈류로 교정
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌로 올라가는 산소 공급 극대화 · 머리가 맑아지고 만성 브레인포그 소실
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 330)">
        <rect x="0" y="0" width="860" height="145" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="95" height="95" rx="12" fill="#eff6ff" />
        <text x="72" y="80" font-family="${fontFamilies}" font-size="36" text-anchor="middle">⚡</text>
        <text x="140" y="48" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#0f172a">
          3. 뇌신경 조절 침구 &amp; 뉴로피드백 자율신경 훈련
        </text>
        <text x="140" y="78" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 백회, 풍지, 신문혈 자극을 통한 뇌파 안정 및 중추신경 흥분 완화
        </text>
        <text x="140" y="103" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 낮에는 높은 실행력을 유지하고 밤에는 깊은 숙면을 취하는 선순환 확립
        </text>
      </g>
    </g>

    <!-- Bottom Notice -->
    <g transform="translate(50, 725)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" />
      <text x="430" y="45" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#1d4ed8" text-anchor="middle">
        💡 양약 복용 중단 없이 병행 치료가 가능하며, 서서히 약물 의존도를 줄여나갑니다.
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
  console.log('Rendering C-Type Adult ADHD Card Images (Thumbnail + Wrong1 + Wrong2 + Wrong3 + Treatment)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateWrong1(), '02_point1_wrong1.jpg');
  await renderCard(generateWrong2(), '03_point2_wrong2.jpg');
  await renderCard(generateWrong3(), '04_point3_wrong3.jpg');
  await renderCard(generateTreatment(), '05_point4_treatment.jpg');
  console.log('All 5 C-type cards generated successfully!');
}

run().catch(console.error);
