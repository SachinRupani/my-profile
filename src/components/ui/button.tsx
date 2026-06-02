import { cn } from "@/lib/utils";
import * as React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
};

function Button({
  asChild = false,
  className,
  variant = "default",
  children,
  ...props
}: ButtonProps) {
  const buttonClassName = cn(
    "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
    variant === "default" &&
      "bg-primary text-primary-foreground shadow-[0_0_24px_rgba(56,189,248,0.25)] hover:bg-primary/90",
    variant === "outline" &&
      "border border-border bg-background/40 text-foreground hover:border-primary/60 hover:bg-primary/10",
    variant === "ghost" && "text-foreground hover:bg-accent hover:text-accent-foreground",
    className,
  );

  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, {
      className: cn(buttonClassName, children.props.className),
    });
  }

  return (
    <button
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
