"use client";

import { useEffect } from "react";
import { adsense } from "@/lib/monetization";

type AdSlotProps = {
  placement: keyof typeof adsense.slots;
  label?: string;
  className?: string;
};

export function AdSlot({ placement, label = "Advertisement", className = "" }: AdSlotProps) {
  const slot = adsense.slots[placement];

  useEffect(() => {
    if (!adsense.client || !slot) return;
    try {
      const win = window as Window & { adsbygoogle?: unknown[] };
      win.adsbygoogle = win.adsbygoogle || [];
      win.adsbygoogle.push({});
    } catch {
      // Ad blockers or preview browsers can block AdSense; the page should still work.
    }
  }, [slot]);

  if (!adsense.client || !slot) {
    return (
      <div className={`no-print grid min-h-24 place-items-center rounded-lg border border-dashed border-slate-300 bg-white text-xs font-bold uppercase tracking-wide text-slate-400 ${className}`}>
        {label}
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle no-print block min-h-24 ${className}`}
      data-ad-client={adsense.client}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
