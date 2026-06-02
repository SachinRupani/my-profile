import { Card } from "@/components/ui/card";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import { cn } from "@/lib/utils";
import { PropsWithChildren, Ref } from "react";

type AppCardProps = {
  ref?: Ref<HTMLDivElement>;
  colorVariant?: AppColorVariant;
  withBorder?: boolean;
  className?: string;
  key?: string;
} & PropsWithChildren;

const AppCard = ({
  colorVariant = "primary",
  withBorder = false,
  ref,
  className,
  key,
  children,
}: AppCardProps) => {
  const colorResource = useGetAppColorResource(colorVariant);
  return (
    <Card
      key={key}
      ref={ref}
      className={cn(
        "group/card relative flex flex-col gap-3 overflow-hidden rounded-lg bg-card/80 px-4 py-4 shadow-xl shadow-black/5 backdrop-blur-xl",
        "dark:bg-card/70 dark:shadow-black/30",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-primary/5 before:opacity-80",
        withBorder ? "border" : "border border-border/60",
        withBorder ? colorResource.borderColor : "",
        colorResource.shadowColor,
        className,
      )}
    >
      {children}
    </Card>
  );
};

export default AppCard;
