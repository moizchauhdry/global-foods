"use client";

import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useRef } from "react";
import { facilityStory } from "@/src/data/images";
import { useSmoothedProgress } from "@/src/lib/motion";

export function FacilityStory() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSmoothedProgress(ref, ["start start", "end end"]);

  return (
    <section
      id="facility"
      ref={ref}
      className="relative h-[260vh] bg-charcoal text-white"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {facilityStory.map((slide, index) => (
          <Slide
            key={slide.src}
            index={index}
            total={facilityStory.length}
            progress={progress}
            src={slide.src}
            alt={slide.alt}
            kicker={slide.kicker}
            title={slide.title}
            body={slide.body}
          />
        ))}

        <div className="pointer-events-none absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
          {facilityStory.map((slide, index) => (
            <StepMark
              key={slide.kicker}
              index={index}
              total={facilityStory.length}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Slide({
  index,
  total,
  progress,
  src,
  alt,
  kicker,
  title,
  body,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  src: string;
  alt: string;
  kicker: string;
  title: string;
  body: string;
}) {
  const slot = 1 / total;
  const overlap = slot * 0.55;
  const fadeInStart = Math.max(0, index * slot - overlap);
  const fadeInEnd = index * slot + overlap * 0.35;
  const fadeOutStart = (index + 1) * slot - overlap * 0.35;
  const fadeOutEnd = Math.min(1, (index + 1) * slot + overlap);
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    isFirst
      ? [0, fadeOutStart, fadeOutEnd]
      : isLast
        ? [fadeInStart, fadeInEnd, 1]
        : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0],
  );
  const textOpacity = useTransform(
    progress,
    isFirst
      ? [0, fadeOutStart - 0.04, fadeOutEnd]
      : isLast
        ? [fadeInStart, fadeInEnd, 1]
        : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0],
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity, zIndex: index }}
    >
      <div className="absolute inset-0">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/88 via-forest-deep/45 to-forest-deep/20" />
      <motion.div
        className="relative flex h-full max-w-xl flex-col justify-end px-5 pb-20 sm:px-10 lg:px-16"
        style={{ opacity: textOpacity }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {kicker}
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">
          {body}
        </p>
      </motion.div>
    </motion.div>
  );
}

function StepMark({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const scaleY = useTransform(progress, [start, end], [0.35, 1]);
  const opacity = useTransform(progress, [start, end], [0.35, 1]);

  return (
    <motion.span
      className="h-10 w-px origin-top bg-gold"
      style={{ scaleY, opacity }}
      aria-hidden="true"
    />
  );
}
