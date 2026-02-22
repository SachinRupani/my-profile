import AppImage from "@/components/atoms/image/AppImage";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import { twMerge } from "tailwind-merge";

type ScreenshotImageProps = {
  imageUrl: string;
  colorVariant?: AppColorVariant;
  width?: number;
  height?: number;
  altText?: string;
  extraClassName?: string;
};

const ScreenshotImage = ({
  imageUrl,
  altText,
  width,
  height,
  extraClassName,
  colorVariant = "primary",
}: ScreenshotImageProps) => {
  const { shadowColor } = useGetAppColorResource(colorVariant);
  return (
    <AppImage
      src={imageUrl}
      altText={altText || "Screenshot"}
      width={width}
      height={height}
      className={`${twMerge("rounded-xl shadow-sm", shadowColor ? `${shadowColor}` : "", extraClassName ? extraClassName : null)}`}
    />
  );
};

export default ScreenshotImage;
