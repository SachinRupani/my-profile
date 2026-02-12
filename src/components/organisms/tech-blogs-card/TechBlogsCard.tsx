import BoxCard from "@/components/molecules/box-card/BoxCard";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";

const TechBlogsCard = () => {
  return (
    <CardWithContent colorVariant="secondary">
      <HeaderAndContent
        headerProps={{
          title: "Tech Blogs",
          colorVariant: "secondary",
        }}
      >
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
          {/* Article 1 */}
          <BoxCard
            title="Scalable React Native & Expo Folder structure"
            description="This post is meant to share insights with the dev community, especially folks building apps that go beyond MVPs."
            link="https://dev.to/sachinrupani/designing-a-scalable-react-native-expo-router-folder-structure-3dnj"
            colorVariant="secondary"
            tags={["React Native", "Expo"]}
          />

          {/* Article 2 */}
          <BoxCard
            title="Remove Transition of an item"
            description="Simple remove transition animation of an item in react native"
            link="https://dev.to/sachinrupani/simple-remove-transition-animation-in-react-native-29l3"
            colorVariant="secondary"
            tags={["React Native"]}
          />

          {/* Article 3 */}
          <BoxCard
            title="Simple and Clean State Management with Jetpack Compose"
            description="Simple and clean state management with jetpack compose (MVI pattern)"
            link="https://medium.com/@sachin.rupani1992/simple-and-clean-state-management-with-jetpack-compose-387d6b0e6258"
            colorVariant="secondary"
            tags={["Jetpack Compose"]}
          />
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default TechBlogsCard;
