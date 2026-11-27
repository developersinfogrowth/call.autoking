import Image from "next/image";
import { PHONE_DISPLAY, PHONE_URI } from "@/lib/contact";

const products = {
  engine: { name: "Used Engines", image: "/images/banner/used-engine.webp" },
  transmission: { name: "Used Transmissions", image: "/images/banner/used-transmission.webp" },
} as const;

export function PromotionalBanner({ product }: { product: keyof typeof products }) {
  const content = products[product];

  return <section aria-label={`${content.name} special offer`} className="bg-[#0a0a0a] px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
    <a href={PHONE_URI} aria-label={`Call ${PHONE_DISPLAY} to claim 10% off ${content.name}`} className="group relative mx-auto block max-w-7xl overflow-hidden rounded-xl bg-black text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC2626]">
      <Image src={content.image} alt="" fill sizes="(max-width: 1023px) 155vw, (min-width: 1280px) 1280px, 100vw" className="offer-background object-contain object-top lg:object-left" />
      <div className="offer-content relative flex flex-col justify-end px-6 pb-6 sm:px-8 lg:min-h-[220px] lg:flex-row lg:items-center lg:justify-end lg:gap-6 lg:py-5 xl:gap-8">
        <div className="lg:w-[38%]">
          <p className="text-xs font-bold tracking-wide text-red-400">SPECIAL OFFER</p>
          <h2 className="mt-1 text-[1.75rem] font-black leading-[1.1] tracking-tight sm:text-[2rem] lg:text-3xl xl:text-[2.25rem]">Get <span className="text-[#DC2626]">10% Off</span><br />{content.name}</h2>
          <p className="mt-2 text-sm leading-5 text-zinc-300">Expert help with pricing and compatibility.</p>
        </div>
        <div className="mt-4 flex flex-col items-start gap-2 lg:mt-0 lg:w-[27%] lg:items-center lg:text-center"><span className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#DC2626] px-4 text-center text-sm font-extrabold transition-colors group-hover:bg-[#B91C1C]">Call Now &amp; Claim 10% Off</span><span className="text-base font-bold">{PHONE_DISPLAY}</span></div>
      </div>
    </a>
  </section>;
}
