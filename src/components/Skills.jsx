import React from 'react';
import { technicalSkills } from '../data/portfolioData';
import { Server, Database, Wrench, Layout, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Backend & APIs':
        return <Server size={22} className="text-cyan-400" />;
      case 'Databases & Storage':
        return <Database size={22} className="text-blue-400" />;
      case 'Frontend':
        return <Layout size={22} className="text-emerald-400" />;
      case 'Tools & Platforms':
        return <Wrench size={22} className="text-amber-400" />;
      case 'Engineering Practices':
        return <CheckCircle2 size={22} className="text-purple-400" />;
      default:
        return <Server size={22} className="text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle text-sm sm:text-base px-2">
          Hands-on backend development, relational database engineering, and modern web application stack.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {technicalSkills.map((cat, idx) => (
            <div
              key={idx}
              className="interactive-card bg-slate-800/60 rounded-2xl p-5 sm:p-6 border border-white/10 backdrop-blur-md flex flex-col justify-start"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/5 shrink-0">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  return (
                    <div
                      key={sIdx}
                      className="tech-pill-interactive px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
                    >
                      {skillName}
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
