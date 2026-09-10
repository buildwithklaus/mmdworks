import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Leadership from "@/components/about/Leadership";
import SafetyCommitment from "@/components/about/SafetyCommitment";
import CompanyTimeline from "@/components/about/CompanyTimeline";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MD Works — our story, mission, values, leadership team, and decade-long commitment to safe, reliable construction.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MD Works"
        title="Building With Purpose, Integrity, and Precision"
        description="A decade of construction and engineering excellence, powered by people who care about the outcome."
        image="/images/about/hero.jpeg"
      />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Leadership />
      <SafetyCommitment />
      <CompanyTimeline />
      <CtaSection />
    </>
  );
}