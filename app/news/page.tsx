import { NewsCard } from "@/src/components/news/NewsCard";
import { PageHero } from "@/src/components/shared/PageHero";
import { Container } from "@/src/components/ui/Container";
import { images } from "@/src/data/images";
import { newsArticles } from "@/src/data/news";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "News & Insights",
  description:
    "Company news, industry insights, export updates, and trade event announcements from Umme Yusra Global Foods.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Insights"
        title="Updates for partners and buyers."
        description="Editorial placeholders covering industry insights, export themes, and company announcements."
        image={images.team}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newsArticles.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
