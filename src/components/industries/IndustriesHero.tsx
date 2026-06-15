"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function IndustriesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-slate-950 overflow-hidden pt-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-8"
        >
          <Briefcase className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-sm font-medium">Industries We Serve</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-display text-white mb-6 max-w-3xl"
        >
          Specialized Solutions for{" "}
          <span className="gradient-text">Every Industry</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-xl leading-relaxed max-w-2xl"
        >
          No two industries generate the same waste. We build custom programs
          that meet the unique regulatory, operational, and sustainability
          requirements of your specific sector.
        </motion.p>
      </div>
    </section>
  );
}
