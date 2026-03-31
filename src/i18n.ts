import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import hi from "./locales/hi.json";
import ar from "./locales/ar.json";

//i18next -Language engine of your app
//👉 .use(LanguageDetector)
//👉 Adds a plugin that detects user language automatically
//
//👉 .use(initReactI18next)
//👉 Connects i18n with React
// without this useTranslation() ❌ won’t work
//React ❌ won’t re-render on language change
//
//👉 debug: true - 👉 Shows logs in console
//👉 fallbackLng: "en" -👉 Default language if something fails
//interpolation.escapeValue: false - Safe text rendering

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      ar: { translation: ar },
    },
  });
export default i18n;
