import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEPCO Feeder Details and Load Management Guide",
  description: "Check feeder status, grid details, and load management guidance for electricity customers.",
};

export default function FeederDetailsPage() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 px-4 py-10">
      <p className="text-sm font-black uppercase tracking-wide text-brand-orange">Feeder details</p>
      <h1 className="text-4xl font-black">MEPCO feeder details and load management</h1>
      <p className="leading-8 text-slate-600">Feeder details help customers understand whether an outage is local, feeder-level, or linked to load management. This page should be internally linked from bill and complaint pages.</p>
    </div>
  );
}
