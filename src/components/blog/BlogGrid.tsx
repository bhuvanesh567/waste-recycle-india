"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, User, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Future of Waste Management: How AI is Revolutionizing Collection Routes",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Machine learning algorithms are transforming how waste management companies plan routes, reduce fuel usage, and improve on-time performance by up to 40%.",
    category: "Green Technology",
    author: "Dr. Carlos Mendez",
    date: "December 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442135968-6db3b0025e95?w=800&q=80",
    featured: true,
    tags: ["AI", "Route Optimization", "Technology"],
    color: "#22c55e",
  },
  {
    id: 2,
    title: "10 Ways Your Business Can Achieve Zero-Waste Certification",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. A practical guide to reducing your commercial waste stream to near-zero landfill disposal.",
    category: "Sustainability",
    author: "Rachel Thompson",
    date: "December 5, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    featured: false,
    tags: ["Zero Waste", "Business", "Certification"],
    color: "#3b82f6",
  },
  {
    id: 3,
    title: "Why Plastic Film Recycling Is the Industry's Next Big Challenge",
    excerpt:
      "At vero eos et accusamus et iusto odio dignissimos ducimus. Flexible plastic packaging remains one of the hardest materials to recycle at scale — here's what's changing.",
    category: "Recycling",
    author: "Jennifer Park",
    date: "November 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    featured: false,
    tags: ["Plastic", "Recycling", "Innovation"],
    color: "#f59e0b",
  },
  {
    id: 4,
    title: "Composting at Scale: Turning Urban Food Waste into Agricultural Gold",
    excerpt:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit. How large-scale composting programs are closing the loop on food waste in major cities.",
    category: "Waste Reduction",
    author: "Dr. Carlos Mendez",
    date: "November 20, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    featured: false,
    tags: ["Composting", "Food Waste", "Urban Farming"],
    color: "#10b981",
  },
  {
    id: 5,
    title: "The Hidden Cost of E-Waste: Why Electronics Recycling Matters More Than Ever",
    excerpt:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet. Global e-waste is the fastest-growing waste stream — and it contains both hazardous materials and valuable recoverable metals.",
    category: "Recycling",
    author: "David Kim",
    date: "November 15, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    featured: false,
    tags: ["E-Waste", "Electronics", "Metals"],
    color: "#8b5cf6",
  },
  {
    id: 6,
    title: "How Smart Bins Are Transforming Municipal Waste Collection",
    excerpt:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur. IoT-enabled waste bins are optimizing collection schedules and reducing operational costs in cities worldwide.",
    category: "Green Technology",
    author: "Jennifer Park",
    date: "November 8, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80",
    featured: false,
    tags: ["IoT", "Smart City", "Innovation"],
    color: "#ef4444",
  },
  {
    id: 7,
    title: "ESG Reporting for Waste Management: What Investors Are Watching",
    excerpt:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. ESG metrics in waste management are under increasing scrutiny from institutional investors — here's what you need to track.",
    category: "Sustainability",
    author: "Rachel Thompson",
    date: "October 30, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    featured: false,
    tags: ["ESG", "Investing", "Reporting"],
    color: "#06b6d4",
  },
  {
    id: 8,
    title: "Construction Waste: The Overlooked Opportunity in Circular Economy",
    excerpt:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. The construction industry generates 40% of global waste — and most of it is recyclable with the right systems in place.",
    category: "Waste Reduction",
    author: "Angela Torres",
    date: "October 22, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    featured: false,
    tags: ["Construction", "C&D Waste", "Circular Economy"],
    color: "#84cc16",
  },
];

export default function BlogGrid() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <section className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="group grid lg:grid-cols-2 gap-8 p-6 rounded-3xl border border-white/5 bg-slate-900/50 hover:border-green-500/20 transition-all duration-500 hover:-translate-y-1">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-green-600 text-white text-xs font-bold rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-medium mb-3"
                  style={{ color: featured.color }}
                >
                  <Tag className="w-3.5 h-3.5" />
                  {featured.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-green-300 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">{featured.excerpt}</p>

                <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {featured.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featured.readTime}
                  </div>
                  <span>{featured.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 rounded-lg text-slate-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${featured.id}`}
                  className="flex items-center gap-2 text-green-400 font-medium hover:text-green-300 transition-colors group/link"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group flex flex-col rounded-2xl border border-white/5 bg-slate-900/40 hover:border-white/15 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: post.color + "30",
                      color: post.color,
                    }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-white font-semibold text-lg mb-3 leading-tight group-hover:text-green-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author.split(" ")[0]}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-1 text-xs font-medium transition-all group/link"
                    style={{ color: post.color }}
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 glass border border-white/10 hover:border-green-500/30 text-slate-300 hover:text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
