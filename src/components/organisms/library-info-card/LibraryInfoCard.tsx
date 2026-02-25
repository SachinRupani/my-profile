"use client";

import {
  fadeScaleInAnimation,
  useFadeScaleIn,
} from "@/animation/useFadeScaleIn";
import BoxCard from "@/components/molecules/box-card/BoxCard";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";

type LibraryInfoCardProps = {
  colorVariant?: AppColorVariant;
};

const LibraryInfoCard = ({
  colorVariant = "primary",
}: LibraryInfoCardProps) => {
  const { ref, isVisible } = useFadeScaleIn<HTMLDivElement>();
  return (
    <CardWithContent
      ref={ref}
      colorVariant={colorVariant}
      className={`${fadeScaleInAnimation.base} ${isVisible ? fadeScaleInAnimation.visible : fadeScaleInAnimation.hidden} delay-500`}
    >
      <HeaderAndContent
        headerProps={{
          title: "NPM Package",
          colorVariant: colorVariant,
        }}
      >
        <div className="gap-4 grid grid-cols-1">
          {/* Article 1 */}
          <BoxCard
            title="Basic Story View"
            description="A basic story view npm package/library built using React Native with Typescript."
            link="https://www.npmjs.com/package/react-native-basic-story-view"
            colorVariant={colorVariant}
            tags={["React Native"]}
            borderVariant="dashed"
          />
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default LibraryInfoCard;
