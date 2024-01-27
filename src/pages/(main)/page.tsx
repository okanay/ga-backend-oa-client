import { HeroSection } from "@/components/main/index/hero-section";
import { PriceSection } from "@/components/main/index/price-section";
import { FaqSection } from "@/components/main/index/faq-section";

export const MainPage = () => {
  return (
    <main className={"bg-flower-50"}>
      <HeroSection />
      <PriceSection />
      <FaqSection />
    </main>
  );
};
