import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import OfficeLocations from "@/components/contact/OfficeLocations";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with EcoCycle",
  description:
    "Contact EcoCycle Waste Solutions for waste management quotes, service inquiries, and sustainability consulting. We respond within 2 hours.",
};

export default function ContactPage() {
  return (
    <div className="page-transition">
      <ContactHero />
      <ContactSection />
      <OfficeLocations />
    </div>
  );
}
