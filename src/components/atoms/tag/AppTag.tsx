import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import AppText from "../text/AppText";

type AppTagProps = {
  title: string;
  colorVariant?: AppColorVariant;
  fontSize?: "default" | "tiny";
};

const AppTag = ({
  title,
  colorVariant = "primary",
  fontSize = "default",
}: AppTagProps) => {
  const colorResource = useGetAppColorResource(colorVariant);
  return (
    <div
      className={`flex flex-row rounded-2xl py-2 px-3 items-center justify-center ${colorResource.background}`}
    >
      <AppText
        text={title}
        className={`font-sans font-bold ${colorResource.foreground} ${fontSize === "tiny" ? "text-[0.625rem]" : "text-xs"}`}
      />
    </div>
  );
};

export default AppTag;
