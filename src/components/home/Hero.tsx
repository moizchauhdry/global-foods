"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";
import { images } from "@/src/data/images";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.35]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden text-white"
    >
      <motion.div
        className="absolute inset-0"
        style={mounted ? { y: imageY } : undefined}
      >
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/92 via-forest-deep/72 to-forest-deep/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-forest-deep/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(15,74,18,0.35)_100%)]" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-20 pt-28 sm:pb-24 lg:justify-center lg:pb-28">
        <motion.div
          style={mounted ? { y: contentY, opacity } : undefined}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-gold"
          >
            Premium Halal Meat
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.28 }}
            className="mt-5 font-display text-3xl font-bold uppercase tracking-[0.08em] text-white sm:text-4xl lg:text-5xl"
          >
            {company.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.4 }}
            className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[3.25rem]"
          >
            {company.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg"
          >
            Premium halal meat, processed to international standards and
            delivered through a trusted global cold chain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.7 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/products" variant="accent" size="lg">
              Explore Our Products
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Discover Our Journey
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-7 text-sm tracking-wide text-white/55"
          >
            Pakistani origin · Halal processing · International export focus
          </motion.p>
        </motion.div>
      </Container>

      <a
        href="#trust"
        className="scroll-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/55 sm:flex"
      >
        Scroll
        <ChevronDown className="h-4 w-4" />
      </a>
    </section>
  );
}
