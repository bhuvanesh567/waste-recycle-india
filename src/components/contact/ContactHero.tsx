"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Clock, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center bg-slate-950 overflow-hidden pt-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-green-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-8"
          >
            <MessageSquare className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Get In Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display text-white mb-6"
          >
            Let&apos;s Build a{" "}
            <span className="gradient-text">Cleaner Tomorrow</span> Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl leading-relaxed mb-10 max-w-xl"
          >
            Whether you need a quote, have a service question, or want to discuss sustainability strategy — our team is ready to help.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-3 glass border border-white/10 rounded-2xl px-5 py-3">
              <Clock className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-white text-sm font-medium">Response Time</div>
                <div className="text-slate-400 text-xs">Under 2 hours</div>
              </div>
            </div>
            <div className="flex items-center gap-3 glass border border-white/10 rounded-2xl px-5 py-3">
              <Phone className="w-5 h-5 text-green-400" />
              <div>
                <div className="text-white text-sm font-medium">24/7 Emergency</div>
                <div className="text-slate-400 text-xs">+1 (555) 123-4567</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
