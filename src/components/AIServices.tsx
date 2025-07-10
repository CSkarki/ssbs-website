import React from 'react';
import { motion } from 'framer-motion';
import './AIServices.css';

const AIServices: React.FC = () => {
  const services = [
    {
      icon: '🧠',
      title: 'Enterprise AI Advisor',
      shortDesc: 'Transform your business with AI-driven insights and strategies.',
      description: 'The Enterprise AI Advisor empowers organizations to harness the power of artificial intelligence to drive innovation and efficiency. Our expert guidance helps you identify opportunities for AI integration, streamline processes, and enhance decision-making. With tailored solutions, we support your unique challenges, enabling you to leverage data analytics, predictive modeling, and automation effectively. Elevate your organization\'s performance and stay ahead of the competition with our comprehensive AI advisory services.'
    },
    {
      icon: '🏗️',
      title: 'AI/ML Solutions Architect',
      shortDesc: 'Design and implement advanced AI/ML solutions tailored to your needs.',
      description: 'Unlock the potential of your data with our AI/ML Solutions Architect service. We specialize in designing and implementing advanced artificial intelligence and machine learning solutions tailored to your unique business needs. Our team of experts will guide you through the entire process, from data assessment to model deployment, ensuring that you harness the power of AI effectively. By leveraging cutting-edge technologies and industry best practices, we help you make data-driven decisions that enhance efficiency and drive growth.'
    },
    {
      icon: '📚',
      title: 'Centralized Knowledge Repository',
      shortDesc: 'Streamline your information storage and access.',
      description: 'Transform the way your organization manages information with our Centralized Knowledge Repository. This innovative platform consolidates your data into one accessible location, breaking down silos and ensuring everyone has equal access to vital resources. With its intuitive interface, users can easily navigate through diverse information types, promoting seamless collaboration and knowledge sharing among teams. By facilitating quick retrieval of information, this repository empowers your organization to make informed decisions and enhance productivity.'
    },
    {
      icon: '🎓',
      title: 'Student\'s Learning Platform',
      shortDesc: 'Transforming the way Students Learn',
      description: 'Simplify your learning process with our AI-powered learning studio—designed to make note-taking and study organization faster, easier, and more intuitive. Our platform empowers students to engage with their studies more effectively, offering tools for collaboration, resource sharing, and personalized learning experiences. With a user-friendly interface, students can easily navigate through materials, track their progress, and access valuable insights that enhance their academic journey.'
    }
  ];

  return (
    <section className="ai-services">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Artificial Intelligence - Solutions & Services
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-subtitle"
        >
          Infuse AI/ML magic to transform your data into actionable insights
        </motion.p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <div className="short-desc">{service.shortDesc}</div>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServices; 