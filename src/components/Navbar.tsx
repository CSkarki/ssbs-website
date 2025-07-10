import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          SSB Solutions LLC
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

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 