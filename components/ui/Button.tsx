import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = true,
  className,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full font-heading font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-card hover:shadow-card-hover",
    secondary: "bg-secondary-500 text-white hover:bg-secondary-600 shadow-card hover:shadow-card-hover",
    outline: "border-2 border-white text-white hover:bg-white hover:text-primary-500",
    ghost: "text-primary-600 hover:text-primary-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
      {icon && (
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}