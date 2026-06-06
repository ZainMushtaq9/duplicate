import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { BillChecker } from "@/components/BillChecker";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "@/lib/schema";
import { mepcoFaqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "MEPCO Duplicate Bill Online - Check and Print MEPCO Bill",
  description:
    "Check MEPCO duplicate bill online by 14 digit reference number. View, download, and print the official PITC MEPCO bill result from BijliHelp PK.",
  keywords: [
    "MEPCO bill",
    "MEPCO duplicate bill",
    "MEPCO bill online check by reference number",
    "print MEPCO bill",
    "MEPCO complaint registration",
    "PITC complaint tracking",
  ],
  alternates: { canonical: "/mepco-duplicate-bill" },
};

export default function MepcoDuplicateBillPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "MEPCO Duplicate Bill", url: `${site.url}/mepco-duplicate-bill` },
          ]),
          webApplicationSchema("MEPCO duplicate bill checker", `${site.url}/mepco-duplicate-bill`),
          faqSchema(mepcoFaqs),
        ]}
      />
      <section className="grid gap-5">
        <p className="text-sm font-black uppercase tracking-wide text-brand-orange">MEPCO online bill check</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-5xl">MEPCO duplicate bill online - check and print your electricity bill</h1>
        <p className="max-w-3xl leading-8 text-slate-600">
          Enter your 14 digit reference number to fetch the official PITC MEPCO bill result. The result page is printable and
          designed for customers who need a quick duplicate bill copy before payment.
        </p>
        <BillChecker defaultCompany="mepco-duplicate-bill" />
      </section>

      <AdSlot placement="top" label="Bill checker ad" />

      <section className="grid gap-6 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-black">How to check MEPCO bill online</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {["Find the 14 digit reference number on your previous bill.", "Enter the number in the checker and submit.", "Print the official bill result or save it as PDF."].map((step, index) => (
            <div key={step} className="rounded-lg bg-slate-50 p-4">
              <div className="text-sm font-black text-brand-orange">Step {index + 1}</div>
              <p className="mt-2 leading-7 text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <AdSlot placement="inContent" label="MEPCO guide ad" />

      <AdSlot placement="footer" label="FAQ ad" />

      <FAQ items={mepcoFaqs} />
    </div>
  );
}
