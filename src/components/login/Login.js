import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import "./login.css";
import { auth, signin, signup } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const googleSignIn = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((auth) => {
        // console.log(auth);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signIn = (event) => {
    event.preventDefault();
    signin(emailRef.current.value, passwordRef.current.value)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  function register(event) {
    event.preventDefault();

    signup(emailRef.current.value, passwordRef.current.value)
      .then((auth) => {
        if (auth) {
          console.log(auth);
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  }
  return (
    <div className="login">
      <div className="login_image">
        <Link to="/">
          <img
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            alt=""
            className="login_log"
          />
        </Link>
      </div>
      <div className="login_form">
        <form>
          <h1 className="login_header">Sign-in</h1>

          <label htmlFor="email">E-mail</label>
          <br />
          <input type="text" className="col-12" ref={emailRef} />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input className="col-12" type="password" ref={passwordRef} />
          <div className="login_button">
            <button type="submit" onClick={signIn} className="btn col-12">
              Sign In
            </button>
            <button
              className="col-12 login-with-google-btn"
              onClick={googleSignIn}
            >
              Sign In with Google
            </button>
          </div>
          <p className="form_info">
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <div className="signup_button">
            <button type="submit" onClick={register} className="signup col-12">
              Create your Amazon Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
