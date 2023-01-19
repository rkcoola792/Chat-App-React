import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lite Chat</span>
      <div className="user">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
          alt="profile-pic"
        />
        <span>Rk</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
