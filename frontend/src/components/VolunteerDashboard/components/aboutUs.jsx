import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6 text-center">
        About Us
      </h1>

      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          We are a group of passionate individuals dedicated to making the world more inclusive for people with disabilities.
          Many times, help is available — volunteers are ready — but due to lack of awareness or connection, help never reaches those in need.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          That’s why we created <span className="font-bold text-purple-700">Sahayak</span> — a platform that bridges this gap.
          It connects volunteers to people with disabilities, provides guidance on how to help them, and builds a supportive, empowered community.
          Together, we can make a difference — one act of kindness at a time. 🤝❤️
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
