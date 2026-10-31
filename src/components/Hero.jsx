import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Mail, FileDown, Terminal, Database, Server, Sparkles } from 'lucide-react';
import Typewriter from './Typewriter';

export default function Hero() {
  const roles = [
    "Software Developer",
    "Backend Specialist",
    "Node.js & Fastify Engineer",
    "PostgreSQL Architect",
    "Full Stack Developer"
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '3rem'
      }}
    >
      <div className="container">
        {/* Main 2-Column Hero Grid */}
        <div className="hero-grid">
          {/* Left Column: Text & Actions */}
          <div style={{ textAlign: 'left' }} className="hero-text-col">
            {/* Status Badge with Pulsing Ring & Shimmer */}
            <div
              className="shimmer-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                border: '1px solid rgba(6, 182, 212, 0.35)',
                color: 'var(--accent-cyan)',
                fontSize: '0.82rem',
                fontWeight: 600,
                marginBottom: '1.25rem',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'
              }}
            >
              <div className="status-indicator">
                <span className="status-ring" />
                <span className="status-dot" />
              </div>
              Available for Opportunities
            </div>

            {/* Main Heading with Responsive Font Sizing */}
            <h1
              className="animate-word-in hero-heading"
              style={{
                fontSize: 'clamp(1.85rem, 5.5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '0.85rem',
                color: '#fff'
              }}
            >
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Animated Subtitle / Role with Typewriter */}
            <div
              className="hero-typewriter-row"
              style={{
                fontSize: 'clamp(1.05rem, 4.2vw, 1.5rem)',
                color: 'var(--text-muted)',
                fontWeight: 500,
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.45rem',
                lineHeight: 1.4
              }}
            >
              <span style={{ flexShrink: 0 }}>I am a</span>
              <Typewriter words={roles} typingSpeed={85} deletingSpeed={45} pauseTime={1800} />
            </div>

            {/* Tagline */}
            <p
              style={{
                maxWidth: '600px',
                fontSize: '1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}
            >
              {personalInfo.tagline} Focused on crafting clean architecture, high-throughput microservices, and reliable data pipelines.
            </p>

            {/* Call to Actions */}
            <div className="hero-actions-row">
              <a href="#projects" className="btn btn-primary">
                Explore Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                <Mail size={18} /> Contact Me
              </a>
              <a href={personalInfo.resumeUrl} download className="btn btn-outline">
                <FileDown size={18} /> Resume
              </a>
            </div>
          </div>

          {/* Right Column: Profile Avatar with Glowing Conic Aura */}
          <div
            className="hero-avatar-col"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <div
              className="hero-avatar-wrapper"
              style={{
                position: 'relative',
                width: 'clamp(210px, 50vw, 300px)',
                height: 'clamp(210px, 50vw, 300px)'
              }}
            >
              {/* Rotating Gradient Aura */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #a855f7, #06b6d4)',
                  animation: 'spinAura 9s linear infinite',
                  filter: 'blur(14px)',
                  opacity: 0.65
                }}
              />

              {/* Suit Portrait Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  padding: '3px',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #a855f7)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
                }}
              >
                <img
                  src="/profile.webp"
                  alt="Yash Kandekar - Software Developer"
                  width={320}
                  height={320}
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center 40%',
                    transform: 'scale(0.98)',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
                />
              </div>

              {/* Floating Status Pill */}
              <div
                className="interactive-card shimmer-badge hero-floating-pill"
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '0',
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  border: '1.5px solid rgba(6, 182, 212, 0.5)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                  zIndex: 2
                }}
              >
                <Sparkles size={14} color="var(--accent-cyan)" />
                <span>Software Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Highlights Bar Across Container */}
        <div className="hero-highlights-grid">
          <div
            className="interactive-card"
            style={{
              padding: '1.25rem 1.35rem',
              borderRadius: '14px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'left',
              cursor: 'default'
            }}
          >
            <div className="card-icon" style={{ color: 'var(--accent-cyan)' }}>
              <Server size={26} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Core Stack</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.98rem' }}>Node.js & Fastify</div>
            </div>
          </div>

          <div
            className="interactive-card"
            style={{
              padding: '1.25rem 1.35rem',
              borderRadius: '14px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'left',
              cursor: 'default'
            }}
          >
            <div className="card-icon" style={{ color: 'var(--accent-blue)' }}>
              <Database size={26} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Data Stores</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.98rem' }}>PostgreSQL & Mongo</div>
            </div>
          </div>

          <div
            className="interactive-card"
            style={{
              padding: '1.25rem 1.35rem',
              borderRadius: '14px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'left',
              cursor: 'default'
            }}
          >
            <div className="card-icon" style={{ color: '#10b981' }}>
              <Terminal size={26} />
            </div>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>API Architecture</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.98rem' }}>RESTful & Scalable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
