import { PageHero } from "@/src/components/shared/PageHero";
import { Button } from "@/src/components/ui/Button";
import { Container } from "@/src/components/ui/Container";
import { careerBenefits, jobOpenings } from "@/src/data/careers";
import { company } from "@/src/data/company";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Explore careers at Umme Yusra Global Foods across exports, quality, operations, and processing teams.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career in quality-driven food export."
        description="Join teams working across processing discipline, food safety, logistics, and international commercial workflows."
        image={images.team}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl text-forest-deep">Working with us</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Company culture is framed around responsibility, continuous improvement,
              and export-grade operational discipline. Replace this placeholder with
              verified employer messaging.
            </p>
            <ul className="mt-8 space-y-3">
              {careerBenefits.map((benefit) => (
                <li key={benefit} className="border-t border-line pt-3 text-sm text-muted">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-3xl text-forest-deep">Open positions</h2>
            {jobOpenings.map((job) => (
              <article key={job.id} className="border border-line bg-paper p-5">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-sage">
                  <span>{job.department}</span>
                  <span aria-hidden="true">·</span>
                  <span>{job.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{job.type}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-forest-deep">{job.title}</h3>
                <p className="mt-2 text-sm text-muted">{job.summary}</p>
                <Button
                  href={`mailto:${company.email}?subject=Application:%20${encodeURIComponent(job.title)}`}
                  variant="outline"
                  className="mt-5"
                >
                  Apply
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
