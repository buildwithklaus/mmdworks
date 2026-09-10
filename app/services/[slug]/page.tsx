import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { LucideIcon, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CtaSection from "@/components/home/CtaSection";
import { services } from "@/lib/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = (Icons as unknown as Record<string, LucideIcon>)[service.icon];
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative flex h-[45vh] min-h-[360px] items-end overflow-hidden bg-charcoal pt-20">
        <Image
          src="/images/services/services-hero.jpg"
          alt={service.title}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        <Container className="relative z-10 pb-14">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500 text-white">
            {Icon && <Icon size={28} />}
          </div>
          <h1 className="mt-5 max-w-2xl font-heading text-4xl font-extrabold text-white sm:text-5xl">
            {service.title}
          </h1>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-extrabold text-secondary-500">
              Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-secondary-500/70">
              {service.fullDescription}
            </p>

            {service.features && (
              <>
                <h3 className="mt-10 font-heading text-xl font-bold text-secondary-500">
                  What's Included
                </h3>
                <ul className="mt-5 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-primary-500" size={20} />
                      <span className="text-secondary-500/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="rounded-2xl bg-gray-50 p-8 shadow-card lg:sticky lg:top-28 lg:h-fit">
            <h3 className="font-heading text-lg font-bold text-secondary-500">
              Interested in this service?
            </h3>
            <p className="mt-2 text-sm text-secondary-500/60">
              Get a free, no-obligation quote from our team today.
            </p>
            <Button href="/contact" variant="primary" className="mt-5 w-full justify-center">
              Request a Quote
            </Button>
            <Button
              href="tel:+254700000000"
              variant="ghost"
              icon={false}
              className="mt-3 w-full justify-center border border-gray-200"
            >
              Call +254 700 000 000
            </Button>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <h4 className="font-heading text-sm font-bold text-secondary-500">
                Other Services
              </h4>
              <ul className="mt-3 space-y-2">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-secondary-500/70 hover:text-primary-500"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}