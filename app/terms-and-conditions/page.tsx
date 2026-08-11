import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions placeholder for ${company.name}.`,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl text-forest-deep">Terms & Conditions</h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            These terms are placeholders for {company.name}. Replace with formal legal
            terms covering website use, inquiry handling, and commercial communications.
          </p>
          <p>
            Product information, statistics, certifications, and market lists on this
            website may include placeholders and should be verified before commercial reliance.
          </p>
          <p>
            For questions, contact {company.email}.
          </p>
        </div>
      </Container>
    </section>
  );
}
