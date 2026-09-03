import type { Project } from "../types";
import { holospaceXr } from "./holospace-xr";
import { lernMitKi } from "./lern-mit-ki";
import { qrRundgang } from "./qr-rundgang";
import { mathematikEscapeRoom } from "./mathematik-escape-room";
import { globalFoundriesEscape } from "./global-foundries-escape";
import { globalFoundriesRundgang } from "./global-foundries-rundgang";
import { bexElektroVr } from "./bex-elektro-vr";
import { dinaSafetyFirst } from "./dina-safety-first";
import { dinaArAssistent } from "./dina-ar-assistent";
import { zeissFactory } from "./zeiss-factory";
import { sempromodVr } from "./sempromod-vr";
import { domicileVr } from "./domicile-vr";

/** Order here = order shown in the overview grid.
 *  The two currently running projects (HolospaceXR, Lern mit KI) are pinned to
 *  the top, followed by the two projects still in development (2026); the rest
 *  are ordered by time, newest first. */
export const projects: Project[] = [
  holospaceXr,
  lernMitKi,
  qrRundgang,
  mathematikEscapeRoom,
  globalFoundriesRundgang,
  globalFoundriesEscape,
  zeissFactory,
  bexElektroVr,
  dinaSafetyFirst,
  dinaArAssistent,
  sempromodVr,
  domicileVr,
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
