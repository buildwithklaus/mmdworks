"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "254705818181"; // no + or spaces, country code first
const DEFAULT_MESSAGE = "Hello MD Works, I'd like to request a quote for a construction project.";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[220px] rounded-2xl rounded-br-sm bg-white p-4 shadow-card-hover"
          >
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-500 text-white hover:bg-secondary-600"
            >
              <X size={12} />
            </button>
            <p className="text-sm font-semibold text-secondary-500">
              Need a quote? 👋
            </p>
            <p className="mt-1 text-xs text-secondary-500/60">
              Chat with our team on WhatsApp for instant help.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with MD Works on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowTooltip(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
        <FaWhatsapp size={28} className="relative z-10" />
      </motion.a>
    </div>
  );
}