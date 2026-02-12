import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import AppText from "../text/AppText";

type AppTagProps = {
  title: string;
  colorVariant?: AppColorVariant;
};

const AppTag = ({ title, colorVariant = "primary" }: AppTagProps) => {
  const colorResource = useGetAppColorResource(colorVariant);
  return (
    <div
      className={`flex flex-row rounded-2xl py-2 px-3 items-center justify-center ${colorResource.background}`}
    >
      <AppText
        text={title}
        className={`text-xs font-sans font-bold ${colorResource.foreground}`}
      />
    </div>
  );
};

export default AppTag;
