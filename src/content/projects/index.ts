import type { Project } from "../types";
import { holospaceXr } from "./holospace-xr";
import { dinaSafetyFirst } from "./dina-safety-first";
import { dinaArAssistent } from "./dina-ar-assistent";
import { lernMitKi } from "./lern-mit-ki";
import { globalFoundriesRundgang } from "./global-foundries-rundgang";
import { narrenhaeuselAr } from "./narrenhaeusel-ar";
import { zeissFactory } from "./zeiss-factory";
import { globalFoundriesEscape } from "./global-foundries-escape";
import { bexElektroVr } from "./bex-elektro-vr";
import { domicileVr } from "./domicile-vr";

/** Order here = order shown in the overview grid. */
export const projects: Project[] = [
  holospaceXr,
  dinaSafetyFirst,
  dinaArAssistent,
  lernMitKi,
  globalFoundriesRundgang,
  narrenhaeuselAr,
  zeissFactory,
  globalFoundriesEscape,
  bexElektroVr,
  domicileVr,
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
