import type { MetadataRoute } from "next";
import { projects } from "../content/projects";
import { canonicalUrl } from "../content/seo";

/** Static export writes this to out/sitemap.xml at build time. */
export const dynamic = "force-static";

const STATIC_PATHS = ["/", "/projects", "/team", "/contact", "/legal-note"];

/**
 * Every public URL, generated from the same registries the pages render from
 * so a new project cannot silently stay out of the sitemap. `lastmod` is
 * deliberately omitted — a hardcoded date is worse than none.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_PATHS.map((path) => ({ url: canonicalUrl(path) })),
    ...projects.map((project) => ({
      url: canonicalUrl(`/projects/${project.slug}`),
    })),
  ];
}
