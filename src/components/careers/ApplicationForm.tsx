"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Briefcase, FileText, CheckCircle2 } from "lucide-react";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="section-padding bg-slate-900">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-3xl font-bold text-white">Application Received!</h3>
            <p className="text-slate-400 text-lg">
              Thank you for your interest in joining EcoCycle. Our talent team will review your application and reach out within 5 business days.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
            >
              Submit Another Application
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-slate-900 relative">
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-headline text-white mb-4">
            Apply <span className="gradient-text">Now</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Ready to join the team? Fill out the form below and we&apos;ll be in touch.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass border border-white/10 rounded-3xl p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Position of Interest *
              </label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <select
                  required
                  value={form.position}
                  onChange={(e) => setForm({ ...form, position: e.target.value })}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500 transition-colors appearance-none"
                >
                  <option value="">Select a position</option>
                  <option>Operations Manager</option>
                  <option>Recycling Specialist</option>
                  <option>Sustainability Analyst</option>
                  <option>Logistics Coordinator</option>
                  <option>Software Engineer</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              LinkedIn Profile / Portfolio URL
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/your-profile"
              value={form.linkedin}
              onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Cover Letter / Message *
            </label>
            <div className="relative">
              <FileText className="absolute left-4 top-4 w-4 h-4 text-slate-500" />
              <textarea
                required
                rows={5}
                placeholder="Tell us why you want to join EcoCycle and what you'll bring to the team..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-green hover:shadow-green-lg"
          >
            <Send className="w-5 h-5" />
            Submit Application
          </button>

          <p className="text-slate-600 text-xs text-center">
            By submitting, you agree to our Privacy Policy. We typically respond within 5 business days.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
