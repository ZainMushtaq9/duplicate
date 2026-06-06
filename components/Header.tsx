import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="no-print border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3 font-black text-brand-orange">
          <Image src="/logo.png" alt={`${site.name} logo`} width={44} height={44} className="rounded object-contain" priority />
          <span className="text-xl">{site.name}</span>
        </Link>
      </nav>
    </header>
  );
}
