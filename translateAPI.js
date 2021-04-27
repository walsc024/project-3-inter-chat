const LanguageTranslatorV3 = require("ibm-watson/language-translator/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

const languageTranslator = new LanguageTranslatorV3({
  version: "2018-05-01",
  authenticator: new IamAuthenticator({
    apikey: "f09f08f2-a24d-4985-b74c-53394e57ea3f",
  }),
  serviceUrl:
    "https://cloud.ibm.com/authorize/ffa0977684754a90bd74a46551aee72b",
});

const translateParams = {
  text: "Hello, how are you today?",
  modelId: "en-es",
};

languageTranslator
  .translate(translateParams)
  .then((translationResult) => {
    console.log(JSON.stringify(translationResult, null, 2));
  })
  .catch((err) => {
    console.log("error:", err);
  });
