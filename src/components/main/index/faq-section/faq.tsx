import { FaqData } from "@/constants/faq/data.ts";
import { PlusIcon } from "@/components/main/index/faq-section/plus-icon.tsx";
import { useState } from "react";
import { m } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const plusIconVariants = {
  open: { rotate: 45 },
  closed: { rotate: 0 },
};

export const Faq = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const handleFaqOnClick = (index: number) => {
    setSelectedFaq(index);

    if (selectedFaq === index) setSelectedFaq(null);
  };

  return (
    <div className="container mx-auto max-w-4xl px-6 py-10">
      <div className="mt-12 space-y-8">
        {FaqData.map((faq, index) => (
          <div
            key={"f.a.q" + index}
            className="rounded-lg border-2 border-flower-100"
          >
            <button
              onClick={() => handleFaqOnClick(index)}
              className="flex w-full items-center justify-between p-8"
            >
              <h1 className="font-semibold text-flower-50">{faq.title}</h1>
              <m.div
                variants={plusIconVariants}
                animate={selectedFaq === index ? "open" : "closed"}
              >
                <PlusIcon />
              </m.div>
            </button>
            <m.div
              variants={variants}
              initial="closed"
              animate={selectedFaq === index ? "open" : "closed"}
              className={`overflow-hidden`}
            >
              <hr className="border-flower-50" />
              <p className="p-8 text-sm text-flower-50">{faq.description}</p>
            </m.div>
          </div>
        ))}
      </div>
    </div>
  );
};
