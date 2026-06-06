import type { Metadata } from "next";
import Link from "next/link";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "PITC Customer Services - Bills, Complaints, Tracking and Feeder Details",
  description: "Use PITC customer service helpers for duplicate bills, complaint registration, complaint tracking, and feeder details.",
};

export default function PitcServicesPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10">
      <section className="grid gap-4">
        <p className="text-sm font-black uppercase tracking-wide text-brand-orange">Customer service hub</p>
        <h1 className="text-4xl font-black">PITC bills, complaint tracking, feeder details, and customer support pages</h1>
        <p className="max-w-3xl leading-8 text-slate-600">
          A search-optimized customer hub that connects bill checking with complaint registration, complaint tracking, and load-management information.
        </p>
      </section>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {servicePages.map((page) => (
          <Link key={page.href} href={page.href} className="rounded-lg border border-slate-200 bg-white p-5 hover:border-orange-500">
            <h2 className="text-xl font-black">{page.title}</h2>
            <p className="mt-2 leading-7 text-slate-600">{page.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
