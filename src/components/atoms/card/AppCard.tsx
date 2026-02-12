import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type AppCardProps = {
  colorVariant?: AppColorVariant;
  withBorder?: boolean;
  className?: string;
} & PropsWithChildren;

const AppCard = ({
  colorVariant = "primary",
  withBorder = false,
  className,
  children,
}: AppCardProps) => {
  const colorResource = useGetAppColorResource(colorVariant);
  return (
    <div
      className={`${twMerge("flex flex-col bg-card rounded-xl shadow-lg gap-2 px-3 py-3", withBorder ? "border-2" : null, colorResource.borderColor, colorResource.shadowColor, className ? className : null)}`}
    >
      {children}
    </div>
  );
};

export default AppCard;
