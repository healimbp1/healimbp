import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveThumbnail } from './thumbnail-resolver.mjs';
import { buildTistoryThumbnailPng } from './exact-tistory-thumbnail-builder.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function cleanTextForPlain(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[*_#`]/g, '')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function cleanTextForHtml(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #1E4638; font-weight: 700;">$1</strong>')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function formatLabel(label, secNum) {
  if (!label) return `SECTION ${secNum}`;
  return label.replace(/\s*\d+\s*$/, '').trim();
}

/**
 * 1. Generates 100% self-contained, inline-styled Tistory HTML
 */
export function renderMasterColumnToTistoryHtml(data) {
  const {
    slug,
    title,
    summary,
    category,
    tags,
    image,
    voiceLines,
    tocItems,
    introParagraphs,
    sections,
    doctorInsight
  } = data;

  // Resolve Base64 Thumbnail
  let thumbnailUrl = '';
  try {
    const relThumb = resolveThumbnail({
      categoryName: category,
      title: title,
      slug: slug,
      currentImage: image
    });
    const absThumbPath = path.join(rootDir, 'static', relThumb.replace(/^\//, ''));
    if (fs.existsSync(absThumbPath)) {
      const ext = path.extname(absThumbPath).toLowerCase() === '.png' ? 'png' : 'jpeg';
      const fileBuf = fs.readFileSync(absThumbPath);
      thumbnailUrl = `data:image/${ext};base64,${fileBuf.toString('base64')}`;
    } else {
      const outPngPath = path.join(rootDir, 'static', 'blog-images', 'tistory-thumbnails', `${slug}.png`);
      const { base64 } = buildTistoryThumbnailPng({ title, category, slug }, outPngPath);
      thumbnailUrl = base64;
    }
  } catch (err) {
    console.warn('[format-master-column] Thumbnail load fallback:', err.message);
  }

  const columnUrl = `https://healimbp.com/column/${slug}/`;
  const bookingUrl = `https://booking.naver.com/booking/13/bizes/934695`;
  const kakaoUrl = `https://pf.kakao.com/_Tcxcxoxj`;

  // Build Sections HTML
  let sectionsHtml = '';

  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    const secNum = String(i + 1).padStart(2, '0');
    const labelText = `${formatLabel(sec.label, secNum)} ${secNum}`;
    const headingText = cleanTextForHtml(sec.heading);

    let secBodyHtml = '';

    // 1. Before Paragraphs (Intro before box)
    if (sec.beforeParagraphs && sec.beforeParagraphs.length > 0) {
      sec.beforeParagraphs.forEach(p => {
        secBodyHtml += `    <p style="font-size: 16px; line-height: 1.9; color: #374151; margin: 0 0 18px 0; word-break: keep-all;">${cleanTextForHtml(p)}</p>\n`;
      });
    }

    // 2. Section 1: Flowchart
    if (sec.flowSteps && sec.flowSteps.length > 0) {
      secBodyHtml += `
    <!-- 질환 진행 메커니즘 플로우차트 -->
    <div style="background-color: #F2F7F4; border: 1px solid #DDE6E1; border-radius: 14px; padding: 22px 24px; margin: 24px 0; text-align: center;">
      <div style="font-size: 14px; font-weight: 800; color: #2F5D50; margin-bottom: 14px; letter-spacing: -0.01em;">
        ${sec.flowTitle || '📊 질환 진행 메커니즘'}
      </div>
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px;">
        ${sec.flowSteps.map((s, sIdx) => `
          <span style="background-color: #202947; color: #ffffff; font-size: 13.5px; font-weight: 700; padding: 7px 14px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: inline-block;">${s}</span>
          ${sIdx < sec.flowSteps.length - 1 ? '<span style="color: #2F5D50; font-size: 14px; font-weight: bold; margin: 0 4px;">➔</span>' : ''}
        `).join('')}
      </div>
    </div>\n`;
    }

    // 3. Section 2: Checklist
    if (sec.checkItems && sec.checkItems.length > 0) {
      secBodyHtml += `
    <!-- 진료실 체크리스트 박스 -->
    <div style="background-color: #FAFBF9; border: 1px solid #E2EAE5; border-radius: 14px; padding: 22px 26px; margin: 24px 0;">
      <div style="font-size: 15.5px; font-weight: 800; color: #1E4638; display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
        <span>🩺</span> <span>${sec.checkTitle || '진료실 체크리스트'}</span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${sec.checkItems.map(it => `
          <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 15px; color: #4E6159; line-height: 1.75;">
            <span style="color: #2F5D50; font-weight: 800; font-size: 16px; flex-shrink: 0; margin-top: -1px;">✓</span>
            <span>${it}</span>
          </div>
        `).join('')}
      </div>
    </div>\n`;
    }

    // 4. Section 3: Research & Evidence
    if (sec.researchItems && sec.researchItems.length > 0) {
      secBodyHtml += `
    <!-- 학술 연구 및 임상 근거 박스 -->
    <div style="background-color: #ffffff; border: 2px solid #2F5D50; border-radius: 14px; padding: 22px 26px; margin: 24px 0; box-shadow: 0 2px 8px rgba(47,93,80,0.06);">
      <div style="font-size: 14px; font-weight: 800; color: #2F5D50; display: flex; align-items: center; gap: 6px; margin-bottom: 12px; letter-spacing: -0.01em;">
        <span>📚</span> <span>${sec.researchTitle || '임상 연구 및 학술 보고'}</span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${sec.researchItems.map(it => `
          <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: #26332E; font-weight: 600; line-height: 1.75;">
            <span style="color: #2F5D50; flex-shrink: 0;">📄</span>
            <span>${it}</span>
          </div>
        `).join('')}
      </div>
      ${sec.researchTip ? `
        <div style="margin-top: 16px; padding-top: 14px; border-top: 1px dashed #DDE6E1; font-size: 14px; color: #526059; line-height: 1.8; font-style: italic;">
          💡 ${sec.researchTip}
        </div>
      ` : ''}
    </div>\n`;
    }

    // 5. Section 4: Constitution Cards
    if (sec.constitutionCards && sec.constitutionCards.length > 0) {
      secBodyHtml += `
    <!-- 3대 맞춤 체질 유형 카드 그룹 -->
    <div style="margin: 24px 0; display: flex; flex-direction: column; gap: 14px;">
      ${sec.constitutionCards.map((c, cIdx) => `
        <div style="background-color: #F9FAF8; border: 1px solid #E2EAE5; border-radius: 12px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <div style="font-size: 15.5px; font-weight: 800; color: #1E4638; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
            <span style="font-size: 18px;">${c.icon}</span>
            <span>[유형 ${cIdx + 1}] ${cleanTextForHtml(c.title)}</span>
          </div>
          <p style="margin: 0; font-size: 14.5px; color: #4E6159; line-height: 1.85; padding-left: 28px;">
            ${cleanTextForHtml(c.desc)}
          </p>
        </div>
      `).join('')}
    </div>\n`;
    }

    // 6. Section 5: Integrated Solutions
    if (sec.solutions && sec.solutions.length > 0) {
      secBodyHtml += `
    <!-- 해아림 통합 솔루션 2대 카드 -->
    <div style="margin: 24px 0; display: flex; flex-direction: column; gap: 14px;">
      ${sec.solutions.map(s => `
        <div style="background-color: #ffffff; border: 1px solid #DDE6E1; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
          <div style="background-color: #202947; color: #ffffff; padding: 12px 18px; display: flex; justify-content: space-between; align-items: center; font-size: 14px; font-weight: 800;">
            <span style="color: #B4C2DC; font-size: 12px; font-weight: 700;">${cleanTextForHtml(s.badge)}</span>
            <span>${cleanTextForHtml(s.title)}</span>
          </div>
          <div style="padding: 18px 20px; font-size: 14.5px; color: #4E6159; line-height: 1.85;">
            ${cleanTextForHtml(s.desc)}
          </div>
        </div>
      `).join('')}
    </div>\n`;
    }

    // 7. Section 6: FAQ
    if (sec.faqs && sec.faqs.length > 0) {
      secBodyHtml += `
    <!-- 진료실 자주 묻는 질문 (FAQ) -->
    <div style="margin: 24px 0; display: flex; flex-direction: column; gap: 16px;">
      ${sec.faqs.map(f => `
        <div style="background-color: #F9FAF8; border: 1px solid #E2EAE5; border-radius: 12px; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <div style="font-size: 16px; font-weight: 800; color: #1E4638; display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px;">
            <span style="background-color: #2F5D50; color: #ffffff; font-size: 12px; font-weight: bold; padding: 3px 8px; border-radius: 6px; flex-shrink: 0; margin-top: 2px;">${cleanTextForHtml(f.qNum)}</span>
            <span>${cleanTextForHtml(f.q)}</span>
          </div>
          <div style="font-size: 14.5px; line-height: 1.85; color: #4E6159; padding-left: 36px; border-left: 2px solid #E2EAE5; margin-left: 6px;">
            ${cleanTextForHtml(f.a)}
          </div>
        </div>
      `).join('')}
    </div>\n`;
    }

    // 8. After Paragraphs (Concluding summary)
    if (sec.afterParagraphs && sec.afterParagraphs.length > 0) {
      sec.afterParagraphs.forEach(p => {
        secBodyHtml += `    <p style="font-size: 16px; line-height: 1.9; color: #374151; margin: 0 0 18px 0; word-break: keep-all;">${cleanTextForHtml(p)}</p>\n`;
      });
    }

    sectionsHtml += `
  <!-- [SECTION ${secNum}] ${labelText} -->
  <div style="margin: 46px 0 20px 0;">
    <span style="display: inline-block; background-color: #2F5D50; color: #ffffff; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-bottom: 10px; letter-spacing: -0.01em;">${labelText}</span>
    <h2 style="font-size: 20.5px; font-weight: 800; color: #1E4638; margin: 0 0 12px 0; letter-spacing: -0.02em; line-height: 1.45;">${headingText}</h2>
    <div style="width: 44px; height: 3px; background-color: #2F5D50; border-radius: 2px; margin-bottom: 22px;"></div>
  </div>
${secBodyHtml}
`;
  }

  // Voice box HTML
  let voiceBoxHtml = '';
  if (voiceLines && voiceLines.length > 0) {
    voiceBoxHtml = `
  <!-- 환자 호소문 인용 박스 -->
  <div style="background-color: #F8FAF9; border-left: 4px solid #2F5D50; border-radius: 0 12px 12px 0; padding: 20px 26px; margin: 24px 0 28px 0; color: #2C3E35; font-size: 15.5px; line-height: 1.9; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
    <div style="font-weight: 800; color: #1E4638; margin-bottom: 10px; font-size: 14.5px;">💬 진료실 환자 호소 사례</div>
    ${voiceLines.map(l => `<div style="margin-bottom: 6px;">“${cleanTextForHtml(l)}”</div>`).join('')}
  </div>\n`;
  }

  // TOC HTML
  let tocHtml = '';
  if (tocItems && tocItems.length > 0) {
    tocHtml = `
  <!-- 목차 박스 -->
  <div style="background-color: #FAFAF9; border: 1px solid #E2EAE5; border-radius: 12px; padding: 20px 24px; margin: 28px 0;">
    <div style="font-size: 15.5px; font-weight: 800; color: #1E4638; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
      <span>📋</span> <span>이 칼럼에서 다루는 핵심 내용</span>
    </div>
    <ol style="margin: 0; padding-left: 20px; color: #4E6159; font-size: 14.5px; line-height: 1.85;">
      ${tocItems.map(it => `<li style="margin-bottom: 6px;">${cleanTextForHtml(it)}</li>`).join('')}
    </ol>
  </div>\n`;
  }

  // Intro HTML
  let introHtml = '';
  if (introParagraphs && introParagraphs.length > 0) {
    introHtml = introParagraphs.map(p => `  <p style="font-size: 16px; line-height: 1.9; color: #374151; margin: 0 0 18px 0; word-break: keep-all;">${cleanTextForHtml(p)}</p>`).join('\n');
  }

  // Doctor Insight HTML
  let insightHtml = '';
  if (doctorInsight) {
    insightHtml = `
  <!-- 권형근 대표원장 임상 조언 카드 -->
  <div style="background: linear-gradient(135deg, #1B233D 0%, #2B3A60 100%); border-radius: 14px; padding: 28px 32px; color: #ffffff; text-align: center; margin: 40px 0; box-shadow: 0 4px 12px rgba(27,35,61,0.15);">
    <div style="font-size: 12px; font-weight: 800; color: #B4C2DC; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 10px;">DOCTOR'S CLINICAL INSIGHT</div>
    <p style="font-size: 16px; color: #E2E8F5; line-height: 1.85; max-width: 660px; margin: 0 auto 12px auto; font-weight: 500;">
      "${cleanTextForHtml(doctorInsight)}"
    </p>
    <div style="font-size: 13px; color: #9AAFD2;">
      해아림한의원 인천부평점 대표원장 권형근 (한방침구과 전문의)
    </div>
  </div>\n`;
  }

  return `
<div style="font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif; line-height: 1.85; color: #374151; max-width: 780px; margin: 0 auto; padding: 10px 0; word-break: keep-all; font-style: normal;">
  
  <!-- 대표 썸네일 이미지 (1:1 완벽 맞춤형 카드 썸네일) -->
  <div style="text-align: center; margin: 0 0 28px 0; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.08);">
    <img src="${thumbnailUrl}" alt="${cleanTextForPlain(title)}" style="width: 100%; max-width: 780px; height: auto; display: block; border-radius: 14px; margin: 0 auto; object-fit: cover;" />
  </div>

  <!-- 상단 안내 헤더 박스 -->
  <div style="background-color: #F4F8F6; border-left: 5px solid #2F5D50; padding: 20px 24px; border-radius: 10px; margin-bottom: 32px; box-shadow: 0 1px 4px rgba(47,93,80,0.05);">
    <p style="margin: 0; font-size: 16px; color: #2F5D50; font-weight: 800; letter-spacing: -0.01em;">
      🌿 해아림한의원 인천부평점 권형근 대표원장의 1:1 맞춤 건강 칼럼
    </p>
    <p style="margin: 8px 0 0 0; font-size: 13.5px; color: #556B62; line-height: 1.6;">
      자율신경실조증 · 공황장애 · 불면증 · 우울증 · 만성피로 · 틱장애 · ADHD 한방 신경정신과 클리닉
    </p>
  </div>

${voiceBoxHtml}
${introHtml}
${tocHtml}
${sectionsHtml}
${insightHtml}

  <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 44px 0 32px 0;" />

  <!-- 원장 소개 및 한의원 진료 안내 카드 -->
  <div style="background-color: #FAFAF9; border: 1px solid #E7E5E4; border-radius: 14px; padding: 26px; margin-top: 32px; box-shadow: 0 2px 6px rgba(0,0,0,0.03);">
    <h4 style="margin: 0 0 12px 0; color: #1E4638; font-size: 17.5px; font-weight: 800;">
      🏥 해아림한의원 인천부평점 진료 안내
    </h4>
    <ul style="margin: 0 0 18px 0; padding-left: 20px; font-size: 14.5px; color: #4B5563; line-height: 1.85;">
      <li style="margin-bottom: 6px;"><strong>대표원장:</strong> 권형근 (한방침구과 전문의 직접 진료)</li>
      <li style="margin-bottom: 6px;"><strong>오시는 길:</strong> 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)</li>
      <li style="margin-bottom: 6px;"><strong>상담 및 예약:</strong> 032-719-3472</li>
      <li style="margin-bottom: 6px;"><strong>진료 시간:</strong> 월·수·금 10:00 ~ 20:00 (야간진료) / 화 10:00 ~ 19:00 / 토 09:00 ~ 15:00 / 공휴일 09:00 ~ 13:00</li>
    </ul>

    <!-- 원클릭 바로가기 버튼 그룹 -->
    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px;">
      <a href="${bookingUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #03C75A; color: #ffffff; text-decoration: none; padding: 11px 18px; border-radius: 8px; font-size: 13.5px; font-weight: bold; box-shadow: 0 2px 4px rgba(3,199,90,0.2);">
        📅 네이버 간편 진료예약
      </a>
      <a href="${kakaoUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #FEE500; color: #191919; text-decoration: none; padding: 11px 18px; border-radius: 8px; font-size: 13.5px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.08);">
        💬 카카오톡 1:1 비밀상담
      </a>
      <a href="${columnUrl}" target="_blank" rel="noopener" style="display: inline-block; background-color: #2F5D50; color: #ffffff; text-decoration: none; padding: 11px 18px; border-radius: 8px; font-size: 13.5px; font-weight: bold; box-shadow: 0 2px 4px rgba(47,93,80,0.2);">
        🌐 공식 홈페이지 칼럼 원문 보기
      </a>
    </div>
  </div>

  <!-- 출처 표기 (백링크 SEO) -->
  <p style="text-align: right; font-size: 12px; color: #9CA3AF; margin-top: 16px;">
    출처: <a href="https://healimbp.com" target="_blank" rel="noopener" style="color: #6B7280; text-decoration: underline;">해아림한의원 인천부평점 공식 홈페이지</a>
  </p>

</div>
`.trim();
}

/**
 * 2. Generates 100% structured, perfectly aligned Plain Text copy script (0% markdown bold)
 */
export function renderMasterColumnToPlainText(data, index = 0) {
  const {
    slug,
    title,
    summary,
    category,
    tags,
    voiceLines,
    introParagraphs,
    sections,
    doctorInsight
  } = data;

  let titleP1 = title;
  let titleP2 = title.replace(/^\[[^\]]+\]\s*/, '').replace(/\s*\([^)]+\)$/, '');
  let titleP3 = `${category} ｜ ${titleP2} 1:1 맞춤 한방 치료 가이드`;

  const columnUrl = `https://healimbp.com/column/${slug}/`;
  const bookingUrl = `https://booking.naver.com/booking/13/bizes/934695`;
  const kakaoUrl = `https://pf.kakao.com/_Tcxcxoxj`;

  const lines = [];

  // Top header
  lines.push(`📋 [티스토리/블로그 원클릭 복사용 원고 #${index + 1}]`);
  lines.push(`※ 본문 및 강조 문구에 마크다운 볼드 기호(**)가 일체 없어 에디터에 바로 붙여넣으실 수 있습니다.`);
  lines.push(``);
  lines.push(`🎯 [블로그 포스팅용 추천 제목 옵션]`);
  lines.push(`1️⃣ 표준 지역명형:`);
  lines.push(cleanTextForPlain(titleP1));
  lines.push(``);
  lines.push(`2️⃣ 질환 기전 집중형:`);
  lines.push(cleanTextForPlain(titleP2));
  lines.push(``);
  lines.push(`3️⃣ 1:1 맞춤 솔루션형:`);
  lines.push(cleanTextForPlain(titleP3));
  lines.push(``);
  lines.push(`────────────────────────────────────`);
  lines.push(``);

  // Voice box
  if (voiceLines && voiceLines.length > 0) {
    lines.push(`[💬 진료실 환자 호소 사례]`);
    voiceLines.forEach(l => {
      lines.push(`• "${cleanTextForPlain(l)}"`);
    });
    lines.push(``);
  }

  // Intro
  if (introParagraphs && introParagraphs.length > 0) {
    introParagraphs.forEach(p => {
      lines.push(cleanTextForPlain(p));
      lines.push(``);
    });
  }

  // Sections
  sections.forEach((sec, idx) => {
    const secNum = String(idx + 1).padStart(2, '0');
    const labelClean = formatLabel(sec.label, secNum);

    lines.push(`■ ${secNum}. ${labelClean}`);
    lines.push(`▶ ${cleanTextForPlain(sec.heading)}`);
    lines.push(``);

    // 1. Before paragraphs
    if (sec.beforeParagraphs && sec.beforeParagraphs.length > 0) {
      sec.beforeParagraphs.forEach(p => {
        lines.push(cleanTextForPlain(p));
        lines.push(``);
      });
    }

    // 2. Flowchart
    if (sec.flowSteps && sec.flowSteps.length > 0) {
      lines.push(`[${cleanTextForPlain(sec.flowTitle || '진행 순서 메커니즘')}]`);
      lines.push(sec.flowSteps.map(s => cleanTextForPlain(s)).join(' ➔ '));
      lines.push(``);
    }

    // 3. Checklist
    if (sec.checkItems && sec.checkItems.length > 0) {
      lines.push(`[🩺 ${cleanTextForPlain(sec.checkTitle || '진료실 체크리스트')}]`);
      sec.checkItems.forEach(it => {
        lines.push(`  ✓ ${cleanTextForPlain(it)}`);
      });
      lines.push(``);
    }

    // 4. Research
    if (sec.researchItems && sec.researchItems.length > 0) {
      lines.push(`[📚 ${cleanTextForPlain(sec.researchTitle || '임상 연구 및 학술 보고')}]`);
      sec.researchItems.forEach(it => {
        lines.push(`  • ${cleanTextForPlain(it)}`);
      });
      lines.push(``);
      if (sec.researchTip) {
        lines.push(`💡 ${cleanTextForPlain(sec.researchTip)}`);
        lines.push(``);
      }
    }

    // 5. Constitution Cards
    if (sec.constitutionCards && sec.constitutionCards.length > 0) {
      sec.constitutionCards.forEach((c, cIdx) => {
        lines.push(`[유형 ${cIdx + 1}] ${c.icon} ${cleanTextForPlain(c.title)}`);
        lines.push(`  • ${cleanTextForPlain(c.desc)}`);
        lines.push(``);
      });
    }

    // 6. Solutions
    if (sec.solutions && sec.solutions.length > 0) {
      sec.solutions.forEach(s => {
        lines.push(`[${cleanTextForPlain(s.badge)}] ${cleanTextForPlain(s.title)}`);
        lines.push(`  • ${cleanTextForPlain(s.desc)}`);
        lines.push(``);
      });
    }

    // 7. FAQ
    if (sec.faqs && sec.faqs.length > 0) {
      sec.faqs.forEach(f => {
        lines.push(`[${cleanTextForPlain(f.qNum)}] ${cleanTextForPlain(f.q)}`);
        lines.push(`  ▶ 답변: ${cleanTextForPlain(f.a)}`);
        lines.push(``);
      });
    }

    // 8. After paragraphs
    if (sec.afterParagraphs && sec.afterParagraphs.length > 0) {
      sec.afterParagraphs.forEach(p => {
        lines.push(cleanTextForPlain(p));
        lines.push(``);
      });
    }
  });

  // Doctor Insight
  if (doctorInsight) {
    lines.push(`💡 [권형근 대표원장의 진료실 조언]`);
    lines.push(`"${cleanTextForPlain(doctorInsight)}"`);
    lines.push(`- 해아림한의원 인천부평점 권형근 대표원장 (한방침구과 전문의)`);
    lines.push(``);
  }

  lines.push(`────────────────────────────────────`);
  lines.push(``);
  lines.push(`🏥 [해아림한의원 인천부평점 진료 안내]`);
  lines.push(`• 진료: 권형근 대표원장 (한방침구과 전문의 직접 진료)`);
  lines.push(`• 위치: 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)`);
  lines.push(`• 문의: 032-719-3472`);
  lines.push(`• 야간진료: 월 · 수 · 금 저녁 8시까지`);
  lines.push(`• 네이버예약: ${bookingUrl}`);
  lines.push(`• 카카오톡상담: ${kakaoUrl}`);
  lines.push(`• 칼럼원문: ${columnUrl}`);
  lines.push(``);
  lines.push(`🏷️ [추천 태그]`);
  lines.push(tags.map(t => `#${t}`).join(' '));

  return lines.join('\n');
}
