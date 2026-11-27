import Image from "next/image";
import { PHONE_DISPLAY, PHONE_URI } from "@/lib/contact";

type Product = "engine" | "transmission";
const products = {
  engine: { eyebrow: "QUALITY USED ENGINES", part: "Engine", description: "Find the right used engine for your vehicle. Call our specialists for pricing and availability.", image: "/images/hero/used-engine.webp", alt: "Used vehicle engine" },
  transmission: { eyebrow: "QUALITY USED TRANSMISSIONS", part: "Transmission", description: "Find the right used transmission for your vehicle. Call our specialists for pricing and availability.", image: "/images/hero/used-Transmission.webp", alt: "Used vehicle transmission" },
} as const;

function PhoneIcon() { return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.45 2.81a2 2 0 0 1-.57 1.72L7.7 9.54a16 16 0 0 0 6.76 6.76l1.29-1.29a2 2 0 0 1 1.72-.57l2.81.45A2 2 0 0 1 22 16.92z" /></svg>; }

export function ProductHero({ product }: { product: Product }) {
  const content = products[product];
  return <section className="relative isolate overflow-hidden bg-[#090909]" aria-labelledby="product-hero-heading">
    <Image src={content.image} alt={content.alt} fill priority sizes="(max-width: 1023px) 150vw, 100vw" className="hero-background object-contain object-bottom lg:object-cover lg:object-center" />
    <div className="hero-content relative z-10 mx-auto flex max-w-7xl items-start px-5 pt-8 sm:px-8 sm:pt-12 lg:min-h-[540px] lg:px-10 lg:pb-12 lg:pt-16">
      <div className="max-w-[520px]"><p className="text-xs font-extrabold tracking-[0.16em] text-red-400">{content.eyebrow}</p><h1 id="product-hero-heading" className="mt-3 text-[2rem] font-black leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-5xl lg:text-[3rem]"><span className="lg:block">Find a Reliable</span>{" "}<span className="lg:block">Used {content.part}</span>{" "}<span className="lg:block">for Your Vehicle</span></h1><p className="mt-4 max-w-lg text-base leading-7 text-zinc-200 sm:mt-5 sm:text-lg sm:leading-8 lg:min-h-16">{content.description}</p><div className="mt-5 sm:mt-7"><a href={PHONE_URI} className="inline-flex min-h-14 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#DC2626] px-5 text-sm font-extrabold text-white transition hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6 sm:text-base"><PhoneIcon />Call Now: {PHONE_DISPLAY}</a><p className="mt-3 text-sm font-medium text-zinc-200">Speak with a Parts Specialist Today</p></div></div>
    </div>
  </section>;
}
