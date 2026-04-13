import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/ssbs-logo.png" alt="SSB Solutions LLC" className="footer-logo" />
          <p className="footer-tagline">
            AI, Data &amp; Agile consulting practice with a product studio at its core. Based in
            Arcola, Virginia, USA.
          </p>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li>
              <a href="https://aiadvisor.ssbsconsulting.com" target="_blank" rel="noreferrer">
                Will AI Replace My Job?
              </a>
            </li>
            <li>
              <a href="https://www.utsav-events.com" target="_blank" rel="noreferrer">
                Utsave
              </a>
            </li>
            <li>
              <a href="https://b2b-returns.ssbsconsulting.com" target="_blank" rel="noreferrer">
                Turnify
              </a>
            </li>
            <li>
              <a href="https://sqllab.ssbsconsulting.com" target="_blank" rel="noreferrer">
                SQL Practice
              </a>
            </li>
            <li>
              <Link to="/#product-invoice-processing">Invoice Processing (demo)</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ai-services">AI Services</Link></li>
            <li><Link to="/data-services">Data Services</Link></li>
            <li><Link to="/agile-services">Agile Services</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><Link to="/contact">Get in Touch</Link></li>
            <li><Link to="/contact">Book a Call</Link></li>
          </ul>
          <div className="footer-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Arcola, Virginia, USA
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 SSB Solutions LLC &middot; All rights reserved.</span>
        <span>AI · Data · Agile</span>
      </div>
    </footer>
  );
};

export default Footer;
