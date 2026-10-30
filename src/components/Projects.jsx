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

        <div className="projects-grid">
          {(projects || []).map((proj) => {
            const stack = proj.techStack || proj.tech || [];
            const highlights = proj.highlights || proj.bullets || [];

            return (
              <div
                key={proj.id}
                className="interactive-card"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '16px',
                  padding: '1.75rem 1.5rem',
                  border: '1px solid var(--border-color)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                  boxSizing: 'border-box'
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
                      fontSize: '1.35rem',
                      color: '#ffffff',
                      marginBottom: '0.75rem',
                      fontWeight: 700,
                      lineHeight: 1.3
                    }}
                  >
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem'
                    }}
                  >
                    {proj.description}
                  </p>

                  {/* Highlights */}
                  {highlights.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-dim)',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                          marginBottom: '0.65rem',
                          letterSpacing: '0.05em'
                        }}
                      >
                        Key Architecture Highlights:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {highlights.map((h, i) => (
                          <li
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
                            <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Bottom: Tech Stack & Actions */}
                <div>
                  {/* Tech Stack Pills */}
                  {stack.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.45rem',
                        marginBottom: '1.5rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      {stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="tech-pill-interactive"
                          style={{
                            fontSize: '0.78rem',
                            padding: '0.25rem 0.6rem',
                            borderRadius: '6px',
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

                  {/* GitHub Repo Button */}
                  {proj.github && (
                    <div>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View GitHub repository for ${proj.title}`}
                        className="btn btn-outline"
                        style={{
                          width: '100%',
                          padding: '0.6rem 1rem',
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <GithubIcon size={16} /> View on GitHub
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
