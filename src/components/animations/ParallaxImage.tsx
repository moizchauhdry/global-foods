"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/src/lib/cn";
import { useIsClient } from "@/src/lib/use-is-client";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  intensity?: number;
};

export function ParallaxImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
  intensity = 18,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useIsClient();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity}%`, `${intensity}%`]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.04]);

  return (
    <div ref={ref} className={cn("media-frame relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-[-12%] h-[124%] w-full"
        style={mounted ? { y, scale } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
