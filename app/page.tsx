import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { BillChecker } from "@/components/BillChecker";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "@/lib/schema";
import { billCompanies, mepcoFaqs, servicePages, site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12">
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", url: site.url }]),
          webApplicationSchema("MEPCO duplicate bill checker", `${site.url}/mepco-duplicate-bill`),
          faqSchema(mepcoFaqs),
        ]}
      />
      <section className="grid gap-6">
        <p className="text-sm font-black uppercase tracking-wide text-brand-orange">Pakistan electricity customer help</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Check MEPCO duplicate bills, print electricity bills, and use PITC customer services.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          BijliHelp PK is built to answer the real search intent better than ordinary bill-check pages: fast bill lookup,
          printable results, complaint category guidance, feeder details, and tracking help in one structured website.
        </p>
        <BillChecker />
      </section>

      <AdSlot placement="top" label="Top responsive ad" />

      <section className="grid gap-4 md:grid-cols-5">
        {servicePages.map((page) => (
          <Link key={page.href} href={page.href} className="rounded-lg border border-slate-200 bg-white p-4 hover:border-orange-500">
            <h2 className="font-black">{page.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{page.description}</p>
          </Link>
        ))}
      </section>

      <AdSlot placement="inContent" label="In-content responsive ad" />

      <section className="grid gap-4">
        <h2 className="text-3xl font-black">Duplicate bill pages by company</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {billCompanies.map((bill) => (
            <Link key={bill.slug} href={`/${bill.slug}`} className="rounded-lg border border-slate-200 bg-white p-4 hover:border-orange-500">
              <span className="font-black">{bill.company} Duplicate Bill</span>
              <span className="mt-2 block text-sm leading-6 text-slate-600">{bill.area}</span>
            </Link>
          ))}
        </div>
      </section>

      <FAQ items={mepcoFaqs} />
    </div>
  );
}
