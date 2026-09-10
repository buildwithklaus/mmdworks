import Image from "next/image";
import Container from "@/components/ui/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[50vh] min-h-[400px] items-end overflow-hidden bg-charcoal pt-20">
      <Image src={image} alt={title} fill priority className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
      <Container className="relative z-10 pb-14">
        <span className="mb-3 inline-block rounded-full bg-primary-500/15 px-4 py-1.5 text-sm font-bold text-primary-400">
          {eyebrow}
        </span>
        <h1 className="max-w-2xl font-heading text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-white/70">{description}</p>
        )}
      </Container>
    </section>
  );
}