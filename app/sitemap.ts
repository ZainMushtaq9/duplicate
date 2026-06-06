import type { MetadataRoute } from "next";
import { billCompanies, resourcePages, servicePages, site, trustPages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/mepco-duplicate-bill", "/pitc-services", ...servicePages.map((page) => page.href), ...trustPages.map((page) => page.href)];
  const billPages = billCompanies.map((bill) => `/${bill.slug}`);
  const resourcePaths = resourcePages.map((page) => `/${page.slug}`);
  return [...staticPages, ...billPages, ...resourcePaths].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" || path === "/mepco-duplicate-bill" ? 1 : 0.8,
  }));
}
