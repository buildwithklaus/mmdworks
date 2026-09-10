import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary-500 py-20">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-heading text-3xl font-extrabold text-white md:text-4xl">
          Ready to Start Your Next Project?
        </h2>
        <p className="max-w-xl text-white/80">
          Get in touch with our team today for a free consultation and detailed
          project quote.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" variant="secondary" size="lg">
            Request a Quote
          </Button>
          <Button href="tel:+254705818181" variant="outline" size="lg" icon={false}>
            Call Us Now
          </Button>
        </div>
      </Container>
    </section>
  );
}