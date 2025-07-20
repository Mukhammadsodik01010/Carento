import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Enter your email and password");
      return;
    }
    try {
      setLoading(true);
      setMessage("");
      const response = await fetch(
        "http://localhost:4000/carento-admins/compare-admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        alert("Logged in successfully");
        navigate("/home");
      } else {
        setMessage( "Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        className="SignInBox"
        sx={{
          borderRadius: "10px",
          width: "400px",
          padding: "30px",
          boxShadow: 3,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
            SIGN IN
          </Typography>
        </Box>
        <Box sx={{ mt: "30px" }}>
          <Typography variant="h6" color="#607d8b">
            Email:
          </Typography>
          <Input
            sx={{ width: "100%", color: "#607d8b" }}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ mt: "10px" }}>
          <Typography variant="h6" color="#607d8b">
            Password:
          </Typography>
          <Input
            sx={{ width: "100%", color: "#607d8b" }}
            type="text" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box sx={{ mt: "30px", display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            disabled={loading}
            onClick={handleSignIn}
          >
            {loading ? "SIGNING IN..." : "SIGN IN"}
          </Button>
        </Box>
        {message && (
          <Typography
            color="error"
            variant="body1"
            sx={{ textAlign: "center", mt: 3 }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default SignInComponent;
