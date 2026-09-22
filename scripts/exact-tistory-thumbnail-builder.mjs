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
 * 질환명과 핵심 주제를 파악하여 고품격 썸네일 전용 타이틀 & 서브훅 & 3대 단계 추출
 */
export function extractSmartCardData(title = '', categoryName = '') {
  const t = (title + ' ' + categoryName).toLowerCase();

  // 1. 자율신경실조증 / 상열하한 / 식은땀
  if (t.includes('상열하한') || t.includes('식은땀') || (t.includes('자율신경') && !t.includes('어지럼') && !t.includes('이명') && !t.includes('실신'))) {
    return {
      badge: '자율신경실조증 · 상열하한 클리닉',
      title: '자율신경실조증 · 상열하한 · 식은땀 치료',
      subHook: '얼굴은 불타듯 덥고 식은땀 나는데 발끝은 얼음장처럼 차가울 때',
      s1: { title: '01. 자율신경 HRV & 상열하한 체열 정밀 진단', desc: '교감신경 과항진으로 인한 혈관 수축·이완 조절 실조 분석' },
      s2: { title: '02. 수승화강(水昇火降) 맞춤 한약 & 청열 약침', desc: '상체 열은 내리고 하초를 따뜻하게 덥혀 체온 항상성 복원' },
      s3: { title: '03. 두개천골 CST & 상부경추 추나요법', desc: '뇌간 혈류를 촉진하고 미주신경 활성으로 재발 방지' },
      isIndigo: false
    };
  }

  // 2. 목 이물감 / 매핵기 / 삼킴곤란
  if (t.includes('매핵기') || t.includes('이물감') || t.includes('목에') || t.includes('삼킴')) {
    return {
      badge: '목 이물감 · 매핵기(梅核氣) 클리닉',
      title: '목 이물감 · 매핵기 · 삼킴곤란 한방 치료',
      subHook: '목에 뭔가 걸린 듯 뱉어지지도 삼켜지지도 않는 답답한 이물감',
      s1: { title: '01. 인후부 기체(氣滯) & 자율신경 과긴장 진단', desc: '이비인후과·내시경 정상인 신경성 인후 이상감각 감별' },
      s2: { title: '02. 반하후박탕(半夏厚朴湯) 가감방 & 청열 약침', desc: '목구멍 뭉친 담음(痰飮)을 삭히고 울체된 기운 즉각 소통' },
      s3: { title: '03. 설골-후두근막 CST 이완 & 경추 정렬 교정', desc: '목 주변 신경 압박을 해소하여 시원하고 편안한 삼킴 복원' },
      isIndigo: false
    };
  }

  // 3. 이명 / 박동성 이명 / 뇌명증
  if (t.includes('이명') || t.includes('뇌명') || t.includes('삐 소리') || t.includes('머리 울림') || t.includes('박동성')) {
    return {
      badge: '이명 · 뇌명증 & 자율신경 클리닉',
      title: '박동성 이명 · 뇌명증 · 머리 울림 한방 치료',
      subHook: '귀에서 심장 박동 소리가 들리고 조용한 밤 머릿속이 윙윙 울릴 때',
      s1: { title: '01. 내이 달팽이관 허혈 & 청신경 과민 정밀 진단', desc: '경추 아탈구와 뇌 혈류 장애로 인한 이명·뇌명 감별' },
      s2: { title: '02. 청신청뇌(淸神淸腦) 탕약 & 측두근 이완 약침', desc: '청신경 염증 진정 및 뇌 신경망 흥분 완화' },
      s3: { title: '03. 턱관절-상부경추 FCST 교정 추나', desc: '귀 주변 뇌신경 압박 해소 및 뇌척수액 순환 촉진' },
      isIndigo: false
    };
  }

  // 4. 수면제 단약 / 불면증 테이퍼링
  if (t.includes('수면제') || t.includes('단약') || t.includes('스틸녹스') || t.includes('졸피뎀') || t.includes('테이퍼링')) {
    return {
      badge: '불면증 · 수면제 단약 클리닉',
      title: '수면제 의존 탈출 · 불면증 단약 치료',
      subHook: '수면제 없이는 잠 못 자고 약물 내성과 의존성이 걱정될 때',
      s1: { title: '01. 수면 뇌파(QEEG) & DMN 과각성 정밀 진단', desc: '약물 의존도 분석 및 뇌 수면 조절 스위치 상태 평가' },
      s2: { title: '02. 뇌 신경 자생력 회복 탕약 & 청심 약침', desc: '멜라토닌 분비 리듬 복원 및 단계적 안전 감량' },
      s3: { title: '03. 상부경추 교정 & 두뇌 이완 CST', desc: '뇌척수액 순환 촉진 및 자연스러운 델타파 유도' },
      isIndigo: false
    };
  }

  // 5. 불면증 / 중도각성 / 조기각성 / 얕은잠
  if (t.includes('불면') || t.includes('입면') || t.includes('중도각성') || t.includes('조기각성') || t.includes('얕은잠') || t.includes('다몽')) {
    return {
      badge: '불면증 · 수면장애 클리닉',
      title: '만성 불면증 · 얕은잠 · 조기각성 한방 치료',
      subHook: '밤마다 잠들기 힘들고 새벽에 자주 깨며 깊은 잠을 못 잘 때',
      s1: { title: '01. 수면 뇌파 QEEG & 자율신경 과각성 평가', desc: '교감신경 흥분으로 인한 뇌 각성 스위치 오작동 진단' },
      s2: { title: '02. 안신보혈(安神補血) 맞춤 한약 & 청열 약침', desc: '심장의 허열을 내리고 멜라토닌 자연 분비 촉진' },
      s3: { title: '03. 두개천골 CST & 상부경추 추나요법', desc: '뇌척수액 순환 개선으로 뇌 피로 해소 및 숙면 유도' },
      isIndigo: false
    };
  }

  // 6. 하지불안증후군
  if (t.includes('하지불안')) {
    return {
      badge: '불면증 · 하지불안 클리닉',
      title: '하지불안증후군 · 수면장애 한방 치료',
      subHook: '다리가 근질거리고 벌레 기어가는 느낌으로 밤마다 잠 못 들 때',
      s1: { title: '01. 도파민 전달계 & 하지 말초 혈류 정밀 진단', desc: '하지 경락 기혈 순환 장애 및 뇌 신경 과각성 평가' },
      s2: { title: '02. 안신보혈(安神補血) 맞춤 한약 & 청열 약침', desc: '하지 감각 신경 이상 완화 및 깊은 숙면 유도' },
      s3: { title: '03. 두개천골 CST & 척추 골반 교정 추나', desc: '하체로 이어지는 신경 전달 통로 감압 및 긴장 이완' },
      isIndigo: false
    };
  }

  // 7. 미주신경성 실신
  if (t.includes('실신') || t.includes('미주신경') || t.includes('기절')) {
    return {
      badge: '자율신경 · 실신 & 어지럼증 클리닉',
      title: '미주신경성 실신 · 뇌 혈류 저하 한방 치료',
      subHook: '출퇴근 지하철이나 버스에서 눈앞이 캄캄해지고 쓰러질 때',
      s1: { title: '01. 미주신경 과항진 & 급격한 혈압 저하 기전 분석', desc: '심장·뇌 기질적 이상 없는 자율신경성 뇌 허혈 진단' },
      s2: { title: '02. 익기승양(益氣升陽) 맞춤 한약 & SGB 약침', desc: '뇌로 가는 혈류를 지키고 자율신경 반사 정상화' },
      s3: { title: '03. 경추 정렬 교정 & 응급 텐싱 행동요법', desc: '상부경추 감압으로 뇌혈관 탄력성 및 자생력 복원' },
      isIndigo: false
    };
  }

  // 8. 어지럼증 / 기립성 어지럼
  if (t.includes('어지럼') || t.includes('어지러움') || t.includes('dizziness')) {
    return {
      badge: '자율신경 · 어지럼증 & 실신 클리닉',
      title: '만성 어지럼증 · 자율신경 실조 한방 치료',
      subHook: '머리가 멍하고 빙빙 도는 만성 어지럼증과 뇌 혈류 저하',
      s1: { title: '01. 자율신경 HRV & 전정신경 기능 정밀 진단', desc: '뇌 MRI·이비인후과 정상인 기능성 어지럼증 원인 분석' },
      s2: { title: '02. 보혈청뇌(補血淸腦) 맞춤 탕약 & 경혈 약침', desc: '과열된 교감신경을 안정시키고 뇌 혈류 순환 촉진' },
      s3: { title: '03. 경추 감압 교정 & 두개천골 이완', desc: '목 디스크 및 상부경추 비틀림으로 인한 어지럼 해소' },
      isIndigo: false
    };
  }

  // 9. 공황발작 / 과호흡
  if (t.includes('공황') || t.includes('과호흡')) {
    return {
      badge: '공황 · 불안 & 과호흡 클리닉',
      title: '공황발작 · 과호흡 응급 대처 & 한방 치료',
      subHook: '갑자기 숨이 턱 막히고 심장이 미친 듯이 뛰며 죽을 것 같을 때',
      s1: { title: '01. 편도체 과각성 & 자율신경 과흥분 정밀 진단', desc: '뇌 속 화재경보기 오작동 원인 분석 및 신체화 측정' },
      s2: { title: '02. 청뇌안신(淸腦安神) 맞춤 한약 & 전중혈 약침', desc: '가슴 답답함과 질식감 즉각 진정 및 GABA 분비 촉진' },
      s3: { title: '03. 횡격막 이완 호흡 교정 & 두뇌 훈련', desc: '과호흡 유발 방지 및 뇌 자생적 안정 회로 구축' },
      isIndigo: true
    };
  }

  // 10. 예기불안 / 범불안장애
  if (t.includes('예기불안') || t.includes('불안장애')) {
    return {
      badge: '공황 · 불안 & 강박증 클리닉',
      title: '예기불안 · 만성 불안장애 한방 치료',
      subHook: '또 발작이 올까 봐 24시간 불안하고 외출하기조차 두려울 때',
      s1: { title: '01. 뇌 변연계 편도체 과열 & 해마 트라우마 진단', desc: '24시간 가짜 비상 사이렌이 울리는 뇌 과부하 분석' },
      s2: { title: '02. 청심안신 탕약 & 성상신경절 SGB 약침', desc: '심장의 허열을 내리고 조바심과 가슴 두근거림 해소' },
      s3: { title: '03. 5-4-3-2-1 감각 그라운딩 & 신경망 이완', desc: '현재 감각으로 주의를 되돌려 편도체 알람 리셋' },
      isIndigo: true
    };
  }

  // 11. 사회공포증 / 발표불안 / 무대공포증
  if (t.includes('사회공포') || t.includes('발표') || t.includes('목소리 떨림') || t.includes('무대')) {
    return {
      badge: '사회공포 · 발표불안 클리닉',
      title: '사회공포증 · 발표불안 · 시선공포 한방 치료',
      subHook: '사람들 앞에만 서면 목소리가 떨리고 심장이 쿵쾅거릴 때',
      s1: { title: '01. 대인 긴장도 & 자율신경 반응성 정밀 진단', desc: '교감신경 폭주로 인한 손 떨림·목소리 떨림 원인 분석' },
      s2: { title: '02. 심담허겁(心膽虛怯) 체질 한약 & 청열 약침', desc: '심장과 쓸개의 담력을 키워 무대 위 침착성 유지' },
      s3: { title: '03. 인후부 근막 이완 & 호흡 안정 훈련', desc: '발성 긴장을 풀고 당당한 발표 자생력 완성' },
      isIndigo: true
    };
  }

  // 12. 강박증 (OCD)
  if (t.includes('강박') || t.includes('ocd') || t.includes('확인')) {
    return {
      badge: '공황 · 불안 & 강박증 클리닉',
      title: '강박증 · 확인사고 · 침투사고 한방 치료',
      subHook: '문 잠갔는지 가스 껐는지 수십 번 확인을 멈출 수 없을 때',
      s1: { title: '01. 기저핵-CSTC 신경회로 과열 정밀 진단', desc: '반복적인 불안 침투사고와 강박행동의 뇌 연결망 분석' },
      s2: { title: '02. 청뇌안신(淸腦安神) 한약 & 시호청간 처방', desc: '뇌 속 억제성 신경전달물질 균형 복원' },
      s3: { title: '03. 인지 재구조화 & 뇌 이완 침구 치료', desc: '불안 내성을 기르고 강박 행동의 고리를 차단' },
      isIndigo: true
    };
  }

  // 13. 턱관절 장애 / 이갈이 / 이악물기
  if (t.includes('턱관절') || t.includes('이갈이') || t.includes('이악물기') || t.includes('개구')) {
    return {
      badge: '턱관절 & 신체화 클리닉',
      title: '턱관절 통증 · 수면 중 이갈이 한방 치료',
      subHook: '입 벌릴 때 딱 소리와 통증, 수면 중 이갈이와 만성 두통',
      s1: { title: '01. 턱관절 디스크 변위 & 교근 연축 정밀 진단', desc: '두개-하악-경추의 구조적 비틀림 및 교합 불균형 평가' },
      s2: { title: '02. 교근·측두근 심부 전침 & 소염약침 요법', desc: '굳어버린 저작근을 즉각 이완하고 관절강 염증 진정' },
      s3: { title: '03. 턱관절 균형장치 FCST & 경추 교정 추나', desc: '하악두 위치를 바로잡아 두통과 신경 압박 재발 차단' },
      isIndigo: false
    };
  }

  // 14. 만성 두통 / 편두통 / 후두신경통
  if (t.includes('두통') || t.includes('편두통') || t.includes('후두신경') || t.includes('머리 아')) {
    return {
      badge: '만성두통 & 신경통 클리닉',
      title: '만성 편두통 · 경추성 두통 · 후두신경통 한방 치료',
      subHook: '진통제를 달고 살아도 낫지 않는 지끈거리는 두통과 눈 통증',
      s1: { title: '01. 경추 신경근 압박 & 두피 혈관 박동 정밀 진단', desc: '목 디스크 및 일자목으로 인한 경추성 두통 감별' },
      s2: { title: '02. 후두하근 정밀 약침 & 청뇌(淸腦) 맞춤 한약', desc: '후두신경 포착을 풀고 뇌 혈류 순환 장애 개선' },
      s3: { title: '03. 상부경추-흉추 신연 추나요법', desc: '굳어버린 목·어깨 근막을 이완하여 두통 재발 차단' },
      isIndigo: false
    };
  }

  // 15. 과민성대장증후군 / 담적병 / 소화불량
  if (t.includes('과민성') || t.includes('담적') || t.includes('소화') || t.includes('복통') || t.includes('역류성')) {
    return {
      badge: '담적병 & 신체화 클리닉',
      title: '담적병 · 과민성대장증후군 · 역류성식도염 치료',
      subHook: '내시경엔 정상인데 명치가 꽉 막히고 시험 전 배가 아플 때',
      s1: { title: '01. 뇌-장 축(Brain-Gut Axis) & 복부 담적 진단', desc: '스트레스로 인한 위장관 자율신경 조절 장애 분석' },
      s2: { title: '02. 소적건비(消積健脾) 한약 & 복부 온열 뜸', desc: '굳어진 위장 외벽의 독소(담적)를 삭히고 위장 운동 복원' },
      s3: { title: '03. 자율신경 조절 침구 & 장내 미생물 환경 개선', desc: '복부 팽만감과 복통을 가라앉히고 편안한 소화 회복' },
      isIndigo: false
    };
  }

  // 16. 성인 ADHD / 브레인포그
  if (t.includes('성인 adhd') || t.includes('성인adhd') || t.includes('미루기') || t.includes('실행기능') || t.includes('브레인포그')) {
    return {
      badge: '성인 ADHD & 두뇌클리닉',
      title: '성인 ADHD · 만성 미루기 · 브레인포그 한방 치료',
      subHook: '단순한 게으름이 아닙니다! 전두엽 도파민 결핍과 실행기능 저하',
      s1: { title: '01. 전두엽 주의집중력 & 정량화 뇌파(QEEG) 진단', desc: '쎄타파/베타파 비율 및 작업기억력 상태 정밀 측정' },
      s2: { title: '02. 총명청뇌(聰明淸腦) 맞춤 한약 & 두피 약침', desc: '도파민·노르에피네프린 대사 활성화 및 뇌 피로 해소' },
      s3: { title: '03. 뉴로피드백 두뇌 훈련 & 실행기능 코칭', desc: '업무 집중력을 높이고 잦은 실수를 줄이는 두뇌 자생력' },
      isIndigo: false
    };
  }

  // 17. 소아 틱장애 / 눈깜빡임 / 음성틱
  if (t.includes('틱') || t.includes('뚜렛') || t.includes('눈 깜빡') || t.includes('눈깜빡') || t.includes('음성틱')) {
    return {
      badge: '소아청소년 틱장애 클리닉',
      title: '소아청소년 틱장애 · 눈깜빡임 · 뚜렛 한방 치료',
      subHook: '아이의 눈 깜빡임과 킁킁거리는 틱 증상, 뇌 신경 자생력 회복',
      s1: { title: '01. 기저핵 미성숙도 & 감각수용 과민성 진단', desc: '의지로 참을 수 없는 틱 증상의 신경학적 기전 분석' },
      s2: { title: '02. 평간식풍(平肝熄風) 순한 맞춤 한약', desc: '과흥분된 두뇌 피질을 진정시키고 기저핵 성장 촉진' },
      s3: { title: '03. 무통 침치료 & 두개천골 이완 요법', desc: '아이에게 부담 없는 치료로 재발 없는 성장 완성' },
      isIndigo: false
    };
  }

  // 18. 화병 (Hwabyeong)
  if (t.includes('화병') || t.includes('울화') || t.includes('가슴 답답')) {
    return {
      badge: '화병 & 스트레스 클리닉',
      title: '화병(火病) · 가슴 답답함 · 상열감 한방 치료',
      subHook: '가슴에 불덩이가 얹힌 듯 답답하고 억울함과 분노가 치밀 때',
      s1: { title: '01. 기체(氣滯) 울결 & 자율신경 상열하한 진단', desc: '억압된 분노와 스트레스로 인한 흉격 울화 측정' },
      s2: { title: '02. 시호가용골모려탕 & 분심기음 가감방', desc: '가슴속 뭉친 화(火)를 흩뜨리고 심장 허열 즉각 해소' },
      s3: { title: '03. 전중혈 사혈 및 청열 안신 침구', desc: '과열된 심장 경락을 식혀 시원한 호흡 복원' },
      isIndigo: false
    };
  }

  // 19. 우울증 / 번아웃 / 만성 무기력
  if (t.includes('우울') || t.includes('번아웃') || t.includes('무기력')) {
    return {
      badge: '우울증 · 번아웃 클리닉',
      title: '우울증 · 번아웃 · 만성 무기력 한방 치료',
      subHook: '의지의 문제가 아닌 뇌 신경전달물질 방전과 에너지 고갈',
      s1: { title: '01. 뇌 신경전달물질 & 전두엽 활성도 정밀 진단', desc: '세로토닌·도파민 고갈 및 HPA축 과열 상태 평가' },
      s2: { title: '02. 보익심비(補益心脾) 활뇌 한약 & 청열 약침', desc: '심비 기혈을 채우고 뇌 신경 염증을 진정시켜 활력 복원' },
      s3: { title: '03. 두개천골 뇌 혈류 추나 & 미주신경 자극', desc: '뇌척수액 순환을 도와 뇌 피로물질을 배출하고 숙면 유도' },
      isIndigo: false
    };
  }

  // 20. 일반 폴백 (클리닉 카테고리 기반)
  let cleanTitle = title
    .replace(/^\[[^\]]+\]\s*/, '')
    .replace(/^[0-9\.\s]+/, '')
    .replace(/,\s*\[[^\]]+\]/, '')
    .replace(/\s*[-–—]\s*.*$/, '')
    .trim();
  if (cleanTitle.length > 22) cleanTitle = cleanTitle.slice(0, 22) + '...';

  return {
    badge: categoryName ? `${categoryName} 클리닉` : '신경정신과 클리닉',
    title: `${cleanTitle} 한방 치료`,
    subHook: '검사엔 이상 없다는데 지속되는 고통, 뇌 신경계 자생력 회복',
    s1: { title: '01. 뇌 신경망 & 자율신경 정밀 진단', desc: 'HRV·뇌파·체열 검사로 무너진 신경계 밸런스 측정' },
    s2: { title: '02. 1:1 체질 맞춤 한약 & 청열 안신 약침', desc: '과열된 뇌파 진정 및 신경전달물질 자연 분비 촉진' },
    s3: { title: '03. 두개천골 CST & 상부경추 추나요법', desc: '뇌척수액 순환 개선 및 미주신경 소통 정상화' },
    isIndigo: false
  };
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
  const smart = extractSmartCardData(title, categoryName);

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
    <rect x="-240" y="-24" width="480" height="48" rx="24" fill="${badgeColor}" />
    <text x="0" y="8" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="${fontFamilies}" letter-spacing="-0.02em">
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
    <text x="24" y="30" font-size="18.5" font-weight="bold" fill="${hookTextColor}" font-family="${fontFamilies}" letter-spacing="-0.02em">
      ${escapeXml(cleanSubHook)}
    </text>
  </g>

  <!-- 2. 메인 타이틀 -->
  <g transform="translate(108, 268)">
    <text font-size="36" font-weight="bold" fill="#0f172a" font-family="${fontFamilies}" letter-spacing="-0.03em">
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
  const svg = generateHealimTistoryThumbnailSvg({
    title: column.title || column.tistoryTitle || '',
    categoryName: column.categoryName || column.category || '',
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
