// prettier-ignore
import { plusIconVariants, descriptionVariants } from "@/constants/faq/animation-data.ts";
import { FaqData } from "@/constants/faq/data.ts";
import { m } from "framer-motion";

import { PlusIcon } from "./plus-icon.tsx";
import { useFaq } from "@/hooks/faq/useFaq.ts";

export const Faq = () => {
  const { selectedFaq, handleFaqOnClick } = useFaq();

  return (
    <div className="container mx-auto max-w-4xl px-8">
      <div className="space-y-8">
        {FaqData.map((faq, index) => (
          <div
            key={"f.a.q" + index}
            className="rounded-lg border-2 border-flower-100"
          >
            <button
              onClick={() => handleFaqOnClick(index)}
              className="flex w-full items-center justify-between gap-8 px-4 py-8"
            >
              <h1 className="text-start font-semibold text-flower-50">
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
              <p className="p-8 text-sm text-flower-50">{faq.answer}</p>
            </m.div>
          </div>
        ))}
      </div>
    </div>
  );
};
