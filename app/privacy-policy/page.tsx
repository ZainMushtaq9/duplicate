import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - BijliHelp PK",
  description: "Privacy policy for BijliHelp PK electricity bill and PITC service help pages.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto grid max-w-4xl gap-6 px-4 py-10">
      <h1 className="text-4xl font-black">Privacy Policy</h1>
      <p className="leading-8 text-slate-600">
        BijliHelp PK may process reference numbers or ticket numbers only to perform requested customer-help actions such as
        fetching a duplicate bill or tracking a complaint. We do not ask users to enter passwords or banking information.
      </p>
      <h2 className="text-2xl font-black">Advertising and analytics</h2>
      <p className="leading-8 text-slate-600">
        The website may use advertising and analytics partners, including Google services, after configuration by the site owner.
        These partners may use cookies or similar technologies according to their own policies and user consent requirements.
      </p>
    </main>
  );
}
