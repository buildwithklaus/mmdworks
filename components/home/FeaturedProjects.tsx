"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Work"
            title="Featured Projects"
            description="A selection of the residential, commercial, and infrastructure projects we've delivered."
          />
          <Button href="/projects" variant="ghost">
            View All Projects
          </Button>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative h-72 overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary-500 px-3 py-1 text-xs font-bold text-white">
                    {project.category}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-heading text-xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {project.location} · {project.year}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}