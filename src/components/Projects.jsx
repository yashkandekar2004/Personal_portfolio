import React from 'react';
import { projects } from '../data/portfolioData';
import { CheckCircle2, Calendar } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Key enterprise platforms and backend systems architected for high throughput, data integrity, and reliability.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            alignItems: 'stretch'
          }}
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="interactive-card"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                padding: '2rem 1.85rem',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Card Top Content */}
              <div>
                {/* Meta Row: Role Badge & Duration */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {proj.roleBadge && (
                    <span
                      style={{
                        fontSize: '0.78rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(6, 182, 212, 0.12)',
                        border: '1px solid rgba(6, 182, 212, 0.25)',
                        color: 'var(--accent-cyan)',
                        fontWeight: 600,
                        letterSpacing: '0.02em'
                      }}
                    >
                      {proj.roleBadge}
                    </span>
                  )}

                  {proj.duration && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-dim)',
                        fontWeight: 500
                      }}
                    >
                      <Calendar size={13} color="var(--accent-cyan)" />
                      {proj.duration}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: '1.45rem',
                    color: '#ffffff',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: '0.4rem'
                  }}
                >
                  {proj.title}
                </h3>

                {/* Subtitle */}
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {proj.subtitle}
                </div>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    marginBottom: '1.4rem'
                  }}
                >
                  {proj.description}
                </p>

                {/* Key Highlights */}
                <div
                  style={{
                    marginBottom: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem'
                  }}
                >
                  {proj.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.55rem',
                        fontSize: '0.88rem',
                        color: 'var(--text-main)',
                        lineHeight: 1.5
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color="var(--accent-cyan)"
                        style={{ marginTop: '0.2rem', flexShrink: 0 }}
                      />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Tech Stack */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '1.25rem'
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-dim)',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    marginBottom: '0.65rem'
                  }}
                >
                  Technologies Used
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="tech-pill-interactive"
                      style={{
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.09)',
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        fontWeight: 500
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {proj.githubUrl && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                      style={{ width: '100%', padding: '0.6rem 1rem', fontSize: '0.88rem' }}
                    >
                      <GithubIcon size={16} /> View Code
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
