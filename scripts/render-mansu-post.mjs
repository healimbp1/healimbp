import fs from 'fs';
import path from 'path';

const base64 = fs.readFileSync('static/blog-images/tistory-thumbnails/post-mansu-panic.png').toString('base64');

const html = `<div style="font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif; line-height: 1.85; color: #333333; max-width: 780px; margin: 0 auto; padding: 10px 0; font-style: normal;">
  
  <!-- 대표 썸네일 이미지 (1:1 완벽 맞춤형 카드 썸네일: 인천 만수동 공황장애) -->
  <div style="text-align: center; margin: 0 0 24px 0; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
    <img src="data:image/png;base64,${base64}" alt="인천 만수동 한의원 공황장애 공황발작 과호흡 치료 - 해아림한의원 인천부평점" style="width: 100%; max-width: 780px; height: auto; display: block; border-radius: 12px; margin: 0 auto; object-fit: cover;" />
  </div>

  <!-- 상단 안내 헤더 박스 -->
  <div style="background-color: #F4F8F6; border-left: 5px solid #2F5D50; padding: 20px 24px; border-radius: 10px; margin-bottom: 32px; box-shadow: 0 1px 4px rgba(47,93,80,0.05); font-style: normal;">
    <p style="margin: 0; font-size: 16px; color: #2F5D50; font-weight: 800; letter-spacing: -0.01em; font-style: normal;">
      🌿 해아림한의원 인천부평점 권형근 대표원장의 1:1 맞춤 건강 칼럼
    </p>
    <p style="margin: 8px 0 0 0; font-size: 13.5px; color: #556B62; line-height: 1.6; font-style: normal;">
      자율신경실조증 · 공황장애 · 불면증 · 우울증 · 만성피로 · 틱장애 · ADHD 한방 신경정신과 클리닉
    </p>
  </div>

  <!-- 환자 호소문 인용 박스 (정자체 font-style: normal) -->
  <div style="background-color: #F8FAF9; border-left: 4px solid #2F5D50; border-radius: 0 12px 12px 0; padding: 18px 24px; margin: 24px 0 28px 0; color: #2C3E35; font-size: 15px; line-height: 1.85; font-style: normal; box-shadow: 0 1px 4px rgba(0,0,0,0.03);">
    &ldquo;인천 만수동 인근 병원에서 각종 검사를 받아도 '신경성', '스트레스'라는 말뿐 원인을 찾지 못했습니다.&rdquo;<br><br>&ldquo;지하철이나 터널, 엘리베이터에 타면 숨이 턱 막히고 심장이 미친 듯이 뛰어 죽을 것 같은데 약물에만 의존하지 않고 근본적으로 치료받고 싶습니다.&rdquo;
  </div>

  <!-- 칼럼 본문 -->
  <div style="font-size: 16px; color: #374151; word-break: keep-all; font-style: normal;">
  <p style="font-size: 16px; line-height: 1.85; color: #374151; margin-bottom: 18px; word-break: keep-all; font-style: normal;">안녕하세요. <strong style="color: #1E4638; font-weight: 700;">해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)</strong>입니다.</p>
  <p style="font-size: 16px; line-height: 1.85; color: #374151; margin-bottom: 18px; word-break: keep-all; font-style: normal;">지하철이나 만원 버스, 엘리베이터, 미용실처럼 꽉 막힌 공간에 들어서면 갑자기 숨이 턱 막히고 죽을 것 같은 공포가 엄습하나요?<br>이것은 단순한 심리적 나약함이나 일시적 스트레스가 아니라, 우리 몸의 위험 경보 장치인 뇌 변연계(편도체)와 자율신경계가 과열되어 비상 사이렌을 오작동시키는 신경학적 신호입니다.</p>

  <h3 style="font-size: 19px; font-weight: 800; color: #1E4638; border-bottom: 2px solid #E2EAE5; padding-bottom: 10px; margin: 38px 0 18px 0; letter-spacing: -0.02em; font-style: normal;">📌 이 칼럼에서 다루는 6대 핵심 목차</h3>
  <ul style="list-style-type: none; padding-left: 0; margin: 18px 0; font-style: normal;">
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      01. 밀폐공간 공포증 및 광장공포증의 신경학적 발생 기전과 원인
    </li>
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      02. 자율신경 과흥분 3단계와 일상 속 신체 신호
    </li>
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      03. 한의학적 진단: 기혈 순환과 오장육부 불균형
    </li>
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      04. 증상별 3대 맞춤 변증 체질 유형
    </li>
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      05. 편도체 과열을 진정시키는 자율신경 이완 & 호흡 신경 치료
    </li>
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      06. 진료실 자주 묻는 질문 (FAQ 3문 3답)
    </li>
  </ul>

  <h3 style="font-size: 19px; font-weight: 800; color: #1E4638; border-bottom: 2px solid #E2EAE5; padding-bottom: 10px; margin: 38px 0 18px 0; letter-spacing: -0.02em; font-style: normal;">🌿 01. 밀폐공간 공포증 및 광장공포증의 신경학적 발생 기전과 원인</h3>
  <p style="font-size: 16px; line-height: 1.85; color: #374151; margin-bottom: 18px; word-break: keep-all; font-style: normal;">우리의 뇌와 신체는 24시간 동안 교감신경(액셀)과 부교감신경(브레이크)의 상호 작용을 통해 심박, 호흡, 체온, 수면을 조절합니다.<br>하지만 과도한 긴장과 피로가 지속되면 교감신경이 과항진되면서 뇌 변연계(편도체)가 위험 알람을 오작동시킵니다.<br>이로 인해 자율신경 실조와 뇌 신경전달물질의 불균형이 발생하여 만성적인 신체화 증상으로 이어집니다.</p>

  <h3 style="font-size: 19px; font-weight: 800; color: #1E4638; border-bottom: 2px solid #E2EAE5; padding-bottom: 10px; margin: 38px 0 18px 0; letter-spacing: -0.02em; font-style: normal;">🔍 02. 자율신경 과흥분 3단계와 일상 속 신체 신호</h3>
  <p style="font-size: 16px; line-height: 1.85; color: #374151; margin-bottom: 18px; word-break: keep-all; font-style: normal;">신경계의 피로는 다음과 같은 3단계를 거쳐 진행됩니다:<br>• <strong style="color: #1E4638; font-weight: 700;">1단계 (경고 반응기)</strong>: 급성 스트레스로 심장 박동이 빨라지고 식은땀, 긴장 반응이 순간적으로 발생함.<br>• <strong style="color: #1E4638; font-weight: 700;">2단계 (저항 유지기)</strong>: 긴장 상태가 지속되며 목과 어깨가 굳고, 소화불량 및 수면 질 저하가 반복됨.<br>• <strong style="color: #1E4638; font-weight: 700;">3단계 (소진/탈진기)</strong>: 자생력이 고갈되며 만성 피로, 브레인포그, 무기력증이 고착화됨.</p>

  <h3 style="font-size: 19px; font-weight: 800; color: #1E4638; border-bottom: 2px solid #E2EAE5; padding-bottom: 10px; margin: 38px 0 18px 0; letter-spacing: -0.02em; font-style: normal;">📚 03. 한의학적 진단: 기혈 순환과 오장육부 불균형</h3>
  <p style="font-size: 16px; line-height: 1.85; color: #374151; margin-bottom: 18px; word-break: keep-all; font-style: normal;">한의학에서는 억압된 스트레스가 뭉쳐 기운이 통하지 않는 <strong style="color: #1E4638; font-weight: 700;">간기울결(肝氣鬱結)</strong>과, 심장의 진액이 말라 뇌로 열이 치솟는 <strong style="color: #1E4638; font-weight: 700;">심신불교(心腎不交)</strong>를 주요 병리로 진단합니다.<br>체질에 맞지 않는 억지 각성제나 단순 대증 치료 대신, 뇌와 오장육부의 기혈 균형을 바로잡을 때 자생력이 회복됩니다.</p>

  <h3 style="font-size: 19px; font-weight: 800; color: #1E4638; border-bottom: 2px solid #E2EAE5; padding-bottom: 10px; margin: 38px 0 18px 0; letter-spacing: -0.02em; font-style: normal;">🩺 04. 증상별 3대 맞춤 변증 체질 유형</h3>
  <ul style="list-style-type: none; padding-left: 0; margin: 18px 0; font-style: normal;">
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      <strong style="color: #1E4638; font-weight: 700;">간열상충(肝熱上衝)형</strong>: 스트레스와 긴장으로 상체와 머리로 열이 치솟는 유형 (시호청간탕, 황련해독탕 처방)
    </li>
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      <strong style="color: #1E4638; font-weight: 700;">심담허겁(心膽虛怯)형</strong>: 사소한 소리나 자극에도 심장이 덜컥 내려앉고 불안해하는 유형 (가미온담탕, 안신보심환 처방)
    </li>
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      <strong style="color: #1E4638; font-weight: 700;">기혈양허(氣血兩虛)형</strong>: 만성 피로로 에너지가 바닥나 멍하고 기운이 없는 유형 (가미귀비탕, 보중익기탕 처방)
    </li>
  </ul>

  <h3 style="font-size: 19px; font-weight: 800; color: #1E4638; border-bottom: 2px solid #E2EAE5; padding-bottom: 10px; margin: 38px 0 18px 0; letter-spacing: -0.02em; font-style: normal;">💡 05. 편도체 과열을 진정시키는 자율신경 이완 & 호흡 신경 치료</h3>
  <ul style="list-style-type: none; padding-left: 0; margin: 18px 0; font-style: normal;">
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      <strong style="color: #1E4638; font-weight: 700;">1:1 체질 맞춤 탕약 & 정혈 약침</strong>: 과열된 뇌 신경계를 진정시키고 기혈을 보강하여 신경계 자생력을 복원합니다.
    </li>
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      <strong style="color: #1E4638; font-weight: 700;">NeuronFlex 뉴로피드백 & IM 감각통합</strong>: 실시간 뇌파 조절 훈련과 1/1,000초 시청각 피드백으로 두뇌 신경망의 타이밍과 집중력을 강화합니다.
    </li>
    <li style="position: relative; padding-left: 22px; margin-bottom: 10px; font-size: 15.5px; line-height: 1.8; color: #374151; font-style: normal;">
      <span style="position: absolute; left: 6px; top: 10px; width: 6px; height: 6px; background-color: #2F5D50; border-radius: 50%; display: inline-block;"></span>
      <strong style="color: #1E4638; font-weight: 700;">두개천골 추나요법 & FCST</strong>: 상부 경추와 턱관절을 교정하여 뇌척수액 순환과 척추 주변 자율신경절의 긴장을 해소합니다.
    </li>
  </ul>

  <h3 style="font-size: 19px; font-weight: 800; color: #1E4638; border-bottom: 2px solid #E2EAE5; padding-bottom: 10px; margin: 38px 0 18px 0; letter-spacing: -0.02em; font-style: normal;">❓ 06. 진료실 자주 묻는 질문 (FAQ)</h3>
  <div style="margin: 24px 0;">
    <div style="background-color: #F9FAF8; border: 1px solid #E2EAE5; border-radius: 12px; padding: 18px 22px; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); font-style: normal;">
      <div style="font-size: 15.5px; font-weight: 800; color: #1E4638; display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; font-style: normal;">
        <span style="background-color: #2F5D50; color: #ffffff; font-size: 12px; font-weight: bold; padding: 3px 8px; border-radius: 6px; display: inline-block; flex-shrink: 0; margin-right: 6px;">Q1</span>
        <span>지하철, 터널, 엘리베이터, 미용실처럼 꽉 막힌 공간에만 가면 심장이 터질 것 같은 광장공포증은 왜 생기나요?</span>
      </div>
      <p style="font-size: 14.5px; line-height: 1.85; color: #4E6159; margin: 0; padding-left: 36px; word-break: keep-all; font-style: normal;">
        광장공포증은 '내가 즉각 탈출할 수 없거나 도움을 받기 어려운 장소'에 갇혔을 때 뇌가 극도의 생존 위협을 느끼는 뇌 기능적 공간 지각 이상입니다. 뇌 자율신경계의 공포 역치를 높이고 두개천골계 이완을 통해 공간 감각의 안정감을 회복해야 합니다.
      </p>
    </div>
    <div style="background-color: #F9FAF8; border: 1px solid #E2EAE5; border-radius: 12px; padding: 18px 22px; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); font-style: normal;">
      <div style="font-size: 15.5px; font-weight: 800; color: #1E4638; display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; font-style: normal;">
        <span style="background-color: #2F5D50; color: #ffffff; font-size: 12px; font-weight: bold; padding: 3px 8px; border-radius: 6px; display: inline-block; flex-shrink: 0; margin-right: 6px;">Q2</span>
        <span>지하철을 탈 때 중간에 공황이 오면 즉시 내려야 하나요?</span>
      </div>
      <p style="font-size: 14.5px; line-height: 1.85; color: #4E6159; margin: 0; padding-left: 36px; word-break: keep-all; font-style: normal;">
        불안이 정점에 달했을 때 즉시 도망치듯 내리면 뇌는 '도망쳤기 때문에 살았다'고 착각하여 공포 회로가 강화됩니다. 다음 역까지 복식호흡을 하며 2 ~ 3분만 버텨내어 심박수가 스스로 가라앉는 과정을 경험하는 것이 공포 회로를 끊는 핵심입니다.
      </p>
    </div>
    <div style="background-color: #F9FAF8; border: 1px solid #E2EAE5; border-radius: 12px; padding: 18px 22px; margin-bottom: 14px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); font-style: normal;">
      <div style="font-size: 15.5px; font-weight: 800; color: #1E4638; display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; font-style: normal;">
        <span style="background-color: #2F5D50; color: #ffffff; font-size: 12px; font-weight: bold; padding: 3px 8px; border-radius: 6px; display: inline-block; flex-shrink: 0; margin-right: 6px;">Q3</span>
        <span>가족이나 지인이 함께 타면 괜찮은데 혼자서는 못 타는 이유가 무엇인가요?</span>
      </div>
      <p style="font-size: 14.5px; line-height: 1.85; color: #4E6159; margin: 0; padding-left: 36px; word-break: keep-all; font-style: normal;">
        동행자를 뇌의 '안전 신호(Safety Cue)'로 인식하기 때문입니다. 동행자에게 의존하는 패턴을 서서히 줄이기 위해, 처음에는 옆 칸에 타기, 다음에는 한 정거장 혼자 가기 등으로 자립 훈련을 진행해야 합니다.
      </p>
    </div>
  </div>

  <!-- 원장 조언 박스 -->
  <div style="background: linear-gradient(135deg, #F0F6F3 0%, #E8F1EC 100%); border-left: 5px solid #2F5D50; border-radius: 4px 14px 14px 4px; padding: 22px 26px; margin: 36px 0; color: #2C3E35; box-shadow: 0 2px 6px rgba(47,93,80,0.06); font-style: normal;">
    <p style="margin: 0 0 8px 0; font-size: 15.5px; font-weight: 800; color: #1E4638; font-style: normal;">
      👨‍⚕️ <strong>권형근 대표원장의 진료실 조언</strong>
    </p>
    <p style="margin: 0; font-size: 15px; line-height: 1.85; color: #33443C; word-break: keep-all; font-style: normal;">
      &ldquo;공황과 불안은 결코 당신이 나약해서가 아니라, 지친 뇌와 신경계가 보내는 절박한 쉼의 신호입니다. 과열된 편도체를 식히고 자율신경 밸런스를 바로잡으면 다시 평온한 일상으로 온전히 돌아갈 수 있습니다.&rdquo;
    </p>
  </div>

  </div>

  <hr style="border: 0; border-top: 1px solid #E5E7EB; margin: 44px 0 32px 0;" />

  <!-- 원장 소개 및 한의원 안내 카드 -->
  <div style="background-color: #FAFAF9; border: 1px solid #E7E5E4; border-radius: 14px; padding: 26px; margin-top: 32px; box-shadow: 0 2px 6px rgba(0,0,0,0.03); font-style: normal;">
    <h4 style="margin: 0 0 12px 0; color: #1E4638; font-size: 17.5px; font-weight: 800; font-style: normal;">
      🏥 해아림한의원 인천부평점 진료 안내
    </h4>
    <ul style="margin: 0 0 18px 0; padding-left: 20px; font-size: 14.5px; color: #4B5563; line-height: 1.85; font-style: normal;">
      <li style="margin-bottom: 6px;"><strong>대표원장:</strong> 권형근 (한방침구과 전문의 직접 진료)</li>
      <li style="margin-bottom: 6px;"><strong>오시는 길:</strong> 인천 부평구 경원대로 1412, 2층 (부평역 7번 출구 도보 5분)</li>
      <li style="margin-bottom: 6px;"><strong>상담 및 예약:</strong> 032-719-3472</li>
      <li style="margin-bottom: 6px;"><strong>진료 시간:</strong> 월·수·금 10:00 ~ 20:00 (야간진료) / 화 10:00 ~ 19:00 / 토 09:00 ~ 15:00 / 공휴일 09:00 ~ 13:00</li>
    </ul>

    <!-- 원클릭 바로가기 버튼 그룹 -->
    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px;">
      <a href="https://booking.naver.com/booking/13/bizes/934695" target="_blank" rel="noopener" style="display: inline-block; background-color: #03C75A; color: #ffffff; text-decoration: none; padding: 11px 18px; border-radius: 8px; font-size: 13.5px; font-weight: bold; box-shadow: 0 2px 4px rgba(3,199,90,0.2); font-style: normal;">
        📅 네이버 간편 진료예약
      </a>
      <a href="https://pf.kakao.com/_Tcxcxoxj" target="_blank" rel="noopener" style="display: inline-block; background-color: #FEE500; color: #191919; text-decoration: none; padding: 11px 18px; border-radius: 8px; font-size: 13.5px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.08); font-style: normal;">
        💬 카카오톡 1:1 비밀상담
      </a>
      <a href="https://healimbp.com" target="_blank" rel="noopener" style="display: inline-block; background-color: #2F5D50; color: #ffffff; text-decoration: none; padding: 11px 18px; border-radius: 8px; font-size: 13.5px; font-weight: bold; box-shadow: 0 2px 4px rgba(47,93,80,0.2); font-style: normal;">
        🌐 공식 홈페이지 바로가기
      </a>
    </div>
  </div>

  <!-- 출처 표기 (백링크 SEO) -->
  <p style="text-align: right; font-size: 12px; color: #9CA3AF; margin-top: 16px; font-style: normal;">
    출처: <a href="https://healimbp.com" target="_blank" rel="noopener" style="color: #6B7280; text-decoration: underline;">해아림한의원 인천부평점 공식 홈페이지</a>
  </p>

</div>`;

fs.writeFileSync('tistory_test_post.html', html, 'utf8');
console.log('Successfully saved to tistory_test_post.html');
