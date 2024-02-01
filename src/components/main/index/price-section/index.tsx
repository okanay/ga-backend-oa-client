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
      className="relative flex flex-col items-center justify-center space-y-12 overflow-hidden bg-flower-50 px-4 py-12 sm:py-24"
    >
      <PriceHeader />
      <PriceCard
        isMobile={isMobile as boolean}
        scrollYProgress={scrollYProgress}
      />
      <BlackCircleAnim
        scrollYProgress={scrollYProgress}
        isMobile={isMobile as boolean}
      />
    </section>
  );
};
