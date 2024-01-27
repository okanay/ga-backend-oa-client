import { FaqHeader } from "@/components/main/index/faq-section/faq-header.tsx";
import { Faq } from "@/components/main/index/faq-section/faq.tsx";

export const FaqSection = () => {
  return (
    <section className="h-full w-full bg-ebony-950">
      <FaqHeader />
      <Faq />
    </section>
  );
};
