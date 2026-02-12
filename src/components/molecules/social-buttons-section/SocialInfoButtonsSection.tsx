import IconButton from "@/components/atoms/icon-button/IconButton";

const SocialInfoButtonsSection = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <IconButton
          title="LinkedIn"
          iconSrc="/ic_linked_in.svg"
          href="https://www.linkedin.com/in/sachinrupani"
        />
        <IconButton
          title="GitHub"
          iconSrc="/ic_github.svg"
          href="https://github.com/sachinrupani"
        />
      </div>
      {/* Download Resume Button */}
      <IconButton
        title="Download Resume"
        iconSrc="/ic_download.svg"
        href="https://drive.google.com/file/d/1H7bi-FXh4yiDxBzcFwyzcLu-S4JObT-e/view?usp=drive_link"
      />
    </div>
  );
};

export default SocialInfoButtonsSection;
