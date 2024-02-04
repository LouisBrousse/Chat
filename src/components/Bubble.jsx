export default function Bubble({ author, date, text, user}) {


  return (
    <div>
      <div className={user === "user" ? "bubbleuser" : "bubblefriend"}>
        <div className="avaname">
          <div className="name">{author}</div>
        </div>

        <div className="text">{text}</div>

        <div className="date">{date}</div>
      </div>
    </div>
  );
}
