import { BUSINESS_HOURS, PHONE_DISPLAY, PHONE_URI } from "@/lib/contact";

export function FinalCallCta({ product }: { product: "engine" | "transmission" }) {
  return <section aria-labelledby="final-call-heading" className="bg-[#171717] px-5 py-12 text-center text-white sm:px-8 sm:py-14"><div className="mx-auto max-w-3xl"><h2 id="final-call-heading" className="text-3xl font-black tracking-tight sm:text-4xl">Ready to Find Your Replacement {product === "engine" ? "Engine" : "Transmission"}?</h2><p className="mt-4 text-base leading-7 text-zinc-300">Speak with our parts specialists for compatibility, pricing and availability.</p><a href={PHONE_URI} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-[#dc2626] px-6 text-base font-extrabold text-white hover:bg-[#b91c1c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Call Now: {PHONE_DISPLAY}</a><p className="mt-3 text-sm text-zinc-300">{BUSINESS_HOURS}</p></div></section>;
}
