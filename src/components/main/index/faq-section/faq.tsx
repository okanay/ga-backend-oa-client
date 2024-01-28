// prettier-ignore
import { plusIconVariants, descriptionVariants } from "@/constants/faq/animation-data.ts";
import { FaqData } from "@/constants/faq/data.ts";
import { m } from "framer-motion";

import { PlusIcon } from "./plus-icon.tsx";
import { useFaq } from "@/hooks/faq/useFaq.ts";

export const Faq = () => {
  const { selectedFaq, handleFaqOnClick } = useFaq();

  return (
    <div className="container mx-auto max-w-[64rem] px-8">
      <div className="space-y-6">
        {FaqData.map((faq, index) => (
          <div
            key={"f.a.q" + index}
            className="rounded-lg border-2 border-flower-100"
          >
            <button
              onClick={() => handleFaqOnClick(index)}
              className="flex w-full items-center justify-between gap-8 p-6 sm:p-8"
            >
              <h1 className="text-start text-sm font-semibold text-flower-50 sm:text-base">
                {faq.question}
              </h1>
              <m.div
                variants={plusIconVariants}
                animate={selectedFaq === index ? "open" : "closed"}
                className={"flex-shrink-0"}
              >
                <PlusIcon />
              </m.div>
            </button>
            <m.div
              variants={descriptionVariants}
              initial="closed"
              animate={selectedFaq === index ? "open" : "closed"}
              className={`overflow-hidden`}
            >
              <hr className="border-flower-50" />
              <p className="p-6 text-start text-sm text-flower-50 sm:p-8">
                {faq.answer}
              </p>
            </m.div>
          </div>
        ))}
      </div>
    </div>
  );
};
