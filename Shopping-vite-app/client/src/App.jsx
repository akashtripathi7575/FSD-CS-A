import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from "./components/pages/UserDashboard.jsx";
import { Header } from "./components/pages/Header.jsx";
import { Cart } from "./components/pages/Cart.jsx";
import { Orders } from "./components/pages/Orders.jsx";
import { Register } from "./components/pages/Register.jsx";
import { Login } from "./components/pages/Login.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
