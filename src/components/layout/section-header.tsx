import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <p
          className="
            mb-4
            text-sm
            font-medium
            uppercase
            tracking-[0.2em]
            text-primary
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          text-4xl
          font-bold
          tracking-tight
          lg:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-6
            text-lg
            text-muted-foreground
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
