import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home";
import { MainTemplate } from "./components/templates/main-template.jsx";
import "./App.css";
import { Login } from "./components/auth/login.jsx";
import { Register } from "./components/auth/register.jsx";
import { Rent } from "./components/rent/rent.jsx";
import { Payments } from "./components/payments/payments.jsx";
import { AdminPayments } from "./components/admin/admin-payments.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTemplate component={Home} />} />
        <Route path="/rent" element={<MainTemplate component={Rent} />} />
        <Route path="/payments" element={<MainTemplate component={Payments} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/payments" element={<MainTemplate component={AdminPayments} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
