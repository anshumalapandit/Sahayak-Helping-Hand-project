import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleNavigation = (role) => {
    const hasAccount = window.confirm("Do you already have an account?");
    if (hasAccount) {
      if (role === "user") navigate("/login-user");
      else if (role === "volunteer") navigate("/login-volunteer");
    } else {
      if (role === "user") navigate("/signup-user");
      else if (role === "volunteer") navigate("/signup-volunteer");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
      <button
        onClick={() => handleNavigation("user")}
        className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl transition-all duration-200"
      >
        Join as a User
      </button>

      <button
        onClick={() => handleNavigation("volunteer")}
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl transition-all duration-200"
      >
        Join as a Volunteer
      </button>
    </div>
  );
};

export default Button;
