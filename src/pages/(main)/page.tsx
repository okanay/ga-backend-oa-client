import { HeroSection } from "@/components/main/index/hero-section";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PriceSection } from "@/components/main/price-section";

export const MainPage = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionsRef,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 0.55, 1], ["0%", "0%", "-100%"]);

  return (
    <main>
      <HeroSection />
      <PriceSection />

      <div ref={sectionsRef} className="h-[2000px] w-[100%]">
        <div className="sticky top-0 flex w-[100%] overflow-hidden bg-red-400">
          <m.div
            className="h-[100%] w-[100%] bg-blue-400"
            style={{
              x,
            }}
          />
        </div>
      </div>
      <div className="h-svh w-[100%] bg-flower-500" />
    </main>
  );
};
