import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Cpu, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Cpu size={24} className="text-cyan-400" />,
      title: "API Architecture",
      desc: "Designing secure, structured REST APIs with clean endpoint schemas and granular authorization."
    },
    {
      icon: <Zap size={24} className="text-blue-400" />,
      title: "Performance & Speed",
      desc: "Optimizing database queries, caching hot data with Redis, and leveraging lightweight Node/Fastify runtimes."
    },
    {
      icon: <ShieldCheck size={24} className="text-emerald-400" />,
      title: "Reliability & Security",
      desc: "Implementing input validation, token-based authentication (JWT/OAuth), and defense-in-depth security."
    },
    {
      icon: <Layers size={24} className="text-purple-400" />,
      title: "System Modularity",
      desc: "Structuring clean service boundaries, modular microservices, and maintainable codebase design."
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle text-sm sm:text-base px-2">
          Passionate about backend engineering, data consistency, and developer ergonomics.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Narrative Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                Building the invisible backbone of modern web applications.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {personalInfo.about}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-xs text-slate-300 block uppercase font-semibold">Specialization</span>
                <strong className="text-sm sm:text-base text-cyan-300 font-semibold">Backend & API Engineering</strong>
              </div>
              <div>
                <span className="text-xs text-slate-300 block uppercase font-semibold">Location</span>
                <strong className="text-sm sm:text-base text-slate-100 font-semibold">{personalInfo.location}</strong>
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="interactive-card p-5 sm:p-6 rounded-xl bg-slate-800/60 border border-white/10 flex flex-col justify-start"
              >
                <div className="card-icon mb-3">
                  {item.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
