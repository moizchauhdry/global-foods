import { ShieldCheck } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { trustBadges } from "@/src/data/company";

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-paper">
      <Container className="py-6">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustBadges.map((badge) => (
            <li
              key={badge.label}
              className="flex items-center gap-3 text-sm text-charcoal"
            >
              <span className="flex h-10 w-10 items-center justify-center border border-line text-forest">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-medium">{badge.label}</span>
                <span className="block text-[11px] uppercase tracking-[0.14em] text-muted">
                  {badge.note}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
