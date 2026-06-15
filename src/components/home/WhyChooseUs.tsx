"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Cpu,
  Recycle,
  TreePine,
  Route,
  HeadphonesIcon,
  Globe,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: Cpu,
    title: "Smart Collection Systems",
    description:
      "IoT-enabled smart bins and sensors optimize collection routes in real-time, reducing fuel consumption by up to 30% and improving efficiency.",
    stat: "30%",
    statLabel: "Fuel Reduction",
    color: "#22c55e",
  },
  {
    icon: Recycle,
    title: "Sustainable Recycling",
    description:
      "Advanced material recovery facilities achieve 85%+ recycling rates, diverting millions of tons of waste from landfills annually.",
    stat: "85%+",
    statLabel: "Recovery Rate",
    color: "#3b82f6",
  },
  {
    icon: TreePine,
    title: "Carbon Reduction Programs",
    description:
      "Our certified carbon offset programs and electric fleet initiative have reduced our operational carbon footprint by 60% since 2018.",
    stat: "60%",
    statLabel: "CO₂ Reduced",
    color: "#10b981",
  },
  {
    icon: Route,
    title: "AI Route Optimization",
    description:
      "Machine learning algorithms analyze traffic, fill levels, and schedules to create optimal collection routes saving time and resources.",
    stat: "40%",
    statLabel: "Time Saved",
    color: "#f59e0b",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support with dedicated account managers, emergency response teams, and real-time tracking portal access.",
    stat: "< 2hr",
    statLabel: "Response Time",
    color: "#8b5cf6",
  },
  {
    icon: Globe,
    title: "Environmental Impact",
    description:
      "Every contract comes with detailed environmental impact reporting, carbon footprint tracking, and sustainability benchmarking tools.",
    stat: "100%",
    statLabel: "Transparency",
    color: "#ef4444",
  },
];

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="relative p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:border-white/15 transition-all duration-500 hover:-translate-y-1 h-full">
        {/* Number */}
        <div className="absolute top-6 right-6 text-6xl font-black opacity-5 text-white select-none">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Icon + Stat */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: benefit.color + "20" }}
          >
            <benefit.icon
              className="w-7 h-7"
              style={{ color: benefit.color }}
            />
          </div>
          <div className="text-right">
            <div
              className="text-2xl font-black"
              style={{ color: benefit.color }}
            >
              {benefit.stat}
            </div>
            <div className="text-slate-500 text-xs">{benefit.statLabel}</div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-white text-xl font-semibold mb-3">
          {benefit.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {benefit.description}
        </p>

        {/* Bottom line */}
        <div
          className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ background: benefit.color }}
        />
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={titleRef}
          className="flex flex-col lg:flex-row gap-12 items-start mb-16"
        >
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6"
            >
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">
                Why EcoCycle
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-headline text-white"
            >
              The Industry&apos;s Most{" "}
              <span className="gradient-text">Advanced</span> Platform
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex-1 lg:pt-8"
          >
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              We combine cutting-edge technology with deep environmental
              expertise to deliver waste management solutions that are smarter,
              greener, and more cost-effective than traditional approaches.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "ISO 14001 Certified",
                "Carbon Neutral by 2030",
                "AI-Powered",
                "Real-time Tracking",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 glass-green rounded-xl text-green-400 text-sm font-medium border border-green-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
