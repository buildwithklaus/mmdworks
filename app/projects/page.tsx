import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse MD Works' portfolio of completed commercial, residential, road, industrial, and renovation projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Projects That Speak for Themselves"
        description="Explore our completed work across commercial, residential, and infrastructure sectors."
        image="/images/hero1.avif"
      />

      <section className="py-24">
        <Container>
          <ProjectsGrid />
        </Container>
      </section>

      <CtaSection />
    </>
  );
}