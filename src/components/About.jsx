import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Cpu size={24} color="var(--accent-cyan)" />,
      title: "API Architecture",
      desc: "Designing secure, structured REST APIs with clean endpoint schemas and granular authorization."
    },
    {
      icon: <Zap size={24} color="var(--accent-blue)" />,
      title: "Performance & Speed",
      desc: "Optimizing database queries, caching hot data with Redis, and leveraging lightweight Node/Fastify runtimes."
    },
    {
      icon: <ShieldCheck size={24} color="#10b981" />,
      title: "Reliability & Security",
      desc: "Implementing input validation, token-based authentication (JWT/OAuth), and defense-in-depth security."
    },
    {
      icon: <Layers size={24} color="#a855f7" />,
      title: "System Modularity",
      desc: "Structuring clean service boundaries, modular microservices, and maintainable codebase design."
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Passionate about backend engineering, data consistency, and developer ergonomics.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {/* Main Narrative Card */}
          <div
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-card)',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: '#fff' }}>
              Building the invisible backbone of modern web applications.
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
              {personalInfo.about}
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Specialization:</span>
                <strong style={{ display: 'block', color: 'var(--accent-cyan)' }}>Backend & API Engineering</strong>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Location:</span>
                <strong style={{ display: 'block', color: 'var(--text-main)' }}>{personalInfo.location}</strong>
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {pillars.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <div style={{ marginBottom: '0.8rem' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
