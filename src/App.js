import { Login, Register, Home } from "./Pages/index";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./styles.scss";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthenticationContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  // creating a protected route
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login"></Navigate>;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
