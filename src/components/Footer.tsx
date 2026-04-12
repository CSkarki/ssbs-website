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
          <a
            href="https://www.linkedin.com/company/ssb-solutions-llc"
            target="_blank"
            rel="noreferrer"
            className="footer-linkedin"
            aria-label="SSB Solutions LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
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
