import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { BillChecker } from "@/components/BillChecker";
import { billCompanies } from "@/lib/site";

export const metadata: Metadata = {
  title: "PITC Duplicate Bill Pages - MEPCO, LESCO, FESCO, IESCO and More",
  description: "Open duplicate electricity bill pages for MEPCO, LESCO, FESCO, GEPCO, IESCO, PESCO, QESCO, HESCO, SEPCO, TESCO and AJK.",
};

export default function DuplicateBillsPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10">
      <section className="grid gap-4">
        <p className="text-sm font-black uppercase tracking-wide text-brand-orange">PITC duplicate bills</p>
        <h1 className="text-4xl font-black">Check and print electricity duplicate bills</h1>
        <p className="max-w-3xl leading-8 text-slate-600">Use one helper form for all supported PITC bill companies, or open a company-specific SEO page.</p>
        <BillChecker />
      </section>

      <AdSlot placement="top" label="Duplicate bills ad" />

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {billCompanies.map((bill) => (
          <Link key={bill.slug} href={`/${bill.slug}`} className="rounded-lg border border-slate-200 bg-white p-4 hover:border-orange-500">
            <span className="font-black">{bill.company} Duplicate Bill</span>
            <span className="mt-2 block text-sm text-slate-600">{bill.area}</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
