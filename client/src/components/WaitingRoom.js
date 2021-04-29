import React from "react";
import { Message, Icon } from "semantic-ui-react";

const Queueing = () => (
  <Message style={{ marginTop: "5em" }} icon>
    <Icon name="circle notched" loading />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      We are finding you a match.
    </Message.Content>
  </Message>
);

export default Queueing;
