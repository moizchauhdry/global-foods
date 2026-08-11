import { cn } from "@/src/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "light" ? "text-sage" : "text-beige",
          )}
        >
          <span
            className={cn(
              "h-px w-8",
              tone === "light" ? "bg-gold" : "bg-gold/80",
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-forest-deep" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-muted" : "text-white/75",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
