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
          className="card-responsive"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto',
              color: 'var(--accent-cyan)'
            }}
          >
            <Briefcase size={30} />
          </div>

          <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.75rem' }}>
            Ready to review my complete resume?
          </h3>
          <p
            style={{
              color: 'var(--text-muted)',
              maxWidth: '600px',
              margin: '0 auto 1.75rem auto',
              fontSize: '0.98rem',
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
              marginBottom: '2.5rem'
            }}
          >
            <a
              href={personalInfo.resumeUrl}
              download
              aria-label="Download Yash Kandekar's Resume in PDF format"
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.8rem', fontSize: '0.95rem' }}
            >
              <FileDown size={18} /> Download PDF Resume
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="View Yash Kandekar's Resume in a new browser tab"
              className="btn btn-outline"
              style={{ padding: '0.75rem 1.8rem', fontSize: '0.95rem' }}
            >
              <ExternalLink size={18} /> View Online Resume
            </a>
          </div>

          {/* Education & Certification Section */}
          <div className="resume-grid" style={{ textAlign: 'left' }}>
            {/* Education Card */}
            <div
              style={{
                padding: '1.35rem',
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                <div style={{ color: 'var(--accent-cyan)' }}>
                  <GraduationCap size={22} />
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#fff', margin: 0, fontWeight: 700 }}>Education</h4>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                {edu.degree || 'Bachelor of Computer Applications (BCA)'}
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
                {edu.institution || 'Savitribai Phule Pune University'}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                {edu.duration || '2021 – 2024'}
              </div>
            </div>

            {/* Certification Card */}
            <div
              style={{
                padding: '1.35rem',
                borderRadius: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                <div style={{ color: '#10b981' }}>
                  <Award size={22} />
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#fff', margin: 0, fontWeight: 700 }}>Certification</h4>
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                {cert.title || 'React Development Certification'}
              </div>
              <div style={{ fontSize: '0.88rem', color: '#10b981', marginBottom: '0.4rem' }}>
                {cert.issuer || 'Baap Infotech'}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                <ShieldCheck size={14} color="#10b981" /> Verified Full Stack Credentials
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
