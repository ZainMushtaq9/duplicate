export const adsense = {
  client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "",
  slots: {
    top: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP || "",
    inContent: process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT || "",
    sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR || "",
    footer: process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER || "",
  },
};

export const adPlacements = [
  {
    pageType: "MEPCO bill checker",
    placements: ["Below bill checker form", "After how-to steps", "Before FAQ"],
    reason: "High transactional intent; ads should not block the reference-number form or printable result.",
  },
  {
    pageType: "Company duplicate bill pages",
    placements: ["Below intro", "After customer requirements", "Before related company links"],
    reason: "Users compare company pages and may continue browsing related bill services.",
  },
  {
    pageType: "Complaint and feeder pages",
    placements: ["After explanatory intro", "Before category guide", "After support instructions"],
    reason: "Support pages have informational intent and longer dwell time.",
  },
  {
    pageType: "Resource guides",
    placements: ["After first answer section", "Mid-article", "Before FAQs"],
    reason: "Informational pages can carry more ads without interrupting a critical utility task.",
  },
];

export const revenueScenarios = [
  { monthlyTraffic: 10000, pageviewsPerVisit: 1.4, rpmLow: 0.8, rpmHigh: 2.5 },
  { monthlyTraffic: 50000, pageviewsPerVisit: 1.5, rpmLow: 1.0, rpmHigh: 3.5 },
  { monthlyTraffic: 150000, pageviewsPerVisit: 1.7, rpmLow: 1.2, rpmHigh: 5.0 },
  { monthlyTraffic: 500000, pageviewsPerVisit: 1.8, rpmLow: 1.5, rpmHigh: 7.0 },
];

export function estimateRevenue(monthlyTraffic: number, pageviewsPerVisit: number, rpm: number) {
  return Math.round((monthlyTraffic * pageviewsPerVisit * rpm) / 1000);
}
