import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backlink Resources - BijliHelp PK",
  description: "White-hat backlink and citation resources for electricity bill, complaint, and customer-help content.",
  keywords: ["MEPCO guest post", "electricity bill resource page", "Pakistan utility backlinks", "white hat backlink strategy"],
  alternates: { canonical: "/backlink-resources" },
};

export default function BacklinkResourcesPage() {
  const ideas = [
    "Publish original bill payment safety guides for Pakistani finance and utility blogs.",
    "Create reference-number explainers for education and consumer-help resource pages.",
    "Offer updated complaint category tables to local news, community, and public-service websites.",
    "Answer user questions with source citations on reputable forums without spam links.",
  ];
  const targetKeywords = [
    "MEPCO bill",
    "MEPCO duplicate bill",
    "MEPCO bill online check by reference number",
    "print MEPCO bill",
    "MEPCO complaint registration",
    "PITC complaint tracking",
  ];

  return (
    <main className="mx-auto grid max-w-4xl gap-6 px-4 py-10">
      <h1 className="text-4xl font-black">Backlink resources</h1>
      <p className="leading-8 text-slate-600">
        BijliHelp PK should earn links through useful utility resources, not automated comments or low-quality link schemes.
        These white-hat topics support search visibility and brand trust.
      </p>
      <div className="grid gap-3">
        {ideas.map((idea) => (
          <div key={idea} className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700">
            {idea}
          </div>
        ))}
      </div>
      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="text-2xl font-black">Target anchor and citation keywords</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Use these terms naturally in guest posts, citations, resource links, and internal linking. Avoid repeated exact-match
          anchors; mix brand, URL, and helpful phrase anchors for a safer backlink profile.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {targetKeywords.map((keyword) => (
            <span key={keyword} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
              {keyword}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
