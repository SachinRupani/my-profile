import IconButton from "@/components/atoms/icon-button/IconButton";

const SocialInfoButtonsSection = () => {
  return (
    <div className="relative z-10 flex flex-col gap-3">
      {/* Download Resume Button */}
      <IconButton
        title="Download Resume"
        iconSrc="/ic_download.svg"
        href="https://drive.google.com/file/d/1tQTe2TXARt9fQReb2SryIf6mYaTThACH/view?usp=drive_link"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
    </div>
  );
};

export default SocialInfoButtonsSection;
