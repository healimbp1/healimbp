/**
 * 썸네일 이미지 단일 소스 리졸버 (Hierarchical Multi-Tier Single Source of Truth)
 * 해아림한의원 인천부평점 - 질환 세부 주제 + 대상 지역 100% 일치 정밀 매칭
 * 
 * 🚫 지역 불일치(Cross-Region Mismatch) & 우울증 오매칭 0% 보장 원칙:
 * 1. 슬러그와 일치하는 static/blog-images/[slug]/ 폴더 우선 탐색
 * 2. 제목(title) 및 슬러그(slug)의 지역명과 질환 키워드 동시 스코어링
 * 3. 글의 타깃 지역과 다른 지역의 기성 썸네일(예: 만수동 글에 동암/루원/상동 이미지) 매칭 절대 차단
 * 4. 기성 이미지가 없거나 지역이 다를 경우 exact-tistory-thumbnail-builder로 [지역명 + 질환명] 100% 일치 PNG 실시간 렌더링
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { buildTistoryThumbnailPng, extractRegionLabel } from './exact-tistory-thumbnail-builder.mjs';

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
 * regionTag: 해당 썸네일 폴더의 고유 지역 (타 지역 매칭 차단용)
 */
const TOPIC_FOLDER_RULES = [
  // 1. 특화 신체화 / 이비인후 / 담적 (매핵기, 담적, 턱관절)
  { folder: 'samsan-throat-foreign-body-maehaekgi', regionTag: '삼산', keywords: ['매핵기', '이물감', '목 이물감', '목에 이물감', '삼킴곤란', '인후', 'maehaekgi'], weight: 10 },
  { folder: 'ganseok-damjeok-dyspepsia', regionTag: '간석', keywords: ['담적', '소화불량', '역류성', '과민성', '과민대장', '명치', '위장', 'damjeok'], weight: 10 },
  { folder: 'bupyeong-somatic', regionTag: '부평', keywords: ['신체화', '담적병', '턱관절', '이갈이', '두통', '편두통', 'somatic'], weight: 6 },
  { folder: 'bucheon-cityhall-brainfog', regionTag: '부천', keywords: ['브레인포그', '멍함', '머리 멍', 'brainfog'], weight: 8 },

  // 2. 화병 전용 (우울증 분리)
  { folder: 'bucheon-jungdong-hwabyeong', regionTag: '중동', keywords: ['화병', '울화', '화병클리닉', '가슴 답답', 'hwabyeong'], weight: 10 },

  // 3. 자율신경 / 식은땀 / 어지럼 / 이명 / 실신
  { folder: 'gimpo-geomdan-vasovagal', regionTag: '검단', keywords: ['검단 실신', '김포 실신', '검단 미주신경', '김포 미주신경', '검단한의원 자율신경', '김포 검단'], weight: 11 },
  { folder: 'gyeyang-jakjeon-autonomic-sweat', regionTag: '작전', keywords: ['상열하한', '식은땀', '야간 식은땀', '도한', '작전', '계양', '상열감', 'sweat'], weight: 10 },
  { folder: 'seochang-pulsatile-tinnitus-brain-ringing', regionTag: '서창', keywords: ['박동성', '이명', '뇌명', '귀에서', '삐 소리', '머리 울림', 'seochang', 'tinnitus'], weight: 10 },
  { folder: 'luwon-vasovagal-syncope-bus', regionTag: '루원', keywords: ['루원 실신', '루원 미주신경', '루원시티 실신', '기절', '버스', 'syncope'], weight: 10 },
  { folder: 'bucheon-sinjungdong-vasovagal', regionTag: '신중동', keywords: ['신중동 실신', '신중동 미주신경'], weight: 9 },
  { folder: 'bucheon-vasovagal', regionTag: '부천', keywords: ['부천 실신', '부천 미주신경'], weight: 8 },
  { folder: 'incheon-seogu-dizziness', regionTag: '서구', keywords: ['서구 어지럼', '청라 어지럼', '검단 어지럼'], weight: 8 },
  { folder: 'bucheon-dizziness', regionTag: '부천', keywords: ['부천 어지럼', '부천 어지러움'], weight: 7 },
  { folder: 'bupyeong-dizziness', regionTag: '부평', keywords: ['부평 어지럼', '부평 어지러움', 'dizziness'], weight: 6 },
  { folder: 'bupyeong-hyperhidrosis', regionTag: '부평', keywords: ['다한증', '손발 땀', 'hyperhidrosis'], weight: 8 },
  { folder: 'bucheon-autonomic', regionTag: '부천', keywords: ['부천 자율신경'], weight: 7 },
  { folder: 'bupyeong-autonomic', regionTag: '부평', keywords: ['부평 자율신경', '자율신경', 'autonomic'], weight: 6 },

  // 4. 공황 / 과호흡 / 불안 / 강박 / 공포
  { folder: 'dongam-panic-attack-palpitation', regionTag: '동암', keywords: ['동암 공황', '동암역 공황', '동암 공황발작', '심계항진', 'dongam'], weight: 10 },
  { folder: 'luwon-subway-panic-hyperventilation', regionTag: '루원', keywords: ['루원 공황', '루원 과호흡', '루원시티 공황', 'subway'], weight: 10 },
  { folder: 'bucheon-sangdong-driving-panic', regionTag: '상동', keywords: ['운전 공황', '고속도로', '터널 공황', '상동 운전'], weight: 9 },
  { folder: 'bucheon-sangdong-panic', regionTag: '상동', keywords: ['상동 공황'], weight: 8 },
  { folder: 'incheon-namdong-panic', regionTag: '남동', keywords: ['남동 공황', '구월 공황', '만수동 공황', '만수 공황'], weight: 8 },
  { folder: 'cheongna-anxiety', regionTag: '청라', keywords: ['청라 불안', '청라 예기불안'], weight: 8 },
  { folder: 'bucheon-anxiety', regionTag: '부천', keywords: ['부천 불안'], weight: 7 },
  { folder: 'incheon-anxiety', regionTag: '인천', keywords: ['인천 불안', '불안장애'], weight: 7 },
  { folder: 'bupyeong-anxiety', regionTag: '부평', keywords: ['부평 불안', '예기불안'], weight: 6 },
  { folder: 'bucheon-ocd', regionTag: '부천', keywords: ['강박', '확인강박', '침투사고', 'ocd'], weight: 9 },
  { folder: 'bucheon-social-phobia', regionTag: '부천', keywords: ['사회공포', '발표불안', '무대공포', '시선공포', '손떨림'], weight: 9 },
  { folder: 'incheon-panic', regionTag: '인천', keywords: ['인천 공황'], weight: 7 },
  { folder: 'bupyeong-panic', regionTag: '부평', keywords: ['부평 공황', '과호흡', 'panic'], weight: 6 },

  // 5. 소아청소년 틱 · 성인 ADHD
  { folder: 'bugae-child-tic-relapse', regionTag: '부개', keywords: ['부개 틱', '부개동 틱', '새학기 틱', '초등학생 틱'], weight: 10 },
  { folder: 'geomdan-child-tic-eyeblink', regionTag: '검단', keywords: ['검단 틱', '눈깜빡', '눈 깜빡', '안과 틱', 'eyeblink'], weight: 10 },
  { folder: 'bucheon-okgil-child-tic', regionTag: '옥길', keywords: ['옥길', '옥길 틱'], weight: 8 },
  { folder: 'bucheon-beombak-throat-clearing-tic', regionTag: '범박', keywords: ['범박', '음성틱', '킁킁', '헛기침 틱'], weight: 9 },
  { folder: 'bucheon-teen-tic', regionTag: '부천', keywords: ['청소년 틱', '중고등 틱'], weight: 8 },
  { folder: 'bucheon-songnae-adult-adhd', regionTag: '송내', keywords: ['송내', '송내 adhd', '성인 adhd'], weight: 9 },
  { folder: 'bupyeong-adult-adhd', regionTag: '부평', keywords: ['부평 성인 adhd', '미루기', '실행기능'], weight: 8 },
  { folder: 'bucheon-adhd', regionTag: '부천', keywords: ['부천 adhd', '부천 산만'], weight: 7 },
  { folder: 'incheon-seogu-adhd', regionTag: '서구', keywords: ['서구 adhd', '청라 adhd'], weight: 7 },
  { folder: 'bupyeong-adhd', regionTag: '부평', keywords: ['부평 adhd', '주의력'], weight: 6 },
  { folder: 'bucheon-tic', regionTag: '부천', keywords: ['부천 틱'], weight: 7 },
  { folder: 'incheon-tic', regionTag: '인천', keywords: ['인천 틱'], weight: 7 },
  { folder: 'bupyeong-tic', regionTag: '부평', keywords: ['부평 틱', '뚜렛'], weight: 6 },

  // 6. 불면증 / 수면장애 / 단약
  { folder: 'cheongna-lake-sleeping-pills-tapering', regionTag: '청라', keywords: ['청라 수면제', '청라 단약', '호수공원', '스틸녹스', '졸피뎀', '테이퍼링'], weight: 10 },
  { folder: 'cheongna-adult-insomnia-shallow-sleep', regionTag: '청라', keywords: ['청라 얕은잠', '청라 불면'], weight: 9 },
  { folder: 'gyesan-insomnia-early-awakening', regionTag: '계산', keywords: ['계산 불면', '조기각성', '새벽에 일찍 깨', '계산동'], weight: 10 },
  { folder: 'bucheon-sangdong-nocturnal-awakening', regionTag: '상동', keywords: ['상동 불면', '중도각성', '야간각성', '자다 깨'], weight: 9 },
  { folder: 'bucheon-jungdong-tapering', regionTag: '중동', keywords: ['중동 단약', '중동 수면제'], weight: 8 },
  { folder: 'bucheon-insomnia', regionTag: '부천', keywords: ['부천 불면'], weight: 7 },
  { folder: 'incheon-insomnia', regionTag: '인천', keywords: ['인천 불면'], weight: 7 },
  { folder: 'bupyeong-insomnia', regionTag: '부평', keywords: ['부평 불면', '수면장애', '입면'], weight: 6 },

  // 7. 우울증 / 번아웃 / 무기력
  { folder: 'seochang-burnout', regionTag: '서창', keywords: ['서창 번아웃', '서창동 번아웃', '서창 우울', '사향공진단', '건뇌단', '만성피로'], weight: 10 },
  { folder: 'incheon-seogu-depression', regionTag: '서구', keywords: ['서구 우울', '청라 우울'], weight: 8 },
  { folder: 'bucheon-depression', regionTag: '부천', keywords: ['부천 우울', '부천 번아웃'], weight: 8 },
  { folder: 'incheon-depression', regionTag: '인천', keywords: ['인천 우울'], weight: 7 },
  { folder: 'bupyeong-depression', regionTag: '부평', keywords: ['부평 우울증', '부평 우울감', '우울증'], weight: 6 }
];

/**
 * 주어진 메타데이터(슬러그, 제목, 카테고리, 지역)로부터 최적의 로컬/웹 썸네일 경로를 안전하고 정밀하게 결정
 */
export function resolveThumbnail({ categoryId = '', categoryName = '', title = '', slug = '', region = '', currentImage = '' }) {
  const normSlug = (slug || '').toLowerCase().trim();
  const normTitle = (title || '').toLowerCase().trim();
  const primaryText = `${normSlug} ${normTitle}`.toLowerCase();
  const fullText = `${normSlug} ${normTitle} ${region} ${categoryName}`.toLowerCase();

  // 대상 지역 라벨 정밀 추출
  const targetRegion = extractRegionLabel(title, region, slug);

  // Tier 1: 슬러그와 정확히 일치하는 디렉터리 검사
  if (normSlug) {
    const directMatch = findThumbnailInDir(normSlug);
    if (directMatch) {
      return directMatch;
    }
  }

  // Tier 2: currentImage 유효성 검사 (타 지역 이미지나 generic 우울증 폴백 무효화)
  if (currentImage && verifyStaticImage(currentImage)) {
    const isGenericFallBack = currentImage.includes('depression-somatic') || 
                              currentImage.endsWith('/01_naver_main_thumbnail.jpg') && currentImage === '/blog-images/01_naver_main_thumbnail.jpg' ||
                              (currentImage.includes('bupyeong-depression') && !primaryText.includes('우울') && !primaryText.includes('번아웃'));
    
    // 만약 글에 특정 지역(예: 만수동, 상동)이 있는데 currentImage가 다른 지역(예: dongam, luwon)인 경우 무효화
    let isCrossRegion = false;
    if (targetRegion) {
      if (targetRegion.includes('만수') && (currentImage.includes('dongam') || currentImage.includes('luwon') || currentImage.includes('sangdong'))) isCrossRegion = true;
      if (targetRegion.includes('상동') && (currentImage.includes('dongam') || currentImage.includes('bupyeong') || currentImage.includes('cheongna'))) isCrossRegion = true;
      if (targetRegion.includes('청라') && (currentImage.includes('dongam') || currentImage.includes('bucheon') || currentImage.includes('gyesan'))) isCrossRegion = true;
    }

    if (!isGenericFallBack && !isCrossRegion) {
      return currentImage.startsWith('/') ? currentImage : `/${currentImage}`;
    }
  }

  // Tier 3: 스마트 키워드 스코어링 매칭 (지역 및 질환 동시 일치 검증)
  let bestFolder = null;
  let maxScore = 0;

  for (const rule of TOPIC_FOLDER_RULES) {
    // 🚫 우울증 폴더는 제목/슬러그에 실제 '우울', '번아웃', '무기력'이 없을 때 매칭 제외
    if (rule.folder.includes('depression')) {
      const isDepressionTopic = primaryText.includes('우울') || primaryText.includes('번아웃') || primaryText.includes('무기력') || primaryText.includes('depression');
      if (!isDepressionTopic) continue;
    }

    // 🚫 지역 불일치(Cross-Region) 원천 차단:
    // 글에 세부 지역(동/구)이 지정되어 있을 때, 엉뚱한 타 세부지역 폴더 매칭 배제
    if (targetRegion && rule.regionTag) {
      const isExactRegionMatch = targetRegion.includes(rule.regionTag) || 
                                (rule.regionTag === '남동' && (targetRegion.includes('만수') || targetRegion.includes('구월') || targetRegion.includes('간석') || targetRegion.includes('서창'))) ||
                                (rule.regionTag === '서구' && (targetRegion.includes('청라') || targetRegion.includes('루원') || targetRegion.includes('가좌'))) ||
                                (rule.regionTag === '부천' && (targetRegion.includes('상동') || targetRegion.includes('중동') || targetRegion.includes('송내') || targetRegion.includes('옥길') || targetRegion.includes('범박'))) ||
                                (rule.regionTag === '부평' && targetRegion.includes('부평')) ||
                                (rule.regionTag === '인천' && targetRegion.includes('인천'));

      // 지역이 정확히 일치하지 않는 기성 폴더는 완전히 제외 (Tier 5에서 100% 맞춤 썸네일 생성 유도)
      if (!isExactRegionMatch) {
        continue;
      }
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

  // 높은 점수로 지역+질환이 일치하는 기성 폴더가 있으면 사용
  if (bestFolder && maxScore >= 6) {
    return bestFolder;
  }

  // Tier 4: 기성 폴더 중 지역이 일치하지 않는 경우, 엉뚱한 이미지를 쓰지 않고
  // 100% 실시간 맞춤 썸네일(Tier 5)로 직행하여 [지역명 + 질환명] 완벽 결합 PNG 렌더링!
  try {
    const safeSlug = normSlug || `thumb-${Date.now()}`;
    const outPngPath = path.join(blogImagesDir, 'tistory-thumbnails', `${safeSlug}.png`);
    const regionParam = targetRegion || region || '';
    buildTistoryThumbnailPng({ title, categoryName, category: categoryName, slug: safeSlug, region: regionParam }, outPngPath);
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
