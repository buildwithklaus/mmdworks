"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-gray-50 py-24">
      <Container className="max-w-3xl text-center">
        <SectionHeading eyebrow="Client Feedback" title="What Our Clients Say" align="center" />

        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-white p-10 shadow-card"
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary-500 text-primary-500" />
                ))}
              </div>
              <p className="mt-5 text-lg italic leading-relaxed text-secondary-500/80">
                “{t.review}”
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image src={t.photo} alt={t.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold">{t.name}</p>
                  <p className="text-sm text-secondary-500/50">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2 rounded-full bg-white p-2 shadow-card hover:bg-primary-50"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 rounded-full bg-white p-2 shadow-card hover:bg-primary-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
}