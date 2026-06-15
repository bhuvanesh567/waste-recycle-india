"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Globe, TrendingUp } from "lucide-react";

export default function CareersHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-slate-950 overflow-hidden pt-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-8"
          >
            <Heart className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              Join Our Mission
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display text-white mb-6"
          >
            Work That{" "}
            <span className="gradient-text">Matters</span> for a Planet That
            Needs Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl leading-relaxed mb-12 max-w-2xl"
          >
            Every role at EcoCycle contributes to a cleaner, healthier planet.
            Join 2,500+ passionate people building the future of sustainable
            waste management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Users, value: "2,500+", label: "Team Members" },
              { icon: Globe, value: "200+", label: "Locations" },
              { icon: TrendingUp, value: "85%", label: "Internal Promotions" },
              { icon: Heart, value: "4.7/5", label: "Glassdoor Rating" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass border border-white/10 rounded-2xl p-5 text-center hover:border-green-500/20 transition-colors"
              >
                <stat.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
