"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, TreePine, Wind, Sun } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function SustainabilityHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden pt-24">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/40 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Floating icons */}
        {[
          { icon: Leaf, pos: "top-20 left-20", delay: 0 },
          { icon: TreePine, pos: "top-40 right-32", delay: 1 },
          { icon: Wind, pos: "bottom-40 left-32", delay: 0.5 },
          { icon: Sun, pos: "bottom-20 right-20", delay: 1.5 },
        ].map(({ icon: Icon, pos, delay }) => (
          <motion.div
            key={pos}
            animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
            transition={{ duration: 4 + delay, repeat: Infinity, delay }}
            className={`absolute ${pos} hidden lg:block`}
          >
            <Icon className="w-8 h-8 text-green-500/20" />
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green border border-green-500/30 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">
              Our Sustainability Commitment
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display text-white mb-6"
          >
            Building a{" "}
            <span className="gradient-text">Regenerative</span> Future for Our
            Planet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl leading-relaxed mb-12 max-w-2xl"
          >
            Sustainability isn&apos;t a department at EcoCycle — it&apos;s our
            entire business model. Every decision we make is evaluated through
            the lens of environmental impact, social responsibility, and
            long-term planetary health.
          </motion.p>

          {/* Key metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: 60, suffix: "%", label: "Carbon Reduced Since 2018" },
              { value: 95, suffix: "%", label: "Landfill Diversion Rate" },
              { value: 2.4, suffix: "M", label: "Trees Equivalent Saved" },
              { value: 100, suffix: "%", label: "Renewable Energy Target" },
            ].map((metric, i) => (
              <div
                key={metric.label}
                className="p-5 glass-green border border-green-500/20 rounded-2xl text-center"
              >
                <div className="text-3xl font-black text-white mb-1 flex items-center justify-center gap-1">
                  <AnimatedCounter
                    end={metric.value}
                    decimals={metric.value % 1 !== 0 ? 1 : 0}
                    duration={2}
                    delay={0.5 + i * 0.2}
                  />
                  <span className="text-green-400">{metric.suffix}</span>
                </div>
                <div className="text-slate-400 text-xs leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
