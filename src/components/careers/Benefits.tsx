"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  TrendingUp,
  Globe,
  Sun,
  Laptop,
  GraduationCap,
  Shield,
  Gift,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Comprehensive Health",
    description: "Full medical, dental, vision for you and your family. Mental health support included.",
    color: "#ef4444",
  },
  {
    icon: TrendingUp,
    title: "401(k) + Match",
    description: "6% employer match, fully vested from day one. Financial wellness resources.",
    color: "#22c55e",
  },
  {
    icon: Globe,
    title: "Remote-First Culture",
    description: "Flexible remote and hybrid options for eligible roles. Quarterly all-hands meetups.",
    color: "#3b82f6",
  },
  {
    icon: Sun,
    title: "Unlimited PTO",
    description: "Truly unlimited paid time off with minimum 15 days annual leave encouraged.",
    color: "#f59e0b",
  },
  {
    icon: Laptop,
    title: "$2,000 Home Office",
    description: "Annual home office stipend plus latest MacBook or PC setup from day one.",
    color: "#8b5cf6",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "$5,000 annual education budget for courses, conferences, and certifications.",
    color: "#06b6d4",
  },
  {
    icon: Shield,
    title: "Parental Leave",
    description: "16 weeks fully paid leave for primary caregivers, 8 weeks for secondary.",
    color: "#10b981",
  },
  {
    icon: Gift,
    title: "Green Perks",
    description: "EV charging at offices, commuter stipend, and sustainability bonus programs.",
    color: "#84cc16",
  },
];

export default function Benefits() {
  return (
    <section className="section-padding bg-slate-950 relative">
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-white mb-4">
            Benefits That Go{" "}
            <span className="gradient-text">Beyond the Basics</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We invest in our team because great people make great companies. Here&apos;s what you&apos;ll get.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group p-6 rounded-2xl border border-white/5 bg-slate-900/50 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = benefit.color + "40";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: benefit.color + "20" }}
              >
                <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
              </div>
              <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
