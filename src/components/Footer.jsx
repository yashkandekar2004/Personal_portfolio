import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        padding: '3rem 0 2rem 0',
        marginTop: '3rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span style={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em' }}>
            Yash <span className="gradient-text">Kandekar</span>
          </span>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '500px' }}>
          Architecting resilient, scalable backend solutions with modern TypeScript, Node.js, and relational databases.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#about" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
          <a href="#experience" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem' }}>Experience</a>
          <a href="#skills" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem' }}>Skills</a>
          <a href="#projects" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem' }}>Projects</a>
          <a href="#resume" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem' }}>Resume</a>
          <a href="#contact" style={{ color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.85rem',
            color: 'var(--text-dim)',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Yash Kandekar. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              padding: '0.4rem 0.8rem',
              borderRadius: '9999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
              e.currentTarget.style.color = 'var(--accent-cyan)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.color = 'var(--text-main)';
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

