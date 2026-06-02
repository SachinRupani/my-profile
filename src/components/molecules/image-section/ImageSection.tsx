import AppCard from "@/components/atoms/card/AppCard";
import AppImage from "@/components/atoms/image/AppImage";

const ImageSection = () => {
  return (
    <div className="relative z-10 self-center">
      <div className="absolute -inset-5 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-4 top-7 h-10 w-10 rounded-full border border-primary/30 bg-primary/20 shadow-[0_0_28px_rgba(56,189,248,0.24)]" />
      <AppCard
        colorVariant="secondary"
        withBorder
        className="relative self-center rounded-lg border-primary/30 bg-gradient-to-br from-white/20 via-primary/10 to-white/5 p-2 shadow-[0_0_70px_rgba(56,189,248,0.2)]"
      >
        <AppImage
          width={216}
          height={216}
          src={"/profile_pic_v2.webp"}
          className="aspect-square h-48 w-48 rounded-lg object-cover ring-1 ring-white/15 sm:h-52 sm:w-52 lg:h-36 lg:w-36 xl:h-48 xl:w-48"
        />
      </AppCard>
    </div>
  );
};

export default ImageSection;
