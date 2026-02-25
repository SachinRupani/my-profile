"use client";

import {
  fadeScaleInAnimation,
  useFadeScaleIn,
} from "@/animation/useFadeScaleIn";
import BoxCard from "@/components/molecules/box-card/BoxCard";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import { employmentData } from "@/data/EmploymentDataModel";

type EmpHistoryCardProps = {
  colorVariant?: AppColorVariant;
};

const EmpHistoryCard = ({ colorVariant = "primary" }: EmpHistoryCardProps) => {
  const { ref, isVisible } = useFadeScaleIn<HTMLDivElement>();
  const { textColor } = useGetAppColorResource(colorVariant);
  return (
    <CardWithContent
      ref={ref}
      colorVariant={colorVariant}
      className={`${fadeScaleInAnimation.base} ${isVisible ? fadeScaleInAnimation.visible : fadeScaleInAnimation.hidden} delay-500`}
    >
      <HeaderAndContent
        headerProps={{
          title: "Employment History",
          colorVariant: colorVariant,
        }}
      >
        <div className="gap-6 grid grid-cols-1">
          {employmentData.map((employment) => (
            <BoxCard
              key={employment.company}
              title={employment.company}
              description={employment.role}
              descriptionTextColorClass={textColor}
              extraDescriptionPoints={[employment.duration]}
              tags={employment.tags}
              colorVariant={colorVariant}
              borderVariant="dashed"
            />
          ))}
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default EmpHistoryCard;
