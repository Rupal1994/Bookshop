import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">
            Bringing the rich heritage of Indian culture to your doorstep through
            timeless books on mythology, spirituality, history, and more.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Categories</h3>
          <ul className="footer-list">
            <li>Mythology</li>
            <li>Spirituality</li>
            <li>Indian History</li>
            <li>Philosophy</li>
            <li>Art & Culture</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Customer Service</h3>
          <ul className="footer-list">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="footer-text">Subscribe for the latest updates and offers!</p>
          <form onSubmit={(e) => e.preventDefault()} className="footer-form">
            <input
              type="email"
              placeholder="Your email"
              className="footer-input"
              required
            />
            <button type="submit" className="footer-button">Subscribe</button>
          </form>
          <div className="footer-social-icons">
            <a href="#facebook" aria-label="Facebook" className="social-icon"><FaFacebookF /></a>
            <a href="#twitter" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
            <a href="#instagram" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
            <a href="#linkedin" aria-label="LinkedIn" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <p>© 2025 Indian Bookshop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
