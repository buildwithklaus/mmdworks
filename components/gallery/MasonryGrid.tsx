"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryImages, GalleryImage } from "@/lib/data/gallery";
import Lightbox from "./Lightbox";

const categories = ["All", "Sites", "Finished", "Workers", "Machinery", "Before & After"] as const;

const heightClasses: Record<GalleryImage["height"], string> = {
  short: "h-56",
  medium: "h-72",
  tall: "h-96",
};

export default function MasonryGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
              active === cat
                ? "bg-primary-500 text-white"
                : "bg-gray-100 text-secondary-500 hover:bg-primary-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.button
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: (i % 6) * 0.04 }}
              onClick={() => setLightboxIndex(i)}
              className={`group relative block w-full overflow-hidden rounded-2xl ${heightClasses[img.height]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 text-left text-sm font-semibold text-white">
                  {img.category}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}