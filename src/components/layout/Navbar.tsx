"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/src/components/shared/BrandLogo";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { company, navLinks } from "@/src/data/company";
import { cn } from "@/src/lib/cn";
import { smoothSpring } from "@/src/lib/motion";

const ease = [0.22, 1, 0.36, 1] as const;
const phoneHref = `tel:${company.phone.replace(/\s+/g, "")}`;
const emailHref = `mailto:${company.email}`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const rawLayer = useTransform(scrollY, [0, 96], [0, 1]);
  const smoothLayer = useSpring(rawLayer, smoothSpring);
  const layerOpacity = reduceMotion ? rawLayer : smoothLayer;

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const ids = ["home", ...navLinks.map((link) => link.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.15, 0.35] },
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50 text-white lg:fixed">
      <div className="pointer-events-auto relative z-50 pt-[env(safe-area-inset-top)]">
        <motion.div
          aria-hidden
          className="nav-sticky-layer absolute inset-0 max-lg:hidden"
          style={{ opacity: open ? 1 : layerOpacity }}
        />
        <Container className="relative flex h-16 items-center justify-between gap-3 sm:h-20 sm:gap-6">
          <div className="min-w-0 rounded-sm bg-white px-2 py-1.5 sm:px-2.5">
            <BrandLogo
              priority
              variant="compact"
              href="#home"
              onClick={close}
              className="h-8 max-w-[9.5rem] sm:h-11 sm:max-w-none"
            />
          </div>

          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                    isActive ? "text-white" : "text-white/65 hover:text-white",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Button
              href="#contact"
              variant="accent"
              className="hidden h-10 px-4 text-[11px] uppercase tracking-[0.16em] md:inline-flex"
            >
              Request a Quote
            </Button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/25 bg-forest-deep/40 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease }}
              className="pointer-events-auto fixed inset-0 z-40 bg-forest-deep/55 lg:hidden"
              onClick={close}
            />
            <motion.aside
              id="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease }}
              className="pointer-events-auto fixed inset-y-0 right-0 z-50 flex w-[min(20.5rem,86vw)] flex-col border-l border-white/10 bg-forest-deep pt-[env(safe-area-inset-top)] shadow-[-24px_0_60px_-28px_rgba(0,0,0,0.55)] lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  Menu
                </p>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/20"
                  aria-label="Close menu"
                  onClick={close}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-5 py-2" aria-label="Mobile">
                {navLinks.map((link, index) => {
                  const isActive = active === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-baseline gap-3 border-b border-white/10 py-4",
                        isActive ? "text-white" : "text-white/75",
                      )}
                      onClick={close}
                    >
                      <span className="font-display text-sm text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl font-semibold tracking-tight">
                        {link.label}
                      </span>
                    </a>
                  );
                })}

                <div className="mt-6 grid gap-3">
                  <a
                    href={emailHref}
                    className="flex items-center gap-3 text-sm text-white/75"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-gold" />
                    {company.email}
                  </a>
                  <a
                    href={phoneHref}
                    className="flex items-center gap-3 text-sm text-white/75"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-gold" />
                    {company.phone}
                  </a>
                </div>
              </nav>

              <div className="border-t border-white/10 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <Button
                  href="#contact"
                  variant="accent"
                  className="w-full"
                  onClick={close}
                >
                  Request a Quote
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
