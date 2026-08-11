import Image from "next/image";
import { Container } from "@/src/components/ui/Container";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: { src: string; alt: string };
};

export function PageHero({ eyebrow, title, description, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 text-white sm:pt-32 sm:pb-20">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest-deep/80" />
      <Container className="relative max-w-4xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-beige">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
