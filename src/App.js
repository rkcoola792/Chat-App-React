import { Login, Register, Home } from "./Pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles.scss";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthenticationContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
