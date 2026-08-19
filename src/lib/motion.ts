"use client";

import { useReducedMotion, useScroll, useSpring } from "framer-motion";
import type { MotionValue } from "framer-motion";
import type { RefObject } from "react";

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

/** Heavily damped so wheel/trackpad ticks don't snap the scene. */
export const smoothSpring = {
  stiffness: 72,
  damping: 28,
  mass: 0.38,
  restDelta: 0.0005,
} as const;

export function useSmoothedProgress<T extends HTMLElement>(
  target: RefObject<T | null>,
  offset: ScrollOffset,
): MotionValue<number> {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset });
  const smoothed = useSpring(scrollYProgress, smoothSpring);

  return reduceMotion ? scrollYProgress : smoothed;
}
