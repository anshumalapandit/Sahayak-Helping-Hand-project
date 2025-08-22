import React from 'react';
import{ Routes, Route ,useNavigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import Clubs from './components/clubs';
import Heroslider from './components/Heroslider'; // make sure the path is correct
import DonationPage from './components/DonationPage';
import CertificatePage from './components/CertificatePage';
import HelpRequestPage from './components/HelpRequestPage';
import LearnPage from './components/LearnPage';
import { useLocation } from "react-router-dom";
import Chatbot from './components/Chatbot'; // make sure the path is correct

const Home = () => (
  <div>
    {/* Video section */}
    {/* <video
      src={video}
      autoPlay
      muted
      loop
      style={{
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
      }}
    /> */}
    <Heroslider />

    {/* Text below video */}
    {/* <div className="text-center mt-4">Welcome to our platform!</div> */}
  </div>
);

const App = () => {
     const location = useLocation();
       const navigate = useNavigate();
// Show Back button on ALL volunteer dashboard pages EXCEPT home
  const showBackButton =
    location.pathname.startsWith("/volunteer-dashboard/") &&
    location.pathname !== "/volunteer-dashboard/";

   // Footer will show ONLY on this path
  const showFooterOnlyOnVolunteerHome = location.pathname === "/volunteer-dashboard/";

  return (
    <>
      <Navbar />
       {/* Back to Home button */}
      {showBackButton && (
        <div className="text-center mt-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={() => navigate("/volunteer-dashboard/")}
          >
            {/* ⬅ Back to Home */}
          </button>
        </div>
          )}
      {/* Content area below navbar */}
       {/* <div className="pt-20" style={{marginTop:'80px'}}> push content below fixed navbar */}
      <div style={{ marginTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/certificates" element={<CertificatePage />} />
          <Route path="/help" element={<HelpRequestPage />} />
          <Route path="/learn" element={<LearnPage />} />
          {/* <Route path="/chatbot" element={<chatbot />} /> */}
          {/* Add more routes as needed */}
        </Routes>
        </div>

        {/* Show footer only on volunteer-dashboard home */}
      {showFooterOnlyOnVolunteerHome && <Footer />}
      <Chatbot />
    </>
  );
};

export default App;
