"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Robert Hayes",
    role: "Chief Executive Officer",
    bio: "Former VP at Waste Management Inc. with 20+ years in environmental services. Spearheaded EcoCycle's AI transformation strategy.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jennifer Park",
    role: "Chief Operations Officer",
    bio: "Logistics expert with a track record of scaling operations from 5 to 200+ cities. MIT Sloan MBA, passionate about operational excellence.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Carlos Mendez",
    role: "Sustainability Director",
    bio: "PhD Environmental Science from Stanford. Author of 12 peer-reviewed papers on circular economy models and waste stream optimization.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Angela Torres",
    role: "VP of Operations",
    bio: "15 years in industrial waste management. Led the deployment of our smart bin IoT network across 180 cities and 3 million collection points.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Kim",
    role: "Chief Technology Officer",
    bio: "Former Google Engineer. Architected EcoCycle's AI route optimization platform that processes 50M+ data points daily.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rachel Thompson",
    role: "Chief Financial Officer",
    bio: "CPA with extensive experience in sustainable infrastructure finance. Led our $200M Series C funding round and ESG bond issuance.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="section-padding bg-slate-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-white mb-4">
            The Team Behind{" "}
            <span className="gradient-text">EcoCycle</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Experienced leaders united by a shared passion for environmental
            innovation and operational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-slate-800/40 hover:border-green-500/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="relative mb-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-green-500/20 group-hover:ring-green-500/50 transition-all duration-300">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-500 border-2 border-slate-800 hidden group-hover:block" />
              </div>

              {/* Info */}
              <h3 className="text-white font-semibold text-lg mb-1">
                {member.name}
              </h3>
              <div className="text-green-400 text-sm font-medium mb-3">
                {member.role}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href={member.linkedin}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-600/20 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.twitter}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-sky-600/20 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@ecocycle.com`}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-green-600/20 flex items-center justify-center text-slate-400 hover:text-green-400 transition-all"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
