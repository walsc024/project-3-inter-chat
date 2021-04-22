import React, { Component } from "react";
import { Comment } from "semantic-ui-react";

class MessagesContainer extends Component {
  render() {
    return (
      <Comment.Group>
        {this.props.messages.map((message, index) => {
          return (
            <Comment key={"c" + index}>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
              <Comment.Content>
                <Comment.Author as="b">{message.sender}</Comment.Author>
                <Comment.Metadata>
                  <div>Yesterday</div>
                </Comment.Metadata>
                <Comment.Text>{message.content}</Comment.Text>
              </Comment.Content>
            </Comment>
          );
        })}
      </Comment.Group>
    );
  }
}

export default MessagesContainer;
