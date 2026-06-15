"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Hospital,
  Hotel,
  GraduationCap,
  Building,
  ShoppingBag,
  HardHat,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Complete waste management for production facilities, including scrap metal, chemical waste, packaging materials, and process byproducts. We help manufacturers achieve zero-landfill certification.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
    features: ["Hazardous waste disposal", "Scrap metal recycling", "Zero-landfill programs", "On-site coordinators"],
    color: "#f59e0b",
    clients: "350+ facilities",
  },
  {
    id: "healthcare",
    icon: Hospital,
    title: "Healthcare",
    description:
      "HIPAA-compliant, infection-controlled medical waste services for hospitals, clinics, and labs. Our teams are fully trained in biohazard handling and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    features: ["Biohazard waste", "Pharmaceutical disposal", "Sharps management", "Compliance reporting"],
    color: "#ef4444",
    clients: "800+ facilities",
  },
  {
    id: "hospitality",
    icon: Hotel,
    title: "Hospitality",
    description:
      "Comprehensive waste and recycling programs for hotels, resorts, and restaurants that support green certification goals and reduce operational waste costs by up to 35%.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    features: ["Food waste composting", "Grease trap services", "Linen recycling", "LEED support"],
    color: "#8b5cf6",
    clients: "1,200+ properties",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    description:
      "Campus-wide sustainability programs for K-12 schools, colleges, and universities. We design programs that engage students, reduce waste, and meet institutional sustainability targets.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    features: ["Campus sustainability programs", "Student engagement", "Zero-waste events", "Grant support"],
    color: "#06b6d4",
    clients: "400+ campuses",
  },
  {
    id: "municipalities",
    icon: Building,
    title: "Municipalities",
    description:
      "Full-service municipal waste collection, recycling programs, and public space waste management. We partner with cities to achieve ambitious zero-waste goals ahead of schedule.",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    features: ["Curbside collection", "Public bin management", "Transfer station ops", "Diversion reporting"],
    color: "#22c55e",
    clients: "200+ cities",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    title: "Retail",
    description:
      "Tailored waste programs for retail chains, shopping centers, and e-commerce distribution centers. We optimize packaging waste, cardboard recycling, and shrink retail waste costs.",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80",
    features: ["Cardboard baling", "Plastic film recycling", "Food waste programs", "National accounts"],
    color: "#f97316",
    clients: "3,000+ locations",
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction",
    description:
      "Construction and demolition waste services including dumpster rental, debris hauling, material salvage, and clean fill disposal. We maximize material recovery from every job site.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    features: ["C&D debris removal", "Roll-off containers", "Material salvage", "LEED credit documentation"],
    color: "#84cc16",
    clients: "500+ contractors",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Distribution",
    description:
      "Warehouse and distribution center waste management, including packaging waste, pallets, shrink wrap, and returns processing. We help logistics companies achieve measurable ESG goals.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    features: ["Pallet recycling", "Packaging waste", "Returns processing", "Annual ESG reports"],
    color: "#3b82f6",
    clients: "250+ warehouses",
  },
];

export default function IndustriesGrid() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedIndustry = industries.find((i) => i.id === selected);

  return (
    <section className="section-padding bg-slate-950 relative">
      <div className="absolute inset-0 dot-pattern opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {industries.map((industry, i) => (
            <motion.button
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() =>
                setSelected(selected === industry.id ? null : industry.id)
              }
              className={`relative group text-left p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                selected === industry.id
                  ? "border-opacity-50 bg-opacity-20"
                  : "border-white/5 bg-slate-900/50 hover:border-white/15"
              }`}
              style={
                selected === industry.id
                  ? {
                      borderColor: industry.color + "60",
                      background: industry.color + "10",
                    }
                  : {}
              }
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: industry.color + "20" }}
              >
                <industry.icon
                  className="w-6 h-6"
                  style={{ color: industry.color }}
                />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">
                {industry.title}
              </h3>
              <p className="text-slate-500 text-xs">{industry.clients}</p>
            </motion.button>
          ))}
        </div>

        {/* Expanded detail */}
        <AnimatePresence>
          {selectedIndustry && (
            <motion.div
              key={selectedIndustry.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div
                className="rounded-3xl border p-8 lg:p-12"
                style={{
                  borderColor: selectedIndustry.color + "30",
                  background: selectedIndustry.color + "05",
                }}
              >
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-medium mb-4"
                      style={{
                        background: selectedIndustry.color + "20",
                        color: selectedIndustry.color,
                      }}
                    >
                      <selectedIndustry.icon className="w-4 h-4" />
                      {selectedIndustry.title} Solutions
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {selectedIndustry.title} Waste Management
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {selectedIndustry.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {selectedIndustry.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0"
                            style={{ color: selectedIndustry.color }}
                          />
                          <span className="text-slate-300">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact#quote"
                      className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 group"
                      style={{ background: selectedIndustry.color }}
                    >
                      Get Industry Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <Image
                      src={selectedIndustry.image}
                      alt={selectedIndustry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
