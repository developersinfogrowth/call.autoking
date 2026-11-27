type Product = "engine" | "transmission";

export function ProductFaq({ product }: { product: Product }) {
  const faqs = [
    { question: `How do I find the right replacement ${product}?`, answer: `Call our parts specialists with your vehicle details. They can help you identify a suitable replacement ${product} and discuss the options available.` },
    { question: `How can I confirm ${product} compatibility?`, answer: "Our specialists can review your vehicle information and help confirm compatibility before you purchase." },
    { question: `How can I check ${product} pricing and availability?`, answer: "Call our team for current pricing and availability for your specific vehicle and part." },
    { question: "Do you offer nationwide shipping?", answer: "We offer delivery across the United States. Ask our specialists about shipping options for your location and part." },
    { question: `Are used ${product === "engine" ? "engines" : "transmissions"} inspected, and is a warranty available?`, answer: "Ask our specialists about the inspection process and any warranty applicable to the specific part before purchasing." },
    { question: "Am I eligible for the promotional discount?", answer: "Ask a parts specialist to confirm the current promotion and whether it applies to your order." },
  ];

  return <section aria-labelledby="faq-heading" className="bg-[#f4f4f4] px-5 py-12 text-zinc-950 sm:px-8 sm:py-14 lg:px-10 lg:py-16"><div className="mx-auto max-w-4xl">
    <div className="text-center"><p className="text-xs font-extrabold tracking-[0.14em] text-[#b91c1c]">HAVE QUESTIONS?</p><h2 id="faq-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Frequently Asked Questions</h2><p className="mt-3 text-base leading-7 text-zinc-600">Everything you need to know before purchasing.</p></div>
    <div className="mt-8 space-y-2">{faqs.map((faq, index) => <details key={faq.question} open={index === 0 || undefined} className="group rounded-xl border border-zinc-200 bg-white"><summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold leading-6 marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b91c1c] sm:text-base">{faq.question}<span aria-hidden="true" className="relative size-5 shrink-0 text-[#dc2626] before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-5 before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-5 after:w-0.5 after:-translate-x-1/2 after:bg-current group-open:after:hidden" /></summary><p className="px-5 pb-4 text-sm leading-6 text-zinc-600">{faq.answer}</p></details>)}</div>
  </div></section>;
}
