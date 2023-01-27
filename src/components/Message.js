import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthenticationContext";
import { ChatContext } from "../Context/ChatContext";
// console.log("In the begginin of message");

const Message = ({ message }) => {
  console.log("In the begginin of message", message);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  // for scrolling to the last message
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  console.log("In message File", message);
  console.log("fetching the data", data);

  return (
    <>
      <div
        ref={ref}
        className={`message ${message.senderId === currentUser.uid && "owner"}`}
      >
        <div className="messageInfo">
          <img
            src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
          ></img>

          <span>just now</span>
        </div>

        <div className="messageContent">
          <p>{message.text}</p>
          {message.img && <img src={message.img} alt="" />}
        </div>
      </div>
    </>
  );
};

export default Message;
