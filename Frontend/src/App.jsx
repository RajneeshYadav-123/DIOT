// src/App.jsx
import React from "react";
import SignupPage from "./page/signup";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./page/home"
import RegistrationPage from "./page/Registration"
import TeamsPage from "./page/TeamsPage";
import Login from "./page/login";
import LeaderDashboard from "./component/LeaderDashBoard";
import ProtectedRoute from "./utils/protectedRoute" ;
import Logout from "./component/logout";
import CampusDashboard from "./component/CampusDashboard";
export default function App() {
  return (
    <>
       <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/TeamsPage" element={<TeamsPage />} />
      <Route path="/signup" element={<SignupPage />} />
 <Route path="/login" element={<Login />} />
  <Route path="/logout" element={<Logout />} />
  <Route path="/campusDashboard" element={<CampusDashboard />} />
       <Route
          path="/dashboard"
          element={
           
              <LeaderDashboard />
           
          }
        />
    </Routes>
    </>
  );
}

