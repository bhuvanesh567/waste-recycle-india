import type { Metadata } from "next";
import SustainabilityHero from "@/components/sustainability/SustainabilityHero";
import ESGGoals from "@/components/sustainability/ESGGoals";
import CircularEconomy from "@/components/sustainability/CircularEconomy";
import SustainabilityReports from "@/components/sustainability/SustainabilityReports";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Sustainability | Our ESG Commitments & Environmental Impact",
  description:
    "EcoCycle's sustainability commitments, ESG goals, carbon reduction programs, and circular economy initiatives for a greener tomorrow.",
};

export default function SustainabilityPage() {
  return (
    <div className="page-transition">
      <SustainabilityHero />
      <ESGGoals />
      <CircularEconomy />
      <SustainabilityReports />
      <CTASection />
    </div>
  );
}
