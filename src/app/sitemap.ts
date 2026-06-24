import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/programs",
  "/mama-mumo",
  "/enterprise",
  "/impact",
  "/donate",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://herglobalcircle.org${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
