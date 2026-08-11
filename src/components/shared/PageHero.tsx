"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/src/components/ui/Container";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: { src: string; alt: string };
};

const ease = [0.22, 1, 0.36, 1] as const;

export function PageHero({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 text-white sm:pt-32 sm:pb-24">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-forest-deep/78" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-forest-deep/30" />

      <Container className="relative max-w-4xl">
        {eyebrow ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-beige"
          >
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.1 }}
          className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.22 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {description}
          </motion.p>
        ) : null}
      </Container>
    </section>
  );
}
