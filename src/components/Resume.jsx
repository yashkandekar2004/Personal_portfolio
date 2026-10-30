import React from 'react';
import { personalInfo, educationAndCertifications } from '../data/portfolioData';
import { FileDown, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-14 sm:py-20 lg:py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
          Professional <span className="gradient-text">Resume</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle text-sm sm:text-base px-2">
          Detailed overview of my engineering experience, projects, education, and technical foundation.
        </p>

        <div className="max-w-4xl mx-auto bg-slate-800/60 rounded-2xl border border-white/10 p-6 sm:p-10 lg:p-12 text-center shadow-2xl backdrop-blur-md">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-5 text-cyan-400">
            <Briefcase size={28} />
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to review my complete resume?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Download my professional resume for complete insights into my backend architecture with Node.js & Fastify, PostgreSQL database designs, and production leadership.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn btn-primary py-3 px-6 sm:px-8 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <FileDown size={18} /> Download PDF Resume
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline py-3 px-6 sm:px-8 text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} /> View Online Resume
            </a>
          </div>

          {/* Education & Certification Section */}
          <div className="pt-8 sm:pt-10 border-t border-white/10 text-left">
            <h4 className="text-sm uppercase font-bold text-slate-400 tracking-wider mb-5 text-center sm:text-left">
              Education & Certifications
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Education Item */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/10 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="text-base font-bold text-white">
                    {educationAndCertifications.degree}
                  </div>
                  <div className="text-xs sm:text-sm text-cyan-400 font-medium">
                    {educationAndCertifications.university}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Graduation Year: {educationAndCertifications.year}
                  </div>
                </div>
              </div>

              {/* Certification Item */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/10 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                  <Award size={22} />
                </div>
                <div>
                  <div className="text-base font-bold text-white">
                    {educationAndCertifications.certifications[0]?.name || "React JS Certification"}
                  </div>
                  <div className="text-xs sm:text-sm text-blue-400 font-medium">
                    {educationAndCertifications.certifications[0]?.issuer || "The Baap Company"}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Frontend Architecture & Modern Component Patterns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
