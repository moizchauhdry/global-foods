"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { Container } from "@/src/components/ui/Container";
import { facilityStory } from "@/src/data/images";
import { cn } from "@/src/lib/cn";

const total = facilityStory.length;
const ease = [0.22, 1, 0.36, 1] as const;

const imageVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction * 56,
    scale: 1.05,
  }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction * -40,
    scale: 1.02,
  }),
};

const textVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 20 : -20,
  }),
  center: { opacity: 1, y: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -16 : 16,
  }),
};

export function FacilityStory() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const slide = facilityStory[active];

  const dragX = useRef(0);

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      if (clamped === active) return;
      setDirection(clamped > active ? 1 : -1);
      setActive(clamped);
    },
    [active],
  );

  return (
    <section
      id="facility"
      className="relative overflow-hidden bg-forest-deep text-white"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goTo(active - 1);
        if (event.key === "ArrowRight") goTo(active + 1);
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="relative z-10 max-w-xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Facility
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              From the line to cold storage.
            </h2>

            <div className="relative mt-10 min-h-[13.5rem] sm:min-h-[15rem]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={slide.kicker}
                  custom={direction}
                  variants={textVariants}
                  initial={reduceMotion ? { opacity: 0 } : "enter"}
                  animate="center"
                  exit={reduceMotion ? { opacity: 0 } : "exit"}
                  transition={{ duration: 0.45, ease }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                    {slide.kicker}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                    {slide.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                    {slide.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <ol className="mt-8 hidden gap-2 sm:grid sm:grid-cols-3">
              {facilityStory.map((item, index) => {
                const isActive = index === active;
                return (
                  <li key={item.kicker}>
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      className={cn(
                        "w-full border-t pt-3 text-left transition-colors duration-300",
                        isActive ? "border-gold" : "border-white/15 hover:border-white/40",
                      )}
                    >
                      <span
                        className={cn(
                          "block font-display text-sm tracking-[0.16em]",
                          isActive ? "text-gold" : "text-white/40",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "mt-1 block text-[11px] uppercase tracking-[0.16em]",
                          isActive ? "text-white" : "text-white/45",
                        )}
                      >
                        {item.kicker.replace(/^\d+\s—\s/, "")}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="relative">
            <div
              className="relative aspect-[4/5] touch-pan-y overflow-hidden rounded-sm select-none sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/4]"
              role="region"
              aria-roledescription="carousel"
              aria-label="Facility process"
              tabIndex={0}
              onPointerDown={(event) => {
                dragX.current = event.clientX;
              }}
              onPointerUp={(event) => {
                const delta = event.clientX - dragX.current;
                if (Math.abs(delta) < 48) return;
                goTo(delta < 0 ? active + 1 : active - 1);
              }}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={slide.src}
                  custom={direction}
                  className="absolute inset-0"
                  variants={imageVariants}
                  initial={reduceMotion ? { opacity: 0 } : "enter"}
                  animate="center"
                  exit={reduceMotion ? { opacity: 0 } : "exit"}
                  transition={{ duration: 0.65, ease }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority={active === 0}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/55 via-transparent to-forest-deep/20" />

              <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between p-4 sm:p-5">
                <p className="font-display text-sm tracking-[0.18em] text-white/80">
                  <span className="text-gold">{String(active + 1).padStart(2, "0")}</span>
                  <span className="mx-1.5 text-white/30">/</span>
                  {String(total).padStart(2, "0")}
                </p>
                <div className="flex gap-2">
                  <NavButton
                    label="Previous stage"
                    disabled={active === 0}
                    onClick={() => goTo(active - 1)}
                    icon={ChevronLeft}
                  />
                  <NavButton
                    label="Next stage"
                    disabled={active === total - 1}
                    onClick={() => goTo(active + 1)}
                    icon={ChevronRight}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {facilityStory.map((item, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={item.title}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative aspect-[16/10] overflow-hidden rounded-sm ring-1 transition-all duration-300",
                      isActive
                        ? "ring-gold"
                        : "ring-white/10 opacity-60 hover:opacity-100 hover:ring-white/30",
                    )}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function NavButton({
  label,
  disabled,
  onClick,
  icon: Icon,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  icon: typeof ChevronLeft;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-forest-deep/55 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-30"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
