// src/App.jsx
import React from "react";

import { Routes, Route } from "react-router-dom";
import LandingPage from "./page/home"
import RegistrationPage from "./page/Registration"
import TeamsPage from "./page/TeamsPage";
export default function App() {
  return (
    <>
       <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/TeamsPage" element={<TeamsPage />} />

    </Routes>
    </>
  );
}

