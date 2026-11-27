const indicators = [
  { title: "Quality Tested", description: "Inspected for reliable performance.", icon: "quality" },
  { title: "Nationwide Shipping", description: "Delivery across the United States.", icon: "shipping" },
  { title: "Expert Support", description: "Speak with a real parts specialist.", icon: "support" },
] as const;

function TrustIcon({ icon }: { icon: (typeof indicators)[number]["icon"] }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-7 shrink-0 text-[#DC2626]">
    {icon === "quality" && <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 16.99 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>}
    {icon === "shipping" && <><path d="M14 18V6a2 2 0 0 0-2-2H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2m9 0H9m5 0h1m4 0h2a1 1 0 0 0 1-1v-3.7a1 1 0 0 0-.2-.6l-3.5-4.4a1 1 0 0 0-.8-.3H14" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></>}
    {icon === "support" && <><path d="M3 14h3v6H5a2 2 0 0 1-2-2v-4Zm18 0h-3v6h1a2 2 0 0 0 2-2v-4ZM3 14v-1a9 9 0 0 1 18 0v1M18 20a3 3 0 0 1-3 2h-3" /></>}
  </svg>;
}

export function TrustIndicators() {
  return <section aria-label="The Auto King benefits" className="bg-black text-white">
    <div className="mx-auto grid max-w-7xl px-5 py-3 sm:grid-cols-3 sm:px-8 lg:px-10 lg:py-5">
      {indicators.map((item) => <div key={item.title} className="flex min-h-16 items-center gap-4 border-b border-white/10 py-3 last:border-b-0 sm:border-b-0 sm:border-l sm:px-5 sm:first:border-l-0 sm:first:pl-0 lg:px-8">
        <TrustIcon icon={item.icon} />
        <div><h2 className="text-sm font-bold sm:text-base">{item.title}</h2><p className="mt-1 text-sm leading-5 text-zinc-400">{item.description}</p></div>
      </div>)}
    </div>
  </section>;
}
