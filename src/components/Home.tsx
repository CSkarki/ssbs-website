import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-particles"></div>
      </div>
      
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          INNOVATIVE SOLUTIONS
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Empowering your business growth
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-description"
        >
          SSB Solutions LLC, based in Aldie, Virginia, has been at the forefront of data management and consulting for over 7 years. Originally starting as an individual endeavor, we evolved into a registered LLC in 2023. Our mission is to provide comprehensive services, including data migration, analytics, project management, and agile transformation, tailored to meet your unique business needs. We are committed to delivering excellence and driving growth for our clients through innovative solutions and expert guidance.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contact" className="cta-button">
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 