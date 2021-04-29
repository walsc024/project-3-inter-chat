import { createContext } from "react";

const SocketContext = createContext({
  queueing: false,
  matchNewUser: () => {},
});

export default SocketContext;
