"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { Container } from "@/src/components/ui/Container";
import { productGallery } from "@/src/data/images";
import { useSmoothedProgress } from "@/src/lib/motion";

const count = productGallery.length;
const span = count - 1;

export function ProductScroll() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const progress = useSmoothedProgress(ref, ["start start", "end end"]);
  const x = useTransform(progress, [0, 1], [0, -travel]);
  const chapter = useTransform(progress, (value) =>
    String(Math.min(count, Math.floor(value * span) + 1)).padStart(2, "0"),
  );
  const headingY = useTransform(progress, [0, 1], [0, -10]);

  useLayoutEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    const measure = () => {
      setTravel(Math.max(0, node.scrollWidth - window.innerWidth + 64));
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
      className="relative h-[300vh] bg-forest-deep text-white"
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden">
        <Container className="flex items-end justify-between gap-8 pt-24 pb-5 sm:pt-28">
          <motion.div style={{ y: headingY }}>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Products
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Beef and mutton, cut for export.
            </h2>
          </motion.div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-white/60 lg:block">
            Scroll to move through the gallery. Each program is prepared for
            chilled supply to GCC markets.
          </p>
        </Container>

        <div className="relative flex-1 [perspective:1400px]">
          <motion.div
            ref={trackRef}
            className="absolute top-3 flex h-[calc(100%-2.5rem)] items-stretch gap-4 pl-[8vw] pr-[18vw] will-change-transform sm:gap-5 lg:gap-6"
            style={{ x, transformStyle: "preserve-3d" }}
          >
            {productGallery.map((item, index) => (
              <ProductCard
                key={item.src}
                index={index}
                item={item}
                progress={progress}
              />
            ))}
          </motion.div>
        </div>

        <div className="px-5 pb-8 sm:px-8 lg:px-10">
          <div className="flex items-end gap-5">
            <p className="shrink-0 font-display text-sm tracking-[0.18em] text-white/55">
              <motion.span className="text-gold">{chapter}</motion.span>
              <span className="mx-1.5 text-white/25">/</span>
              {String(count).padStart(2, "0")}
            </p>
            <div className="grid min-w-0 flex-1 grid-cols-4 gap-2">
              {productGallery.map((item, index) => (
                <Segment
                  key={item.title}
                  index={index}
                  label={item.title}
                  progress={progress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  index,
  item,
  progress,
}: {
  index: number;
  item: (typeof productGallery)[number];
  progress: MotionValue<number>;
}) {
  const reduceMotion = useReducedMotion();

  const scale = useTransform(progress, (value) => {
    const distance = Math.abs(value * span - index);
    return 1.02 - Math.min(distance, 1.15) * 0.14;
  });
  const rotateY = useTransform(progress, (value) => {
    const delta = value * span - index;
    return delta * -18;
  });
  const z = useTransform(progress, (value) => {
    const distance = Math.abs(value * span - index);
    return (1 - Math.min(distance, 1)) * 80;
  });
  const zIndex = useTransform(progress, (value) => {
    const distance = Math.abs(value * span - index);
    return Math.round((1 - Math.min(distance, 1)) * 20);
  });
  const opacity = useTransform(progress, (value) => {
    const distance = Math.abs(value * span - index);
    return 1 - Math.min(distance, 1.25) * 0.32;
  });
  const overlay = useTransform(progress, (value) => {
    const distance = Math.abs(value * span - index);
    return 0.08 + Math.min(distance, 1) * 0.42;
  });
  const captionOpacity = useTransform(progress, (value) => {
    const distance = Math.abs(value * span - index);
    return Math.max(0, 1 - distance * 1.65);
  });
  const captionY = useTransform(progress, (value) => {
    const distance = Math.abs(value * span - index);
    return Math.min(distance, 1) * 22;
  });
  const imageScale = useTransform(progress, (value) => {
    const distance = Math.abs(value * span - index);
    return 1.16 - Math.min(distance, 1) * 0.08;
  });
  const frame = useTransform(progress, (value) => {
    const distance = Math.abs(value * span - index);
    return Math.max(0, 1 - distance * 2.2);
  });

  return (
    <motion.article
      className="relative h-full w-[78vw] shrink-0 overflow-hidden rounded-sm sm:w-[58vw] lg:w-[38vw]"
      style={
        reduceMotion
          ? undefined
          : {
              scale,
              rotateY,
              z,
              zIndex,
              opacity,
              transformPerspective: 1400,
            }
      }
    >
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { scale: imageScale }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 38vw, 80vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/92 via-forest-deep/20 to-transparent" />
      <motion.div
        className="absolute inset-0 bg-forest-deep"
        style={{ opacity: reduceMotion ? 0 : overlay }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-gold/70"
        style={{ opacity: reduceMotion ? 0 : frame }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 p-6 sm:p-8"
        style={
          reduceMotion
            ? undefined
            : { opacity: captionOpacity, y: captionY }
        }
      >
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
          {item.title}
        </h3>
        <p className="mt-2 max-w-md text-sm text-white/75">{item.caption}</p>
      </motion.div>
    </motion.article>
  );
}

function Segment({
  index,
  label,
  progress,
}: {
  index: number;
  label: string;
  progress: MotionValue<number>;
}) {
  const start = index / count;
  const end = (index + 1) / count;
  const fill = useTransform(progress, [start, end], [0, 1]);
  const labelOpacity = useTransform(
    progress,
    [Math.max(0, start - 0.06), start + 0.04, end],
    [0.35, 1, 1],
  );

  return (
    <div className="min-w-0">
      <div className="h-px origin-left bg-white/15">
        <motion.div className="h-px origin-left bg-gold" style={{ scaleX: fill }} />
      </div>
      <motion.p
        className="mt-2 hidden truncate text-[10px] uppercase tracking-[0.16em] text-white/55 sm:block"
        style={{ opacity: labelOpacity }}
      >
        {label}
      </motion.p>
    </div>
  );
}
