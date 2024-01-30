import { FaqData } from "@/constants/faq/data.ts";

import { useFaq } from "@/hooks/faq/useFaq.ts";
import { FaqIcon } from "@/components/main/index/faq-section/faq-icon.tsx";
import { FaqQuestion } from "@/components/main/index/faq-section/faq-question.tsx";
import { FaqAnswer } from "@/components/main/index/faq-section/faq-answer.tsx";
import { FaqButton } from "@/components/main/index/faq-section/faq-button.tsx";

export const Faq = () => {
  const { selectedFaq, handleFaqOnClick } = useFaq();

  return (
    <div className="container mx-auto max-w-[64rem]">
      <div className="space-y-6">
        {FaqData.map((faq, index) => (
          <div
            key={"f.a.q" + index}
            className="rounded-lg border-2 border-flower-100"
          >
            <FaqButton index={index} handleFaqOnClick={handleFaqOnClick}>
              <FaqQuestion>{faq.question}</FaqQuestion>
              <FaqIcon index={index} selectedFaq={selectedFaq} />
            </FaqButton>
            <FaqAnswer selectedFaq={selectedFaq} index={index}>
              {faq.answer}
            </FaqAnswer>
          </div>
        ))}
      </div>
    </div>
  );
};
