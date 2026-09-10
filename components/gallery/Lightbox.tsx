"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/lib/data/gallery";

interface Props {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: Props) {
  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );
  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, onClose]);

  const image = images[index];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-primary-500"
        >
          <X size={24} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous image"
          className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-primary-500 md:left-8"
        >
          <ChevronLeft size={24} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative h-[75vh] w-full max-w-4xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next image"
          className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-primary-500 md:right-8"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white">
          {index + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}