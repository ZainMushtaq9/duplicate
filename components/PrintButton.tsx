"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="rounded-md bg-brand-orange px-4 py-2 text-sm font-black text-white">
      Print Bill
    </button>
  );
}
