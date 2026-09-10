import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import { timeline } from "@/lib/data/timeline";

export default function CompanyTimeline() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Journey"
          title="A Decade of Growth"
          align="center"
        />
        <div className="mt-16">
          <Timeline events={timeline} />
        </div>
      </Container>
    </section>
  );
}