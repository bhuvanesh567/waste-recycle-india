"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const services = [
  "Residential Collection",
  "Commercial Waste",
  "Industrial Solutions",
  "Recycling Programs",
  "Hazardous Materials",
  "Organic Composting",
  "E-Waste Recycling",
  "Sustainability Consulting",
  "Other",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-slate-900 relative" id="quote">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Contact <span className="gradient-text">Information</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Fill out the form and one of our specialists will reach out to
              discuss your specific needs and provide a detailed proposal.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <a
                    href="tel:+15551234567"
                    className="text-slate-400 hover:text-green-400 transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                  <div className="text-slate-600 text-xs mt-0.5">
                    Mon-Fri 7am-7pm PT | Emergency 24/7
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <a
                    href="mailto:info@ecocycle.com"
                    className="text-slate-400 hover:text-green-400 transition-colors"
                  >
                    info@ecocycle.com
                  </a>
                  <div className="text-slate-600 text-xs mt-0.5">
                    Response within 2 hours during business hours
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Headquarters</div>
                  <div className="text-slate-400 text-sm">
                    123 Green Way, Suite 100
                    <br />
                    San Francisco, CA 94102
                  </div>
                </div>
              </div>
            </div>

            {/* Service highlights */}
            <div className="p-5 glass-green border border-green-500/20 rounded-2xl">
              <h4 className="text-white font-semibold mb-3">
                Why Contact EcoCycle?
              </h4>
              <div className="space-y-2">
                {[
                  "Free waste audit included",
                  "Custom pricing within 24 hours",
                  "No commitment required",
                  "Dedicated account manager",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center p-12 glass border border-green-500/20 rounded-3xl">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400">
                  Thank you for reaching out. Our team will respond within 2
                  hours during business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
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
                      Company
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        placeholder="Your Company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Service Required
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500 transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-500" />
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your waste management needs, approximate volume, service frequency, and any specific requirements..."
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
                  Send Message
                </button>

                <p className="text-slate-600 text-xs text-center">
                  We typically respond within 2 business hours. Emergency services available 24/7.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
