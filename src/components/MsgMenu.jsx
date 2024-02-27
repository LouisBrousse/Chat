import { useChat } from "../ChatProvider.jsx";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MessageMgmt() {
  const { clearMessages, messages } = useChat();

  function consoleHandler() {
    console.log("voici la liste", messages);
  }

  const effaceHandler = () => {
    clearMessages();
  };

  return (
    <div className="menu">
      <Button className="console" onClick={consoleHandler} variant="outlined">
        Console
      </Button>

      <Button
        className="effacer"
        onClick={effaceHandler}
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Effacer les messages
      </Button>
    </div>
  );
}
