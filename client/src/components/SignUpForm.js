import React from "react";
import { Form, Input, Button, Select } from "semantic-ui-react";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

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

const SignUpForm = () => (
  <Form>
    <Form.Group widths="equal">
      <Form.Field
        id="form-input-control-first-name"
        control={Input}
        label="First name"
        placeholder="First name"
        required
      />
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="Last name"
        placeholder="Last name"
        required
      />
    </Form.Group>
    <Form.Field
      control={Select}
      options={genderOptions}
      label={{ children: "Gender", htmlFor: "form-select-control-gender" }}
      placeholder="Gender"
      search
      searchInput={{ id: "form-select-control-gender" }}
      required
    />
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
    <Form.Field
      id="form-input-control-error-email"
      control={Input}
      label="Email"
      placeholder="joe@schmoe.com"
      //   error={{
      //     content: "Please enter a valid email address",
      //     pointing: "below",
      //   }}
      required
    />
    <Form.Field
      id="form-button-control-public"
      control={Button}
      content="Confirm"
      label=""
    />
  </Form>
);

export default SignUpForm;
