import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

export const FIND_USER = "findUser";
export const NEW_USER_FOUND = "newUserFound";
export const ADDED_TO_QUEUE = "addedToQueue";

const SOCKET_SERVER_URL = "http://localhost:8080";

const useSocket = () => {
  const socketRef = useRef();

  //   useEffect(() => {
  //     socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
  //       const incomingMessage = {
  //         ...message,
  //         ownedByCurrentUser: message.senderId === socketRef.current.id,
  //       };
  //       setMessages((messages) => [...messages, incomingMessage]);
  //     });

  //     return () => {
  //       console.log("Disconnecting websocket");
  //       socketRef.current.disconnect();
  //     };
  //   }, [roomId]);

  useEffect(() => {
    console.log("Connecting");
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    socketRef.current.on(NEW_USER_FOUND, ({ roomId }) => {
      console.log("Assigned new room: ", roomId);
      // @TODO - We have been assigned a new room id
      // and need to do something
    });

    socketRef.current.on(ADDED_TO_QUEUE, () => {
      console.log("Added to queue");
      // @TODO - Load a spinner or something...
    });
  }, []);

  // const sendMessage = (messageBody) => {
  //   socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
  //     body: messageBody,
  //     senderId: socketRef.current.id,
  //   });
  // };

  const matchNewUser = (fluentLanguage, trainingLanguage) => {
    socketRef.current.emit(FIND_USER, {
      fluentLanguage,
      trainingLanguage,
    });
  };

  return { matchNewUser };
};

export default useSocket;
