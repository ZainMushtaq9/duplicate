"use client";

import { useState } from "react";
import { billCompanies } from "@/lib/site";

export function BillChecker({ defaultCompany = "mepco-duplicate-bill" }: { defaultCompany?: string }) {
  const [company, setCompany] = useState(defaultCompany);
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleaned = reference.replace(/\D/g, "");
    if (cleaned.length !== 14) {
      setError("Enter the complete 14 digit reference number printed on your bill.");
      return;
    }
    window.location.href = `/pitc-services/bill-details?company=${encodeURIComponent(company)}&refno=${encodeURIComponent(cleaned)}`;
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-orange-100 bg-white p-5 shadow-soft md:grid-cols-[1fr_1fr_auto]">
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Company
        <select value={company} onChange={(event) => setCompany(event.target.value)} className="rounded-md border border-slate-300 px-3 py-3">
          {billCompanies.map((bill) => (
            <option key={bill.slug} value={bill.slug}>
              {bill.company}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Reference number
        <input
          value={reference}
          onChange={(event) => setReference(event.target.value)}
          inputMode="numeric"
          maxLength={14}
          placeholder="14 digit reference number"
          className="rounded-md border border-slate-300 px-3 py-3"
        />
      </label>
      <button className="self-end rounded-md bg-brand-orange px-5 py-3 text-sm font-black text-white" type="submit">
        Check Bill
      </button>
      {error ? <p className="text-sm font-bold text-red-700 md:col-span-3">{error}</p> : null}
    </form>
  );
}
