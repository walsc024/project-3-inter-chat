import React, { Component } from "react";
import { Comment } from "semantic-ui-react";
import translate from "../utils/translateAPI";
const MessagesContainer = (props) => {
  return (
    <Comment.Group>
      {props.messages.map((message, index) => {
        return (
          <Comment key={"c" + index}>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            <Comment.Content>
              <Comment.Author as="b">{message.author}</Comment.Author>
              <Comment.Metadata>
                <div>{message.createdAt}</div>
              </Comment.Metadata>
              <Comment.Text>{message.body}</Comment.Text>
              <Comment.Text>{message.body.translate}</Comment.Text>
            </Comment.Content>
          </Comment>
        );
      })}
    </Comment.Group>
  );
};

export default MessagesContainer;
