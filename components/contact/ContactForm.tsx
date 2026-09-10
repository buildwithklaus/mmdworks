"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact";
import { services } from "@/lib/data/services";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-secondary-500 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-100";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl bg-primary-50 p-12 text-center"
      >
        <CheckCircle2 className="text-primary-500" size={48} />
        <h3 className="mt-4 font-heading text-xl font-bold text-secondary-500">
          Message Sent Successfully
        </h3>
        <p className="mt-2 max-w-sm text-sm text-secondary-500/60">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-bold text-primary-600 hover:text-primary-700"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-secondary-500">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className={inputClasses}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-secondary-500">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className={inputClasses}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-secondary-500">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+254 700 000 000"
            className={inputClasses}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-secondary-500">
            Service Needed
          </label>
          <select id="service" className={inputClasses} {...register("service")}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1.5 text-xs text-red-600">{errors.service.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-secondary-500">
          Project Details
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project..."
          className={inputClasses}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-4 font-heading font-bold text-white transition-colors hover:bg-primary-600 disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={18} /> Send Message
          </>
        )}
      </button>
    </form>
  );
}