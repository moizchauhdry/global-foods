import { ContactForm } from "@/src/components/forms/ContactForm";
import { PageHero } from "@/src/components/shared/PageHero";
import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";
import { images } from "@/src/data/images";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Umme Yusra Global Foods for export inquiries, sales conversations, and partnership opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with our commercial team."
        description="Use the form for export or sales inquiries. Contact details below are placeholders until verified information is provided."
        image={images.port}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl text-forest-deep">Office</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{company.address}</p>
            </div>
            <div className="space-y-2 text-sm text-muted">
              <p>
                Phone:{" "}
                <a className="text-forest hover:underline" href={`tel:${company.phone}`}>
                  {company.phone}
                </a>
              </p>
              <p>
                General:{" "}
                <a className="text-forest hover:underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </p>
              <p>
                Export:{" "}
                <a className="text-forest hover:underline" href={`mailto:${company.exportEmail}`}>
                  {company.exportEmail}
                </a>
              </p>
              <p>
                Sales:{" "}
                <a className="text-forest hover:underline" href={`mailto:${company.salesEmail}`}>
                  {company.salesEmail}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href={company.social.linkedin} className="text-forest hover:underline">
                LinkedIn
              </a>
              <a href={company.social.facebook} className="text-forest hover:underline">
                Facebook
              </a>
              <a href={company.social.instagram} className="text-forest hover:underline">
                Instagram
              </a>
              <a href={company.social.youtube} className="text-forest hover:underline">
                YouTube
              </a>
            </div>
            <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-line bg-beige/50 text-sm text-muted">
              Google Maps embed placeholder
            </div>
          </div>
          <div className="border border-line bg-paper p-6 sm:p-8">
            <h2 className="font-display text-3xl text-forest-deep">Send Inquiry</h2>
            <p className="mt-2 text-sm text-muted">
              All fields are validated client-side and ready for backend/CRM integration.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
