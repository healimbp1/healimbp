import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { resolveThumbnail } from './thumbnail-resolver.mjs';
import { buildTistoryThumbnailPng } from './exact-tistory-thumbnail-builder.mjs';

import { PILLAR_COLUMNS } from './build-all-columns.mjs';
import { getDiverseFaq } from './column-faqs.mjs';

export function ensureQuestionTitle(title) {
  if (!title) return '';
  let clean = title.trim().replace(/[.!]+$/, '').trim();
  if (/[?？]$/.test(clean)) return clean;
  if (/(까|나요|가요|까요|건가요|일까|법은|방법은)$/.test(clean)) return `${clean}?`;
  return `${clean}, 원인과 치료법은 무엇일까?`;
}

export function formatLeadConclusion(summary, introParagraphs, title, category) {
  let source = summary;
  if (!source && introParagraphs && introParagraphs.length > 0) {
    source = introParagraphs[0];
  }
  if (!source) {
    return `${category || '신경정신과 질환'}은 단순 심리나 기질적 파손이 아닌 뇌 자율신경계와 신경전달물질의 기능적 과부하가 핵심 원인입니다. 1:1 맞춤 한방 치료로 신경계 자생력을 복원하면 4~12주 내 충분히 회복될 수 있습니다.`;
  }
  let clean = source.replace(/[*_#`]/g, '').replace(/\s+/g, ' ').trim();
  if (clean.length > 195) {
    clean = clean.slice(0, 192) + '...';
  }
  return clean;
}

export function getRelatedColumns(currentSlug, currentCategory, count = 3) {
  const currentCat = (currentCategory || '').toLowerCase();
  const pool = (PILLAR_COLUMNS || []).filter(c => c.slug !== currentSlug);
  const matched = pool.filter(c => {
    const cCat = (c.category || '').toLowerCase();
    return cCat.includes(currentCat) || currentCat.includes(cCat);
  });
  const selected = matched.slice(0, count);
  for (const c of pool) {
    if (selected.length >= count) break;
    if (!selected.some(s => s.slug === c.slug)) {
      selected.push(c);
    }
  }
  return selected;
}

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

  const questionTitle = ensureQuestionTitle(title);
  const leadConclusion = data.leadConclusion || formatLeadConclusion(summary, introParagraphs, title, category);
  const relatedColumns = getRelatedColumns(slug, category, 3);

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

  // Build Sections HTML & collect all FAQs
  let sectionsHtml = '';
  let allFaqs = [];

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
      <h3 style="font-size: 15px; font-weight: 800; color: #2F5D50; margin: 0 0 14px 0; letter-spacing: -0.01em;">
        ${sec.flowTitle || '📊 질환 진행 메커니즘'}
      </h3>
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
      <h3 style="font-size: 15.5px; font-weight: 800; color: #1E4638; display: flex; align-items: center; gap: 8px; margin: 0 0 14px 0;">
        <span>🩺</span> <span>${sec.checkTitle || '진료실 체크리스트'}</span>
      </h3>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${sec.checkItems.map(it => `
          <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 15px; color: #4E6159; line-height: 1.75;">
            <span style="color: #2F5D50; font-weight: 800; font-size: 16px; flex-shrink: 0; margin-top: -1px;">✓</span>
            <span>${cleanTextForHtml(it)}</span>
          </div>
        `).join('')}
      </div>
    </div>\n`;
    }

    // 4. Section 3: Research & Evidence (논문/가이드라인 출처 명시)
    if (sec.researchItems && sec.researchItems.length > 0) {
      secBodyHtml += `
    <!-- 학술 연구 및 임상 근거 박스 -->
    <div style="background-color: #ffffff; border: 2px solid #2F5D50; border-radius: 14px; padding: 22px 26px; margin: 24px 0; box-shadow: 0 2px 8px rgba(47,93,80,0.06);">
      <h3 style="font-size: 15px; font-weight: 800; color: #2F5D50; display: flex; align-items: center; gap: 6px; margin: 0 0 12px 0; letter-spacing: -0.01em;">
        <span>📚</span> <span>${sec.researchTitle || '임상 연구 및 학술 보고 (논문/가이드라인 출처)'}</span>
      </h3>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${sec.researchItems.map(it => `
          <div style="display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: #26332E; font-weight: 600; line-height: 1.75;">
            <span style="background-color: #EAF3EF; color: #2F5D50; font-size: 11px; font-weight: 800; padding: 2px 7px; border-radius: 4px; flex-shrink: 0; margin-top: 2px;">학술근거</span>
            <span>${cleanTextForHtml(it)}</span>
          </div>
        `).join('')}
      </div>
      ${sec.researchTip ? `
        <div style="margin-top: 16px; padding-top: 14px; border-top: 1px dashed #DDE6E1; font-size: 14px; color: #526059; line-height: 1.8; font-style: italic;">
          💡 ${cleanTextForHtml(sec.researchTip)}
        </div>
      ` : ''}
    </div>\n`;
    }

    // 5. Section 4: Constitution Cards
    if (sec.constitutionCards && sec.constitutionCards.length > 0) {
      secBodyHtml += `
    <!-- 3대 맞춤 체질 유형 카드 그룹 -->
    <h3 style="font-size: 16px; font-weight: 800; color: #1E4638; margin: 24px 0 12px 0;">🌿 증상별 3대 맞춤 변증 체질 유형</h3>
    <div style="margin: 0 0 24px 0; display: flex; flex-direction: column; gap: 14px;">
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

    // 6. Section 5: Integrated Solutions (구체적 수치: 4~8주, 주 1~2회)
    if (sec.solutions && sec.solutions.length > 0) {
      secBodyHtml += `
    <!-- 해아림 통합 솔루션 2대 카드 -->
    <h3 style="font-size: 16px; font-weight: 800; color: #1E4638; margin: 24px 0 12px 0;">🎯 해아림 1:1 맞춤 통합 치료 솔루션 (초기 4~8주 집중 치료 & 주 1~2회)</h3>
    <div style="margin: 0 0 24px 0; display: flex; flex-direction: column; gap: 14px;">
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

    // 7. Section 6: FAQ (5개 고정 배치)
    if (sec.faqs && sec.faqs.length > 0) {
      // 5개 미만인 경우 getDiverseFaq로 5개까지 보강
      if (sec.faqs.length < 5) {
        const seedFaqs = getDiverseFaq(category, { focus: title }, { count: 5 });
        sec.faqs = seedFaqs.map((f, fIdx) => ({
          qNum: `Q${fIdx + 1}`,
          q: f.q,
          a: f.a
        }));
      }

      allFaqs = [...sec.faqs];

      secBodyHtml += `
    <!-- 진료실 자주 묻는 질문 5선 (FAQ) -->
    <h3 style="font-size: 17px; font-weight: 800; color: #1E4638; margin: 24px 0 14px 0; display: flex; align-items: center; gap: 8px;">
      <span>❓</span> <span>진료실 자주 묻는 질문 5선 (FAQ)</span>
    </h3>
    <div style="margin: 16px 0 24px 0; display: flex; flex-direction: column; gap: 14px;">
      ${sec.faqs.map(f => `
        <div style="background-color: #F9FAF8; border: 1px solid #E2EAE5; border-radius: 12px; padding: 18px 22px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <div style="font-size: 15.5px; font-weight: 800; color: #1E4638; display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;">
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
  <!-- [SECTION ${secNum}] ${labelText} (H2) -->
  <div style="margin: 46px 0 20px 0;">
    <span style="display: inline-block; background-color: #2F5D50; color: #ffffff; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-bottom: 10px; letter-spacing: -0.01em;">${labelText}</span>
    <h2 style="font-size: 21px; font-weight: 800; color: #1E4638; margin: 0 0 12px 0; letter-spacing: -0.02em; line-height: 1.45;">■ ${secNum}. ${headingText}</h2>
    <div style="width: 44px; height: 3px; background-color: #2F5D50; border-radius: 2px; margin-bottom: 22px;"></div>
  </div>
${secBodyHtml}
`;
  }

  // Fallback for FAQPage schema if not collected
  if (allFaqs.length === 0) {
    allFaqs = getDiverseFaq(category, { focus: title }, { count: 5 });
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

  // Build JSON-LD Article Schema & FAQPage Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["Article", "MedicalWebPage"],
    "headline": questionTitle,
    "description": cleanTextForPlain(leadConclusion),
    "image": [
      `https://healimbp.com/blog-images/tistory-thumbnails/${slug}.png`
    ],
    "author": {
      "@type": "Physician",
      "name": "권형근",
      "jobTitle": "대표원장, 한방침구과 전문의",
      "worksFor": {
        "@type": "MedicalClinic",
        "name": "해아림한의원 인천부평점",
        "url": "https://healimbp.com"
      }
    },
    "publisher": {
      "@type": "MedicalClinic",
      "name": "해아림한의원 인천부평점",
      "url": "https://healimbp.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://healimbp.com/images/director.jpg"
      }
    },
    "inLanguage": "ko-KR",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": columnUrl
    }
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(f => ({
      "@type": "Question",
      "name": cleanTextForPlain(f.q),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": cleanTextForPlain(f.a)
      }
    }))
  };

  return `
<!-- [SEO Schema] Article & MedicalWebPage JSON-LD -->
<script type="application/ld+json">
${JSON.stringify(articleSchema, null, 2)}
</script>

<!-- [SEO Schema] FAQPage JSON-LD (Google & Naver Rich Snippets) -->
<script type="application/ld+json">
${JSON.stringify(faqPageSchema, null, 2)}
</script>

<div style="font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif; line-height: 1.85; color: #374151; max-width: 780px; margin: 0 auto; padding: 10px 0; word-break: keep-all; font-style: normal;">
  
  <!-- 대표 썸네일 이미지 (1:1 완벽 맞춤형 카드 썸네일) -->
  <div style="text-align: center; margin: 0 0 28px 0; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.08);">
    <img src="${thumbnailUrl}" alt="${cleanTextForPlain(questionTitle)}" style="width: 100%; max-width: 780px; height: auto; display: block; border-radius: 14px; margin: 0 auto; object-fit: cover;" />
  </div>

  <!-- 상단 안내 헤더 박스 -->
  <div style="background-color: #F4F8F6; border-left: 5px solid #2F5D50; padding: 20px 24px; border-radius: 10px; margin-bottom: 24px; box-shadow: 0 1px 4px rgba(47,93,80,0.05);">
    <p style="margin: 0; font-size: 16px; color: #2F5D50; font-weight: 800; letter-spacing: -0.01em;">
      🌿 해아림한의원 인천부평점 권형근 대표원장의 1:1 맞춤 건강 칼럼
    </p>
    <p style="margin: 8px 0 0 0; font-size: 13.5px; color: #556B62; line-height: 1.6;">
      자율신경실조증 · 공황장애 · 불면증 · 우울증 · 만성피로 · 틱장애 · ADHD 한방 신경정신과 클리닉
    </p>
  </div>

  <!-- 📌 200자 핵심 요약: 결론 먼저 읽기 (Lead Conclusion Box) -->
  <div style="background-color: #F0F6F3; border: 1.5px solid #2F5D50; border-radius: 12px; padding: 18px 22px; margin: 20px 0 26px 0; box-shadow: 0 2px 6px rgba(47,93,80,0.04);">
    <div style="font-size: 14.5px; font-weight: 800; color: #1E4638; display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
      <span>📌</span> <span>[핵심 결론] 30초 빠른 요약</span>
    </div>
    <p style="margin: 0; font-size: 15px; line-height: 1.85; color: #2C3E35; word-break: keep-all; font-weight: 500;">
      ${cleanTextForHtml(leadConclusion)}
    </p>
  </div>

${voiceBoxHtml}
${introHtml}
${tocHtml}
${sectionsHtml}
${insightHtml}

  <!-- 저자 프로필 카드 (E-E-A-T 전문성 및 신뢰도 강화: 한의사명 + 상세 경력) -->
  <div style="background-color: #FAFBF9; border: 1.5px solid #DDE6E1; border-radius: 14px; padding: 24px 28px; margin: 38px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 14px;">
      <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; border: 2px solid #2F5D50; flex-shrink: 0; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
        <img src="https://healimbp.com/images/director.jpg" alt="권형근 대표원장" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      <div>
        <div style="font-size: 17.5px; font-weight: 800; color: #1E4638; margin-bottom: 3px;">권형근 대표원장</div>
        <div style="font-size: 13px; color: #2F5D50; font-weight: 700;">보건복지부 공인 한방침구과 전문의 ｜ 해아림한의원 인천부평점</div>
      </div>
    </div>
    <div style="border-top: 1px dashed #DDE6E1; padding-top: 14px;">
      <div style="font-size: 12.5px; font-weight: 700; color: #526059; margin-bottom: 6px;">👨‍⚕️ 주요 약력 및 전문 진료 분야</div>
      <ul style="margin: 0; padding-left: 18px; font-size: 13.5px; color: #4B5563; line-height: 1.8;">
        <li>보건복지부 공인 한방침구과 전문의</li>
        <li>대한한방신경정신과학회 정회원</li>
        <li>대한침구의학회 평생회원</li>
        <li>전 원광대학교 한의과대학 외래교수</li>
        <li>뇌파·체열·자율신경 1:1 심층 분석 진료 (부평역 7번 출구)</li>
      </ul>
    </div>
  </div>

  <!-- 함께 읽어보면 좋은 연관 의학 칼럼 (Internal Link: 내부 링크 연결) -->
  <div style="background-color: #F8FAF9; border: 1px solid #E2EAE5; border-radius: 14px; padding: 22px 26px; margin: 36px 0;">
    <div style="font-size: 15.5px; font-weight: 800; color: #1E4638; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
      <span>🔗</span> <span>함께 읽어보면 도움 되는 추천 의학 칼럼</span>
    </div>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      ${relatedColumns.map(r => `
        <a href="https://healimbp.com/column/${r.slug}/" target="_blank" rel="noopener" style="text-decoration: none; display: block; background-color: #ffffff; border: 1px solid #DDE6E1; border-radius: 10px; padding: 14px 18px; box-shadow: 0 1px 3px rgba(0,0,0,0.02);">
          <div style="font-size: 11.5px; color: #2F5D50; font-weight: 700; margin-bottom: 4px;">${cleanTextForHtml(r.category || category)}</div>
          <div style="font-size: 14.5px; font-weight: 800; color: #26332E; line-height: 1.45; margin-bottom: 6px;">${cleanTextForHtml(r.title)}</div>
          <div style="font-size: 12.5px; color: #68736E; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${cleanTextForHtml(r.summary)}</div>
        </a>
      `).join('')}
    </div>
  </div>

  <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 44px 0 32px 0;" />

  <!-- 한의원 진료 안내 카드 -->
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

  let titleP1 = ensureQuestionTitle(title);
  let titleP2 = ensureQuestionTitle(title.replace(/^\[[^\]]+\]\s*/, '').replace(/\s*\([^)]+\)$/, ''));
  let titleP3 = ensureQuestionTitle(`${category} ｜ ${titleP2} 1:1 맞춤 한방 치료 가이드`);

  const leadConclusion = data.leadConclusion || formatLeadConclusion(summary, introParagraphs, title, category);
  const relatedColumns = getRelatedColumns(slug, category, 3);

  const columnUrl = `https://healimbp.com/column/${slug}/`;
  const bookingUrl = `https://booking.naver.com/booking/13/bizes/934695`;
  const kakaoUrl = `https://pf.kakao.com/_Tcxcxoxj`;

  const lines = [];

  // Top header
  lines.push(`📋 [티스토리/블로그 원클릭 복사용 원고 #${index + 1}]`);
  lines.push(`※ 본문 및 강조 문구에 마크다운 볼드 기호(**)가 일체 없어 에디터에 바로 붙여넣으실 수 있습니다.`);
  lines.push(``);
  lines.push(`🎯 [블로그 포스팅용 추천 질문형 제목 옵션]`);
  lines.push(`1️⃣ 표준 질문형 (지역명 포함):`);
  lines.push(cleanTextForPlain(titleP1));
  lines.push(``);
  lines.push(`2️⃣ 질환 기전 질문형:`);
  lines.push(cleanTextForPlain(titleP2));
  lines.push(``);
  lines.push(`3️⃣ 1:1 맞춤 솔루션 질문형:`);
  lines.push(cleanTextForPlain(titleP3));
  lines.push(``);
  lines.push(`────────────────────────────────────`);
  lines.push(``);
  lines.push(`📌 [200자 이내 핵심 결론 요약]`);
  lines.push(cleanTextForPlain(leadConclusion));
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
      lines.push(`[📚 ${cleanTextForPlain(sec.researchTitle || '임상 연구 및 학술 보고 (논문/가이드라인 출처)')}]`);
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
      lines.push(`[🌿 증상별 3대 맞춤 변증 체질 유형]`);
      sec.constitutionCards.forEach((c, cIdx) => {
        lines.push(`[유형 ${cIdx + 1}] ${c.icon} ${cleanTextForPlain(c.title)}`);
        lines.push(`  • ${cleanTextForPlain(c.desc)}`);
        lines.push(``);
      });
    }

    // 6. Solutions
    if (sec.solutions && sec.solutions.length > 0) {
      lines.push(`[🎯 해아림 1:1 맞춤 통합 솔루션 (초기 4~8주 집중 치료 & 주 1~2회)]`);
      sec.solutions.forEach(s => {
        lines.push(`[${cleanTextForPlain(s.badge)}] ${cleanTextForPlain(s.title)}`);
        lines.push(`  • ${cleanTextForPlain(s.desc)}`);
        lines.push(``);
      });
    }

    // 7. FAQ (5개 고정)
    let curFaqs = sec.faqs || [];
    if (curFaqs.length < 5 && curFaqs.length > 0) {
      const seedFaqs = getDiverseFaq(category, { focus: title }, { count: 5 });
      curFaqs = seedFaqs.map((f, fIdx) => ({ qNum: `Q${fIdx + 1}`, q: f.q, a: f.a }));
    }
    if (curFaqs && curFaqs.length > 0) {
      lines.push(`[❓ 진료실 자주 묻는 질문 5선 (FAQ)]`);
      curFaqs.forEach((f, fIdx) => {
        lines.push(`[Q${fIdx + 1}] ${cleanTextForPlain(f.q)}`);
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

  // Doctor Profile (Credentials)
  lines.push(`👨‍⚕️ [저자 프로필: 한방침구과 전문의 권형근 대표원장]`);
  lines.push(`• 보건복지부 공인 한방침구과 전문의`);
  lines.push(`• 대한한방신경정신과학회 정회원`);
  lines.push(`• 대한침구의학회 평생회원`);
  lines.push(`• 전 원광대학교 한의과대학 외래교수`);
  lines.push(`• 뇌파·체열·자율신경 1:1 심층 분석 진료`);
  lines.push(``);

  // Related Columns
  lines.push(`🔗 [함께 읽어보면 도움 되는 추천 의학 칼럼 (내부 링크)]`);
  relatedColumns.forEach((r, rIdx) => {
    lines.push(`${rIdx + 1}. ${cleanTextForPlain(r.title)}`);
    lines.push(`   - 바로가기: https://healimbp.com/column/${r.slug}/`);
  });
  lines.push(``);

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
