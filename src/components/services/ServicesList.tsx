"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  Recycle,
  AlertTriangle,
  Leaf,
  Monitor,
  TreePine,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Waste Collection",
    subtitle: "Clean communities, one home at a time",
    description:
      "Our residential collection services offer flexible scheduling, reliable pickups, and a comprehensive approach to household waste including general waste, recyclables, yard waste, and bulk items. We serve single-family homes, apartments, condos, and HOA communities.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: [
      "Flexible weekly and bi-weekly scheduling",
      "Multi-stream sorting (recyclables, organics, general)",
      "Bulk item and furniture pickup",
      "Holiday schedule management",
      "Online account management portal",
      "Missed pickup guarantee",
    ],
    color: "#22c55e",
    stats: [
      { value: "3M+", label: "Homes Served" },
      { value: "99.2%", label: "On-time Rate" },
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Waste Solutions",
    subtitle: "Streamlined waste programs for businesses",
    description:
      "Tailored waste management programs for offices, retail, restaurants, healthcare facilities, and all commercial enterprises. We design custom waste reduction plans that lower disposal costs, improve compliance, and enhance your sustainability credentials.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    features: [
      "Customized service agreements",
      "Dedicated account manager",
      "Waste audits and reduction planning",
      "Regulatory compliance support",
      "Digital reporting dashboards",
      "Emergency overflow services",
    ],
    color: "#3b82f6",
    stats: [
      { value: "50K+", label: "Businesses" },
      { value: "40%", label: "Cost Reduction" },
    ],
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Waste Management",
    subtitle: "Heavy-duty solutions for heavy industries",
    description:
      "Comprehensive waste management for manufacturing, construction, mining, and other industrial sectors. We handle high-volume, complex waste streams with specialized equipment, certified personnel, and rigorous compliance protocols.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    features: [
      "On-site waste management coordinators",
      "Roll-off container services",
      "Compactor and baler programs",
      "Waste-to-energy conversion",
      "Zero-landfill certification programs",
      "RCRA and EPA compliance",
    ],
    color: "#f59e0b",
    stats: [
      { value: "1,200+", label: "Facilities" },
      { value: "85%", label: "Diversion Rate" },
    ],
  },
  {
    id: "recycling",
    icon: Recycle,
    title: "Recycling Programs",
    subtitle: "Maximizing material recovery at every level",
    description:
      "State-of-the-art material recovery facilities process paper, cardboard, plastics (#1-7), glass, aluminum, steel, and mixed metals. Our single-stream program makes recycling simple for residential and commercial customers alike.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    features: [
      "Single-stream recycling collection",
      "Materials Recovery Facility (MRF)",
      "Paper and cardboard processing",
      "Plastic film recycling",
      "Electronics and e-waste",
      "Commodity market reporting",
    ],
    color: "#10b981",
    stats: [
      { value: "500K", label: "Tons/Year" },
      { value: "85%", label: "Recovery Rate" },
    ],
  },
  {
    id: "hazardous",
    icon: AlertTriangle,
    title: "Hazardous Material Disposal",
    subtitle: "Safe, compliant, fully documented",
    description:
      "Licensed hazardous waste disposal services for industrial chemicals, medical waste, laboratory materials, and household hazardous waste. Every shipment is tracked from cradle to grave with full regulatory documentation.",
    image: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80",
    features: [
      "EPA and DOT certified handlers",
      "Cradle-to-grave manifest tracking",
      "Medical and pharmaceutical waste",
      "Chemical and solvent disposal",
      "Emergency spill response",
      "Training and compliance programs",
    ],
    color: "#ef4444",
    stats: [
      { value: "100%", label: "Compliance" },
      { value: "0", label: "Violations" },
    ],
  },
  {
    id: "composting",
    icon: TreePine,
    title: "Organic Waste Composting",
    subtitle: "Turning food waste into fertile opportunity",
    description:
      "Large-scale food and organic waste composting programs for restaurants, hotels, universities, and municipalities. We convert food scraps, yard waste, and biosolids into premium compost products sold back to farms and landscapers.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    features: [
      "Food waste collection",
      "Yard and green waste",
      "Biosolids processing",
      "Commercial composting facility",
      "Finished compost sales",
      "Carbon credit generation",
    ],
    color: "#84cc16",
    stats: [
      { value: "200K", label: "Tons Composted" },
      { value: "60%", label: "Methane Reduction" },
    ],
  },
  {
    id: "ewaste",
    icon: Monitor,
    title: "E-Waste Recycling",
    subtitle: "Responsible electronics recycling",
    description:
      "Certified e-waste collection and recycling for computers, phones, TVs, and all electronic devices. We ensure secure data destruction, responsible material recovery, and zero landfill disposal of all electronics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    features: [
      "R2 Certified facility",
      "Secure data destruction (NIST 800-88)",
      "Corporate asset disposition",
      "Community drop-off events",
      "Battery recycling",
      "Certificate of Destruction provided",
    ],
    color: "#06b6d4",
    stats: [
      { value: "5M+", label: "Devices Recycled" },
      { value: "100%", label: "Data Security" },
    ],
  },
  {
    id: "consulting",
    icon: Leaf,
    title: "Sustainability Consulting",
    subtitle: "Strategic guidance for your green journey",
    description:
      "Expert sustainability consulting to help organizations reduce waste, achieve ESG goals, obtain green certifications, and build circular economy strategies that deliver both environmental and financial returns.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    features: [
      "Waste stream audits",
      "ESG reporting and strategy",
      "LEED certification support",
      "Carbon footprint measurement",
      "Circular economy roadmaps",
      "Employee sustainability training",
    ],
    color: "#8b5cf6",
    stats: [
      { value: "500+", label: "Clients Advised" },
      { value: "$50M+", label: "Savings Generated" },
    ],
  },
];

export default function ServicesList() {
  return (
    <section className="bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-12 items-center py-16 border-b border-white/5 last:border-0 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 flex gap-4">
                  {service.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="glass border border-white/10 rounded-xl px-4 py-3"
                    >
                      <div
                        className="text-xl font-black"
                        style={{ color: service.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-slate-400 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:pr-8" : "lg:pl-8"}>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-medium mb-4"
                  style={{
                    background: service.color + "20",
                    color: service.color,
                  }}
                >
                  <service.icon className="w-4 h-4" />
                  {service.subtitle}
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h2>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0"
                        style={{ color: service.color }}
                      />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all hover:-translate-y-0.5 group"
                  style={{ background: service.color + "20", color: service.color }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = service.color;
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = service.color + "20";
                    (e.currentTarget as HTMLElement).style.color = service.color;
                  }}
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
