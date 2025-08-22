import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com';

const HelpRequestPage = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: 'Ravi Kumar',
      location: 'Pune, Maharashtra',
      reason: 'Needs help writing an exam due to vision issues.',
      contact: '9876543210',
      email: 'its.anshuuz2753@gmail.com',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Meena Joshi',
      location: 'Nagpur, Maharashtra',
      reason: 'Requires assistance to travel for a hospital visit.',
      contact: '9123456780',
      email: 'anshumalapandit@gmail.com',
      status: 'pending',
    },
  ]);

  const volunteer = {
    name: 'Rahul Volunteer',
    contact: '9876543211',
    email: 'its.anshuuz2753@gmail.com',
  };

  const sendEmailToVolunteer = (volunteer, user) => {
    emailjs
      .send(
        'service_h6zr4yq',        // ✅ Your EmailJS service ID
        'template_41kwd3a',     // ✅ Volunteer template ID
        {
          volunteer_name: volunteer.name,
          user_name: user.name,
          user_location: user.location,
          user_reason: user.reason,
          user_contact: user.contact,
          user_email: user.email,
          volunteer_email: volunteer.email,
        },
        '5uYi2mAsxiiFfHlXq'       // ✅ Your public key
      )
      .then((res) => console.log('Email to volunteer sent ✅', res))
      .catch((err) => console.error('Volunteer email error ❌', err));
  };

  const sendEmailToUser = (volunteer, user) => {
    emailjs
      .send(
        'service_h6zr4yq',        // ✅ Your EmailJS service ID
        'template_r2ccxkd',          // ✅ User template ID
        {
          user_name: user.name,
          volunteer_name: volunteer.name,
          volunteer_contact: volunteer.contact,
          volunteer_email: volunteer.email,
        },
        '5uYi2mAsxiiFfHlXq'       // ✅ Your public key
      )
      .then((res) => console.log('Email to user sent ✅', res))
      .catch((err) => console.error('User email error ❌', err));
  };

  const handleAccept = (id) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: 'accepted' } : req))
    );

    const acceptedRequest = requests.find((req) => req.id === id);
    if (acceptedRequest) {
      sendEmailToVolunteer(volunteer, acceptedRequest);
      sendEmailToUser(volunteer, acceptedRequest);
      alert(`Emails sent to ${acceptedRequest.email} and ${volunteer.email}`);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-red-50 to-blue-100 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-red-800 text-white text-center py-6 px-4">
        <h1 className="text-3xl font-bold">Volunteer Help Requests</h1>
        <p className="mt-2 italic text-red-100">
          "Helping one person might not change the whole world, but it could change the world for one person."
        </p>
      </div>

      {/* Content */}
      <main className="flex-grow container mx-auto px-6 py-10 max-w-4xl">
        {requests.length === 0 ? (
          <div className="bg-white shadow-md rounded-lg p-6 text-center text-blue-800 text-lg font-semibold">
            No help requests at the moment.
          </div>
        ) : (
          <div className="space-y-6">
            {requests.map((req) => (
              <div
                key={req.id}
                className="bg-white rounded-xl shadow-md p-6 border border-red-300"
              >
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                  {req.name} - {req.location}
                </h3>
                <p className="text-blue-700 mb-2">{req.reason}</p>
                <p className="text-blue-700">Contact: {req.contact}</p>
                <p className="text-blue-700 mb-4">Email: {req.email}</p>
                {req.status === 'accepted' ? (
                  <span className="text-green-600 font-semibold">
                    You have accepted this request ✅
                  </span>
                ) : (
                  <button
                    onClick={() => handleAccept(req.id)}
                    className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md shadow-md"
                  >
                    Accept Request
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-red-800 text-red-100 py-6 mt-auto">
        <div className="container mx-auto px-6 text-center text-sm">
          © 2024 Sahayak. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HelpRequestPage;
