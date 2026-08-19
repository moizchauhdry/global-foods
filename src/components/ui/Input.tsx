import { cn } from "@/src/lib/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  suffix?: string;
};

export function Input({ label, error, suffix, className, id, ...props }: Props) {
  const inputId = id ?? props.name;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <label className="block space-y-2 text-sm" htmlFor={inputId}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/75">
        {label}
      </span>
      <span className="relative block">
        <input
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={cn(
            "h-12 w-full rounded-sm border border-line bg-paper px-4 text-[15px] text-foreground outline-none transition-all duration-300 placeholder:text-muted/55 focus:border-forest focus:ring-2 focus:ring-forest/15 read-only:cursor-default read-only:bg-beige/60 read-only:text-muted",
            suffix && "pr-12",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/15",
            className,
          )}
          {...props}
        />
        {suffix ? (
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            {suffix}
          </span>
        ) : null}
      </span>
      {error ? (
        <span id={errorId} className="text-xs text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}
