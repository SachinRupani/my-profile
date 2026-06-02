import { Button } from "@/components/ui/button";
import Link from "next/link";
import AppImage from "../image/AppImage";
import AppText from "../text/AppText";

type IconButtonProps = {
  title: string;
  iconSrc: string;
  href: string;
  variant?: "primary" | "outline";
};

const IconButton = ({
  title,
  iconSrc,
  href,
  variant = "outline",
}: IconButtonProps) => {
  return (
    <Button
      asChild
      variant={variant === "primary" ? "default" : "outline"}
      className={
        variant === "primary"
          ? "h-12 w-full rounded-lg border border-primary/40 bg-primary px-4 text-primary-foreground shadow-[0_0_32px_rgba(56,189,248,0.32)] hover:bg-primary/90"
          : "h-11 w-full rounded-lg border-border/80 bg-white/60 px-4 text-text-1 shadow-sm backdrop-blur transition-all hover:border-primary/70 hover:bg-primary/10 hover:shadow-[0_0_24px_rgba(56,189,248,0.16)] dark:bg-white/[0.03]"
      }
    >
      <Link href={href} rel="noopener noreferrer" target="_blank">
        <AppImage src={iconSrc} width={20} height={20} />
        <AppText
          text={title}
          className={
            variant === "primary"
              ? "text-xs font-bold text-primary-foreground"
              : "text-xs font-bold text-text-2"
          }
        />
      </Link>
    </Button>
  );
};

export default IconButton;
