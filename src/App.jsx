import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const isLoggedIn = !!localStorage.getItem("session");

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/main" /> : <LoginPage />}
      />
      <Route
        path="/main"
        element={isLoggedIn ? <MainPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
