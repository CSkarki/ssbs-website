import React from 'react';
import { motion } from 'framer-motion';
import './AgileServices.css';

const AgileServices: React.FC = () => {
  const services = [
    {
      icon: '🔄',
      title: 'Agile Transformation Consulting',
      shortDesc: 'Transform your organization with expert Agile consulting services.',
      description: 'Unlock the full potential of your organization with our Agile Transformation Consulting. We guide teams through the transition to Agile methodologies, fostering a culture of collaboration and continuous improvement. Our experienced consultants assess your current processes and tailor solutions that fit your unique needs. By implementing Agile practices, we help you enhance productivity, accelerate delivery, and improve customer satisfaction. Embrace the flexibility and responsiveness that Agile provides, and watch your organization thrive in a fast-paced environment.'
    },
    {
      icon: '🎯',
      title: 'Agile Enterprise Coach, Training and Professional Services',
      shortDesc: 'Transform your organization with expert Agile coaching and training.',
      description: 'Unlock the full potential of your organization with our Agile Enterprise Coach, Training and Professional Services. Our experienced coaches guide teams through the Agile methodology, fostering a culture of collaboration, adaptability, and innovation. We provide tailored training sessions that empower your workforce with the skills necessary to embrace Agile practices effectively. By integrating Agile principles, your teams will enhance productivity, improve project outcomes, and respond swiftly to changing market demands. Partner with us to cultivate a responsive and high-performing organization that thrives in today\'s dynamic environment.'
    }
  ];

  return (
    <section className="agile-services">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          AGILE SOLUTIONS
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-subtitle"
        >
          Transform your operations with expert guidance
        </motion.p>
        
        <div className="solutions-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="solution-card"
            >
              <div className="solution-header">
                <div className="solution-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <div className="short-desc">{service.shortDesc}</div>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgileServices; 