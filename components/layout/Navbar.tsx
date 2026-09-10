"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="relative flex items-center gap-2">
          <Image
            src="/images/log.png"
            alt="MD Works Logo"
            width={140}
            height={40}
            priority
            className="h-30 w-auto"
          />
          {/* <span className="font-heading text-2xl font-extrabold">
  <span className="text-primary-500">md</span>
  <span className={scrolled ? "text-secondary-500" : "text-white"}>Works</span>
</span> */}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-colors hover:text-primary-500",
                scrolled ? "text-secondary-500" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+254700000000"
            className={cn(
              "flex items-center gap-2 font-semibold",
              scrolled ? "text-primary-500" : "text-white"
            )}
          >
            <Phone size={18} /> +254 705 818 181
          </a>
          <Button href="/contact" variant="primary" size="sm">
            Get a Quote
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={28} className={scrolled ? "text-secondary-500" : "text-white"} />
        </button>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={links} />
    </header>
  );
}