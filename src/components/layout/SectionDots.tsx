"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/src/data/company";
import { cn } from "@/src/lib/cn";

const sections = [{ label: "Home", href: "#home" }, ...navLinks];

export function SectionDots() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = sections.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="pointer-events-auto flex flex-col items-center gap-3">
        {sections.map((item) => {
          const isActive = active === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex items-center justify-end"
              >
                <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-forest-deep/90 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-white opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 xl:block">
                  {item.label}
                </span>
                <span
                  className={cn(
                    "block h-2 w-2 rounded-full bg-forest-deep/35 ring-1 ring-white/80 transition-all duration-300",
                    isActive && "h-7 w-1.5 rounded-full bg-gold ring-gold",
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
