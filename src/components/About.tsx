import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <div className="about-text">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              7+ Years of Excellence
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              SSB Solutions LLC has been transforming businesses through innovative data management and consulting solutions. Based in Aldie, Virginia, we've evolved from an individual consultancy to a registered LLC, maintaining our commitment to delivering exceptional results.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our comprehensive approach combines cutting-edge technology with deep industry expertise to help organizations harness the power of their data, streamline operations, and achieve sustainable growth.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              From data migration and analytics to agile transformation and AI implementation, we provide tailored solutions that drive real business value and competitive advantage.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-image"
          >
            <div className="image-placeholder">🏢</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 