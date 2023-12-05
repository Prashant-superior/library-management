import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Catalog from "./Catalog";
import UserDashboard from "./UserDashboard";
import LoginForm from "./LoginForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/dashboard" element={<UserDashboard/>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </div>
  );
};

export default App;
