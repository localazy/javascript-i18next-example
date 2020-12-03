import i18next from "i18next";
import enJson from "./locales/en.json";

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: enJson,
    },
  }
}, function(err, t) {    
  document.querySelector("#app").innerHTML = i18next.t('fields');
});
