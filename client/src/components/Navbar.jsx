import React, { useState } from 'react';

import './componetscss/navbar.css';

import {
  FaBolt,
  FaPhoneAlt,
  FaBoxOpen,
  FaAward,
  FaImages,
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">

      {/* Logo */}
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">
          <FaBolt className="logo-bolt-icon" />
        </div>

        <div className="nav-logo-text">
          PARTHIVI <span>POWER</span>
        </div>
      </a>

      {/* Mobile Menu Button */}
      <div
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
          >
            <FaBoxOpen className="nav-link-icon" />
            Products
          </a>
        </li>

        <li>
          <a
            href="#why"
            onClick={() => setMenuOpen(false)}
          >
            <FaAward className="nav-link-icon" />
            Why Us
          </a>
        </li>

        <li>
          <a
            href="#showcase"
            onClick={() => setMenuOpen(false)}
          >
            <FaImages className="nav-link-icon" />
            Gallery
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            <FaEnvelope className="nav-link-icon" />
            Contact
          </a>
        </li>

        {/* Mobile Call Button */}
        <li className="mobile-call-btn">
          <a href="tel:8222015806">
            <FaPhoneAlt />
            Call Now
          </a>
        </li>

      </ul>

      {/* Desktop CTA */}
      <a
        href="tel:8222015806"
        className="nav-cta"
      >
        <FaPhoneAlt className="cta-phone-icon" />
        Call Now
      </a>

    </nav>
  );
}

export default Navbar;
