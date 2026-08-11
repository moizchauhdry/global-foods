"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/src/components/shared/BrandLogo";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { company, footerLinks } from "@/src/data/company";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  return (
    <footer className="bg-forest-deep text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <div className="inline-flex rounded-sm bg-white px-3 py-2">
            <BrandLogo />
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
            {company.description}
          </p>
          <form
            className="mt-8 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              if (!email.includes("@")) {
                setStatus("Please enter a valid email address.");
                return;
              }
              setStatus("Thank you. Newsletter signup is ready for CRM integration.");
              setEmail("");
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-beige">
              Newsletter
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Business email"
                className="h-11 flex-1 rounded-sm border border-white/15 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-gold"
                required
              />
              <Button type="submit" variant="accent">
                Subscribe
              </Button>
            </div>
            {status ? <p className="text-xs text-white/60">{status}</p> : null}
          </form>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {(
            [
              ["Company", footerLinks.company],
              ["Products", footerLinks.products],
              ["Quality", footerLinks.quality],
              ["Global", footerLinks.global],
            ] as const
          ).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-beige">
                {title}
              </p>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
            Placeholders pending verified company details.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white/70">
              Terms & Conditions
            </Link>
            <a href={company.social.linkedin} className="hover:text-white/70">
              LinkedIn
            </a>
            <a href={company.social.facebook} className="hover:text-white/70">
              Facebook
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
