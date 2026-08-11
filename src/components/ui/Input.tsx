import { cn } from "@/src/lib/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: Props) {
  const inputId = id ?? props.name;

  return (
    <label className="block space-y-2 text-sm" htmlFor={inputId}>
      <span className="font-medium text-charcoal">{label}</span>
      <input
        id={inputId}
        className={cn(
          "h-12 w-full rounded-sm border border-line bg-paper px-4 text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-forest",
          error && "border-red-500",
          className,
        )}
        {...props}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
