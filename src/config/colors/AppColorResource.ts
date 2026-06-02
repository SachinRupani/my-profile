import {
  AppColorVariant,
  GraphicColorResource,
} from "./AppColorResource.types";

export const AppColorResource: Record<AppColorVariant, GraphicColorResource> = {
  primary: {
    background: "bg-primary/15",
    foreground: "text-primary-700 dark:text-primary-900",
    shadowColor: "shadow-primary/10 dark:shadow-primary/20",
    borderColor: "border-primary/30",
    textColor: "text-primary-600 dark:text-primary-700",
  },
  secondary: {
    background: "bg-secondary/15",
    foreground: "text-secondary-700 dark:text-secondary-900",
    shadowColor: "shadow-secondary/10 dark:shadow-secondary/20",
    borderColor: "border-secondary/30",
    textColor: "text-secondary-500 dark:text-secondary-700",
  },
};
