
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>DriveX Motors</h3>
          <p>
            DriveX Motors offers premium quality cars with affordable prices,
            easy financing, and trusted customer service.
          </p>
        </div>

        <div className="footer-links-group">
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5>Our Services</h5>
            <ul>
              <li>New Car Sales</li>
              <li>Used Cars</li>
              <li>Car Financing</li>
              <li>Insurance</li>
              <li>Test Drive</li>
              <li>Car Servicing</li>
            </ul>
          </div>

          <div>
            <h5>Contact Us</h5>
            <p>Jaipur, Rajasthan</p>
            <p>+91 9876543210</p>
            <p>info@drivexmotors.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DriveX Motors. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
