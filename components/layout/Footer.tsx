import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/log.png"
            alt="MD Works Logo"
            width={140}
            height={40}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Building reliable, safety-focused infrastructure for communities and
            businesses across the region.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#"
                  target="_blank"
    rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary-500"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.instagram.com/metrics.design?igsi=MW92aHRhM3F5OXB0eQ%3D%3D&utm_source=qr"
                  target="_blank"
    rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary-500"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@metrics.designs?_r=1&_t=ZS-994ASAEcClJ"
                  target="_blank"
    rel="noopener noreferrer"
              aria-label="Tiktok"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary-500"
            >
             
              <FaTiktok size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Company</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {["About", "Services", "Projects", "Gallery", "Testimonials"].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase()}`} className="hover:text-primary-400">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Services</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {["Building Construction", "Civil Engineering", "Road Construction", "Renovations"].map(
              (item) => (
                <li key={item} className="hover:text-primary-400">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold">Contact</h4>
          <ul className="mt-4 space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-primary-400" />
              123 Industrial Ave, Nairobi, Kenya
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary-400" /> +254 705 818 181
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary-400" /> info@mdworks.com
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} MD Works. All rights reserved.
      </div>
    </footer>
  );
}