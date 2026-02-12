"use client";
import { twMerge } from "tailwind-merge";

type AppTextProps = {
  text: string;
  className?: string;
};

const AppText = ({ text, className }: AppTextProps) => {
  return (
    <p className={`${twMerge("text-text-1 font-mono text-base", className)}`}>
      {text}
    </p>
  );
};

export default AppText;
