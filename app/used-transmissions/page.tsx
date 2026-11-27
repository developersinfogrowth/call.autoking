import { ProductHero } from "@/components/product-hero";
import { TrustIndicators } from "@/components/trust-indicators";
import { PromotionalBanner } from "@/components/promotional-banner";
import { AutoKingAdvantage } from "@/components/auto-king-advantage";
import { PopularVehicleMakes } from "@/components/popular-vehicle-makes";
import { ProductFaq } from "@/components/product-faq";
import { FinalCallCta } from "@/components/final-call-cta";
import { Footer } from "@/components/footer";

export default function UsedTransmissionsPage() {
  return <><main><ProductHero product="transmission" /><TrustIndicators /><PromotionalBanner product="transmission" /><AutoKingAdvantage /><PopularVehicleMakes product="transmission" /><ProductFaq product="transmission" /><FinalCallCta product="transmission" /></main><Footer /></>;
}
