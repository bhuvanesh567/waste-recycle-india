"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-slate-950 overflow-hidden pt-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-8"
        >
          <Settings className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-sm font-medium">Our Services</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-display text-white mb-6 max-w-3xl"
        >
          Complete Waste Solutions{" "}
          <span className="gradient-text">Tailored for You</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl"
        >
          From residential curbside collection to complex industrial waste streams,
          our comprehensive service portfolio covers every waste management need
          with sustainability at its core.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/contact#quote"
            className="flex items-center gap-2 px-7 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-2xl transition-all shadow-green hover:shadow-green-lg hover:-translate-y-0.5"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-7 py-4 glass border border-white/10 hover:border-green-500/40 text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5"
          >
            Talk to an Expert
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
