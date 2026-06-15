import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import MissionVision from "@/components/about/MissionVision";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us | Our Story & Mission",
  description:
    "Learn about EcoCycle Waste Solutions — our history, mission, vision, and the team driving sustainable waste management innovation since 2010.",
};

export default function AboutPage() {
  return (
    <div className="page-transition">
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <LeadershipTeam />
      <CompanyTimeline />
      <CTASection />
    </div>
  );
}
