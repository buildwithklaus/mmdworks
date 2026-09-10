import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapEmbed from "@/components/contact/MapEmbed";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MD Works for a free quote. Call, email, or fill out our contact form to start your next construction project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Something Great Together"
        description="Reach out for a free consultation and detailed project quote."
        image="/images/contact/hero1.jpg"
      />

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Send a Message"
              title="Request Your Free Quote"
              description="Fill out the form below and our team will respond within 24 hours."
            />
            <div className="mt-8 rounded-2xl bg-gray-50 p-8">
              <ContactForm />
            </div>
          </div>
          <ContactInfo />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <MapEmbed />
        </Container>
      </section>

      <section className="relative overflow-hidden bg-primary-500 py-16">
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
        <Container className="relative flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-xl font-heading text-2xl font-extrabold text-white md:text-3xl">
            Prefer to Talk Directly?
          </h2>
          <p className="text-white/80">Call our team now for immediate assistance.</p>
          <Button href="tel:+254700000000" variant="secondary" size="lg" icon={false}>
            Call 254 705 818 181
          </Button>
        </Container>
      </section>
    </>
  );
}