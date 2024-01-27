import { FaqHeader } from "@/components/main/index/faq-section/faq-header.tsx";
import { Faq } from "@/components/main/index/faq-section/faq.tsx";

export const FaqSection = () => {
  return (
    <section className="h-full w-full bg-ebony-950 pb-12 sm:pb-24">
      <FaqHeader />
      <div className={"mt-[2.5rem] sm:mt-[4.25rem]"}>
        <Faq />
      </div>
    </section>
  );
};
