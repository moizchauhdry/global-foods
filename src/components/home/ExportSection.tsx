"use client";

import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { images } from "@/src/data/images";
import { useSmoothedProgress } from "@/src/lib/motion";

export function ExportSection() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSmoothedProgress(ref, ["start end", "end start"]);
  const y = useTransform(progress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(progress, [0, 1], [1.08, 1.02]);

  return (
    <section
      id="export"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden text-white"
    >
      <motion.div
        className="absolute inset-[-8%] h-[116%] w-[116%] will-change-transform"
        style={{ y, scale }}
      >
        <Image
          src={images.export.src}
          alt={images.export.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest-deep/55 to-forest-deep/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-forest-deep/30" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end py-24 sm:justify-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          Global Export
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
          From the plant to the reefer container.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Coordinated loading, documentation, and refrigerated shipping keep
          Pakistani halal beef and mutton in condition for buyers across the GCC.
        </p>
        <div className="mt-9">
          <Button href="#contact" variant="accent" size="lg">
            Start an Export Inquiry
          </Button>
        </div>
      </Container>
    </section>
  );
}
