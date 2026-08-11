import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy placeholder for ${company.name}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl text-forest-deep">Privacy Policy</h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            This is a placeholder privacy policy for {company.name}. Replace it with
            counsel-approved legal language before launch.
          </p>
          <p>
            Information collected through contact and quotation forms should be used only
            for responding to business inquiries and improving commercial communications.
          </p>
          <p>
            Contact: {company.email}. Address: {company.address}.
          </p>
        </div>
      </Container>
    </section>
  );
}
