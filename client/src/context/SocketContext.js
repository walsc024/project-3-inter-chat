import { createContext } from "react";

const SocketContext = createContext({
  matchNewUser: () => {},
  messages: [],
  sendMessage: () => {},
  queueing: false,
});

export default SocketContext;
