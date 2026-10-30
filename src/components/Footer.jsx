import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/95 py-10 sm:py-14 mt-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center">
        {/* Brand Name */}
        <div className="inline-flex items-center">
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white">
            Yash <span className="gradient-text">Kandekar</span>
          </span>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          Architecting resilient, scalable backend solutions with modern TypeScript, Node.js, and relational databases.
        </p>

        {/* Quick Links with Accessible Labels */}
        <nav aria-label="Footer Navigation" className="flex gap-4 sm:gap-6 flex-wrap justify-center text-xs sm:text-sm">
          {['About', 'Experience', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              aria-label={`Footer link to ${item} section`}
              className="text-slate-300 hover:text-cyan-300 transition-colors no-underline font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Bottom credits & Back to Top */}
        <div className="w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            Designed & Engineered by <span className="text-white font-semibold">{personalInfo.name}</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to the top of the page"
            className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer bg-white/10 py-1.5 px-3 rounded-full border border-white/20"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
