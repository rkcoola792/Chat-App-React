import React from "react";
import { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";
import { Messages, Input } from "./index";

const Chat = () => {
  const { data } = useContext(ChatContext);
  console.log("In chats", data);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8199/8199681.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3059/3059446.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828805.png"
            alt=""
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
