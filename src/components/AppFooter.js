// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../App.css';  

const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-app-stores">
      <div className="store-badge">
 <img src="/images/applestore.svg" alt="Download on the App Store" />
</div>
<div className="store-badge">
  <img src="/images/google-play-badge.png" alt="Get it on Google Play" />
</div>
<div className="store-badge">
  <img src="/images/microsoft.jpeg" alt="Get it from Microsoft" />
</div>

       
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Watch</h4>
          <ul>
            <li>Netflix</li>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>New</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>My Account</h4>
          <ul>
            <li>My Account</li>
            <li>Account</li>
            <li>Settings</li>
            <li>Manage Devices</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li>Lists</li>
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Available Anywhere</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Contact Us</li>
            <li>Jobs</li>
          </ul>
        </div>
      </div>
      <div className="footer-social-media">
        <FaFacebook className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaLinkedin className="social-icon" />
      </div>
    </footer>
  );
};

export default AppFooter;
