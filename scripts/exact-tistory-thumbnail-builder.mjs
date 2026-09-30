import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/\([\u4e00-\u9fa5\s·]+\)/g, '')
    .trim();
}

const fontFamilies = "'Malgun Gothic', '맑은 고딕', 'Pretendard', -apple-system, sans-serif";

/**
 * 제목, 지역, 슬러그로부터 허용 진료 권역 키워드 정밀 추출
 */
export function extractRegionLabel(title = '', region = '', slug = '') {
  const combined = `${region} ${title} ${slug}`.trim();
  if (!combined) return '';

  // 🚫 비허용 권역 방어 (송도/연수구/영종도/미추홀구 등 감지 시 부평으로 안전 치환)
  if (combined.includes('송도') || combined.includes('연수구') || combined.includes('영종') || combined.includes('미추홀') || combined.includes('주안')) {
    return '인천 부평';
  }

  const regionRules = [
    // 부평구
    { kws: ['부평역'], label: '인천 부평역' },
    { kws: ['산곡동', '산곡'], label: '인천 산곡동' },
    { kws: ['삼산동', '삼산'], label: '인천 삼산동' },
    { kws: ['부개동', '부개'], label: '인천 부개동' },
    { kws: ['청천동', '청천'], label: '인천 청천동' },
    { kws: ['갈산동', '갈산'], label: '인천 갈산동' },
    { kws: ['십정동', '동암', '백운'], label: '인천 동암' },
    { kws: ['부평동', '부평구', '부평'], label: '인천 부평' },

    // 남동구
    { kws: ['만수동', '만수'], label: '인천 만수동' },
    { kws: ['구월동', '구월'], label: '인천 구월동' },
    { kws: ['간석동', '간석'], label: '인천 간석동' },
    { kws: ['서창동', '서창'], label: '인천 서창동' },
    { kws: ['논현동', '논현', '도림동'], label: '인천 논현동' },
    { kws: ['남동구', '남동'], label: '인천 남동구' },

    // 계양구
    { kws: ['계산동', '계산'], label: '인천 계산동' },
    { kws: ['작전동', '작전'], label: '인천 작전동' },
    { kws: ['효성동'], label: '인천 효성동' },
    { kws: ['계양구', '계양'], label: '인천 계양구' },

    // 서구
    { kws: ['청라국제도시', '청라'], label: '인천 청라' },
    { kws: ['루원시티', '루원'], label: '인천 루원시티' },
    { kws: ['가좌동', '가좌'], label: '인천 가좌동' },
    { kws: ['가정동', '신현동', '석남동'], label: '인천 서구' },
    { kws: ['서구'], label: '인천 서구' },

    // 검단
    { kws: ['검단신도시', '검단'], label: '검단신도시' },
    { kws: ['원당동', '당하동', '마전동', '불로동', '오류동', '왕길동'], label: '인천 검단' },
    { kws: ['김포 검단', '김포'], label: '김포·검단' },

    // 부천시
    { kws: ['부천 상동', '상동'], label: '부천 상동' },
    { kws: ['부천 중동', '신중동', '중동'], label: '부천 중동' },
    { kws: ['부천 송내', '송내'], label: '부천 송내' },
    { kws: ['부천 옥길', '옥길'], label: '부천 옥길' },
    { kws: ['부천 범박', '범박'], label: '부천 범박' },
    { kws: ['부천 심곡', '심곡동'], label: '부천 심곡동' },
    { kws: ['부천시', '부천'], label: '부천시' },

    // 시흥시
    { kws: ['시흥 배곧', '배곧신도시', '배곧'], label: '시흥 배곧' },
    { kws: ['시흥 은계', '은계지구', '은계'], label: '시흥 은계' },
    { kws: ['시흥 신천', '신천동'], label: '시흥 신천' },
    { kws: ['시흥시', '시흥', '정왕동', '목감', '대야동', '은행동'], label: '시흥시' },

    // 강화군
    { kws: ['강화군', '강화'], label: '인천 강화군' },

    // 광역
    { kws: ['인천'], label: '인천' }
  ];

  for (const rule of regionRules) {
    for (const kw of rule.kws) {
      if (combined.includes(kw)) {
        return rule.label;
      }
    }
  }

  return '';
}

/**
 * 질환명과 핵심 주제를 파악하여 고품격 썸네일 전용 타이틀 & 서브훅 & 3대 단계 추출
 */
export function extractSmartCardData(title = '', categoryName = '', region = '') {
  const normTitle = (title || '').toLowerCase();
  const normCat = (categoryName || '').toLowerCase();
  const detectedRegion = extractRegionLabel(title, region, '');

  let res = null;

  // 1. 소아 틱장애 / 뚜렛 / 눈깜빡임 (title 우선)
  if (normTitle.includes('틱') || normTitle.includes('뚜렛') || normTitle.includes('눈 깜빡') || normTitle.includes('눈깜빡') || normTitle.includes('음성틱') || (normCat.includes('틱') && !normTitle.includes('adhd'))) {
    res = {
      badge: '소아청소년 틱장애 클리닉',
      title: '소아청소년 틱장애 · 눈깜빡임 · 뚜렛 한방 치료',
      subHook: '아이의 눈 깜빡임과 킁킁거리는 틱 증상, 뇌 신경 자생력 회복',
      s1: { title: '01. 기저핵 미성숙도 & 감각수용 과민성 진단', desc: '의지로 참을 수 없는 틱 증상의 신경학적 기전 분석' },
      s2: { title: '02. 평간식풍(平肝熄風) 순한 맞춤 한약', desc: '과흥분된 두뇌 피질을 진정시키고 기저핵 성장 촉진' },
      s3: { title: '03. 무통 침치료 & 두개천골 이완 요법', desc: '아이에게 부담 없는 치료로 재발 없는 성장 완성' },
      isIndigo: false
    };
  }

  // 2. 미주신경성 실신 / 기절
  else if (normTitle.includes('실신') || normTitle.includes('미주신경') || normTitle.includes('기절')) {
    res = {
      badge: '자율신경 · 실신 & 어지럼증 클리닉',
      title: '미주신경성 실신 · 뇌 혈류 저하 한방 치료',
      subHook: '출퇴근 지하철이나 버스에서 눈앞이 캄캄해지고 쓰러질 때',
      s1: { title: '01. 미주신경 과항진 & 급격한 혈압 저하 기전 분석', desc: '심장·뇌 기질적 이상 없는 자율신경성 뇌 허혈 진단' },
      s2: { title: '02. 익기승양(益氣升陽) 맞춤 한약 & SGB 약침', desc: '뇌로 가는 혈류를 지키고 자율신경 반사 정상화' },
      s3: { title: '03. 경추 정렬 교정 & 응급 텐싱 행동요법', desc: '상부경추 감압으로 뇌혈관 탄력성 및 자생력 복원' },
      isIndigo: false
    };
  }

  // 3. 이명 / 박동성 이명 / 뇌명증
  else if (normTitle.includes('이명') || normTitle.includes('뇌명') || normTitle.includes('삐 소리') || normTitle.includes('머리 울림') || normTitle.includes('박동성')) {
    res = {
      badge: '이명 · 뇌명증 & 자율신경 클리닉',
      title: '박동성 이명 · 뇌명증 · 머리 울림 한방 치료',
      subHook: '귀에서 심장 박동 소리가 들리고 조용한 밤 머릿속이 윙윙 울릴 때',
      s1: { title: '01. 내이 달팽이관 허혈 & 청신경 과민 정밀 진단', desc: '경추 아탈구와 뇌 혈류 장애로 인한 이명·뇌명 감별' },
      s2: { title: '02. 청신청뇌(淸神淸腦) 탕약 & 측두근 이완 약침', desc: '청신경 염증 진정 및 뇌 신경망 흥분 완화' },
      s3: { title: '03. 턱관절-상부경추 FCST 교정 추나', desc: '귀 주변 뇌신경 압박 해소 및 뇌척수액 순환 촉진' },
      isIndigo: false
    };
  }

  // 4. 어지럼증 / 기립성 어지럼
  else if (normTitle.includes('어지럼') || normTitle.includes('어지러움') || normTitle.includes('dizziness')) {
    res = {
      badge: '자율신경 · 어지럼증 & 실신 클리닉',
      title: '만성 어지럼증 · 자율신경 실조 한방 치료',
      subHook: '머리가 멍하고 빙빙 도는 만성 어지럼증과 뇌 혈류 저하',
      s1: { title: '01. 자율신경 HRV & 전정신경 기능 정밀 진단', desc: '뇌 MRI·이비인후과 정상인 기능성 어지럼증 원인 분석' },
      s2: { title: '02. 보혈청뇌(補血淸腦) 맞춤 탕약 & 경혈 약침', desc: '과열된 교감신경을 안정시키고 뇌 혈류 순환 촉진' },
      s3: { title: '03. 경추 감압 교정 & 두개천골 이완', desc: '목 디스크 및 상부경추 비틀림으로 인한 어지럼 해소' },
      isIndigo: false
    };
  }

  // 5. 공황발작 / 과호흡 / 광장공포증 / 밀폐공간 공포
  else if (normTitle.includes('공황') || normTitle.includes('과호흡') || normTitle.includes('광장공포') || normTitle.includes('밀폐') || (normCat.includes('공황') && !normTitle.includes('강박') && !normTitle.includes('사회공포'))) {
    res = {
      badge: '공황 · 불안 & 과호흡 클리닉',
      title: '공황발작 · 과호흡 응급 대처 & 한방 치료',
      subHook: '갑자기 숨이 턱 막히고 심장이 미친 듯이 뛰며 죽을 것 같을 때',
      s1: { title: '01. 편도체 과각성 & 자율신경 과흥분 정밀 진단', desc: '뇌 속 화재경보기 오작동 원인 분석 및 신체화 측정' },
      s2: { title: '02. 청뇌안신(淸腦安神) 맞춤 한약 & 전중혈 약침', desc: '가슴 답답함과 질식감 즉각 진정 및 GABA 분비 촉진' },
      s3: { title: '03. 횡격막 이완 호흡 교정 & 두뇌 훈련', desc: '과호흡 유발 방지 및 뇌 자생적 안정 회로 구축' },
      isIndigo: true
    };
  }

  // 6. 강박증
  else if (normTitle.includes('강박') || normTitle.includes('ocd') || normTitle.includes('확인')) {
    res = {
      badge: '공황 · 불안 & 강박증 클리닉',
      title: '강박증 · 확인사고 · 침투사고 한방 치료',
      subHook: '문 잠갔는지 가스 껐는지 수십 번 확인을 멈출 수 없을 때',
      s1: { title: '01. 기저핵-CSTC 신경회로 과열 정밀 진단', desc: '반복적인 불안 침투사고와 강박행동의 뇌 연결망 분석' },
      s2: { title: '02. 청뇌안신(淸腦安神) 한약 & 시호청간 처방', desc: '뇌 속 억제성 신경전달물질 균형 복원' },
      s3: { title: '03. 인지 재구조화 & 뇌 이완 침구 치료', desc: '불안 내성을 기르고 강박 행동의 고리를 차단' },
      isIndigo: true
    };
  }

  // 7. 사회공포증 / 발표불안
  else if (normTitle.includes('사회공포') || normTitle.includes('발표') || normTitle.includes('목소리 떨림') || normTitle.includes('무대') || normTitle.includes('시선공포')) {
    res = {
      badge: '사회공포 · 발표불안 클리닉',
      title: '사회공포증 · 발표불안 · 시선공포 한방 치료',
      subHook: '사람들 앞에만 서면 목소리가 떨리고 심장이 쿵쾅거릴 때',
      s1: { title: '01. 대인 긴장도 & 자율신경 반응성 정밀 진단', desc: '교감신경 폭주로 인한 손 떨림·목소리 떨림 원인 분석' },
      s2: { title: '02. 심담허겁(心膽虛怯) 체질 한약 & 청열 약침', desc: '심장과 쓸개의 담력을 키워 무대 위 침착성 유지' },
      s3: { title: '03. 인후부 근막 이완 & 호흡 안정 훈련', desc: '발성 긴장을 풀고 당당한 발표 자생력 완성' },
      isIndigo: true
    };
  }

  // 8. 예기불안 / 불안장애
  else if (normTitle.includes('예기불안') || normTitle.includes('불안장애') || normTitle.includes('불안')) {
    res = {
      badge: '공황 · 불안 & 강박증 클리닉',
      title: '예기불안 · 만성 불안장애 한방 치료',
      subHook: '또 발작이 올까 봐 24시간 불안하고 외출하기조차 두려울 때',
      s1: { title: '01. 뇌 변연계 편도체 과열 & 해마 트라우마 진단', desc: '24시간 가짜 비상 사이렌이 울리는 뇌 과부하 분석' },
      s2: { title: '02. 청심안신 탕약 & 성상신경절 SGB 약침', desc: '심장의 허열을 내리고 조바심과 가슴 두근거림 해소' },
      s3: { title: '03. 5-4-3-2-1 감각 그라운딩 & 신경망 이완', desc: '현재 감각으로 주의를 되돌려 편도체 알람 리셋' },
      isIndigo: true
    };
  }

  // 9. 수면제 단약 / 테이퍼링
  else if (normTitle.includes('수면제') || normTitle.includes('단약') || normTitle.includes('스틸녹스') || normTitle.includes('졸피뎀') || normTitle.includes('테이퍼링')) {
    res = {
      badge: '불면증 · 수면제 단약 클리닉',
      title: '수면제 의존 탈출 · 불면증 단약 치료',
      subHook: '수면제 없이는 잠 못 자고 약물 내성과 의존성이 걱정될 때',
      s1: { title: '01. 수면 뇌파(QEEG) & DMN 과각성 정밀 진단', desc: '약물 의존도 분석 및 뇌 수면 조절 스위치 상태 평가' },
      s2: { title: '02. 뇌 신경 자생력 회복 탕약 & 청심 약침', desc: '멜라토닌 분비 리듬 복원 및 단계적 안전 감량' },
      s3: { title: '03. 상부경추 교정 & 두뇌 이완 CST', desc: '뇌척수액 순환 촉진 및 자연스러운 델타파 유도' },
      isIndigo: false
    };
  }

  // 10. 불면증 / 수면장애 / 중도각성 / 조기각성
  else if (normTitle.includes('불면') || normTitle.includes('입면') || normTitle.includes('중도각성') || normTitle.includes('조기각성') || normTitle.includes('얕은잠') || normTitle.includes('다몽') || normCat.includes('불면') || normCat.includes('수면')) {
    res = {
      badge: '불면증 · 수면장애 클리닉',
      title: '만성 불면증 · 얕은잠 · 조기각성 한방 치료',
      subHook: '밤마다 잠들기 힘들고 새벽에 자주 깨며 깊은 잠을 못 잘 때',
      s1: { title: '01. 수면 뇌파 QEEG & 자율신경 과각성 평가', desc: '교감신경 흥분으로 인한 뇌 각성 스위치 오작동 진단' },
      s2: { title: '02. 안신보혈(安神補血) 맞춤 한약 & 청열 약침', desc: '심장의 허열을 내리고 멜라토닌 자연 분비 촉진' },
      s3: { title: '03. 두개천골 CST & 상부경추 추나요법', desc: '뇌척수액 순환 개선으로 뇌 피로 해소 및 숙면 유도' },
      isIndigo: false
    };
  }

  // 11. 성인 ADHD / 브레인포그
  else if (normTitle.includes('성인 adhd') || normTitle.includes('성인adhd') || normTitle.includes('미루기') || normTitle.includes('실행기능') || normTitle.includes('브레인포그') || (normCat.includes('adhd') && !normCat.includes('틱'))) {
    res = {
      badge: '성인 ADHD & 두뇌클리닉',
      title: '성인 ADHD · 만성 미루기 · 브레인포그 한방 치료',
      subHook: '단순한 게으름이 아닙니다! 전두엽 도파민 결핍과 실행기능 저하',
      s1: { title: '01. 전두엽 주의집중력 & 정량화 뇌파(QEEG) 진단', desc: '쎄타파/베타파 비율 및 작업기억력 상태 정밀 측정' },
      s2: { title: '02. 총명청뇌(聰明淸腦) 맞춤 한약 & 두피 약침', desc: '도파민·노르에피네프린 대사 활성화 및 뇌 피로 해소' },
      s3: { title: '03. 뉴로피드백 두뇌 훈련 & 실행기능 코칭', desc: '업무 집중력을 높이고 잦은 실수를 줄이는 두뇌 자생력' },
      isIndigo: false
    };
  }

  // 12. 목 이물감 / 매핵기 / 삼킴곤란
  else if (normTitle.includes('매핵기') || normTitle.includes('이물감') || normTitle.includes('목에') || normTitle.includes('삼킴')) {
    res = {
      badge: '목 이물감 · 매핵기(梅核氣) 클리닉',
      title: '목 이물감 · 매핵기 · 삼킴곤란 한방 치료',
      subHook: '목에 뭔가 걸린 듯 뱉어지지도 삼켜지지도 않는 답답한 이물감',
      s1: { title: '01. 인후부 기체(氣滯) & 자율신경 과긴장 진단', desc: '이비인후과·내시경 정상인 신경성 인후 이상감각 감별' },
      s2: { title: '02. 반하후박탕(半夏厚朴湯) 가감방 & 청열 약침', desc: '목구멍 뭉친 담음(痰飮)을 삭히고 울체된 기운 즉각 소통' },
      s3: { title: '03. 설골-후두근막 CST 이완 & 경추 정렬 교정', desc: '목 주변 신경 압박을 해소하여 시원하고 편안한 삼킴 복원' },
      isIndigo: false
    };
  }

  // 13. 자율신경실조증 / 상열하한 / 식은땀
  else if (normTitle.includes('상열하한') || normTitle.includes('식은땀') || normTitle.includes('자율신경') || normCat.includes('자율신경')) {
    res = {
      badge: '자율신경실조증 · 상열하한 클리닉',
      title: '자율신경실조증 · 상열하한 · 식은땀 치료',
      subHook: '얼굴은 불타듯 덥고 식은땀 나는데 발끝은 얼음장처럼 차가울 때',
      s1: { title: '01. 자율신경 HRV & 상열하한 체열 정밀 진단', desc: '교감신경 과항진으로 인한 혈관 수축·이완 조절 실조 분석' },
      s2: { title: '02. 수승화강(水昇火降) 맞춤 한약 & 청열 약침', desc: '상체 열은 내리고 하초를 따뜻하게 덥혀 체온 항상성 복원' },
      s3: { title: '03. 두개천골 CST & 상부경추 추나요법', desc: '뇌간 혈류를 촉진하고 미주신경 활성으로 재발 방지' },
      isIndigo: false
    };
  }

  // 14. 턱관절 장애 / 이갈이
  else if (normTitle.includes('턱관절') || normTitle.includes('이갈이') || normTitle.includes('이악물기') || normTitle.includes('개구')) {
    res = {
      badge: '턱관절 & 신체화 클리닉',
      title: '턱관절 통증 · 수면 중 이갈이 한방 치료',
      subHook: '입 벌릴 때 딱 소리와 통증, 수면 중 이갈이와 만성 두통',
      s1: { title: '01. 턱관절 디스크 변위 & 교근 연축 정밀 진단', desc: '두개-하악-경추의 구조적 비틀림 및 교합 불균형 평가' },
      s2: { title: '02. 교근·측두근 심부 전침 & 소염약침 요법', desc: '굳어버린 저작근을 즉각 이완하고 관절강 염증 진정' },
      s3: { title: '03. 턱관절 균형장치 FCST & 경추 교정 추나', desc: '하악두 위치를 바로잡아 두통과 신경 압박 재발 차단' },
      isIndigo: false
    };
  }

  // 15. 만성 두통 / 편두통
  else if (normTitle.includes('두통') || normTitle.includes('편두통') || normTitle.includes('후두신경') || normTitle.includes('머리 아')) {
    res = {
      badge: '만성두통 & 신경통 클리닉',
      title: '만성 편두통 · 경추성 두통 · 후두신경통 한방 치료',
      subHook: '진통제를 달고 살아도 낫지 않는 지끈거리는 두통과 눈 통증',
      s1: { title: '01. 경추 신경근 압박 & 두피 혈관 박동 정밀 진단', desc: '목 디스크 및 일자목으로 인한 경추성 두통 감별' },
      s2: { title: '02. 후두하근 정밀 약침 & 청뇌(淸腦) 맞춤 한약', desc: '후두신경 포착을 풀고 뇌 혈류 순환 장애 개선' },
      s3: { title: '03. 상부경추-흉추 신연 추나요법', desc: '굳어버린 목·어깨 근막을 이완하여 두통 재발 차단' },
      isIndigo: false
    };
  }

  // 16. 과민성대장증후군 / 담적병
  else if (normTitle.includes('과민성') || normTitle.includes('담적') || normTitle.includes('소화') || normTitle.includes('복통') || normTitle.includes('역류성')) {
    res = {
      badge: '담적병 & 신체화 클리닉',
      title: '담적병 · 과민성대장증후군 · 역류성식도염 치료',
      subHook: '내시경엔 정상인데 명치가 꽉 막히고 시험 전 배가 아플 때',
      s1: { title: '01. 뇌-장 축(Brain-Gut Axis) & 복부 담적 진단', desc: '스트레스로 인한 위장관 자율신경 조절 장애 분석' },
      s2: { title: '02. 소적건비(消積健脾) 한약 & 복부 온열 뜸', desc: '굳어진 위장 외벽의 독소(담적)를 삭히고 위장 운동 복원' },
      s3: { title: '03. 자율신경 조절 침구 & 장내 미생물 환경 개선', desc: '복부 팽만감과 복통을 가라앉히고 편안한 소화 회복' },
      isIndigo: false
    };
  }

  // 17. 번아웃 / 만성 무기력
  else if (normTitle.includes('번아웃') || normTitle.includes('무기력') || normTitle.includes('공진단') || normTitle.includes('건뇌단') || normTitle.includes('만성피로') || (normTitle.includes('피로') && normTitle.includes('뇌'))) {
    res = {
      badge: '번아웃 증후군 · 뇌 피로 & 무기력 클리닉',
      title: '번아웃 증후군 · 만성 무기력 · 뇌 에너지 방전 치료',
      subHook: '의지력 문제가 아닌 뇌 신경망 방전과 부신 에너지 고갈',
      s1: { title: '01. 뇌 신경전달물질 & HPA축 과열 정밀 진단', desc: '세로토닌·도파민 고갈 및 자율신경 방전 상태 측정' },
      s2: { title: '02. 보익심비(補益心脾) 탕약 & 사향공진단 요법', desc: '심비 기혈을 보강하고 지친 두뇌에 급속 에너지 충전' },
      s3: { title: '03. 두개천골 뇌 혈류 추나 & 미주신경 활성화', desc: '뇌척수액 순환을 촉진하여 뇌 피로물질 배출 및 자생력 복원' },
      isIndigo: false
    };
  }

  // 18. 화병
  else if (normTitle.includes('화병') || normTitle.includes('울화') || normTitle.includes('가슴 답답') || normTitle.includes('억울')) {
    res = {
      badge: '화병 & 스트레스 클리닉',
      title: '화병(火病) · 가슴 답답함 · 상열감 한방 치료',
      subHook: '가슴에 불덩이가 얹힌 듯 답답하고 억울함과 분노가 치밀 때',
      s1: { title: '01. 기체(氣滯) 울결 & 자율신경 상열하한 진단', desc: '억압된 분노와 스트레스로 인한 흉격 울화 측정' },
      s2: { title: '02. 시호가용골모려탕 & 분심기음 가감방', desc: '가슴속 뭉친 화(火)를 흩뜨리고 심장 허열 즉각 해소' },
      s3: { title: '03. 전중혈 사혈 및 청열 안신 침구', desc: '과열된 심장 경락을 식혀 시원한 호흡 복원' },
      isIndigo: false
    };
  }

  // 19. 우울증
  else if (normTitle.includes('우울') || normTitle.includes('depression') || normCat.includes('우울')) {
    res = {
      badge: '우울증 · 기분장애 클리닉',
      title: '만성 우울증 · 기분장애 · 무기력감 한방 치료',
      subHook: '마음의 감기가 아닌 뇌 신경전달물질과 기혈 불균형',
      s1: { title: '01. 전두엽 세로토닌 활성도 & HRV 자율신경 진단', desc: '뇌 변연계 과각성 및 자율신경 기능 저하 평가' },
      s2: { title: '02. 귀비탕(歸脾湯) 가감방 & 청뇌 약침 요법', desc: '심비(心脾)를 보익하고 뇌 신경 염증을 진정시켜 활력 복원' },
      s3: { title: '03. 두개천골 CST & 상부경추 추나요법', desc: '뇌 혈류 순환을 개선하여 맑은 정신과 자생력 회복' },
      isIndigo: false
    };
  }

  // 20. 일반 폴백
  else {
    let cleanTitle = title
      .replace(/^\[[^\]]+\]\s*/, '')
      .replace(/^[0-9\.\s]+/, '')
      .replace(/,\s*\[[^\]]+\]/, '')
      .replace(/\s*[-–—]\s*.*$/, '')
      .trim();
    if (cleanTitle.length > 22) cleanTitle = cleanTitle.slice(0, 22) + '...';

    res = {
      badge: categoryName ? `${categoryName} 클리닉` : '신경정신과 클리닉',
      title: `${cleanTitle} 한방 치료`,
      subHook: '검사엔 이상 없다는데 지속되는 고통, 뇌 신경계 자생력 회복',
      s1: { title: '01. 뇌 신경망 & 자율신경 정밀 진단', desc: 'HRV·뇌파·체열 검사로 무너진 신경계 밸런스 측정' },
      s2: { title: '02. 1:1 체질 맞춤 한약 & 청열 안신 약침', desc: '과열된 뇌파 진정 및 신경전달물질 자연 분비 촉진' },
      s3: { title: '03. 두개천골 CST & 상부경추 추나요법', desc: '뇌척수액 순환 개선 및 미주신경 소통 정상화' },
      isIndigo: false
    };
  }

  // 🎯 지역명(Region) 100% 일치 결합 로직
  if (detectedRegion) {
    res.badge = `[${detectedRegion}] ${res.badge}`;
    if (!res.title.includes(detectedRegion)) {
      res.title = `${detectedRegion} ${res.title}`;
    }
  }

  return res;
}

/**
 * 칼럼의 메타데이터(제목, 카테고리, 슬러그 등)로부터 1:1 완벽 일치하는 카드 썸네일 SVG 생성
 */
export function generateHealimTistoryThumbnailSvg({
  title = '',
  categoryName = '신경정신과 클리닉',
  region = '',
  subHook = '',
  step1 = null,
  step2 = null,
  step3 = null,
  colorTheme = 'teal'
}) {
  const smart = extractSmartCardData(title, categoryName, region);

  const cleanBadge = smart.badge;
  const cleanTitle = smart.title;
  const cleanSubHook = subHook || smart.subHook;
  const s1 = step1 || smart.s1;
  const s2 = step2 || smart.s2;
  const s3 = step3 || smart.s3;

  const isIndigo = smart.isIndigo || colorTheme === 'indigo';
  const bgGradStart = isIndigo ? '#0b132b' : '#072421';
  const bgGradEnd = isIndigo ? '#1c2541' : '#0d3832';
  const badgeColor = isIndigo ? '#4361ee' : '#0d9488';
  const hookBg = isIndigo ? '#eef2ff' : '#ecfdf5';
  const hookBorder = isIndigo ? '#c7d2fe' : '#a7f3d0';
  const hookTextColor = isIndigo ? '#3730a3' : '#047857';
  const iconBg = isIndigo ? '#4361ee' : '#0d9488';

  // 글자 수에 따른 뱃지 및 메인 타이틀 폰트 크기 / 뱃지 너비 적응형 자동 조절
  const badgeWidth = Math.max(480, Math.min(680, cleanBadge.length * 18 + 70));
  const titleFontSize = cleanTitle.length > 28 ? 29 : cleanTitle.length > 23 ? 32 : 36;

  return `
<svg width="1080" height="1080" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradStart}" />
      <stop offset="100%" stop-color="${bgGradEnd}" />
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- 배경 캔버스 -->
  <rect x="0" y="0" width="1080" height="1080" fill="url(#bgGrad)" />

  <!-- 상단 카테고리 뱃지 -->
  <g transform="translate(540, 72)">
    <rect x="-${Math.round(badgeWidth / 2)}" y="-24" width="${badgeWidth}" height="48" rx="24" fill="${badgeColor}" />
    <text x="0" y="8" font-size="19" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}" letter-spacing="-0.02em">
      🌿 ${escapeXml(cleanBadge)}
    </text>
  </g>

  <!-- 내부 화이트 메인 카드 -->
  <g filter="url(#cardShadow)">
    <rect x="54" y="126" width="972" height="900" rx="36" fill="#ffffff" />
  </g>

  <!-- 1. 공감 서브훅 캡슐 -->
  <g transform="translate(108, 172)">
    <rect x="0" y="0" width="864" height="46" rx="10" fill="${hookBg}" stroke="${hookBorder}" stroke-width="1.5" />
    <text x="24" y="30" font-size="18" font-weight="bold" fill="${hookTextColor}" font-family="${fontFamilies}" letter-spacing="-0.02em">
      ${escapeXml(cleanSubHook)}
    </text>
  </g>

  <!-- 2. 메인 타이틀 -->
  <g transform="translate(108, 268)">
    <text font-size="${titleFontSize}" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}" letter-spacing="-0.03em">
      ${escapeXml(cleanTitle)}
    </text>
  </g>

  <!-- 3. 서브 설명 -->
  <g transform="translate(108, 314)">
    <text font-size="20" font-weight="bold" fill="#334155" font-family="${fontFamilies}" letter-spacing="-0.02em">
      뇌 신경망의 과열을 진정시키고 자율신경 밸런스를 되찾는 1:1 맞춤 한방 치료
    </text>
  </g>

  <!-- 구분선 -->
  <line x1="108" y1="346" x2="972" y2="346" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="6,6" />

  <!-- 4. Step 01 카드 -->
  <g transform="translate(108, 372)">
    <rect x="0" y="0" width="864" height="128" rx="18" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="1.5" />
    <circle cx="64" cy="64" r="28" fill="${iconBg}" />
    <text x="64" y="73" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">1</text>
    <text x="120" y="52" font-size="20" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}" letter-spacing="-0.02em">
      ${escapeXml(s1.title)}
    </text>
    <text x="120" y="86" font-size="15.5" font-weight="normal" fill="#475569" font-family="${fontFamilies}" letter-spacing="-0.01em">
      ${escapeXml(s1.desc)}
    </text>
  </g>

  <!-- 5. Step 02 카드 -->
  <g transform="translate(108, 520)">
    <rect x="0" y="0" width="864" height="128" rx="18" fill="#fefce8" stroke="#fef08a" stroke-width="1.5" />
    <circle cx="64" cy="64" r="28" fill="#d97706" />
    <text x="64" y="73" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">2</text>
    <text x="120" y="52" font-size="20" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}" letter-spacing="-0.02em">
      ${escapeXml(s2.title)}
    </text>
    <text x="120" y="86" font-size="15.5" font-weight="normal" fill="#475569" font-family="${fontFamilies}" letter-spacing="-0.01em">
      ${escapeXml(s2.desc)}
    </text>
  </g>

  <!-- 6. Step 03 카드 -->
  <g transform="translate(108, 668)">
    <rect x="0" y="0" width="864" height="128" rx="18" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
    <circle cx="64" cy="64" r="28" fill="#2563eb" />
    <text x="64" y="73" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}">3</text>
    <text x="120" y="52" font-size="20" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}" letter-spacing="-0.02em">
      ${escapeXml(s3.title)}
    </text>
    <text x="120" y="86" font-size="15.5" font-weight="normal" fill="#475569" font-family="${fontFamilies}" letter-spacing="-0.01em">
      ${escapeXml(s3.desc)}
    </text>
  </g>

  <!-- 7. 하단 푸터 캡슐 바 -->
  <g transform="translate(108, 826)">
    <rect x="0" y="0" width="864" height="64" rx="16" fill="#0f172a" />
    <text x="432" y="39" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}" letter-spacing="-0.02em">
      해아림한의원 인천부평점 · 한방침구과 전문의 권형근 대표원장 (부평역 7번 출구 ｜ 032-719-3472)
    </text>
  </g>
</svg>
  `.trim();
}

/**
 * 주어진 칼럼 메타데이터로부터 실시간 PNG 렌더링 및 Base64 반환
 */
export function buildTistoryThumbnailPng(column, outputPath = null) {
  const regionVal = column.region?.short || column.region?.full || column.region || '';
  const svg = generateHealimTistoryThumbnailSvg({
    title: column.title || column.tistoryTitle || '',
    categoryName: column.categoryName || column.category || '',
    region: regionVal,
    subHook: column.subHook || column.hookLine || '',
    step1: column.step1,
    step2: column.step2,
    step3: column.step3
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1080 },
    font: {
      fontDirs: ['C:\\Windows\\Fonts'],
      loadSystemFonts: true,
      defaultFontFamily: 'Malgun Gothic'
    }
  });

  const pngBuffer = resvg.render().asPng();
  if (outputPath) {
    const outDir = path.dirname(outputPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(outputPath, pngBuffer);
  }

  const base64 = `data:image/png;base64,${pngBuffer.toString('base64')}`;
  return { svg, pngBuffer, base64 };
}
