"use client";

import {
  fadeScaleInAnimation,
  useFadeScaleIn,
} from "@/animation/useFadeScaleIn";
import BoxCard from "@/components/molecules/box-card/BoxCard";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";
import { projectsData } from "@/data/ProjectDataModel";

const ProjectsCard = () => {
  const { ref, isVisible } = useFadeScaleIn<HTMLDivElement>();
  return (
    <CardWithContent
      ref={ref}
      colorVariant="primary"
      className={`${fadeScaleInAnimation.base} ${isVisible ? fadeScaleInAnimation.visible : fadeScaleInAnimation.hidden} delay-300`}
    >
      <HeaderAndContent
        headerProps={{
          title: "Projects",
          colorVariant: "primary",
        }}
      >
        <div className="gap-4 grid grid-cols-1">
          {projectsData.map((project) => (
            <BoxCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              colorVariant="primary"
              tags={project.tags}
              screenshots={project.screenshots}
            />
          ))}
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default ProjectsCard;
