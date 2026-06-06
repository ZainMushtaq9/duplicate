import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="no-print mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div>
          <div className="font-black">{site.name}</div>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Independent customer-help website for official PITC electricity bill, complaint, feeder, and tracking services.
          </p>
        </div>
      </div>
    </footer>
  );
}
