"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLogo } from "@/src/components/shared/BrandLogo";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { navLinks } from "@/src/data/company";
import { cn } from "@/src/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

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
            onClick={() => setOpen(false)}
          />
        </div>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <div key={link.label} className="group relative">
              <Link
                href={link.href}
                className="inline-flex items-center gap-1 px-3 py-2 text-sm text-white/85 transition-colors hover:text-white"
              >
                {link.label}
                {"children" in link && link.children ? (
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                ) : null}
              </Link>
              {"children" in link && link.children ? (
                <div className="invisible absolute left-0 top-full z-20 min-w-52 translate-y-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mt-2 border border-white/10 bg-forest-deep py-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/request-a-quote"
            variant="accent"
            className="hidden md:inline-flex"
          >
            Request a Quote
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 xl:hidden"
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
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-forest-deep sm:top-20 xl:hidden"
          >
            <Container className="flex min-h-full flex-col gap-2 py-6 pb-24">
              {navLinks.map((link) => {
                const hasChildren = "children" in link && !!link.children;
                const isExpanded = expanded === link.label;

                return (
                  <div key={link.label} className="border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className="flex-1 py-4 text-lg text-white"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                      {hasChildren ? (
                        <button
                          type="button"
                          className="p-3 text-white/70"
                          aria-label={`Toggle ${link.label} submenu`}
                          onClick={() =>
                            setExpanded(isExpanded ? null : link.label)
                          }
                        >
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              isExpanded && "rotate-180",
                            )}
                          />
                        </button>
                      ) : null}
                    </div>
                    {hasChildren && isExpanded ? (
                      <div className="space-y-1 pb-4 pl-3">
                        {link.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-white/70"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <Button
                href="/request-a-quote"
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
