import React, { Component } from "react";
import ChatPage from "./pages/ChatPage";
// import LandingPage from "./pages/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LandingPage /> */}
        <ChatPage />
      </div>
    );
  }
}

export default App;
