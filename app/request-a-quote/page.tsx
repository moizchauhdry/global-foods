import { QuoteForm } from "@/src/components/forms/QuoteForm";
import { PageHero } from "@/src/components/shared/PageHero";
import { Container } from "@/src/components/ui/Container";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Submit a B2B export quotation request for chilled or frozen halal meat products from Pakistan.",
  path: "/request-a-quote",
});

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Built for international buyers."
        description="Share product, temperature, quantity, packaging, and destination requirements for a serious export quotation workflow."
        image={images.coldStorage}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <div className="border border-line bg-paper p-6 sm:p-10">
            <h2 className="font-display text-3xl text-forest-deep">Quotation Form</h2>
            <p className="mt-3 text-sm text-muted">
              This form is designed for procurement and import teams. Connect it to your
              export CRM or email workflow before production use.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
