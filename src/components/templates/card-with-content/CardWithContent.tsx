import AppCard from "@/components/atoms/card/AppCard";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { cn } from "@/lib/utils";
import { PropsWithChildren, Ref } from "react";

type CardWithContentProps = {
  colorVariant?: AppColorVariant;
  ref?: Ref<HTMLDivElement>;
  className?: string;
} & PropsWithChildren;

const CardWithContent = ({
  colorVariant = "primary",
  ref,
  className,
  children,
}: CardWithContentProps) => {
  return (
    <AppCard
      ref={ref}
      colorVariant={colorVariant}
      className={cn("gap-6 p-5 sm:p-6", className)}
    >
      {children}
    </AppCard>
  );
};

export default CardWithContent;
