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
          <a href="/#products" onClick={closeMobileMenu}>
            Products
          </a>
          <a href="/#services" onClick={closeMobileMenu}>
            Services
          </a>
          <Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
          <Link to="/contact" onClick={closeMobileMenu} className="nav-cta">
            Talk to Us
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