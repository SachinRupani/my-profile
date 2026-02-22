import Image from "next/image";

type AppImageProps = {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  altText?: string;
};

function AppImage({
  src,
  width = 256,
  height = 256,
  className,
  altText = "Picture here",
}: AppImageProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={altText}
      className={className}
    />
  );
}

export default AppImage;
