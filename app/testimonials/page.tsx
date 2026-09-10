import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import CtaSection from "@/components/home/CtaSection";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what MD Works clients say about our construction quality, professionalism, and reliability.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Feedback"
        title="What Our Clients Say About Us"
        description="Real feedback from developers, businesses, and communities we've built for."
        image="/images/testimonials/testimonials-hero.jpg"
      />

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by Clients Across Every Sector"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}