import { onSnapshot, doc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";
import { Message } from "./index";
import { db } from "../Firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log("In messages", messages);
  return (
    <div className="messages">


      {messages.map((m) => {
        <Message message={m} key={m.id} />;
        
      })}

    
    </div>
    
  );
};

export default Messages;
