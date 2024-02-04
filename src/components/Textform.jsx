import "./Footer.css";
import { useState } from "react";

export default function Textform({ sendMessage }) {
  const [message, setMessage] = useState({
    author: "",
    text: "",
    date: "",
    user: "",
  });

  const handleChange = (e) => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}  ${currentDate.getHours()}:${currentDate.getMinutes()}`;

    setMessage({
      ...message,
      [e.target.name]: e.target.value,
      date: formattedDate,
      
    });
    
  };

  const handleUSer = (e) => {
  
    setMessage({
      ...message,
      user: e.target.checked ? "user" : "", 
    });
    
  };

  const handleSendMessage = () => {
    // console.log('message a envoyer :',message)
    sendMessage(message);
    setMessage({
      author: "",
      text: "",
      date: "",
      user: "",
   
    });
  };
 
  return (
    <div className="footer">
      <div className="footer_author">
        <input
          type="text"
          name="author"
          className="input-author"
          placeholder="Author"
          value={message.author}
          onChange={handleChange}
        />
        <div className="checkBox">
        <div className="footer_user">
          <label htmlFor="user">User</label>
            <input
              type="checkbox"
              id="user"
              name="user"
              className="checkBox-user"
              checked={message.user === "user"}
              onChange={handleUSer}
            />
          </div>
          
        </div>
      </div>
      <input
        type="text"
        name="text"
        className="input-text"
        placeholder="Type your message..."
        value={message.text}
        onChange={handleChange}
      />
      <button className="send-button" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
}
