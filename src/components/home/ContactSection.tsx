"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/src/components/forms/ContactForm";
import { Reveal } from "@/src/components/animations/Reveal";
import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";
import { enquiryCountries } from "@/src/data/enquiry";
import { images } from "@/src/data/images";

const contacts = [
  {
    label: "Head office",
    value: `${company.address}, ${company.headquarters} ${company.postalCode}`,
    href: undefined,
    icon: MapPin,
  },
  {
    label: "Email",
    value: company.exportEmail,
    href: `mailto:${company.exportEmail}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
] as const;

const nextSteps = [
  "Share destination, product, and volume.",
  "We review cuts, packing, and timing.",
  "You receive a tailored chilled program.",
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <Container className="py-20 sm:py-28">
        <div className="overflow-hidden rounded-sm border border-line/80 bg-paper shadow-[0_40px_80px_-48px_rgba(15,74,18,0.45)] lg:grid lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="relative isolate min-h-[28rem] overflow-hidden text-white lg:min-h-full">
            <Image
              src={images.export.src}
              alt={images.export.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-forest-deep/82" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/55 to-forest-deep/30" />
            <div className="film-grain absolute inset-0" />

            <div className="relative flex h-full flex-col justify-between gap-12 px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
              <Reveal>
                <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  <span className="h-px w-8 bg-gold" aria-hidden="true" />
                  Export enquiry
                </p>
                <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.6rem]">
                  Tell us what your market needs.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                  Chilled beef and mutton for GCC buyers. Share destination,
                  product type, and quantity in kilograms.
                </p>
              </Reveal>

              <Reveal delay={0.08} className="space-y-8">
                <ul className="space-y-4">
                  {contacts.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <>
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white/15 bg-white/5 text-gold">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed text-white/88">
                            {item.value}
                          </span>
                        </span>
                      </>
                    );

                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="flex gap-4 rounded-sm transition-colors hover:text-white"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex gap-4">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                    GCC markets
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {enquiryCountries.map((country) => (
                      <span
                        key={country.value}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-white/80"
                      >
                        {country.label}
                      </span>
                    ))}
                  </div>
                </div>

                <ol className="space-y-3 border-t border-white/10 pt-6">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm text-white/70">
                      <span className="font-display text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </aside>

          <div className="relative geometric-pattern px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
            <Reveal delay={0.12}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
                Request a quote
              </p>
              <p className="mt-2 max-w-lg text-sm text-muted">
                Complete the form and our team will come back with a program for
                your destination.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
