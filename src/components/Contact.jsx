import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/manjrdnk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <div className="section-divider"></div>
        <p className="section-subtitle text-sm sm:text-base px-2">
          Have an interesting project, job opportunity, or just want to chat backend engineering? Drop a message!
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-white/10 backdrop-blur-md flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Let's discuss something great together.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                I am actively seeking software and backend engineering roles where I can contribute to building high-performance systems and collaborate with talented teams.
              </p>

              <div className="space-y-4 mb-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-all text-slate-200 no-underline group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-400 font-medium uppercase">Email</div>
                    <div className="text-xs sm:text-sm font-semibold truncate text-slate-100 group-hover:text-cyan-400">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-all text-slate-200 no-underline group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase">Phone</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-400">
                      +91 {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5 text-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-100">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <span className="text-xs text-slate-400 font-semibold uppercase">Follow:</span>
              <a
                href={personalInfo.socialLinks?.linkedin || personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.socialLinks?.github || personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>

          {/* Formspree Interactive Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-white/10 backdrop-blur-md shadow-xl flex flex-col justify-center">
            {status === 'success' ? (
              <div className="py-12 text-center">
                <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-6">
                  Thank you for reaching out. I have received your message and will get back to you shortly!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-outline py-2.5 px-6 text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs uppercase font-semibold text-slate-300 tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs uppercase font-semibold text-slate-300 tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs uppercase font-semibold text-slate-300 tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-rose-400 text-xs sm:text-sm p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>Failed to send message. Please email me directly at kandekaryash33@gmail.com</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary w-full py-3.5 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send size={18} />
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
