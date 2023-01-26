import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthenticationContext";
import { ChatContext } from "../Context/ChatContext";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const handleSend=()=>{

    if(img){}

    else{
      
    }

  }
  return (
    <div className="input">
      
      {/* forr ing text */}
      <input type="text" onChange={e=>setText(e.target.value)} placeholder="Type here something..." />
      <div className="send">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9291/9291878.png"
          alt=""
        />

        {/* for adding media  */}
        <input type="file" id="file" style={{ display: "none" }} onChange={e=>setImg(e.target.files[0])} />
        <label htmlFor="file">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4146/4146794.png"
            alt=""
          />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
