import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-slate-900/40 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#"
          className="inline-flex items-center text-white no-underline transition-transform hover:scale-105 active:scale-95"
        >
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight">
            Yash <span className="gradient-text">Kandekar</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={`Jump to ${link.label} section`}
              className="text-slate-300 hover:text-cyan-300 font-medium text-sm lg:text-base transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download
            aria-label="Download Yash Kandekar's Resume PDF"
            className="btn btn-outline text-xs lg:text-sm py-2 px-4 inline-flex items-center gap-1.5"
          >
            <FileDown size={16} /> Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-slate-950/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col justify-between overflow-y-auto animate-word-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-slate-200 hover:text-cyan-400 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 pb-8 border-t border-white/10">
            <a
              href={personalInfo.resumeUrl}
              download
              onClick={() => setIsOpen(false)}
              className="btn btn-primary w-full py-3 text-base flex items-center justify-center gap-2"
            >
              <FileDown size={18} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
