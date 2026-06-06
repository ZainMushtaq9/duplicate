import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms - BijliHelp PK",
  description: "Terms of use for BijliHelp PK customer-help pages.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto grid max-w-4xl gap-6 px-4 py-10">
      <h1 className="text-4xl font-black">Terms</h1>
      <p className="leading-8 text-slate-600">
        BijliHelp PK provides independent informational and utility support pages. Users are responsible for verifying account
        amounts, payment status, complaint status, and official notices with the relevant official electricity service.
      </p>
      <p className="leading-8 text-slate-600">
        Do not misuse forms, submit false complaint details, or attempt to access accounts that do not belong to you.
      </p>
    </main>
  );
}
