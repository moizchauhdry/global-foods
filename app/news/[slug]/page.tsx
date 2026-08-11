import Image from "next/image";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/src/components/seo/BreadcrumbJsonLd";
import { JsonLd } from "@/src/components/seo/JsonLd";
import { Container } from "@/src/components/ui/Container";
import { company } from "@/src/data/company";
import { getArticleBySlug, newsArticles } from "@/src/data/news";
import { buildMetadata } from "@/src/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
  });
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: company.name,
    },
    image: article.image.src,
  };

  return (
    <>
      <JsonLd data={schema} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "News", path: "/news" },
          { name: article.title, path: `/news/${article.slug}` },
        ]}
      />
      <article className="pt-28 pb-16 sm:pt-32 sm:pb-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            {article.category}
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-tight text-forest-deep sm:text-5xl">
            {article.title}
          </h1>
          <time
            dateTime={article.date}
            className="mt-4 block text-sm text-muted"
          >
            {new Date(article.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <div className="relative mt-8 aspect-[16/10] overflow-hidden">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            {article.content.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>
    </>
  );
}
