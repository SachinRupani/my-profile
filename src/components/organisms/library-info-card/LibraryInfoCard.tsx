import BoxCard from "@/components/molecules/box-card/BoxCard";
import CardWithContent from "@/components/templates/card-with-content/CardWithContent";
import HeaderAndContent from "@/components/templates/header-and-content/HeaderAndContent";

const LibraryInfoCard = () => {
  return (
    <CardWithContent colorVariant="secondary">
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
          />
        </div>
      </HeaderAndContent>
    </CardWithContent>
  );
};

export default LibraryInfoCard;
