import Link from "next/link";
import { cn } from "@/src/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "accent" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-deep hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-18px_rgba(15,74,18,0.65)]",
  secondary:
    "border border-white/70 bg-transparent text-white hover:bg-white/10 hover:-translate-y-0.5",
  outline:
    "border border-forest/25 bg-transparent text-forest hover:border-forest/50 hover:bg-beige/70 hover:-translate-y-0.5",
  accent:
    "bg-gold text-charcoal hover:bg-[#e8a033] hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-18px_rgba(245,176,65,0.7)]",
  ghost: "bg-transparent text-forest hover:bg-beige",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-sm md:text-base",
};

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  onClick,
  disabled,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-0",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
