import { signOut } from "firebase/auth";

import { useContext } from "react";
import { AuthContext } from "../Context/AuthenticationContext";
import { auth } from "../Firebase";



const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Lite Chat</span>
      <div className="user">
        <img
          src={currentUser.photoURL}
          alt="profile-pic"
        />
        <span>{currentUser.displayName}</span>
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
