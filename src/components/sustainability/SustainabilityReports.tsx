"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, Award } from "lucide-react";

const reports = [
  {
    title: "Annual Sustainability Report 2024",
    description:
      "Comprehensive overview of our environmental performance, ESG metrics, and progress toward 2030 goals.",
    year: "2024",
    pages: "86 pages",
    size: "4.2 MB",
    type: "Annual Report",
    color: "#22c55e",
  },
  {
    title: "Carbon Footprint Assessment 2024",
    description:
      "Third-party verified Scope 1, 2, and 3 emissions inventory with reduction pathway analysis.",
    year: "2024",
    pages: "48 pages",
    size: "2.8 MB",
    type: "Carbon Report",
    color: "#3b82f6",
  },
  {
    title: "Social Impact Report 2024",
    description:
      "Community investment, workforce diversity, safety performance, and social equity initiatives.",
    year: "2024",
    pages: "62 pages",
    size: "3.5 MB",
    type: "Social Report",
    color: "#f59e0b",
  },
  {
    title: "Recycling Performance Data 2024",
    description:
      "Detailed material recovery rates, contamination levels, and commodity market performance by region.",
    year: "2024",
    pages: "34 pages",
    size: "1.9 MB",
    type: "Data Report",
    color: "#8b5cf6",
  },
  {
    title: "Annual Sustainability Report 2023",
    description:
      "Full 2023 sustainability performance with year-over-year comparisons and stakeholder feedback.",
    year: "2023",
    pages: "78 pages",
    size: "3.8 MB",
    type: "Annual Report",
    color: "#10b981",
  },
  {
    title: "GHG Verification Statement 2023",
    description:
      "Independent third-party verification of greenhouse gas emissions data per ISO 14064 standard.",
    year: "2023",
    pages: "12 pages",
    size: "0.8 MB",
    type: "Verification",
    color: "#ef4444",
  },
];

export default function SustainabilityReports() {
  return (
    <section className="section-padding bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6">
            <FileText className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Reports & Disclosures</span>
          </div>
          <h2 className="text-headline text-white mb-4">
            Transparent{" "}
            <span className="gradient-text">Reporting</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We publish comprehensive sustainability reports with full
            third-party verification. Transparency is the foundation of trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reports.map((report, i) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-white/5 bg-slate-800/40 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: report.color + "20" }}
                >
                  <FileText className="w-6 h-6" style={{ color: report.color }} />
                </div>
                <div>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{
                      background: report.color + "20",
                      color: report.color,
                    }}
                  >
                    {report.type}
                  </span>
                </div>
              </div>

              <h3 className="text-white font-semibold mb-2 leading-tight">
                {report.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {report.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {report.year}
                  </div>
                  <span>{report.pages}</span>
                  <span>{report.size}</span>
                </div>

                <button
                  className="flex items-center gap-1.5 text-xs font-medium transition-all"
                  style={{ color: report.color }}
                  aria-label={`Download ${report.title}`}
                >
                  <Download className="w-3.5 h-3.5" />
                  PDF
                </button>
              </div>

              {/* Bottom bar */}
              <div
                className="mt-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: report.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Verification badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "GRI Standards", icon: Award },
            { label: "TCFD Aligned", icon: Award },
            { label: "CDP Verified", icon: Award },
            { label: "B-Corp Certified", icon: Award },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 p-4 glass border border-green-500/20 rounded-2xl"
            >
              <badge.icon className="w-5 h-5 text-green-400" />
              <span className="text-slate-300 text-sm font-medium">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
