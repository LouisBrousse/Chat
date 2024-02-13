import { createContext, useContext, useState, useEffect } from 'react';
import { chatAPI } from './chatApi';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(chatAPI.getMessages());

    const handleMessageReceive = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    chatAPI.connect(handleMessageReceive);
    return () => {
      chatAPI.disconnect();
    };
  }, []);

  const sendMessage = (newMessage) => {
    chatAPI.sendMessage(newMessage.author, newMessage.userVerified, newMessage.text);
    setMessages(chatAPI.getMessages());
  };

  const clearMessages = () => {
    chatAPI.clearMessages();
    setMessages([]);
  };

  const switchRoom = (roomName) => {
    chatAPI.switchRoom(roomName);
    setMessages(chatAPI.getMessages());
  };

  return (
    <ChatContext.Provider
      value={{ messages, sendMessage, clearMessages, switchRoom }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
