import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./Context/AuthenticationContext";
import { ChatContextProvider } from "./Context/ChatContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </AuthContextProvider>
);
