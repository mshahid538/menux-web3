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

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      // Assuming the server sends a success message upon successful login
      if (response.data.success) {
        localStorage.setItem("login", true)
        navigate("/view");
      } else {
        // Handle login failure (e.g., show an error message)
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response.data.message)
    }
  };

  return (
    <Grid component="main" maxWidth="s" style={{ height: "100%" }}>
      <div style={{ paddingBottom: "50%" }}>
        <Grid>
          <Header />

        </Grid>

        <Grid sx={{ m: 3 }}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
        </Grid>
        <Container >
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
            value={username}
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
          <Typography color={"red"}>{Error}</Typography>
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
