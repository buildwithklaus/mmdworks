"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Sparkles, Leaf } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  { icon: ShieldCheck, title: "Safety", desc: "Uncompromising safety standards on every site." },
  { icon: Handshake, title: "Integrity", desc: "Honest communication and accountability with every client." },
  { icon: Sparkles, title: "Excellence", desc: "Precision craftsmanship in every phase of the build." },
  { icon: Leaf, title: "Sustainability", desc: "Responsible practices that support long-term growth." },
];

export default function CoreValues() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="What Drives Us"
          title="Our Core Values"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-gray-100 p-7 text-center shadow-card"
            >
              <value.icon className="mx-auto text-primary-500" size={32} />
              <h3 className="mt-4 font-heading text-lg font-bold text-secondary-500">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-secondary-500/60">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}