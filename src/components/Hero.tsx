"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-gradient">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
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
            className="text-h1 text-navy leading-[1.1] mb-8"
          >
            Redefining the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-navy">
              Art of Dental Care.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-body text-navy/60 mb-12 max-w-lg leading-relaxed"
          >
            Experience a new standard of luxury dentistry. Combining clinical excellence with a patient-first approach across 18 Southern Ontario locations.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <Magnetic>
              <button className="btn-premium px-10 py-5 text-lg">Book Your Visit</button>
            </Magnetic>
            <div className="flex items-center gap-4 px-6 py-5 cursor-pointer group">
              <div className="w-12 h-12 rounded-full border border-navy/20 flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all duration-300">
                <span className="text-xl">→</span>
              </div>
              <span className="font-bold text-navy group-hover:text-primary transition-colors">Explore Locations</span>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e3a7a4b20f?auto=format&fit=crop&q=80&w=2070" 
              alt="Luxury Dental Clinic" 
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </motion.div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-60 h-60 bg-navy/10 rounded-full blur-3xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
