import i18next from "i18next";
import LocalazyMeta from './localazy-meta';
import enJson from "./locales/en.json";
import frJson from "./locales/fr.json";
import csJson from "./locales/cs.json";

export const i18n = i18next;

export const getSupportedLangs = () => {
  return LocalazyMeta.languages.map(l => l.language)
}

export const getCurrentLanguage = () => {
  return window.localStorage.i18nextLng || 'en';
}

export const getKeyPlural = (key, count) => {    
  const currentLanguage = LocalazyMeta.languages.find(l => l.language === i18next.language);
  const pluralType = currentLanguage.pluralType(+count);
  console.log(pluralType)  
  return `${key}.${pluralType}`;
}

export const getLanguages = ()=>{
  return LocalazyMeta.languages;
}

export const initI18n = (callback) => {
  i18next.init({
    lng: 'en',
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
    callback()
  });
}