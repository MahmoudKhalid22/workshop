import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

function useLanguage() {
  if (!i18n.isInitialized) {
    i18n
      .use(detector)
      .use(backend)
      .use(initReactI18next)
      .init({
        fallbackLng: "en",
        detection: {
          order: [
            "cookie",
            "localStorage",
            "sessionStorage",
            "navigator",
            "htmlTag",
            "path",
            "subdomain",
          ],
          caches: ["cookie"],
        },
        interpolation: {
          escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        backend: {
          loadPath: "/locale/{{lng}}/translation.json",
        },
      });
  }
}

export default useLanguage;
