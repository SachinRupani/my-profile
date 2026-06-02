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
      className={`isolate flex min-h-128 flex-col justify-center gap-8 px-6 pb-5 pt-6 sm:px-8 sm:pb-6 sm:pt-8 md:px-10 md:pb-8 md:pt-10 lg:sticky lg:top-5 lg:min-h-0 lg:max-h-[calc(100svh-2.5rem)] lg:justify-start lg:gap-5 lg:overflow-y-auto lg:px-6 lg:pb-5 lg:pt-6 xl:gap-7 xl:px-8 xl:pb-6 xl:pt-8 ${fadeScaleInAnimation.base} ${isVisible ? fadeScaleInAnimation.visible : fadeScaleInAnimation.hidden}`}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />

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
