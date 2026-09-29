"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CreditCard, Building2, Calendar } from 'lucide-react';

const badges = [
  { icon: MapPin, text: "18 Locations" },
  { icon: CreditCard, text: "Flexible Payment Plans" },
  { icon: Building2, text: "Direct Billing" },
  { icon: Calendar, text: "Saturday Dentist" },
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 text-navy/70 font-medium"
            >
              <badge.icon className="w-6 h-6 text-primary" />
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
