"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useIsClient } from "@/src/lib/use-is-client";

export function ScrollProgress() {
  const mounted = useIsClient();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 72,
    damping: 28,
    mass: 0.38,
    restDelta: 0.0005,
  });

  if (!mounted) {
    return (
      <div
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-gradient-to-r from-forest via-sage to-gold"
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-forest via-sage to-gold"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
