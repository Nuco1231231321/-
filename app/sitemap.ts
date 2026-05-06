import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

const publicRoutes = [
  {
    path: "",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/ai-palm-reading",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/online-fortune-telling",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
