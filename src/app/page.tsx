import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ImpactSection from "@/components/home/ImpactSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "EcoCycle Waste Solutions | Smart Waste Management For A Cleaner Tomorrow",
  description:
    "EcoCycle delivers industry-leading waste management, recycling, and sustainability consulting services across residential, commercial, industrial, and municipal sectors.",
};

export default function HomePage() {
  return (
    <div className="page-transition">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
