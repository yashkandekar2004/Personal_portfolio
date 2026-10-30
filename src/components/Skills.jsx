import React from 'react';
import { technicalSkills } from '../data/portfolioData';
import { Server, Database, Wrench, Layout, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Backend & APIs':
        return <Server size={22} color="var(--accent-cyan)" />;
      case 'Databases':
      case 'Databases & Storage':
        return <Database size={22} color="var(--accent-blue)" />;
      case 'Frontend':
        return <Layout size={22} color="#10b981" />;
      case 'Tools & Concepts':
      case 'Tools & Platforms':
        return <Wrench size={22} color="#f59e0b" />;
      default:
        return <CheckCircle2 size={22} color="#a855f7" />;
    }
  };

  return (
    <section id="skills" style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)' }}>
      <div className="container">
        <h2 className="section-title">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Hands-on backend development, relational database engineering, and modern web application stack.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {(technicalSkills || []).map((cat, idx) => (
            <div
              key={idx}
              className="interactive-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                padding: '1.75rem',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div
                  className="card-icon"
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>{cat.category}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {(cat.skills || []).map((skill, sIdx) => {
                  const skillName = typeof skill === 'string' ? skill : skill?.name;
                  if (!skillName) return null;
                  return (
                    <div
                      key={sIdx}
                      className="tech-pill-interactive"
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '0.88rem',
                        color: 'var(--text-main)',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <span>{skillName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
