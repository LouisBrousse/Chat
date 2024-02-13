import "./Footer.css";
import { useState } from "react";
import { useChat } from "../ChatProvider.jsx";

import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';



export default function Textform({ user }) {
  const { sendMessage } = useChat(); 

 
  
  const [message, setMessage] = useState({
    author: "",
    text: "",
    date: "",
    userVerified: false,
  });

  const handleChange = (e) => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}  ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    const userVerifiedResult = user === message.author ? true : false;
    console.log('userVerifiedResult est arrivé :', userVerifiedResult)

    setMessage({
      ...message,
      [e.target.name]: e.target.value,
      userVerified: userVerifiedResult,
      date: formattedDate,
    });
  };

 

  const handleSendMessage = () => {
    // console.log('message a envoyer :',message)
   // Vérifier si les champs author et text sont remplis
  if (message.author.trim() !== "" && message.text.trim() !== "") {
    // Si les champs sont remplis, envoyer le message
    sendMessage(message);
    // Réinitialiser les champs du formulaire
    setMessage({
      author: "",
      text: "",
      date: "",
      userVerified: false,
    });
  } else {
    // Si l'un des champs est vide, afficher un message d'erreur ou prendre une autre action
    alert("Please fill in both author and message fields.");
  }
  };

  return (
    <div className="sender">
      <div className="inputs">
        <input
          type="text"
          name="author"
          className="input-author"
          placeholder="Author"
          value={message.author}
          onChange={handleChange}
        />

        <textarea
          type="text"
          name="text"
          className="input-text"
          placeholder="Type your message..."
          value={message.text}
          onChange={handleChange}
          rows="4" // Définir le nombre de lignes visibles
          cols="50" // Définir le nombre de colonnes visibles
        />
      </div>

      <Button className="send-button" onClick={handleSendMessage} variant="contained" color="success" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
}
