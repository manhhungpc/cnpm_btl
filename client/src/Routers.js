import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import Login from "./pages/Login";
import CreateJob from "./pages/CreateJob";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/create-new-job" element={<CreateJob />} />
      </Routes>
    </BrowserRouter>
  );
}
