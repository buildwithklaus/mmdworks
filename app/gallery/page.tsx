import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of MD Works construction sites, finished projects, our team, and heavy machinery in action.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Gallery"
        title="A Visual Look at Our Work"
        description="Construction sites, finished projects, our team, and the machinery that gets it all done."
        image="/images/entada/six.jpeg"
      />
      <section className="py-24">
        <Container>
          <MasonryGrid />
        </Container>
      </section>
      <CtaSection />
    </>
  );
}