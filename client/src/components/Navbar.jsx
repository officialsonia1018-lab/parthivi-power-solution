import React from 'react';

import './componetscss/navbar.css';

import { 
  FaCcDiscover, 
  FaBolt, 
  FaPhoneAlt, 
  FaBoxOpen, 
  FaAward, 
  FaImages, 
  FaEnvelope 
} from 'react-icons/fa'; 

function Navbar() {
  return (
    <nav className="navbar-container">
      {/* Logo Section */}
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">
          <FaBolt className="logo-bolt-icon" />
        </div>
        <div className="nav-logo-text">PARTHIVI <span>POWER</span></div>
      </a>

      {/* Navigation Links with Icons */}
      <ul className="nav-links">
        <li>
          <a href="#products">
            <FaBoxOpen className="nav-link-icon" /> Products
          </a>
        </li>
        <li>
          <a href="#why">
            <FaAward className="nav-link-icon" /> Why Us
          </a>
        </li>
        <li>
          <a href="#showcase">
            <FaImages className="nav-link-icon" /> Gallery
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope className="nav-link-icon" /> Contact
          </a>
        </li>
      </ul>

      {/* CTA Button */}
      <a href="tel:8222015806" className="nav-cta">
        <FaPhoneAlt className="cta-phone-icon" /> Call Now
      </a>
    </nav>
  );
}

export default Navbar;