import { cn } from "@/lib/cn";

interface PlaceholderProps {
  label: string;
  className?: string;
}

export function Placeholder({ label, className }: PlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-brown-mid/20 font-mono text-sm text-brown-mid",
        className
      )}
    >
      [{label}]
    </div>
  );
}
