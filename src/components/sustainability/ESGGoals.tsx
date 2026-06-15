"use client";

import React from "react";
import { motion } from "framer-motion";
import { TreePine, Users, Building2, TrendingUp } from "lucide-react";

const esgPillars = [
  {
    category: "Environmental",
    icon: TreePine,
    color: "#22c55e",
    goals: [
      {
        title: "Carbon Neutral by 2028",
        description:
          "100% electric fleet, renewable energy in all facilities, Scope 1 & 2 emissions fully offset.",
        progress: 55,
        target: "Net Zero",
      },
      {
        title: "95% Landfill Diversion",
        description:
          "Expand material recovery to maximize waste diversion from all collection routes.",
        progress: 72,
        target: "2030 Goal",
      },
      {
        title: "Renewable Energy Transition",
        description:
          "100% renewable electricity across all processing facilities and office locations.",
        progress: 68,
        target: "100% Renewables",
      },
      {
        title: "Water Stewardship",
        description:
          "Reduce water usage in operations by 40% through closed-loop recycling systems.",
        progress: 44,
        target: "40% Reduction",
      },
    ],
  },
  {
    category: "Social",
    icon: Users,
    color: "#3b82f6",
    goals: [
      {
        title: "Living Wage for All Employees",
        description:
          "All 2,500 employees earn at least 120% of local living wage with full benefits.",
        progress: 100,
        target: "Achieved",
      },
      {
        title: "Workforce Diversity",
        description:
          "50% women and underrepresented groups in senior leadership roles by 2026.",
        progress: 42,
        target: "50% Diversity",
      },
      {
        title: "Community Investment",
        description:
          "$10M invested in environmental education and community sustainability programs.",
        progress: 65,
        target: "$10M Goal",
      },
      {
        title: "Zero Workplace Incidents",
        description:
          "Industry-leading safety record with TRIR below 1.0 across all operations.",
        progress: 88,
        target: "TRIR < 1.0",
      },
    ],
  },
  {
    category: "Governance",
    icon: Building2,
    color: "#f59e0b",
    goals: [
      {
        title: "Board Independence",
        description:
          "Majority independent board with dedicated ESG committee and quarterly reporting.",
        progress: 100,
        target: "Achieved",
      },
      {
        title: "Supply Chain Transparency",
        description:
          "100% of major suppliers ESG-rated and audited for environmental compliance.",
        progress: 78,
        target: "100% Verified",
      },
      {
        title: "Data Privacy & Security",
        description:
          "Zero data breaches and full GDPR/CCPA compliance across all systems.",
        progress: 100,
        target: "Full Compliance",
      },
      {
        title: "Climate Risk Disclosure",
        description:
          "Full TCFD-aligned climate risk reporting with scenario analysis and financial impact.",
        progress: 90,
        target: "TCFD Aligned",
      },
    ],
  },
];

export default function ESGGoals() {
  return (
    <section className="section-padding bg-slate-900 relative">
      <div className="absolute inset-0 dot-pattern opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              ESG Framework
            </span>
          </div>
          <h2 className="text-headline text-white mb-4">
            Our ESG Goals &{" "}
            <span className="gradient-text">Progress</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We measure what matters. Our ESG commitments are tracked, reported,
            and third-party verified annually.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {esgPillars.map((pillar, pi) => (
            <motion.div
              key={pillar.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pi * 0.15 }}
            >
              {/* Pillar header */}
              <div
                className="flex items-center gap-3 mb-6 p-4 rounded-2xl"
                style={{ background: pillar.color + "15" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: pillar.color + "25" }}
                >
                  <pillar.icon
                    className="w-6 h-6"
                    style={{ color: pillar.color }}
                  />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">
                    {pillar.category}
                  </div>
                  <div className="text-sm" style={{ color: pillar.color }}>
                    {pillar.goals.length} Key Goals
                  </div>
                </div>
              </div>

              {/* Goals list */}
              <div className="space-y-5">
                {pillar.goals.map((goal, gi) => (
                  <motion.div
                    key={goal.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pi * 0.1 + gi * 0.1 }}
                    className="p-5 rounded-2xl border border-white/5 bg-slate-900/60"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-medium text-sm leading-tight pr-2">
                        {goal.title}
                      </h4>
                      <span
                        className="text-xs font-bold shrink-0 px-2 py-0.5 rounded-full"
                        style={{
                          background: pillar.color + "20",
                          color: pillar.color,
                        }}
                      >
                        {goal.progress === 100 ? "✓" : `${goal.progress}%`}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mb-3 leading-relaxed">
                      {goal.description}
                    </p>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        className="h-full rounded-full"
                        style={{ background: pillar.color }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-slate-600">Progress</span>
                      <span
                        className="text-xs font-medium"
                        style={{ color: pillar.color }}
                      >
                        {goal.target}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
