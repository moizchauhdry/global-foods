import { BrandLogo } from "@/src/components/shared/BrandLogo";
import { Container } from "@/src/components/ui/Container";
import { company, navLinks } from "@/src/data/company";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <Container className="flex flex-col gap-10 py-14 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <div className="inline-flex rounded-sm bg-white px-3 py-2">
            <BrandLogo href="#home" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            {company.description}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-beige">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-beige">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>{company.address}</li>
              <li>{company.headquarters}</li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>{company.phone}</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>Pakistani origin · Halal processing · International export</p>
        </Container>
      </div>
    </footer>
  );
}
