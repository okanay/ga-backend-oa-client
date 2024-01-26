import { HeroSection } from "@/components/main/index/hero-section";
import { PriceSection } from "@/components/main/price-section";

export const MainPage = () => {
  return (
    <main className={"bg-flower-50"}>
      <HeroSection />
      <PriceSection />
      <div className={"h-[500px] w-full bg-ebony-950"}></div>
    </main>
  );
};
