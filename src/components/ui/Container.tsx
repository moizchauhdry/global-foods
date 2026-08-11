import { cn } from "@/src/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
};

export function Container({ children, className, as: Tag = "div" }: Props) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
