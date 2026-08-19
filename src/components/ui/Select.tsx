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

  return (
    <label className="block space-y-2 text-sm" htmlFor={inputId}>
      <span className="font-medium text-charcoal">{label}</span>
      <select
        id={inputId}
        className={cn(
          "h-12 w-full rounded-sm border border-line bg-paper px-4 text-foreground outline-none transition-colors focus:border-forest disabled:cursor-not-allowed disabled:bg-beige/60 disabled:text-muted",
          error && "border-red-500",
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
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
