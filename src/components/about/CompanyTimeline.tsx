"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Zap, Globe, Cpu, Award, TrendingUp } from "lucide-react";

const timeline = [
  {
    year: "2010",
    icon: Leaf,
    title: "Founded in San Francisco",
    description:
      "EcoCycle was founded with a simple mission: make recycling accessible and profitable for communities. Started with 3 trucks and 500 residential clients.",
    color: "#22c55e",
    milestone: "Company Founded",
  },
  {
    year: "2013",
    icon: TrendingUp,
    title: "Commercial Expansion",
    description:
      "Launched commercial waste management services. Secured first Fortune 500 contract with a major tech company in Silicon Valley.",
    color: "#3b82f6",
    milestone: "1,000 Clients",
  },
  {
    year: "2015",
    icon: Globe,
    title: "National Rollout",
    description:
      "Expanded operations to 25 cities across California, Oregon, and Washington. Opened first industrial waste processing facility.",
    color: "#f59e0b",
    milestone: "25 Cities",
  },
  {
    year: "2017",
    icon: Zap,
    title: "Technology Transformation",
    description:
      "Launched AI-powered route optimization platform. Reduced operational costs by 35% and fuel consumption by 28% in the first year.",
    color: "#8b5cf6",
    milestone: "AI Platform Launch",
  },
  {
    year: "2019",
    icon: Cpu,
    title: "Smart City Integration",
    description:
      "Deployed IoT smart bin network across 80 cities. Real-time fill level monitoring enabled dynamic scheduling, cutting missed pickups by 95%.",
    color: "#ef4444",
    milestone: "IoT Network",
  },
  {
    year: "2021",
    icon: Award,
    title: "Industry Recognition",
    description:
      "Named #1 Sustainable Waste Company by Environmental Business Journal. Achieved ISO 14001 certification across all facilities.",
    color: "#10b981",
    milestone: "#1 Ranked",
  },
  {
    year: "2023",
    icon: Globe,
    title: "200+ Cities Served",
    description:
      "Reached milestone of 200 cities, 10 million households, and 500,000 tons recycled annually. Launched ESG consulting division.",
    color: "#22c55e",
    milestone: "200+ Cities",
  },
  {
    year: "2024",
    icon: Leaf,
    title: "Carbon Neutrality Pledge",
    description:
      "Committed to full carbon neutrality by 2028. Launched 100% electric vehicle fleet program and renewable energy transition at all facilities.",
    color: "#4ade80",
    milestone: "Net Zero Path",
  },
];

export default function CompanyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-white mb-4">
            Our Journey{" "}
            <span className="gradient-text">2010 – Present</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From a single recycling truck to a national sustainability leader —
            every milestone in our story.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-green-500/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex items-center gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${i % 2 === 0 ? "md:ml-auto" : ""}`}
                    style={{
                      background: item.color + "20",
                      color: item.color,
                    }}
                  >
                    {item.milestone}
                  </div>
                  <div className="p-5 rounded-2xl border border-white/5 bg-slate-900/60 hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-center gap-2 mb-2" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                      <span className="text-2xl font-black" style={{ color: item.color }}>
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center node */}
                <div className="relative hidden md:flex items-center justify-center flex-shrink-0 z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border-2"
                    style={{
                      background: item.color + "20",
                      borderColor: item.color + "60",
                    }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                </div>

                {/* Empty space for other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
