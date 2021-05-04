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

function translate(fluentLanguage, trainingLanguage, message) {
  const translateParams = {
    text: message,
    target: fluentLanguage,
    source: trainingLanguage,
  };

  return languageTranslator
    .translate(translateParams)
    .then((translationResult) => translationResult)
    .catch((err) => {
      throw new Error(err);
    });
}

module.exports = translate;
