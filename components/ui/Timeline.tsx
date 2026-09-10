"use client";

import { motion } from "framer-motion";
import { TimelineEvent } from "@/lib/data/timeline";

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-primary-100 md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-12">
        {events.map((event, i) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
              i % 2 === 0
                ? "md:pr-12 md:text-right"
                : "md:ml-auto md:pl-12"
            }`}
          >
            <div className="absolute left-2.5 top-1 h-3.5 w-3.5 rounded-full border-4 border-primary-500 bg-white md:left-auto md:right-[-7px] md:top-1">
              <span
                className={`absolute left-2.5 top-1 h-3.5 w-3.5 rounded-full border-4 border-primary-500 bg-white ${
                  i % 2 === 0 ? "md:-right-[29px] md:left-auto" : "md:-left-[29px]"
                }`}
              />
            </div>
            <span className="font-heading text-2xl font-extrabold text-primary-500">
              {event.year}
            </span>
            <h3 className="font-heading text-lg font-bold text-secondary-500">
              {event.title}
            </h3>
            <p className="text-sm leading-relaxed text-secondary-500/60">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}