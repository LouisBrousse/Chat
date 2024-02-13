import Bubble from "./Bubble";
import "./Bubblelist.css";
import {useChat} from '../ChatProvider.jsx';

const formatDate = (timestamp) => {
  // Convertir la chaîne de date en objet Date
  const date = new Date(timestamp);
  
  // Extraire les parties de la date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  // Extraire les parties de l'heure
  const hours = date.getHours();
  const minutes = date.getMinutes();
  
  // Formater les parties avec des zéros de remplissage si nécessaire
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
  // Retourner la date et l'heure formatées
  return `${formattedDate} ${formattedTime}`;
};

export default function Bubbleslist() {
  const {messages} = useChat()
  


  const Bubbles = messages.map((msg) => (
    
    <Bubble
      author={msg.author}
      text={msg.text}
      date={formatDate(msg.timestamp)}
      key={msg.id}
      user = {msg.user}
    ></Bubble>
  ));

  return (
    <div className="bubblelist-container">
      <div className="bubbles">{Bubbles}</div>
    </div>
  );
}
