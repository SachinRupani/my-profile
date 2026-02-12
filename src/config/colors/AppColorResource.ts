import {
  AppColorVariant,
  GraphicColorResource,
} from "./AppColorResource.types";

export const AppColorResource: Record<AppColorVariant, GraphicColorResource> = {
  primary: {
    background: "bg-primary-50 dark:bg-primary-800",
    foreground: "text-primary-300 dark:text-primary-100",
    shadowColor: "shadow-primary-50 dark:shadow-primary-700",
    borderColor: "border-primary-50 dark:border-primary-700",
    textColor: "text-primary-50 dark:text-primary-700",
  },
  secondary: {
    background: "bg-secondary-50 dark:bg-secondary-800",
    foreground: "text-secondary-300 dark:text-secondary-100",
    shadowColor: "shadow-secondary-50 dark:shadow-secondary-700",
    borderColor: "border-secondary-50 dark:border-secondary-700",
    textColor: "text-secondary-50 dark:text-secondary-700",
  },
};
