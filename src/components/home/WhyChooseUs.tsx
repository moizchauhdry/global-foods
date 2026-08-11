import {
  BadgeCheck,
  Globe2,
  Leaf,
  Factory,
  Route,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/src/components/animations/Reveal";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { whyChooseUs } from "@/src/data/company";

const icons = [Leaf, ShieldCheck, BadgeCheck, Route, Factory, Globe2];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built for buyers who need certainty."
            description="Six reasons international procurement teams evaluate Umme Yusra Global Foods as a serious processing and export partner."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index] ?? BadgeCheck;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full border border-line bg-cream p-6">
                  <Icon className="h-6 w-6 text-forest" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl text-forest-deep">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
