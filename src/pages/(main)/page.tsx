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

      <div ref={sectionsRef} className="h-[200svh] min-h-[2000px] w-[100%]">
        <div
          className={
            "sticky top-0 h-[50%] w-[100%] overflow-hidden bg-ebony-200"
          }
        >
          <m.div
            className={"flex h-full w-[100%] bg-ebony-300"}
            style={{ translateX: x }}
          >
            <div className={"h-full w-[100%] flex-shrink-0 bg-secondary-700"}>
              <PriceSection />
            </div>
            <div className={"h-full w-[100%] flex-shrink-0 bg-lime-200"} />
          </m.div>
        </div>
      </div>
      <div className="h-svh w-[100%] bg-ebony-300" />
    </main>
  );
};
