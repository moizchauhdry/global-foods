"use client";

import { ShieldCheck } from "lucide-react";
import { Stagger, StaggerItem } from "@/src/components/animations/Stagger";
import { Container } from "@/src/components/ui/Container";
import { trustBadges } from "@/src/data/company";

export function TrustStrip() {
  return (
    <section id="trust" className="border-y border-line bg-paper/90 backdrop-blur-sm">
      <Container className="py-7">
        <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" stagger={0.06}>
          {trustBadges.map((badge) => (
            <StaggerItem key={badge.label}>
              <div className="group flex items-center gap-3 text-sm text-charcoal">
                <span className="flex h-11 w-11 items-center justify-center border border-line bg-beige/50 text-forest transition-colors duration-300 group-hover:border-forest/30 group-hover:bg-forest group-hover:text-white">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-medium">{badge.label}</span>
                  <span className="block text-[11px] uppercase tracking-[0.14em] text-muted">
                    {badge.note}
                  </span>
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
