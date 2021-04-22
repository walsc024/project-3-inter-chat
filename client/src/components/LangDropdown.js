import React from "react";

import { Form, Select } from "semantic-ui-react";

const fluentLanguageOptions = [
  { key: "e", text: "English", value: "english" },
  { key: "f", text: "French", value: "french" },
  { key: "s", text: "Spanish", value: "spanish" },
];

const choiceLanguageOptions = [
  { key: "e", text: "English", value: "english" },
  { key: "f", text: "French", value: "french" },
  { key: "s", text: "Spanish", value: "spanish" },
];

const LangDropdown = () => {
  return (
    <Form>
      <Form.Field
        control={Select}
        options={fluentLanguageOptions}
        label={{
          children: "Fluent Language",
          htmlFor: "form-select-control-fluent-language",
        }}
        placeholder="Choose A Language"
        search
        searchInput={{ id: "form-select-control-fluent-language" }}
        required
      />
      <Form.Field
        control={Select}
        options={choiceLanguageOptions}
        label={{
          children: "Language To Learn",
          htmlFor: "form-select-control-choice-language",
        }}
        placeholder="Choose A Language"
        search
        searchInput={{ id: "form-select-control-choice-language" }}
        required
      />
    </Form>
  );
};

export default LangDropdown;
