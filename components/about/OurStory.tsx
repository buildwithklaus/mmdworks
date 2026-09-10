"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function OurStory() {
  return (
    <section className="py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[420px] overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/about/our-story.jpg"
            alt="MD Works team on a construction site"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <SectionHeading eyebrow="Our Story" title="Built on a Decade of Trust and Craftsmanship" />
          <p className="mt-5 text-base leading-relaxed text-secondary-500/70">
            MD Works began with a simple goal: to bring honesty, precision, and
            genuine craftsmanship to construction. What started as a small
            residential contracting team has grown into a full-service
            construction and civil engineering company serving commercial,
            residential, and infrastructure clients across the region.
          </p>
          <p className="mt-4 text-base leading-relaxed text-secondary-500/70">
            Every project we take on is guided by the same principle that
            founded the company — build it right, build it safe, and build it
            to last. Today, our team of engineers, project managers, and
            skilled tradespeople carry that same standard into every site we
            work on.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}