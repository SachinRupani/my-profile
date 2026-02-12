import AppHeader, { AppHeaderProps } from "@/components/atoms/header/AppHeader";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type HeaderAndContentProps = {
  headerProps: AppHeaderProps;
  className?: string;
} & PropsWithChildren;

const HeaderAndContent = ({
  headerProps,
  children,
  className,
}: HeaderAndContentProps) => {
  return (
    <div className={twMerge(`flex flex-col gap-4`, className)}>
      <AppHeader {...headerProps} />
      {children}
    </div>
  );
};

export default HeaderAndContent;
