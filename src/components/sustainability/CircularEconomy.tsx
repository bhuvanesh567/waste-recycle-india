"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, RefreshCcw } from "lucide-react";

const steps = [
  {
    id: 1,
    label: "Collect",
    icon: "🚛",
    description: "Smart route optimized collection from residential, commercial, and industrial sources",
    color: "#22c55e",
    angle: 270,
  },
  {
    id: 2,
    label: "Sort",
    icon: "🔄",
    description: "AI-powered sorting systems separate materials at our MRF facilities",
    color: "#3b82f6",
    angle: 342,
  },
  {
    id: 3,
    label: "Recycle",
    icon: "♻️",
    description: "Advanced processing converts sorted materials into recycled feedstock",
    color: "#f59e0b",
    angle: 54,
  },
  {
    id: 4,
    label: "Reuse",
    icon: "🌿",
    description: "Recovered materials are prepared for direct reuse and redistribution",
    color: "#8b5cf6",
    angle: 126,
  },
  {
    id: 5,
    label: "Manufacture",
    icon: "🏭",
    description: "Recycled content returned to manufacturers as raw material inputs",
    color: "#ef4444",
    angle: 198,
  },
];

export default function CircularEconomy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <RefreshCcw className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              Circular Economy Model
            </span>
          </div>
          <h2 className="text-headline text-white mb-4">
            Closing the Loop on{" "}
            <span className="gradient-text">Waste</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our circular economy model transforms the traditional linear
            take-make-dispose system into a continuous loop where waste becomes
            a resource.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Circular Diagram */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Center */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-28 h-28 rounded-full glass-green border-2 border-green-500/40 flex flex-col items-center justify-center">
                  <RefreshCcw className="w-10 h-10 text-green-400 mb-1" />
                  <span className="text-green-400 text-xs font-bold text-center leading-tight">
                    CIRCULAR
                    <br />
                    ECONOMY
                  </span>
                </div>
              </motion.div>

              {/* Connecting circle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 rounded-full border border-dashed border-green-500/20"
                style={{ margin: "20px" }}
              />

              {/* Step nodes */}
              {steps.map((step, i) => {
                const angleRad = (step.angle * Math.PI) / 180;
                const radius = 145;
                const centerX = 192;
                const centerY = 192;
                const x = centerX + radius * Math.cos(angleRad);
                const y = centerY + radius * Math.sin(angleRad);

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: x, top: y }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center cursor-default border-2 transition-transform hover:scale-110"
                      style={{
                        background: step.color + "20",
                        borderColor: step.color + "60",
                      }}
                    >
                      <span className="text-xl">{step.icon}</span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: step.color }}
                      >
                        {step.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Rotating outer ring */}
              <motion.div
                animate={isInView ? { rotate: 360 } : {}}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-green-500/10"
              />
            </div>
          </div>

          {/* Steps List */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-slate-900/40 hover:border-white/15 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl transition-transform group-hover:scale-110"
                  style={{ background: step.color + "20" }}
                >
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: step.color + "20",
                        color: step.color,
                      }}
                    >
                      Step {step.id}
                    </span>
                    <h3 className="text-white font-semibold">{step.label}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-slate-600 shrink-0 mt-1 rotate-90 group-hover:text-green-500 transition-colors" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
