import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/cn";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  placeholder?: string;
  options: Array<{ label: string; value: string }>;
};

export function Select({
  label,
  error,
  placeholder,
  options,
  className,
  id,
  ...props
}: Props) {
  const inputId = id ?? props.name;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <label className="block space-y-2 text-sm" htmlFor={inputId}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/75">
        {label}
      </span>
      <span className="relative block">
        <select
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={cn(
            "h-12 w-full appearance-none rounded-sm border border-line bg-paper px-4 pr-11 text-[15px] text-foreground outline-none transition-all duration-300 focus:border-forest focus:ring-2 focus:ring-forest/15 disabled:cursor-not-allowed disabled:bg-beige/60 disabled:text-muted",
            !props.value && "text-muted/70",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/15",
            className,
          )}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
      </span>
      {error ? (
        <span id={errorId} className="text-xs text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}
