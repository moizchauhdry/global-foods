"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/src/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

const container: Variants = {
  hidden: {},
  visible: (custom: { delay: number; stagger: number }) => ({
    transition: {
      delayChildren: custom.delay,
      staggerChildren: custom.stagger,
    },
  }),
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: Props) {
  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={{ delay, stagger }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={cn(className)} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
