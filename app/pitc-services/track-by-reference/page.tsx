import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track MEPCO Complaint by Reference Number",
  description: "Learn how to track PITC complaint history using a customer electricity reference number.",
};

export default function TrackByReferencePage() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 px-4 py-10">
      <p className="text-sm font-black uppercase tracking-wide text-brand-orange">Complaint tracking</p>
      <h1 className="text-4xl font-black">Track complaint by reference number</h1>
      <p className="leading-8 text-slate-600">Use the customer reference number printed on the electricity bill to find complaint history and status. Keep the 14 digit reference number ready before checking.</p>
      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <h2 className="text-2xl font-black">Best internal links</h2>
        <p className="mt-3 leading-7 text-slate-600">Link this page from bill result pages, complaint registration, feeder details, and the main MEPCO duplicate bill page to build a strong service silo.</p>
      </div>
    </div>
  );
}
