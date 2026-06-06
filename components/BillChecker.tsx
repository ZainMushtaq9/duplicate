"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { billCompanies } from "@/lib/site";

export function BillChecker({ defaultCompany = "mepco-duplicate-bill" }: { defaultCompany?: string }) {
  const router = useRouter();
  const [company, setCompany] = useState(defaultCompany);
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isLoading) return;
    const cleaned = reference.replace(/\D/g, "");
    if (cleaned.length !== 14) {
      setError("Enter the complete 14 digit reference number printed on your bill.");
      return;
    }
    setError("");
    setIsLoading(true);
    router.push(`/pitc-services/bill-details?company=${encodeURIComponent(company)}&refno=${encodeURIComponent(cleaned)}`);
  }

  return (
    <form onSubmit={submit} className="relative grid gap-4 overflow-hidden rounded-lg border border-orange-100 bg-white p-5 shadow-soft md:grid-cols-[1fr_1fr_auto]">
      {isLoading ? (
        <div className="absolute inset-x-0 top-0 z-10">
          <div className="h-1 w-full bg-orange-100">
            <div className="loading-bar h-full bg-brand-orange" />
          </div>
        </div>
      ) : null}
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Company
        <select disabled={isLoading} value={company} onChange={(event) => setCompany(event.target.value)} className="rounded-md border border-slate-300 px-3 py-3 disabled:bg-slate-100">
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
          disabled={isLoading}
          className="rounded-md border border-slate-300 px-3 py-3 disabled:bg-slate-100"
        />
      </label>
      <button disabled={isLoading} className="self-end rounded-md bg-brand-orange px-5 py-3 text-sm font-black text-white disabled:cursor-wait disabled:bg-orange-300" type="submit">
        {isLoading ? "Loading Bill..." : "Check Bill"}
      </button>
      {isLoading ? (
        <div className="rounded-md bg-orange-50 p-3 text-sm font-bold text-orange-800 md:col-span-3">
          Fetching printable bill from the official PITC system. Please wait...
        </div>
      ) : null}
      {error ? <p className="text-sm font-bold text-red-700 md:col-span-3">{error}</p> : null}
    </form>
  );
}
