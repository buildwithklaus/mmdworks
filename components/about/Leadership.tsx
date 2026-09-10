import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/ui/TeamCard";
import { team } from "@/lib/data/team";

export default function Leadership() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Leadership"
          title="Meet the Team Behind MD Works"
          description="Experienced professionals leading every project with expertise and accountability."
          align="center"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}