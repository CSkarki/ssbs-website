import React from 'react';
import { motion } from 'framer-motion';
import './DataServices.css';

const DataServices: React.FC = () => {
  const solutions = [
    {
      icon: '📊',
      title: 'Data Migration and Data Conversion',
      shortDesc: 'Seamlessly transition your data with our expert migration and conversion solutions.',
      description: 'Our Data Migration and Data Conversion services ensure that your valuable data is transferred securely and efficiently. We understand the complexities involved in moving data from one system to another, which is why we tailor our approach to meet your specific needs. Our experienced team utilizes industry best practices to minimize downtime and data loss while ensuring that your data remains accessible and usable throughout the process. Trust us to manage your migration projects, allowing you to focus on your core business activities.'
    },
    {
      icon: '📈',
      title: 'Data Analytics and Data Engineering',
      shortDesc: 'Unlock insights and enhance decision-making with robust data analytics solutions.',
      description: 'Leverage the power of data with our Data Analytics and Data Engineering services. We transform raw data into actionable insights, enabling your organization to make informed decisions that drive growth. Our team of skilled data engineers and analysts work collaboratively to design and implement data pipelines, ensuring your data is clean, reliable, and readily available. With advanced analytics techniques, we help you uncover trends and patterns that can significantly impact your strategic planning. Empower your business with data-driven solutions that foster innovation and competitive advantage.'
    }
  ];

  return (
    <section className="data-services">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          TAILORED SOLUTIONS
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-subtitle"
        >
          Empowering your business with data
        </motion.p>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="solution-card"
            >
              <div className="solution-header">
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
              </div>
              <div className="short-desc">{solution.shortDesc}</div>
              <p>{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataServices; 