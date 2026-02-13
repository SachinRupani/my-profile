import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import { PropsWithChildren, Ref } from "react";
import { twMerge } from "tailwind-merge";

type AppCardProps = {
  ref?: Ref<HTMLDivElement>;
  colorVariant?: AppColorVariant;
  withBorder?: boolean;
  className?: string;
} & PropsWithChildren;

const AppCard = ({
  colorVariant = "primary",
  withBorder = false,
  ref,
  className,

  children,
}: AppCardProps) => {
  const colorResource = useGetAppColorResource(colorVariant);
  return (
    <div
      ref={ref}
      className={`${twMerge("flex flex-col bg-card rounded-xl shadow-lg gap-2 px-3 py-3", withBorder ? "border-2" : null, colorResource.borderColor, colorResource.shadowColor, className ? className : null)}`}
    >
      {children}
    </div>
  );
};

export default AppCard;
