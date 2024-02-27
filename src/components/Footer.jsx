import Textform from "./Textform";
import MsgMenu from "./MsgMenu";


export default function Footer({ user }) {
  return (
    <div className="footer">
      <MsgMenu  />
      <Textform user={user} />
      
    </div>
  );
}
