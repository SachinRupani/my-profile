"use client";

import {
  fadeScaleInAnimation,
  useFadeScaleIn,
} from "@/animation/useFadeScaleIn";
import AppCard from "@/components/atoms/card/AppCard";
import ImageSection from "../../molecules/image-section/ImageSection";
import InformationSection from "../../molecules/information-section/InformationSection";
import SocialInfoButtonsSection from "../../molecules/social-buttons-section/SocialInfoButtonsSection";

const ProfileCard = () => {
  const { ref, isVisible } = useFadeScaleIn<HTMLDivElement>();

  return (
    <AppCard
      ref={ref}
      colorVariant="secondary"
      className={`flex flex-col gap-6 py-8 px-8 md:px-12 justify-center ${fadeScaleInAnimation.base} ${isVisible ? fadeScaleInAnimation.visible : fadeScaleInAnimation.hidden}`}
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
