import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginVolunteer = () => {
   const navigate = useNavigate(); // ✅ use the hook here
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/volunteers/login",
        formData
      );
      console.log("Login Success:", res.data);
      // Store token, redirect to dashboard, etc.
      // ✅ Navigate after success
    navigate("/volunteer-dashboard");
    console.log("Redirecting to dashboard...");
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
    }
    console.log("Volunteer Login Data:", formData);
    // TODO: Connect to backend auth
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">
          Volunteer Login
        </h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginVolunteer;
