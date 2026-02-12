import BoxCard from "@/components/molecules/box-card/BoxCard";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";

const ProjectsCard = () => {
  return (
    <CardWithContent colorVariant="primary">
      <HeaderAndContent
        headerProps={{
          title: "Projects",
          colorVariant: "primary",
        }}
      >
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
          {/* Project 1 */}
          <BoxCard
            title="VitaLyfe"
            description="App focussed on improvement of the heart age (qrisk) by suggesting workouts, diet plan and tracking steps (integration of health connect and apple health)."
            link="https://play.google.com/store/apps/details?id=com.lyfewellness"
            colorVariant="primary"
            tags={["React Native", "Lupin Digital Health"]}
          />

          {/* Project 2 */}
          <BoxCard
            title="Expo React Native Boilerplate"
            description="Boilerplate for Expo React Native app with best practices, EAS related configurations, unit testing with jest and react native testing library, expo-router and tan-stack query"
            link="https://github.com/SachinRupani/expo-react-native-app"
            colorVariant="primary"
            tags={["React Native", "Expo", "Open Source"]}
          />

          {/* Project 3 */}
          <BoxCard
            title="Admin Dashboard"
            description="An admin portal containing login, patient listing with pagination and other admin users, plans, coupons CRUD operations"
            link="https://newadmin.lyfeplus.in/"
            colorVariant="primary"
            tags={["Next.js", "Lupin Digital Health"]}
          />

          {/* Project 4 */}
          <BoxCard
            title="Quick PDF Generator"
            description="A simple quick pdf web app made using next.js, hero ui and typescript"
            link="https://quick-pdf-generate.vercel.app/"
            colorVariant="primary"
            tags={["Next.js", "Typescript", "Open Source"]}
          />

          {/* Project 5 */}
          <BoxCard
            title="Nifty Trader"
            description="App which shares a lot of stocks related informatin and has the necessary charts as well."
            link="https://play.google.com/store/apps/details?id=in.niftytrader"
            colorVariant="primary"
            tags={["Android", "Kotlin"]}
          />
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default ProjectsCard;
