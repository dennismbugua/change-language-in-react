import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "",
  resources: {
    en: {
      translation: {
        Hi: "Hi",
        Actions: "Actions",
        Welcome: "Welcome to our multilingual application",
        Description: "This is a demonstration of language switching capabilities",
        SelectLanguage: "Please select your preferred language from the dropdown above"
      }
    },
    de: {
      translation: {
        Hi: "Hallo",
        Actions: "Aktionen",
        Welcome: "Willkommen in unserer mehrsprachigen Anwendung",
        Description: "Dies ist eine Demonstration der Sprachwechselfunktionen",
        SelectLanguage: "Bitte wählen Sie Ihre bevorzugte Sprache aus dem Dropdown-Menü oben aus"
      }
    },
    es: {
      translation: {
        Hi: "Hola",
        Actions: "Acciones",
        Welcome: "Bienvenido a nuestra aplicación multilingüe",
        Description: "Esta es una demostración de las capacidades de cambio de idioma",
        SelectLanguage: "Por favor seleccione su idioma preferido del menú desplegable de arriba"
      }
    },
    it: {
      translation: {
        Hi: "Ciao",
        Actions: "Azioni",
        Welcome: "Benvenuto nella nostra applicazione multilingue",
        Description: "Questa è una dimostrazione delle capacità di cambio lingua",
        SelectLanguage: "Si prega di selezionare la lingua preferita dal menu a discesa sopra"
      }
    },
    zh: {
      translation: {
        Hi: "你好",
        Actions: "操作",
        Welcome: "欢迎使用我们的多语言应用程序",
        Description: "这是语言切换功能的演示",
        SelectLanguage: "请从上面的下拉菜单中选择您的首选语言"
      }
    }
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;
