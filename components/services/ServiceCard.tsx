"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Service } from "@/types";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group flex flex-col rounded-2xl bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 transition-colors group-hover:bg-secondary-500 group-hover:text-white">
        {Icon && <Icon size={24} />}
      </div>
      <h3 className="mt-5 font-heading text-lg font-bold text-secondary-500">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary-500/60">
        {service.shortDescription}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary-600 hover:gap-2 transition-all"
      >
        Learn More →
      </Link>
    </motion.div>
  );
}