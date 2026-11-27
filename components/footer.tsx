import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { BUSINESS_DAYS, BUSINESS_HOURS_TIME, PHONE_DISPLAY, PHONE_URI } from "@/lib/contact";

async function CurrentYear() {
  await connection();
  return new Date().getFullYear();
}

export function Footer() {
  return <footer className="bg-[#0a0a0a] text-zinc-300"><div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 py-10 min-[400px]:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
    <div><Link href="/" aria-label="Auto King USA home" className="inline-flex"><Image src="/logo/logo.webp" alt="Auto King USA" width={300} height={100} className="h-auto w-36" /></Link><p className="mt-3 text-sm text-zinc-400">Used Engines &amp; Transmissions.</p></div>
    <nav aria-label="Footer navigation"><h2 className="text-sm font-bold text-white">Quick Links</h2><div className="mt-3 flex flex-col items-start gap-3 text-sm"><Link href="/" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Used Engines</Link><Link href="/used-transmissions" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Used Transmissions</Link></div></nav>
    <div><h2 className="text-sm font-bold text-white">Contact Us</h2><a href={PHONE_URI} className="mt-3 inline-flex items-center gap-2 text-sm font-bold hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-[#dc2626]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.45 2.81a2 2 0 0 1-.57 1.72L7.7 9.54a16 16 0 0 0 6.76 6.76l1.29-1.29a2 2 0 0 1 1.72-.57l2.81.45A2 2 0 0 1 22 16.92z" /></svg>{PHONE_DISPLAY}</a></div>
    <div><h2 className="text-sm font-bold text-white">Business Hours</h2><p className="mt-3 text-sm leading-6 text-zinc-400">{BUSINESS_DAYS}<br />{BUSINESS_HOURS_TIME}</p></div>
  </div><div className="border-t border-white/10 px-5 py-5 text-center text-xs text-zinc-400">© <Suspense fallback={null}><CurrentYear /></Suspense> The Auto King USA. All rights reserved.</div></footer>;
}
