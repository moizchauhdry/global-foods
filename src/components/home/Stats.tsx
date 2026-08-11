"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/src/components/ui/Container";
import { statistics } from "@/src/data/company";

function useCountUp(target: number, enabled: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, enabled]);

  return value;
}

function StatCard({
  value,
  suffix,
  label,
  note,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  note: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);

  return (
    <div className="lift-card border border-line bg-paper/70 p-5 pt-6 backdrop-blur-sm">
      <p className="font-display text-4xl font-semibold tracking-tight text-forest-deep sm:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.16em] text-charcoal">
        {label}
      </p>
      <p className="mt-2 text-xs text-muted">{note}</p>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-beige py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55),transparent_70%)]" />
      <Container className="relative z-[1]">
        <p className="mb-10 max-w-2xl text-sm text-muted">
          Editable placeholder statistics for layout and storytelling. Replace
          with verified company figures before public launch.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {statistics.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              note={stat.editableNote}
              active={inView}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
