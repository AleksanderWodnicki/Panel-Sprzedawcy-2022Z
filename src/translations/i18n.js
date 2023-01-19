import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import intervalPlural from "i18next-intervalplural-postprocessor";

import { translationsPL } from "./pl/translationPL.js";
import { translationsEN } from "./en/translationEN.js";

intervalPlural.setOptions({
  intervalSeparator: ";",
  intervalRegex: /\((\S*)\).*?\[((.|\n)*)\]/,
  intervalSuffix: "_interval"
});

i18n
  .use(initReactI18next)
  .use(intervalPlural)
  .init({
    lng: "pl",
    resources: {
      en: {
        translation: translationsEN
      },
      pl: {
        translation: translationsPL
      }
    }
  });

export default i18n;
