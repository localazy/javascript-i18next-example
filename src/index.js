import i18next from "i18next";
import LocalazyMeta from './localazy-meta';
import enJson from "./locales/en.json";
import frJson from "./locales/fr.json";

const getSupportedLangs = ()=>{
  return LocalazyMeta.languages.map(l=>l.language)
}


console.log(getSupportedLangs())

i18next.init({
  lng: 'en',
  debug: true,
  supportedLngs: getSupportedLangs(),
  resources:{
    en: {
      translation: enJson,
    },
    fr: {
      translation: frJson,
    },    
  },
}, function (err, t) {
  document.querySelector("#app").innerHTML = i18next.t('fields');
});
