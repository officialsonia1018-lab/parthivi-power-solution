import React from 'react';

import '../components/componetscss/footer.css';
import { 
  FaInstagram, 
  FaYoutube, 
  FaFacebookF, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        {/* Column 1: Brand Info */}
        <div className="footer-brand">
          <div className="footer-logo-text">PARTHIVI <span>POWER</span></div>
          <p>Your authorized power solutions partner in Yamunanagar, Haryana.</p>
        </div>

        {/* Column 2: Products Links */}
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><a href="#products">Generators</a></li>
            <li><a href="#products">Servo Stabilizers</a></li>
            <li><a href="#products">Transformers</a></li>
            <li><a href="#products">Electric Panels</a></li>
             <li><a href="#products">Switchgear</a></li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <ul>
            <li>
              <a href="https://www.instagram.com/parthivi_power_solution?igsh=YjByM2Fpcm94dTZw&utm_source=qr" target="_blank" rel="noreferrer">
                <FaInstagram className="icon-style insta-icon" /> Instagram
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@parthivipowersolution?si=O6yAmfqltK3wYrTo" target="_blank" rel="noreferrer">
               <FaYoutube className="icon-style yt-icon" /> YouTube
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/1Kf5CkP3NA/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
               <FaFacebookF className="icon-style fb-icon" /> Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div className="footer-col contact-info-col">
          <h4>Contact Info</h4>
          <ul>
            <li><FaMapMarkerAlt className="icon-style contact-icon" /> <p>Behind SBI Bank, Buria Chowk, Jagadhri, Yamuna Nagar (HR)</p></li>
            <li>
              <FaPhoneAlt className="icon-style contact-icon" /> <a href="tel:8222015806">+91 82220-15806</a>
            </li>
            <li>
              <FaEnvelope className="icon-style contact-icon" /> <a href="mailto:parthivipowersolution@gmail.com">parthivipowersolution@gmail.com.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <strong>Parthivi Power Solution</strong>. All Rights Reserved.</p>
      </div>

      {/* Floating Call Button */}
      <a href="tel:8222015806" className="floating-call"><FaPhoneAlt /></a>
    </footer>
  );
}

export default Footer;
