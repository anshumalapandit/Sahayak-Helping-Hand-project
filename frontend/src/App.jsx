import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SignupUser from "./pages/SignUp/SignUpUser";
import SignupVolunteer from "./pages/SignUp/SignUpVolunteer";
import LoginVolunteer from "./pages/Login/LoginVolunteer";
import LoginUser from "./pages/Login/LoginUser";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import VolunteerDashboard from "./components/VolunteerDashboard/VolunteerDashboard";
import { useLocation } from "react-router-dom";


const App = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname.startsWith("/volunteer-dashboard");
  return (
    <div>
       {!hideNavbarFooter && <Navbar />}

      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup-user" element={<SignupUser />} />
        <Route path="/login-user" element={<LoginUser />} />
        <Route path="/signup-volunteer" element={<SignupVolunteer />} />
        <Route path="/login-volunteer" element={<LoginVolunteer />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/volunteer-dashboard/*" element={<VolunteerDashboard />} />
        window.location.href = '/user_dash.html';
        return null;
    
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default App;
