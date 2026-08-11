"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";
import { images } from "@/src/data/images";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/75 to-forest-deep/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-forest-deep/25" />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-20 lg:justify-center lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Premium Halal Meat
          </p>
          <p className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            {company.name}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            {company.tagline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Premium halal meat, processed to international standards and
            delivered through a trusted global cold chain.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/products" variant="accent" size="lg">
              Explore Our Products
            </Button>
            <Button href="/about" variant="secondary" size="lg">
              Discover Our Journey
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Pakistani origin · Halal processing · International export focus
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
