import i18next from "i18next";
import { initI18n, getLanguages, getCurrentLanguage, getKeyPlural as p } from "./i18n";

let count = 0;

const createLanguageSelector = () => {
  let template = '<select id="selector">';
  getLanguages().forEach(l => {
    template += `<option ${l.language === getCurrentLanguage()?'selected':''} value="${l.language}">${l.localizedName}</option>`
  })
  template += '</select>';
  return template;
}

const getTranslatedContent = () => {
  return `${count}  ${i18next.t(p('calendar', count))}<br>
          ${count}  ${i18next.t(p('field', count))}<br>
          ${count}  ${i18next.t(p('event', count))}<br>
          ${count}  ${i18next.t(p('title', count))}<br>
          ${count}  ${i18next.t(p('color', count))}`;
}

const updateTranslatedContent = () => {
  document.querySelector("#content").innerHTML = getTranslatedContent();
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

  document.querySelector("#selector").addEventListener("change", (e) => {
    i18next.changeLanguage(e.target.value);
    updateTranslatedContent();
  })
}

initI18n(createPageContent);
