import { AppColorResource } from "./AppColorResource";
import {
  AppColorVariant,
  GraphicColorResource,
} from "./AppColorResource.types";

export const useGetAppColorResource = (
  colorVariant: AppColorVariant,
): GraphicColorResource => {
  return AppColorResource[colorVariant];
};
