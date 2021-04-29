import React, { Component } from "react";
import { Router, Route, Switch, Link } from "react-router-dom";

import ChatPage from "./pages/ChatPage";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/DashBoard";
import SocketContext from "./context/SocketContext";
import useSocket from "./hooks/useSocket";
import history from "./utils/history";

const App = () => {
  const socket = useSocket(history);

  return (
    <SocketContext.Provider value={socket}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route path="/chatpage" component={ChatPage} />
        </Switch>
      </Router>
    </SocketContext.Provider>
  );
};

export default App;
