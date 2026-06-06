import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import { fetchPitcBill } from "@/lib/pitc";
import { billCompanies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Printable Electricity Bill Details",
  description: "Printable official PITC electricity bill result fetched through BijliHelp PK.",
  robots: { index: false, follow: false },
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 30;

function officialBillUrl(billUrl: string | undefined, reference: string) {
  if (!billUrl || reference.length !== 14) return "";
  return `${billUrl}/general?refno=${reference}`;
}

function cleanBillError(message: string) {
  if (
    message === "fetch failed" ||
    message.includes("ETIMEDOUT") ||
    message.includes("ECONNRESET") ||
    message.includes("ENETUNREACH") ||
    message.includes("timed out")
  ) {
    return "The official PITC bill server is not responding to this hosting request right now. Try again, or open the official bill page below.";
  }
  return message;
}

export default async function BillDetailsPage({ searchParams }: { searchParams: Promise<{ company?: string; refno?: string }> }) {
  const params = await searchParams;
  const reference = (params.refno || "").replace(/\D/g, "");
  const bill = billCompanies.find((item) => item.slug === params.company);
  let billHtml = "";
  let error = "";

  if (!bill || reference.length !== 14) {
    error = "Select a valid company and enter a complete 14 digit reference number.";
  } else {
    try {
      billHtml = await fetchPitcBill(bill.url, reference);
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "The official bill could not be loaded right now.";
      error = cleanBillError(message);
    }
  }
  const officialUrl = officialBillUrl(bill?.url, reference);

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10">
      <div className="no-print flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link href="/pitc-services/duplicate-bills" className="text-sm font-bold text-brand-orange">
            Duplicate Bills
          </Link>
          <h1 className="mt-3 text-3xl font-black">{bill ? bill.company : "Electricity"} bill details</h1>
          <p className="mt-2 text-sm text-slate-600">
            Reference number: <span className="font-black text-slate-950">{reference}</span>
          </p>
        </div>
        {billHtml ? <PrintButton /> : null}
      </div>
      {error ? (
        <div className="grid gap-4 rounded-lg border border-red-200 bg-red-50 p-5 text-sm font-bold text-red-800">
          <p>{error}</p>
          {officialUrl ? (
            <a className="inline-flex w-fit rounded-md bg-brand-orange px-4 py-3 text-white" href={officialUrl} rel="noopener noreferrer" target="_blank">
              Open Official Bill Page
            </a>
          ) : null}
        </div>
      ) : (
        <div className="print-area bill-html rounded-lg border border-slate-200 bg-white p-6" dangerouslySetInnerHTML={{ __html: billHtml }} />
      )}
    </div>
  );
}
