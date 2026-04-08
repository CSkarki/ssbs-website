import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/ssbs-logo.png" alt="SSB Solutions Logo" className="logo-img" />
        </Link>
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link to="/ai-services" onClick={closeMobileMenu} className={location.pathname === '/ai-services' ? 'active' : ''}>
            AI Experts
          </Link>
          <Link to="/data-services" onClick={closeMobileMenu} className={location.pathname === '/data-services' ? 'active' : ''}>
            Data Experts
          </Link>
          <Link to="/agile-services" onClick={closeMobileMenu} className={location.pathname === '/agile-services' ? 'active' : ''}>
            Agile Experts
          </Link>
          <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} type="button" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 