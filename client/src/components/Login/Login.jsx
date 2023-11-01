import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import Swal from "sweetalert2";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!userName || !password) {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: "Username and password are required. Please enter both fields.",
        });
        return;
      }
      const response = await axios.post("http://localhost:5000/users/login", {
        userName,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("login", true);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You have successfully logged in.",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/view");
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: "Invalid username or password. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: "Invalid username or password. Please try again.",
      });
    }
  };

  return (
    <Grid component="main" maxWidth="s" style={{ height: "100%" }}>
      <div style={{ paddingBottom: "50%" }}>
        <Grid>
          <Header logoPosition={"true"} />
        </Grid>

        <Grid sx={{ m: 3 }}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
        </Grid>
        <Container>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Container>
      </div>
    </Grid>
  );
}

export default Login;
