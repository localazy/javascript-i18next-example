import i18next from "i18next";
import LocalazyMeta from './localazy-meta';
import enJson from "./locales/en.json";
import frJson from "./locales/fr.json";
import csJson from "./locales/cs.json";

const getSupportedLangs = () => {
  return LocalazyMeta.languages.map(l => l.language)
}

const getKeyPlural = (key, count) => {
  const currentLanguage = LocalazyMeta.languages.find(l => l.language === i18next.language);
  const pluralType = currentLanguage.pluralType(count);
  return `${key}.${pluralType}`;
}

const p = getKeyPlural;

const updateHtmlContent = () => {
  document.querySelector("#app").innerHTML = i18next.t(p('calendar', 2));
}

i18next.init({
  lng: 'cs',
  fallbackLng: 'en',
  debug: true,
  supportedLngs: getSupportedLangs(),
  resources: {
    en: {
      translation: enJson,
    },
    fr: {
      translation: frJson,
    },
    cs: {
      translation: csJson,
    },
  },
}, function (err, t) {
  updateHtmlContent()
});
