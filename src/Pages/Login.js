import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);

    const email = e.target[0].value;
    const password = e.target[1].value;

    // authencation using firebase
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo"> RK Chat</span>
          <span className="title"> Login</span>
          <form action="" onSubmit={handleSubmit}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />

            <button>Sign-In</button>
          </form>
          <p>
            You don't have an account? <Link to="/register"> Register</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
