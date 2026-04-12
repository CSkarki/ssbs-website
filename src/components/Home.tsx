import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

type Product = {
  name: string;
  icon: string;
  category: string;
  categoryColor: string;
  tagline: string;
  audience: string;
  href?: string;
  videoSrc?: string;
  anchorId?: string;
};

const products: Product[] = [
  {
    name: 'Will AI Replace My Job?',
    icon: '🤖',
    category: 'AI Tool · Consumer',
    categoryColor: 'amber',
    tagline:
      'Find your AI displacement risk score in 60 seconds. Answer a short questionnaire, get a free risk score — or upgrade for a full personalized digital report. 30+ roles covered.',
    audience: 'General public, career changers, HR professionals',
    href: 'https://aiadvisor.ssbsconsulting.com',
  },
  {
    name: 'Utsave',
    icon: '🎉',
    category: 'Event Tech · Consumer',
    categoryColor: 'coral',
    tagline:
      'Plan your celebration. Bring your people together. Invitations, RSVP tracking, photo sharing, WhatsApp reminders — designed for South Asian family celebrations and cultural milestones.',
    audience: 'South Asian families, cultural event organizers, community leaders',
    href: 'https://www.utsav-events.com',
  },
  {
    name: 'Turnify',
    icon: '↩️',
    category: 'B2B SaaS · AI-powered',
    categoryColor: 'teal',
    tagline:
      'AI-powered B2B returns management. Automated approval using AI risk analysis, fraud detection, SAP S/4 HANA integration, configurable workflows, and real-time insights for retail operations.',
    audience: 'Retail operations, supply chain managers, SAP ERP teams',
    href: 'https://b2b-returns.ssbsconsulting.com',
  },
  {
    name: 'SQL Practice Platform',
    icon: '🗃️',
    category: 'EdTech · Training',
    categoryColor: 'indigo',
    tagline:
      'Master SQL with hands-on exercises drawn from Banking, Retail, ERP, and Telecom data models. JOINs, window functions, aggregates, subqueries — with AI-powered hints and score tracking.',
    audience: 'Data analysts, developers, SQL students, training instructors',
    href: 'https://sqllab.ssbsconsulting.com',
  },
  {
    name: 'Automatic Invoice Processing',
    icon: '📄',
    category: 'Enterprise AI · Client Demo',
    categoryColor: 'sky',
    tagline:
      'Intelligent capture, validation, and workflow routing for invoices — recorded demo from a client engagement showcasing end-to-end AI automation.',
    audience: 'Finance, AP, shared services, and operations teams',
    videoSrc: '/videos/invoice-processing-demo.mp4',
    anchorId: 'product-invoice-processing',
  },
];

const services = [
  {
    icon: '🧠',
    name: 'AI Strategy & Implementation',
    desc: 'From use-case discovery to GenAI pilots and LLM integration. We help you find where AI creates real value — then build it.',
    tags: ['GenAI', 'LLMs', 'Strategy'],
    link: '/ai-services',
  },
  {
    icon: '📊',
    name: 'Data Engineering & Analytics',
    desc: 'Modern data platforms, pipelines, ERP analytics, and BI solutions. SQL to Spark, dbt to dashboards.',
    tags: ['Data Platforms', 'SQL', 'SAP'],
    link: '/data-services',
  },
  {
    icon: '⚡',
    name: 'Agile Transformation',
    desc: 'Coaching teams and leadership through SAFe, Scrum, and delivery acceleration. Practical, not theoretical.',
    tags: ['SAFe', 'Scrum', 'Coaching'],
    link: '/agile-services',
  },
  {
    icon: '💻',
    name: 'Custom Software Development',
    desc: 'Full-stack AI-powered application development. We prototype fast and scale thoughtfully — proven by our own products.',
    tags: ['Next.js', 'React', 'AI Apps'],
    link: '/contact',
  },
];

const whyItems = [
  {
    title: 'Product-proven thinking',
    desc: 'Every service offering is backed by products we have built and launched ourselves. We know what works in production.',
  },
  {
    title: 'AI-first, not AI-last',
    desc: "We don't bolt on AI as an afterthought. From Turnify's fraud detection to the SQL platform's hint engine, AI is core to how we build.",
  },
  {
    title: 'Enterprise + startup sensibility',
    desc: 'Deep experience with SAP S/4, ERP ecosystems, and enterprise delivery — combined with the speed and agility of a product studio.',
  },
  {
    title: 'End-to-end capability',
    desc: 'Strategy through execution. We engage at the problem definition stage and stay through production launch.',
  },
];

const techStack = [
  'Next.js', 'React', 'Python', 'PostgreSQL',
  'SAP S/4', 'OpenAI / Claude', 'Supabase', 'Vercel',
  'dbt', 'Tableau',
];

const Home: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeVideo]);

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, '');
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  return (
    <main className="home-page">

      {/* ── HERO ── */}
      <section className="home-hero section-shell">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            AI · Data · Agile · Products
          </div>
          <h1>We consult.<br /><em>We build.</em><br />We ship.</h1>
          <p className="hero-description">
            SSBS is a consulting practice and a product studio. We help enterprises navigate AI
            and data — and we build software products people actually use.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">Explore Products →</a>
            <a href="#services" className="btn btn-outline">View Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>10+</strong>
              <span>Years of expertise</span>
            </div>
            <div className="stat">
              <strong>5</strong>
              <span>Products &amp; demos</span>
            </div>
            <div className="stat">
              <strong>3</strong>
              <span>Industry verticals</span>
            </div>
          </div>
        </div>

        <div className="hero-product-grid">
          {products.map((product) => (
            <article
              className={`hero-mini-card hero-mini-card--${product.categoryColor}${product.videoSrc ? ' hero-mini-card--interactive' : ''}`}
              key={product.name}
              id={product.anchorId ? `${product.anchorId}-hero` : undefined}
              onClick={product.videoSrc ? () => setActiveVideo(product.videoSrc as string) : undefined}
              onKeyDown={
                product.videoSrc
                  ? (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveVideo(product.videoSrc as string);
                      }
                    }
                  : undefined
              }
              role={product.videoSrc ? 'button' : undefined}
              tabIndex={product.videoSrc ? 0 : undefined}
            >
              <span className="mini-icon">{product.icon}</span>
              <h3>{product.name}</h3>
              <p className={`mini-cat mini-cat--${product.categoryColor}`}>{product.category}</p>
              {product.videoSrc ? (
                <span className="hero-mini-demo-hint">▶ Click to play demo</span>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <div className="section-divider" />
      <section id="products" className="section-shell products-section">
        <div className="section-heading">
          <p className="eyebrow">Our Products</p>
          <h2>Built by us. Used by real people.</h2>
          <p className="section-sub">
            From AI-powered career tools to enterprise returns management — every product solves a
            real problem we believed in enough to ship. Includes a recorded client demo for
            intelligent invoice processing.
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <article className={`product-card product-card--${product.categoryColor}`} key={product.name} id={product.anchorId}>
              <div className="product-top">
                <span className={`product-icon-wrap product-icon-wrap--${product.categoryColor}`}>
                  {product.icon}
                </span>
                <span className={`pill pill--${product.categoryColor}`}>{product.category}</span>
              </div>
              <h3>{product.name}</h3>
              <p className="product-tagline">{product.tagline}</p>
              <small className="product-audience">🎯 {product.audience}</small>
              {product.videoSrc ? (
                <>
                  <button
                    type="button"
                    className={`product-video-launch product-video-launch--${product.categoryColor}`}
                    onClick={() => setActiveVideo(product.videoSrc as string)}
                    aria-label={`Play video demo: ${product.name}`}
                  >
                    <span className="product-video-launch__play" aria-hidden>▶</span>
                    <span>Watch demo video</span>
                  </button>
                  <p className="product-video-hint">Opens fullscreen player. Press Esc to close.</p>
                </>
              ) : (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`product-link product-link--${product.categoryColor}`}
                >
                  Launch App →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <div className="section-divider" />
      <section id="services" className="section-shell services-section">
        <div className="section-heading">
          <p className="eyebrow">Consulting Services</p>
          <h2>Where deep expertise meets execution.</h2>
          <p className="section-sub">
            We don't just advise — we build alongside you. Our consulting is shaped by years of
            shipping real products in complex enterprise environments.
          </p>
        </div>
        <div className="services-grid">
          {services.map((svc) => (
            <article className="service-card" key={svc.name}>
              <div className="service-icon">{svc.icon}</div>
              <h3>{svc.name}</h3>
              <p>{svc.desc}</p>
              <div className="service-tags">
                {svc.tags.map((tag) => (
                  <span className="service-tag" key={tag}>{tag}</span>
                ))}
              </div>
              <Link to={svc.link} className="service-learn-more">Learn more →</Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── WHY SSBS ── */}
      <div className="section-divider" />
      <section className="section-shell why-section">
        <div className="why-grid">
          <div className="why-left">
            <p className="eyebrow">Why SSBS</p>
            <h2>Consultants who<br />actually ship.</h2>
            <div className="why-list">
              {whyItems.map((item) => (
                <div className="why-item" key={item.title}>
                  <span className="why-dot" aria-hidden="true" />
                  <div>
                    <div className="why-item-title">{item.title}</div>
                    <div className="why-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-panel">
            <div className="why-panel-title">Our technology stack</div>
            <div className="why-panel-sub">What we build with — and advise on</div>
            <div className="tech-grid">
              {techStack.map((tech) => (
                <div className="tech-item" key={tech}>{tech}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="section-shell">
        <div className="cta-banner">
          <p className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Get in Touch</p>
          <h2>Ready to build something<br />that actually ships?</h2>
          <p>
            Whether you need consulting expertise or want to explore our products — let's start a
            conversation.
          </p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">Schedule a Call →</Link>
            <a href="#products" className="btn btn-outline">Explore Products</a>
          </div>
        </div>
      </div>

      {/* ── VIDEO MODAL ── */}
      {activeVideo ? (
        <div
          className="video-modal-backdrop"
          role="presentation"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="video-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Product demo video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              ×
            </button>
            <video
              className="video-modal-player"
              src={activeVideo}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default Home;
