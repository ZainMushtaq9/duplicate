import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BijliHelp PK",
  description: "Contact BijliHelp PK for website feedback, corrections, and customer-help page suggestions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-4xl gap-6 px-4 py-10">
      <h1 className="text-4xl font-black">Contact</h1>
      <p className="leading-8 text-slate-600">
        For corrections, page suggestions, and website feedback, use the contact channel configured by the site owner. Do not
        send private account documents through public comments or unsecured forms.
      </p>
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-black">Before contacting</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Keep the page URL, issue details, and a non-sensitive screenshot ready. For official account actions, use the official
          PITC or distribution company service channel.
        </p>
      </div>
    </main>
  );
}
