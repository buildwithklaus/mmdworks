"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";

const categories = ["All", "Commercial", "Residential", "Roads", "Industrial", "Renovations"] as const;

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

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

      <motion.div layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-secondary-500/60">
          No projects found in this category yet.
        </p>
      )}
    </div>
  );
}