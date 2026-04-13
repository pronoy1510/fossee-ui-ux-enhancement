import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Workshop<span>Hub</span></h3>
          <p>Empowering students through hands-on learning and professional workshops.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Browse Workshops</a></li>
            <li><a href="#">Become an Instructor</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p>IIT Bombay, FOSSEE Group</p>
          <p>Email: contact@workshophub.com</p>
          <div className="socials">
            <span className="icon">𝕏</span>
            <span className="icon">in</span>
            <span className="icon">ig</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 WorkshopHub. Developed for UI/UX Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
