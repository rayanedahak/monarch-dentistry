"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'h-16 bg-white/80 backdrop-blur-xl shadow-sm border-b border-navy/5' : 'h-24 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110">
            <span className="relative z-10">M</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
          </div>
          <span className="text-navy font-bold text-xl tracking-tight">Monarch <span className="text-primary">Dentistry</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-navy/70 font-medium">
          {['Experience', 'Specialties', 'Locations', 'Patient Portal'].map((item) => (
            <a key={item} href="#" className="relative overflow-hidden group py-2">
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{item}</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
        </nav>

        <Magnetic>
          <button className="btn-premium py-2.5 px-6 text-sm">
            Book Appointment
          </button>
        </Magnetic>
      </div>
    </header>
  );
};

export default Header;
