import AppText from "@/components/atoms/text/AppText";
import { useGetAppColorResource } from "@/config/colors/useGetAppColorResource";

const InformationSection = () => {
  const colorResource = useGetAppColorResource("secondary");
  return (
    <div className="flex flex-col gap-2">
      {/* Hi */}
      <AppText
        text="Hi 👋, my name is"
        className={`text-base font-bold text-center ${colorResource.textColor}`}
      />

      {/* Name */}
      <AppText
        text={`Sachin Rupani`}
        className={`text-2xl font-bold text-center`}
      />

      {/* Designation */}
      <AppText
        text="An enthusiastic Mobile App Engineer with 10+ years of experience building & scaling React Native, Android, and iOS applications across healthcare and enterprise domains."
        className="text-xs font-bold text-center text-text-3"
      />
    </div>
  );
};

export default InformationSection;
