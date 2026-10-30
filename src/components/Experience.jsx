import React from 'react';
import { experience, keyAchievements } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Trophy, MapPin } from 'lucide-react';

export default function Experience() {
  const achievements = Array.isArray(keyAchievements) ? keyAchievements : [];

  return (
    <section id="experience" className="py-14 sm:py-20 lg:py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle text-sm sm:text-base px-2">
          Professional experience delivering scalable full-stack applications, robust REST APIs, and modular backend code.
        </p>

        {/* Company Cards */}
        {(experience || []).map((exp, idx) => (
          <div
            key={idx}
            className="interactive-card bg-slate-800/60 rounded-2xl border border-white/10 p-5 sm:p-8 lg:p-10 backdrop-blur-md mb-8 sm:mb-12 shadow-xl"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Briefcase size={22} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                </div>
                <div className="text-base sm:text-lg text-cyan-400 font-semibold pl-11 sm:pl-0">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 font-medium">
                  <Calendar size={14} className="text-cyan-400" />
                  {exp.duration}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-400 px-1">
                  <MapPin size={14} /> {exp.location}
                </span>
              </div>
            </div>

            {/* Bullets directly from resume */}
            <div className="mb-6">
              <ul className="space-y-3">
                {(exp.bullets || exp.points || []).map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <span className="text-cyan-400 mt-1 shrink-0">
                      <CheckCircle2 size={18} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Stack Badges */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-2.5">
                Technologies Used:
              </div>
              <div className="flex flex-wrap gap-2">
                {(exp.techStack || exp.technologies || []).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs sm:text-sm font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Quantifiable Highlights / Achievements Banner */}
        {achievements.length > 0 && (
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-blue-950/40 border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Engineering Impact & Achievements</h3>
                <p className="text-xs sm:text-sm text-slate-400">Key achievements and core strengths</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((ach, aIdx) => (
                <div
                  key={aIdx}
                  className="p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-start gap-3 hover:border-cyan-500/40 transition-colors"
                >
                  <CheckCircle2 size={18} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {typeof ach === 'string' ? ach : (ach.title || ach.description || JSON.stringify(ach))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
