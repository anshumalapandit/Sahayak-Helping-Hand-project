// src/components/Navbar.jsx
import React from "react";
import logo from "../../assets/logo3.jpg";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-100 to-cyan-100 shadow-md sticky top-0 z-50 backdrop:blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img className="h-14 w-24" src={logo} alt="Volunteer Connect" />
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              Home
            </a>
            <a
              href="about"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              About Us
            </a>
            <a
              href="contact"
              className="text-gray-700 hover:text-orange-600 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
