import { PageHero } from "@/src/components/shared/PageHero";
import { Container } from "@/src/components/ui/Container";
import { certifications } from "@/src/data/certifications";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Certifications",
  description:
    "Review configurable certification placeholders for Halal, HACCP, ISO, BRCGS, and related food safety systems.",
  path: "/certifications",
});

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Standards ready for verification."
        description="These entries are configurable placeholders. Do not treat them as confirmed company certifications until documents are supplied."
        image={images.inspection}
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <article key={cert.id} className="border border-line bg-paper p-6">
              <div className="flex h-16 w-16 items-center justify-center border border-line bg-beige font-display text-sm text-forest">
                {cert.name.slice(0, 3)}
              </div>
              <h2 className="mt-5 font-display text-2xl text-forest-deep">{cert.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{cert.description}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-sage">
                Status: {cert.status}
              </p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
