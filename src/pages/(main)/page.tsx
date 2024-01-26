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
  const x = useTransform(scrollYProgress, [0, 0.525, 1], ["0%", "0%", "-100%"]);

  return (
    <main>
      <HeroSection />

      <div ref={sectionsRef} className="min-h-[200svh] w-[100%]">
        <div className={"sticky top-0 flex h-svh w-[100%] overflow-hidden"}>
          <m.div
            style={{ translateX: x }}
            className="flex h-svh w-[100%] flex-shrink-0 bg-red-400"
          >
            <div className="h-svh w-[100%] flex-shrink-0 bg-ebony-200">
              <PriceSection />
            </div>
            <div className="relative z-30 h-svh w-[100%] flex-shrink-0 bg-flower-50" />
          </m.div>
        </div>
      </div>

      <div className="h-svh w-[100%] bg-flower-100" />
    </main>
  );
};
