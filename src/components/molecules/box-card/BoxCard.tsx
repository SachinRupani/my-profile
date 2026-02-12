import AppCard from "@/components/atoms/card/AppCard";
import AppTag from "@/components/atoms/tag/AppTag";
import AppText from "@/components/atoms/text/AppText";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import Link from "next/link";

type BoxCarProps = {
  title: string;
  description: string;
  extraDescriptionPoints?: string[];
  colorVariant?: AppColorVariant;
  tags?: string[];
  borderVariant?: "dashed" | "solid";
  displayShadow?: boolean;
  link?: string;
};

const BoxCard = ({
  title,
  description,
  extraDescriptionPoints,
  colorVariant = "primary",
  tags,
  borderVariant = "dashed",
  displayShadow = false,
  link,
}: BoxCarProps) => {
  const renderCardContent = () => {
    return (
      <AppCard
        colorVariant={colorVariant}
        withBorder
        className={`border-${borderVariant} ${displayShadow ? "shadow-lg" : "shadow-none"}`}
      >
        {/* Title */}
        <AppText text={title} className="text-sm font-bold" />

        {/* Description */}
        <AppText text={description} className="text-xs text-text-2" />

        {/* Extra Description Points */}
        {extraDescriptionPoints && (
          <div className="grid grid-cols-1 gap-2 mt-1">
            {extraDescriptionPoints.map((point) => (
              <AppText
                key={point}
                text={point}
                className="text-xs text-text-3"
              />
            ))}
          </div>
        )}

        {/* Tags */}
        {tags && (
          <div className="flex flex-row flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <AppTag key={tag} title={tag} colorVariant={colorVariant} />
            ))}
          </div>
        )}
      </AppCard>
    );
  };

  return link ? (
    <Link href={link} rel="noopener noreferrer" target="_blank">
      {renderCardContent()}
    </Link>
  ) : (
    renderCardContent()
  );
};

export default BoxCard;
