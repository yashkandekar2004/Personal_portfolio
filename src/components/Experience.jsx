import React from 'react';
import { experience, keyAchievements } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Trophy, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Professional experience delivering scalable full-stack applications, robust REST APIs, and modular backend code.
        </p>

        {/* Company Cards */}
        {(experience || []).map((exp, idx) => (
          <div
            key={idx}
            className="interactive-card"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              padding: '2.5rem',
              backdropFilter: 'blur(10px)',
              marginBottom: '3rem',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)'
            }}
          >
            {/* Header info */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '1.5rem',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <div
                    style={{
                      padding: '0.45rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(6, 182, 212, 0.1)',
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    <Briefcase size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 700 }}>{exp.role}</h3>
                </div>
                <div style={{ fontSize: '1.15rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  {exp.company}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '0.88rem',
                    color: 'var(--text-main)',
                    marginBottom: '0.4rem'
                  }}
                >
                  <Calendar size={14} color="var(--accent-cyan)" />
                  {exp.duration}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', justifyContent: 'flex-end', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  <MapPin size={14} /> {exp.location}
                </div>
              </div>
            </div>

            {/* Bullets directly from resume */}
            <div style={{ marginBottom: '1.75rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {(exp.bullets || exp.points || []).map((bullet, bIdx) => (
                  <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '1rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                    <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ marginTop: '0.25rem', flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack pills */}
            {(exp.techStack || exp.technologies) && (
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, marginRight: '0.5rem' }}>
                  Tech & Concepts:
                </span>
                {(exp.techStack || exp.technologies || []).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="tech-pill-interactive"
                    style={{
                      fontSize: '0.82rem',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Key Achievements Grid */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            padding: '2.5rem',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                padding: '0.5rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                color: '#f59e0b'
              }}
            >
              <Trophy size={24} />
            </div>
            <h3 style={{ fontSize: '1.35rem', color: '#fff', fontWeight: 700 }}>Key Achievements & Strengths</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {(keyAchievements || []).map((ach, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem'
                }}
              >
                <div style={{ color: '#f59e0b', marginTop: '0.2rem', flexShrink: 0 }}>
                  <CheckCircle2 size={18} />
                </div>
                <p style={{ fontSize: '0.93rem', color: 'var(--text-main)', lineHeight: 1.5, margin: 0 }}>
                  {typeof ach === 'string' ? ach : (ach.title || JSON.stringify(ach))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
