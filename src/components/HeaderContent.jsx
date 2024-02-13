import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function avatar() {
  const userName = localStorage.getItem("User");

  return (
    <>
      <div>Current user : {userName}</div>
      <Link to="/user">
        <Button variant="contained">Changer de User</Button>
      </Link>
    </>
  );
}
