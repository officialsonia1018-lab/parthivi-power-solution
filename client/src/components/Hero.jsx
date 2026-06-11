import React from 'react';

import '../components/componetscss/hero.css';


import { 
  FaArrowRight, 
  FaFileInvoiceDollar, 
  FaCheckCircle, 
  FaClock, 
  FaTools, 
  FaBuilding 
} from 'react-icons/fa'; 

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-particles" id="particles"></div>
      <div className="hero-content">
        <div className="hero-badge">Authorized Dealer · Yamunanagar, Haryana</div>
        <h1 className="hero-title">
          <span className="line1">PARTHIVI</span>
          <span className="line2">POWER SOLUTION</span>
          <span className="line3">Energizing Tomorrow</span>
        </h1>
        <p className="hero-sub">
          Your trusted partner for <strong>Generators, Servo Stabilizers, Transformers</strong> &amp; Electric Panels.<br/>
          Authorized Dealer of <strong>Sudhir Generators</strong> &amp; <strong>Chit Company</strong> products.
        </p>
        
        {/* Buttons with Micro-Icons */}
        <div className="hero-btns">
          <a href="#products" className="btn-primary">
            Explore Products <FaArrowRight className="btn-icon-right" />
          </a>
          <a href="#contact" className="btn-outline">
            <FaFileInvoiceDollar className="btn-icon-left" /> Get a Quote
          </a>
        </div>
        
        {/* Stats with Clean Icons */}
        <div className="hero-stats">
          <div className="stat">
            <FaBuilding className="stat-icon" />
            <div className="stat-num">500+</div>
            <div className="stat-label">Installations</div>
          </div>
          <div className="stat">
            <FaTools className="stat-icon" />
            <div className="stat-num">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <FaCheckCircle className="stat-icon" />
            <div className="stat-num">100%</div>
            <div className="stat-label">Genuine Parts</div>
          </div>
          <div className="stat">
            <FaClock className="stat-icon" />
            <div className="stat-num">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
