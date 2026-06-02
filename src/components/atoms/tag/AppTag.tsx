import { Badge } from "@/components/ui/badge";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import { cn } from "@/lib/utils";

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
    <Badge
      variant={colorVariant === "primary" ? "default" : "secondary"}
      className={cn(
        "rounded-md px-3 py-1.5 font-sans font-semibold tracking-normal",
        colorResource.background,
        colorResource.foreground,
        colorResource.borderColor,
        fontSize === "tiny" ? "text-[0.675rem]" : "text-xs",
      )}
    >
      {title}
    </Badge>
  );
};

export default AppTag;
