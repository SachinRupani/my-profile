import AppCard from "@/components/atoms/card/AppCard";
import AppTag from "@/components/atoms/tag/AppTag";
import AppText from "@/components/atoms/text/AppText";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import Link from "next/link";
import ScreenshotImage from "../screenshot-image/ScreenshotImage";

type BoxCarProps = {
  title: string;
  description: string;
  extraDescriptionPoints?: string[];
  colorVariant?: AppColorVariant;
  descriptionTextColorClass?: string;
  tags?: string[];
  borderVariant?: "dashed" | "solid";
  displayShadow?: boolean;
  link?: string;
  screenshots?: string[];
};

const BoxCard = ({
  title,
  description,
  extraDescriptionPoints,
  colorVariant = "primary",
  tags,
  borderVariant = "dashed",
  displayShadow = false,
  descriptionTextColorClass = undefined,
  link,
  screenshots = [],
}: BoxCarProps) => {
  const renderCardContent = () => {
    return (
      <AppCard
        colorVariant={colorVariant}
        withBorder
        className={`${displayShadow ? "shadow-lg" : "shadow-none"} ${borderVariant === "dashed" ? "border-dashed" : ""}`}
      >
        {/* Title */}
        <AppText text={title} className="text-sm font-bold" />

        {/* Description */}
        <AppText
          text={description}
          className={`text-xs ${descriptionTextColorClass ? descriptionTextColorClass : "text-text-2"}`}
        />

        {/* Extra Description Points */}
        {extraDescriptionPoints && (
          <div className="grid grid-cols-1 gap-2">
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
            {tags.map((tag, index) => (
              <AppTag
                key={`${tag}_${index}`}
                title={tag}
                colorVariant={colorVariant}
                fontSize="tiny"
              />
            ))}
          </div>
        )}

        {/* Screenshots */}
        {screenshots.length > 0 && (
          <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-3">
            {screenshots.map((screenshot, index) => (
              <div key={`screenshot_${index}`} className="p-0 rounded-lg">
                <ScreenshotImage
                  imageUrl={screenshot}
                  altText={`Screenshot_${index + 1}`}
                  colorVariant={colorVariant}
                  extraClassName="rounded-lg"
                />
              </div>
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
