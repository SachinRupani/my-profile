"use client";

import {
  fadeScaleInAnimation,
  useFadeScaleIn,
} from "@/animation/useFadeScaleIn";
import BoxCard from "@/components/molecules/box-card/BoxCard";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";

const LibraryInfoCard = () => {
  const { ref, isVisible } = useFadeScaleIn<HTMLDivElement>();
  return (
    <CardWithContent
      ref={ref}
      colorVariant="secondary"
      className={`${fadeScaleInAnimation.base} ${isVisible ? fadeScaleInAnimation.visible : fadeScaleInAnimation.hidden} delay-500`}
    >
      <HeaderAndContent
        headerProps={{
          title: "NPM Package",
          colorVariant: "secondary",
        }}
      >
        <div className="gap-4 grid grid-cols-1">
          {/* Article 1 */}
          <BoxCard
            title="Basic Story View"
            description="A basic story view npm package/library built using React Native with Typescript."
            link="https://www.npmjs.com/package/react-native-basic-story-view"
            colorVariant="secondary"
            tags={["React Native"]}
            borderVariant="solid"
          />
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default LibraryInfoCard;
