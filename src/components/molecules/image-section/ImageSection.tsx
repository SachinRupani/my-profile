import AppCard from "@/components/atoms/card/AppCard";
import AppImage from "@/components/atoms/image/AppImage";

const ImageSection = () => {
  return (
    <AppCard
      colorVariant="secondary"
      withBorder
      className={`rounded-4xl p-6 self-center`}
    >
      <AppImage
        width={180}
        height={180}
        src={"/profile_pic_v2.webp"}
        className="rounded-4xl"
      />
    </AppCard>
  );
};

export default ImageSection;
