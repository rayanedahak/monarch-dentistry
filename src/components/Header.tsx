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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'h-20 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'h-24 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
            M
          </div>
          <span className="text-navy font-extrabold text-2xl tracking-tight">
            Monarch <span className="text-primary">Dentistry</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-navy/70 font-semibold">
          {['Experience', 'Specialties', 'Locations', 'Patient Portal'].map((item) => (
            <a key={item} href="#" className="hover:text-primary transition-colors duration-300 text-sm uppercase tracking-widest">
              {item}
            </a>
          ))}
        </nav>

        <Magnetic>
          <button className="btn-luxury text-sm px-6 py-3">
            Book Appointment
          </button>
        </Magnetic>
      </div>
    </header>
  );
};

export default Header;
