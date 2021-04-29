import React, { useContext } from "react";
import { Grid, Image } from "semantic-ui-react";
import MessagesContainer from "../components/MessagesContainer";
import InputContainer from "../components/InputContainer";
import "./ChatPage.css";
import useChat from "../hooks/useChat";
import Logo from "../Images/logo.png";
import NavBar from "../components/NavBar";
import SocketContext from "../context/SocketContext";

const ChatPage = () => {
  const { sendMessage, messages } = useContext(SocketContext);

  return (
    <Grid>
      <NavBar />
      <Grid.Column width={4} />
      <Grid.Column width={8}>
        <Grid.Row className="messages-container">
          {messages.length > 0 ? (
            <MessagesContainer messages={messages} />
          ) : (
            <div />
          )}
        </Grid.Row>
        <Grid.Row>
          <InputContainer handleSubmit={sendMessage} />
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={4} />
    </Grid>
  );
};

// class ChatPage extends Component {
//   constructor(props) {
//     super(props);

//     const socket = io();

//     socket.on("connect", () => {
//       console.log(socket.id); // x8WIv7-mJelg7on_ALbx
//     });

//     this.state = {
//       messages: [],
//       // socket: openSocket("http://localhost:8080"),
//       socket,
//     };
//     socket.on("new-message", (message) => {
//       let currentMessages = messages;
//       currentMessages.push(message);
//       this.setState({
//         messages: currentMessages,
//       });
//     });
//   }

//   componentDidMount() {
//     fetch("http://localhost:8080/api/message", {
//       method: "GET",
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((resJson) => {
//         this.setState({
//           messages: resJson,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   render() {
//     return (
//       <Grid>
//         <Grid.Column width={4} />
//         <Grid.Column width={8}>
//           <Grid.Row className="messages-container">
//             {messages.length > 0 ? (
//               <MessagesContainer messages={messages} />
//             ) : (
//               <div />
//             )}
//           </Grid.Row>
//           <Grid.Row>
//             <InputContainer handleSubmit={this.handleSubmit} />
//           </Grid.Row>
//         </Grid.Column>
//         <Grid.Column width={4} />
//       </Grid>
//     );
//   }

//   handleSubmit = (sender, content) => {
//     let reqBody = {
//       sender: sender,
//       content: content,
//     };

//     fetch("http://localhost:8080/api/message", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(reqBody),
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((resJson) => {
//         console.log("I am emitting a message on the WS: ", resJson);

//         console.log("Connected: ", socket.connected);

//         socket.emit("new-message", resJson);

//         console.log("Current state of socket: ", socket);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }

export default ChatPage;
