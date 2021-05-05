import socketIOClient from "socket.io-client";
import { useEffect, useRef, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

const FIND_USER = "findUser";
const NEW_USER_FOUND = "newUserFound";
const ADDED_TO_QUEUE = "addedToQueue";
const NEW_CHAT_MESSAGE = "newChatMessage";

const SOCKET_SERVER_URL = "/";

const useSocket = (history) => {
  const { user } = useAuth0();
  const socketRef = useRef();
  const [queueing, setQueuing] = useState(false);
  const [roomId, setRoomId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [fluentLanguage, setFluentLanguage] = useState(undefined);
  const [trainingLanguage, setTrainingLanguage] = useState(undefined);

  useEffect(() => {
    console.log("Connecting");
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    socketRef.current.on(ADDED_TO_QUEUE, () => {
      setQueuing(true);
    });

    socketRef.current.on(NEW_USER_FOUND, ({ roomId }) => {
      setRoomId(roomId);
      history.push("/chatpage");
    });

    socketRef.current.on(NEW_CHAT_MESSAGE, (message) => {
      console.log("New message received: ", message);
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      console.log("Disconnecting websocket");
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE, {
      fluentLanguage,
      trainingLanguage,
      roomId,
      body: messageBody,
      author: user.nickname,
      // createdAt: Date.now(),
    });
  };

  const matchNewUser = (fluentLanguage, trainingLanguage) => {
    setFluentLanguage(fluentLanguage);
    setTrainingLanguage(trainingLanguage);

    socketRef.current.emit(FIND_USER, {
      fluentLanguage,
      trainingLanguage,
    });
  };

  return { matchNewUser, queueing, sendMessage, messages };
};

export default useSocket;
