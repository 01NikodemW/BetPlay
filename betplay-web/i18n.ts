import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {},
  },
  pl: {
    translation: {
      Email: "Email",
      Password: "Hasło",
      Live: "Na żywo",
      "My club": "Mój klub",
      Bets: "Zakłady",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

i18n.language = "pl";

export default i18n;
