import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About BijliHelp PK",
  description: "About BijliHelp PK, an independent customer-help website for Pakistan electricity bill and PITC service workflows.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto grid max-w-4xl gap-6 px-4 py-10">
      <h1 className="text-4xl font-black">About {site.name}</h1>
      <p className="leading-8 text-slate-600">
        BijliHelp PK is an independent customer-help website built for electricity users who need quick duplicate bills,
        printable PITC results, complaint guidance, feeder details, and tracking support in one place.
      </p>
      <p className="leading-8 text-slate-600">
        We focus on clear instructions, fast utility pages, original guides, and transparent source notes so customers can use
        official electricity services with fewer wrong turns.
      </p>
    </main>
  );
}
