import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ChatPage from "./pages/ChatPage";
import LandingPage from "./pages/LandingPage";
import DashBoard from "./pages/DashBoard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/chatpage" component={ChatPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
