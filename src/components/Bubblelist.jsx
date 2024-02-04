import Bubble from "./Bubble";
import "./Bubblelist.css"

export default function Bubbleslist({messageslist}) {
 
  const Bubbles = messageslist.map((msg) => (
    
    <Bubble
      author={msg.author}
      text={msg.text}
      date={msg.date}
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
