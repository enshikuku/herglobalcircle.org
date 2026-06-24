import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/donation-received/",
    },
    sitemap: "https://herglobalcircle.org/sitemap.xml",
  };
}
