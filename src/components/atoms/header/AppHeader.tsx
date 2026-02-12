import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import AppText from "../text/AppText";

export type AppHeaderProps = {
  title: string;
  colorVariant?: AppColorVariant;
};

const AppHeader = ({ title, colorVariant = "primary" }: AppHeaderProps) => {
  const colorResource = useGetAppColorResource(colorVariant);
  return (
    <div className="flex flex-col gap-2">
      <AppText
        text={title}
        className={`text-sm font-bold ${colorResource.textColor}`}
      />
      <div className={`w-full h-[0.25] bg-gray-dark`} />
    </div>
  );
};

export default AppHeader;
