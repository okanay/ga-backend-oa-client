import { PropsWithChildren } from "react";
import { m } from "framer-motion";

type FaqAnswerType = React.FC<
  PropsWithChildren<{
    index: number;
    selectedFaq: number | null;
  }>
>;

const descriptionVariants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

export const FaqAnswer: FaqAnswerType = ({ children, selectedFaq, index }) => {
  return (
    <m.div
      variants={descriptionVariants}
      initial="closed"
      animate={selectedFaq === index ? "open" : "closed"}
      className={`overflow-hidden`}
    >
      <hr className="border-flower-50" />
      <p className="p-6 text-start text-sm text-flower-50 sm:p-8 sm:text-lg">
        {children}
      </p>
    </m.div>
  );
};
