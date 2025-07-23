import React, { useState } from "react";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import Apple from "../../assets/LoginAssets/apple.svg";
import ArrowLogin from "../../assets/LoginAssets/ArrowLogin.svg";
import Facebook from "../../assets/LoginAssets/Facebook.svg";
import Google from "../../assets/LoginAssets/google.svg";
import Lock from "../../assets/LoginAssets/Lock.svg";
import User from "../../assets/LoginAssets/Group.svg";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

import {
  ButtonLogin,
  CheckboxDiv,
  CheckboxP,
  FacebookAccount,
  ForgetPass,
  GoogleAccaunt,
  ImagesDiv,
  Input,
  InputDiv,
  LogInDiv,
  LogInh1,
  LogInP,
  MessageDiv,
  MessageP,
  RegisterHere,
  SpanP,
} from "../../Styles/logInStyles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const LoginComponent = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Fill the required places first!");
      return;
    }
    try {
      setLoading(true);
      setMessage("");
      const data = await fetch("http://localhost:4000/client/compare-client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      await data.json();
      if (data.ok) {
        alert("user signed in successfully");
        console.log("user Logged in succesfully");
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        setMessage("Invalid Email or passmword");
      }
    } catch (error) {
      setMessage("Something went wrong, try again...");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <NavbarComponent />
        <div className="Container">
          <LogInDiv>
            <LogInP>Sign in</LogInP>
            <LogInh1>Welcome back</LogInh1>
            <InputDiv>
              <img src={User} alt="User" />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputDiv>
            <InputDiv>
              <img src={Lock} alt="Lock" />
              <Input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputDiv>
            <ForgetPass>
              <CheckboxDiv>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: grey[900],
                    "&.Mui-checked": {
                      color: grey[900],
                    },
                  }}
                />
                <CheckboxP>Remember me</CheckboxP>
              </CheckboxDiv>
              <CheckboxP>Forgot password?</CheckboxP>
            </ForgetPass>
            <ButtonLogin disabled={loading} onClick={handleSignIn}>
              {loading ? "Signing In" : "SIGN IN"}{" "}
              <img src={ArrowLogin} alt="ArrowLogin" />
            </ButtonLogin>
            <CheckboxP $OtherAccounts>
              Or connect with your social account
            </CheckboxP>
            <ImagesDiv>
              <GoogleAccaunt>
                <img src={Google} alt="Google" />
                <p>Sign in with Google</p>
              </GoogleAccaunt>
              <FacebookAccount>
                <img src={Facebook} alt="Facebook" />
              </FacebookAccount>
              <FacebookAccount>
                <img src={Apple} alt="Apple" />
              </FacebookAccount>
            </ImagesDiv>
            <MessageDiv>
              {message && <MessageP>{message}</MessageP>}{" "}
            </MessageDiv>
            <RegisterHere>
              Don’t have an account?{" "}
              <Link className="navLink" to={"/register"}>
                <SpanP>Register Here !</SpanP>
              </Link>
            </RegisterHere>
          </LogInDiv>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default LoginComponent;
