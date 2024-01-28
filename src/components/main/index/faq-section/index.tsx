import { FaqHeader } from "@/components/main/index/faq-section/faq-header.tsx";
import { Faq } from "@/components/main/index/faq-section/faq.tsx";

export const FaqSection = () => {
  return (
    <section className="h-full w-full space-y-12 bg-ebony-950 py-12 sm:py-24">
      <FaqHeader />
      <Faq />
    </section>
  );
};
