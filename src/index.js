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
let count = 0;

const updateTranslatedContent = () => {
  document.querySelector("#content").innerHTML = getTranslatedContent();
}

const getTranslatedContent = () => {
  return `${count}  ${i18next.t(p('calendar', count))}<br>
          ${count}  ${i18next.t(p('field', count))}<br>
          ${count}  ${i18next.t(p('event', count))}<br>
          ${count}  ${i18next.t(p('title', count))}<br>
          ${count}  ${i18next.t(p('color', count))}`;
}

const createLanguageSelector = () => {
  let template = '<select id="selector">';
  LocalazyMeta.languages.forEach(l=>{
    template+=`<option value="${l.language}">${l.localizedName}</option>`
  })
  template +='</select>';
  return template; 
}

const createPageContent = () => {
  document.querySelector("#app").innerHTML = `  
  ${createLanguageSelector()} 
  <input id="count" type="number" placeholder="count" value="${count}" min="0"/>
  <div id="content">  
    ${getTranslatedContent()}
  </div>`;

  document.querySelector("#count").addEventListener("input", (e) => {
    if (e.target.value) {
      count = e.target.value;
      updateTranslatedContent();
    }
  })

  document.querySelector("#selector").addEventListener("change",(e)=>{
    i18next.changeLanguage(e.target.value);
    updateTranslatedContent();
  })
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
  createPageContent()
});
