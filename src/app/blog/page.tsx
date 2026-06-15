import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog | Sustainability Insights & Waste Management News",
  description:
    "Stay informed with EcoCycle's expert insights on recycling, sustainability, waste reduction, green technology, and environmental best practices.",
};

export default function BlogPage() {
  return (
    <div className="page-transition">
      <BlogHero />
      <BlogGrid />
    </div>
  );
}
