"use client";

import {
  fadeScaleInAnimation,
  useFadeScaleIn,
} from "@/animation/useFadeScaleIn";
import BoxCard from "@/components/molecules/box-card/BoxCard";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";
import { employmentData } from "@/data/EmploymentDataModel";

const EmpHistoryCard = () => {
  const { ref, isVisible } = useFadeScaleIn<HTMLDivElement>();
  const { textColor } = useGetAppColorResource("secondary");
  return (
    <CardWithContent
      ref={ref}
      colorVariant="primary"
      className={`${fadeScaleInAnimation.base} ${isVisible ? fadeScaleInAnimation.visible : fadeScaleInAnimation.hidden} delay-500`}
    >
      <HeaderAndContent
        headerProps={{
          title: "Employment History",
          colorVariant: "primary",
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
              colorVariant="primary"
              borderVariant="dashed"
            />
          ))}
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default EmpHistoryCard;
