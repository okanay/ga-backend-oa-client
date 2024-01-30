import { m } from "framer-motion";
import { PlusIcon } from "@/components/main/index/faq-section/plus-icon.tsx";

type FaqIconType = React.FC<{
  index: number;
  selectedFaq: number | null;
}>;

const plusIconVariants = {
  open: { rotate: 45 },
  closed: { rotate: 0 },
};

export const FaqIcon: FaqIconType = ({ index, selectedFaq }) => {
  return (
    <m.div
      variants={plusIconVariants}
      animate={selectedFaq === index ? "open" : "closed"}
      className={"flex-shrink-0"}
    >
      <PlusIcon />
    </m.div>
  );
};
