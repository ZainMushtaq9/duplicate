import { billCompanies, resourcePages, servicePages, site, trustPages } from "@/lib/site";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    "Independent Pakistan electricity customer-help website for MEPCO duplicate bills, printable PITC bill results, complaint registration guidance, feeder details, and complaint tracking.",
    "",
    "## Core Pages",
    `- MEPCO duplicate bill: ${site.url}/mepco-duplicate-bill`,
    `- PITC services hub: ${site.url}/pitc-services`,
    ...servicePages.map((page) => `- ${page.title}: ${site.url}${page.href}`),
    ...trustPages.map((page) => `- ${page.title}: ${site.url}${page.href}`),
    "",
    "## Company Bill Pages",
    ...billCompanies.map((bill) => `- ${bill.company} duplicate bill: ${site.url}/${bill.slug}`),
    "",
    "## Resource Guides",
    ...resourcePages.map((page) => `- ${page.title}: ${site.url}/${page.slug}`),
    "",
    "## Source note",
    "BijliHelp PK is independent and uses official PITC bill and service sources for customer utility workflows.",
  ];
  return new Response(`${lines.join("\n")}\n`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
