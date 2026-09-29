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
    size: "md",
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Cosmetic Artistry",
    desc: "Designing breathtaking smiles using the most sophisticated veneers and whitening technology.",
    icon: Sparkles,
    size: "lg", // Bento large
    color: "bg-navy/10 text-navy"
  },
  {
    title: "Orthodontic Precision",
    desc: "Invisible alignment solutions tailored to the unique geometry of your face.",
    icon: Zap,
    size: "md",
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Emergency Response",
    desc: "Instant access to specialized care when every second counts.",
    icon: ShieldCheck,
    size: "sm",
    color: "bg-navy/10 text-navy"
  },
  {
    title: "Preventative Health",
    desc: "Predictive screenings and advanced hygiene for a lifetime of health.",
    icon: Heart,
    size: "sm",
    color: "bg-navy/10 text-navy"
  },
  {
    title: "Digital Diagnostics",
    desc: "3D imaging and AI-driven planning for zero-error dental procedures.",
    icon: Microscope,
    size: "md",
    color: "bg-primary/10 text-primary"
  },
];

const Services = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-h2 text-navy mb-6">Clinical Excellence <br /><span className="text-primary italic">Meeting Pure Luxury.</span></h2>
            <p className="text-body text-navy/60 leading-relaxed">
              We don't just treat teeth; we curate experiences. Our suites are designed for tranquility, and our care is designed for perfection.
            </p>
          </div>
          <div className="hidden md:block">
            <button className="btn-premium px-8 py-3 text-sm">View All Specialties</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={cn(
                "p-10 rounded-[2rem] border border-navy/5 transition-all duration-500 group",
                "bg-lightGray hover:bg-white hover:shadow-2xl hover:shadow-primary/10",
                service.size === 'lg' ? 'md:col-span-2' : 'col-span-1'
              )}
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                service.color
              )}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-navy/60 leading-relaxed mb-8 text-lg">{service.desc}</p>
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
