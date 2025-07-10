import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const aboutCards = [
  {
    icon: '📊',
    title: 'Data',
    headline: 'Unlock Insights. Drive Results.',
    desc: 'We turn raw information into actionable intelligence with robust data pipelines and analytics platforms—empowering smarter, faster decisions.',
    accent: 'data'
  },
  {
    icon: '🤖',
    title: 'AI',
    headline: 'Automate. Predict. Innovate.',
    desc: 'Practical AI and automation solutions—from predictive analytics to intelligent workflows—helping you stay ahead in a fast-changing world.',
    accent: 'ai'
  },
  {
    icon: '⚡',
    title: 'Agile',
    headline: 'Move Fast. Deliver Value.',
    desc: 'We empower teams to adapt, collaborate, and deliver faster. Our agile coaching and transformation services build a culture of continuous improvement and customer focus.',
    accent: 'agile'
  }
];

const About: React.FC = () => {
  return (
    <section className="about about-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-content about-content-row"
        >
          <div className="about-top">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Excellence in Data, AI, and Agile Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="about-lead"
            >
              We help organizations unlock the full potential of their data, embrace the power of AI, and thrive with agile ways of working. Our proven track record spans successful projects in analytics, automation, and business transformation for clients across diverse industries.
            </motion.p>
            <div className="about-cards-row-wrapper">
              <div className="about-image-bg">
                <div className="image-placeholder-bg">🌐</div>
              </div>
              <div className="about-cards-horizontal tight">
                {aboutCards.map((card, idx) => (
                  <motion.div
                    className={`about-card-horizontal about-card-${card.accent}`}
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                  >
                    <div className="about-card-icon">{card.icon}</div>
                    <div>
                      <div className="about-card-title">{card.title}</div>
                      <div className="about-card-headline">{card.headline}</div>
                      <div className="about-card-desc">{card.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="about-commitment"
            >
              Our commitment: quality, transparency, and real results. Let’s build your next success story—together.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
