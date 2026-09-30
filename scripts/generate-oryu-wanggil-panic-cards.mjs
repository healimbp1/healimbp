import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/oryu-wanggil-panic',
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
      <stop offset="0%" stop-color="#4f46e5" />
      <stop offset="100%" stop-color="#6366f1" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🩺 뇌신경 &amp; 자율신경 공황장애 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="40" rx="8" fill="#eef2ff" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#4338ca">
        응급실 검사는 정상인데 죽을 것 같은 공포와 호흡곤란?
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0f172a" letter-spacing="-1.5">
      오류왕길동 공황장애 · 공황발작
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="24" font-weight="600" fill="#4f46e5">
      심장이 아닌 뇌 '편도체 화재경보기 오작동'을 끄는 한방 치료
    </text>

    <!-- 4 Key Core Points Grid -->
    <g transform="translate(55, 235)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">오답 01. 심장마비 착각</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">심장병 아닌 뇌신경 오작동</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">응급실 심전도 정상 판정</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">오답 02. 신경안정제 의존</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">단순 진정은 편도체 못 고침</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">약 끊으면 반동성 공황 재발</text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#fee2e2" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">❌</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#991b1b">오답 03. 멘탈·의지력 탓</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">의지 아닌 자율신경계 고장</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#dc2626">참으려 할수록 발작 악화</text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 138)">
        <rect x="0" y="0" width="415" height="120" rx="16" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.5" />
        <circle cx="50" cy="60" r="28" fill="#d1fae5" />
        <text x="50" y="68" font-family="${fontFamilies}" font-size="24" text-anchor="middle">⭕</text>
        <text x="95" y="48" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#065f46">정답. 1:1 맞춤 한방 치료</text>
        <text x="95" y="76" font-family="${fontFamilies}" font-size="14" fill="#475569">청심안신 탕약 &amp; 뇌파 훈련</text>
        <text x="95" y="98" font-family="${fontFamilies}" font-size="13" font-weight="bold" fill="#059669">편도체 감도 정상화 &amp; 완치</text>
      </g>
    </g>

    <!-- Bottom Message Box -->
    <g transform="translate(55, 540)">
      <rect x="0" y="0" width="860" height="180" rx="16" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="30" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1e293b">
        💡 공황발작은 뇌의 '오경보(False Alarm)'입니다
      </text>
      <text x="30" y="82" font-family="${fontFamilies}" font-size="16" fill="#475569">
        불이 나지 않았는데도 센서가 고장 난 화재경보기가 요란하게 울리며 소방차를 부르듯,
      </text>
      <text x="30" y="112" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4f46e5">
        위험하지 않은 상황에서 뇌의 편도체가 폭주하여 심장을 뛰게 하고 호흡을 가쁘게 만듭니다.
      </text>
      <text x="30" y="145" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        심장을 고치는 것이 아니라, 과민해진 '뇌 편도체의 화재경보기 감도'를 정상화해야 완치됩니다.
      </text>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 750)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="42" font-family="${fontFamilies}" font-size="21" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="72" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        한방침구과 전문의 권형근 대표원장 진료 | 부평역 7번 출구 | 월·수·금 야간진료 8시
      </text>
      <g transform="translate(680, 15)">
        <rect x="0" y="0" width="180" height="52" rx="12" fill="#4f46e5" />
        <text x="90" y="33" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">1:1 정밀 검사</text>
      </g>
    </g>
  </g>
</svg>`;
}

// 2. WRONG 01 CARD (오답 1: 심장마비 착각)
function generateWrong1Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Chapter Header -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">❌ CHAPTER 01. 가장 흔한 오답 01</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 50)">
      <text x="0" y="38" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#991b1b" letter-spacing="-1">
        "심장마비인 줄 알고 응급실만 반복했어요"
      </text>
      <text x="0" y="80" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#475569">
        심전도, 혈액 검사는 정상인데 왜 당장 죽을 것처럼 숨이 가쁠까?
      </text>
    </g>

    <!-- Comparison 2 Box Section -->
    <g transform="translate(55, 170)">
      <!-- Left: Mistaken Belief -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="340" rx="20" fill="#fef2f2" stroke="#fca5a5" stroke-width="2" />
        <rect x="25" y="25" width="130" height="36" rx="8" fill="#dc2626" />
        <text x="90" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">환자의 공포</text>
        
        <text x="25" y="100" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          "심장이 터져서"
        </text>
        <text x="25" y="130" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          "이대로 죽는 건 아닐까?"
        </text>

        <text x="25" y="175" font-family="${fontFamilies}" font-size="16" fill="#64748b">
          • 심장 두근거림, 흉통, 조임
        </text>
        <text x="25" y="210" font-family="${fontFamilies}" font-size="16" fill="#64748b">
          • 숨이 턱 막히는 질식감
        </text>
        <text x="25" y="245" font-family="${fontFamilies}" font-size="16" fill="#64748b">
          • 119 타고 응급실 반복 방문
        </text>
        <text x="25" y="280" font-family="${fontFamilies}" font-size="16" fill="#64748b">
          • 응급실 도착하면 증상 소실
        </text>
      </g>

      <!-- Right: Medical Fact -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="340" rx="20" fill="#eef2ff" stroke="#a5b4fc" stroke-width="2" />
        <rect x="25" y="25" width="130" height="36" rx="8" fill="#4f46e5" />
        <text x="90" y="49" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">의학적 팩트</text>
        
        <text x="25" y="100" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1e1b4b">
          심장은 지극히 정상,
        </text>
        <text x="25" y="130" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1e1b4b">
          뇌 편도체의 가짜 경보!
        </text>

        <text x="25" y="175" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 심장 근육에 물리적 이상 없음
        </text>
        <text x="25" y="210" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 뇌 편도체가 생명 위협으로 착각
        </text>
        <text x="25" y="245" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 교감신경에 아드레날린 폭격
        </text>
        <text x="25" y="280" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#4f46e5">
          • 공황발작으로 절대 죽지 않음!
        </text>
      </g>
    </g>

    <!-- Key Takeaway Banner -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="175" rx="16" fill="#fff7ed" stroke="#fdba74" />
      <text x="30" y="42" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#c2410c">
        ⚠️ 팩트 폭격 : 심장 검사만 반복하는 것은 치료가 아닙니다
      </text>
      <text x="30" y="80" font-family="${fontFamilies}" font-size="16" fill="#431407">
        심장은 뇌 편도체의 흥분 신호에 따라 열심히 반응했을 뿐 죄가 없습니다.
      </text>
      <text x="30" y="110" font-family="${fontFamilies}" font-size="16" fill="#431407">
        가짜 위험 신호를 뿜어내는 <tspan font-weight="bold" fill="#ea580c">뇌신경계의 과민한 공포 반응(편도체-시상하부 축)</tspan>을 꺼야 합니다.
      </text>
      <text x="30" y="142" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#c2410c">
        👉 뇌와 자율신경계의 과각성을 가라앉히는 치료가 핵심입니다.
      </text>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 750)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        부평역 7번 출구 | 뇌기능 정밀 검사 &amp; 자율신경 스트레스 평가
      </text>
    </g>
  </g>
</svg>`;
}

// 3. WRONG 02 CARD (오답 2: 신경안정제 의존)
function generateWrong2Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Chapter Header -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">❌ CHAPTER 02. 가장 흔한 오답 02</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 50)">
      <text x="0" y="38" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#991b1b" letter-spacing="-1">
        "신경안정제만 먹으면 언젠가 완치될 줄 알았어요"
      </text>
      <text x="0" y="80" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#475569">
        약을 먹을 땐 가라앉지만, 왜 약을 줄이거나 끊으면 공황이 재발할까?
      </text>
    </g>

    <!-- Differences Table Grid -->
    <g transform="translate(55, 170)">
      <rect x="0" y="0" width="860" height="340" rx="20" fill="#f8fafc" stroke="#cbd5e1" />
      
      <!-- Table Header -->
      <line x1="0" y1="70" x2="860" y2="70" stroke="#cbd5e1" stroke-width="2" />
      <line x1="430" y1="0" x2="430" y2="340" stroke="#cbd5e1" stroke-width="2" />
      
      <text x="215" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#64748b" text-anchor="middle">양약 항불안제 (대증 요법)</text>
      <text x="645" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#4f46e5" text-anchor="middle">한방 1:1 원인 치료 (자생력 회복)</text>

      <!-- Row 1 -->
      <text x="35" y="115" font-family="${fontFamilies}" font-size="17" fill="#334155">💊 <tspan font-weight="bold">뇌 신경계를 강제로 억제·진정</tspan></text>
      <text x="465" y="115" font-family="${fontFamilies}" font-size="17" fill="#1e1b4b">🌿 <tspan font-weight="bold">편도체 감도와 자율신경 자체 정상화</tspan></text>

      <!-- Row 2 -->
      <text x="35" y="170" font-family="${fontFamilies}" font-size="17" fill="#334155">⏳ <tspan font-weight="bold">복용 중에만 효과</tspan> (약효 4~6시간)</text>
      <text x="465" y="170" font-family="${fontFamilies}" font-size="17" fill="#1e1b4b">🛡️ <tspan font-weight="bold">치료 종료 후에도 재발 방지</tspan> 유지</text>

      <!-- Row 3 -->
      <text x="35" y="225" font-family="${fontFamilies}" font-size="17" fill="#334155">⚠️ 졸림, 멍함, 내성 및 의존성 위험</text>
      <text x="465" y="225" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#059669">✨ 내성·졸림 없이 머리가 맑아짐</text>

      <!-- Row 4 -->
      <text x="35" y="280" font-family="${fontFamilies}" font-size="17" fill="#334155">❌ 감량 시 반동성 불안 및 금단 증상</text>
      <text x="465" y="280" font-family="${fontFamilies}" font-size="17" fill="#1e1b4b">⭕ 안전한 단계별 양약 테이퍼링(단약)</text>
    </g>

    <!-- Key Takeaway Banner -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="175" rx="16" fill="#eef2ff" stroke="#c7d2fe" />
      <text x="30" y="42" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#3730a3">
        💡 치료의 본질 : 강제 진정이 아닌 '뇌신경 스스로의 조절력 재건'
      </text>
      <text x="30" y="80" font-family="${fontFamilies}" font-size="16" fill="#1e1b4b">
        신경안정제는 급성기 발작을 넘기는 응급약일 뿐, 편도체의 병적 과민성을 치료하지 못합니다.
      </text>
      <text x="30" y="110" font-family="${fontFamilies}" font-size="16" fill="#1e1b4b">
        심장의 화(心火)를 내리고 기혈을 보하여 <tspan font-weight="bold" fill="#4f46e5">뇌가 스트레스를 견뎌내는 저항력</tspan>을 키워야 진정한 완치에 도달합니다.
      </text>
      <text x="30" y="142" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#3730a3">
        👉 양약을 복용 중이라도 안전하게 병행하며 줄여나갈 수 있습니다.
      </text>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 750)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        부평역 7번 출구 | 양약 감량(테이퍼링) &amp; 공황장애 한방 통합 클리닉
      </text>
    </g>
  </g>
</svg>`;
}

// 4. WRONG 03 CARD (오답 3: 멘탈 탓)
function generateWrong3Card() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Chapter Header -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="#dc2626" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">❌ CHAPTER 03. 가장 흔한 오답 03</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 50)">
      <text x="0" y="38" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#991b1b" letter-spacing="-1">
        "내가 나약하고 겁이 많아서 공황이 온 걸까요?"
      </text>
      <text x="0" y="80" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#475569">
        의지력으로 참으려 할수록 공황발작이 더 폭발하는 신경학적 이유
      </text>
    </g>

    <!-- Visual Hazard Flow -->
    <g transform="translate(55, 170)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="265" height="340" rx="16" fill="#fef2f2" stroke="#fca5a5" />
        <text x="132" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">STEP 01</text>
        <text x="132" y="80" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b" text-anchor="middle">초기 불안 감지</text>
        <circle cx="132" cy="150" r="45" fill="#fee2e2" />
        <text x="132" y="162" font-family="${fontFamilies}" font-size="36" text-anchor="middle">💓😰</text>
        <text x="20" y="235" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          가슴이 조금 답답하거나
        </text>
        <text x="20" y="262" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          맥박이 빨라지는 것을
        </text>
        <text x="20" y="289" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626" text-anchor="start">
          예민하게 감지함
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(295, 0)">
        <rect x="0" y="0" width="265" height="340" rx="16" fill="#fff7ed" stroke="#fdba74" />
        <text x="132" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ea580c" text-anchor="middle">STEP 02</text>
        <text x="132" y="80" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#c2410c" text-anchor="middle">의지력으로 억압</text>
        <circle cx="132" cy="150" r="45" fill="#ffedd5" />
        <text x="132" y="162" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🧠⚡</text>
        <text x="20" y="235" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          "참아야 해, 정신 차려"
        </text>
        <text x="20" y="262" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          강박적 통제를 시도하며
        </text>
        <text x="20" y="289" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ea580c" text-anchor="start">
          교감신경을 더 자극
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(595, 0)">
        <rect x="0" y="0" width="265" height="340" rx="16" fill="#fef2f2" stroke="#f87171" stroke-width="2" />
        <text x="132" y="45" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#b91c1c" text-anchor="middle">STEP 03 (폭발)</text>
        <text x="132" y="80" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#7f1d1d" text-anchor="middle">예기불안과 대폭발</text>
        <circle cx="132" cy="150" r="45" fill="#fee2e2" />
        <text x="132" y="162" font-family="${fontFamilies}" font-size="36" text-anchor="middle">🚨💥</text>
        <text x="20" y="235" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          편도체가 위협으로 인식
        </text>
        <text x="20" y="262" font-family="${fontFamilies}" font-size="15" fill="#475569" text-anchor="start">
          아드레날린 대량 분출
        </text>
        <text x="20" y="289" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#b91c1c" text-anchor="start">
          극심한 공황발작 발현
        </text>
      </g>
    </g>

    <!-- Key Takeaway Banner -->
    <g transform="translate(55, 545)">
      <rect x="0" y="0" width="860" height="175" rx="16" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="30" y="42" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#1e293b">
        💡 올바른 대처 : 싸우지 말고 흘려보내기 (수용과 이완)
      </text>
      <text x="30" y="80" font-family="${fontFamilies}" font-size="16" fill="#475569">
        공황발작은 의지력의 싸움이 아닙니다. 자책을 멈추고
      </text>
      <text x="30" y="110" font-family="${fontFamilies}" font-size="16" fill="#475569">
        <tspan font-weight="bold" fill="#4f46e5">"이건 가짜 경보다, 10분 뒤면 파도처럼 지나간다"</tspan>는 사실을 인지하고 복식 호흡을 유지할 때
      </text>
      <text x="30" y="142" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#4f46e5">
        편도체의 흥분이 가장 빠르게 가라앉습니다.
      </text>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 750)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        부평역 7번 출구 | 인지행동 이완 요법 &amp; 자율신경 조절 클리닉
      </text>
    </g>
  </g>
</svg>`;
}

// 5. TREATMENT CARD (오답 종결 맞춤치료)
function generateTreatmentCard() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.2" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-240" y="0" width="480" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">⭕ CHAPTER 04. 오답 종결 솔루션</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2e8f0" stroke-width="2" />
    
    <!-- Title Section -->
    <g transform="translate(55, 45)">
      <text x="0" y="36" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f172a" letter-spacing="-1">
        공황장애를 종결짓는 1:1 맞춤 한방 치료
      </text>
      <text x="0" y="76" font-family="${fontFamilies}" font-size="22" font-weight="600" fill="#059669">
        편도체 감도 정상화 &amp; 자율신경 밸런스 회복 3대 복합 솔루션
      </text>
    </g>

    <!-- 3 Step Solution Cards -->
    <g transform="translate(55, 150)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#ecfdf5" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🌿</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          01. 청심안신(淸心安神) &amp; 소간해울(疏肝解鬱) 1:1 맞춤 한약
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 시호가용골모려탕, 영계출감탕, 귀비탕 가감방 처방
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 심장의 화(心火)와 상열감을 내리고 편도체의 과민한 공포 반응을 근본적으로 차단
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#059669">
          👉 이유 없는 가슴 두근거림, 불안감, 불면증 동시 해결
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 180)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#eff6ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">📍</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          02. 자율신경 안정 경혈 침구 &amp; 청정 약침 치료
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 전중(단중 - 가슴 화병 혈자리), 신문, 내관, 백회 혈자리 자극
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 척추 신경절 주변에 약침을 시술하여 교감신경 긴장을 즉각 완화
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#4f46e5">
          👉 흉부 압박감과 과호흡 증상을 편안하게 이완
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 360)">
        <rect x="0" y="0" width="860" height="160" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="60" height="60" rx="12" fill="#fdf4ff" />
        <text x="55" y="65" font-family="${fontFamilies}" font-size="28" text-anchor="middle">🧠</text>
        <text x="105" y="48" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          03. 두개천골 추나요법 &amp; 뇌파 훈련(뉴로피드백)
        </text>
        <text x="105" y="80" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 경추와 흉곽 근막을 이완하여 뇌척수액 순환을 촉진하고 신경 압박 해소
        </text>
        <text x="105" y="108" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌파를 안정적인 알파파 상태로 유도하여 예기불안과 공황 재발 차단
        </text>
        <text x="105" y="136" font-family="${fontFamilies}" font-size="14" font-weight="bold" fill="#9333ea">
          👉 지하철, 엘리베이터, 운전 등 일상 공간 완벽 복귀
        </text>
      </g>
    </g>

    <!-- Clinic Footer Branding -->
    <g transform="translate(55, 730)">
      <line x1="0" y1="0" x2="860" y2="0" stroke="#f1f5f9" stroke-width="2" />
      <text x="0" y="45" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
        해아림한의원 인천부평점
      </text>
      <text x="0" y="75" font-family="${fontFamilies}" font-size="15" fill="#64748b">
        한방침구과 전문의 권형근 대표원장 | 부평역 7번 출구 | 032-719-3472
      </text>
      <g transform="translate(680, 15)">
        <rect x="0" y="0" width="180" height="52" rx="12" fill="#059669" />
        <text x="90" y="33" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">네이버 간편예약</text>
      </g>
    </g>
  </g>
</svg>`;
}

async function renderCard(svgStr, outPath) {
  const resvg = new Resvg(svgStr, {
    fitTo: { mode: 'width', value: 1080 }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(outPath, pngBuffer);
}

async function run() {
  console.log('Rendering Oryu Wanggil Panic Cards (Thumbnail + Wrong1 + Wrong2 + Wrong3 + Treatment)...');
  
  const cards = [
    { name: '01_naver_main_thumbnail.jpg', svg: generateMainThumbnail() },
    { name: '02_point1_wrong1.jpg', svg: generateWrong1Card() },
    { name: '03_point2_wrong2.jpg', svg: generateWrong2Card() },
    { name: '04_point3_wrong3.jpg', svg: generateWrong3Card() },
    { name: '05_point4_treatment.jpg', svg: generateTreatmentCard() }
  ];

  for (const card of cards) {
    for (const dir of targetDirs) {
      const outPath = path.join(dir, card.name);
      await renderCard(card.svg, outPath);
      console.log(`Saved: ${outPath}`);
    }
  }

  console.log('All 5 C-type cards generated successfully!');
}

run().catch(console.error);
