import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/home/CtaSection";
import { renderImages } from "@/lib/data/renders";

export const metadata: Metadata = {
  title: "3D Renders",
  description:
    "Explore 3D architectural renders of MD Works projects — visualizing designs before they come to life.",
};

export default function RenderPage() {
  return (
    <>
      <PageHero
        eyebrow="3D Visualizations"
        title="Project Renders"
        description="Photorealistic 3D renders that bring our architectural visions to life before construction begins."
        image="/images/renders/ciala-render-1.jpg"
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {renderImages.map((render) => (
              <Link
                key={render.id}
                href={`/projects/${render.projectSlug}`}
                className="group relative overflow-hidden rounded-2xl shadow-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={render.src}
                    alt={render.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                      {render.project}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
