"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Calendar, CheckCircle2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green border border-green-500/30 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">
              Ready to Get Started?
            </span>
          </div>

          <h2 className="text-display text-white mb-6">
            Make the Switch to{" "}
            <span className="gradient-text">Smarter</span> Waste Management
          </h2>

          <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Join thousands of businesses and municipalities that trust EcoCycle
            to handle their waste management needs sustainably and efficiently.
          </p>

          {/* Features list */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            {[
              "Free consultation",
              "No long-term contracts",
              "24/7 support",
              "Real-time tracking",
            ].map((feat) => (
              <div key={feat} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-slate-300 text-sm">{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact#schedule"
              className="group flex items-center gap-3 px-8 py-5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-green hover:shadow-green-lg hover:-translate-y-1 text-lg"
            >
              <Calendar className="w-5 h-5" />
              Schedule Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-3 px-8 py-5 glass border border-white/10 hover:border-green-500/40 text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              <Phone className="w-5 h-5 text-green-400" />
              Contact Our Team
            </Link>
          </div>

          {/* Bottom note */}
          <p className="text-slate-600 text-sm mt-8">
            Average response time under 2 hours. Available 24/7 for emergencies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
