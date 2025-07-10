import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>SSB Solutions LLC</h3>
            <p>Based in Aldie, Virginia</p>
            <p>7+ Years of Excellence</p>
          </div>
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li>AI & Machine Learning</li>
              <li>Data Analytics & Engineering</li>
              <li>Agile Transformation</li>
              <li>Data Migration</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <p>Ready to transform your business?</p>
            <p>Contact us today for innovative solutions.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SSB Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 