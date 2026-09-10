"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";

export default function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className="relative flex flex-col rounded-2xl bg-white p-8 shadow-card"
    >
      <Quote className="absolute right-6 top-6 text-primary-50" size={40} />
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-primary-500 text-primary-500" />
        ))}
      </div>
      <p className="relative z-10 mt-4 flex-1 text-sm leading-relaxed text-secondary-500/70">
        "{testimonial.review}"
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <div className="relative h-11 w-11 overflow-hidden rounded-full bg-gray-200">
          <Image src={testimonial.photo} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-heading text-sm font-bold text-secondary-500">
            {testimonial.name}
          </p>
          <p className="text-xs text-secondary-500/50">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}