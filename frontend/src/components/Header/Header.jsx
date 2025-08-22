import React from "react";
import introVideo from "../../assets/video.mp4";

const Header = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={introVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Overlay content (text or buttons) */}
    </header>
  );
};

export default Header;
