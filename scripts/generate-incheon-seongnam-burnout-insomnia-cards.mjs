import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const outputDir = 'c:/Users/PC/Downloads/home/static/blog-images/incheon-seongnam-burnout-insomnia';
const generalDir = 'c:/Users/PC/Downloads/home/static/blog-images';
const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(generalDir)) {
  fs.mkdirSync(generalDir, { recursive: true });
}

// 1. MAIN THUMBNAIL CARD (1080x1080)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#08201b" />
      <stop offset="50%" stop-color="#113830" />
      <stop offset="100%" stop-color="#061814" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0d9488" />
      <stop offset="100%" stop-color="#14b8a6" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">직장인 번아웃 ｜ 만성 불면증 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 50)">
      <rect x="0" y="0" width="580" height="40" rx="8" fill="#e6f7f3" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f766e">
        석남역 7호선 퇴근길, 몸은 녹초인데 침대에선 눈이 말똥말똥할 때
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#0c2620" letter-spacing="-1.5">
      인천 석남역 직장인 번아웃 불면증 한방 치료
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#2d4a42" letter-spacing="-0.5">
      수면제 의존을 끊는 뇌신경 과각성·자율신경 역발상 솔루션
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2ece7" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fee2e2" />
        <circle cx="67" cy="67" r="26" fill="#dc2626" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">✕</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          오답 1: 술과 수면유도제로 뇌를 강제 마비시키는 악순환
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          약효가 빠지면 새벽 3~4시에 심장이 뛰며 깨어나는 반동 불면과 주간 만성 피로 초래
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fef3c7" />
        <circle cx="67" cy="67" r="26" fill="#d97706" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          번아웃 불면의 본질: 교감신경 과열 &amp; 상열하한(上熱下寒)
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          지친 몸과 달리 뇌는 백그라운드 앱 100개가 켜진 채 폭주하는 극심한 과각성 상태
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f6faf8" stroke="#cbdcd5" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#ecfdf5" />
        <circle cx="67" cy="67" r="26" fill="#059669" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0c2620">
          오답 종결: 교감신경 다운시프트 탕약 ｜ 자율신경 약침 ｜ 두뇌 이완
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#47635a">
          뇌간의 화열을 내리고 수면 호르몬이 스스로 분비되는 뇌 자생력 완성 치료
        </text>
      </g>
    </g>

    <!-- Bottom Footer Inside Card -->
    <g transform="translate(55, 760)">
      <rect x="0" y="0" width="860" height="80" rx="16" fill="#0c2620" />
      <text x="430" y="36" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 ｜ 대표원장 권형근 (한방침구과 전문의)
      </text>
      <text x="430" y="63" font-family="${fontFamilies}" font-size="14" fill="#a7f3d0" text-anchor="middle">
        부평역 7번 출구 도보 1분 ｜ 석남역 7호선 직결 ｜ 월·수·금 야간진료 20시
      </text>
    </g>
  </g>
</svg>
  `;
}

// 2. CHAPTER 01: WRONG 1 CARD (오답 1: 대증차단의 역설)
function generateWrong1Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow1" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#08201b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#dc2626" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 01</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fca5a5">오답 01 파헤치기 ｜ 대증 요법의 역설</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "수면제와 술 한잔이면 오늘 밤 푹 잘 수 있다?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#fecaca" letter-spacing="-0.5">
    뇌를 억지로 기절시키는 수면은 깊은 잠(서파 수면)을 파괴합니다
  </text>

  <!-- Content Box -->
  <g transform="translate(60, 240)">
    <rect x="0" y="0" width="960" height="720" rx="28" fill="#ffffff" filter="url(#shadow1)" />
    
    <!-- Section 1: Mistake -->
    <g transform="translate(45, 45)">
      <rect x="0" y="0" width="870" height="180" rx="18" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b91c1c">❌ 직장인들이 흔히 빠지는 첫 번째 오답</text>
      <text x="25" y="85" font-family="${fontFamilies}" font-size="18" fill="#334155">• 퇴근 후 침대에 누워 잠이 안 오면 캔맥주나 와인 한 잔을 마시고 눕는다.</text>
      <text x="25" y="120" font-family="${fontFamilies}" font-size="18" fill="#334155">• 처방받은 수면유도제나 항불안제에 의존해 강제로 눈을 감으려 한다.</text>
      <text x="25" y="155" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626">👉 결과: 뇌의 수면 회로가 마비되어 약 없이는 1분도 못 자는 의존성 형성</text>
    </g>

    <!-- Section 2: Medical Mechanism -->
    <g transform="translate(45, 250)">
      <rect x="0" y="0" width="870" height="200" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">⚠️ 왜 실패할 수밖에 없을까? (병리 기전)</text>
      <text x="25" y="85" font-family="${fontFamilies}" font-size="18" fill="#334155">• 알코올과 수면제는 뇌파를 억제해 '가수면 상태'로 만들 뿐 피로 회복을 방해합니다.</text>
      <text x="25" y="120" font-family="${fontFamilies}" font-size="18" fill="#334155">• 새벽 3~4시 약효가 대사되면 교감신경이 급격히 반동하며 심계항진과 악몽을 유발합니다.</text>
      <text x="25" y="155" font-family="${fontFamilies}" font-size="18" fill="#334155">• 아침에 일어났을 때 머리가 깨질 듯 무겁고 멍한 '수면 숙취(Hangover)'가 반복됩니다.</text>
    </g>

    <!-- Section 3: Fact Answer -->
    <g transform="translate(45, 475)">
      <rect x="0" y="0" width="870" height="195" rx="18" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#047857">💡 [팩트 정답] 뇌를 끄는 것이 아니라, 뇌가 스스로 잠들게 하라</text>
      <text x="25" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46">• 수면은 강제로 시동을 끄는 버튼이 아니라, 순차적으로 내려오는 슬라이더입니다.</text>
      <text x="25" y="120" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46">• 억제제 대신 뇌간의 과열된 흥분을 가라앉혀 천연 멜라토닌 분비를 회복해야 합니다.</text>
      <text x="25" y="155" font-family="${fontFamilies}" font-size="16" fill="#047857">👉 교감신경을 다운시프트시키는 체질 한방 치료로 뇌 자생력을 깨워야 합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 냄비 뚜껑을 누르는 수면제보다 가스 불(뇌신경 흥분)을 끄는 근본 치료가 우선입니다.
    </text>
  </g>
</svg>
  `;
}

// 3. CHAPTER 02: WRONG 2 CARD (오답 2: 발병부위의 오해/신체과열)
function generateWrong2Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow2" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#08201b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#dc2626" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 02</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fca5a5">오답 02 파헤치기 ｜ 신체 과열의 역설</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "몸을 녹초로 지치게 만들면 쓰러져 잘 것이다?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#fecaca" letter-spacing="-0.5">
    번아웃 직장인의 야간 격렬 운동은 뇌에 기름을 붓는 격입니다
  </text>

  <!-- Content Box -->
  <g transform="translate(60, 240)">
    <rect x="0" y="0" width="960" height="720" rx="28" fill="#ffffff" filter="url(#shadow2)" />
    
    <!-- Section 1: Mistake -->
    <g transform="translate(45, 45)">
      <rect x="0" y="0" width="870" height="180" rx="18" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b91c1c">❌ 직장인들이 흔히 빠지는 두 번째 오답</text>
      <text x="25" y="85" font-family="${fontFamilies}" font-size="18" fill="#334155">• "몸이 덜 피곤해서 잠이 안 오나 보다" 생각하고 퇴근 후 밤늦게 헬스·러닝을 한다.</text>
      <text x="25" y="120" font-family="${fontFamilies}" font-size="18" fill="#334155">• 피로를 풀기 위해 주말 내내 몰아서 자거나 침대에 종일 누워 있는다.</text>
      <text x="25" y="155" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626">👉 결과: 땀을 흠뻑 흘리고 누워도 가슴이 쿵쾅거리고 눈은 더욱 말똥말똥해짐</text>
    </g>

    <!-- Section 2: Medical Mechanism -->
    <g transform="translate(45, 250)">
      <rect x="0" y="0" width="870" height="200" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">⚠️ 왜 실패할 수밖에 없을까? (병리 기전)</text>
      <text x="25" y="85" font-family="${fontFamilies}" font-size="18" fill="#334155">• 번아웃 상태는 부신 피로로 코르티솔 조절력이 고갈된 상태입니다.</text>
      <text x="25" y="120" font-family="${fontFamilies}" font-size="18" fill="#334155">• 늦은 밤 고강도 운동은 심부 체온을 높이고 아드레날린을 폭발시켜 과각성을 유발합니다.</text>
      <text x="25" y="155" font-family="${fontFamilies}" font-size="18" fill="#334155">• 상체로 열이 쏠리고 손발은 차가워지는 '상열하한(上熱下寒)'이 극대화됩니다.</text>
    </g>

    <!-- Section 3: Fact Answer -->
    <g transform="translate(45, 475)">
      <rect x="0" y="0" width="870" height="195" rx="18" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#047857">💡 [팩트 정답] 지친 몸을 쥐어짜지 말고, 심부 체온을 낮춰라</text>
      <text x="25" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46">• 인간의 뇌는 심부 체온이 0.5~1도 떨어질 때 비로소 수면 스위치를 켭니다.</text>
      <text x="25" y="120" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46">• 야간 격렬 운동 대신 가벼운 스트레칭과 취침 전 온수 족욕으로 열을 방출해야 합니다.</text>
      <text x="25" y="155" font-family="${fontFamilies}" font-size="16" fill="#047857">👉 상초의 화열을 내리고 음혈(陰血)을 보하는 한방 치료가 필요한 이유입니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 뇌가 지쳐있을 때 몸을 더 혹사시키는 것은 화재 현장에 부채질하는 것과 같습니다.
    </text>
  </g>
</svg>
  `;
}

// 4. CHAPTER 03: WRONG 3 CARD (오답 3: 정신력/의지의 함정)
function generateWrong3Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow3" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#08201b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#dc2626" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 03</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#fca5a5">오답 03 파헤치기 ｜ 정신력·의지의 함정</text>
  </g>

  <text x="60" y="155" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "잠 못 자는 건 멘탈이 약하고 예민해서 그렇다?"
  </text>
  <text x="60" y="200" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#fecaca" letter-spacing="-0.5">
    불면증은 마음의 문제가 아닌 자율신경계 브레이크 고장입니다
  </text>

  <!-- Content Box -->
  <g transform="translate(60, 240)">
    <rect x="0" y="0" width="960" height="720" rx="28" fill="#ffffff" filter="url(#shadow3)" />
    
    <!-- Section 1: Mistake -->
    <g transform="translate(45, 45)">
      <rect x="0" y="0" width="870" height="180" rx="18" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#b91c1c">❌ 직장인들이 흔히 빠지는 세 번째 오답</text>
      <text x="25" y="85" font-family="${fontFamilies}" font-size="18" fill="#334155">• "내일 중요한 미팅인데 무조건 자야 해"라며 시계를 보며 자책하고 강박을 갖는다.</text>
      <text x="25" y="120" font-family="${fontFamilies}" font-size="18" fill="#334155">• "마음 편하게 먹고 잡생각을 버리라"는 주위 조언을 따르려 억지로 눈을 감는다.</text>
      <text x="25" y="155" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#dc2626">👉 결과: 10분마다 시계를 확인하며 '못 자면 어쩌지' 극심한 예기불안 폭발</text>
    </g>

    <!-- Section 2: Medical Mechanism -->
    <g transform="translate(45, 250)">
      <rect x="0" y="0" width="870" height="200" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0f172a">⚠️ 왜 실패할 수밖에 없을까? (병리 기전)</text>
      <text x="25" y="85" font-family="${fontFamilies}" font-size="18" fill="#334155">• 수면은 대뇌피질의 '의지'로 조절할 수 없는 불수의적(자율신경) 영역입니다.</text>
      <text x="25" y="120" font-family="${fontFamilies}" font-size="18" fill="#334155">• "자야 한다"는 의식적 노력 자체가 뇌의 편도체를 위기 상황으로 인식시킵니다.</text>
      <text x="25" y="155" font-family="${fontFamilies}" font-size="18" fill="#334155">• 침대라는 공간이 '휴식처'가 아닌 '고문실'로 뇌에 조건반사 학습되어 버립니다.</text>
    </g>

    <!-- Section 3: Fact Answer -->
    <g transform="translate(45, 475)">
      <rect x="0" y="0" width="870" height="195" rx="18" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
      <text x="25" y="42" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#047857">💡 [팩트 정답] 생각을 통제하지 말고, 뇌파 환경을 바꿔라</text>
      <text x="25" y="85" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46">• 자려는 강박을 내려놓고 20분 이상 잠이 안 오면 즉시 침대 밖으로 나와야 합니다.</text>
      <text x="25" y="120" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46">• 심포(心包)의 울화를 풀고 뇌파를 알파-세타파로 유도하는 의학적 치료가 필수입니다.</text>
      <text x="25" y="155" font-family="${fontFamilies}" font-size="16" fill="#047857">👉 당신의 나약함 때문이 아닙니다. 고장 난 신경계를 수리하면 잠은 저절로 옵니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      💡 불면증은 의지의 부족이 아니라, 신경전달물질과 자율신경계의 생리적 불균형입니다.
    </text>
  </g>
</svg>
  `;
}

// 5. CHAPTER 04: TREATMENT CARD (오답 종결 맞춤치료)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow4" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#021c1a" flood-opacity="0.12" />
    </filter>
  </defs>

  <rect width="1080" height="1080" fill="#08201b" />

  <!-- Header Badge & Title Area -->
  <g transform="translate(60, 60)">
    <rect x="0" y="0" width="140" height="42" rx="21" fill="#0d9488" />
    <text x="70" y="28" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">CHAPTER 04</text>
    <text x="160" y="29" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#5eead4">오답을 종결짓는 1:1 역발상 한방 솔루션</text>
  </g>

  <text x="60" y="150" font-family="${fontFamilies}" font-size="40" font-weight="bold" fill="#ffffff" letter-spacing="-1">
    "수면제 없이 스스로 깊이 잠드는 뇌 자생력 완성"
  </text>
  <text x="60" y="195" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#99f6e4" letter-spacing="-0.5">
    체질 한약 + 두개천골 추나 + 자율신경 약침 + 뇌 리셋 홈 루틴
  </text>

  <!-- 3 Solution Boxes -->
  <g transform="translate(60, 235)">
    <!-- Box 1 -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">[교감신경 다운시프트] 뇌간 화열을 식히는 체질 맞춤 한약</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 온담탕(溫膽湯), 산조인탕(酸棗仁湯), 귀비탕(歸脾湯), 황련아교탕(黃連阿膠湯)</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 억울된 심포열과 담음(痰飮)을 제거하고 심신(心神)을 안정시켜 천연 입면 회복</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 약물 내성 없이 수면의 깊이와 서파 수면 비율을 정상화합니다.</text>
    </g>

    <!-- Box 2 -->
    <g transform="translate(0, 245)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">[신경망 이완 교정] 두개천골 추나요법 &amp; 경혈 신경약침</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 상부경추(C1-C2)와 두개골 봉합부의 긴장을 풀어 뇌척수액 순환을 촉진</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 안면(安眠), 신문(神門), 백회(百會), 풍지(風池)혈 순수 한약 약침으로 뇌막 이완</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 머리의 극심한 열감과 두통, 가슴 답답함을 즉각 해소합니다.</text>
    </g>

    <!-- Box 3 -->
    <g transform="translate(0, 490)">
      <rect x="0" y="0" width="960" height="225" rx="24" fill="#ffffff" filter="url(#shadow4)" />
      
      <rect x="35" y="38" width="75" height="75" rx="18" fill="#e6f7f3" />
      <circle cx="72" cy="75" r="24" fill="#0f766e" />
      <text x="72" y="84" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      
      <text x="135" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#0f766e">[자율신경 리셋 홈 루틴] 물리적 수면 환경 세팅 (약선차 배제)</text>
      <text x="135" y="100" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 기상 직후 15분 햇볕 쬐기(세로토닌 충전) ｜ 취침 90분 전 40도 온수 족욕</text>
      <text x="135" y="132" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#334155">• 4-7-8 자율신경 이완 호흡법으로 잠자리 전 교감신경 다운시프트</text>
      <text x="135" y="168" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f766e">👉 낮에는 활력 있게, 밤에는 스르륵 잠드는 완벽한 생체 시계를 완성합니다.</text>
    </g>
  </g>

  <!-- Bottom Tip Bar -->
  <g transform="translate(60, 990)">
    <rect x="0" y="0" width="960" height="46" rx="14" fill="#061814" />
    <text x="480" y="30" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#99f6e4" text-anchor="middle">
      🌱 해아림한의원 인천부평점 ｜ 032-508-8575 ｜ 석남역 7호선 직결
    </text>
  </g>
</svg>
  `;
}

async function renderCard(svgString, fileName) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  
  const filePath = path.join(outputDir, fileName);
  fs.writeFileSync(filePath, pngBuffer);
  
  // also copy to generalDir
  const generalFilePath = path.join(generalDir, fileName);
  fs.writeFileSync(generalFilePath, pngBuffer);
  
  console.log(`Saved: ${filePath}`);
}

async function main() {
  console.log('Generating Incheon Seongnam Burnout Insomnia blog card set (Pattern C)...');
  await renderCard(generateMainThumbnail(), '01_naver_main_thumbnail.jpg');
  await renderCard(generateWrong1Card(), '02_point1_wrong1.jpg');
  await renderCard(generateWrong2Card(), '03_point2_wrong2.jpg');
  await renderCard(generateWrong3Card(), '04_point3_wrong3.jpg');
  await renderCard(generateTreatmentCard(), '05_point4_treatment.jpg');
  console.log('All 5 cards created successfully in:', outputDir);
}

main().catch(console.error);
