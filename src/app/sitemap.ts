import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/about/",
  "/events/",
  "/donate/",
  "/contact/",
  "/sharon-mumo-initiative/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://herglobalcircle.org${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
