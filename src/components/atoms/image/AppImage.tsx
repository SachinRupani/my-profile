import Image from "next/image";

type AppImageProps = {
  src: string;
  width?: number;
  height?: number;
  className?: string;
};

function AppImage({
  src,
  width = 256,
  height = 256,
  className,
}: AppImageProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt="Picture of the author"
      className={className}
    />
  );
}

export default AppImage;
