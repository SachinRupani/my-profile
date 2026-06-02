import AppCard from "@/components/atoms/card/AppCard";
import AppTag from "@/components/atoms/tag/AppTag";
import AppText from "@/components/atoms/text/AppText";
import { AppColorVariant } from "@/config/colors/AppColorResource.types";
import { cn } from "@/lib/utils";
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
        className={cn(
          "relative z-10 gap-3 rounded-lg bg-white/55 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/75 hover:shadow-[0_0_36px_rgba(56,189,248,0.14)] dark:bg-white/[0.035] dark:hover:bg-white/[0.06]",
          displayShadow ? "shadow-lg" : "shadow-none",
          borderVariant === "dashed" ? "border-dashed" : "",
        )}
      >
        {/* Title */}
        <AppText text={title} className="text-base font-bold text-foreground" />

        {/* Description */}
        <AppText
          text={description}
          className={`text-sm leading-6 ${descriptionTextColorClass ? descriptionTextColorClass : "text-text-2"}`}
        />

        {/* Extra Description Points */}
        {extraDescriptionPoints && (
          <div className="grid grid-cols-1 gap-2">
            {extraDescriptionPoints.map((point) => (
              <AppText
                key={point}
                text={point}
                className="text-xs font-medium uppercase tracking-[0.14em] text-text-3"
              />
            ))}
          </div>
        )}

        {/* Tags */}
        {tags && (
          <div className="mt-1 flex flex-row flex-wrap gap-2">
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
              <div
                key={`screenshot_${index}`}
                className="overflow-hidden rounded-lg border border-border/70 bg-background/40 p-1"
              >
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
    <Link
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {renderCardContent()}
    </Link>
  ) : (
    renderCardContent()
  );
};

export default BoxCard;
