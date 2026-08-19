"use client";

import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { Container } from "@/src/components/ui/Container";
import { productGallery } from "@/src/data/images";
import { useSmoothedProgress } from "@/src/lib/motion";

export function ProductScroll() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const progress = useSmoothedProgress(ref, ["start start", "end end"]);
  const x = useTransform(progress, [0, 1], [0, -travel]);
  const progressScale = useTransform(progress, [0, 1], [0.08, 1]);

  useLayoutEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    const measure = () => {
      setTravel(Math.max(0, node.scrollWidth - window.innerWidth + 48));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      id="products"
      ref={ref}
      className="relative h-[280vh] bg-forest-deep text-white"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        <Container className="flex items-end justify-between gap-8 pt-24 pb-6 sm:pt-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Products
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Beef and mutton, cut for export.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-white/60 lg:block">
            Scroll to move through the gallery. Each program is prepared for
            chilled and frozen international supply.
          </p>
        </Container>

        <div className="relative flex-1">
          <motion.div
            ref={trackRef}
            className="absolute top-4 flex h-[calc(100%-3.5rem)] gap-6 pl-[6vw] pr-[12vw] will-change-transform"
            style={{ x }}
          >
            {productGallery.map((item, index) => (
              <article
                key={item.src}
                className="relative h-full w-[78vw] shrink-0 overflow-hidden rounded-sm sm:w-[62vw] lg:w-[46vw]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 46vw, 80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-white/75">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="px-5 pb-8 sm:px-8 lg:px-10">
          <div className="h-px w-full origin-left bg-white/15">
            <motion.div
              className="h-px origin-left bg-gold"
              style={{ scaleX: progressScale }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
