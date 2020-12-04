const localazyMetadata = {
  projectUrl: "https://testing.localazy.com/p/localize-javascript-apps",
  baseLocale: "en",
  languages: [
    {
      language: "cs",
      region: "",
      script: "",
      isRtl: false,
      name: "Czech",
      localizedName: "Čeština",
      pluralType: (n) => { return (n===1) ? "one" : (n>=2 && n<=4) ? "few" : "other"; }
    },
    {
      language: "en",
      region: "",
      script: "",
      isRtl: false,
      name: "English",
      localizedName: "English",
      pluralType: (n) => { return (n===1) ? "one" : "other"; }
    },
    {
      language: "fr",
      region: "",
      script: "",
      isRtl: false,
      name: "French",
      localizedName: "Français",
      pluralType: (n) => { return (n===0 || n===1) ? "one" : "other"; }
    }
  ]
};

export default localazyMetadata;