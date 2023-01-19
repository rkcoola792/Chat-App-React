import React from "react";

const Register = () => {
  return (
    <div>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo"> RK Chat</span>
          <span className="title"> Register</span>
          <form action="">
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="file" input style={{ display: "none" }} id="file" />
            <label htmlFor="file">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6499/6499530.png"
                alt="avatar"
                
              />
              <span>Add an avatar</span>
            </label>
            <button>Sign-Up</button>
          </form>
          <p>You do have an account ? Login</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
