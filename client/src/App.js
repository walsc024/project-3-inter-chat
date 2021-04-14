import React, { Component } from "react";
import ChatPage from "./Chat/ChatPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "David",
    };
  }
  render() {
    return (
      <div className="App">
        <ChatPage />
      </div>
    );
  }
}

export default App;
