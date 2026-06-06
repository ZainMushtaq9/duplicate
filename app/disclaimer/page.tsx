import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - BijliHelp PK",
  description: "Disclaimer for independent PITC and MEPCO customer-help pages on BijliHelp PK.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto grid max-w-4xl gap-6 px-4 py-10">
      <h1 className="text-4xl font-black">Disclaimer</h1>
      <p className="leading-8 text-slate-600">
        BijliHelp PK is not an official MEPCO, PITC, or government website. It is an independent customer-help website that
        connects users with official sources and explains customer workflows in original wording.
      </p>
      <p className="leading-8 text-slate-600">
        Official bill amounts, due dates, complaint tickets, and feeder information should always be confirmed from the official
        service response shown for the customer account.
      </p>
    </main>
  );
}
