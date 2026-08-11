import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/src/data/news";

type Props = {
  article: NewsArticle;
};

export function NewsCard({ article }: Props) {
  return (
    <article className="group border border-line bg-paper">
      <Link href={`/news/${article.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-sage">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <h3 className="mt-3 font-display text-2xl text-forest-deep">
            {article.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{article.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
