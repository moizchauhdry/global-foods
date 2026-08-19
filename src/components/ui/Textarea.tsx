import { cn } from "@/src/lib/cn";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({ label, error, className, id, ...props }: Props) {
  const inputId = id ?? props.name;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <label className="block space-y-2 text-sm" htmlFor={inputId}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/75">
        {label}
      </span>
      <textarea
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn(
          "min-h-32 w-full resize-y rounded-sm border border-line bg-paper px-4 py-3 text-[15px] text-foreground outline-none transition-all duration-300 placeholder:text-muted/55 focus:border-forest focus:ring-2 focus:ring-forest/15",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/15",
          className,
        )}
        {...props}
      />
      {error ? (
        <span id={errorId} className="text-xs text-red-600">
          {error}
        </span>
      ) : null}
    </label>
  );
}
