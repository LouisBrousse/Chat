import "./App.css";
import Footer from "./components/Footer";
import Bubbleslist from "./components/Bubblelist";
import Header from "./components/Header";
import { useState } from "react";
import { messagesdata } from "./datas/messagesdata.js";
import { chatAPI } from "./chatBase.js";

function App() {
  const [messagesData, setMessagesData] = useState(messagesdata);
  // const [messageIdCounter, setMessageIdCounter] = useState(2);

  const sendMessage = (newMessage) => {
    //   const messageWithId = { ...newMessage, id: messageIdCounter };
    // setMessageIdCounter(messageIdCounter + 1);
    //   setMessagesData((prevMessages) => [...prevMessages, messageWithId]);
    chatAPI.sendMessage(newMessage.author, newMessage.user, newMessage.text);
    setMessagesData(chatAPI.getMessages());
  };

  function consoleHandler() {
    console.log("voici la liste", messagesData);
  }

  const effaceHandler = () => {
    chatAPI.clearMessages();
    setMessagesData(chatAPI.getMessages());
  };

  return (
    <div className="background">
      <Header />
      <Bubbleslist messageslist={messagesData}></Bubbleslist>
      <Footer sendMessage={sendMessage}></Footer>

      <div className="menu">
        <button className="console" onClick={consoleHandler}>
          Console
        </button>

        <button className="effacer" onClick={effaceHandler}>
          Effacer les messages
        </button>
      </div>
    </div>
  );
}

export default App;
