import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignupVolunteer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    helpType: "",
    availability: "",
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
      confirmPassword: "",
      location: "",
      helpType: "",
      availability: "",
    });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/volunteers/signup",
        formData
      );
      console.log("Signup Success:", res.data);
      // navigate to login or dashboard
      alert("Signup successful!");
      // after successfully signed up it will navigate to login page
      navigate("/login-user");
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
    }
    console.log("Volunteer Sign Up Data:", formData);
    // TODO: Send to backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">
          Create Account as a Volunteer
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
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
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

        {/* Help Type Dropdown */}
        <select
          name="helpType"
          value={formData.helpType}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-600"
          required
        >
          <option value="">Select Help Type</option>
          <option value="mobility">Mobility Assistance</option>
          <option value="reading">Reading Help</option>
          <option value="guidance">Guidance & Navigation</option>
          <option value="digital">Digital Assistance</option>
          <option value="other">Other</option>
        </select>

        {/* Availability Dropdown */}
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg text-gray-600"
          required
        >
          <option value="">Preferred Availability</option>
          <option value="morning">Morning (8am - 12pm)</option>
          <option value="afternoon">Afternoon (12pm - 4pm)</option>
          <option value="evening">Evening (4pm - 8pm)</option>
        </select>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupVolunteer;
