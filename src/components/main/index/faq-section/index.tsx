import { FaqHeader } from "@/components/main/index/faq-section/faq-header.tsx";
import { Faq } from "@/components/main/index/faq-section/faq.tsx";

export const FaqSection = () => {
  return (
    <section
      id={"#faq"}
      className="h-full w-full space-y-12 bg-ebony-950 px-4 pb-16 sm:pb-32"
    >
      <FaqHeader />
      <Faq />
    </section>
  );
};
