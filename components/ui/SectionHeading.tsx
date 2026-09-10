import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block rounded-full px-4 py-1 text-sm font-bold tracking-wide",
            light ? "bg-white/10 text-primary-300" : "bg-primary-50 text-primary-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-extrabold leading-tight md:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-secondary-500"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-white/70" : "text-secondary-500/60"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}