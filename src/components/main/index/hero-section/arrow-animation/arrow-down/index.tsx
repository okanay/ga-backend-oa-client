import { AnimatePresence, m } from "framer-motion";
import { dummyPages } from "../../browser/data.ts";

import { useSelectedPageIndex } from "@/hooks/browser-hooks/use-selected-page-index.tsx";

type Props = React.FC<{
  children: React.ReactNode;
}>;

export const ArrowDownAnimationWrapper: Props = ({ children }) => {
  const { selectedIndex } = useSelectedPageIndex();
  const animationType = dummyPages[selectedIndex].type;

  return (
    <div className={"flex items-center justify-center text-xs"}>
      <AnimatePresence mode={"popLayout"}>
        {animationType === "bad" && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
