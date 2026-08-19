"use client";

import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/src/components/animations/Reveal";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { company, statistics } from "@/src/data/company";
import { images } from "@/src/data/images";
import { useSmoothedProgress } from "@/src/lib/motion";

export function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useSmoothedProgress(ref, ["start end", "end start"]);
  const frontY = useTransform(progress, [0, 1], [28, -28]);
  const backY = useTransform(progress, [0, 1], [-20, 20]);

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="The Company"
              title="Halal processing built for international buyers."
              description={company.description}
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              From livestock sourcing through inspection, processing, and
              refrigerated dispatch, every stage is designed around hygiene,
              traceability, and consistent product quality.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {statistics.map((stat) => (
                <div key={stat.label} className="border-t border-line pt-4">
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-semibold text-forest-deep">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div ref={ref} className="relative mx-auto h-[34rem] w-full max-w-xl lg:h-[38rem]">
            <motion.div
              className="absolute right-0 top-0 h-[70%] w-[78%] overflow-hidden rounded-sm shadow-[0_30px_70px_-40px_rgba(15,74,18,0.45)] will-change-transform"
              style={{ y: backY }}
            >
              <Image
                src={images.muttonFacility.src}
                alt={images.muttonFacility.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 h-[62%] w-[72%] overflow-hidden rounded-sm border-[6px] border-cream shadow-[0_24px_50px_-32px_rgba(15,74,18,0.4)] will-change-transform"
              style={{ y: frontY }}
            >
              <Image
                src={images.beefProcessing.src}
                alt={images.beefProcessing.alt}
                fill
                sizes="(min-width: 1024px) 38vw, 80vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
