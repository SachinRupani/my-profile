import AppCard from "@/components/atoms/card/AppCard";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { PropsWithChildren } from "react";

type CardWithContentProps = {
  colorVariant?: AppColorVariant;
} & PropsWithChildren;

const CardWithContent = ({
  colorVariant = "primary",
  children,
}: CardWithContentProps) => {
  return (
    <AppCard colorVariant={colorVariant} className="gap-6 pb-6">
      {children}
    </AppCard>
  );
};

export default CardWithContent;
