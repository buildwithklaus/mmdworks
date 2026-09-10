"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col bg-secondary-500 px-6 py-8 lg:hidden"
        >
          <div className="flex justify-end">
            <button onClick={onClose} aria-label="Close menu">
              <X size={28} className="text-white" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="font-heading text-2xl font-bold text-white hover:text-primary-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Button href="/contact" variant="primary" className="w-full justify-center">
              Get a Quote
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}