"use client";

import {
  fadeScaleInAnimation,
  useFadeScaleIn,
} from "@/animation/useFadeScaleIn";
import AppTag from "@/components/atoms/tag/AppTag";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";

type SkillsCardProps = {
  colorVariant?: AppColorVariant;
};

const SkillsCard = ({ colorVariant = "primary" }: SkillsCardProps) => {
  const { ref, isVisible } = useFadeScaleIn<HTMLDivElement>();

  return (
    <CardWithContent
      ref={ref}
      colorVariant={colorVariant}
      className={`${fadeScaleInAnimation.base} ${isVisible ? fadeScaleInAnimation.visible : fadeScaleInAnimation.hidden} delay-300`}
    >
      {/* Core Skills */}
      <HeaderAndContent
        headerProps={{
          title: "Core Mobile Skills",
          colorVariant: colorVariant,
        }}
      >
        <div className="flex flex-row flex-wrap gap-3">
          <AppTag title="React Native" colorVariant={colorVariant} />
          <AppTag title="TypeScript" colorVariant={colorVariant} />
          <AppTag title="JavaScript" colorVariant={colorVariant} />
          <AppTag title="Expo" colorVariant={colorVariant} />
          <AppTag title="EAS" colorVariant={colorVariant} />
          <AppTag title="Uniwind" colorVariant={colorVariant} />
          <AppTag title="Android" colorVariant={colorVariant} />
          <AppTag title="Kotlin" colorVariant={colorVariant} />
          <AppTag title="iOS Basics" colorVariant={colorVariant} />
        </div>
      </HeaderAndContent>

      {/* Integrations */}
      <HeaderAndContent
        headerProps={{
          title: "Integrations",
          colorVariant: colorVariant,
        }}
      >
        <div className="flex flex-row flex-wrap gap-3">
          <AppTag
            title="Redux-Toolkit"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag
            title="REST APIs"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag
            title="Firebase Cloud Messaging"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag
            title="Supabase"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag
            title="Authentication"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag
            title="Tan Stack Query"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag title="Axios" colorVariant={colorVariant} fontSize="tiny" />
          <AppTag title="Sentry" colorVariant={colorVariant} fontSize="tiny" />
          <AppTag
            title="Analytics"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
        </div>
      </HeaderAndContent>

      {/* Testing */}
      <HeaderAndContent
        headerProps={{
          title: "Testing",
          colorVariant: colorVariant,
        }}
      >
        <div className="flex flex-row flex-wrap gap-3">
          <AppTag title="Jest" colorVariant={colorVariant} fontSize="tiny" />
          <AppTag
            title="React Native Testing Library"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag title="Detox" colorVariant={colorVariant} fontSize="tiny" />
        </div>
      </HeaderAndContent>

      {/* Tools */}
      <HeaderAndContent
        headerProps={{
          title: "Tools",
          colorVariant: colorVariant,
        }}
      >
        <div className="flex flex-row flex-wrap gap-3">
          <AppTag title="Git" colorVariant={colorVariant} fontSize="tiny" />
          <AppTag title="GitHub" colorVariant={colorVariant} fontSize="tiny" />
          <AppTag
            title="CI/CD basics"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag
            title="GitHub Actions"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag title="VS Code" colorVariant={colorVariant} fontSize="tiny" />
          <AppTag
            title="Android Studio"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag title="Xcode" colorVariant={colorVariant} fontSize="tiny" />
          <AppTag
            title="Antigravity"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
        </div>
      </HeaderAndContent>

      {/* Core / General */}
      <HeaderAndContent
        headerProps={{
          title: "Core",
          colorVariant: colorVariant,
        }}
      >
        <div className="flex flex-row flex-wrap gap-3">
          <AppTag title="SDLC" colorVariant={colorVariant} fontSize="tiny" />
          <AppTag
            title="Excellent Communication"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag
            title="Seek clarity for better outcome"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag
            title="Attention to detail"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag
            title="Quick Learner"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
          <AppTag
            title="Flexibility to adapt"
            colorVariant={colorVariant}
            fontSize="tiny"
          />
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default SkillsCard;
