"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Element: Sophisticated geometric shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-light-gray -z-10 hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now Accepting CDCP Patients
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-h1 text-navy leading-tight mb-8"
          >
            The Gold Standard of <br />
            <span className="text-primary italic">Dental Excellence.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-body text-navy/60 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            A sanctuary of oral health where cutting-edge technology meets a bespoke patient experience. Serving Southern Ontario's most discerning patients across 18 locations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
          >
            <Magnetic>
              <button className="btn-luxury px-10 py-5 text-lg">Book Appointment</button>
            </Magnetic>
            <Magnetic>
              <button className="btn-outline-luxury px-10 py-5 text-lg">Explore Locations</button>
            </Magnetic>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e3a7a4b20f?auto=format&fit=crop&q=80&w=2070" 
              alt="Premium Clinic" 
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>
          {/* Accents */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-2xl -z-10 rotate-12 opacity-20" />
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-navy rounded-full -z-10 opacity-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
