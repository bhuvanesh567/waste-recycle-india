"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "VP of Operations",
    company: "GreenTech Industries",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    text: "EcoCycle completely transformed our waste management program. We've reduced landfill contributions by 78% and our employees love the transparent reporting. The AI-powered routing has saved us significant costs.",
    tags: ["Industrial", "Cost Savings", "Reporting"],
  },
  {
    id: 2,
    name: "James Thornton",
    role: "Sustainability Director",
    company: "Meridian Hotels Group",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "We partnered with EcoCycle across 47 of our hotel properties. The results have been exceptional. Our ESG score improved dramatically and we achieved LEED certification for 12 new builds thanks to their consulting team.",
    tags: ["Hospitality", "LEED", "ESG"],
  },
  {
    id: 3,
    name: "Dr. Lisa Chen",
    role: "Chief Environmental Officer",
    company: "Pacific Health Network",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 5,
    text: "Medical waste handling requires absolute precision and compliance. EcoCycle's hazardous waste division is unmatched in professionalism. Their real-time tracking and manifest documentation is flawless.",
    tags: ["Healthcare", "Compliance", "Hazardous"],
  },
  {
    id: 4,
    name: "Marcus Williams",
    role: "City Manager",
    company: "City of Riverside",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    text: "EcoCycle's municipal services contract has been transformative for Riverside. Resident satisfaction is at an all-time high, recycling rates doubled in 18 months, and we're on track for our 2030 zero-waste goals.",
    tags: ["Municipal", "Residential", "Zero Waste"],
  },
  {
    id: 5,
    name: "Amanda Foster",
    role: "Director of Facilities",
    company: "Nexus University",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    rating: 5,
    text: "Our 35,000-student campus produces significant waste. EcoCycle built a custom program that turned our waste stream into an educational opportunity. Students engage with our sustainability mission like never before.",
    tags: ["Education", "Composting", "Community"],
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null!);

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoplay, current]);

  const prev = () => {
    setAutoplay(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setAutoplay(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const testimonial = testimonials[current];

  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6"
          >
            <Star className="w-4 h-4 text-green-400 fill-green-400" />
            <span className="text-green-400 text-sm font-medium">
              Client Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-headline text-white mb-4"
          >
            Trusted by Industry{" "}
            <span className="gradient-text">Leaders</span>
          </motion.h2>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="glass border border-white/10 rounded-3xl p-8 lg:p-12 relative"
            >
              {/* Large Quote Icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-green-500/10" />

              <div className="grid lg:grid-cols-[auto,1fr] gap-8 items-start">
                {/* Author */}
                <div className="flex flex-col items-center text-center lg:w-48">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-4 ring-2 ring-green-500/30">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-green-400 text-sm">{testimonial.role}</div>
                  <div className="text-slate-500 text-sm">{testimonial.company}</div>

                  <div className="flex gap-1 mt-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 glass-green rounded-full text-green-400 text-xs font-medium border border-green-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-white/10 hover:border-green-500/50 bg-slate-800/50 hover:bg-green-600/20 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-green-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl border border-white/10 hover:border-green-500/50 bg-slate-800/50 hover:bg-green-600/20 text-slate-400 hover:text-white flex items-center justify-center transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "200+", label: "Cities Served" },
            { value: "10M+", label: "Happy Households" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "15+", label: "Years of Excellence" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="text-center p-5 rounded-2xl glass border border-white/5 hover:border-green-500/20 transition-colors"
            >
              <div className="text-2xl font-black text-white mb-1">
                {badge.value}
              </div>
              <div className="text-slate-400 text-sm">{badge.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
