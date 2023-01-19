import React from "react";
import { Messages, Input } from "./index";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
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
