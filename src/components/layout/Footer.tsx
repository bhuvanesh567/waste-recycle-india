"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Residential Collection", href: "/services#residential" },
    { name: "Commercial Waste", href: "/services#commercial" },
    { name: "Industrial Solutions", href: "/services#industrial" },
    { name: "Recycling Programs", href: "/services#recycling" },
    { name: "Hazardous Materials", href: "/services#hazardous" },
    { name: "Sustainability Consulting", href: "/services#consulting" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      {/* Newsletter Section */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated on Sustainability
              </h3>
              <p className="text-slate-400">
                Get the latest news on green initiatives, recycling tips, and
                company updates.
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-green flex items-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-green">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-xl leading-none block">
                  EcoCycle
                </span>
                <span className="text-green-400 text-xs font-medium">
                  Waste Solutions
                </span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-xs">
              Transforming waste into a sustainable future. Leading waste
              management and recycling solutions for a cleaner tomorrow.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-green-500 shrink-0" />
                +1 (555) 123-4567
              </a>
              <a
                href="mailto:info@ecocycle.com"
                className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-green-500 shrink-0" />
                info@ecocycle.com
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>
                  123 Green Way, Suite 100
                  <br />
                  San Francisco, CA 94102
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-green-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-green-400 transition-colors text-sm animated-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-green-400 transition-colors text-sm animated-underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Certifications
            </h4>
            <div className="space-y-3">
              {[
                "ISO 14001:2015",
                "ISO 9001:2015",
                "RCRA Certified",
                "EPA Compliant",
                "LEED Partner",
              ].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  {cert}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 glass-green rounded-xl">
              <p className="text-green-400 font-semibold text-sm mb-1">
                Carbon Neutral
              </p>
              <p className="text-slate-400 text-xs">
                Committed to net zero emissions by 2030
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              © 2024 EcoCycle Waste Solutions. Made with{" "}
              <Heart className="w-3.5 h-3.5 text-green-500 fill-green-500" />{" "}
              for a greener planet.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
