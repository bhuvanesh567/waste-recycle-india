import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import OpenPositions from "@/components/careers/OpenPositions";
import Benefits from "@/components/careers/Benefits";
import ApplicationForm from "@/components/careers/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers | Join the EcoCycle Team",
  description:
    "Build a career that makes a difference. Join EcoCycle Waste Solutions and help shape the future of sustainable waste management.",
};

export default function CareersPage() {
  return (
    <div className="page-transition">
      <CareersHero />
      <OpenPositions />
      <Benefits />
      <ApplicationForm />
    </div>
  );
}
