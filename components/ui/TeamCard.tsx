"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/lib/data/team";

export default function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="relative h-100 overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-secondary-500">
          {member.name}
        </h3>
        <p className="text-sm font-semibold text-primary-500">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-secondary-500/60">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}