"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  "Certified safety officers on every active site",
  "Regular equipment inspections and maintenance",
  "Ongoing safety training for all personnel",
  "Zero-compromise compliance with OSHA & local codes",
];

export default function SafetyCommitment() {
  return (
    <section className="bg-charcoal py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Safety Commitment"
            title="Safety Isn't a Policy — It's Our Standard"
            light
          />
          <ul className="mt-6 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-primary-400" size={20} />
                <span className="text-white/70">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-[380px] overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/about/safety.jpg"
            alt="Construction worker wearing safety gear"
            fill
            className="object-cover"
          />
        </motion.div>
      </Container>
    </section>
  );
}