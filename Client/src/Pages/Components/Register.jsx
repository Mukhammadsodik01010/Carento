import React, { useState } from "react";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import Apple from "../../assets/LoginAssets/apple.svg";
import ArrowLogin from "../../assets/LoginAssets/ArrowLogin.svg";
import Facebook from "../../assets/LoginAssets/Facebook.svg";
import Google from "../../assets/LoginAssets/google.svg";
import Lock from "../../assets/LoginAssets/Lock.svg";
import User from "../../assets/LoginAssets/Group.svg";
import Envelop from "../../assets/LoginAssets/Env.svg";
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

const RegisterComponent = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("")
    const [rePassword, setRePassword] = useState("")
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !rePassword) {
      setMessage("Fill the required places first!");
      return;
    }
      
    if ((await rePassword) !== password) {
        setMessage("Password doesn't match");
        return;
    }
    
      try {
      setLoading(true);
          setMessage("");
          
      const data = await fetch("http://localhost:4000/client/add-client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, rePassword }),
      });

      await data.json();
      if (data.ok) {
        alert("user registered  successfully");
          console.log("user registered in succesfully");
          setUsername("")
        setEmail("");
        setPassword("");
        setRePassword("")
          navigate("/log-in");
      } else {
        setMessage("Email is already in use");
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
            <LogInP>Register</LogInP>
            <LogInh1>Create an Account</LogInh1>
            <InputDiv>
              <img src={Envelop} alt="Envelop" />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputDiv>
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
            <InputDiv>
              <img src={Lock} alt="Lock" />
              <Input
                type="text"
                placeholder="Password"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
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
                <CheckboxP>I agree to term and conditions</CheckboxP>
              </CheckboxDiv>
            </ForgetPass>
            <ButtonLogin disabled={loading} onClick={handleRegister}>
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

export default RegisterComponent;
