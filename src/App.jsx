import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BubbleBackground from './components/BubbleBackground';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <BubbleBackground />
      <Navbar />
      <main style={{ width: '100%', overflowX: 'hidden' }}>
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Experience /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Resume /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
