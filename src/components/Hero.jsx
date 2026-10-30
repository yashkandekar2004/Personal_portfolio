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
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '3.5rem'
      }}
    >
      <div className="container">
        {/* Main 2-Column Hero Grid */}
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.45fr) minmax(280px, 0.85fr)',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}
        >
          {/* Left Column: Text & Actions */}
          <div style={{ textAlign: 'left' }} className="hero-text-col">
            {/* Status Badge with Pulsing Ring & Shimmer */}
            <div
              className="shimmer-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.45rem 1.15rem',
                borderRadius: '9999px',
                border: '1px solid rgba(6, 182, 212, 0.35)',
                color: 'var(--accent-cyan)',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.5rem',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'
              }}
            >
              <div className="status-indicator">
                <span className="status-ring" />
                <span className="status-dot" />
              </div>
              Available for Engineering Opportunities
            </div>

            {/* Main Heading with Blur-to-Clear Entrance */}
            <h1
              className="animate-word-in"
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                marginBottom: '1rem',
                color: '#fff'
              }}
            >
              Hi, I'm <span className="gradient-text" style={{ whiteSpace: 'nowrap' }}>{personalInfo.name}</span>
            </h1>

            {/* Animated Subtitle / Role with Typewriter on ONE single line */}
            <div
              className="hero-typewriter-row"
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
                color: 'var(--text-muted)',
                fontWeight: 500,
                marginBottom: '1.25rem',
                minHeight: '2.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ flexShrink: 0 }}>I am a</span>
              <Typewriter words={roles} typingSpeed={85} deletingSpeed={45} pauseTime={1800} />
            </div>

            {/* Tagline */}
            <p
              style={{
                maxWidth: '600px',
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '2.5rem'
              }}
            >
              {personalInfo.tagline} Focused on crafting clean architecture, high-throughput microservices, and reliable data pipelines.
            </p>

            {/* Call to Actions */}
            <div
              className="hero-actions-row"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
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
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 'clamp(260px, 28vw, 320px)',
                height: 'clamp(260px, 28vw, 320px)'
              }}
            >
              {/* Rotating Gradient Aura */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #a855f7, #06b6d4)',
                  animation: 'spinAura 9s linear infinite',
                  filter: 'blur(16px)',
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
                  padding: '4px',
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
                    objectPosition: 'center 20%',
                    transform: 'scale(1.05)',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                />
              </div>

              {/* Floating Status Pill */}
              <div
                className="interactive-card shimmer-badge"
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '-10px',
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  border: '1.5px solid rgba(6, 182, 212, 0.5)',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
                }}
              >
                <Sparkles size={15} color="var(--accent-cyan)" />
                <span>Software Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Highlights Bar Across Container */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}
        >
          <div
            className="interactive-card"
            style={{
              padding: '1.35rem 1.5rem',
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
              <Server size={28} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Core Stack</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1rem' }}>Node.js & Fastify</div>
            </div>
          </div>

          <div
            className="interactive-card"
            style={{
              padding: '1.35rem 1.5rem',
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
              <Database size={28} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Data Stores</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1rem' }}>PostgreSQL & Mongo</div>
            </div>
          </div>

          <div
            className="interactive-card"
            style={{
              padding: '1.35rem 1.5rem',
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
              <Terminal size={28} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>API Architecture</div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1rem' }}>RESTful & Scalable</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 890px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-text-col {
            text-align: center !important;
          }
          .hero-typewriter-row {
            justify-content: center !important;
          }
          .hero-actions-row {
            justify-content: center !important;
          }
          .hero-text-col p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
