import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./Context/AuthenticationContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<AuthContextProvider>
<App />
</AuthContextProvider>


);
