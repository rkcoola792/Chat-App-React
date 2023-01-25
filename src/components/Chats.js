import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { AuthContext } from "../Context/AuthenticationContext";
const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  // to use real time chats
  useEffect(() => {
    const getChat = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      // clean Up function
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChat();
  }, [currentUser.uid]);

  console.log(Object.entries(chats));
  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat">
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
