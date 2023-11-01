import React from "react";
import "./index.css";
import { Grid, Box, Button } from "@mui/material";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Box className="header">
        <img src={logo} />
      </Box>
      <Box className="login">
        <Button style={{ color: "white" }} onClick={() => navigate("/login")}>
          Login
        </Button>
      </Box>
    </>
  );
}

export default Header;
