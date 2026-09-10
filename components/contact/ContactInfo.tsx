import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

const info = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["Kilimani", "Nairobi, Kenya"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+254 705 818 181"],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["info@mdworks.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 2:00 PM"],
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {info.map((item) => (
        <div key={item.title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-card">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
            <item.icon size={20} />
          </div>
          <div>
            <h3 className="font-heading text-sm font-bold text-secondary-500">
              {item.title}
            </h3>
            {item.lines.map((line) => (
              <p key={line} className="text-sm text-secondary-500/60">
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-2xl bg-secondary-500 p-6">
        <h3 className="font-heading text-sm font-bold text-white">Follow Us</h3>
        <div className="mt-3 flex gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary-500"
                target="_blank"
    rel="noopener noreferrer"
          >
            <FaFacebookF size={15} />
          </a>
          <a
            href="https://www.instagram.com/metrics.design?igsi=MW92aHRhM3F5OXB0eQ%3D%3D&utm_source=qr"
                target="_blank"
    rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary-500"
          >
            <FaInstagram size={15} />
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
    </div>
  );
}