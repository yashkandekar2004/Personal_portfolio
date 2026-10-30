import React from 'react';
import { personalInfo, educationAndCertifications } from '../data/portfolioData';
import { FileDown, ExternalLink, Briefcase, GraduationCap, Award, ShieldCheck } from 'lucide-react';

export default function Resume() {
  const edu = educationAndCertifications?.education || {};
  const cert = educationAndCertifications?.certification || {};

  return (
    <section id="resume" style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)' }}>
      <div className="container">
        <h2 className="section-title">
          Professional <span className="gradient-text">Resume</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Detailed overview of my engineering experience, projects, education, and technical foundation.
        </p>

        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-card)',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            padding: '3rem 2rem',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              color: 'var(--accent-cyan)'
            }}
          >
            <Briefcase size={32} />
          </div>

          <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.75rem' }}>
            Ready to review my complete resume?
          </h3>
          <p
            style={{
              color: 'var(--text-muted)',
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              fontSize: '1.02rem',
              lineHeight: 1.6
            }}
          >
            Download my professional resume for complete insights into my backend architecture with Node.js & Fastify, PostgreSQL database designs, and production leadership.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem'
            }}
          >
            <a
              href={personalInfo.resumeUrl}
              download
              aria-label="Download Yash Kandekar's Resume in PDF format"
              className="btn btn-primary"
              style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
            >
              <FileDown size={20} /> Download PDF Resume
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Yash Kandekar's Resume in a new browser tab"
              className="btn btn-outline"
              style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
            >
              <ExternalLink size={20} /> View Online Resume
            </a>
          </div>

          {/* Education & Certification Section */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '2.5rem',
              textAlign: 'left'
            }}
          >
            {/* Education */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>
                <GraduationCap size={22} />
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>
                  Education
                </span>
              </div>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.25rem' }}>
                {edu.degree || "Bachelor of Computer Applications (BCA)"}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                {edu.field || "Computer Science & Application Development"}
              </p>
            </div>

            {/* Certification */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', color: '#10b981' }}>
                <Award size={22} />
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>
                  Certification
                </span>
              </div>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.25rem' }}>
                {cert.title || "React.js Certification"}
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                {cert.issuer || "The Baap Company"}
              </p>
            </div>

            {/* Strengths */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', color: '#a855f7' }}>
                <ShieldCheck size={22} />
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>
                  Key Strengths
                </span>
              </div>
              <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.25rem' }}>
                Leadership & Support
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                REST APIs, Production Support & Mentorship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
