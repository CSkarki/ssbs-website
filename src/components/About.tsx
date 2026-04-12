import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const credentials = [
  { label: 'SAFe SPC', desc: 'SAFe® Program Consultant' },
  { label: 'SAFe SSM', desc: 'Scrum Master' },
  { label: 'SAFe POPM', desc: 'Product Owner / Product Manager' },
  { label: 'AWS Certified', desc: 'Cloud Practitioner' },
  { label: 'IASA', desc: 'IT Architecture' },
  { label: '10+ Years', desc: 'Enterprise delivery' },
];

const expertise = [
  {
    icon: '🧠',
    title: 'AI Strategy & GenAI',
    desc: 'Guiding enterprises from AI readiness assessments to production GenAI and LLM integrations that generate measurable business value.',
  },
  {
    icon: '📊',
    title: 'Data Engineering & Analytics',
    desc: 'Designing modern data platforms, ERP analytics pipelines, and BI solutions — from SAP S/4 reporting to cloud-native data stacks.',
  },
  {
    icon: '⚡',
    title: 'Agile & SAFe Transformation',
    desc: 'Coaching executives, teams, and release trains through SAFe and Scrum transformations that stick — practical delivery over theory.',
  },
  {
    icon: '🚀',
    title: 'Product Studio',
    desc: 'Founder of 4 live products (AI advisor, event tech, B2B SaaS, EdTech) — bringing a builder\'s mindset to every consulting engagement.',
  },
];

const philosophy = [
  'Ship real things — consulting that never produces working software isn\'t consulting, it\'s theater.',
  'AI-first by design — not bolted on as an afterthought, but embedded in the core of how we build.',
  'Earned trust over assumed authority — we prove value early, then scale the engagement.',
  'Enterprise depth, startup speed — big-company experience with the urgency of a product studio.',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const About: React.FC = () => {
  return (
    <main className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-container">
          <motion.div {...fadeUp(0)} className="about-hero-inner">
            <div className="about-hero-copy">
              <p className="about-eyebrow">About SSB Solutions LLC</p>
              <h1>We don't just advise.<br /><em>We ship.</em></h1>
              <p className="about-hero-lead">
                SSB Solutions is an AI, Data &amp; Agile consulting firm — and a product studio.
                We are a team of senior practitioners who have spent 10+ years inside large
                enterprises navigating the same complexity our clients face. We know what it takes
                to move organizations from strategy to working software in production.
              </p>
              <div className="about-hero-actions">
                <Link to="/contact" className="btn btn-primary">Book a Discovery Call →</Link>
                <a href="#expertise" className="btn btn-outline">Our Expertise</a>
              </div>
            </div>

            {/* Headshot / photo placeholder */}
            <div className="about-photo-wrap">
              <div className="about-photo-placeholder" aria-label="Founder photo">
                <span className="about-photo-initials">CK</span>
                <div className="about-photo-ring" />
              </div>
              <div className="about-photo-caption">
                <strong>Suman Karki</strong>
                <span>Founder &amp; Principal Consultant</span>
                <span>Aldie, Virginia, USA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CREDENTIALS ── */}
      <div className="about-section-divider" />
      <section className="about-credentials-section">
        <div className="about-container">
          <motion.div {...fadeUp(0.1)}>
            <p className="about-eyebrow">Credentials &amp; Certifications</p>
            <div className="credentials-grid">
              {credentials.map((c) => (
                <div className="credential-chip" key={c.label}>
                  <div className="credential-label">{c.label}</div>
                  <div className="credential-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <div className="about-section-divider" />
      <section id="expertise" className="about-section">
        <div className="about-container">
          <motion.div {...fadeUp(0.1)}>
            <p className="about-eyebrow">Areas of Expertise</p>
            <h2 className="about-section-title">Built from years of doing<br />the actual work.</h2>
            <p className="about-section-sub">
              Our consulting is grounded in real delivery experience — not slide decks. We have led
              AI implementations, data platform builds, Agile transformations, and shipped 4 live
              software products across consumer, B2B SaaS, and EdTech.
            </p>
          </motion.div>
          <div className="expertise-grid">
            {expertise.map((item, i) => (
              <motion.article
                className="expertise-card"
                key={item.title}
                {...fadeUp(0.1 + i * 0.08)}
              >
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <div className="about-section-divider" />
      <section className="about-section about-industries-section">
        <div className="about-container">
          <div className="industries-grid">
            <motion.div {...fadeUp(0.1)}>
              <p className="about-eyebrow">Industries Served</p>
              <h2 className="about-section-title">Depth across the sectors<br />that matter.</h2>
              <p className="about-section-sub" style={{ marginBottom: 0 }}>
                We bring practitioner-level knowledge to highly regulated and complex environments
                — where the cost of getting AI and Agile wrong is high.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="industries-chips-wrap">
              {[
                '🏦 Financial Services',
                '🏥 Healthcare',
                '🛒 Retail & eCommerce',
                '🏛️ Federal / Government',
                '📦 Supply Chain & Logistics',
                '🏗️ Enterprise IT',
                '🎓 Education Technology',
                '🔌 Utilities & Energy',
              ].map((ind) => (
                <span className="industry-chip" key={ind}>{ind}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <div className="about-section-divider" />
      <section className="about-section">
        <div className="about-container">
          <div className="philosophy-grid">
            <motion.div {...fadeUp(0.1)}>
              <p className="about-eyebrow">Our Philosophy</p>
              <h2 className="about-section-title">Principles that<br />guide every engagement.</h2>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="philosophy-list">
              {philosophy.map((item, i) => (
                <div className="philosophy-item" key={i}>
                  <span className="philosophy-num">0{i + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="about-section-divider" />
      <section className="about-section">
        <div className="about-container">
          <motion.div {...fadeUp(0.1)} className="about-cta-box">
            <p className="about-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
              Ready to Work Together?
            </p>
            <h2>Let's build your next<br />success story.</h2>
            <p>
              Whether you need a strategic partner, a hands-on delivery team, or a sounding board
              for your AI and data roadmap — we're here.
            </p>
            <div className="about-cta-btns">
              <Link to="/contact" className="btn btn-primary">Schedule a Free Call →</Link>
              <a
                href="https://www.linkedin.com/company/ssb-solutions-llc"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default About;
