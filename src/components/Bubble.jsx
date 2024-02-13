

export default function Bubble({ author, date, text}) {

 // Récupérer le nom d'utilisateur depuis le localStorage
 const userName = JSON.parse(localStorage.getItem("User"));

 // Déterminer si l'auteur du message est l'utilisateur actuel
 const isCurrentUser = userName === author;

 // Déterminer la classe CSS à appliquer en fonction de l'auteur du message
 const bubbleClass = isCurrentUser ? "bubbleuser" : "bubblefriend";

 console.log(date)
  return (
    <>
      <div className="date"> {date} </div>
      <div className={bubbleClass}>
        <div className="avaname">
          <div className="name">{author}</div>
        </div>

        <div className="text">{text}</div>

        <div ></div>
      </div>
    </>
  );
}
