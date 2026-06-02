import AppText from "@/components/atoms/text/AppText";
import { Badge } from "@/components/ui/badge";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";

const InformationSection = () => {
  const colorResource = useGetAppColorResource("secondary");
  return (
    <div className="relative z-10 flex flex-col items-center gap-5 lg:gap-3 xl:gap-5">
      {/* Hi */}
      <AppText
        text="Hi 👋, my name is"
        className={`text-center text-sm font-bold uppercase tracking-[0.2em] ${colorResource.textColor}`}
      />

      {/* Name */}
      <AppText
        text={`Sachin Rupani`}
        className="max-w-xl text-center text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-4xl xl:text-5xl"
      />

      {/* Designation */}
      <AppText
        text="An enthusiastic Mobile App Engineer with 10+ years of experience building & scaling React Native, Android, and iOS applications across healthcare and enterprise domains."
        className="max-w-xl text-center text-xs font-medium leading-7 text-text-3 sm:text-base lg:text-xs lg:leading-6 xl:text-sm xl:leading-7"
      />

      <div className="grid w-full max-w-md grid-cols-3 gap-2 pt-1">
        <div className="rounded-lg border border-border/70 bg-white/50 p-3 text-center shadow-sm backdrop-blur dark:bg-white/[0.04] lg:p-2.5 xl:p-3">
          <p className="text-lg font-black text-foreground lg:text-base xl:text-lg">
            10+
          </p>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-text-3">
            Years
          </p>
        </div>
        <div className="rounded-lg border border-border/70 bg-white/50 p-3 text-center shadow-sm backdrop-blur dark:bg-white/[0.04] lg:p-2.5 xl:p-3">
          <p className="text-lg font-black text-foreground lg:text-base xl:text-lg">
            3
          </p>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-text-3">
            Platforms
          </p>
        </div>
        <div className="rounded-lg border border-border/70 bg-white/50 p-3 text-center shadow-sm backdrop-blur dark:bg-white/[0.04] lg:p-2.5 xl:p-3">
          <p className="text-lg font-black text-foreground lg:text-base xl:text-lg">
            Mobile
          </p>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-text-3">
            Focus
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <Badge
          variant="secondary"
          className="border-primary/30 bg-primary/10 text-primary-700 dark:text-primary-900"
        >
          React Native
        </Badge>
        <Badge
          variant="secondary"
          className="border-border/80 bg-white/5 text-text-2"
        >
          Android
        </Badge>
        <Badge
          variant="secondary"
          className="border-border/80 bg-white/5 text-text-2"
        >
          iOS
        </Badge>
      </div>
    </div>
  );
};

export default InformationSection;
