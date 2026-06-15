"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const offices = [
  {
    city: "San Francisco",
    country: "Headquarters",
    address: "123 Green Way, Suite 100",
    cityState: "San Francisco, CA 94102",
    phone: "+1 (555) 123-4567",
    email: "sf@ecocycle.com",
    hours: "Mon-Fri: 7am-7pm PT",
    color: "#22c55e",
    description: "Our global headquarters housing executive leadership, technology, and western operations.",
  },
  {
    city: "Chicago",
    country: "Midwest Regional Office",
    address: "456 Sustainable Blvd, Floor 8",
    cityState: "Chicago, IL 60601",
    phone: "+1 (555) 234-5678",
    email: "chicago@ecocycle.com",
    hours: "Mon-Fri: 7am-7pm CT",
    color: "#3b82f6",
    description: "Serving 65 cities across Illinois, Indiana, Ohio, and Michigan with 450+ employees.",
  },
  {
    city: "New York",
    country: "Northeast Regional Office",
    address: "789 Circular Ave, Suite 2200",
    cityState: "New York, NY 10001",
    phone: "+1 (555) 345-6789",
    email: "nyc@ecocycle.com",
    hours: "Mon-Fri: 7am-7pm ET",
    color: "#f59e0b",
    description: "Our largest regional hub serving NYC metro area, New England, and Mid-Atlantic states.",
  },
];

export default function OfficeLocations() {
  return (
    <section className="section-padding bg-slate-950 relative">
      <div className="absolute inset-0 dot-pattern opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-headline text-white mb-4">
            Our{" "}
            <span className="gradient-text">Office Locations</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Strategically located offices to serve you better across the United States.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-white/5 bg-slate-900/50 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = office.color + "40";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              {/* City badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-medium mb-5"
                style={{
                  background: office.color + "20",
                  color: office.color,
                }}
              >
                <MapPin className="w-4 h-4" />
                {office.city}
              </div>

              <div className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-2">
                {office.country}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {office.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div className="text-slate-400">
                    {office.address}
                    <br />
                    {office.cityState}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                  <a
                    href={`tel:${office.phone.replace(/\D/g, "")}`}
                    className="text-slate-400 hover:text-green-400 transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-slate-400 hover:text-green-400 transition-colors"
                  >
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span className="text-slate-400">{office.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/5 h-80 glass"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-green-400/30 mx-auto mb-3" />
              <p className="text-slate-500">Interactive map coming soon</p>
              <p className="text-slate-600 text-sm">
                Serving 200+ cities across the United States
              </p>
            </div>
          </div>
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Dot markers */}
          {[
            { top: "35%", left: "18%", label: "SF", color: "#22c55e" },
            { top: "38%", left: "52%", label: "CHI", color: "#3b82f6" },
            { top: "35%", left: "82%", label: "NYC", color: "#f59e0b" },
          ].map((marker) => (
            <motion.div
              key={marker.label}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
              className="absolute flex flex-col items-center"
              style={{ top: marker.top, left: marker.left }}
            >
              <div
                className="w-3 h-3 rounded-full shadow-lg"
                style={{ background: marker.color, boxShadow: `0 0 10px ${marker.color}80` }}
              />
              <div className="text-xs mt-1 font-bold" style={{ color: marker.color }}>
                {marker.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
