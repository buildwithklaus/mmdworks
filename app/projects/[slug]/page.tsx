import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, Calendar, Building, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/home/CtaSection";
import { projects } from "@/lib/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative flex h-[55vh] min-h-[420px] items-end overflow-hidden bg-charcoal pt-20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/20" />
        <Container className="relative z-10 pb-14">
         <div className="mb-3 flex flex-wrap gap-2">
  <span className="rounded-full bg-primary-500 px-4 py-1.5 text-sm font-bold text-white">
    {project.category}
  </span>
  {project.status === "ongoing" && (
    <span className="flex items-center gap-1.5 rounded-full bg-secondary-500 px-4 py-1.5 text-sm font-bold text-white">
      <span className="h-2 w-2 animate-pulse rounded-full bg-primary-400" />
      Ongoing Project
    </span>
  )}
</div>
          <h1 className="max-w-2xl font-heading text-4xl font-extrabold text-white sm:text-5xl">
            {project.title}
          </h1>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-extrabold text-secondary-500">
              Project Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-secondary-500/70">
              {project.description}
            </p>

            {project.gallery && project.gallery.length > 1 && (
              <div className="mt-10 grid grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div
                    key={img}
                    className={`relative h-56 overflow-hidden rounded-2xl ${
                      i === 0 ? "col-span-2 h-72" : ""
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="h-fit rounded-2xl bg-gray-50 p-8 shadow-card lg:sticky lg:top-28">
            <h3 className="font-heading text-lg font-bold text-secondary-500">
              Project Details
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-primary-500" size={18} />
                <div>
                  <p className="font-semibold text-secondary-500">Location</p>
                  <p className="text-secondary-500/60">{project.location}</p>
                </div>
              </li>
             <li className="flex items-start gap-3">
  <Calendar className="mt-0.5 shrink-0 text-primary-500" size={18} />
  <div>
    <p className="font-semibold text-secondary-500">
      {project.status === "ongoing" ? "Status" : "Completed"}
    </p>
    <p className="text-secondary-500/60">
      {project.status === "ongoing"
        ? `Ongoing — Started ${project.year}`
        : project.year}
    </p>
  </div>
</li>
              <li className="flex items-start gap-3">
                <Building className="mt-0.5 shrink-0 text-primary-500" size={18} />
                <div>
                  <p className="font-semibold text-secondary-500">Client</p>
                  <p className="text-secondary-500/60">{project.client}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="mt-0.5 shrink-0 text-primary-500" size={18} />
                <div>
                  <p className="font-semibold text-secondary-500">Services Provided</p>
                  <p className="text-secondary-500/60">{project.services.join(", ")}</p>
                </div>
              </li>
            </ul>

            <Button href="/contact" variant="primary" className="mt-7 w-full justify-center">
              Start a Similar Project
            </Button>
          </aside>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}