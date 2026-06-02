import { cn } from "@/lib/utils";
import * as React from "react";

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("h-px w-full shrink-0 bg-border", className)}
      role="separator"
      {...props}
    />
  );
}

export { Separator };
