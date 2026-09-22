import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TOPIC_FAQ_DATABASE, findTopicKey, getDiverseFaq } from './column-faqs.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.resolve(__dirname, '../content/column');

// 키워드별 상충 질환 분류 테이블
const DISEASE_DOMAINS = {
  sweat: {
    name: '다한증/땀',
    keywords: ['다한증', '수족다한증', '보상성 다한증', '땀이 줄줄', '땀 분비량', '교감신경 절제술', 'ETS'],
    validTopics: ['hyperhidrosis']
  },
  panic: {
    name: '공황/불안/광장공포/강박',
    keywords: ['공황발작', '과호흡', '광장공포증', '예기불안', '심장마비 올까봐', '자낙스', '알프라졸람', '종이봉투 호흡'],
    validTopics: ['panic-attack', 'anticipatory-anxiety', 'agoraphobia', 'social-anxiety', 'generalized-anxiety', 'ocd']
  },
  tic: {
    name: '틱장애/뚜렛',
    keywords: ['틱장애', '음성틱', '운동틱', '뚜렛', '눈 깜빡임', '음음', '킁킁', '켁켁', '전조 감각 충동'],
    validTopics: ['pediatric-tic', 'vocal-tic', 'adolescent-tic']
  },
  adhd: {
    name: 'ADHD',
    keywords: ['성인 adhd', '소아 adhd', '콘서타', '메틸페니데이트', '실행기능장애', '팝콘 브레인', '미루기'],
    validTopics: ['adult-adhd', 'pediatric-adhd', 'smartphone-addiction']
  },
  insomnia: {
    name: '불면증/수면장애',
    keywords: ['스틸녹스', '졸피뎀', '수면제', '수면유도제', '수면제 단약', '입면장애', '수면유지장애', '중도각성', '야경증', '가위눌림', '수면마비', '하지불안증후군', 'DMN'],
    validTopics: ['sleep-onset', 'sleep-maintenance', 'sleeping-pill', 'nightmare-paralysis', 'circadian-rhythm', 'sleep-fragmentation']
  },
  hwabyeong: {
    name: '화병/우울/매핵기/번아웃',
    keywords: ['매핵기', '목 이물감', '화병', '울화', '전중혈 압통', '항우울제', '산후우울증', '번아웃 증후군', '분노조절'],
    validTopics: ['hwabyeong-maehaekgi', 'chronic-depression', 'burnout-syndrome', 'postpartum-depression', 'menopausal-hwabyeong', 'anger-control']
  },
  syncope: {
    name: '미주신경성 실신/기립성',
    keywords: ['미주신경성 실신', '카운터 프레셔', '기립성 저혈압', '기립 시 하체'],
    validTopics: ['vasovagal-syncope', 'orthostatic-hypotension']
  },
  tinnitus: {
    name: '이명/뇌명증',
    keywords: ['신경성 이명', '뇌명증', '귀뚜라미', '삐 소리', '청각 유모세포'],
    validTopics: ['tinnitus-autonomic']
  },
  dizziness: {
    name: '경추성 어지럼증/브레인포그',
    keywords: ['경추성 어지럼', '보나링에이', '전정 보상', '추골동맥'],
    validTopics: ['cervicogenic-dizziness']
  },
  somatization: {
    name: '신체화/턱관절/두통/담적/IBS',
    keywords: ['신체화장애', '턱관절 장애', '이갈이', '경추성 두통', '담적병', '담적 독소', '과민대장증후군', '고포드맵'],
    validTopics: ['somatization-disorder', 'tmj-migraine', 'bruxism-jaw', 'cervicogenic-headache', 'damjeok-dyspepsia', 'ibs', 'hwabyeong-maehaekgi']
  },
  fatigue: {
    name: '만성피로/자율신경 소진',
    keywords: ['셀리에', '소진기', 'HRV 심박변이도'],
    validTopics: ['chronic-fatigue']
  }
};

/**
 * FAQ 텍스트 생성 HTML 블록 렌더링
 */
function renderFaqHtml(faqs) {
  let itemsHtml = faqs.map((item, idx) => {
    return `    <div class="p-5 bg-white rounded-2xl border border-[#DDE6E1] shadow-sm space-y-2">
      <div class="font-extrabold text-sm sm:text-base text-[#202947] flex items-start gap-2.5">
        <span class="bg-[#2F5D50] text-white text-xs px-2 py-0.5 rounded-md font-bold shrink-0 mt-0.5">Q${idx + 1}</span>
        <span>${item.q}</span>
      </div>
      <p class="text-xs sm:text-sm text-[#4E6159] leading-relaxed pl-8 m-0">
        ${item.a}
      </p>
    </div>`;
  }).join('\n');

  return `<div class="space-y-4 my-6 not-prose">
${itemsHtml}
</div>`;
}

/**
 * 개별 마크다운 파일 검사 및 완벽 수정
 */
function auditAndFixFile(filePath, dryRun = true) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);

  // 1. Frontmatter 파싱
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const categoryMatch = content.match(/category:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : '';
  const category = categoryMatch ? categoryMatch[1] : '';

  // 2. FAQ 영역 추출 (유연한 Section 번호 지원: 06, 07, 08 등)
  const faqSectionRegex = /(?:<div class="section-label">진료실 자주 묻는 질문 \d+<\/div>[\s\S]*?)?## 환자분들이 진료실에서 가장 많이 묻는 현실적 질문 \(FAQ\)[\s\S]*?((?:<div class="space-y-4 my-6 not-prose">[\s\S]*?<\/div>\s*)+)(?=\s*\n\s*(?:<div class="my-8|<div class="section-label"|---|$))/;
  const faqMatch = content.match(faqSectionRegex);

  let currentFaqText = '';
  let currentQuestions = [];
  if (faqMatch) {
    currentFaqText = faqMatch[1];
    const qMatches = [...currentFaqText.matchAll(/<span>(.*?)<\/span>/g)];
    currentQuestions = qMatches.map(m => m[1]).filter(q => q.length > 5);
  }

  // 3. 최적 매칭 Topic Key 결정
  const optimalTopicKey = findTopicKey('', title, category);
  
  // 4. 불일치(Mismatch) 감지
  let isMismatch = false;
  let mismatchReason = '';

  const currentFaqAllText = currentFaqText.toLowerCase();

  for (const [domainKey, domain] of Object.entries(DISEASE_DOMAINS)) {
    const matchedKw = domain.keywords.find(kw => currentFaqAllText.includes(kw.toLowerCase()));
    const isDomainValidForTopic = domain.validTopics.includes(optimalTopicKey);

    if (matchedKw && !isDomainValidForTopic) {
      isMismatch = true;
      mismatchReason = `[주제 불일치] 포스트 주제: '${optimalTopicKey}' (${title}) vs FAQ에 '${domain.name}' 키워드('${matchedKw}') 포함`;
      break;
    }
  }

  // FAQ가 누락되었거나 질문 수가 3개 미만인 경우
  if (!faqMatch || currentQuestions.length < 3) {
    isMismatch = true;
    mismatchReason = `[FAQ 누락/부족] FAQ 섹션 부재 또는 질문 수 ${currentQuestions.length}개 (<3개)`;
  }

  let modified = false;

  // 5. 불일치 발견 시 100% 매칭 FAQ로 교체
  if (isMismatch) {
    const optimalFaqs = getDiverseFaq(category, { title, focus: title }, { title, slot: 0 });
    const replacementHtml = renderFaqHtml(optimalFaqs);

    if (faqMatch) {
      content = content.replace(faqMatch[1], `${replacementHtml}\n`);
      modified = true;
    } else {
      // FAQ 헤더가 있는 경우 바로 뒤에 삽입
      const headerRegex = /(## 환자분들이 진료실에서 가장 많이 묻는 현실적 질문 \(FAQ\)[\s\S]*?\n\n)/;
      if (headerRegex.test(content)) {
        content = content.replace(headerRegex, `$1${replacementHtml}\n\n`);
        modified = true;
      } else {
        // 섹션 전체가 없는 경우 삽입
        const faqFullBlock = `\n\n---\n\n<div class="section-label">진료실 자주 묻는 질문 06</div>\n\n## 환자분들이 진료실에서 가장 많이 묻는 현실적 질문 (FAQ)\n\n${replacementHtml}\n`;
        const doctorInsightRegex = /(<div class="my-8 p-6 sm:p-8 bg-gradient-to-br)/;
        if (doctorInsightRegex.test(content)) {
          content = content.replace(doctorInsightRegex, `${faqFullBlock}\n$1`);
          modified = true;
        } else {
          content += faqFullBlock;
          modified = true;
        }
      }
    }
  }

  // 6. 원장 프로필 명칭 오류 점검 및 일괄 정정 ("한의학 박사" -> "한방침구과 전문의")
  if (content.includes('한의학 박사') || content.includes('한의학박사')) {
    content = content.replace(/한의학\s*박사/g, '한방침구과 전문의');
    modified = true;
  }

  // 7. 중복 삽입된 FAQ 블록 정리
  const duplicateFaqCheck = /(<div class="space-y-4 my-6 not-prose">[\s\S]*?<\/div>)\s*(?:<div class="space-y-4 my-6 not-prose">[\s\S]*?<\/div>)+/;
  if (duplicateFaqCheck.test(content)) {
    content = content.replace(duplicateFaqCheck, '$1');
    modified = true;
  }

  // 8. 저장
  if (!dryRun && modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return {
    filename,
    title,
    category,
    optimalTopicKey,
    currentQuestions,
    isMismatch,
    mismatchReason,
    modified: !dryRun && modified
  };
}

async function run() {
  const isDryRun = process.argv.includes('--dry-run');
  console.log(`\n========================================================================`);
  console.log(`🔍 [칼럼 FAQ 전수조사 및 일괄 정밀 수정] Mode: ${isDryRun ? 'DRY-RUN (조사만 수행)' : 'LIVE-EXECUTION (실제 파일 수정)'}`);
  console.log(`========================================================================\n`);

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md') && f !== '_index.md');
  
  const results = [];
  const mismatches = [];

  for (const file of files) {
    const fullPath = path.join(CONTENT_DIR, file);
    const result = auditAndFixFile(fullPath, isDryRun);
    results.push(result);
    if (result.isMismatch) {
      mismatches.push(result);
    }
  }

  console.log(`📊 [전수조사 통계 결과]`);
  console.log(`- 전체 검사 칼럼 파일: ${results.length}개`);
  console.log(`- 불일치/수정 필요 칼럼: ${mismatches.length}개`);
  console.log(`- 정상 칼럼: ${results.length - mismatches.length}개\n`);

  if (mismatches.length > 0) {
    console.log(`📋 [불일치 칼럼 목록 (${mismatches.length}개)]`);
    mismatches.forEach((m, idx) => {
      console.log(`${idx + 1}. [${m.filename}]`);
      console.log(`   - 제목: ${m.title}`);
      console.log(`   - 카테고리: ${m.category}`);
      console.log(`   - 자동 매칭 주제: ${m.optimalTopicKey}`);
      console.log(`   - 불일치 사유: ${m.mismatchReason}`);
      if (m.modified) {
        console.log(`   -> ✅ 100% 매칭 전문 FAQ로 수정/교체 완료!`);
      }
    });
  }

  return { total: results.length, mismatches };
}

run();
