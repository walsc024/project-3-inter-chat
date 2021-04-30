const LanguageTranslatorV3 = require("ibm-watson/language-translator/v3");
const { IamAuthenticator } = require("ibm-watson/auth");
const languageTranslator = new LanguageTranslatorV3({
  version: "2018-05-01",
  authenticator: new IamAuthenticator({
    apikey: "HzUYuDSdPrFWMDrpB4D5TRPbLYrriMLuZAz_p49HcwFk",
  }),
  serviceUrl:
    "https://api.eu-gb.language-translator.watson.cloud.ibm.com/instances/a829465c-01f6-45be-94a8-4b57b822264a",
});
// const translateParams = {
//   text: "Hello, my name is David. What is your name?",
//   modelId: "en-fr",
// };
// languageTranslator
//   .translate(translateParams)
//   .then((translationResult) => {
//     console.log(JSON.stringify(translationResult, null, 2));
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

function translate(languages, message) {
  const translateParams = {
    text: message,
    modelId: languages,
  };
  languageTranslator
    .translate(translateParams)
    .then((translationResult) => {
      console.log(JSON.stringify(translationResult, null, 2));
    })
    .catch((err) => {
      console.log("error:", err);
    });
}

// translate("en-fr", "Good day");

export default translate;
