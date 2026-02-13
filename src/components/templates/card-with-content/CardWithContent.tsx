import AppCard from "@/components/atoms/card/AppCard";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";
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
      className={`gap-6 pb-6 ${className ? className : null}`}
    >
      {children}
    </AppCard>
  );
};

export default CardWithContent;
