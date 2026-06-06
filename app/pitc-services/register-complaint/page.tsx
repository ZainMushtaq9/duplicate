import type { Metadata } from "next";

const categories = [
  {
    name: "Line Complaints",
    types: ["Power Outage", "Damaged Meter", "Electric Fire", "Line Fault", "Low/High Voltage", "Phase Issue", "Damaged Transformer", "Live Fallen Wire"],
  },
  {
    name: "Non-Line Complaints",
    types: ["Meter Position", "Detection Bill", "Late/Non-Delivery of Bill", "Electricity Theft", "Wrong Meter Reading", "Excess Billing", "Under Billing", "Bribery/Corruption"],
  },
  {
    name: "Leads / Requests / Others",
    types: ["Temporary Connection", "New Connection", "Reconnection", "Change of Sanctioned Load", "Loadshedding Schedule", "Net Metering", "Other"],
  },
];

export const metadata: Metadata = {
  title: "MEPCO Complaint Registration - Line, Non-Line and Request Categories",
  description: "Register electricity complaints with clear guidance for line complaints, non-line complaints, theft reports, and service requests.",
};

export default function RegisterComplaintPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10">
      <section className="grid gap-4">
        <p className="text-sm font-black uppercase tracking-wide text-brand-orange">Complaint registration</p>
        <h1 className="text-4xl font-black">MEPCO complaint registration categories and customer form guide</h1>
        <p className="max-w-3xl leading-8 text-slate-600">
          Choose the correct complaint category before submitting. This page gives customers a mobile-first explanation of line complaints, non-line complaints, and request categories.
        </p>
      </section>
      <section className="grid gap-4 lg:grid-cols-3">
        {categories.map((category) => (
          <article key={category.name} className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-black">{category.name}</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-600">
              {category.types.map((type) => (
                <li key={type} className="rounded-md bg-slate-50 p-2">
                  {type}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="rounded-lg border border-green-200 bg-green-50 p-5">
        <h2 className="text-2xl font-black">Customer fields usually required</h2>
        <p className="mt-3 leading-7 text-slate-700">
          Reference number, complainant name, mobile number, nearest place, complaint type, complaint detail, and optional attachment. Electricity theft reports usually require company, location address, city, and suspect name if known.
        </p>
      </section>
    </div>
  );
}
