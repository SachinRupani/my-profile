"use client";

import {
  fadeScaleInAnimation,
  useFadeScaleIn,
} from "@/animation/useFadeScaleIn";
import BoxCard from "@/components/molecules/box-card/BoxCard";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";

const EmpHistoryCard = () => {
  const { ref, isVisible } = useFadeScaleIn<HTMLDivElement>();
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
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
          <BoxCard
            title="Vayuz Technologies"
            description="Sep 2025 - Feb 2026 | Bengaluru (Remote) | (Code & Theory - Tonies Project)"
            tags={["React Native", "Expo", "Typescript", "Jest"]}
            colorVariant="primary"
            borderVariant="solid"
          />

          <BoxCard
            title="PWC"
            description="Jun 2025 - Aug 2025 | Bengaluru (Hybrid)"
            tags={["React.js", "Salesforce"]}
            colorVariant="primary"
            borderVariant="solid"
          />

          <BoxCard
            title="Lupin Digital Health"
            description="Mar 2023 - May 2025 | Bengaluru (Hybrid)"
            tags={["React Native", "Next.js", "TypeScript"]}
            colorVariant="primary"
            borderVariant="solid"
          />

          <BoxCard
            title="EY GDS"
            description="Dec 2021 - Feb 2023 | Noida (Remote)"
            tags={["Android", "Kotlin", "Clean Architecture", "MVVM"]}
            colorVariant="primary"
            borderVariant="solid"
          />

          <BoxCard
            title="Aubergine Solutions Private Limited"
            description="Feb 2021 - Nov 2021 | Ahmedabad (Remote)"
            tags={["Android", "Kotlin", "MVVM"]}
            colorVariant="primary"
            borderVariant="solid"
          />

          <BoxCard
            title="WsCube Tech and Geekologix"
            description="May 2015 - Jan 2021 | Jodhpur (Onsite)"
            tags={["Android", "Kotlin", "JAVA", "MVVM"]}
            colorVariant="primary"
            borderVariant="solid"
          />
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default EmpHistoryCard;
