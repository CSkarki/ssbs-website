import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

/** Public event URL from Calendly (Event type → Copy link). If wrong or missing, Calendly shows 404 inside the embed. */
const CALENDLY_EVENT_URL = process.env.REACT_APP_CALENDLY_URL?.trim() || '';

function buildCalendlyEmbedUrl(base: string): string {
  const q = 'hide_gdpr_banner=1&background_color=0b1120&text_color=f0f4ff&primary_color=2dd4bf';
  return base.includes('?') ? `${base}&${q}` : `${base}?${q}`;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!CALENDLY_EVENT_URL) return;
    const existing = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (existing) return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Thank you for your message! SSB Solutions LLC will get back to you soon.');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="contact">
      <div className="contact-container">

        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="contact-eyebrow">Get in Touch</p>
          <h1>Let's build something<br />that actually ships.</h1>
          <p className="contact-lead">
            Whether you need consulting expertise, want to explore our products, or just have a
            question — we'd love to hear from you.
          </p>
        </motion.div>

        {/* Two-column layout: Calendly + Form */}
        <div className="contact-columns">

          {/* ── LEFT: Calendly embed ── */}
          <motion.div
            className="calendly-panel"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="calendly-panel-header">
              <div className="calendly-icon">📅</div>
              <div>
                <div className="calendly-panel-title">Book a Free 30-Min Strategy Session</div>
                <div className="calendly-panel-sub">
                  Pick a time that works for you — no back-and-forth needed.
                </div>
              </div>
            </div>
            {CALENDLY_EVENT_URL ? (
              <div
                className="calendly-inline-widget"
                data-url={buildCalendlyEmbedUrl(CALENDLY_EVENT_URL)}
                style={{ minWidth: '280px', height: '660px' }}
              />
            ) : (
              <div className="calendly-fallback">
                <p>
                  Online booking is not available yet. Please use <strong>Send us a message</strong>{' '}
                  — we typically reply within one business day.
                </p>
              </div>
            )}
          </motion.div>

          {/* ── RIGHT: Contact form ── */}
          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="form-panel-header">
              <div className="form-panel-title">Send us a message</div>
              <div className="form-panel-sub">
                Prefer to write? Fill in the form and we'll reply within one business day.
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Corp"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="ai-strategy">AI Strategy &amp; Implementation</option>
                  <option value="data-engineering">Data Engineering &amp; Analytics</option>
                  <option value="agile-transformation">Agile Transformation</option>
                  <option value="custom-dev">Custom Software Development</option>
                  <option value="products">Product Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, challenge, or goal..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
