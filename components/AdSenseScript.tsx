import Script from "next/script";
import { adsense } from "@/lib/monetization";

export function AdSenseScript() {
  if (!adsense.client) return null;
  return <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense.client}`} crossOrigin="anonymous" strategy="afterInteractive" />;
}
