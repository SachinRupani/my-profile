import AppCard from "@/components/atoms/card/AppCard";
import ImageSection from "../../molecules/image-section/ImageSection";
import InformationSection from "../../molecules/information-section/InformationSection";
import SocialInfoButtonsSection from "../../molecules/social-buttons-section/SocialInfoButtonsSection";

const ProfileCard = () => {
  return (
    <AppCard
      colorVariant="secondary"
      className="flex flex-col gap-6 py-8 px-12 justify-center"
    >
      {/* Image */}
      <ImageSection />

      {/* Info */}
      <InformationSection />

      {/* Social Info Buttons */}
      <SocialInfoButtonsSection />
    </AppCard>
  );
};

export default ProfileCard;
