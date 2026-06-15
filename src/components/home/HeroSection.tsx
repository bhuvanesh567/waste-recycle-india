"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const EarthGlobe = dynamic(() => import("@/components/three/EarthGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full border-4 border-green-500/30 border-t-green-500 animate-spin" />
    </div>
  ),
});

const stats = [
  { value: 500, suffix: "K+", label: "Tons Recycled" },
  { value: 200, suffix: "+", label: "Cities Served" },
  { value: 10, suffix: "M+", label: "Households" },
  { value: 98, suffix: "%", label: "Satisfaction" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl blob" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl blob blob-delay-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-700/5 rounded-full blur-3xl blob blob-delay-4" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">
                #1 Sustainable Waste Management Company
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-display text-white mb-6"
            >
              Smart Waste{" "}
              <span className="gradient-text">Management</span> For A Cleaner{" "}
              <span className="gradient-text">Tomorrow</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl"
            >
              EcoCycle Waste Solutions delivers cutting-edge waste management,
              recycling, and sustainability services that transform environmental
              challenges into circular economy opportunities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-7 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-green hover:shadow-green-lg hover:-translate-y-1 text-base"
              >
                Request Pickup
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact#quote"
                className="group flex items-center gap-3 px-7 py-4 glass border border-white/10 hover:border-green-500/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 text-base"
              >
                <Play className="w-4 h-4 text-green-400 fill-green-400" />
                Get Free Quote
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="glass border border-white/10 rounded-2xl p-4 text-center hover:border-green-500/30 transition-colors"
                >
                  <div className="text-2xl font-bold text-white flex items-center justify-center gap-1">
                    <AnimatedCounter
                      end={stat.value}
                      duration={2.5}
                      delay={1 + i * 0.2}
                    />
                    <span className="text-green-400">{stat.suffix}</span>
                  </div>
                  <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Globe */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative w-full aspect-square max-w-xl mx-auto"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-green-500/5 blur-3xl" />
              <div className="absolute inset-8 rounded-full border border-green-500/20 animate-spin-slow" />
              <div className="absolute inset-12 rounded-full border border-green-500/10 animate-spin-slow [animation-direction:reverse] [animation-duration:15s]" />

              {/* Globe Canvas */}
              <div className="relative w-full h-full">
                <EarthGlobe />
              </div>

              {/* Floating Labels */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-0 glass border border-green-500/30 rounded-2xl px-4 py-3 hidden lg:block"
              >
                <div className="text-green-400 font-bold text-lg">500K+</div>
                <div className="text-slate-400 text-xs">Tons Recycled</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-16 left-0 glass border border-green-500/30 rounded-2xl px-4 py-3 hidden lg:block"
              >
                <div className="text-green-400 font-bold text-lg">98%</div>
                <div className="text-slate-400 text-xs">Customer Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-green-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
