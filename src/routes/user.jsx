import { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function User() {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserButtonClick = () => {
    localStorage.setItem(`User`, JSON.stringify(userName));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        display={"flex"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <input
          id="filled-basic"
          type="text"
          name="user"
          className="input-user"
          label="User"
          onChange={handleChange}
        />

        <Link to="/">
          <button className="user-button" onClick={handleUserButtonClick}>
            Valider
          </button>
        </Link>
      </Box>
    </>
  );
}
