import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Mail, FileDown, Database, Server, Sparkles } from 'lucide-react';
import Typewriter from './Typewriter';

export default function Hero() {
  const roles = [
    "Software Developer",
    "Backend Specialist",
    "Node.js & Fastify Engineer",
    "PostgreSQL Architect",
    "Full Stack Developer"
  ];

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Hero Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Bio & Actions */}
          <div className="lg:col-span-7 text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full border border-cyan-500/40 text-cyan-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)] shimmer-badge max-w-full">
              <div className="status-indicator shrink-0">
                <span className="status-ring" />
                <span className="status-dot" />
              </div>
              <span className="truncate">Available for Engineering Opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="animate-word-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Hi, I'm <span className="gradient-text whitespace-nowrap">{personalInfo.name}</span>
            </h1>

            {/* Typewriter Subtitle on a Single Row */}
            <div className="flex items-center gap-2 text-lg sm:text-2xl md:text-3xl text-slate-300 font-medium mb-4 sm:mb-5 min-h-[2.4rem] whitespace-nowrap overflow-x-hidden">
              <span className="shrink-0 text-slate-400">I am a</span>
              <span className="text-cyan-400 font-bold overflow-hidden text-ellipsis">
                <Typewriter words={roles} typingSpeed={85} deletingSpeed={45} pauseTime={1800} />
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl mb-6 sm:mb-8">
              {personalInfo.tagline} Focused on crafting clean architecture, high-throughput microservices, and reliable data pipelines.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <a
                href="#projects"
                className="btn btn-primary py-3 px-6 text-sm sm:text-base justify-center"
              >
                Explore Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="btn btn-outline py-3 px-6 text-sm sm:text-base justify-center"
              >
                <Mail size={18} /> Contact Me
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn btn-outline py-3 px-6 text-sm sm:text-base justify-center"
              >
                <FileDown size={18} /> Resume
              </a>
            </div>
          </div>

          {/* Right Column: Profile Avatar with Glowing Conic Aura */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Rotating Gradient Aura */}
              <div
                className="absolute -inset-2.5 sm:-inset-3 rounded-full blur-xl opacity-70 animate-[spinAura_9s_linear_infinite]"
                style={{
                  background: 'conic-gradient(from 0deg, #06b6d4, #3b82f6, #a855f7, #06b6d4)'
                }}
              />

              {/* Suit Portrait Frame */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-blue-500 to-purple-600 shadow-2xl overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Yash Kandekar"
                  className="w-full h-full object-cover rounded-full scale-105 transition-transform duration-500 hover:scale-110"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>

              {/* Floating Status Pill */}
              <div className="absolute bottom-2 right-0 sm:bottom-3 sm:-right-2 bg-slate-900/95 border border-cyan-400/50 py-1.5 px-3 sm:px-4 rounded-full flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white shadow-xl shimmer-badge backdrop-blur-md whitespace-nowrap">
                <Sparkles size={14} className="text-cyan-400 shrink-0" />
                <span>Software Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Highlights Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="interactive-card p-4 sm:p-5 rounded-xl bg-slate-800/60 border border-white/10 flex items-center gap-3 sm:gap-4">
            <div className="card-icon text-cyan-400 shrink-0">
              <Server size={26} />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Core Stack</div>
              <div className="text-sm sm:text-base font-bold text-white">Node.js, Fastify, TypeScript</div>
            </div>
          </div>

          <div className="interactive-card p-4 sm:p-5 rounded-xl bg-slate-800/60 border border-white/10 flex items-center gap-3 sm:gap-4">
            <div className="card-icon text-blue-400 shrink-0">
              <Database size={26} />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Data Layer</div>
              <div className="text-sm sm:text-base font-bold text-white">PostgreSQL & Redis Caching</div>
            </div>
          </div>

          <div className="interactive-card p-4 sm:p-5 rounded-xl bg-slate-800/60 border border-white/10 flex items-center gap-3 sm:gap-4">
            <div className="card-icon text-emerald-400 shrink-0">
              <Sparkles size={26} />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Engineering Focus</div>
              <div className="text-sm sm:text-base font-bold text-white">Clean APIs & Scalability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
