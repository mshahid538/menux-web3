import React from "react";
import "./index.css";
import { Grid, Box, Button } from "@mui/material";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

function Header({ islogin }) {
  const navigate = useNavigate();

  return (
    <>
      <Box className="header">
        <img src={logo} />
      </Box>
      {islogin ? (
        <Box className="login">
          <Button
            style={{ color: "white" }}
            onClick={() => navigate("/restaurant")}
          >
            Logout
          </Button>
        </Box>
      ) : (
        <Box className="login">
          <Button style={{ color: "white" }} onClick={() => navigate("/login")}>
            Login
          </Button>
        </Box>
      )}
    </>
  );
}

export default Header;
