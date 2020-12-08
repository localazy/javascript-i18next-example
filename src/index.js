import { i18n, initI18n, getLanguages, getCurrentLanguage } from "./i18n";

const createLanguageSelector = () => {
  let template = '<select id="selector">';
  getLanguages().forEach(l => {
    template += `
    <option ${l.language === getCurrentLanguage() ? "selected" : ""} value="${l.language}">
      ${l.localizedName}
    </option>`
  })
  template += '</select>';
  return template;
}

const getTranslatedContent = () => {
  return i18n.t("hello_localazy");
}

const updateTranslatedContent = () => {
  document.querySelector("#content").innerHTML = getTranslatedContent();
}

const initPageContent = () => {
  document.querySelector("#app").innerHTML = `  
  ${createLanguageSelector()}   
  <div id="content">  
    ${getTranslatedContent()}
  </div>`;

  document.querySelector("#selector").addEventListener("change", (e) => {
    i18n.changeLanguage(e.target.value);
    updateTranslatedContent();
  })
}

initI18n(initPageContent);
