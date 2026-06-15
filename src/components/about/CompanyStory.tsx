"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
                alt="EcoCycle Operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 glass border border-green-500/30 rounded-2xl p-5 hidden sm:block">
              <div className="text-3xl font-black text-white">15+</div>
              <div className="text-green-400 text-sm">Years of Innovation</div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-24 h-24 dot-pattern opacity-50 rounded-xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
              <span className="text-green-400 text-sm font-medium">Our Story</span>
            </div>

            <h2 className="text-headline text-white mb-6">
              From Local Roots to{" "}
              <span className="gradient-text">National Impact</span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "ISO 14001:2015 Certified",
                "EPA Recognized Partner",
                "Carbon Neutral Commitment",
                "B-Corp Certified",
                "RCRA Compliant",
                "Fleet: 100% EV by 2028",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
