import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <TestimonialsSlider />
      <CtaSection />
    </>
  );
}
