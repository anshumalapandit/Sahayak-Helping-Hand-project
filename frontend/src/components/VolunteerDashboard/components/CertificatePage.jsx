import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CertificatePage = () => {
  const [hasCertificate, setHasCertificate] = useState(false); // simulate help status
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/volunteer-dashboard/help'); // Redirect to help page
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 via-red-100 to-blue-200 min-h-screen flex flex-col">
      <div className="bg-red-800 text-white shadow-md text-center py-6 px-4">
        <h1 className="text-3xl font-bold">Volunteer Certificate</h1>
        <p className="mt-2 italic text-red-100 max-w-3xl mx-auto">
          <b>"Helping one person might not change the whole world, but it could change the world for one person."</b>
        </p>
      </div>

      <main className="flex-grow container mx-auto px-6 py-12 max-w-3xl">
        <section className="bg-white rounded-xl shadow-lg p-8 text-center">
          {hasCertificate ? (
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-4">Your Certificate</h2>
              <img
                src="https://storage.googleapis.com/a1aa/image/sample-certificate.jpg"
                alt="Certificate"
                className="mx-auto border border-blue-300 rounded-lg shadow-md"
              />
            </div>
          ) : (
            <div>
              <p className="text-xl text-red-700 font-semibold mb-6">
                You haven't helped any user yet.
              </p>
              <button
                onClick={handleRedirect}
                className="bg-blue-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition"
              >
                Go to Help Page
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-red-800 text-blue-100 py-6 mt-auto">
        <div className="container mx-auto px-6 text-center text-sm">
          © 2024 Sahayak. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CertificatePage;
