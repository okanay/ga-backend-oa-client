import { m } from "framer-motion";
import { plusIconVariants } from "@/constants/faq/animation-data.ts";
import { PlusIcon } from "@/components/main/index/faq-section/plus-icon.tsx";

type FaqIconType = React.FC<{
  index: number;
  selectedFaq: number | null;
}>;

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
