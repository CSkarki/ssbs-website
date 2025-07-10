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
          Empowering Your Business with Smart Solutions
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Unlock growth, efficiency, and innovation with tailored AI, Data, and Agile services.
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-description"
        >
          We help forward-thinking organizations solve real business challenges—fast. Whether you want to automate workflows, gain actionable insights from your data, or accelerate digital transformation, our experts deliver practical solutions that drive measurable results.<br /><br />
          <strong>AI & Automation:</strong> Streamline operations and boost productivity.<br />
          <strong>Data Analytics:</strong> Turn information into actionable insights.<br />
          <strong>Agile Transformation:</strong> Adapt quickly and outperform the competition.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contact" className="cta-button">
            Get a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 