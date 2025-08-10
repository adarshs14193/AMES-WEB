import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col footer-brand">
          {/* <img src="/ames_or.png" alt="AMES Logo" className="footer-logo" /> */}
          <div className="footer-ames-title"><img src="/ames_or.png" alt="AMES Logo" className="footer-logo" /></div>
          <div className="footer-ames-desc">
            Association of Mechanical Engineering Students (AMES),<br />
            Department of Mechanical Engineering, NITK
          </div>
        </div>
        <div className="footer-col footer-links">
          <div className="footer-links-title">User Link</div>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="#">Order Delivery</a></li>
            <li><a href="#">Payment &amp; Tax</a></li>
            <li><a href="#">Terms of Services</a></li>
          </ul>
        </div>
        <div className="footer-col footer-contact">
          <div className="footer-links-title">Contact Us</div>
          <div className="footer-contact-desc">
            Department of Mechanical Engineering,<br />
            NITK, NH 66, Srinivasnagar, Surathkal,<br />
            Mangalore, Karnataka - 575 025
          </div>
          <div className="footer-social-icons">
            <a href="#" className="footer-social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="footer-social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-copyright">©2025 AMES, NITK, All rights reserved</div>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

