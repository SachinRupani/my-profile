"use client";
import { cn } from "@/lib/utils";

type AppTextProps = {
  text: string;
  className?: string;
};

const AppText = ({ text, className }: AppTextProps) => {
  return <p className={cn("text-base text-text-1", className)}>{text}</p>;
};

export default AppText;
