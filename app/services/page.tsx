import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaSection from "@/components/home/CtaSection";
import { services } from "@/lib/data/services";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore MD Works' full range of construction and engineering services — from building construction to infrastructure development.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="End-to-End Construction & Engineering Solutions"
        description="Every service you need, delivered by one accountable, experienced team."
        image="/images/hero1.avif"
      />

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="Comprehensive Services for Every Project Type"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-24">
        <Container>
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            align="center"
          />
          <div className="mt-14">
            <FaqAccordion faqs={faqs} />
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}