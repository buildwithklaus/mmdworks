"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  { icon: ShieldCheck, title: "Safety First", desc: "Rigorous safety protocols on every site, every day." },
  { icon: Clock, title: "On-Time Delivery", desc: "Disciplined project management that respects deadlines." },
  { icon: Users, title: "Experienced Team", desc: "Certified engineers and skilled tradespeople at every level." },
  { icon: Award, title: "Quality Guaranteed", desc: "Materials and workmanship built to exceed code standards." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-24">
      <Container>
        <SectionHeading
          eyebrow="Why MD Works"
          title="Trusted by Developers, Businesses & Communities"
          description="We combine engineering precision with genuine accountability — from first blueprint to final handover."
          light
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center"
            >
              <reason.icon className="mx-auto text-primary-400" size={32} />
              <h3 className="mt-4 font-heading text-lg font-bold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}