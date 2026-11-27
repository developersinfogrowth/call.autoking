"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BUSINESS_HOURS, PHONE_DISPLAY, PHONE_URI } from "@/lib/contact";

const links = [{ href: "/", label: "Used Engines" }, { href: "/used-transmissions", label: "Used Transmissions" }];

function PhoneIcon() { return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.45 2.81a2 2 0 0 1-.57 1.72L7.7 9.54a16 16 0 0 0 6.76 6.76l1.29-1.29a2 2 0 0 1 1.72-.57l2.81.45A2 2 0 0 1 22 16.92z" /></svg>; }

export function Navbar() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  return <header onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }} className="sticky top-0 z-20 border-b border-white/10 bg-[#101010]"><nav className="mx-auto flex min-h-[76px] max-w-[1440px] items-center gap-4 px-4 sm:px-8 lg:gap-6 lg:px-10" aria-label="Main navigation">
    <Link href="/" aria-label="Auto King USA home" className="shrink-0"><Image src="/logo/logo.webp" alt="Auto King USA" width={300} height={100} priority className="h-auto w-28 sm:w-32 lg:w-36" /></Link>
    <div className="hidden shrink-0 items-center gap-5 lg:flex">{links.map((link) => <Link key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined} className={`whitespace-nowrap border-b-2 py-3 text-sm font-bold ${path === link.href ? "border-[#DC2626] text-[#DC2626]" : "border-transparent text-[#E5E5E5] hover:text-white"}`}>{link.label}</Link>)}</div>
    <p className="ml-auto hidden items-center gap-2 whitespace-nowrap text-xs font-medium text-[#E5E5E5] xl:flex"><svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>{BUSINESS_HOURS}</p>
    <a href={PHONE_URI} className="ml-auto hidden shrink-0 items-center gap-2 whitespace-nowrap text-sm font-bold text-white hover:text-[#E5E5E5] lg:inline-flex xl:ml-0"><PhoneIcon />{PHONE_DISPLAY}</a>
    <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0"><a href={PHONE_URI} className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#DC2626] px-3 text-sm font-bold text-white hover:bg-[#B91C1C] sm:px-5"><PhoneIcon /><span>Call Now</span></a><button type="button" className="inline-flex size-11 items-center justify-center rounded-md border border-white/25 text-white lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M5 5l14 14M19 5 5 19" : "M3 6h18M3 12h18M3 18h18"} /></svg></button></div>
  </nav><div id="mobile-nav" hidden={!open} className="border-t border-white/10 px-5 pb-4 lg:hidden">{links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined} className={`block min-h-12 py-3 text-sm font-bold ${path === link.href ? "text-[#DC2626] underline underline-offset-8" : "text-[#E5E5E5]"}`}>{link.label}</Link>)}</div></header>;
}
