import { useSelectedPage } from "@/hooks/use-selected-page.tsx";
import { AnimatePresence, m } from "framer-motion";
import { dummyPages } from "@/components/main/index/hero-section/browser/pages-tabs/data.ts";

export const ArrowUpAnimationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { selectedIndex } = useSelectedPage();
  const type = dummyPages[selectedIndex].type;

  return (
    <div className={"flex items-center justify-center text-xs"}>
      <AnimatePresence mode={"popLayout"}>
        {type === "good" && (
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

export const ArrowUp = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        repeat: Infinity,
        duration: Math.random() * 4 + 1.5,
        repeatDelay: Math.random() * 1.25,
        delay: Math.random() * 3.5,
        repeatType: "reverse",
      }}
    >
      <img
        src={"/arrow-up.svg"}
        loading={"lazy"}
        alt={"hero-icon-arrow-up"}
        className={"relative opacity-85"}
        style={{
          //prettier-ignore
          width: `calc(clamp(${Math.floor(Math.random() * 80)}px, 1.5vw, 40px) * 0.5)`,
          //prettier-ignore
          height: `calc(clamp(${Math.floor(Math.random() * 80)}px, 2.5vw, 40px) * 0.5)`,
          left: `${Math.floor(Math.random() * 75)}px`,
          bottom: `${Math.floor(Math.random() * 25)}px`,
        }}
      />
    </m.div>
  );
};
