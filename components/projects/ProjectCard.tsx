"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";
import { Project } from "@/types";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative h-72 overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
         <div className="absolute left-4 top-4 flex gap-2">
  <span className="rounded-full bg-primary-500 px-3 py-1 text-xs font-bold text-white">
    {project.category}
  </span>
  {project.status === "ongoing" && (
    <span className="flex items-center gap-1 rounded-full bg-secondary-500 px-3 py-1 text-xs font-bold text-white">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary-400" />
      In Progress
    </span>
  )}
</div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-heading text-lg font-bold">{project.title}</h3>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-white/70">
              <span className="flex items-center gap-1">
                <MapPin size={13} /> {project.location}
              </span>
             <span className="flex items-center gap-1">
  <Calendar size={13} />
  {project.status === "ongoing" ? "Ongoing" : project.year}
</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}