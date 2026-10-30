import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/manjrdnk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Have an interesting project, job opportunity, or just want to chat backend engineering? Drop a message!
        </p>

        <div className="contact-grid">
          {/* Contact Details & Info */}
          <div className="card-responsive" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '1rem', lineHeight: 1.4 }}>
                Let's discuss something great together.
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
                I am actively seeking backend engineering roles where I can contribute to building high-performance systems and collaborate with talented engineering teams.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(6, 182, 212, 0.1)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div style={{ minWidth: 0, overflow: 'hidden' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Email</span>
                    <div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        style={{ color: 'var(--text-main)', fontWeight: 500, textDecoration: 'none', wordBreak: 'break-all', fontSize: '0.92rem' }}
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      color: 'var(--accent-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Phone</span>
                    <div>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        style={{ color: 'var(--text-main)', fontWeight: 500, textDecoration: 'none', fontSize: '0.92rem' }}
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(168, 85, 247, 0.1)',
                      color: '#a855f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Location</span>
                    <div style={{ color: 'var(--text-main)', fontWeight: 500, fontSize: '0.92rem' }}>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                Connect Online
              </span>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={personalInfo.socials?.github || personalInfo.socialLinks?.github || "https://github.com/yashkandekar2004"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Yash Kandekar's GitHub profile"
                  className="btn btn-outline"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={personalInfo.socials?.linkedin || personalInfo.socialLinks?.linkedin || "https://linkedin.com/in/yash-kandekar-121452241/"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit Yash Kandekar's LinkedIn profile"
                  className="btn btn-outline"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-responsive">
            <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.4 }}>
              Send a Direct Message
            </h3>

            {status === 'success' && (
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                  fontSize: '0.92rem'
                }}
              >
                <CheckCircle size={20} style={{ flexShrink: 0 }} />
                <span>Thank you! Your message has been sent successfully. I'll get back to you shortly.</span>
              </div>
            )}

            {status === 'error' && (
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                  fontSize: '0.92rem'
                }}
              >
                <AlertCircle size={20} style={{ flexShrink: 0 }} />
                <span>Oops! There was an issue sending your message. Please try again or reach out directly via email.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label
                  htmlFor="name"
                  style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Write your message, project idea, or role opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid var(--border-color)',
                    color: '#fff',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  fontSize: '0.98rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                  opacity: status === 'submitting' ? 0.7 : 1
                }}
              >
                <Send size={18} /> {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
