import { HeroSection } from "@/components/main/index/hero-section";
import { PriceSection } from "@/components/main/index/price-section";
import { FeatureSection } from "@/components/main/index/feature-section";
import { FaqSection } from "@/components/main/index/faq-section";
import { ContactSection } from "@/components/main/index/contact-section";

export const IndexSections = () => {
  return (
    <main className={"bg-flower-50"}>
      <HeroSection />
      <PriceSection />
      <FeatureSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
};
