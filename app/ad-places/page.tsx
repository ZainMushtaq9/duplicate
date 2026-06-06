import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { adPlacements, adsense, estimateRevenue, revenueScenarios } from "@/lib/monetization";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ad Places and Traffic Earnings - BijliHelp PK",
  description:
    "AdSense placement plan, traffic-based earning estimates, and monetization setup for BijliHelp PK electricity bill and PITC service pages.",
  keywords: ["AdSense earnings Pakistan", "website ad places", "MEPCO bill website monetization", "traffic based earning"],
  alternates: { canonical: "/ad-places" },
};

export default function AdPlacesPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Ad Places and Earnings", url: `${site.url}/ad-places` },
        ])}
      />
      <section className="grid gap-4">
        <p className="text-sm font-black uppercase tracking-wide text-brand-orange">Traffic based earning</p>
        <h1 className="text-4xl font-black leading-tight md:text-5xl">AdSense ad places and earning estimates</h1>
        <p className="max-w-3xl leading-8 text-slate-600">
          These ad placements are designed for customer utility pages: ads appear after useful content, while reference number
          forms, complaint inputs, and printable bill results stay easy to use.
        </p>
      </section>

      <AdSlot placement="top" label="Top monetization ad" />

      <section className="grid gap-4">
        <h2 className="text-3xl font-black">Best ad places</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {adPlacements.map((item) => (
            <article key={item.pageType} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="text-xl font-black">{item.pageType}</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600">
                {item.placements.map((placement) => (
                  <li key={placement}>- {placement}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-6 text-slate-500">{item.reason}</p>
            </article>
          ))}
        </div>
      </section>

      <AdSlot placement="inContent" label="Earnings table ad" />

      <section className="grid gap-4">
        <h2 className="text-3xl font-black">Traffic earning estimate</h2>
        <p className="max-w-3xl leading-8 text-slate-600">
          Estimates use pageviews and page RPM ranges. Real AdSense earnings depend on approval, country mix, season, ad fill,
          policy compliance, content quality, and advertiser demand.
        </p>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-3">Monthly visits</th>
                <th className="p-3">Estimated pageviews</th>
                <th className="p-3">Low earning</th>
                <th className="p-3">High earning</th>
              </tr>
            </thead>
            <tbody>
              {revenueScenarios.map((row) => {
                const pageviews = Math.round(row.monthlyTraffic * row.pageviewsPerVisit);
                return (
                  <tr key={row.monthlyTraffic} className="border-t border-slate-100">
                    <td className="p-3 font-bold">{row.monthlyTraffic.toLocaleString()}</td>
                    <td className="p-3">{pageviews.toLocaleString()}</td>
                    <td className="p-3">${estimateRevenue(row.monthlyTraffic, row.pageviewsPerVisit, row.rpmLow).toLocaleString()}</td>
                    <td className="p-3">${estimateRevenue(row.monthlyTraffic, row.pageviewsPerVisit, row.rpmHigh).toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-black">AdSense backend keys</h2>
        <p className="leading-8 text-slate-600">
          Add your real AdSense client and slot IDs in environment variables. Until these keys are set, the website shows clean
          ad placeholders in development.
        </p>
        <div className="grid gap-2 rounded-md bg-slate-950 p-4 font-mono text-sm text-slate-100">
          <span>NEXT_PUBLIC_ADSENSE_CLIENT={adsense.client || "ca-pub-your-publisher-id"}</span>
          <span>NEXT_PUBLIC_ADSENSE_SLOT_TOP=top-slot-id</span>
          <span>NEXT_PUBLIC_ADSENSE_SLOT_IN_CONTENT=in-content-slot-id</span>
          <span>NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR=sidebar-slot-id</span>
          <span>NEXT_PUBLIC_ADSENSE_SLOT_FOOTER=footer-slot-id</span>
        </div>
      </section>
    </div>
  );
}
