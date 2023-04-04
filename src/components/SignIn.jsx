import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInHandler } from "../api";
import { UserContext } from "../contexts/UserContext";
import "../css/SignIn.css";

export default function SignIn() {
  const { user, setUser } = useContext(UserContext);
  const [inputUsername, setInputUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (user.username) {
      navigate("/account");
    }
  }, [user, navigate]);

  const usernameHandler = (event) => {
    setUsernameErr(false);
    setInputUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPasswordErr(false);
    setInputPassword(event.target.value);
  };
  const signInButton = (event) => {
    event.preventDefault();
    if (!inputPassword) {
      return setPasswordErr(true);
    }
    signInHandler(inputUsername).then((users) => {
      users.map((user) => {
        if (user.username === inputUsername) {
          return setUser(user);
        }
        return setUsernameErr(true);
      });
    });
  };
  return (
    <div>
      <h3>Welcome!</h3>
      <p>Login to your account</p>
      <div className="login-box">
        <form className="signin-form"id="signin">
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            placeholder="Username"
            value={inputUsername}
            onChange={usernameHandler}
            required
          ></input>
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            id="password:"
            placeholder="Password"
            onChange={passwordHandler}
            type="password"
            required
          ></input>
          <br />
          <br />
          <button type="submit" onClick={signInButton}>
            Sign In
          </button>
        </form>
        <span className="error-box">
          {passwordErr ? <p>Please fill in any password to continue</p> : null}
        </span>
        <span className="error-box">
          {usernameErr ? (
            <p>
              Username not found, please check your login details and try again (Hint: try "jessjelly")
            </p>
          ) : null}
        </span>
      </div>
    </div>
  );
}
