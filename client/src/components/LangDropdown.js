import React, { useState } from "react";

import { Form, Button } from "semantic-ui-react";

const languageOptions = [
  { key: "e", text: "English", value: "english" },
  { key: "f", text: "French", value: "french" },
  { key: "s", text: "Spanish", value: "spanish" },
];

const LangDropdown = ({ onComplete }) => {
  const [fluentLanguage, setFluentLanguage] = useState(
    languageOptions[0].value
  );
  const [trainingLanguage, setTrainingLanguage] = useState(
    languageOptions[1].value
  );

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted");

        onComplete(fluentLanguage, trainingLanguage);
      }}
    >
      <Form.Select
        options={languageOptions}
        label={{
          children: "Fluent Language",
          htmlFor: "form-select-control-fluent-language",
        }}
        value={fluentLanguage}
        onChange={(_, { value }) => {
          const newLanguage = languageOptions.find(
            (language) => language.value === value
          );
          setFluentLanguage(newLanguage.value);
        }}
        placeholder="Choose A Language"
        search
        searchInput={{ id: "form-select-control-fluent-language" }}
        required
      />
      <Form.Select
        options={languageOptions}
        label={{
          children: "Language To Learn",
          htmlFor: "form-select-control-choice-language",
        }}
        value={trainingLanguage}
        onChange={(_, { value }) => {
          const newLanguage = languageOptions.find(
            (language) => language.value === value
          );
          setTrainingLanguage(newLanguage.value);
        }}
        placeholder="Choose A Language"
        search
        searchInput={{ id: "form-select-control-choice-language" }}
        required
      />
      <Button size="large" fluid role="submit">
        Find a language buddy!
      </Button>
    </Form>
  );
};

export default LangDropdown;
