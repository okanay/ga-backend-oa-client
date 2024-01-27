import { useRef } from "react";
import { useScroll } from "framer-motion";

import { PriceHeader } from "@/components/main/index/price-section/price-header.tsx";
import { PriceCard } from "@/components/main/index/price-section/price-card.tsx";
import { BlackCircleAnim } from "@/components/main/index/price-section/black-circle-anim.tsx";
import { useMediaQuery } from "@mantine/hooks";

export const PriceSection = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
    target: sectionRef,
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex h-fit min-h-[844px] flex-col justify-center overflow-hidden bg-flower-50 py-16 sm:h-full sm:min-h-0 sm:py-28"
    >
      <div className="flex flex-col items-center justify-center space-y-8 px-4 sm:space-y-16">
        <PriceHeader />
        <PriceCard
          scrollYProgress={scrollYProgress}
          isMobile={isMobile as boolean}
        />
        <BlackCircleAnim
          scrollYProgress={scrollYProgress}
          isMobile={isMobile as boolean}
        />
      </div>
    </section>
  );
};
