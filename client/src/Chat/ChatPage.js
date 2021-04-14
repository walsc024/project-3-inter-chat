import React, { Component } from "react";
import { Grid, Input } from "semantic-ui-react";
import MessagesContainer from "./MessagesContainer";
import InputContainer from "./InputContainer";
import "./ChatPage.css";

class ChatPage extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <Grid.Row className="messages-container">
            <MessagesContainer />
          </Grid.Row>
          <Grid.Row>
            <InputContainer />
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid>
    );
  }
}

export default ChatPage;
