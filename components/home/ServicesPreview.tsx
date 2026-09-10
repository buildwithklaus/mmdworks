"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import { LucideIcon } from "lucide-react";

export default function ServicesPreview() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive Construction & Engineering Services"
          description="From ground-breaking to final finishes, we deliver end-to-end solutions across every stage of the build."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((service, i) => {
            const Icon = (Icons as unknown as Record<string, LucideIcon>)[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors group-hover:bg-secondary-500 group-hover:text-white">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-500/60">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary-600 hover:gap-2 transition-all"
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}