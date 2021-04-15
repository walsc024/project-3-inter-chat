import React, { Component } from "react";

class MessagesContainer extends Component {
  render() {
    console.log(this.props.messages);
    return <div>Messages Container</div>;
  }
}

export default MessagesContainer;
