"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { heroSlides } from "@/lib/data/hero-slides";

const SLIDE_DURATION = 6000; // ms

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(next, SLIDE_DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPaused, next]);

  const slide = heroSlides[current];

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background image crossfade + Ken Burns zoom */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1, ease: "linear" }}
            className="relative h-full w-full"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={current === 0}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Lighter overlay — just enough for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/25 to-transparent" />
      <div className="absolute inset-0 bg-charcoal/10" />

      {/* Content */}
      <Container className="relative z-10 pt-24">
        <AnimatePresence mode="wait">
          <motion.div key={slide.id}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-block rounded-full bg-primary-500/15 px-4 py-1.5 text-sm font-bold text-primary-400"
            >
              {slide.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="max-w-3xl font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
            >
              {slide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/contact" variant="primary" size="lg">
            Get a Quote
          </Button>
          <Button href="/projects" variant="outline" size="lg" icon={false}>
            Our Projects
          </Button>
        </motion.div>
      </Container>

      {/* Arrow controls */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-primary-500 hover:border-primary-500 md:flex"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-primary-500 hover:border-primary-500 md:flex"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators + progress */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-1.5 w-10 overflow-hidden rounded-full bg-white/25"
          >
            {i === current && (
              <motion.span
                key={current}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "var(--pause-width, 0%)" : "100%" }}
                transition={{
                  duration: isPaused ? 0 : SLIDE_DURATION / 1000,
                  ease: "linear",
                }}
                className="absolute inset-y-0 left-0 bg-primary-500"
              />
            )}
            {i !== current && (
              <span className="absolute inset-0 bg-white/25" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}