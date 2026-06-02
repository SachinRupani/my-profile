import { cn } from "@/lib/utils";
import * as React from "react";

type BadgeProps = React.ComponentProps<"span"> & {
  variant?: "default" | "secondary";
};

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center justify-center rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        variant === "default" &&
          "border-primary/30 bg-primary/15 text-primary-foreground shadow-[0_0_24px_rgba(56,189,248,0.12)]",
        variant === "secondary" &&
          "border-secondary/30 bg-secondary/15 text-secondary-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
