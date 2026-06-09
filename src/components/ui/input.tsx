import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-xl border border-border bg-background px-4 text-sm",
          "placeholder:text-muted-foreground",
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring-primary/20",
          "focus:border-primary",
          "transition-all",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
