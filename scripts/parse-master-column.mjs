import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function stripHtml(text) {
  if (!text) return '';
  return text.replace(/<[^>]+>/g, '').trim();
}

/**
 * Robust parser for master column markdown
 */
export function parseMasterColumn(mdContent, slug) {
  const fmMatch = mdContent.match(/^---([\s\S]*?)---\r?\n([\s\S]*)$/);
  if (!fmMatch) throw new Error(`Invalid markdown frontmatter in slug: ${slug}`);

  const fm = fmMatch[1];
  const body = fmMatch[2];

  const title = (fm.match(/title:\s*"([^"]+)"/) || [])[1] || '';
  const summary = (fm.match(/summary:\s*"([^"]+)"/) || [])[1] || '';
  const date = (fm.match(/date:\s*"([^"]+)"/) || [])[1] || '';
  const category = (fm.match(/category:\s*"([^"]+)"/) || [])[1] || '신경정신과 클리닉';
  const tagsMatch = fm.match(/tags:\s*\[(.*?)\]/);
  const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.replace(/["'\s]/g, '')).filter(Boolean) : [];
  const image = (fm.match(/image:\s*"([^"]+)"/) || [])[1] || '';

  // 1. Voice box (환자 호소문)
  const voiceLines = [];
  const voiceMatch = body.match(/<div class="voice-box">([\s\S]*?)<\/div>\s*(?=\r?\n\r?\n|진료실|<p)/i);
  if (voiceMatch) {
    const vLines = voiceMatch[1].match(/<div class="voice-line">([\s\S]*?)<\/div>/gi) || [];
    vLines.forEach(l => {
      const clean = stripHtml(l);
      if (clean) voiceLines.push(clean);
    });
  }

  // 2. Intro paragraphs (between voice-box and toc)
  let introBlock = body;
  if (voiceMatch) {
    introBlock = introBlock.slice(introBlock.indexOf(voiceMatch[0]) + voiceMatch[0].length);
  }
  const tocMatch = introBlock.match(/<div class="toc">[\s\S]*?<\/ol>\s*<\/div>/i) ||
                   introBlock.match(/<div class="toc">[\s\S]*?<\/div>/i);
  let tocItems = [];
  if (tocMatch) {
    const liMatches = tocMatch[0].match(/<li>([\s\S]*?)<\/li>/gi) || [];
    tocItems = liMatches.map(li => stripHtml(li));
    introBlock = introBlock.slice(0, introBlock.indexOf(tocMatch[0]));
  }

  const introParagraphs = introBlock
    .split(/\r?\n\r?\n+/)
    .map(p => stripHtml(p))
    .filter(Boolean)
    .filter(p => !p.startsWith('<div') && !p.startsWith('---'));

  // 3. Extract sections by <div class="section-label">...</div>
  const sectionChunks = body.split(/(?=<div class="section-label">)/i).slice(1);
  const sections = [];

  for (const chunk of sectionChunks) {
    const labelMatch = chunk.match(/<div class="section-label">(.*?)<\/div>/i);
    const label = labelMatch ? stripHtml(labelMatch[1]) : '';

    const headingMatch = chunk.match(/##\s+([^\r\n]+)/);
    const heading = headingMatch ? stripHtml(headingMatch[1]) : '';

    // Remove section header line and insight box
    let cleanChunk = chunk
      .replace(/<div class="section-label">.*?<\/div>/i, '')
      .replace(/##\s+[^\r\n]+/, '')
      .replace(/<div class="my-8 p-6[\s\S]*$/, '')
      .replace(/\n\s*---\s*\n/g, '\n\n')
      .trim();

    let beforeParagraphs = [];
    let afterParagraphs = [];

    let flowTitle = '';
    let flowSteps = [];
    let checkTitle = '';
    let checkItems = [];
    let researchTitle = '임상 연구 및 학술 보고';
    let researchItems = [];
    let researchTip = '';
    const constitutionCards = [];
    const solutions = [];
    const faqs = [];

    // Check which component exists in this section:
    if (cleanChunk.includes('bg-[#F2F7F4]')) {
      // Section 1: Flowchart
      const m = cleanChunk.match(/<div class="[^"]*bg-\[#F2F7F4\][\s\S]*?<\/div>\s*<\/div>/i);
      if (m) {
        const ftMatch = m[0].match(/<div class="[^"]*text-\[#2F5D50\][^"]*">(.*?)<\/div>/i);
        if (ftMatch) flowTitle = stripHtml(ftMatch[1]);
        const stepMatches = m[0].match(/<span class="bg-\[#202947\][^>]*>(.*?)<\/span>/gi) || [];
        flowSteps = stepMatches.map(s => stripHtml(s));

        const idx = cleanChunk.indexOf(m[0]);
        const before = cleanChunk.slice(0, idx);
        const after = cleanChunk.slice(idx + m[0].length);
        beforeParagraphs = before.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
        afterParagraphs = after.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
      }
    } else if (cleanChunk.includes('bg-[#FAFBF9]')) {
      // Section 2: Checklist
      const m = cleanChunk.match(/<div class="[^"]*bg-\[#FAFBF9\][\s\S]*?<\/ul>\s*<\/div>/i);
      if (m) {
        const ctMatch = m[0].match(/<div class="font-extrabold[^>]*>([\s\S]*?)<\/div>/i) ||
                        m[0].match(/<span>(진료실에서[^<]+)<\/span>/i);
        if (ctMatch) checkTitle = stripHtml(ctMatch[1]);
        const liMatches = m[0].match(/<li[^>]*>([\s\S]*?)<\/li>/gi) || [];
        checkItems = liMatches.map(li => stripHtml(li).replace(/^[✓\s]+/, '').trim());

        const idx = cleanChunk.indexOf(m[0]);
        const before = cleanChunk.slice(0, idx);
        const after = cleanChunk.slice(idx + m[0].length);
        beforeParagraphs = before.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
        afterParagraphs = after.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
      }
    } else if (cleanChunk.includes('border-[#2F5D50]/30') || cleanChunk.includes('border-[#2F5D50]')) {
      // Section 3: Research
      const m = cleanChunk.match(/<div class="[^"]*border-2 border-\[#2F5D50\][\s\S]*?<\/div>\s*<\/div>/i);
      if (m) {
        const rtMatch = m[0].match(/<span>(임상 연구[^<]*|학술 연구[^<]*)<\/span>/i);
        if (rtMatch) researchTitle = stripHtml(rtMatch[1]);
        const itemDivs = m[0].match(/<div class="flex items-start gap-2[^>]*>([\s\S]*?)<\/div>/gi) || [];
        itemDivs.forEach(d => {
          const clean = stripHtml(d).replace(/^[📄\s]+/, '').trim();
          if (clean) researchItems.push(clean);
        });
        const tipMatch = m[0].match(/💡\s*([^<]+)/i);
        if (tipMatch) researchTip = stripHtml(tipMatch[1]);

        const idx = cleanChunk.indexOf(m[0]);
        const before = cleanChunk.slice(0, idx);
        const after = cleanChunk.slice(idx + m[0].length);
        beforeParagraphs = before.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
        afterParagraphs = after.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
      }
    } else if (cleanChunk.includes('grid grid-cols-1 gap-4')) {
      // Section 4: Constitution cards
      const m = cleanChunk.match(/<div class="grid grid-cols-1 gap-4[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i) ||
                cleanChunk.match(/<div class="grid grid-cols-1 gap-4[\s\S]*?(?=\r?\n\r?\n따라서|\n---|$)/i);
      if (m) {
        const cardBlocks = m[0].split(/(?=<div class="p-5 bg-\[#F9FAF8\])/i).slice(1);
        for (const cb of cardBlocks) {
          const icon = (cb.match(/<span class="text-xl">([^<]+)<\/span>/i) || [])[1] || '🌿';
          const cTitle = stripHtml((cb.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i) || [])[1] || '');
          const cDesc = stripHtml((cb.match(/<p[^>]*>([\s\S]*?)<\/p>/i) || [])[1] || '');
          if (cTitle && cDesc) {
            constitutionCards.push({ icon, title: cTitle, desc: cDesc });
          }
        }

        const idx = cleanChunk.indexOf(m[0]);
        const before = cleanChunk.slice(0, idx);
        const after = cleanChunk.slice(idx + m[0].length);
        beforeParagraphs = before.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
        afterParagraphs = after.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
      }
    } else if (cleanChunk.includes('grid grid-cols-1 md:grid-cols-2')) {
      // Section 5: Integrated solutions
      const m = cleanChunk.match(/<div class="grid grid-cols-1 md:grid-cols-2[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i) ||
                cleanChunk.match(/<div class="grid grid-cols-1 md:grid-cols-2[\s\S]*?(?=\r?\n\r?\n이처럼|\n---|$)/i);
      if (m) {
        const solBlocks = m[0].split(/(?=<div class="bg-white rounded-2xl)/i).slice(1);
        for (const sb of solBlocks) {
          const badge = stripHtml((sb.match(/<span class="text-xs font-bold text-\[#B4C2DC\]">([^<]+)<\/span>/i) || [])[1] || '');
          const sTitle = stripHtml((sb.match(/<span class="text-xs font-extrabold">([^<]+)<\/span>/i) || [])[1] || '');
          const sDesc = stripHtml((sb.match(/<div class="p-4 sm:p-5[^>]*>([\s\S]*?)<\/div>/i) || [])[1] || '');
          if (sTitle && sDesc) {
            solutions.push({ badge, title: sTitle, desc: sDesc });
          }
        }

        const idx = cleanChunk.indexOf(m[0]);
        const before = cleanChunk.slice(0, idx);
        const after = cleanChunk.slice(idx + m[0].length);
        beforeParagraphs = before.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
        afterParagraphs = after.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
      }
    } else if (cleanChunk.includes('space-y-4 my-6')) {
      // Section 6: FAQ
      const m = cleanChunk.match(/<div class="space-y-4 my-6[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i) ||
                cleanChunk.match(/<div class="space-y-4 my-6[\s\S]*?(?=\n---|<div class="my-8|$)/i);
      if (m) {
        const qCardBlocks = m[0].split(/(?=<div class="p-5 bg-white)/i).slice(1);
        for (const qb of qCardBlocks) {
          const qNum = stripHtml((qb.match(/<span class="bg-\[#2F5D50\][^>]*>(Q\d+)<\/span>/i) || [])[1] || 'Q');
          const q = stripHtml((qb.match(/<span class="bg-\[#2F5D50\][^>]*>Q\d+<\/span>\s*<span>(.*?)<\/span>/i) || [])[1] || '');
          const a = stripHtml((qb.match(/<p class="text-xs[^>]*>([\s\S]*?)<\/p>/i) || [])[1] || '');
          if (q && a) {
            faqs.push({ qNum, q, a });
          }
        }

        const idx = cleanChunk.indexOf(m[0]);
        const before = cleanChunk.slice(0, idx);
        const after = cleanChunk.slice(idx + m[0].length);
        beforeParagraphs = before.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
        afterParagraphs = after.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
      }
    } else {
      afterParagraphs = cleanChunk.split(/\r?\n\r?\n+/).map(stripHtml).filter(Boolean);
    }

    // Clean up any stray markdown dividers
    beforeParagraphs = beforeParagraphs.filter(p => !p.startsWith('---') && !p.startsWith('Doctor\'s'));
    afterParagraphs = afterParagraphs.filter(p => !p.startsWith('---') && !p.startsWith('Doctor\'s'));

    sections.push({
      label,
      heading,
      flowTitle,
      flowSteps,
      checkTitle,
      checkItems,
      researchTitle,
      researchItems,
      researchTip,
      constitutionCards,
      solutions,
      faqs,
      beforeParagraphs,
      afterParagraphs
    });
  }

  // 4. Doctor insight box
  let doctorInsight = '';
  const insightMatch = body.match(/<div class="my-8 p-6[\s\S]*?<p class="[^"]*">([\s\S]*?)<\/p>/i);
  if (insightMatch) {
    doctorInsight = stripHtml(insightMatch[1]).replace(/["“”]/g, '').trim();
  }

  return {
    slug,
    title,
    summary,
    date,
    category,
    tags,
    image,
    voiceLines,
    tocItems,
    introParagraphs,
    sections,
    doctorInsight
  };
}
