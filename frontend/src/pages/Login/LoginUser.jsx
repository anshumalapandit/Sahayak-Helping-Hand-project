import React, { useState } from "react";
import axios from "axios";

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: connect to backend for authentication
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );
      console.log("Login Success:", res.data);
      // Store token, redirect to dashboard, etc.
     // After successful authentication
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("userData", JSON.stringify(res.data.user));
      
      // Redirect to dashboard
  window.location.href = "/user_dash.html"; // Redirect to HTML file
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
    }
    console.log("User Login Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-orange-700 text-center">
          User Login
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
          className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-700 transition"
        >
          Login
        </button>
        <p className=" mt-4 text-sm text-center">
          Don't have an account ?{" "}
          <a className="text-blue-400 hover:underline" href="/sign-up">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginUser;
