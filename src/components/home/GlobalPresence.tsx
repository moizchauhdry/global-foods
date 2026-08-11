"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/src/components/animations/Reveal";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { marketRegions } from "@/src/data/countries";

type Props = {
  showIntro?: boolean;
};

export function GlobalPresence({ showIntro = true }: Props) {
  return (
    <section className="bg-beige py-20 sm:py-24 lg:py-28">
      <Container>
        {showIntro ? (
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Global Presence"
                title="From Pakistan to the World"
                description="Editable market regions for international positioning. Replace example markets with verified export destinations when available."
              />
              <Button href="/contact" variant="primary">
                Talk to Our Export Team
              </Button>
            </div>
          </Reveal>
        ) : (
          <div className="mb-10">
            <Button href="/contact" variant="primary">
              Talk to Our Export Team
            </Button>
          </div>
        )}

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden border border-line bg-forest-deep">
              <div className="absolute inset-0 opacity-40">
                <svg viewBox="0 0 800 500" className="h-full w-full" aria-hidden="true">
                  <path
                    d="M120 180c40-50 110-70 170-40s90 90 160 80 120-70 190-40 90 110 40 160-140 60-210 40-110 10-170-20-120-70-140-120 20-90 60-120z"
                    fill="none"
                    stroke="rgba(235,228,216,0.35)"
                    strokeWidth="2"
                  />
                  <path
                    d="M80 260c30-20 70-10 100 10s70 30 110 10 80-10 120 20 90 40 130 20"
                    fill="none"
                    stroke="rgba(235,228,216,0.2)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              {marketRegions.map((region, index) => (
                <motion.div
                  key={region.id}
                  className="absolute"
                  style={{ left: `${region.marker.x}%`, top: `${region.marker.y}%` }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
                  </span>
                  <span className="absolute left-5 top-[-2px] whitespace-nowrap text-xs text-beige">
                    {region.name}
                  </span>
                </motion.div>
              ))}
              <p className="absolute bottom-4 left-4 text-xs text-white/50">
                Stylized map — markers represent editable inquiry regions, not confirmed routes.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {marketRegions.map((region, index) => (
              <Reveal key={region.id} delay={index * 0.04}>
                <article className="border border-line bg-paper p-5">
                  <h3 className="font-display text-xl text-forest-deep">{region.name}</h3>
                  <p className="mt-2 text-sm text-muted">{region.description}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-sage">
                    {region.exampleMarkets.join(" · ")}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
