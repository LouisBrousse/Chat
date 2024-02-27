import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function avatar() {
  const userName = localStorage.getItem("User");

  return (
    <>
      <div className="header_author">Current user : {userName}</div>
      <div className="header_button_container">
        <Link to="/user">
          <Button className="header_button" variant="contained">
            Changer de User
          </Button>
        </Link>
      </div>
    </>
  );
}
