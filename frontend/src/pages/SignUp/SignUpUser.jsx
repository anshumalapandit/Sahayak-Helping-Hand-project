import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    location: "",
    phone: "",
    disabilityType: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      email: "",
      password: "",
      location: "",
      phone: "",
      disabilityType: "",
      preferredTime: "",
    });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/signup",
        formData
      );
      console.log("Signup Success:", res.data);
      alert("Signup successful!");
      // after successfully signed up it will navigate to login page
      navigate("/login-user");

      // navigate to login or dashboard
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
    }
    console.log("User Signup Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-cyan-700 text-center">
          Create Account As a User
        </h2>

        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />

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
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />

        <input
          name="location"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          required
        />

        {/* Disability Type Dropdown */}
        <select
          name="disabilityType"
          value={formData.disabilityType}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-600"
          required
        >
          <option value="">Select Disability Type</option>
          <option value="physical">Physical</option>
          <option value="visual">Visual</option>
          <option value="hearing">Hearing</option>
          <option value="speech">Speech</option>
          <option value="cognitive">Cognitive</option>
          <option value="other">Other</option>
        </select>

        {/* Preferred Help Time Dropdown */}
        <select
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg text-gray-600"
          required
        >
          <option value="">Preferred Help Time</option>
          <option value="morning">Morning (8am - 12pm)</option>
          <option value="afternoon">Afternoon (12pm - 4pm)</option>
          <option value="evening">Evening (4pm - 8pm)</option>
          <option value="soon">Will Convey on Phone Call</option>
        </select>

        <button
          type="submit"
          className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupUser;
