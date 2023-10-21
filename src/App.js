import React, { useState } from "react";
import "./App.css";
import Navbar from "./Pages/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer";
import Register from "./Components/Form/Register";
import Login from "./Components/Form/Login";
import Home from "./Pages/Home";

export default function App() {
  const [login, setLogin] = useState(true);
  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/register"
            element={login ? <Register handleLogin={handleLogin} /> : <Login />}
          />
          <Route
            path="/login"
            element={login ? <Login handleLogin={handleLogin} /> : <Home />}
          />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
