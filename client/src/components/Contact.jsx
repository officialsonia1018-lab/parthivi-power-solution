import React, { useState } from 'react';

import '../components/componetscss/contact.css';


import { FaUser, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'; 

function Contact() {
  
  const [formData, setFormData] = useState({ name: '', phone: '', product: '', message: '', email: '' });

  const handleSubmit = async (e) => {
  e.preventDefault(); 

  try {
    
    const response = await fetch('http://localhost:5000/api/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      
      alert(`Thank you ${formData.name}! Your enquiry has been sent successfully. Anshul Kamboj will contact you shortly.`);
      
      
      setFormData({ name: '', phone: '', product: '', message: '' });
    } else {
      // Agar server se koi error aaye
      alert(result.message || "Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Frontend Error:", error);
    alert("Unable to connect to the server. Please ensure backend is running.");
  }
};

  return (
    <section id="contact">
      <div className="center">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">Contact <span>Us</span></h2>
      </div>

      <div className="contact-wrap">
        {/* Left Side: Professional Contact Details */}
        <div className="contact-info">
          <div className="contact-block">
            <div className="contact-block-label">
              <FaUser className="contact-icon-small" /> Owner
            </div>
            <div className="contact-block-value">Anshul Kamboj</div>
          </div>
          <div className="contact-block">
            <div className="contact-block-label">
              <FaPhoneAlt className="contact-icon-small" /> Phone / WhatsApp
            </div>
            <div className="contact-block-value">
              <a href="tel:8222015806">+91 82220-15806</a>
            </div>
          </div>
        </div>

        {/* Right Side: Dynamic Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-label">Your Name</label>
            <input 
              type="text" 
              className="form-input" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g. Rahul Sharma" 
              required
            />
          </div>
          <div className="form-row">
            <label className="form-label">Phone Number</label>
            <input 
              type="tel" 
              className="form-input" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="Your mobile number" 
              required
            />
          </div>

         <div className="form-row">
  <label className="form-label">Email</label>

  <input
    type="email"
    className="form-input"
    value={formData.email}
    onChange={(e) =>
      setFormData({
        ...formData,
        email: e.target.value
      })
    }
    required
  />
</div>
          <div className="form-row">
  <label className="form-label">
    Product
  </label>

  <input
    type="text"
    className="form-input"
    value={formData.product}
    onChange={(e) =>
      setFormData({
        ...formData,
        product: e.target.value
      })
    }
    placeholder="Product Name"
    required
  />
</div>
          <div className="form-row">
  <label className="form-label">
    Description
  </label>

  <textarea
    className="form-input"
    value={formData.message}
    onChange={(e) =>
      setFormData({
        ...formData,
        message: e.target.value
      })
    }
    placeholder="Enter your enquiry details"
    required
  />
</div>
          
          {/* Button ke andar modern lightning icon ya paper plane icon wrapper */}
          <button type="submit" className="form-submit">
            <FaPaperPlane className="submit-btn-icon" /> Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;