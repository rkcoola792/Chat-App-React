import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type here something..." />
      <div className="send">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9291/9291878.png"
          alt=""
        />

        {/* for adding media  */}
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src="https://cdn-icons-png.flaticon.com/512/4146/4146794.png" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
