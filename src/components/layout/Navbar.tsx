"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/src/components/shared/BrandLogo";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { navLinks } from "@/src/data/company";
import { cn } from "@/src/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => document.documentElement.classList.remove("overflow-hidden");
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-[background-color,box-shadow,backdrop-filter] duration-500",
        scrolled || open
          ? "bg-forest-deep/92 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.55)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
        <div className="rounded-sm bg-white/95 px-2.5 py-1.5 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5">
          <BrandLogo
            priority
            variant="compact"
            href="#home"
            onClick={() => setOpen(false)}
          />
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm text-white/80 transition-colors hover:text-white",
                active === link.href && "text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="#contact"
            variant="accent"
            className="hidden md:inline-flex"
          >
            Request a Quote
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-forest-deep sm:top-20 lg:hidden"
          >
            <Container className="flex min-h-full flex-col gap-2 py-6 pb-24">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="border-b border-white/10 py-4 text-lg text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="#contact"
                variant="accent"
                className="mt-6"
                onClick={() => setOpen(false)}
              >
                Request a Quote
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
