import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services | Comprehensive Waste Management Solutions",
  description:
    "From residential collection to industrial waste processing, EcoCycle offers a complete portfolio of sustainable waste management and recycling services.",
};

export default function ServicesPage() {
  return (
    <div className="page-transition">
      <ServicesHero />
      <ServicesList />
      <CTASection />
    </div>
  );
}
