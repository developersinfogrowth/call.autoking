import { PHONE_DISPLAY, PHONE_URI } from "@/lib/contact";

export function FloatingCallCta() {
  return <a href={PHONE_URI} className="fixed inset-x-0 bottom-0 z-50 flex min-h-[calc(56px+env(safe-area-inset-bottom))] items-center justify-center gap-2 bg-[#dc2626] px-4 pb-[env(safe-area-inset-bottom)] text-base font-bold text-white hover:bg-[#b91c1c] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white md:inset-x-auto md:bottom-auto md:right-6 md:top-1/2 md:min-h-[50px] md:-translate-y-1/2 md:rounded-full md:px-5 md:pb-0" aria-label={`Call now: ${PHONE_DISPLAY}`}>
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.45 2.81a2 2 0 0 1-.57 1.72L7.7 9.54a16 16 0 0 0 6.76 6.76l1.29-1.29a2 2 0 0 1 1.72-.57l2.81.45A2 2 0 0 1 22 16.92z" /></svg>
    <span>Call Now<span className="md:hidden">: {PHONE_DISPLAY}</span></span>
  </a>;
}
