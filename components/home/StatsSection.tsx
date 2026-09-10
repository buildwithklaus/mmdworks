import Container from "@/components/ui/Container";
import StatCounter from "@/components/ui/StatCounter";
import { stats } from "@/lib/data/stats";

export default function StatsSection() {
  return (
    <section className="bg-charcoal py-16">
      <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </Container>
    </section>
  );
}