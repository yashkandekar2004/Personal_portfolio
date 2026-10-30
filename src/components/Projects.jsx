import React from 'react';
import { projects } from '../data/portfolioData';
import { CheckCircle2, Calendar } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle text-sm sm:text-base px-2">
          Key enterprise platforms and backend systems architected for high throughput, data integrity, and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="interactive-card bg-slate-800/60 rounded-2xl p-5 sm:p-7 border border-white/10 backdrop-blur-md flex flex-col justify-between shadow-xl"
            >
              {/* Card Top Content */}
              <div>
                {/* Meta Row: Role Badge & Duration */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4 pb-3 border-b border-white/10">
                  {proj.roleBadge && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      {proj.roleBadge}
                    </span>
                  )}

                  {proj.duration && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Calendar size={13} className="text-cyan-400" />
                      {proj.duration}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {/* Highlights / Responsibilities */}
                <div className="mb-5">
                  <div className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-2">
                    Key Highlights:
                  </div>
                  <ul className="space-y-2">
                    {proj.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 size={15} className="text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Bottom: Tech Stack */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
