import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/login.css";

function LoginSignup() {
  let history = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z]+[A-Za-z ]*$/;

  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({ email: "email", password: "bb" });
  const [newuser, setNewUser] = useState({
    user_email: "",
    user_password: "",
    user_name: "",
  });

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const duringLogin = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const duringSignup = (e) => {
    setNewUser({ ...newuser, [e.target.name]: e.target.value });
  };

  const changeCom = async () => {
    history("/success");
  };

  const createUser = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(newuser.user_email)) {
      setErrorMessage("Invalid email address");
    } else if (!nameRegex.test(newuser.user_name)) {
      setErrorMessage("Invalid Name");
    } else if (newuser.user_password.length<8) {
      setErrorMessage("Password Should be Minimum 8 Characters");
    } else {
      setErrorMessage("");

      const response = await fetch("http://localhost:8080/crateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newuser),
      });
      const json = await response.json();
      console.log(json.success);
      // setProduct(json);
      if (json.success) {
        // Save the auth token and redirect
       // localStorage.setItem("token", json.authtoken);
       history("/success");
      } else {
        alert("Server Error");
      }
    }
  };

  return (
    <div className="ab">
      <div className={`cont ${isSignUp ? "s--signup" : ""}`}>
        <div className="form sign-in">
          <h2>Welcome</h2>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              onChange={duringLogin}
              value={user.email}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              onChange={duringLogin}
              value={user.password}
            />
          </label>
          <p className="forgot-pass">Forgot password?</p>

          <button type="button" onClick={changeCom} className="submit">
            Sign In
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>Don't have an account? Please Sign up!</h3>
            </div>
            <div className="img__text m--in">
              <h3>If you already has an account, just sign in.</h3>
            </div>
            <div className="img__btn" onClick={handleToggle}>
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Create your Account</h2>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="user_name"
                onChange={duringSignup}
                value={newuser.user_name}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="user_email"
                required={true}
                onChange={duringSignup}
                value={newuser.user_email}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="user_password"
                onChange={duringSignup}
                value={newuser.user_password}
              />
            </label>
            <button type="button" onClick={createUser} className="submit">
              Sign Up
            </button>
            {errorMessage && (
              <center>
                {" "}
                <small className="text-danger">{errorMessage}</small>
              </center>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
