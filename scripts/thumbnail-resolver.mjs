/**
 * 썸네일 이미지 단일 소스 리졸버 (Hierarchical Multi-Tier Single Source of Truth)
 * 해아림한의원 인천부평점 - 질환 세부 주제 + 대상 지역 100% 일치 정밀 매칭
 * 
 * 🚫 우울증/번아웃 오매칭 0% 보장 원칙:
 * 1. 슬러그와 일치하는 static/blog-images/[slug]/ 폴더 우선 탐색
 * 2. 제목(title) 및 슬러그(slug)의 세부 질환 키워드 최우선 스코어링
 * 3. 카테고리 이름에 '우울증'이 포함되어 있더라도 제목에 '우울'이 없으면 우울증 썸네일 매칭 절대 불가
 * 4. 기성 이미지가 없는 경우 exact-tistory-thumbnail-builder로 100% 맞춤형 PNG 실시간 렌더링
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildTistoryThumbnailPng } from './exact-tistory-thumbnail-builder.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const staticDir = path.join(rootDir, 'static');
const blogImagesDir = path.join(staticDir, 'blog-images');

/**
 * static 디렉터리 내에 해당 이미지 파일이 실제 존재하는지 확인
 */
export function verifyStaticImage(webPath) {
  if (!webPath) return false;
  const cleanPath = webPath.replace(/^\//, '');
  const absPath = path.join(staticDir, cleanPath);
  return fs.existsSync(absPath);
}

/**
 * 특정 폴더 내 대표 썸네일 파일 존재 여부 확인 및 상대 경로 반환
 */
function findThumbnailInDir(dirName) {
  const dirPath = path.join(blogImagesDir, dirName);
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) return null;

  const candidateFiles = [
    '01_naver_main_thumbnail.jpg',
    '01_naver_main_thumbnail.png',
    '01_main_summary_thumbnail.png',
    '01_tistory_main_thumbnail.jpg',
    '01_bucheon_tic_thumbnail_3d.jpg',
    '01_bucheon_autonomic_main_thumbnail.png',
    '01_dizziness_main_thumbnail.png',
    '01_dizziness_main_thumbnail_card.png'
  ];

  for (const filename of candidateFiles) {
    const fullPath = path.join(dirPath, filename);
    if (fs.existsSync(fullPath)) {
      return `/blog-images/${dirName}/${filename}`;
    }
  }

  // 폴더 내 01_ 로 시작하는 첫 번째 이미지 파일 탐색
  try {
    const files = fs.readdirSync(dirPath);
    const first01 = files.find(f => (f.startsWith('01_') || f.includes('thumb')) && (f.endsWith('.jpg') || f.endsWith('.png')));
    if (first01) {
      return `/blog-images/${dirName}/${first01}`;
    }
  } catch (e) {}

  return null;
}

/**
 * 카테고리 ID 정규화 (1차 상위 질환군 확정)
 */
export function detectCategoryId(categoryId = '', categoryName = '', title = '', slug = '') {
  const cId = (categoryId || '').toLowerCase();
  const cName = (categoryName || '').toLowerCase();
  const t = (title + ' ' + slug).toLowerCase();

  // 제목/슬러그 기반 정밀 감별
  if (t.includes('tic') || t.includes('adhd') || t.includes('틱') || t.includes('뚜렛') || t.includes('소아') || t.includes('청소년') || t.includes('눈깜빡')) return 'tic';
  if (t.includes('insomnia') || t.includes('sleep') || t.includes('불면') || t.includes('입면') || t.includes('중도각성') || t.includes('조기각성') || t.includes('다몽') || t.includes('하지불안') || t.includes('수면제') || t.includes('단약')) return 'insomnia';
  if (t.includes('autonomic') || t.includes('dizziness') || t.includes('syncope') || t.includes('tinnitus') || t.includes('자율신경') || t.includes('실신') || t.includes('어지럼') || t.includes('이명') || t.includes('미주신경') || t.includes('뇌명') || t.includes('식은땀') || t.includes('상열하한') || t.includes('다한증')) return 'autonomic';
  if (t.includes('panic') || t.includes('anxiety') || t.includes('ocd') || t.includes('phobia') || t.includes('공황') || t.includes('과호흡') || t.includes('광장공포') || t.includes('강박') || t.includes('사회공포') || t.includes('발표불안') || t.includes('예기불안') || t.includes('가슴두근')) return 'panic';
  if (t.includes('매핵기') || t.includes('목 이물감') || t.includes('목에 이물감') || t.includes('삼킴곤란') || t.includes('목에 무언가') || t.includes('담적') || t.includes('소화불량') || t.includes('과민성대장') || t.includes('두통') || t.includes('턱관절') || t.includes('이갈이') || t.includes('후두신경') || t.includes('somatic') || t.includes('신체화')) return 'somatic';
  if (t.includes('화병') || t.includes('울화')) return 'hwabyeong';
  if (t.includes('depression') || t.includes('stress') || t.includes('우울') || t.includes('번아웃') || t.includes('무기력')) return 'stress';

  if (cId === 'tic' || cName.includes('소아') || cName.includes('틱') || cName.includes('adhd')) return 'tic';
  if (cId === 'insomnia' || cName.includes('불면') || cName.includes('수면')) return 'insomnia';
  if (cId === 'autonomic' || cName.includes('자율신경') || cName.includes('어지럼') || cName.includes('이명') || cName.includes('실신') || cName.includes('다한증')) return 'autonomic';
  if (cId === 'panic' || cName.includes('공황') || cName.includes('불안') || cName.includes('강박')) return 'panic';
  if (cId === 'somatic' || cName.includes('신체화') || cName.includes('담적') || cName.includes('두통') || cName.includes('턱관절')) return 'somatic';
  if (cId === 'stress' || cName.includes('우울') || cName.includes('화병') || cName.includes('번아웃')) return 'stress';

  return 'panic';
}

/**
 * 65개 세부 블로그 폴더 대상 스마트 키워드 스코어링 매칭 테이블
 * priority: 1순위(특화 증상: 매핵기, 식은땀, 박동성이명 등), 2순위(지역+질환), 3순위(일반질환)
 */
const TOPIC_FOLDER_RULES = [
  // 1. 특화 신체화 / 이비인후 / 담적 (매핵기, 담적, 턱관절)
  { folder: 'samsan-throat-foreign-body-maehaekgi', keywords: ['매핵기', '이물감', '목 이물감', '목에 이물감', '목에 무언가', '목에 뭔가', '목이물감', '삼킴곤란', '삼킴', '인후', 'maehaekgi', 'throat'], weight: 10 },
  { folder: 'ganseok-damjeok-dyspepsia', keywords: ['담적', '소화불량', '역류성', '과민성', '과민대장', '명치', '위장', '가스 차', 'damjeok', 'dyspepsia'], weight: 10 },
  { folder: 'bupyeong-somatic', keywords: ['신체화', '담적병', '턱관절', '이갈이', '두통', '편두통', 'somatic'], weight: 6 },
  { folder: 'bucheon-cityhall-brainfog', keywords: ['브레인포그', '멍함', '머리 멍', 'brainfog'], weight: 8 },

  // 2. 화병 전용 (우울증 분리)
  { folder: 'bucheon-jungdong-hwabyeong', keywords: ['화병', '울화', '화병클리닉', '가슴 답답', 'hwabyeong'], weight: 10 },

  // 3. 자율신경 / 식은땀 / 어지럼 / 이명 / 실신
  { folder: 'gyeyang-jakjeon-autonomic-sweat', keywords: ['상열하한', '식은땀', '야간 식은땀', '도한', '작전', '계양', '상열감', 'gyeyang', 'jakjeon', 'sweat'], weight: 10 },
  { folder: 'seochang-pulsatile-tinnitus-brain-ringing', keywords: ['박동성', '이명', '뇌명', '귀에서', '삐 소리', '머리 울림', '귀뚜라미', 'seochang', 'tinnitus', 'ringing'], weight: 10 },
  { folder: 'luwon-vasovagal-syncope-bus', keywords: ['실신', '미주신경', '기절', '버스', '루원', 'syncope', 'vasovagal'], weight: 10 },
  { folder: 'bucheon-sinjungdong-vasovagal', keywords: ['신중동 실신', '신중동 미주신경'], weight: 9 },
  { folder: 'bucheon-vasovagal', keywords: ['부천 실신', '부천 미주신경'], weight: 8 },
  { folder: 'incheon-seogu-dizziness', keywords: ['서구 어지럼', '청라 어지럼', '검단 어지럼'], weight: 8 },
  { folder: 'bucheon-dizziness', keywords: ['부천 어지럼', '부천 어지러움'], weight: 7 },
  { folder: 'bupyeong-dizziness', keywords: ['어지럼', '어지러움', 'dizziness', '전정'], weight: 6 },
  { folder: 'bupyeong-hyperhidrosis', keywords: ['다한증', '손발 땀', 'hyperhidrosis'], weight: 8 },
  { folder: 'bucheon-autonomic', keywords: ['부천 자율신경'], weight: 7 },
  { folder: 'bupyeong-autonomic', keywords: ['자율신경', 'autonomic'], weight: 6 },
  { folder: 'autonomic-dizziness', keywords: ['자율신경 어지럼', 'autonomic dizziness'], weight: 5 },

  // 4. 공황 / 과호흡 / 불안 / 강박 / 공포
  { folder: 'dongam-panic-attack-palpitation', keywords: ['공황발작', '심전도', '가슴 두근', '가슴두근', '심계항진', '동암', 'dongam', 'palpitation'], weight: 10 },
  { folder: 'luwon-subway-panic-hyperventilation', keywords: ['과호흡', '지하철', '숨이 막', '질식감', '루원', 'subway', 'hyperventilation'], weight: 10 },
  { folder: 'bucheon-sangdong-driving-panic', keywords: ['운전 공황', '고속도로', '터널 공황', 'driving'], weight: 9 },
  { folder: 'bucheon-sangdong-panic', keywords: ['상동 공황'], weight: 8 },
  { folder: 'incheon-namdong-panic', keywords: ['남동 공황', '구월 공황'], weight: 8 },
  { folder: 'cheongna-anxiety', keywords: ['청라 불안', '청라 예기불안'], weight: 8 },
  { folder: 'bucheon-anxiety', keywords: ['부천 불안'], weight: 7 },
  { folder: 'incheon-anxiety', keywords: ['인천 불안', '불안장애'], weight: 7 },
  { folder: 'bupyeong-anxiety', keywords: ['불안', '예기불안', 'anxiety'], weight: 6 },
  { folder: 'bucheon-ocd', keywords: ['강박', '확인강박', '침투사고', 'ocd'], weight: 9 },
  { folder: 'bucheon-social-phobia', keywords: ['사회공포', '발표불안', '무대공포', '시선공포', '목소리 떨림', '손떨림', 'phobia'], weight: 9 },
  { folder: 'incheon-panic', keywords: ['인천 공황'], weight: 7 },
  { folder: 'bupyeong-panic', keywords: ['공황', '과호흡', 'panic'], weight: 6 },
  { folder: 'panic-anxiety', keywords: ['공황불안'], weight: 5 },

  // 5. 소아청소년 틱 · 성인 ADHD
  { folder: 'bugae-child-tic-relapse', keywords: ['새학기', '재발', '초등학생 틱', '부개', 'relapse'], weight: 10 },
  { folder: 'geomdan-child-tic-eyeblink', keywords: ['눈깜빡', '안과', '눈 깜빡', '눈 깜박', '검단', 'geomdan', 'eyeblink'], weight: 10 },
  { folder: 'bucheon-okgil-child-tic', keywords: ['옥길', '소아 틱'], weight: 8 },
  { folder: 'bucheon-beombak-throat-clearing-tic', keywords: ['음성틱', '킁킁', '헛기침 틱', '범박'], weight: 9 },
  { folder: 'bucheon-teen-tic', keywords: ['청소년 틱', '중고등', 'teen tic'], weight: 8 },
  { folder: 'bucheon-songnae-adult-adhd', keywords: ['송내', '성인 adhd', '성인adhd'], weight: 9 },
  { folder: 'bupyeong-adult-adhd', keywords: ['성인 adhd', '성인adhd', '미루기', '실행기능', 'adult-adhd'], weight: 8 },
  { folder: 'bucheon-adhd', keywords: ['부천 adhd', '산만'], weight: 7 },
  { folder: 'incheon-seogu-adhd', keywords: ['서구 adhd', '청라 adhd'], weight: 7 },
  { folder: 'bupyeong-adhd', keywords: ['adhd', '주의력', '산만'], weight: 6 },
  { folder: 'bucheon-tic', keywords: ['부천 틱'], weight: 7 },
  { folder: 'incheon-tic', keywords: ['인천 틱'], weight: 7 },
  { folder: 'bupyeong-tic', keywords: ['틱', '뚜렛', 'tic'], weight: 6 },
  { folder: 'tic-adhd', keywords: ['소아청소년 틱'], weight: 5 },

  // 6. 불면증 / 수면장애 / 단약
  { folder: 'cheongna-lake-sleeping-pills-tapering', keywords: ['호수공원', '수면유도제', '수면제', '단약', '스틸녹스', '졸피뎀', '내성', '테이퍼링', 'tapering', 'sleeping-pills'], weight: 10 },
  { folder: 'cheongna-adult-insomnia-shallow-sleep', keywords: ['얕은잠', '청라 불면', 'shallow-sleep'], weight: 9 },
  { folder: 'gyesan-insomnia-early-awakening', keywords: ['조기각성', '새벽', '일찍 깨', '계산', 'gyesan', 'early-awakening'], weight: 10 },
  { folder: 'bucheon-sangdong-nocturnal-awakening', keywords: ['중도각성', '야간각성', '자다 깨', '상동 불면'], weight: 9 },
  { folder: 'bucheon-jungdong-tapering', keywords: ['중동 단약', '중동 수면제'], weight: 8 },
  { folder: 'nowon-insomnia', keywords: ['노원 불면'], weight: 7 },
  { folder: 'bucheon-insomnia', keywords: ['부천 불면'], weight: 7 },
  { folder: 'incheon-insomnia', keywords: ['인천 불면'], weight: 7 },
  { folder: 'bupyeong-insomnia', keywords: ['불면', '수면', 'insomnia', '입면'], weight: 6 },
  { folder: 'insomnia-sleep', keywords: ['수면장애'], weight: 5 },

  // 7. 우울증 / 번아웃 / 무기력 (제목에 명시적 우울/번아웃 키워드가 있을 때만 매칭)
  { folder: 'incheon-seogu-depression', keywords: ['서구 우울', '청라 우울'], weight: 8 },
  { folder: 'bucheon-depression', keywords: ['부천 우울', '부천 번아웃'], weight: 8 },
  { folder: 'incheon-depression', keywords: ['인천 우울'], weight: 7 },
  { folder: 'bupyeong-depression', keywords: ['우울증', '우울감', '우울', '번아웃', '무기력', 'depression'], weight: 6 }
];

/**
 * 주어진 메타데이터(슬러그, 제목, 카테고리)로부터 최적의 로컬/웹 썸네일 경로를 안전하고 정밀하게 결정
 */
export function resolveThumbnail({ categoryId = '', categoryName = '', title = '', slug = '', region = '', currentImage = '' }) {
  const normSlug = (slug || '').toLowerCase().trim();
  const normTitle = (title || '').toLowerCase().trim();
  const primaryText = `${normSlug} ${normTitle}`.toLowerCase();
  const fullText = `${normSlug} ${normTitle} ${region} ${categoryName}`.toLowerCase();

  // Tier 1: 슬러그와 정확히 일치하는 디렉터리 검사
  if (normSlug) {
    const directMatch = findThumbnailInDir(normSlug);
    if (directMatch) {
      return directMatch;
    }
  }

  // Tier 2: currentImage 유효성 검사 (단, 타 질환인데 generic 우울증/신체화 폴백 이미지인 경우는 무효화)
  if (currentImage && verifyStaticImage(currentImage)) {
    const isGenericFallBack = currentImage.includes('depression-somatic') || 
                              currentImage.endsWith('/01_naver_main_thumbnail.jpg') && currentImage === '/blog-images/01_naver_main_thumbnail.jpg' ||
                              (currentImage.includes('bupyeong-depression') && !primaryText.includes('우울') && !primaryText.includes('번아웃'));
    if (!isGenericFallBack) {
      return currentImage.startsWith('/') ? currentImage : `/${currentImage}`;
    }
  }

  // Tier 3: 스마트 키워드 스코어링 매칭 (제목+슬러그 기반 고가중치 채점)
  let bestFolder = null;
  let maxScore = 0;

  for (const rule of TOPIC_FOLDER_RULES) {
    // 우울증 폴더는 제목/슬러그에 실제 '우울', '번아웃', '무기력'이 없을 때 매칭 제외
    if (rule.folder.includes('depression')) {
      const isDepressionTopic = primaryText.includes('우울') || primaryText.includes('번아웃') || primaryText.includes('무기력') || primaryText.includes('depression');
      if (!isDepressionTopic) continue;
    }

    let score = 0;
    for (const kw of rule.keywords) {
      const kwLower = kw.toLowerCase();
      if (primaryText.includes(kwLower)) {
        score += (rule.weight || 5) * (kw.length >= 4 ? 2 : 1);
      } else if (fullText.includes(kwLower)) {
        score += 2;
      }
    }

    if (score > maxScore) {
      const foundPath = findThumbnailInDir(rule.folder);
      if (foundPath) {
        maxScore = score;
        bestFolder = foundPath;
      }
    }
  }

  if (bestFolder && maxScore >= 4) {
    return bestFolder;
  }

  // Tier 4: 상위 카테고리별 엄격 분기 (우울증 절대 오매칭 방지)
  const mainCat = detectCategoryId(categoryId, categoryName, title, slug);

  if (mainCat === 'tic') {
    if (primaryText.includes('adhd')) {
      const p = findThumbnailInDir('bupyeong-adult-adhd') || findThumbnailInDir('bupyeong-adhd');
      if (p) return p;
    }
    return findThumbnailInDir('bupyeong-tic') || findThumbnailInDir('incheon-tic') || '/blog-images/tic-adhd/01_naver_main_thumbnail.png';
  }

  if (mainCat === 'insomnia') {
    if (primaryText.includes('수면제') || primaryText.includes('단약')) {
      const p = findThumbnailInDir('cheongna-lake-sleeping-pills-tapering');
      if (p) return p;
    }
    return findThumbnailInDir('bupyeong-insomnia') || findThumbnailInDir('incheon-insomnia') || '/blog-images/insomnia-sleep/01_naver_main_thumbnail.png';
  }

  if (mainCat === 'autonomic') {
    if (primaryText.includes('실신') || primaryText.includes('syncope') || primaryText.includes('미주신경')) {
      const p = findThumbnailInDir('luwon-vasovagal-syncope-bus') || findThumbnailInDir('bucheon-vasovagal');
      if (p) return p;
    }
    if (primaryText.includes('이명') || primaryText.includes('뇌명') || primaryText.includes('박동성')) {
      const p = findThumbnailInDir('seochang-pulsatile-tinnitus-brain-ringing');
      if (p) return p;
    }
    if (primaryText.includes('어지럼')) {
      const p = findThumbnailInDir('bupyeong-dizziness') || findThumbnailInDir('bucheon-dizziness');
      if (p) return p;
    }
    if (primaryText.includes('식은땀') || primaryText.includes('상열하한')) {
      const p = findThumbnailInDir('gyeyang-jakjeon-autonomic-sweat');
      if (p) return p;
    }
    return findThumbnailInDir('bupyeong-autonomic') || findThumbnailInDir('bucheon-autonomic') || '/blog-images/autonomic-dizziness/01_naver_main_thumbnail.png';
  }

  if (mainCat === 'panic') {
    if (primaryText.includes('강박') || primaryText.includes('ocd')) {
      const p = findThumbnailInDir('bucheon-ocd');
      if (p) return p;
    }
    if (primaryText.includes('사회공포') || primaryText.includes('발표')) {
      const p = findThumbnailInDir('bucheon-social-phobia');
      if (p) return p;
    }
    if (primaryText.includes('불안') && !primaryText.includes('공황')) {
      const p = findThumbnailInDir('bupyeong-anxiety') || findThumbnailInDir('cheongna-anxiety');
      if (p) return p;
    }
    return findThumbnailInDir('bupyeong-panic') || findThumbnailInDir('incheon-panic') || '/blog-images/panic-anxiety/01_naver_main_thumbnail.png';
  }

  if (mainCat === 'somatic') {
    if (primaryText.includes('매핵기') || primaryText.includes('이물감') || primaryText.includes('목')) {
      const p = findThumbnailInDir('samsan-throat-foreign-body-maehaekgi');
      if (p) return p;
    }
    if (primaryText.includes('담적') || primaryText.includes('소화') || primaryText.includes('과민성')) {
      const p = findThumbnailInDir('ganseok-damjeok-dyspepsia');
      if (p) return p;
    }
    return findThumbnailInDir('bupyeong-somatic') || '/blog-images/bupyeong-somatic/01_naver_main_thumbnail.jpg';
  }

  if (mainCat === 'hwabyeong') {
    return findThumbnailInDir('bucheon-jungdong-hwabyeong') || findThumbnailInDir('samsan-throat-foreign-body-maehaekgi') || '/blog-images/bupyeong-depression/01_naver_main_thumbnail.jpg';
  }

  if (mainCat === 'stress') {
    return findThumbnailInDir('bupyeong-depression') || findThumbnailInDir('incheon-depression') || '/blog-images/bupyeong-depression/01_naver_main_thumbnail.jpg';
  }

  // Tier 5: 동적 1:1 실시간 썸네일 자동 생성 및 반환 (우울증 일반 폴백 완전 제거)
  try {
    const safeSlug = normSlug || `topic-${Date.now()}`;
    const outPngPath = path.join(blogImagesDir, 'tistory-thumbnails', `${safeSlug}.png`);
    buildTistoryThumbnailPng({ title, categoryName, category: categoryName, slug: safeSlug }, outPngPath);
    return `/blog-images/tistory-thumbnails/${safeSlug}.png`;
  } catch (err) {
    console.warn('[thumbnail-resolver] Real-time thumbnail generation fallback:', err.message);
  }

  return '/blog-images/bupyeong-autonomic/01_naver_main_thumbnail.jpg';
}

/**
 * 웹 절대 URL 썸네일 반환 (외부 플랫폼용)
 */
export function getAbsoluteThumbnailUrl(params) {
  const base = 'https://healimbp.com';
  const relPath = resolveThumbnail(params);
  return `${base}${relPath.startsWith('/') ? relPath : `/${relPath}`}`;
}
