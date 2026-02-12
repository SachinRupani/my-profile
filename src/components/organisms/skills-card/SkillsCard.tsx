import AppTag from "@/components/atoms/tag/AppTag";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";

const SkillsCard = () => {
  return (
    <CardWithContent colorVariant="secondary">
      {/* Core Skills */}
      <HeaderAndContent
        headerProps={{
          title: "Core Mobile Skills",
          colorVariant: "secondary",
        }}
      >
        <div className="flex flex-row flex-wrap gap-3">
          <AppTag title="React Native" colorVariant="secondary" />
          <AppTag title="TypeScript" colorVariant="secondary" />
          <AppTag title="JavaScript" colorVariant="secondary" />
          <AppTag title="Expo" colorVariant="secondary" />
          <AppTag title="EAS" colorVariant="secondary" />
          <AppTag title="Uniwind" colorVariant="secondary" />
          <AppTag title="Android" colorVariant="secondary" />
          <AppTag title="Kotlin" colorVariant="secondary" />
          <AppTag title="iOS Basics" colorVariant="secondary" />
        </div>
      </HeaderAndContent>

      {/* Integrations */}
      <HeaderAndContent
        headerProps={{
          title: "Integrations",
          colorVariant: "secondary",
        }}
      >
        <div className="flex flex-row flex-wrap gap-3">
          <AppTag title="Redux-Toolkit" colorVariant="secondary" />
          <AppTag title="REST APIs" colorVariant="secondary" />
          <AppTag title="Firebase Cloud Messaging" colorVariant="secondary" />
          <AppTag title="Supabase" colorVariant="secondary" />
          <AppTag title="Authentication" colorVariant="secondary" />
          <AppTag title="Tan Stack Query" colorVariant="secondary" />
          <AppTag title="Axios" colorVariant="secondary" />
          <AppTag title="Sentry" colorVariant="secondary" />
          <AppTag title="Analytics" colorVariant="secondary" />
        </div>
      </HeaderAndContent>

      {/* Testing */}
      <HeaderAndContent
        headerProps={{
          title: "Testing",
          colorVariant: "secondary",
        }}
      >
        <div className="flex flex-row flex-wrap gap-3">
          <AppTag title="Jest" colorVariant="secondary" />
          <AppTag
            title="React Native Testing Library"
            colorVariant="secondary"
          />
          <AppTag title="Detox" colorVariant="secondary" />
        </div>
      </HeaderAndContent>

      {/* Tools */}
      <HeaderAndContent
        headerProps={{
          title: "Tools",
          colorVariant: "secondary",
        }}
      >
        <div className="flex flex-row flex-wrap gap-3">
          <AppTag title="Git" colorVariant="secondary" />
          <AppTag title="GitHub" colorVariant="secondary" />
          <AppTag title="CI/CD basics" colorVariant="secondary" />
          <AppTag title="GitHub Actions" colorVariant="secondary" />
          <AppTag title="VS Code" colorVariant="secondary" />
          <AppTag title="Android Studio" colorVariant="secondary" />
          <AppTag title="Xcode" colorVariant="secondary" />
          <AppTag title="Antigravity" colorVariant="secondary" />
        </div>
      </HeaderAndContent>

      {/* Core / General */}
      <HeaderAndContent
        headerProps={{
          title: "Core",
          colorVariant: "secondary",
        }}
      >
        <div className="flex flex-row flex-wrap gap-3">
          <AppTag title="SDLC" colorVariant="secondary" />
          <AppTag title="Excellent Communication" colorVariant="secondary" />
          <AppTag
            title="Seek clarity for better outcome"
            colorVariant="secondary"
          />
          <AppTag title="Attention to detail" colorVariant="secondary" />
          <AppTag title="Quick Learner" colorVariant="secondary" />
          <AppTag title="Flexibility to adapt" colorVariant="secondary" />
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default SkillsCard;
