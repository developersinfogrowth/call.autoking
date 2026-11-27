import Image from "next/image";
import { PHONE_DISPLAY, PHONE_URI } from "@/lib/contact";

const makes = [
  { name: "Ford", image: "/images/brands/Ford-Logo.webp", imageClass: "h-16 w-36" },
  { name: "Chevrolet", image: "/images/brands/chevrolet-logo.webp", imageClass: "h-20 w-40" },
  { name: "Toyota", image: "/images/brands/toyota-logo.webp", imageClass: "h-20 w-32" },
  { name: "Honda", image: "/images/brands/Honda.webp", imageClass: "h-20 w-28" },
] as const;

export function PopularVehicleMakes({ product }: { product: "engine" | "transmission" }) {
  return <section aria-labelledby="popular-makes-heading" className="bg-white px-5 py-12 text-zinc-950 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-extrabold tracking-[0.14em] text-[#b91c1c]">WIDE VEHICLE COVERAGE</p><h2 id="popular-makes-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Popular Makes We Support</h2><p className="mt-3 min-h-[84px] text-base leading-7 text-zinc-600 sm:min-h-14">Find the right used {product} for your vehicle. Call us for compatibility, pricing and availability.</p></div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {makes.map((make) => <a key={make.name} href={PHONE_URI} aria-label={`Call for ${make.name} used ${product} availability`} className="flex min-h-36 flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-4 text-center hover:border-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b91c1c]"><div className="flex h-20 w-full items-center justify-center"><Image src={make.image} alt="" width={200} height={100} sizes="(max-width: 639px) 40vw, 200px" className={`${make.imageClass} max-w-full object-contain`} /></div><span className="text-base font-bold">{make.name}</span></a>)}
      </div>
      <div className="mt-8 flex flex-col items-center text-center"><p className="text-base text-zinc-600">Looking for another make or model? We can help.</p><a href={PHONE_URI} className="mt-4 inline-flex min-h-12 items-center justify-center rounded-md bg-[#dc2626] px-6 text-sm font-extrabold text-white hover:bg-[#b91c1c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b91c1c]">Call to Check Availability</a><a href={PHONE_URI} className="mt-2 inline-flex min-h-11 items-center font-bold text-[#b91c1c] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b91c1c]">{PHONE_DISPLAY}</a></div>
    </div>
  </section>;
}
