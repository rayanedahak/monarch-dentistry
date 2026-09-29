"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, Zap, ShieldCheck, Heart, Microscope } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "General Dentistry",
    desc: "Precision care focusing on long-term oral health through advanced diagnostics.",
    icon: Stethoscope,
    color: "text-primary",
  },
  {
    title: "Cosmetic Artistry",
    desc: "Designing breathtaking smiles using the most sophisticated veneers and whitening technology.",
    icon: Sparkles,
    color: "text-navy",
  },
  {
    title: "Orthodontic Precision",
    desc: "Invisible alignment solutions tailored to the unique geometry of your face.",
    icon: Zap,
    color: "text-primary",
  },
  {
    title: "Emergency Response",
    desc: "Instant access to specialized care when every second counts.",
    icon: ShieldCheck,
    color: "text-navy",
  },
  {
    title: "Preventative Health",
    desc: "Predictive screenings and advanced hygiene for a lifetime of health.",
    icon: Heart,
    color: "text-primary",
  },
  {
    title: "Digital Diagnostics",
    desc: "3D imaging and AI-driven planning for zero-error dental procedures.",
    icon: Microscope,
    color: "text-navy",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Specialties
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-h2 text-navy mb-6"
          >
            Clinical Excellence <br />
            <span className="italic opacity-80">Meeting Pure Luxury.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body text-navy/60 max-w-2xl mx-auto leading-relaxed"
          >
            We don't just treat teeth; we curate experiences. Our suites are designed for tranquility, and our care is designed for perfection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[2.5rem] bg-light-gray border border-transparent hover:border-primary/20 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white",
                service.color,
                "bg-white shadow-sm border border-gray-100"
              )}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-navy/60 leading-relaxed mb-8 text-lg">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 font-bold text-navy group-hover:text-primary cursor-pointer transition-colors">
                Explore Service <span className="group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
