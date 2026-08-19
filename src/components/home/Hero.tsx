"use client";

import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";
import { images } from "@/src/data/images";
import { useSmoothedProgress } from "@/src/lib/motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSmoothedProgress(ref, ["start start", "end start"]);
  const imageScale = useTransform(progress, [0, 1], [1.04, 1.1]);
  const imageY = useTransform(progress, [0, 1], ["0%", "8%"]);
  const contentY = useTransform(progress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(progress, [0, 0.85], [1, 0.45]);
  const overlay = useTransform(progress, [0, 1], [0.08, 0.28]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate h-[140vh] text-white"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div
          className="absolute inset-[-8%] h-[116%] w-[116%] will-change-transform"
          style={{ y: imageY, scale: imageScale }}
        >
          <Image
            src={images.slaughterHouse.src}
            alt={images.slaughterHouse.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-forest-deep"
          style={{ opacity: overlay }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest-deep/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-forest-deep/35" />

        <Container className="relative flex h-full flex-col justify-end pb-24 pt-28 sm:pb-28 lg:justify-center">
          <motion.div style={{ y: contentY, opacity }} className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.12 }}
              className="text-xs font-semibold uppercase tracking-[0.32em] text-gold"
            >
              Premium Halal Meat · Pakistan
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.24 }}
              className="mt-5 font-display text-3xl font-bold uppercase tracking-[0.1em] sm:text-4xl"
            >
              {company.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, ease, delay: 0.36 }}
              className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              {company.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.5 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg"
            >
              Halal beef and mutton, processed to international standards and
              delivered through a disciplined global cold chain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease, delay: 0.64 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="#products" variant="accent" size="lg">
                Explore Products
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                Request a Quote
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        <a
          href="#about"
          className="scroll-cue absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/55 sm:flex"
        >
          Scroll
          <ChevronDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
