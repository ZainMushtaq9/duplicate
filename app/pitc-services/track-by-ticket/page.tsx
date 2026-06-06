import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track MEPCO Complaint by Ticket Number",
  description: "Track PITC and MEPCO complaint status using the ticket number issued after complaint registration.",
};

export default function TrackByTicketPage() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 px-4 py-10">
      <p className="text-sm font-black uppercase tracking-wide text-brand-orange">Ticket tracking</p>
      <h1 className="text-4xl font-black">Track complaint by ticket number</h1>
      <p className="leading-8 text-slate-600">Customers receive a ticket number after a complaint is created. Use that ticket number to check complaint progress, status, and feedback options.</p>
    </div>
  );
}
