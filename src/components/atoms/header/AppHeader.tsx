import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import AppText from "../text/AppText";
import { Separator } from "@/components/ui/separator";

export type AppHeaderProps = {
  title: string;
  colorVariant?: AppColorVariant;
};

const AppHeader = ({ title, colorVariant = "primary" }: AppHeaderProps) => {
  const colorResource = useGetAppColorResource(colorVariant);
  return (
    <div className="relative z-10 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span
          className={`h-2 w-2 rounded-full shadow-[0_0_18px_currentColor] ${colorResource.textColor}`}
        />
        <AppText
          text={title}
          className={`text-sm font-bold uppercase tracking-[0.18em] ${colorResource.textColor}`}
        />
      </div>
      <Separator className="bg-gradient-to-r from-border via-primary/40 to-transparent" />
    </div>
  );
};

export default AppHeader;
