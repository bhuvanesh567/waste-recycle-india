"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TreePine, Wind, Recycle, DropletIcon, Zap, Award } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const impacts = [
  {
    icon: TreePine,
    value: 2.4,
    suffix: "M",
    label: "Trees Saved",
    description: "Equivalent trees saved through paper recycling programs",
    color: "#22c55e",
    unit: "trees",
  },
  {
    icon: Wind,
    value: 1.8,
    suffix: "M",
    label: "CO₂ Tons Offset",
    description: "Metric tons of CO₂ diverted from the atmosphere annually",
    color: "#3b82f6",
    unit: "tons",
  },
  {
    icon: Recycle,
    value: 500,
    suffix: "K+",
    label: "Tons Recycled",
    description: "Materials recovered and reintroduced into the supply chain",
    color: "#10b981",
    unit: "tons",
  },
  {
    icon: DropletIcon,
    value: 850,
    suffix: "M",
    label: "Gallons Water Saved",
    description: "Water conserved through responsible waste processing methods",
    color: "#06b6d4",
    unit: "gallons",
  },
  {
    icon: Zap,
    value: 120,
    suffix: "GWh",
    label: "Energy Generated",
    description: "Clean energy produced from organic waste via biogas capture",
    color: "#f59e0b",
    unit: "GWh",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Landfill Diversion",
    description: "Waste diverted from landfills through recycling and recovery",
    color: "#8b5cf6",
    unit: "percent",
  },
];

export default function ImpactSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-green-950/20 to-slate-950" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Large text behind */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="text-[20vw] font-black text-white/[0.02] select-none whitespace-nowrap">
            IMPACT
          </span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6"
          >
            <TreePine className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              Environmental Impact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-headline text-white mb-4"
          >
            Measurable Change for{" "}
            <span className="gradient-text">Our Planet</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Every pickup, every recycled ton, every offset credit — we track
            and report our environmental impact with complete transparency.
          </motion.p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, i) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-slate-900/40 hover:border-opacity-30 transition-all duration-500 hover:-translate-y-1 text-center"
              style={
                {
                  "--card-color": impact.color,
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = impact.color + "40";
                el.style.boxShadow = `0 20px 60px ${impact.color}15`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "";
                el.style.boxShadow = "";
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: impact.color + "20" }}
              >
                <impact.icon
                  className="w-8 h-8"
                  style={{ color: impact.color }}
                />
              </div>

              {/* Counter */}
              <div className="text-4xl font-black text-white mb-1 flex items-center justify-center gap-1">
                <AnimatedCounter
                  end={impact.value}
                  decimals={impact.value % 1 !== 0 ? 1 : 0}
                  duration={2.5}
                />
                <span style={{ color: impact.color }}>{impact.suffix}</span>
              </div>

              <div className="text-white font-semibold text-lg mb-2">
                {impact.label}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {impact.description}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: impact.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Progress bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 rounded-3xl glass border border-white/10"
        >
          <h3 className="text-white text-2xl font-bold mb-8 text-center">
            2030 Sustainability Targets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "Renewable Energy Usage", current: 68, target: 100, color: "#22c55e" },
              { label: "Electric Fleet Conversion", current: 45, target: 100, color: "#3b82f6" },
              { label: "Zero Landfill Goal", current: 72, target: 100, color: "#f59e0b" },
              { label: "Carbon Neutral Operations", current: 55, target: 100, color: "#8b5cf6" },
            ].map((item, i) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 text-sm font-medium">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold" style={{ color: item.color }}>
                    {item.current}%
                  </span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.current}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                    className="h-full rounded-full"
                    style={{ background: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
