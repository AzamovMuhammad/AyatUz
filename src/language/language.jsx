import uzFlag from "/images/flags/uz.webp";
import ruFlag from "/images/flags/ru.webp";
import enFlag from "/images/flags/en.webp";
import trFlag from "/images/flags/tr.webp";
import kaaFlag from "/images/flags/kaa.webp";

const languages = [
  {
    code: "uz",
    name: "Uz",
    flag: uzFlag,
    langPart: {
      h2: "Tilni tanlash",
      button: "Davom etish",
    },
    homePart: {
      home_title: "Assalomu alaykum aziz dindoshim!",
      home_text:
        "Mazkur testda siz Qur’oni Karim oyatlarini tinglab, ularni qaysi suraga tegishli ekanligini topishingiz kerak.",
      home_btn: "Testni topshirish",
    },
    header: {
      btn1: "Bosh sahifa",
      btn2: "Saqlanganlar",
      btn3: "Qur'on haiqda",
      btn4: "Ko'proq",
    },
    notFound: {
      p: "Bu xato!",
      h3: "Ushbu serverda so'ralgan url topilmadi. Biz bilgan hamma narsa shu.",
    },
    morePart: {
      btn1: "Til",
      btn2: "Ilovani do‘stlarga ulashing",
      btn3: "Ilovani baholang",
      btn4: "Dasturchilar bilan bog‘lanish",
    },
    testTypePart: {
      h1: "Iltimos, test turini tanlang",
      btn1: "Bosqichma-bosqich",
      btn2: "Butun Qur'on bo'yicha",
      btn3: "Juz bo'yicha",
      btn4: "Sura bo'yicha",
      h3: "Qur'oni Karim oyatlarini zavq bilan tinglang va toping!",
      p1: "1. Bosqichma-bosqich test turi faqat Fotiha surasi va 30 - Juzda kelgan oyatlardan olingan. Bu test sinovlarida siz oyatni tinglab qaysi suraga tegishli ekanligini topishingiz kerak bo'ladi.",
      p2: "2. Butun Qur'on bo'yicha test savollarida Qur'oni Karimdagi istalgan oyat qiroati eshittiriladi, va sizdan qaysi suraning nechinchi oyati ekanligini javoblardan tanlashingiz so'raladi.",
      p3: "3. Juz bo'yicha test turida esa siz ma'lum bir Juzni tanlashingiz mumkin. Savollar faqat ana o'sha tanlangan juzdan tasodifiy (random) holatda beriladi. Sizdan tasodifiy holatda eshittirilgan oyatlar qaysi suraning nechinchi oyatlari ekanligini javoblardan topishingiz so'raladi.",
      p4: "4. Sura bo'yicha test turida esa esittirilgan oyat qiroatini tanlangan Suraning qaysi oyati ekanligini topishingiz kerak bo'ladi.",
      closeBtn: "Tushunarli, rahmat",
    },
    stagePart: {
      intro_text: "Bismillahir rohmanir rohiym, boshladik!",
      span1: "bosqich",
      span2: "ta savol",
    },
    entryTestPart: {
      p: " A'uuzu billahi minash shaytonir rojiym. Bismillahir Rohmanir Rohiym!",
    },
    questionPart: {
      modalH1:
        "Agar chiqsangiz, testni qaytadan boshlashingizga to’g’ri keladi!",
      btnRozi: "Roziman",
      btnBekor: "Bekor qilish",
      currentH2: "savol",
      lengthH2: "ta savol",
      btnFinish: "Tugatish",
      btnNext: "Keyingi test",
    },
    finalResult: {
      isPassedT: "Barakalloh!",
      isPassedF: "Afsus!",
      pass: "Siz ushbu bosqichdan o‘tdingiz!",
      noPass: "Siz ushbu bosqichdan o‘tolmadingiz!",
      fullScore: "Siz barcha savolga to'g'ri javob berdingiz",
      anyScore: "ta savolga to‘g‘ri javob berdingiz",
      back: "Bosh sahifaga qaytish",
      repass: "Qayta topshirish",
    },
  },
  {
    code: "kaa",
    name: "Qr",
    flag: kaaFlag,
    langPart: {
      h2: "Tildi tańlaw ",
      button: "Dawam etiw",
    },
    homePart: {
      home_title: "Assalawma aleykum áziz dindoshim!",
      home_text:
        "Usı testte siz Quranı Saqıy ayatların tıńlab, olardı qaysı suraga tiyisli ekenligin tabıwıńız kerek.",
      home_btn: "Testti tapsırıw ",
    },
    header: {
      btn1: "Bas bet",
      btn2: "Saqlanganlar",
      btn3: "Quran haiqda",
      btn4: "Kóbirek",
    },
    notFound: {
      p: "Bul qáte!",
      h3: "Bul serverde so'ralgan url tabılmadı. Biz bilgen hámme zat sol.",
    },
    morePart: {
      btn1: "Til",
      btn2: "Qosımshanı doslarǵa jalǵawıń ",
      btn3: "Qosımshanı bahalań ",
      btn4: "Programmistler menen baylanısıw ",
    },
    testTypePart: {
      h1: "Iltimas, test túrin saylań ",
      btn1: "Basqıshpa-basqısh ",
      btn2: "Pútkil Quran boyınsha ",
      btn3: "Juz boyınsha ",
      btn4: "Súre boyınsha ",
      h3: "Quranı Saqıy ayatların zawıq menen tıńlań hám tabıń!",
      p1: "1. Basqıshpa-basqısh test túri tek Pátiya súresi hám 30 - Juzda kelgen ayatlardan alınǵan. Bul test sınaqlarında siz oyatni tıńlab qaysı suraga tiyisli ekenligin tabıwıńız kerek boladı.",
      p2: "2. Pútkil Quran boyınsha test sorawlarında Quranı Saqıydaǵı qálegen ayat qiroati esittiriledi, hám sizdan qaysı suraning nechinchi oyati ekenligin juwaplardan tańlawıńız soraladı.",
      p3: "3. Juz boyınsha test túrinde bolsa siz málim bir Juzni tańlawıńız múmkin. Sorawlar tek áne sol saylanǵan juzdan tosınarlı (random) jaǵdayda beriledi. Sizdan tosınarlı jaǵdayda esittirilgan ayatlar qaysı suraning nechinchi ayatları ekenligin juwaplardan tabıwıńız soraladı.",
      p4: "4. Súre boyınsha test túrinde bolsa esittirilgan ayat qiroatini saylanǵan Suraning qaysı oyati ekenligin tabıwıńız kerek boladı.",
      closeBtn: "Túsinikli, raxmet",
    },
    stagePart: {
      intro_text: "Bismillahir rohmanir rohiym, basladık!",
      span1: "basqısh ",
      span2: "ta soraw ",
    },
    entryTestPart: {
      p: " A'uuzu billahi minash shaytanir rojiym. Bismillahir Rohmanir Rohiym!",
    },
    questionPart: {
      modalH1:
        "Eger shıqsańız, testti qaytaldan baslawıngizga tuwrı keledi!",
      btnRozi: "Roziman",
      btnBekor: "Bıykarlaw ",
      currentH2: "soraw ",
      lengthH2: "ta soraw ",
      btnFinish: "Tamamlaw ",
      btnNext: "Keyingi test",
    },
    finalResult: {
      isPassedT: "Bereketlloh!",
      isPassedF: "Pushayman !",
      pass: "Siz bul basqıshdan óttińiz!",
      noPass: "Siz bul basqıshdan o'tolmadingiz!",
      fullScore: "Siz barlıq sorawǵa tuwrı juwap berdińiz",
      anyScore: "ta sorawǵa tuwrı juwap berdińiz",
      back: "Bas betke qaytıw ",
      repass: "Qayta tapsırıw ",
    },
  },
  {
    code: "ru",
    name: "Py",
    flag: ruFlag,
    langPart: {
      h2: "Выберите язык",
      button: "Продолжать",
    },
    homePart: {
      home_title: "Ассаламу алейкум, дорогой",
      home_text:
        "В этом тесте вам предстоит прослушать аяты Священного Корана и найти, к какой суре они относятся.",
      home_btn: "Начать тест",
    },
    header: {
      btn1: "Домашняя",
      btn2: "Сохранено",
      btn3: "О Коране",
      btn4: "Более",
    },
    notFound: {
      p: "Это ошибка!",
      h3: "Запрошенный URL не найден на этом сервере. Это все, что мы знаем.",
    },
    morePart: {
      btn1: "Язык",
      btn2: "Поделитесь приложением с друзьями",
      btn3: "Оцените приложение",
      btn4: "Связаться с разработчиками",
    },
    testTypePart: {
      h1: "Пожалуйста, выберите тип теста",
      btn1: "Шаг за шагом",
      btn2: "По всему Корану",
      btn3: "По Джузу",
      btn4: "По суре",
      h3: "Слушайте и находите аяты Священного Корана с удовольствием!",
      p1: "1. Пошаговый тип теста берется только из суры Аль-Фатиха и аятов из главы 30. В этих тестах вам предстоит прослушать аят и узнать, к какой суре он относится.",
      p2: "2. В контрольных вопросах по всему Корану будет слышно чтение любого аята из Священного Корана, и вам будет предложено выбрать из ответов, какой аят из какой суры.",
      p3: "3. В типе теста по джузам можно выбрать конкретный джуз. Вопросы будут заданы только случайным образом из выбранного джуха. Вам будет предложено выбрать из ответов, какие аяты относятся к каким сурам, прослушанными случайным образом",
      p4: "4. В типе теста «Сура» вам нужно будет найти, какой аят из выбранной суры. (нима дейиляткани чунарсиз)",
      closeBtn: "Понятно, спасибо",
    },
    stagePart: {
      intro_text: "Во имя Аллаха, Милостивого, Милосердного, мы начали!",
      span1: "этап",
      span2: "вопросы",
    },
    entryTestPart: {
      p: " А‘узу биллях и мин аш-шайтанир-раджим. Бисмиллях ир-рахман ир-рахим.",
    },
    questionPart: {
      modalH1:
        "Если вы прекратите проходить тест, вам придется начать его заново!",
      btnRozi: "Я согласен.",
      btnBekor: "Отмена",
      currentH2: "вопрос",
      lengthH2: "вопросы",
      btnFinish: "Заканчивать",
      btnNext: "Следующий тест",
    },
    finalResult: {
      isPassedT: "Бог благословил!",
      isPassedF: "Извини!",
      pass: "Вы прошли этот этап!",
      noPass: "Вы не прошли этот этап!",
      fullScore: "Вы ответили правильно на все вопросы.",
      anyScore: "Вы ответили на эти вопросы правильно.",
      back: "возвращаться",
      repass: "Повторно отправить",
    },
  },
  {
    code: "en",
    name: "En",
    flag: enFlag,
    langPart: {
      h2: "Choose language",
      button: "Continue",
    },
    homePart: {
      home_title: "Assalamu Alaikum, my friend",
      home_text:
        "In this test, you have to listen to the verses of the Holy Qur'an and find which surah they belong to.",
      home_btn: "Start the test",
    },
    header: {
      btn1: "Home",
      btn2: "Saved",
      btn3: "the Qur'an",
      btn4: "More",
    },
    notFound: {
      p: "The error!",
      h3: "The requested url was not found on this server. That's all we know.",
    },
    morePart: {
      btn1: "Language",
      btn2: "Share the app with friends",
      btn3: "Rate the app",
      btn4: "Contact the developers",
    },
    testTypePart: {
      h1: "Please select a test type",
      btn1: "Step by step",
      btn2: "By Holy Qur'an",
      btn3: "By juz",
      btn4: "By Sura",
      h3: "Listen and find the verses of the Holy Quran with pleasure!",
      p1: "1. The step-by-step type of test is taken only from Surah Al-Fatiha and verses from Juz 30. In these tests, you will have to listen to the verse and find out which surah it belongs to.",
      p2: "2. In the test questions on the entire Qur'an, the recitation of any verse from the Holy Qur'an will be heard, and you will be asked to choose from the answers which verse of the Surah is which.",
      p3: "3. In the type of test by Juz, you can choose a specific Juz. The questions will be asked only at random from that chosen part. You will be asked to find out from the answers which verses of the surah are the verses that were heard randomly.",
      p4: "4. In the Sura test type, you will have to find which verse of the selected Sura the recitation of the recited verse is.",
      closeBtn: "Got it, Thanks",
    },
    stagePart: {
      intro_text:
        "In the name of Allah, the Most Gracious, the Most Merciful, we have begun!",
      span1: "phase",
      span2: "questions",
    },
    entryTestPart: {
      p: "A'udhu billahi min ash-shaytan ir-rajim. Bismillahir-Rahmanir-Rahim.",
    },
    questionPart: {
      modalH1: "If you quit the test, you will have to start it over!",
      btnRozi: "Agree",
      btnBekor: "Cancel",
      currentH2: "question",
      lengthH2: "questions",
      btnFinish: "Finish",
      btnNext: "Next test",
    },
    finalResult: {
      isPassedT: "God bless!",
      isPassedF: "Sorry!",
      pass: "You've passed this stage!",
      noPass: "You failed this stage!",
      fullScore: "You answered all the questions correctly.",
      anyScore: "You answered this questions correctly.",
      back: "Return to Stage page",
      repass: "Resubmit",
    },
  },
  {
    code: "tr",
    name: "Tr",
    flag: trFlag,
    langPart: {
      h2: "Dil seçin",
      button: "Devam etmek",
    },
    homePart: {
      home_title: "Selamun Aleyküm aziz mümin kardeşim",
      home_text:
        "Bu testte Kur'an-ı Kerim'in ayetlerini dinlemeli ve hangi sureye ait olduklarını bulmalısınız.",
      home_btn: "Testi başlat",
    },
    header: {
      btn1: "Anasayfa",
      btn2: "Kaydedildi",
      btn3: "Kuran hakkında",
      btn4: "Daha",
    },
    notFound: {
      p: "Bu bir hatadır!",
      h3: "İstenen URL bu sunucuda bulunamadı. Bizim bildiğimiz bu kadar.",
    },
    morePart: {
      btn1: "Dil",
      btn2: "Uygulamayı arkadaşlarınızla paylaşın",
      btn3: "Uygulamayı oyla",
      btn4: "Geliştiricilerle iletişim kurun",
    },
    testTypePart: {
      h1: "Lütfen bir test türü seçin",
      btn1: "Adım adım",
      btn2: "Kur'an'ın tamamına göre",
      btn3: "Cüz tarafından",
      btn4: "sureye göre",
      h3: "Dinle ve Kur'an-ı Kerim'in ayetlerini zevkle bul!",
      p1: "1. Adım adım test türü sadece Fatiha Suresi ve 30. Sureden ayetlerden alınmıştır. Bu testlerde ayeti dinleyip hangi sureye ait olduğunu öğrenmeniz gerekecektir.",
      p2: "2. Kur'an-ı Kerim'in tamamı ile ilgili test sorularında, Kur'an-ı Kerim'den herhangi bir ayetin tilaveti duyulacak ve surenin hangi ayetinin hangisi olduğunu cevaplar arasından seçmeniz istenecektir.",
      p3: "3. Cüz testi türünde belirli bir Cüz seçebilirsiniz. Sorular sadece seçilen kısımdan rastgele sorulacaktır. Cevaplardan surenin hangi ayetlerinin rastgele işitilen ayetler olduğunu öğrenmeniz istenecektir.",
      p4: "4. Sure test türünde okunan ayetin okunuşunun seçilen surenin hangi ayeti olduğunu bulmanız gerekecektir.",
      closeBtn: "Anladım teşekkürler",
    },
    stagePart: {
      intro_text: "Rahman ve Rahim olan Allah’ın adıyla, başladık!",
      span1: "sahne",
      span2: "sorular",
    },
    entryTestPart: {
      p: "Euzü billahi mine'ş-şeytani'r-racim. Bismillahirrahmanirrahim.",
    },
    questionPart: {
      modalH1: "Sınavdan ayrılırsanız sınava tekrar başlatmanız gerekecektir!",
      btnRozi: "Kabul ediyorum.",
      btnBekor: "İptal etmek",
      currentH2: "soru",
      lengthH2: "sorular",
      btnFinish: "Sona ermek",
      btnNext: "Sonraki test",
    },
    finalResult: {
      isPassedT: "Tanrı seni korusun!",
      isPassedF: "Üzgünüm!",
      pass: "Bu aşamayı geçtiniz!",
      noPass: "Bu aşamayı geçemedin!",
      fullScore: "Soruların hepsini doğru cevapladın.",
      anyScore: "soruyu doğru cevapladın.",
      back: "Ana sayfaya dön",
      repass: "Tekrar gönder",
    },
  },
];

export default languages;
