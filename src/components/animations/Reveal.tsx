"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/src/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
  blur?: boolean;
};

const offsets = {
  up: { y: 32, x: 0 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.8,
  blur = false,
}: Props) {
  const offset = offsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offset,
      ...(blur ? { filter: "blur(8px)" } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(blur ? { filter: "blur(0px)" } : {}),
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -40px 0px" }}
    >
      {children}
    </motion.div>
  );
}
