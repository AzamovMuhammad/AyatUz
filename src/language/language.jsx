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
      home_title:"Assalomu alaykum aziz dindoshim!",
      home_text: "Mazkur testda siz Qur’oni Karim oyatlarini tinglab, ularni qaysi suraga tegishli ekanligini topishingiz kerak.",
      home_btn: "Testni topshirish",
    }
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
      home_title:"Ассаламу алейкум, дорогой",
      home_text: "В этом тесте вам предстоит прослушать аяты Священного Корана и найти, к какой суре они относятся.",
      home_btn: "Начать тест",
    }
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
      home_title:"Assalamu Alaikum, my friend",
      home_text: "In this test, you have to listen to the verses of the Holy Qur'an and find which surah they belong to.",
      home_btn: "Start the test",
    }
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
      home_title:"Selamun Aleyküm aziz mümin kardeşim",
      home_text: "Bu testte Kur'an-ı Kerim'in ayetlerini dinlemeli ve hangi sureye ait olduklarını bulmalısınız.",
      home_btn: "Testi başlat",
    }
  },
];

export default languages;
