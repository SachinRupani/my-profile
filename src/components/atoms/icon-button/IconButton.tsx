import Link from "next/link";
import AppCard from "../card/AppCard";
import AppImage from "../image/AppImage";
import AppText from "../text/AppText";

type IconButtonProps = {
  title: string;
  iconSrc: string;
  href: string;
};

const IconButton = ({ title, iconSrc, href }: IconButtonProps) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <AppCard
        colorVariant="secondary"
        className="flex-row gap-2 rounded-lg items-center justify-center border shadow-sm"
        withBorder
      >
        <AppImage src={iconSrc} width={20} height={20} />
        <AppText text={title} className={`font-bold text-xs text-text-2`} />
      </AppCard>
    </Link>
  );
};

export default IconButton;
