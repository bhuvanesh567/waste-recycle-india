import type { Metadata } from "next";
import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Industries | Waste Solutions for Every Sector",
  description:
    "EcoCycle serves manufacturing, healthcare, hospitality, education, municipalities, retail, construction, and logistics with specialized waste management solutions.",
};

export default function IndustriesPage() {
  return (
    <div className="page-transition">
      <IndustriesHero />
      <IndustriesGrid />
      <CTASection />
    </div>
  );
}
