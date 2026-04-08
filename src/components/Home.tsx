import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const products = [
  {
    name: 'Will AI Replace My Job?',
    icon: '🤖',
    category: 'AI Tool · Consumer',
    tagline:
      'Find your AI displacement risk score in 60 seconds with a personalized report option.',
    audience: 'General public, career changers, HR professionals',
    href: 'https://will-ai-replace-my-job.vercel.app',
  },
  {
    name: 'Utsave',
    icon: '🎉',
    category: 'Event Tech · Consumer',
    tagline:
      'Celebration planning for families with invitations, RSVP tracking, reminders, and photo sharing.',
    audience: 'Families, cultural event organizers, community leaders',
    href: 'https://www.utsav-events.com',
  },
  {
    name: 'Turnify',
    icon: '↩️',
    category: 'B2B SaaS · AI Powered',
    tagline:
      'AI-powered B2B returns management with automated approvals, risk scoring, and ERP integration.',
    audience: 'Retail operations, supply chain managers, ERP teams',
    href: 'https://turnify-ai-b2b-portal.vercel.app',
  },
  {
    name: 'SQL Practice Platform',
    icon: '🗃️',
    category: 'EdTech · Training',
    tagline:
      'Real-world SQL training with guided practice and AI-powered hints across multiple domains.',
    audience: 'Data analysts, developers, SQL learners, instructors',
    href: 'https://sql-practice-platform.vercel.app',
  },
];

const Home: React.FC = () => {
  return (
    <main className="home-page">
      <section className="home-hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">AI · Data · Agile · Products</p>
          <h1>We consult. We build. We ship.</h1>
          <p className="hero-description">
            SSBS is a consulting practice and product studio. We help enterprises navigate AI and
            data, and we build software products people actually use.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              Explore Products
            </a>
            <a href="#services" className="btn btn-outline">
              View Services
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>10+</strong>
              <span>Years expertise</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Live products</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Industry verticals</span>
            </div>
          </div>
        </div>

        <div className="hero-product-grid">
          {products.map((product) => (
            <article className="hero-mini-card" key={product.name}>
              <span className="mini-icon">{product.icon}</span>
              <h3>{product.name}</h3>
              <p>{product.category}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Our Products</p>
          <h2>Built by us. Used by real people.</h2>
          <p>
            Every product solves a practical problem and is live in production for real users and
            teams.
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-top">
                <span className="product-icon">{product.icon}</span>
                <span className="pill">{product.category}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.tagline}</p>
              <small>Target: {product.audience}</small>
              <a href={product.href} target="_blank" rel="noreferrer" className="product-link">
                Launch App
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Consulting Services</p>
          <h2>Where deep expertise meets execution.</h2>
        </div>
        <div className="services-grid">
          <article className="service-card">
            <h3>AI Strategy & Implementation</h3>
            <p>Use-case discovery, GenAI pilots, and LLM integration that drives real business value.</p>
          </article>
          <article className="service-card">
            <h3>Data Engineering & Analytics</h3>
            <p>Modern data platforms, pipelines, analytics, and ERP reporting systems.</p>
          </article>
          <article className="service-card">
            <h3>Agile Transformation</h3>
            <p>Practical coaching across SAFe and Scrum to accelerate delivery performance.</p>
          </article>
          <article className="service-card">
            <h3>Custom Software Development</h3>
            <p>Full-stack application development from rapid prototypes to scalable production systems.</p>
          </article>
        </div>
      </section>

      <section className="section-shell cta-banner">
        <h2>Ready to build something that actually ships?</h2>
        <p>Whether you need consulting expertise or product collaboration, let&apos;s start the conversation.</p>
        <Link to="/contact" className="btn btn-primary">
          Schedule a Call
        </Link>
      </section>
    </main>
  );
};

export default Home; 