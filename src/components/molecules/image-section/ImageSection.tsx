import AppCard from "@/components/atoms/card/AppCard";
import AppImage from "@/components/atoms/image/AppImage";

const ImageSection = () => {
  return (
    <AppCard
      colorVariant="secondary"
      withBorder
      className={`rounded-full p-8 self-center`}
    >
      <AppImage
        width={180}
        height={180}
        src={"/profile_picture_square.jpg"}
        className="rounded-full"
      />
    </AppCard>
  );
};

export default ImageSection;
