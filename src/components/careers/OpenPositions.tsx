"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  ArrowRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const positions = [
  {
    id: 1,
    title: "Operations Manager",
    department: "Operations",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$85,000 – $110,000",
    level: "Senior",
    description:
      "Lead day-to-day waste collection operations across 3 districts, managing 40+ drivers and ensuring 99%+ on-time service delivery.",
    tags: ["Leadership", "Logistics", "Operations"],
    posted: "2 days ago",
    urgent: true,
  },
  {
    id: 2,
    title: "Recycling Specialist",
    department: "Recycling",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$55,000 – $70,000",
    level: "Mid-level",
    description:
      "Manage material recovery facility operations, optimize sorting processes, and coordinate commodity sales with downstream processors.",
    tags: ["Recycling", "MRF Operations", "Quality Control"],
    posted: "3 days ago",
    urgent: false,
  },
  {
    id: 3,
    title: "Sustainability Analyst",
    department: "Sustainability",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 – $95,000",
    level: "Mid-level",
    description:
      "Analyze environmental performance data, prepare ESG reports, and develop sustainability improvement roadmaps for corporate clients.",
    tags: ["ESG", "Data Analysis", "Reporting"],
    posted: "1 week ago",
    urgent: false,
  },
  {
    id: 4,
    title: "Logistics Coordinator",
    department: "Logistics",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$52,000 – $65,000",
    level: "Entry-level",
    description:
      "Coordinate daily collection routes using our AI optimization platform, manage driver schedules, and resolve service exceptions.",
    tags: ["Logistics", "Scheduling", "Customer Service"],
    posted: "5 days ago",
    urgent: true,
  },
  {
    id: 5,
    title: "Environmental Compliance Officer",
    department: "Compliance",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$80,000 – $105,000",
    level: "Senior",
    description:
      "Ensure regulatory compliance across multi-state operations, manage EPA permits, and oversee environmental audit programs.",
    tags: ["Compliance", "EPA", "Environmental Law"],
    posted: "1 week ago",
    urgent: false,
  },
  {
    id: 6,
    title: "Software Engineer – Platform",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 – $160,000",
    level: "Senior",
    description:
      "Build and scale our AI route optimization platform serving 3M+ households. React/Node.js stack with a focus on real-time data systems.",
    tags: ["React", "Node.js", "AI/ML", "Remote"],
    posted: "2 days ago",
    urgent: true,
  },
  {
    id: 7,
    title: "Hazardous Waste Technician",
    department: "Hazardous Waste",
    location: "Houston, TX",
    type: "Full-time",
    salary: "$45,000 – $60,000",
    level: "Entry-level",
    description:
      "Handle, package, and transport hazardous materials following strict EPA and DOT guidelines. RCRA training provided.",
    tags: ["Hazmat", "Safety", "Field Operations"],
    posted: "4 days ago",
    urgent: false,
  },
  {
    id: 8,
    title: "Client Success Manager",
    department: "Sales & Success",
    location: "New York, NY",
    type: "Full-time",
    salary: "$75,000 – $95,000",
    level: "Mid-level",
    description:
      "Own relationships with 50+ enterprise accounts, drive contract renewals, and identify upsell opportunities for expanded services.",
    tags: ["Account Management", "Sales", "Customer Success"],
    posted: "3 days ago",
    urgent: false,
  },
];

const departments = ["All", "Operations", "Recycling", "Sustainability", "Logistics", "Technology", "Compliance", "Hazardous Waste", "Sales & Success"];

export default function OpenPositions() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = positions.filter((p) => {
    const matchesDept = activeFilter === "All" || p.department === activeFilter;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <section className="section-padding bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-headline text-white mb-4">
            Open{" "}
            <span className="gradient-text">Positions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            {positions.length} open roles across operations, technology, and sustainability
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-slate-500" />
            <span className="text-slate-400 text-sm">Filter:</span>
          </div>
        </div>

        {/* Department filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveFilter(dept)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeFilter === dept
                  ? "bg-green-600 text-white"
                  : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-white/5"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((position, i) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-2xl border border-white/5 bg-slate-800/30 hover:border-green-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-white font-semibold text-lg">
                      {position.title}
                    </h3>
                    {position.urgent && (
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                        Urgent
                      </span>
                    )}
                  </div>
                  <span className="text-green-400 text-sm font-medium">
                    {position.department}
                  </span>
                </div>
                <span className="text-slate-600 text-xs">{position.posted}</span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {position.description}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" />
                  {position.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="w-4 h-4" />
                  {position.type}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Briefcase className="w-4 h-4" />
                  {position.level}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <DollarSign className="w-4 h-4" />
                  {position.salary}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {position.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white/5 rounded-lg text-slate-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-green-400 text-sm font-medium hover:text-green-300 transition-colors group">
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">No positions match your search. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
