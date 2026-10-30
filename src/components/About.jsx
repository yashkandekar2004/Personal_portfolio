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

        <div className="about-main-grid">
          {/* Main Narrative Card */}
          <div className="card-responsive" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: '#fff', lineHeight: 1.4 }}>
                Building the invisible backbone of modern web applications.
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.98rem' }}>
                {personalInfo.about}
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-color)',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Specialization:</span>
                <strong style={{ display: 'block', color: 'var(--accent-cyan)', fontSize: '0.95rem' }}>Backend & API Engineering</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600 }}>Location:</span>
                <strong style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.95rem' }}>{personalInfo.location}</strong>
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="about-pillars-grid">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="interactive-card"
                style={{
                  padding: '1.35rem',
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '14px',
                  border: '1px solid var(--border-color)',
                  boxSizing: 'border-box'
                }}
              >
                <div className="card-icon" style={{ marginBottom: '0.75rem' }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
