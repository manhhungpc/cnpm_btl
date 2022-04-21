import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/jobs" element={<Job />} />
      </Routes>
    </BrowserRouter>
  );
}
