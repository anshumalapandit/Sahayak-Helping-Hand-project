import React from "react";
import "./Footer.css";
import logo from "../../assets/logo3.jpg";
import fb from "../../assets/facebook_icon.png";
import tw from "../../assets/twitter_icon.png";
import li from "../../assets/linkedin_icon.png";
export const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left w-40">
            <img className="" src={logo} alt="" />
            <p>
              Thank you for being a part of our mission to connect hearts and
              hands. Whether you're a volunteer or someone seeking help, this
              platform is built to support, empower, and,uplift.
            </p>
            <div className="footer-social-icons flex">
              <img src={fb} alt="" />
              <img src={tw} alt="" />
              <img src={li} alt="" />
            </div>
          </div>
          <div className="footer-content-right">
            <h2>COMPANY</h2>
            <ul>
              <a href="/">Home</a>
              <a href="">About us</a>
              <a href="">Contact us</a>
            </ul>
          </div>
          <div className="footer-content-center">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-212-456-3456</li>
              <li>Contact@volunteerConncet.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2025 © VolunteerConncet.com - All Right Reserved.
        </p>
      </div>
    </>
  );
};
