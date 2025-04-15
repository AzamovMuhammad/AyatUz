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
    header:{
      btn1:"Bosh sahifa",
      btn2:"Saqlanganlar",
      btn3:"Qur'on haiqda",
      btn4:"Ko'proq",
    },
    notFound:{
      p:"Bu xato!",
      h3:"Ushbu serverda so'ralgan url topilmadi. Biz bilgan hamma narsa shu."
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
    header:{
      btn1:"Домашняя",
      btn2:"Сохранено",
      btn3:"О Коране",
      btn4:"Более",
    },
    notFound:{
      p:"Это ошибка!",
      h3:"Запрошенный URL не найден на этом сервере. Это все, что мы знаем."
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
    header:{
      btn1:"Home",
      btn2:"Saved",
      btn3:"the Qur'an",
      btn4:"More",
    },
    notFound:{
      p:"The error!",
      h3:"The requested url was not found on this server. That's all we know."
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
    header:{
      btn1:"Anasayfa",
      btn2:"Kaydedildi",
      btn3:"Kuran hakkında",
      btn4:"Daha",
    },
    notFound:{
      p:"Bu bir hatadır!",
      h3:"İstenen URL bu sunucuda bulunamadı. Bizim bildiğimiz bu kadar."
    },
  },
];

export default languages;
