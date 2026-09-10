"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Container from "@/components/ui/Container";

export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-24">
      <Container className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-white p-10 shadow-card"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
            <Target size={24} />
          </div>
          <h3 className="mt-5 font-heading text-2xl font-extrabold text-secondary-500">
            Our Mission
          </h3>
          <p className="mt-3 text-base leading-relaxed text-secondary-500/70">
            To deliver safe, high-quality construction and engineering
            solutions that exceed client expectations, on time and within
            budget — every single project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-secondary-500 p-10 shadow-card"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-primary-400">
            <Eye size={24} />
          </div>
          <h3 className="mt-5 font-heading text-2xl font-extrabold text-white">
            Our Vision
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/70">
            To be the region's most trusted construction partner — recognized
            for engineering excellence, safety leadership, and lasting
            community impact.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}