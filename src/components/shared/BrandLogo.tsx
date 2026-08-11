import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/lib/cn";

type Props = {
  className?: string;
  priority?: boolean;
  href?: string;
  onClick?: () => void;
  /** Light backgrounds show the full-color logo; dark areas use a compact mark + wordmark fallback via invert-safe treatment */
  variant?: "full" | "compact";
};

export function BrandLogo({
  className,
  priority = false,
  href = "/",
  onClick,
  variant = "full",
}: Props) {
  const logo = (
    <Image
      src="/images/logo.png"
      alt="Umme Yusra Global Foods (Pvt) Limited"
      width={variant === "compact" ? 160 : 220}
      height={variant === "compact" ? 56 : 78}
      priority={priority}
      className={cn(
        "h-auto w-auto object-contain",
        variant === "compact" ? "h-10 sm:h-11" : "h-11 sm:h-12 md:h-14",
        className,
      )}
    />
  );

  if (!href) return logo;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-flex shrink-0 items-center"
      aria-label="Umme Yusra Global Foods home"
    >
      {logo}
    </Link>
  );
}
