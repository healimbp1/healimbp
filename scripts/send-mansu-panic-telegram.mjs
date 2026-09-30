import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const botToken = process.env.TELEGRAM_BOT_TOKEN || '8825145197:AAFNSDxXpqCBq1c0BW93kDbrtDC7Ncr2Bxk';
const chatId = process.env.TELEGRAM_CHAT_ID || '2026055528';

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendMansuPanicTelegram() {
  const title = '인천 만수동 한의원 공황장애, 갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법';
  const category = '공황 · 불안 & 과호흡 클리닉';
  const date = '2026-09-30';
  const tags = ['인천만수동한의원', '만수동공황장애', '남동구공황장애', '공황발작대처법', '과호흡응급처치', '광장공포증', '밀폐공간공포증', '부평공황장애한의원'];

  const thumbPath = path.join(rootDir, 'static', 'blog-images', 'tistory-thumbnails', 'post-mansu-panic.png');
  const htmlPath = path.join(rootDir, 'tistory_test_post.html');

  if (!fs.existsSync(thumbPath)) {
    throw new Error(`Thumbnail not found: ${thumbPath}`);
  }
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`HTML file not found: ${htmlPath}`);
  }

  const thumbBuffer = fs.readFileSync(thumbPath);
  const fullTistoryHtml = fs.readFileSync(htmlPath, 'utf8');

  // 본문 텍스트 추출 (순수 원고용)
  const cleanBody = `■ [환자 호소문]
"인천 만수동 인근 병원에서 각종 검사를 받아도 '신경성', '스트레스'라는 말뿐 원인을 찾지 못했습니다."
"지하철이나 터널, 엘리베이터에 타면 숨이 턱 막히고 심장이 미친 듯이 뛰어 죽을 것 같은데 약물에만 의존하지 않고 근본적으로 치료받고 싶습니다."

안녕하세요. 해아림한의원 인천부평점 대표원장 권형근(한방침구과 전문의)입니다.

지하철이나 만원 버스, 엘리베이터, 미용실처럼 꽉 막힌 공간에 들어서면 갑자기 숨이 턱 막히고 죽을 것 같은 공포가 엄습하나요?
이것은 단순한 심리적 나약함이나 일시적 스트레스가 아니라, 우리 몸의 위험 경보 장치인 뇌 변연계(편도체)와 자율신경계가 과열되어 비상 사이렌을 오작동시키는 신경학적 신호입니다.

■ 01. 밀폐공간 공포증 및 광장공포증의 신경학적 발생 기전과 원인
우리의 뇌와 신체는 24시간 동안 교감신경(액셀)과 부교감신경(브레이크)의 상호 작용을 통해 심박, 호흡, 체온, 수면을 조절합니다.
하지만 과도한 긴장과 피로가 지속되면 교감신경이 과항진되면서 뇌 변연계(편도체)가 위험 알람을 오작동시킵니다.
이로 인해 자율신경 실조와 뇌 신경전달물질의 불균형이 발생하여 만성적인 신체화 증상으로 이어집니다.

■ 02. 자율신경 과흥분 3단계와 일상 속 신체 신호
신경계의 피로는 다음과 같은 3단계를 거쳐 진행됩니다:
• 1단계 (경고 반응기): 급성 스트레스로 심장 박동이 빨라지고 식은땀, 긴장 반응이 순간적으로 발생함.
• 2단계 (저항 유지기): 긴장 상태가 지속되며 목과 어깨가 굳고, 소화불량 및 수면 질 저하가 반복됨.
• 3단계 (소진/탈진기): 자생력이 고갈되며 만성 피로, 브레인포그, 무기력증이 고착화됨.

■ 03. 한의학적 진단: 기혈 순환과 오장육부 불균형
한의학에서는 억압된 스트레스가 뭉쳐 기운이 통하지 않는 간기울결(肝氣鬱結)과, 심장의 진액이 말라 뇌로 열이 치솟는 심신불교(心腎不交)를 주요 병리로 진단합니다.
체질에 맞지 않는 억지 각성제나 단순 대증 치료 대신, 뇌와 오장육부의 기혈 균형을 바로잡을 때 자생력이 회복됩니다.

■ 04. 증상별 3대 맞춤 변증 체질 유형
• 간열상충(肝熱上衝)형: 스트레스와 긴장으로 상체와 머리로 열이 치솟는 유형 (시호청간탕, 황련해독탕 처방)
• 심담허겁(心膽虛怯)형: 사소한 소리나 자극에도 심장이 덜컥 내려앉고 불안해하는 유형 (가미온담탕, 안신보심환 처방)
• 기혈양허(氣血兩虛)형: 만성 피로로 에너지가 바닥나 멍하고 기운이 없는 유형 (가미귀비탕, 보중익기탕 처방)

■ 05. 편도체 과열을 진정시키는 자율신경 이완 & 호흡 신경 치료
• 1:1 체질 맞춤 탕약 & 정혈 약침: 과열된 뇌 신경계를 진정시키고 기혈을 보강하여 신경계 자생력을 복원합니다.
• NeuronFlex 뉴로피드백 & IM 감각통합: 실시간 뇌파 조절 훈련과 1/1,000초 시청각 피드백으로 두뇌 신경망의 타이밍과 집중력을 강화합니다.
• 두개천골 추나요법 & FCST: 상부 경추와 턱관절을 교정하여 뇌척수액 순환과 척추 주변 자율신경절의 긴장을 해소합니다.

■ 06. 진료실 자주 묻는 질문 (FAQ)
Q1. 지하철, 터널, 엘리베이터, 미용실처럼 꽉 막힌 공간에만 가면 심장이 터질 것 같은 광장공포증은 왜 생기나요?
답변: 광장공포증은 '내가 즉각 탈출할 수 없거나 도움을 받기 어려운 장소'에 갇혔을 때 뇌가 극도의 생존 위협을 느끼는 뇌 기능적 공간 지각 이상입니다. 뇌 자율신경계의 공포 역치를 높이고 두개천골계 이완을 통해 공간 감각의 안정감을 회복해야 합니다.

Q2. 지하철을 탈 때 중간에 공황이 오면 즉시 내려야 하나요?
답변: 불안이 정점에 달했을 때 즉시 도망치듯 내리면 뇌는 '도망쳤기 때문에 살았다'고 착각하여 공포 회로가 강화됩니다. 다음 역까지 복식호흡을 하며 2 ~ 3분만 버텨내어 심박수가 스스로 가라앉는 과정을 경험하는 것이 공포 회로를 끊는 핵심입니다.

Q3. 가족이나 지인이 함께 타면 괜찮은데 혼자서는 못 타는 이유가 무엇인가요?
답변: 동행자를 뇌의 '안전 신호(Safety Cue)'로 인식하기 때문입니다. 동행자에게 의존하는 패턴을 서서히 줄이기 위해, 처음에는 옆 칸에 타기, 다음에는 한 정거장 혼자 가기 등으로 자립 훈련을 진행해야 합니다.

■ [권형근 대표원장의 진료실 조언]
"공황과 불안은 결코 당신이 나약해서가 아니라, 지친 뇌와 신경계가 보내는 절박한 쉼의 신호입니다. 과열된 편도체를 식히고 자율신경 밸런스를 바로잡으면 다시 평온한 일상으로 온전히 돌아갈 수 있습니다."`;

  let titleP1 = title;
  let titleP2 = '갑자기 숨이 턱 막히고 죽을 것 같은 공포, 공황발작과 과호흡 응급 대처법';
  let titleP3 = '공황발작 · 과호흡 응급 대처 ｜ 1:1 맞춤 한방 치료 가이드';

  console.log(`\n======================================================`);
  console.log(`📤 [인천 만수동 공황장애 텔레그램 4단계 패키지 발송]`);
  console.log(`📝 Title: ${title}`);
  console.log(`🖼️ Thumbnail: ${thumbPath}`);
  console.log(`======================================================`);

  // STEP 1: 고화질 대표 썸네일 사진 전송 (1080x1080)
  const photoCaption = `🖼️ <b>[100% 매칭 지역+질환 썸네일]</b>\n\n` +
    `📝 <b>칼럼 제목:</b> <code>${escapeHtml(title)}</code>\n` +
    `📅 <b>발행일:</b> ${escapeHtml(date)}\n` +
    `📂 <b>진료 분야:</b> ${escapeHtml(category)}\n` +
    `🏷️ <b>추천 태그:</b> <code>${escapeHtml(tags.map(t => `#${t}`).join(' '))}</code>`;

  const photoFormData = new FormData();
  photoFormData.append('chat_id', chatId);
  photoFormData.append('caption', photoCaption);
  photoFormData.append('parse_mode', 'HTML');
  photoFormData.append('photo', new Blob([thumbBuffer], { type: 'image/png' }), 'thumbnail_mansu_panic.png');

  const photoRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
    method: 'POST',
    body: photoFormData
  });
  const photoJson = await photoRes.json();
  if (!photoJson.ok) throw new Error(photoJson.description || JSON.stringify(photoJson));
  console.log(`   ✅ 1단계: 100% 매칭 썸네일 사진 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // STEP 2: 원클릭 복사용 대본 (마크다운 볼드 0%)
  const copyMsg = `📋 <b>[티스토리/블로그 원클릭 복사용 대본]</b>
<i>※ 본문 및 강조 문구에 마크다운 볼드 기호(**)가 일체 없어 에디터에 바로 붙여넣으실 수 있습니다.</i>

🎯 <b>[블로그 포스팅용 추천 제목 옵션]</b>
1️⃣ <b>표준 지역명형:</b>
<code>${escapeHtml(titleP1)}</code>

2️⃣ <b>질환 기전 집중형:</b>
<code>${escapeHtml(titleP2)}</code>

3️⃣ <b>1:1 맞춤 솔루션형:</b>
<code>${escapeHtml(titleP3)}</code>

────────────────────────────────────
${escapeHtml(cleanBody)}
────────────────────────────────────

📍 <b>[부평점 진료 안내 링크 세트]</b>
• 공식 홈페이지: https://healimbp.com
• 네이버 간편예약: https://booking.naver.com/booking/13/bizes/934695
• 카카오톡 상담: https://pf.kakao.com/_Tcxcxoxj
• 대표 전화: 032-719-3472 (부평역 7번 출구)`;

  const MAX_LEN = 3800;
  if (copyMsg.length <= MAX_LEN) {
    const textRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: copyMsg, parse_mode: 'HTML', disable_web_page_preview: true })
    });
    const textJson = await textRes.json();
    if (!textJson.ok) throw new Error(textJson.description || JSON.stringify(textJson));
  } else {
    const part1 = copyMsg.slice(0, MAX_LEN);
    const part2 = copyMsg.slice(MAX_LEN);
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: part1, parse_mode: 'HTML', disable_web_page_preview: true })
    });
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: part2, parse_mode: 'HTML', disable_web_page_preview: true })
    });
  }
  console.log(`   ✅ 2단계: 깔끔한 복사용 대본 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // STEP 3: 완결형 티스토리 HTML 파일 발송
  const htmlFormData = new FormData();
  htmlFormData.append('chat_id', chatId);
  htmlFormData.append('caption', `📝 <b>[완결형 티스토리 서식 HTML]</b>\n${escapeHtml(title)}\n\n티스토리 기본 모드 또는 HTML 모드에 복사해 넣으시면 고급 서식이 완벽하게 적용됩니다.`);
  htmlFormData.append('parse_mode', 'HTML');
  htmlFormData.append('document', new Blob([fullTistoryHtml], { type: 'text/html;charset=utf-8' }), 'tistory_mansu_panic.html');

  const htmlRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: htmlFormData
  });
  const htmlJson = await htmlRes.json();
  if (!htmlJson.ok) throw new Error(htmlJson.description || JSON.stringify(htmlJson));
  console.log(`   ✅ 3단계: 완결형 HTML 파일 전송 완료!`);

  await new Promise(r => setTimeout(r, 600));

  // STEP 4: 전체 원고 TXT 파일 발송
  const txtFormData = new FormData();
  txtFormData.append('chat_id', chatId);
  txtFormData.append('caption', `📄 <b>[전체 원고 텍스트 TXT]</b>\n${escapeHtml(title)} 순수 원고 파일입니다.`);
  txtFormData.append('parse_mode', 'HTML');
  txtFormData.append('document', new Blob([cleanBody], { type: 'text/plain;charset=utf-8' }), 'mansu_panic_post.txt');

  const txtRes = await fetch(`https://api.telegram.org/bot${botToken}/sendDocument`, {
    method: 'POST',
    body: txtFormData
  });
  const txtJson = await txtRes.json();
  if (!txtJson.ok) throw new Error(txtJson.description || JSON.stringify(txtJson));
  console.log(`   ✅ 4단계: 원고 파일(TXT) 전송 완료!`);

  console.log(`\n🎉 [발송 성공] 만수동 공황장애 4단계 패키지가 텔레그램으로 전송되었습니다!`);
}

sendMansuPanicTelegram();
