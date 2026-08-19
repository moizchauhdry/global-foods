"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/src/components/shared/BrandLogo";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { company, navLinks } from "@/src/data/company";
import { enquiryCountries, productTypes } from "@/src/data/enquiry";

const contacts = [
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "Office",
    value: `${company.headquarters}`,
    detail: company.address,
    href: undefined,
    icon: MapPin,
  },
] as const;

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-forest-deep text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <p
        className="pointer-events-none absolute -bottom-10 left-0 select-none font-display text-[18vw] font-semibold leading-none tracking-tight text-white/[0.035]"
        aria-hidden="true"
      >
        {company.name}
      </p>

      <Container className="relative">
        <div className="flex flex-col gap-8 border-b border-white/10 py-12 sm:flex-row sm:items-end sm:justify-between sm:py-16">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Export enquiry
            </p>
            <p className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Specify a chilled beef or mutton program for your market.
            </p>
          </div>
          <Button
            href="#contact"
            variant="accent"
            size="lg"
            className="shrink-0 text-[11px] uppercase tracking-[0.16em]"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="lg:col-span-4">
            <div className="inline-flex rounded-sm bg-white px-3 py-2">
              <BrandLogo href="#home" />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Chilled halal beef and mutton from Pakistan, prepared for buyers
              across the GCC.
            </p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
              {company.legalName}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-baseline gap-2.5 text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    <span className="font-display text-[11px] text-white/30 transition-colors group-hover:text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Products
            </p>
            <ul className="mt-5 space-y-3">
              {productTypes.map((product) => (
                <li key={product.value}>
                  <a
                    href="#products"
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {product.label}
                  </a>
                  <span className="mt-0.5 block text-xs text-white/35">
                    Chilled export
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              GCC markets
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {enquiryCountries.map((country) => (
                <li key={country.value}>
                  <span className="inline-flex rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-white/70">
                    {country.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-3">
          {contacts.map((item) => {
            const Icon = item.icon;
            const inner = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                    {item.label}
                  </span>
                  <span className="mt-1 block truncate text-sm text-white/90">
                    {item.value}
                  </span>
                  {"detail" in item && item.detail ? (
                    <span className="mt-0.5 block truncate text-xs text-white/45">
                      {item.detail}
                    </span>
                  ) : null}
                </span>
              </>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-3 bg-forest-deep px-5 py-5 transition-colors hover:bg-forest"
              >
                {inner}
              </a>
            ) : (
              <div
                key={item.label}
                className="flex items-start gap-3 bg-forest-deep px-5 py-5"
              >
                {inner}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 py-6 text-[11px] uppercase tracking-[0.14em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}
          </p>
          <p>Pakistan · Halal · Chilled GCC export</p>
        </div>
      </Container>
    </footer>
  );
}
