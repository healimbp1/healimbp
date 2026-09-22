import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const targetDirs = [
  'c:/Users/PC/Downloads/home/static/blog-images/bupyeong-hyperhidrosis',
  'c:/Users/PC/Downloads/home/static/blog-images'
];

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. MAIN THUMBNAIL (메인 썸네일)
function generateMainThumbnail() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1e2d" />
      <stop offset="50%" stop-color="#103244" />
      <stop offset="100%" stop-color="#081723" />
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
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">⚡ 뇌신경 &amp; 자율신경 다한증 클리닉</text>
  </g>

  <!-- Main Card Container -->
  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <!-- Subtitle Hook Pill -->
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="560" height="40" rx="8" fill="#fef2f2" />
      <text x="20" y="27" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#dc2626">
        바르는 약도, 억지로 참는 것도 다 틀렸습니다
      </text>
    </g>

    <!-- Main Title -->
    <text x="55" y="145" font-family="${fontFamilies}" font-size="42" font-weight="bold" fill="#0c4a6e" letter-spacing="-1.5">
      부평 다한증 치료가 실패했던 3가지 이유
    </text>
    <text x="55" y="198" font-family="${fontFamilies}" font-size="25" font-weight="bold" fill="#334155" letter-spacing="-0.5">
      땀구멍 억제가 아닌 뇌와 자율신경을 꺼야 멈춥니다
    </text>

    <line x1="55" y1="235" x2="915" y2="235" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="6 6" />

    <!-- 3 Key Summary Blocks -->
    <g transform="translate(55, 265)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fee2e2" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#991b1b">
          [오답 01] 땀구멍만 틀어막으면 해결된다?
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          끓는 냄비 뚜껑을 막으면 다른 곳으로 터지는 '보상성 다한증'의 역설
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 155)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#fee2e2" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#dc2626" text-anchor="middle">✕</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#991b1b">
          [오답 02] 손발에 땀이 나니 손발에 열이 많다?
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          손발은 차가운 피해자일 뿐, 진짜 원인은 가슴과 머리의 '상열하한(上熱下寒)'
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 310)">
        <rect x="0" y="0" width="860" height="135" rx="18" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="85" height="85" rx="16" fill="#e0f2fe" />
        <text x="67" y="77" font-family="${fontFamilies}" font-size="28" font-weight="bold" fill="#0284c7" text-anchor="middle">✓</text>
        
        <text x="135" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0369a1">
          [팩트 정답] 뇌 신경계 브레이크를 복원하는 역발상 치료
        </text>
        <text x="135" y="90" font-family="${fontFamilies}" font-size="16" fill="#475569">
          교감신경 다운시프트 한약과 뇌파 뉴로피드백으로 땀샘 명령 스위치를 정상화
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
        | 부평역 7번 출구 · 야간진료 · 자율신경 1:1 맞춤 치료
      </text>
    </g>
  </g>
</svg>`;
}

// 2. 오답 1 카드 (오답 01. 땀구멍만 틀어막으면 끝난다?)
function generatePoint1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1e2d" />
      <stop offset="50%" stop-color="#103244" />
      <stop offset="100%" stop-color="#081723" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="220" height="38" rx="8" fill="#fee2e2" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">
        ❌ 오답 01 파헤치기
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      오답 01. "땀구멍만 틀어막으면 끝난다?" ❌
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      땀샘을 억지로 막을수록 뇌는 다른 곳으로 땀을 더 폭발시킵니다
    </text>

    <!-- 3 Explanatory Boxes -->
    <g transform="translate(55, 220)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#dc2626" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">압력밥솥의 역설</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          끓는 냄비 구멍만 막으면 뚜껑이 튀어나갑니다
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#450a0a">
          • 체내 울화와 신경 흥분이 끓고 있는데 배출구만 막으면 압력이 급상승합니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#450a0a">
          • 손발 땀 수술 후 등, 엉덩이, 사타구니로 터져 나오는 '보상성 다한증'의 원인입니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          → 단순 억제제와 신경 차단술이 근본 치료가 될 수 없는 이유입니다.
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#475569" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">피부 장벽 손상</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          알루미늄 억제제 반복 사용의 한계
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 땀구멍을 물리적으로 플러그처럼 막는 제제는 피부 가려움, 따가움, 건조증을 유발합니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 약효가 떨어지면 신경 과민으로 인해 반동성 땀 분비가 재발합니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 피부 겉면이 아닌 몸 안의 조절 시스템을 고쳐야 합니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#0284c7" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">💡 팩트 정답</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
          밥솥 밑의 '가스 불'을 꺼야 끓는 물이 멈춥니다
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 땀을 분비하라고 땀샘에 명령을 내리는 주체는 뇌의 '편도체'와 '교감신경'입니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 과열된 뇌 신경 비상벨을 꺼주고 심장의 흥분을 식혀주어야 땀이 멈춥니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 핵심: 교감신경 다운시프트 체질 맞춤 탕약 치료
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7">
        💡 해아림 팩트: 땀구멍은 죄가 없습니다. 명령을 내리는 뇌 자율신경을 다스려야 합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. 오답 2 카드 (오답 02. 손발에 땀이 나니 손발에 열이 많다?)
function generatePoint2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1e2d" />
      <stop offset="50%" stop-color="#103244" />
      <stop offset="100%" stop-color="#081723" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="220" height="38" rx="8" fill="#fee2e2" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">
        ❌ 오답 02 파헤치기
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      오답 02. "손발에 땀 나니 손발에 열 많다?" ❌
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      손발은 억울한 피해자일 뿐, 진짜 범인은 가슴과 머리의 '상열(上熱)'
    </text>

    <!-- 3 Explanatory Boxes -->
    <g transform="translate(55, 220)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#dc2626" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">손발 냉증의 진실</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          다한증 환자의 90%는 손발이 얼음장처럼 차갑습니다
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#450a0a">
          • 손발이 뜨거워서 땀이 나는 것이 아니라, 차가운 손발에서 식은땀이 맺힙니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#450a0a">
          • 손끝과 발끝의 혈류가 차단되어 시리고 저린 증상이 자주 동반됩니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          → 손발만 차갑게 식히는 것은 오히려 혈관을 수축시켜 악화시킵니다.
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#475569" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">상열하한(上熱下寒)</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          가슴 위로는 열이 쏠리고, 손발은 냉각되는 불균형
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 긴장·스트레스 시 교감신경 폭발로 모든 혈액이 심장과 뇌로 몰립니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 가슴은 답답하고 얼굴은 붉어지며, 쥐어짜진 말초 땀샘에서 땀이 분출됩니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 상하 기혈 순환의 대류 작용이 완전히 깨진 상태입니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#0284c7" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">💡 팩트 정답</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
          가슴의 울화를 풀고 손발로 따뜻한 기혈을 보내야 합니다
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 상초의 맺힌 화(火)를 내리고 손발 말초 혈관을 확장시키는 한약 처방 적용.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 손발이 따뜻해지고 혈류가 돌기 시작하면 쥐어짜듯 나던 땀이 저절로 멈춥니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 핵심: 사역산, 가미소요산 가감방을 통한 기혈 대류 소통
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7">
        💡 해아림 팩트: 손발은 죄가 없습니다. 가슴과 머리의 상열(上熱)을 풀어야 합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. 오답 3 카드 (오답 03. 마음 편하게 먹고 긴장 안 하면 된다?)
function generatePoint3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1e2d" />
      <stop offset="50%" stop-color="#103244" />
      <stop offset="100%" stop-color="#081723" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="220" height="38" rx="8" fill="#fee2e2" />
      <text x="110" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">
        ❌ 오답 03 파헤치기
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      오답 03. "마음 편히 먹고 긴장 안 하면 된다?" ❌
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      의지로 자율신경과 땀샘을 조절할 수 있는 인간은 없습니다
    </text>

    <!-- 3 Explanatory Boxes -->
    <g transform="translate(55, 220)">
      <!-- Box 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#dc2626" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">불수의신경의 지배</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#991b1b">
          심장 박동과 땀샘은 의식으로 통제되지 않습니다
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#450a0a">
          • 심장, 혈압, 위장, 땀샘은 뇌의 '자율신경계'가 100% 자동 제어하는 영역입니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#450a0a">
          • 내가 심장을 억지로 멈출 수 없듯이, 의지만으로 땀구멍을 닫을 수는 없습니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#dc2626">
          → 의지박약이나 소심한 성격 탓이 아닌 신경계의 오작동입니다.
        </text>
      </g>

      <!-- Box 2 -->
      <g transform="translate(0, 220)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#475569" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">억압의 역설</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0f172a">
          '땀 참아야지' 할수록 뇌는 땀을 2배로 뿜어냅니다
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 강박적으로 긴장하지 않으려 애쓸수록 편도체는 이를 '위험 신호'로 인지합니다.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#334155">
          • 경보 시스템이 울리며 교감신경을 더 강하게 흥분시켜 땀을 폭발시킵니다.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 정신력으로 버티는 것은 불난 집에 부채질을 하는 것과 같습니다.
        </text>
      </g>

      <!-- Box 3 -->
      <g transform="translate(0, 440)">
        <rect x="0" y="0" width="860" height="200" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="25" y="25" width="180" height="40" rx="8" fill="#0284c7" />
        <text x="115" y="51" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">💡 팩트 정답</text>
        
        <text x="225" y="52" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#0369a1">
          뇌 신경망을 직접 훈련하고 한약으로 신경을 진정시켜야 합니다
        </text>
        <text x="25" y="105" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 뇌가 긴장 상태에서도 안정된 알파파를 유지하도록 돕는 '뉴로피드백' 훈련.
        </text>
        <text x="25" y="138" font-family="${fontFamilies}" font-size="16" fill="#0c4a6e">
          • 뇌 신경계의 브레이크(GABA) 힘을 물리적으로 길러주는 체질 맞춤 탕약 치료.
        </text>
        <text x="25" y="170" font-family="${fontFamilies}" font-size="15" font-weight="bold" fill="#0284c7">
          → 핵심: 멘탈이 아닌 뇌 자율신경계의 물리적 자생력 복원
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0284c7">
        💡 해아림 팩트: 참는 것이 아니라, 뇌 신경망의 자율 조절력을 되살려주어야 합니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. 치료 프로토콜 카드 (오답을 종결짓는 1:1 역발상 치료 프로토콜)
function generatePoint4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1e2d" />
      <stop offset="50%" stop-color="#103244" />
      <stop offset="100%" stop-color="#081723" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect x="0" y="0" width="970" height="960" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e0f2fe" stroke-width="2" />
    
    <g transform="translate(55, 45)">
      <rect x="0" y="0" width="240" height="38" rx="8" fill="#e0f2fe" />
      <text x="120" y="26" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0369a1" text-anchor="middle">
        ✓ 1:1 치료 프로토콜
      </text>
    </g>

    <text x="55" y="135" font-family="${fontFamilies}" font-size="38" font-weight="bold" fill="#0c4a6e">
      오답을 종결짓는 1:1 역발상 솔루션
    </text>
    <text x="55" y="180" font-family="${fontFamilies}" font-size="22" fill="#475569">
      땀샘 억제가 아닌 뇌 자생력과 자율신경 밸런스를 복원하는 4대 처방
    </text>

    <!-- 4 Treatment Blocks -->
    <g transform="translate(55, 225)">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="415" height="295" rx="16" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5" />
        <rect x="20" y="20" width="55" height="55" rx="12" fill="#0284c7" />
        <text x="47" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
        <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#0369a1">교감신경 다운 한약</text>
        
        <text x="20" y="110" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f172a">
          사역산 · 황련아교탕 가감방
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 과열된 편도체 흥분을 진정
        </text>
        <text x="20" y="175" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 가슴의 울화 끄고 상열하한 소통
        </text>
        <text x="20" y="205" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 땀샘 명령 스위치를 정상화
        </text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(445, 0)">
        <rect x="0" y="0" width="415" height="295" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
        <rect x="20" y="20" width="55" height="55" rx="12" fill="#16a34a" />
        <text x="47" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
        <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#15803d">뇌파 뉴로피드백</text>
        
        <text x="20" y="110" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f172a">
          두뇌 신경망 자율 조절 훈련
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 불안·긴장 유발 고베타파 억제
        </text>
        <text x="20" y="175" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 안정 알파파·SMR파 스스로 생성
        </text>
        <text x="20" y="205" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 긴장 상황에서도 땀 분비 차단
        </text>
      </g>

      <!-- Item 3 -->
      <g transform="translate(0, 320)">
        <rect x="0" y="0" width="415" height="295" rx="16" fill="#fefce8" stroke="#fef08a" stroke-width="1.5" />
        <rect x="20" y="20" width="55" height="55" rx="12" fill="#ca8a04" />
        <text x="47" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
        <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#a16207">두개천골 추나요법</text>
        
        <text x="20" y="110" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f172a">
          교감신경절 긴장 구조적 해소
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 흉추 1~5번 분절 주변 근막 이완
        </text>
        <text x="20" y="175" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 척추를 따르는 교감신경 압박 완화
        </text>
        <text x="20" y="205" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 뇌척수액 순환 촉진 및 두통 해소
        </text>
      </g>

      <!-- Item 4 -->
      <g transform="translate(445, 320)">
        <rect x="0" y="0" width="415" height="295" rx="16" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5" />
        <rect x="20" y="20" width="55" height="55" rx="12" fill="#9333ea" />
        <text x="47" y="56" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">4</text>
        <text x="90" y="55" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#7e22ce">자율신경 홈 루틴</text>
        
        <text x="20" y="110" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0f172a">
          진료실 밖 행동·환경 관리
        </text>
        <text x="20" y="145" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 땀 차오를 때 4-7-8 복식호흡
        </text>
        <text x="20" y="175" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 취침 90분 전 40도 온수 족욕
        </text>
        <text x="20" y="205" font-family="${fontFamilies}" font-size="15" fill="#475569">
          • 카페인·알코올 등 자극 완벽 차단
        </text>
      </g>
    </g>

    <!-- Bottom Footer Note -->
    <g transform="translate(55, 890)">
      <text x="0" y="25" font-family="${fontFamilies}" font-size="16" font-weight="bold" fill="#0369a1">
        💡 보상성 부작용 없이 내 몸의 자생적 조절 능력을 복원하는 해아림 4대 솔루션입니다.
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
  console.log('All 5 Myth-Buster Cards (Thumbnail, Mistake1, Mistake2, Mistake3, Treatment Protocol) rendered successfully!');
});
