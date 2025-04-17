import uzFlag from "../assets/image/flags/uz.png";
import ruFlag from "../assets/image/flags/ru.png";
import enFlag from "../assets/image/flags/en.png";
import trFlag from "../assets/image/flags/tr.png";

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
      h1:"Iltimos, test turini tanlang",
      btn1:"Bosqichma-bosqich",
      btn2:"Butun Qur'on bo'yicha",
      btn3:"Juz bo'yicha",
      btn4:"Sura bo'yicha",
      h3: "Qur'oni Karim oyatlarini zavq bilan tinglang va toping!",
      p1: "1. Bosqichma-bosqich test turi faqat Fotiha surasi va 30 - Juzda kelgan oyatlardan olingan. Bu test sinovlarida siz oyatni tinglab qaysi suraga tegishli ekanligini topishingiz kerak bo'ladi.",
      p2: "2. Butun Qur'on bo'yicha test savollarida Qur'oni Karimdagi istalgan oyat qiroati eshittiriladi, va sizdan qaysi suraning nechinchi oyati ekanligini javoblardan tanlashingiz so'raladi.",
      p3: "3. Juz bo'yicha test turida esa siz ma'lum bir Juzni tanlashingiz mumkin. Savollar faqat ana o'sha tanlangan juzdan tasodifiy (random) holatda beriladi. Sizdan tasodifiy holatda eshittirilgan oyatlar qaysi suraning nechinchi oyatlari ekanligini javoblardan topishingiz so'raladi.",
      p4: "4. Sura bo'yicha test turida esa esittirilgan oyat qiroatini tanlangan Suraning qaysi oyati ekanligini topishingiz kerak bo'ladi.",
      closeBtn:"Tushunarli, rahmat",
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
      h1:"Пожалуйста, выберите тип теста",
      btn1:"Шаг за шагом",
      btn2:"По всему Корану",
      btn3:"По Джузу",
      btn4:"По суре",
      h3: "Слушайте и находите аяты Священного Корана с удовольствием!",
      p1: "1. Пошаговый тип теста берется только из суры Аль-Фатиха и аятов из главы 30. В этих тестах вам предстоит прослушать аят и узнать, к какой суре он относится.",
      p2: "2. В контрольных вопросах по всему Корану будет слышно чтение любого аята из Священного Корана, и вам будет предложено выбрать из ответов, какой аят из какой суры.",
      p3: "3. В типе теста по джузам можно выбрать конкретный джуз. Вопросы будут заданы только случайным образом из выбранного джуха. Вам будет предложено выбрать из ответов, какие аяты относятся к каким сурам, прослушанными случайным образом",
      p4: "4. В типе теста «Сура» вам нужно будет найти, какой аят из выбранной суры. (нима дейиляткани чунарсиз)",
      closeBtn:"Понятно, спасибо",
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
    morePart:{
      btn1:"Language",
      btn2:"Share the app with friends",
      btn3:"Rate the app",
      btn4:"Contact the developers",
    },    
    testTypePart: {
      h1:"Please select a test type",
      btn1:"Step by step",
      btn2:"By Holy Qur'an",
      btn3:"By juz",
      btn4:"By Sura",
      h3: "Listen and find the verses of the Holy Quran with pleasure!",
      p1: "1. The step-by-step type of test is taken only from Surah Al-Fatiha and verses from Juz 30. In these tests, you will have to listen to the verse and find out which surah it belongs to.",
      p2: "2. In the test questions on the entire Qur'an, the recitation of any verse from the Holy Qur'an will be heard, and you will be asked to choose from the answers which verse of the Surah is which.",
      p3: "3. In the type of test by Juz, you can choose a specific Juz. The questions will be asked only at random from that chosen part. You will be asked to find out from the answers which verses of the surah are the verses that were heard randomly.",
      p4: "4. In the Sura test type, you will have to find which verse of the selected Sura the recitation of the recited verse is.",
      closeBtn:"Got it, Thanks",
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
    morePart:{
      btn1:"Dil",
      btn2:"Uygulamayı arkadaşlarınızla paylaşın",
      btn3:"Uygulamayı oyla",
      btn4:"Geliştiricilerle iletişim kurun",
    },
    testTypePart: {
      h1:"Lütfen bir test türü seçin",
      btn1:"Adım adım",
      btn2:"Kur'an'ın tamamına göre",
      btn3:"Cüz tarafından",
      btn4:"sureye göre",
      h3: "Dinle ve Kur'an-ı Kerim'in ayetlerini zevkle bul!",
      p1: "1. Adım adım test türü sadece Fatiha Suresi ve 30. Sureden ayetlerden alınmıştır. Bu testlerde ayeti dinleyip hangi sureye ait olduğunu öğrenmeniz gerekecektir.",
      p2: "2. Kur'an-ı Kerim'in tamamı ile ilgili test sorularında, Kur'an-ı Kerim'den herhangi bir ayetin tilaveti duyulacak ve surenin hangi ayetinin hangisi olduğunu cevaplar arasından seçmeniz istenecektir.",
      p3: "3. Cüz testi türünde belirli bir Cüz seçebilirsiniz. Sorular sadece seçilen kısımdan rastgele sorulacaktır. Cevaplardan surenin hangi ayetlerinin rastgele işitilen ayetler olduğunu öğrenmeniz istenecektir.",
      p4: "4. Sure test türünde okunan ayetin okunuşunun seçilen surenin hangi ayeti olduğunu bulmanız gerekecektir.",
      closeBtn:"Anladım teşekkürler",
    },
  },
];

export default languages;
