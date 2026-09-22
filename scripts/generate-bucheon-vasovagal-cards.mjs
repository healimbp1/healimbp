import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bucheon-vasovagal',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (B패턴 메인 썸네일)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2b38" />
      <stop offset="50%" stop-color="#134352" />
      <stop offset="100%" stop-color="#0b1d28" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0ea5e9" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- Top Category Badge -->
  <g transform="translate(540, 65)">
    <rect x="-210" y="0" width="420" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">🌀 자율신경 &amp; 미주신경성실신 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#e0f2fe" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
        갑자기 눈앞이 캄캄해지고 주저앉을 때의 해법
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="44" font-weight="bold" fill="#0c4a6e" letter-spacing="-1.5">
      부천 미주신경성실신 원인과 회복 로드맵
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      검사상 이상 없는 실신 공포 · 자율신경 3단계 치료
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0369a1">
          심장 문제가 아닌 '자율신경계 과민 반사'
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          극심한 피로와 긴장 시 부교감신경이 급격히 치솟아 뇌 혈류가 일시 차단되는 현상
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0369a1">
          단순 빈혈 착각과 '재발 불안'의 악순환 차단
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          혈액 부족이 아닌 혈관 수축·이완 조절 실패이므로 신경계 자생력을 길러야 재발 방지
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <circle cx="67" cy="67" r="26" fill="#0284c7" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0369a1">
          뇌 혈류를 끌어올리는 3단계 맞춤 한방 치료
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          자율신경 한약 · 두뇌 뉴로피드백 · 두개천골 추나로 혈압·심박 자동 조절력 완성
        </text>
      </g>
    </g>

    <!-- Bottom Footer Branding -->
    <g transform="translate(55, 755)">
      <rect x="0" y="0" width="860" height="75" rx="14" fill="#0f172a" />
      <text x="35" y="45" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#38bdf8">
        해아림한의원 인천부평점
      </text>
      <text x="320" y="45" font-family="${fontFamilies}" font-size="16" fill="#94a3b8">
        | 부천·부평역 인근 · 자율신경실조증 &amp; 실신 1:1 맞춤 치료
      </text>
    </g>
  </g>
</svg>`;
}

// 2. CHAPTER 01 (흔히 겪는 3대 오해와 함정 카드)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2b38" />
      <stop offset="50%" stop-color="#134352" />
      <stop offset="100%" stop-color="#0b1d28" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="38" rx="8" fill="#fee2e2" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">
        CHAPTER 01. 3대 오해와 함정
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      미주신경성 실신 환자의 3가지 오해
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      원인을 잘못 알면 불안감이 커지고 치료 시기를 놓치게 됩니다
    </text>

    <!-- 3 Mistake Boxes -->
    <g transform="translate(55, 220)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#dc2626" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">함정 1. 뇌·심장병 의심</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          "뇌종양이나 심장마비 전조 증상일까?" 공포
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#450a0a">
          • 심장과 뇌 MRI 검사에서 정상으로 나오는 것은 '기질적 손상'이 없기 때문입니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#450a0a">
          • 혈관을 조절하는 자율신경계의 일시적 '기능적 오작동'이 진짜 원인입니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          → 팩트: 심장·뇌 질환이 아니므로 자율신경 밸런스를 치료해야 합니다.
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#475569" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">함정 2. 단순 빈혈 착각</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          철분제와 영양제만 챙겨 먹으며 방치
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 빈혈은 피가 부족한 것이지만, 실신은 혈관이 갑자기 늘어나 뇌 혈압이 떨어지는 병입니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 영양제로는 혈관 수축·이완을 주관하는 신경계를 고칠 수 없습니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 팩트: 혈관 긴장도를 조절하는 자율신경 회복이 우선입니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#0284c7" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">함정 3. 불가항력 체념</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
          "치료법이 없으니 쓰러질 때 조심하는 수밖에 없다?"
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 쓰러질까 봐 두려워 외출을 피하는 '예기불안'은 뇌를 더 과각성시킵니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 전조 증상 시 올바른 응급 대처와 자율신경 한방 치료로 완치가 가능합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 팩트: 뇌 자생력을 깨우면 실신 공포에서 완전히 벗어날 수 있습니다.
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7">
        💡 해아림 핵심: 불치병이 아닙니다. 자율신경계의 혈관 조절력을 복원하면 회복됩니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. CHAPTER 02 (왜 눈앞이 하얘질까? 3대 심층 원인 카드)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2b38" />
      <stop offset="50%" stop-color="#134352" />
      <stop offset="100%" stop-color="#0b1d28" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="38" rx="8" fill="#e0f2fe" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">
        CHAPTER 02. 3대 심층 원인
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      왜 눈앞이 하얘지며 쓰러질까? 3대 원인
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      자율신경 불균형과 인체 기혈 순환의 급격한 붕괴
    </text>

    <!-- 3 Root Cause Blocks -->
    <g transform="translate(55, 220)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#0284c7" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">1. 미주신경 과흥분</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">혈관 확장 &amp; 심박 급감</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 부교감신경(미주신경)이 비정상적으로 과각성되면 심장이 느리게 뛰고 혈관이 늘어납니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 중력에 의해 혈액이 하체로 쏠리며 뇌로 가는 산소 공급이 순간적으로 끊겨 실신합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 치료 타깃: 자율신경계 과민 반사 안정화 및 혈관 탄력 회복
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#16a34a" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">2. 교감신경의 번아웃</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d">만성 스트레스로 인한 탈진</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 지속적인 과로와 수면 부족으로 교감신경이 긴장하다가 한순간 바닥나 방전됩니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 버스, 지하철, 밀폐 공간 등 작은 자극에도 신경계가 쇼크를 일으키며 셧다운됩니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#15803d">
          → 치료 타깃: 방전된 뇌 신경 에너지를 채우고 스트레스 저항력 증대
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fefce8" stroke="#fef08a" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#ca8a04" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">3. 기허하함·심비양허</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#a16207">맑은 기운이 뇌로 오르지 못함</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 비위(소화기)와 심장의 기운이 약해지면 맑은 청양지기(淸陽之氣)가 머리로 오르지 못합니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 기운이 아래로 푹 꺼지며(氣虛下陷) 어지럼증, 식은땀, 안면창백이 발생합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#a16207">
          → 치료 타깃: 기운을 위로 끌어올리고 심장을 보하는 승양익기(升陽益氣)
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1">
        💡 뇌 혈류를 유지하는 자율신경 조절력과 바탕 기력을 함께 치료해야 합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. CHAPTER 03 (3단계 회복 로드맵 카드)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2b38" />
      <stop offset="50%" stop-color="#134352" />
      <stop offset="100%" stop-color="#0b1d28" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="38" rx="8" fill="#e0f2fe" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">
        CHAPTER 03. 3단계 로드맵
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      3단계 회복 로드맵 &amp; 1:1 맞춤 한방 치료
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      혈관과 뇌 혈류를 스스로 지키는 신경계 자생력을 깨웁니다
    </text>

    <!-- 3 Step Boxes -->
    <g transform="translate(55, 220)">
      <!-- Step 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#0284c7" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">1단계: 급성 안정기</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">[자율신경 쇼크 및 공포 진정]</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 과민해진 미주신경 반사를 안정시키고 심장 박동을 유지하는 한약 (사역산, 온담탕 가감)
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 가슴 답답함과 예기불안을 가라앉히는 단중혈, 백회혈, 내관혈 맞춤 약침 치료
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 목표: 쓰러질 것 같은 어지럼 및 식은땀, 가슴 두근거림 즉각 완화
        </text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#16a34a" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">2단계: 혈류 복원기</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d">[뇌파 안정 &amp; 두개천골 추나]</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 기립 시에도 뇌 혈류를 안정적으로 유지하도록 돕는 두뇌훈련 뉴로피드백
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 경추와 흉추의 긴장을 풀어 경동맥 및 뇌척수액 순환을 촉진하는 두개천골 추나요법(CST)
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#15803d">
          → 목표: 지하철, 버스, 서 있는 환경에서도 뇌 혈류와 혈압 정상 유지
        </text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fefce8" stroke="#fef08a" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#ca8a04" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">3단계: 체질 강화기</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#a16207">[승양익기 &amp; 재발 방지]</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 비위와 심포를 보해 기운을 위로 올리는 보중익기탕, 귀비탕 맞춤 체질 탕약
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#1e293b">
          • 일상 스트레스 상황에서도 혈관 긴장도를 유지하는 신체 자생력 완성
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#a16207">
          → 목표: 치료 종결 후에도 실신 재발 없이 당당하고 자유로운 외출 가능
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1">
        💡 해아림 3단계 치료는 혈관과 뇌 자율신경계의 본래 조절력을 회복시킵니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. CHAPTER 04 (가정 내 3대 실천 수칙 카드)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f2b38" />
      <stop offset="50%" stop-color="#134352" />
      <stop offset="100%" stop-color="#0b1d28" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="38" rx="8" fill="#e0f2fe" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">
        CHAPTER 04. 생활 실천 수칙
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      실신 전조 증상 대처 &amp; 일상 관리 3대 수칙
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      골든타임을 지키는 응급 동작과 자율신경 회복 루틴
    </text>

    <!-- 3 Action Blocks -->
    <g transform="translate(55, 220)">
      <!-- Action 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#0284c7" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">수칙 1. 전조 증상 응급 자세</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">다리 꼬기 &amp; 즉시 주저앉기</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 식은땀, 어지럼, 시야 흐림이 올 때 다리를 X자로 꼬고 허벅지에 강하게 힘을 줍니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 하체 혈액을 심장과 뇌로 강제로 짜 올려 혈압 급락과 실신을 즉시 방어합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 핵심: 버티지 말고 그 자리에서 즉시 쪼그려 앉거나 눕기
        </text>
      </g>

      <!-- Action 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#16a34a" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">수칙 2. 혈류량 유지 습관</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#15803d">미온수 수분 섭취 &amp; 천천히 기립</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#14532d">
          • 하루 1.5~2L 미온수를 충분히 마셔 유효 혈액 순환량을 안정적으로 확보합니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#14532d">
          • 잠자리나 의자에서 일어날 때 3단계로 천천히 일어나는 기립 루틴을 습관화합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#16a34a">
          → 핵심: 기립성 혈압 저하와 말초 혈관 쇼크 예방
        </text>
      </g>

      <!-- Action 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fefce8" stroke="#fef08a" stroke-width="1.5" />
        <rect x="25" y="25" width="220" height="40" rx="8" fill="#ca8a04" />
        <text x="135" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">수칙 3. 취침 전 족욕 &amp; 이완</text>
        <text x="265" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#a16207">40도 온수 족욕과 복식호흡</text>
        
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#713f12">
          • 취침 90분 전 40도 온수에 15분간 족욕하여 긴장된 전신 자율신경을 이완합니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#713f12">
          • 4-7-8 복식호흡으로 밤사이 깊은 수면을 유도해 자율신경 조절 중추를 충전합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#ca8a04">
          → 핵심: 수면 중 자율신경 밸런스 회복과 피로 방전 예방
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1">
        💡 전조 증상 시 지체 없이 주저앉고 자율신경 치료를 시작하면 실신은 완치될 수 있습니다.
      </text>
    </g>
  </g>
</svg>`;
}

async function renderCards() {
  const cards = [
    { name: '01_naver_main_thumbnail.jpg', svg: generateMainThumbnail() },
    { name: '02_point1_cause.jpg', svg: generatePoint1() },
    { name: '03_point2_checklist.jpg', svg: generatePoint2() },
    { name: '04_point3_treatment.jpg', svg: generatePoint3() },
    { name: '05_point4_selfcare.jpg', svg: generatePoint4() }
  ];

  for (const card of cards) {
    const resvg = new Resvg(card.svg, {
      fitTo: { mode: 'width', value: 1080 }
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    for (const dir of targetDirs) {
      const filePath = path.join(dir, card.name);
      fs.writeFileSync(filePath, pngBuffer);
      console.log(`Saved: ${filePath}`);
    }
  }
}

renderCards().then(() => {
  console.log('All Bucheon Vasovagal Syncope B-Pattern Cards rendered successfully!');
});
