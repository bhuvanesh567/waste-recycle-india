"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  Recycle,
  AlertTriangle,
  Leaf,
  ArrowRight,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Collection",
    description:
      "Door-to-door waste pickup services designed for households of all sizes. Flexible scheduling, reliable drivers, and eco-friendly disposal methods.",
    color: "#22c55e",
    bg: "from-green-500/10 to-green-600/5",
    features: ["Weekly/Bi-weekly pickup", "Recycling sorted", "Bulk pickup"],
    href: "/services#residential",
  },
  {
    icon: Building2,
    title: "Commercial Waste",
    description:
      "Comprehensive waste management solutions for businesses, offices, and retail establishments. Streamlined processes that keep your premises clean.",
    color: "#3b82f6",
    bg: "from-blue-500/10 to-blue-600/5",
    features: [
      "Custom contracts",
      "Compliance reporting",
      "24/7 emergency",
    ],
    href: "/services#commercial",
  },
  {
    icon: Factory,
    title: "Industrial Solutions",
    description:
      "Heavy-duty waste management for manufacturing plants, warehouses, and industrial facilities. Engineered for large-scale operations.",
    color: "#f59e0b",
    bg: "from-amber-500/10 to-amber-600/5",
    features: ["Bulk disposal", "Hazardous handling", "On-site management"],
    href: "/services#industrial",
  },
  {
    icon: Recycle,
    title: "Recycling Services",
    description:
      "Advanced sorting and processing facilities that maximize material recovery rates. Paper, plastic, glass, metal, and electronics recycling.",
    color: "#10b981",
    bg: "from-emerald-500/10 to-emerald-600/5",
    features: [
      "Single-stream recycling",
      "Material recovery",
      "Circular economy",
    ],
    href: "/services#recycling",
  },
  {
    icon: AlertTriangle,
    title: "Hazardous Waste",
    description:
      "Safe and compliant disposal of hazardous, medical, and chemical waste. Fully licensed handlers following all EPA and regulatory guidelines.",
    color: "#ef4444",
    bg: "from-red-500/10 to-red-600/5",
    features: ["EPA certified", "Manifest tracking", "Secure disposal"],
    href: "/services#hazardous",
  },
  {
    icon: Leaf,
    title: "Sustainability Consulting",
    description:
      "Strategic sustainability advisory services to help your organization reduce waste, lower carbon footprint, and achieve ESG goals.",
    color: "#8b5cf6",
    bg: "from-violet-500/10 to-violet-600/5",
    features: ["ESG reporting", "Carbon audit", "Waste reduction plans"],
    href: "/services#consulting",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={`relative h-full p-6 rounded-2xl bg-gradient-to-br ${service.bg} border border-white/5 hover:border-opacity-40 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden`}
        style={
          {
            "--hover-border-color": service.color,
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            service.color + "40";
          (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${service.color}15`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "";
          (e.currentTarget as HTMLElement).style.boxShadow = "";
        }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${service.color}08, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: service.color + "20" }}
        >
          <service.icon
            className="w-7 h-7"
            style={{ color: service.color }}
          />
        </div>

        {/* Content */}
        <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-green-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <Zap className="w-3.5 h-3.5 shrink-0" style={{ color: service.color }} />
              <span className="text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={service.href}
          className="flex items-center gap-2 text-sm font-medium transition-all duration-200 group/link"
          style={{ color: service.color }}
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesOverview() {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="section-padding bg-slate-950 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/30 mb-6"
          >
            <Recycle className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-headline text-white mb-4"
          >
            Complete Waste Management{" "}
            <span className="gradient-text">Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            From residential pickup to industrial waste management, we offer
            comprehensive services tailored to your specific needs.
          </motion.p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-green-500/30 hover:border-green-500 text-green-400 hover:text-white hover:bg-green-600 font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
