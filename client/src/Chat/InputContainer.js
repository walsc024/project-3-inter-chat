import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: "",
      content: "",
    };
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          placeholder="name"
          value={this.state.sender}
          onChange={(e) => {
            this.setState({ sender: e.target.value });
          }}
          required
        />
        <Form.Input
          placeholder="Type your message here..."
          value={this.state.content}
          onChange={(e) => {
            this.setState({ content: e.target.value });
          }}
          required
        />
        <Button type="submit">Send</Button>
      </Form>
    );
  }
  handleSubmit = () => {
    this.setState({
      sender: "",
      content: "",
    });
  };
}

export default InputContainer;
