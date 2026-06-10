import React, { useState } from 'react';

import '../components/componetscss/contact.css';

import { FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,  FaBuilding, FaPaperPlane, BsClockHistory } from 'react-icons/fa'; 

function Contact() {
  
  const [formData, setFormData] = useState({ name: '', phone: '', product: '', message: '', email: '' });

  const handleSubmit = async (e) => {
  e.preventDefault(); 

  try {
    
    const response = await fetch('https://parthivi-power-solution.onrender.com/api/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      
      alert(`Thank you ${formData.name}! Your enquiry has been sent successfully. Anshul Kamboj will contact you shortly.`);
      
      
      setFormData({ name: '', phone: '', product: '', message: '', email: ''});
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
      <FaUser className="contact-icon-small" /> Managing Director
    </div>
    <div className="contact-block-value">
      Anshul Kamboj
    </div>
  </div>

  <div className="contact-block">
    <div className="contact-block-label">
      <FaPhoneAlt className="contact-icon-small" /> Contact Number
    </div>
    <div className="contact-block-value">
      <a href="tel:8222015806">
        +91 82220 15806
      </a>
    </div>
  </div>

  <div className="contact-block">
    <div className="contact-block-label">
      <FaPhoneAlt className="contact-icon-small" /> Office Number
    </div>
    <div className="contact-block-value">
      <a href="tel:9996324590">
        +91 9996324590
      </a>
    </div>
  </div>

  <div className="contact-block">
    <div className="contact-block-label">
      <FaEnvelope className="contact-icon-small" />
      Email
    </div>
    <div className="contact-block-value">
      parthivipowersolution@gmail.com
    </div>
  </div>

  <div className="contact-block">
    <div className="contact-block-label">
       <FaMapMarkerAlt className="contact-icon-small" />
      Office Address
    </div>
    <div className="contact-block-value">
      Parthivi Power Solution<br />
      Behind SBI Bank, Buria Chowk, Jadadhri,<br>Yamunanagar (HR), India</br>
    </div>
  </div>

  <div className="contact-block">
    <div className="contact-block-label">
      Working Hours
    </div>
    <div className="contact-block-value">
     <BsClockHistory className="contact-icon-small" /> Monday - Saturday<br />
      9:00 AM – 6:00 PM
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
