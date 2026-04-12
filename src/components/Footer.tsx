import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <img src="/ssbs-logo.png" alt="SSB Solutions Logo" className="logo-img" />
            <p>AI, Data, and Agile consulting with a product studio mindset.</p>
          </div>
          <div className="footer-services">
            <h4>Products</h4>
            <ul>
              <li><a href="https://aiadvisor.ssbsconsulting.com" target="_blank" rel="noreferrer">Will AI Replace My Job?</a></li>
              <li><a href="https://www.utsav-events.com" target="_blank" rel="noreferrer">Utsave</a></li>
              <li><a href="https://b2b-returns.ssbsconsulting.com" target="_blank" rel="noreferrer">Turnify</a></li>
              <li><a href="https://sqllab.ssbsconsulting.com" target="_blank" rel="noreferrer">SQL Practice</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/ai-services">AI Services</Link></li>
              <li><Link to="/data-services">Data Services</Link></li>
              <li><Link to="/agile-services">Agile Services</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 SSB Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 