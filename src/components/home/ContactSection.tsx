import { ContactForm } from "@/src/components/forms/ContactForm";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { company } from "@/src/data/company";

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-beige py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us what your market needs."
            description="Share your destination, product type, and quantity in kilograms. We supply chilled beef and mutton to GCC markets."
          />
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                Head office
              </dt>
              <dd className="mt-1 leading-relaxed text-muted">
                {company.address}
                <br />
                {company.headquarters} {company.postalCode}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${company.exportEmail}`}
                  className="text-forest-deep hover:underline"
                >
                  {company.exportEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                Phone
              </dt>
              <dd className="mt-1 text-forest-deep">{company.phone}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-sm border border-line bg-paper p-6 shadow-[0_24px_60px_-42px_rgba(15,74,18,0.45)] sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
