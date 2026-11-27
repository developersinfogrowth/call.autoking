import { ProductHero } from "@/components/product-hero";
import { TrustIndicators } from "@/components/trust-indicators";
import { PromotionalBanner } from "@/components/promotional-banner";
import { AutoKingAdvantage } from "@/components/auto-king-advantage";
import { PopularVehicleMakes } from "@/components/popular-vehicle-makes";
import { ProductFaq } from "@/components/product-faq";
import { FinalCallCta } from "@/components/final-call-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return <><main><ProductHero product="engine" /><TrustIndicators /><PromotionalBanner product="engine" /><AutoKingAdvantage /><PopularVehicleMakes product="engine" /><ProductFaq product="engine" /><FinalCallCta product="engine" /></main><Footer /></>;
}
