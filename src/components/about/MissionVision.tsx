"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide innovative, sustainable waste management solutions that protect the environment, serve our communities, and create a circular economy where waste becomes a resource rather than a burden.",
    color: "#22c55e",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where zero waste ends up in landfills — where every material is recovered, repurposed, or recycled. We envision a circular economy powered by technology, data, and a deep commitment to sustainability.",
    color: "#3b82f6",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, innovation, and impact guide everything we do. We hold ourselves to the highest environmental and ethical standards while building long-term partnerships rooted in trust and results.",
    color: "#f59e0b",
  },
  {
    icon: Zap,
    title: "Our Commitment",
    description:
      "Carbon neutral operations by 2028, fully electric fleet by 2028, 95% landfill diversion by 2030. We back our commitments with transparent reporting and third-party verification.",
    color: "#8b5cf6",
  },
];

export default function MissionVision() {
  return (
    <section className="section-padding bg-slate-950 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-white mb-4">
            Purpose-Driven{" "}
            <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every decision we make is guided by our core principles and our
            unwavering commitment to a sustainable future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-white/5 bg-slate-900/50 hover:border-white/15 transition-all duration-500 hover:-translate-y-1"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = card.color + "40";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: card.color + "20" }}
              >
                <card.icon className="w-7 h-7" style={{ color: card.color }} />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
