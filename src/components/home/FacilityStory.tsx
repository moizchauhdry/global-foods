"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { facilityStory } from "@/src/data/images";
import { useSmoothedProgress } from "@/src/lib/motion";

const total = facilityStory.length;

export function FacilityStory() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSmoothedProgress(ref, ["start start", "end end"]);
  const barScale = useTransform(progress, [0, 1], [0.06, 1]);
  const chapter = useTransform(progress, (value) =>
    String(Math.min(total, Math.floor(value * total) + 1)).padStart(2, "0"),
  );

  return (
    <section
      id="facility"
      ref={ref}
      className="relative h-[320vh] bg-charcoal text-white"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {facilityStory.map((slide, index) => (
          <Slide
            key={slide.src}
            index={index}
            progress={progress}
            src={slide.src}
            alt={slide.alt}
            kicker={slide.kicker}
            title={slide.title}
            body={slide.body}
          />
        ))}

        <ChapterRail progress={progress} />

        <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-7 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <p className="font-display text-sm tracking-[0.18em] text-white/55">
              <motion.span className="text-gold">{chapter}</motion.span>
              <span className="mx-1.5 text-white/25">/</span>
              {String(total).padStart(2, "0")}
            </p>
            <div className="h-px min-w-0 flex-1 origin-left bg-white/15">
              <motion.div
                className="h-px origin-left bg-gold"
                style={{ scaleX: barScale }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function timings(index: number) {
  const slot = 1 / total;
  const start = index * slot;
  const end = (index + 1) * slot;
  const wipeStart = Math.max(0, start - slot * 0.08);
  const wipeEnd = Math.min(1, start + slot * 0.42);
  const textInStart = index === 0 ? 0 : start + slot * 0.12;
  const textInEnd = index === 0 ? slot * 0.18 : start + slot * 0.48;
  const textOutStart = end - slot * 0.22;
  const textOutEnd = Math.min(1, end + slot * 0.06);

  return {
    start,
    end,
    wipeStart,
    wipeEnd,
    textInStart,
    textInEnd,
    textOutStart,
    textOutEnd,
  };
}

function Slide({
  index,
  progress,
  src,
  alt,
  kicker,
  title,
  body,
}: {
  index: number;
  progress: MotionValue<number>;
  src: string;
  alt: string;
  kicker: string;
  title: string;
  body: string;
}) {
  const reduceMotion = useReducedMotion();
  const t = timings(index);
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const clipPath = useTransform(
    progress,
    isFirst ? [0, 0] : [t.wipeStart, t.wipeEnd],
    isFirst
      ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
      : ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
  );

  const imageScale = useTransform(progress, [t.start, t.end], [1.12, 1.03]);
  const imageX = useTransform(progress, [t.start, t.end], ["-2.5%", "1.5%"]);

  const fade = useTransform(
    progress,
    isFirst
      ? [0, 1]
      : isLast
        ? [t.wipeStart, t.wipeEnd, 1]
        : [t.wipeStart, t.wipeEnd],
    isFirst ? [1, 1] : isLast ? [0, 1, 1] : [0, 1],
  );

  const kickerY = useTransform(
    progress,
    isFirst ? [0, 0] : [t.textInStart, t.textInEnd],
    isFirst ? [0, 0] : [18, 0],
  );
  const titleY = useTransform(
    progress,
    isFirst ? [0, 0] : [t.textInStart, t.textInEnd],
    isFirst ? [0, 0] : [36, 0],
  );
  const bodyY = useTransform(
    progress,
    isFirst ? [0, 0] : [t.textInStart, t.textInEnd],
    isFirst ? [0, 0] : [28, 0],
  );

  const textOpacity = useTransform(
    progress,
    isFirst
      ? [0, t.textOutStart, t.textOutEnd]
      : isLast
        ? [t.textInStart, t.textInEnd, 1]
        : [t.textInStart, t.textInEnd, t.textOutStart, t.textOutEnd],
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0],
  );

  const lineScale = useTransform(
    progress,
    isFirst ? [0, 0] : [t.textInStart, t.textInEnd],
    isFirst ? [1, 1] : [0.15, 1],
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        zIndex: index,
        opacity: reduceMotion ? fade : 1,
      }}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden will-change-transform"
        style={reduceMotion ? undefined : { clipPath }}
      >
        <motion.div
          className="absolute inset-[-8%] h-[116%] w-[116%]"
          style={
            reduceMotion
              ? undefined
              : { scale: imageScale, x: imageX }
          }
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/48 to-forest-deep/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-forest-deep/25" />
      </motion.div>

      <motion.div
        className="relative flex h-full max-w-xl flex-col justify-end px-5 pb-24 sm:px-10 lg:px-16"
        style={{ opacity: textOpacity }}
      >
        <motion.p
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold"
          style={reduceMotion ? undefined : { y: kickerY }}
        >
          <motion.span
            className="h-px w-10 origin-left bg-gold"
            style={reduceMotion ? undefined : { scaleX: lineScale }}
            aria-hidden="true"
          />
          {kicker}
        </motion.p>
        <motion.h2
          className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl lg:text-[3.15rem]"
          style={reduceMotion ? undefined : { y: titleY }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mt-4 max-w-md text-base leading-relaxed text-white/80"
          style={reduceMotion ? undefined : { y: bodyY }}
        >
          {body}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

function ChapterRail({ progress }: { progress: MotionValue<number> }) {
  const fill = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div className="pointer-events-none absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 lg:flex">
      <div className="relative mr-5 h-44 w-px bg-white/15">
        <motion.span
          className="absolute inset-x-0 top-0 origin-top bg-gold"
          style={{ scaleY: fill, height: "100%" }}
        />
      </div>
      <ol className="flex flex-col justify-between py-0.5">
        {facilityStory.map((slide, index) => (
          <ChapterItem
            key={slide.kicker}
            index={index}
            label={slide.kicker.replace(/^\d+\s—\s/, "")}
            progress={progress}
          />
        ))}
      </ol>
    </div>
  );
}

function ChapterItem({
  index,
  label,
  progress,
}: {
  index: number;
  label: string;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const opacity = useTransform(
    progress,
    isFirst
      ? [0, end - 0.02, end]
      : isLast
        ? [start, start + 0.05, 1]
        : [start, start + 0.04, end - 0.02, end],
    isFirst ? [1, 1, 0.32] : isLast ? [0.32, 1, 1] : [0.32, 1, 1, 0.32],
  );
  const color = useTransform(
    progress,
    isFirst
      ? [0, end - 0.02, end]
      : isLast
        ? [start, start + 0.06, 1]
        : [start, start + 0.06, end - 0.02, end],
    isFirst
      ? ["rgb(245, 176, 65)", "rgb(245, 176, 65)", "rgba(255,255,255,0.4)"]
      : isLast
        ? ["rgba(255,255,255,0.4)", "rgb(245, 176, 65)", "rgb(245, 176, 65)"]
        : [
            "rgba(255,255,255,0.4)",
            "rgb(245, 176, 65)",
            "rgb(245, 176, 65)",
            "rgba(255,255,255,0.4)",
          ],
  );

  return (
    <motion.li className="text-right" style={{ opacity }}>
      <motion.p
        className="font-display text-sm tracking-[0.16em]"
        style={{ color }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
    </motion.li>
  );
}
