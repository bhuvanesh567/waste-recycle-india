"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Award } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-slate-950 overflow-hidden pt-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-8"
          >
            <Users className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">About EcoCycle</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display text-white mb-6"
          >
            15 Years of Leading{" "}
            <span className="gradient-text">Sustainable</span> Waste Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-xl leading-relaxed mb-12 max-w-2xl"
          >
            Founded in 2010, EcoCycle Waste Solutions has grown from a regional
            recycling company to a national leader in sustainable waste management,
            serving millions of customers across 200+ cities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Users, value: "2,500+", label: "Employees" },
              { icon: Globe, value: "200+", label: "Cities" },
              { icon: Award, value: "50+", label: "Awards" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 glass border border-white/10 rounded-2xl px-6 py-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
