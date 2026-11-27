import { PHONE_DISPLAY, PHONE_URI } from "@/lib/contact";

const advantages = [
  { title: "Wide Vehicle Coverage", description: "Replacement parts for a wide range of makes and models.", icon: "coverage" },
  { title: "Compatibility Assistance", description: "Get expert help finding the right part for your vehicle.", icon: "compatibility" },
  { title: "Competitive Pricing", description: "Cost-effective alternatives to buying new parts.", icon: "pricing" },
  { title: "Transparent Process", description: "Discuss part details, pricing and availability before purchasing.", icon: "process" },
] as const;

function AdvantageIcon({ icon }: { icon: (typeof advantages)[number]["icon"] }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-7 text-[#DC2626]">
    {icon === "coverage" && <><path d="M5 17H3v-5l2-5h14l2 5v5h-2M5 17h14M3 12h18M7 12h.01M17 12h.01" /><circle cx="7" cy="17" r="1.5" /><circle cx="17" cy="17" r="1.5" /></>}
    {icon === "compatibility" && <><circle cx="11" cy="11" r="7" /><path d="m16 16 4 4M8 11l2 2 4-4" /></>}
    {icon === "pricing" && <><path d="M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V4h8.8L20 10.2a2 2 0 0 1 0 2.8Z" /><circle cx="7.5" cy="8" r="1" /></>}
    {icon === "process" && <><path d="M4 5h16v11H9l-5 4V5Z" /><path d="M8 9h8M8 12h5" /></>}
  </svg>;
}

export function AutoKingAdvantage() {
  return <section aria-labelledby="advantage-heading" className="bg-[#f4f4f4] px-5 py-12 text-zinc-950 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
    <div className="mx-auto max-w-7xl">
      <div className="text-center"><p className="text-xs font-extrabold tracking-[0.14em] text-[#b91c1c]">WHY CHOOSE AUTO KING</p><h2 id="advantage-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">The Auto King Advantage</h2><p className="mt-3 text-base leading-7 text-zinc-600">Helping you find the right replacement part with confidence.</p></div>
      <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {advantages.map((item) => <article key={item.title} className="h-full rounded-xl border border-zinc-200 bg-white p-5 sm:p-6"><AdvantageIcon icon={item.icon} /><h3 className="mt-4 text-base font-extrabold leading-6">{item.title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p></article>)}
      </div>
      <div className="mt-8 flex flex-col items-center gap-2"><a href={PHONE_URI} className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#DC2626] px-6 text-center text-sm font-extrabold text-white hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B91C1C]">Speak with a Parts Specialist</a><a href={PHONE_URI} className="inline-flex min-h-11 items-center font-bold text-[#b91c1c] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C1C]">{PHONE_DISPLAY}</a></div>
    </div>
  </section>;
}
