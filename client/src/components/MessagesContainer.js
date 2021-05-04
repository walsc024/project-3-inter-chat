import React, { Component, useState } from "react";
import { Comment } from "semantic-ui-react";
const MessagesContainer = (props) => {
  const [messageToggleStatus, setMessageToggleStatus] = useState(
    props.messages.map(() => false)
  );

  return (
    <Comment.Group>
      {props.messages.map((message, index) => {
        return (
          <Comment
            key={"c" + index}
            onClick={() => {
              setMessageToggleStatus(
                messageToggleStatus.map((currentStatus, i) =>
                  i === index ? !currentStatus : currentStatus
                )
              );
            }}
          >
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            <Comment.Content>
              <Comment.Author as="b">{message.author}</Comment.Author>
              <Comment.Metadata>
                <div>{message.createdAt}</div>
              </Comment.Metadata>
              <Comment.Text>
                {messageToggleStatus[index]
                  ? message.trainingTranslation[0].translation
                  : message.fluentTranslation[0].translation}
              </Comment.Text>
            </Comment.Content>
          </Comment>
        );
      })}
    </Comment.Group>
  );
};

export default MessagesContainer;
