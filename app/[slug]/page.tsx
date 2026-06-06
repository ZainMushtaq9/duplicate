import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { BillChecker } from "@/components/BillChecker";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "@/lib/schema";
import { billCompanies, resourcePages, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...billCompanies.map((bill) => ({ slug: bill.slug })), ...resourcePages.map((page) => ({ slug: page.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bill = billCompanies.find((item) => item.slug === slug);
  const resource = resourcePages.find((item) => item.slug === slug);
  if (resource) {
    return {
      title: `${resource.title} - BijliHelp PK`,
      description: resource.description,
      keywords: [...resource.keywords],
      alternates: { canonical: `/${resource.slug}` },
    };
  }
  if (!bill) return {};
  return {
    title: `${bill.company} Duplicate Bill Online - Check and Print Electricity Bill`,
    description: `Check ${bill.company} duplicate electricity bill online for ${bill.area}. Enter reference number and print the official PITC bill result.`,
    alternates: { canonical: `/${bill.slug}` },
  };
}

export default async function CompanyBillPage({ params }: Props) {
  const { slug } = await params;
  const bill = billCompanies.find((item) => item.slug === slug);
  const resource = resourcePages.find((item) => item.slug === slug);
  if (resource) {
    const faqs = resource.faqs.map(([question, answer]) => ({ question, answer }));
    return (
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-10">
        <JsonLd
          data={[
            breadcrumbSchema([
              { name: "Home", url: site.url },
              { name: resource.title, url: `${site.url}/${resource.slug}` },
            ]),
            faqSchema(faqs),
          ]}
        />
        <section className="grid gap-5">
          <p className="text-sm font-black uppercase tracking-wide text-brand-orange">{resource.cluster} guide</p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">{resource.title}</h1>
          <p className="max-w-3xl leading-8 text-slate-600">{resource.description}</p>
        </section>

        <AdSlot placement="top" label={`${resource.cluster} guide ad`} />

        <section className="grid gap-5">
          {resource.sections.map(([heading, body]) => (
            <article key={heading} className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-black">{heading}</h2>
              <p className="mt-3 leading-8 text-slate-600">{body}</p>
            </article>
          ))}
        </section>

        <AdSlot placement="inContent" label="Resource guide ad" />

        <section className="rounded-lg border border-orange-100 bg-orange-50 p-6">
          <h2 className="text-2xl font-black">Best next step</h2>
          <p className="mt-3 leading-8 text-slate-700">
            For payment or account decisions, first load your official duplicate bill result and confirm bill month, due date,
            payable amount, reference number, and customer details.
          </p>
          <Link href="/mepco-duplicate-bill" className="mt-4 inline-flex rounded-md bg-brand-orange px-5 py-3 font-black text-white">
            Check MEPCO Bill
          </Link>
        </section>

        <FAQ items={faqs} />
      </div>
    );
  }
  if (!bill) notFound();
  const faqs = [
    { question: `How do I check ${bill.company} duplicate bill?`, answer: `Enter the 14 digit reference number and BijliHelp PK will fetch the official PITC ${bill.company} bill result.` },
    { question: `Can I print ${bill.company} bill?`, answer: "Yes. After the result loads, use the Print Bill button or your browser print option to save a PDF copy." },
    { question: "Is this an official company website?", answer: "No. BijliHelp PK is an independent customer helper that uses official PITC bill sources." },
  ];
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: `${bill.company} Duplicate Bill`, url: `${site.url}/${bill.slug}` },
          ]),
          webApplicationSchema(`${bill.company} duplicate bill checker`, `${site.url}/${bill.slug}`),
          faqSchema(faqs),
        ]}
      />
      <section className="grid gap-5">
        <p className="text-sm font-black uppercase tracking-wide text-brand-orange">{bill.company} online bill</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-5xl">{bill.company} duplicate bill online</h1>
        <p className="max-w-3xl leading-8 text-slate-600">
          Check and print the official PITC {bill.company} electricity bill for customers in {bill.area}. Keep your 14 digit reference number ready.
        </p>
        <BillChecker defaultCompany={bill.slug} />
      </section>

      <AdSlot placement="top" label={`${bill.company} bill ad`} />

      <section className="grid gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-black">What customers need before checking bill</h2>
        <ul className="grid gap-3 text-sm leading-6 text-slate-600 md:grid-cols-3">
          <li className="rounded-md bg-slate-50 p-3">14 digit reference number from a previous bill.</li>
          <li className="rounded-md bg-slate-50 p-3">A working browser to print or save PDF after the bill loads.</li>
          <li className="rounded-md bg-slate-50 p-3">Official PITC result for amount, due date, and bill month.</li>
        </ul>
      </section>

      <AdSlot placement="inContent" label="Duplicate bill guide ad" />

      <section className="grid gap-4">
        <h2 className="text-2xl font-black">Other duplicate bill pages</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {billCompanies.filter((item) => item.slug !== bill.slug).slice(0, 8).map((item) => (
            <Link key={item.slug} href={`/${item.slug}`} className="rounded-lg border border-slate-200 bg-white p-4 font-black hover:border-orange-500">
              {item.company} Bill
            </Link>
          ))}
        </div>
      </section>
      <FAQ items={faqs} />
    </div>
  );
}
