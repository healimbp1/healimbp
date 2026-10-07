import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resvg } from '@resvg/resvg-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const targetDirs = [
  path.join(rootDir, 'static', 'blog-images', 'bucheon-maehaekgi-damjeok'),
  path.join(rootDir, 'static', 'blog-images')
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const fontFamilies = "Malgun Gothic, '맑은 고딕', 'Pretendard', -apple-system, sans-serif";

// 1. 01_naver_main_thumbnail.jpg (C패턴 썸네일)
function getSvg1() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#021c1a" flood-opacity="0.18" />
    </filter>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="1" y2="1">
      <stop offset="0%" stop-color="#072421" /><stop offset="50%" stop-color="#0d3832" /><stop offset="100%" stop-color="#041816" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="1" y2="0">
      <stop offset="0%" stop-color="#d97706" /><stop offset="100%" stop-color="#b45309" />
    </linearGradient>
  </defs>

  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(540, 65)">
    <rect x="-260" y="0" width="520" height="48" rx="24" fill="url(#badgeGrad)" />
    <text x="0" y="31" font-family="${fontFamilies}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">⚠️ [부천 상동] 매핵기 · 담적병 오답노트</text>
  </g>

  <g transform="translate(55, 135)">
    <rect x="0" y="0" width="970" height="885" rx="32" fill="#ffffff" filter="url(#shadow)" stroke="#e2ece7" stroke-width="2" />
    
    <g transform="translate(55, 48)">
      <rect x="0" y="0" width="620" height="42" rx="8" fill="#fef3c7" />
      <text x="20" y="28" font-family="${fontFamilies}" font-size="19" font-weight="bold" fill="#92400e">
        위내시경 깨끗한데 목에 가래·이물감 걸려 답답할 때
      </text>
    </g>

    <text x="55" y="145" font-family="${fontFamilies}" font-size="39" font-weight="bold" fill="#0f2922" letter-spacing="-1.5">
      내시경 정상 목이물감, 왜 안 낫는 걸까?
    </text>

    <text x="55" y="195" font-family="${fontFamilies}" font-size="21" font-weight="500" fill="#4d665f">
      역류성 식도염 약만 먹다 병을 키우는 3대 오답과 1:1 역발상 치료
    </text>

    <line x1="55" y1="230" x2="915" y2="230" stroke="#d5e5df" stroke-width="1.5" stroke-dasharray="6,6" />

    <!-- 3 Steps -->
    <g transform="translate(55, 255)">
      <rect width="860" height="150" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="2" />
      <circle cx="65" cy="75" r="32" fill="#dc2626" />
      <text x="65" y="85" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">❌</text>
      <text x="125" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">오답 01. 위산억제제(PPI)만 6개월째 복용하는 함정</text>
      <text x="125" y="102" font-family="${fontFamilies}" font-size="18" fill="#475569">위산 억제가 오히려 소화력을 떨어뜨려 담적을 악화시키는 역설</text>
    </g>

    <g transform="translate(55, 430)">
      <rect width="860" height="150" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="2" />
      <circle cx="65" cy="75" r="32" fill="#dc2626" />
      <text x="65" y="85" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">❌</text>
      <text x="125" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#991b1b">오답 02. 목구멍에 이상 있는 줄 알고 이비인후과만 전전</text>
      <text x="125" y="102" font-family="${fontFamilies}" font-size="18" fill="#475569">목구멍 문제가 아닌 위장 외벽에 굳어진 독소 담적병(痰積病)</text>
    </g>

    <g transform="translate(55, 605)">
      <rect width="860" height="150" rx="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2" />
      <circle cx="65" cy="75" r="32" fill="#16a34a" />
      <text x="65" y="85" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">⭕</text>
      <text x="125" y="60" font-family="${fontFamilies}" font-size="23" font-weight="bold" fill="#14532d">정답 03. 뇌-위장 축을 다스리는 1:1 역발상 한방 치료</text>
      <text x="125" y="102" font-family="${fontFamilies}" font-size="18" fill="#475569">반하후박탕, 소적건비 탕약, 복부 온침으로 매핵기 완전 종결</text>
    </g>

    <!-- Footer -->
    <g transform="translate(55, 785)">
      <rect width="860" height="60" rx="14" fill="#072421" />
      <text x="430" y="37" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">
        해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장 (032-719-3472)
      </text>
    </g>
  </g>
</svg>`;
}

// 2. 02_point1_wrong1.jpg (오답 1: 대증차단의 역설)
function getSvg2() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="1" y2="1">
      <stop offset="0%" stop-color="#072421" /><stop offset="100%" stop-color="#0d3832" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect width="970" height="960" rx="32" fill="#ffffff" />
    
    <g transform="translate(55, 45)">
      <rect width="360" height="38" rx="8" fill="#fee2e2" />
      <text x="16" y="25" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">CHAPTER 01 ｜ 오답 1: 대증차단의 역설</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      오답 1: "위산억제제(PPI)만 먹으면 목이물감 낫겠지?"
    </text>
    <text x="55" y="170" font-family="${fontFamilies}" font-size="19" fill="#4d665f">
      역류성 식도염 약을 수개월째 달고 살아도 왜 목에 걸린 느낌은 그대로일까?
    </text>

    <!-- 3 Box Explanation -->
    <g transform="translate(55, 215)">
      <rect width="860" height="200" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#991b1b">❌ 팩트 폭격: 위산 분비 억제가 소화 장애를 부른다</text>
      <text x="40" y="85" font-family="${fontFamilies}" font-size="17" fill="#7f1d1d">
        • PPI(위산분비억제제)는 강한 산을 억제해 식도 점막 자극을 줄여주는 약입니다.
      </text>
      <text x="40" y="125" font-family="${fontFamilies}" font-size="17" fill="#7f1d1d">
        • 하지만 위산이 너무 줄어들면 단백질 소화 능력이 급감하고 음식물이 위장에 정체됩니다.
      </text>
      <text x="40" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626">
        💡 부패한 음식물 가스가 위를 팽창시켜 역류 압력을 오히려 더 높입니다.
      </text>
    </g>

    <g transform="translate(55, 445)">
      <rect width="860" height="200" rx="20" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#92400e">⚠️ 위장 운동성(하부식도괄약근)은 방치된 상태</text>
      <text x="40" y="85" font-family="${fontFamilies}" font-size="17" fill="#78350f">
        • 매핵기는 위산이 많아서 생기는 병이 아니라, 식도 괄약근의 조임력이 풀려 생깁니다.
      </text>
      <text x="40" y="125" font-family="${fontFamilies}" font-size="17" fill="#78350f">
        • 위장 벽이 굳어 아래로 내려가지 못하는 음식물 기운이 상부 식도로 치솟는 것입니다.
      </text>
      <text x="40" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#b45309">
        💡 위산을 무조건 틀어막는 것은 고장 난 밸브를 놔두고 물만 잠그는 격입니다.
      </text>
    </g>

    <g transform="translate(55, 675)">
      <rect width="860" height="200" rx="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#14532d">⭕ 해아림의 역발상: 위장 운동성을 살려 내려보내라</text>
      <text x="40" y="85" font-family="${fontFamilies}" font-size="17" fill="#166534">
        • 위산을 억누르는 대신, 위장 외벽의 독소를 제거하여 연동 운동을 살려야 합니다.
      </text>
      <text x="40" y="125" font-family="${fontFamilies}" font-size="17" fill="#166534">
        • 음식물이 아래로 원활히 내려가면(강기 降氣) 식도로 역류하는 압력이 사라집니다.
      </text>
      <text x="40" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#15803d">
        ✓ 매핵기 치료의 핵심은 '위산 차단'이 아니라 '위장 자생 운동 회복'입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 3. 03_point2_wrong2.jpg (오답 2: 발병부위의 오해)
function getSvg3() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="1" y2="1">
      <stop offset="0%" stop-color="#072421" /><stop offset="100%" stop-color="#0d3832" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect width="970" height="960" rx="32" fill="#ffffff" />
    
    <g transform="translate(55, 45)">
      <rect width="360" height="38" rx="8" fill="#fee2e2" />
      <text x="16" y="25" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">CHAPTER 02 ｜ 오답 2: 발병부위의 오해</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      오답 2: "목이 답답하니 목구멍에 병이 생긴 것이다?"
    </text>
    <text x="55" y="170" font-family="${fontFamilies}" font-size="19" fill="#4d665f">
      이비인후과 후두 내시경을 봐도 후두염이 경미하다는데 왜 이렇게 조여올까?
    </text>

    <!-- 3 Box Explanation -->
    <g transform="translate(55, 215)">
      <rect width="860" height="200" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#991b1b">❌ 팩트 폭격: 증상은 목에 있지만 원인은 위장 외벽에 있다</text>
      <text x="40" y="85" font-family="${fontFamilies}" font-size="17" fill="#7f1d1d">
        • 목구멍에 침이나 물, 음식물을 삼킬 때는 걸리지 않고 밥은 잘 넘어갑니다.
      </text>
      <text x="40" y="125" font-family="${fontFamilies}" font-size="17" fill="#7f1d1d">
        • 그러나 빈 침을 삼키거나 가만히 있을 때만 유독 솜이나 가래가 걸린 듯 조여옵니다.
      </text>
      <text x="40" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626">
        💡 이것이 바로 동의보감에서 말하는 '매실 씨앗이 걸린 듯한 병, 매핵기(梅核氣)'입니다.
      </text>
    </g>

    <g transform="translate(55, 445)">
      <rect width="860" height="200" rx="20" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#92400e">⚠️ 위장 점막 안쪽이 아닌 '외벽 근육층'의 담적 독소</text>
      <text x="40" y="85" font-family="${fontFamilies}" font-size="17" fill="#78350f">
        • 위내시경은 위장 내부 점막의 궤양이나 염증만 관찰하는 카메라입니다.
      </text>
      <text x="40" y="125" font-family="${fontFamilies}" font-size="17" fill="#78350f">
        • 소화되지 못한 찌꺼기가 위장 점막을 투과해 근육층에 쌓여 굳어진 것이 담적(痰積)입니다.
      </text>
      <text x="40" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#b45309">
        💡 내시경에는 깨끗해 보이지만 명치를 누르면 돌처럼 딱딱하고 통증이 있습니다.
      </text>
    </g>

    <g transform="translate(55, 675)">
      <rect width="860" height="200" rx="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#14532d">⭕ 해아림의 역발상: 굳은 위장 외벽을 녹여야 목이 풀린다</text>
      <text x="40" y="85" font-family="${fontFamilies}" font-size="17" fill="#166534">
        • 목에 스프레이나 가글을 백날 해도 위장이 굳어 있으면 매핵기는 풀리지 않습니다.
      </text>
      <text x="40" y="125" font-family="${fontFamilies}" font-size="17" fill="#166534">
        • 위장 근육층의 담적을 삭히고 식도 괄약근 신경을 안정시켜야 목이물감이 사라집니다.
      </text>
      <text x="40" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#15803d">
        ✓ 발병 부위(목)가 아닌 원인 부위(위장 담적)를 타깃하는 역발상 치료가 정답입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 4. 04_point3_wrong3.jpg (오답 3: 정신력/신경성의 함정)
function getSvg4() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="1" y2="1">
      <stop offset="0%" stop-color="#072421" /><stop offset="100%" stop-color="#0d3832" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect width="970" height="960" rx="32" fill="#ffffff" />
    
    <g transform="translate(55, 45)">
      <rect width="360" height="38" rx="8" fill="#fee2e2" />
      <text x="16" y="25" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#dc2626">CHAPTER 03 ｜ 오답 3: 정신력의 함정</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      오답 3: "신경성이니 마음 편히 먹으면 저절로 낫는다?"
    </text>
    <text x="55" y="170" font-family="${fontFamilies}" font-size="19" fill="#4d665f">
      마음의 문제가 아닙니다! 뇌-장 축(Brain-Gut Axis)의 신경학적 긴장 장애입니다.
    </text>

    <!-- 3 Box Explanation -->
    <g transform="translate(55, 215)">
      <rect width="860" height="200" rx="20" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#991b1b">❌ 팩트 폭격: 자율신경은 의지력으로 조절되지 않는다</text>
      <text x="40" y="85" font-family="${fontFamilies}" font-size="17" fill="#7f1d1d">
        • 스트레스를 받지 말라는 것은 숨 쉬지 말라는 것과 다를 바 없는 공허한 조언입니다.
      </text>
      <text x="40" y="125" font-family="${fontFamilies}" font-size="17" fill="#7f1d1d">
        • 감정적 억압과 분노(울화)는 뇌 변연계를 과열시켜 미주신경을 즉각 경직시킵니다.
      </text>
      <text x="40" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#dc2626">
        💡 마음을 편히 먹는다고 이미 굳어버린 위장 신경과 괄약근 경련이 풀리지 않습니다.
      </text>
    </g>

    <g transform="translate(55, 445)">
      <rect width="860" height="200" rx="20" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#92400e">⚠️ 칠정울결(七情鬱結)과 매핵기의 악순환 고리</text>
      <text x="40" y="85" font-family="${fontFamilies}" font-size="17" fill="#78350f">
        • 동의보감에서는 칠정(스트레스)으로 기가 뭉치면 담(痰)이 생겨 목을 막는다고 했습니다.
      </text>
      <text x="40" y="125" font-family="${fontFamilies}" font-size="17" fill="#78350f">
        • 목이 답답하니 불안해지고, 불안해지니 교감신경이 더 과열되어 위장이 멈춥니다.
      </text>
      <text x="40" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#b45309">
        💡 이 신경계 악순환의 고리를 물리적·약리적으로 끊어내야 완치가 가능합니다.
      </text>
    </g>

    <g transform="translate(55, 675)">
      <rect width="860" height="200" rx="20" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
      <text x="40" y="45" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#14532d">⭕ 해아림의 역발상: 신체 신경망을 먼저 풀어 뇌를 쉬게 하라</text>
      <text x="40" y="85" font-family="${fontFamilies}" font-size="17" fill="#166534">
        • 뭉친 가슴 기운을 흩뜨리는 반하후박탕과 자율신경 조절 침구로 긴장을 해제합니다.
      </text>
      <text x="40" y="125" font-family="${fontFamilies}" font-size="17" fill="#166534">
        • 몸이 편안해지면 뇌가 비로소 안전 신호를 인식하여 목의 괄약근 경련을 내려놓습니다.
      </text>
      <text x="40" y="165" font-family="${fontFamilies}" font-size="17" font-weight="bold" fill="#15803d">
        ✓ '정신력 극복'이 아닌 '신체화 신경망 차단'이 매핵기 완치의 핵심 열쇠입니다.
      </text>
    </g>
  </g>
</svg>`;
}

// 5. 05_point4_treatment.jpg (오답을 종결짓는 1:1 맞춤 치료)
function getSvg5() {
  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="1" y2="1">
      <stop offset="0%" stop-color="#072421" /><stop offset="100%" stop-color="#0d3832" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="url(#bgGrad)" />

  <g transform="translate(55, 60)">
    <rect width="970" height="960" rx="32" fill="#ffffff" />
    
    <g transform="translate(55, 45)">
      <rect width="360" height="38" rx="8" fill="#e6f7f3" />
      <text x="16" y="25" font-family="${fontFamilies}" font-size="18" font-weight="bold" fill="#0d9488">CHAPTER 04 ｜ 오답 종결 1:1 맞춤 치료</text>
    </g>

    <text x="55" y="130" font-family="${fontFamilies}" font-size="34" font-weight="bold" fill="#0f2922">
      오답을 종결짓는 해아림 매핵기·담적 3단계 솔루션
    </text>
    <text x="55" y="170" font-family="${fontFamilies}" font-size="19" fill="#4d665f">
      위장 담적 제거 + 뇌 신경망 안정 + 미주신경 회복의 3중 통합 처방
    </text>

    <!-- 3 Treatment Steps -->
    <g transform="translate(55, 215)">
      <rect width="860" height="205" rx="20" fill="#f0fdf9" stroke="#bbf7d0" stroke-width="2" />
      <circle cx="55" cy="55" r="28" fill="#0d9488" />
      <text x="55" y="64" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">1</text>
      <text x="105" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#065f46">1단계: 소적강기(消積降氣) 맞춤 한약 처방</text>
      <text x="40" y="115" font-family="${fontFamilies}" font-size="17" fill="#134e48">
        • 반하후박탕, 평위산, 이진탕 가감방: 굳어진 위장 담적을 삭히고 식도 경련 즉각 해소
      </text>
      <text x="40" y="155" font-family="${fontFamilies}" font-size="17" fill="#134e48">
        • 사역산 가감: 뭉친 간기(肝氣)와 흉격의 울화를 풀어 목으로 치솟는 기운을 아래로 하강
      </text>
    </g>

    <g transform="translate(55, 445)">
      <rect width="860" height="205" rx="20" fill="#fefce8" stroke="#fef08a" stroke-width="2" />
      <circle cx="55" cy="55" r="28" fill="#d97706" />
      <text x="55" y="64" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">2</text>
      <text x="105" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#78350f">2단계: 전중혈 청열 약침 &amp; 복부 온침(溫針) 요법</text>
      <text x="40" y="115" font-family="${fontFamilies}" font-size="17" fill="#713f12">
        • 가슴 정중앙 전중혈과 천돌혈에 순수 한약 약침 시술: 꽉 막힌 인후부 기혈 소통
      </text>
      <text x="40" y="155" font-family="${fontFamilies}" font-size="17" fill="#713f12">
        • 중완, 하완혈 복부 온침: 굳어버린 위장 평활근을 부드럽게 이완하여 연동 운동 복원
      </text>
    </g>

    <g transform="translate(55, 675)">
      <rect width="860" height="205" rx="20" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2" />
      <circle cx="55" cy="55" r="28" fill="#2563eb" />
      <text x="55" y="64" font-family="${fontFamilies}" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">3</text>
      <text x="105" y="60" font-family="${fontFamilies}" font-size="24" font-weight="bold" fill="#1e3a8a">3단계: 뇌-위장 축 자생력 회복 &amp; 재발 방지</text>
      <text x="40" y="115" font-family="${fontFamilies}" font-size="17" fill="#1e293b">
        • 미주신경 활성화 침구 치료로 자율신경 밸런스를 정상화하여 신경성 역류 차단
      </text>
      <text x="40" y="155" font-family="${fontFamilies}" font-size="17" fill="#1e293b">
        • 부천 상동·중동에서 지하철 5분(부평역 7번 출구), 월·수·금 20시 야간진료 운영
      </text>
    </g>
  </g>
</svg>`;
}

function renderAndSave(svg, fileName) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      fontDirs: ['C:\\Windows\\Fonts'],
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });
  const buf = resvg.render().asPng();

  for (const dir of targetDirs) {
    const p = path.join(dir, fileName);
    fs.writeFileSync(p, buf);
  }
}

console.log('🎨 [테마1 03번 C패턴] 1080x1080 고화질 5종 카드뉴스 생성 시작...');
renderAndSave(getSvg1(), '01_naver_main_thumbnail.jpg');
renderAndSave(getSvg2(), '02_point1_wrong1.jpg');
renderAndSave(getSvg3(), '03_point2_wrong2.jpg');
renderAndSave(getSvg4(), '04_point3_wrong3.jpg');
renderAndSave(getSvg5(), '05_point4_treatment.jpg');

console.log('✅ C패턴 5종 카드뉴스 생성 완료!');
console.log(`📁 저장 경로: ${targetDirs[0]}`);
