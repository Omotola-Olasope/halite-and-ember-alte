import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  return (
    <footer className="dark-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Halite & Ember</h3>
          <p className="footer-text">"We are the salt of the earth and the light of the world. By preserving value and radiating light, we shape lasting legacies."</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-links">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/services" className="footer-link">Services</Link>
            <Link to="/uk-branch" className="footer-link">UK Branch</Link>
            <Link to="/nigerian-branch" className="footer-link">Nigeria Branch</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <Mail size={16} />
              <span>{mockData.company.email}</span>
            </div>
            {/*<div className="footer-contact-item">
              <Phone size={16} />
              <span>{mockData.company.phone}</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>{mockData.company.address}</span>
            </div>*/}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Halite & Ember Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;