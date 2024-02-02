import { motion } from "framer-motion";
import { useState } from "react";

type MobileNav = "open" | "close";

export const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState<MobileNav>("close");

  const handleOnClick = () => {
    setIsOpen(isOpen === "open" ? "close" : "open");
  };

  return (
    <button
      className="relative z-40 flex h-[56px] w-[56px] flex-col items-end justify-center gap-2 transition-all duration-300 hover:scale-90 md:hidden"
      onClick={handleOnClick}
    >
      <motion.div
        variants={lineVariantFirst}
        custom={isOpen === "open"}
        animate={"animate"}
        transition={{
          delay: isOpen === "open" ? 0.25 : 0,
          type: "ease",
          ease: [0.22, 1, 0.88, 1],
        }}
        className={`h-[2px] w-[40px] rounded-lg bg-primary-300`}
      />
      <motion.div
        variants={lineVariantSecond}
        custom={isOpen === "open"}
        animate={"animate"}
        transition={{
          delay: isOpen === "open" ? 0 : 0.25,
          type: "ease",
          ease: [0.22, 1, 0.88, 1],
        }}
        className={`h-[2px] w-[40px] rounded-lg bg-primary-300`}
      />
      <motion.div
        variants={lineVariantThird}
        custom={isOpen === "open"}
        animate={"animate"}
        transition={{
          delay: 0.1,
          type: "spring",
          stiffness: 90,
        }}
        className={`h-[2px] w-[40px] rounded-lg bg-primary-300`}
      />
    </button>
  );
};

const lineVariantFirst = {
  animate: (menuStatus: boolean) => ({
    y: menuStatus ? 10 : 0,
    rotate: menuStatus ? "45deg" : "0",
  }),
};
const lineVariantSecond = {
  animate: (menuStatus: boolean) => ({
    scaleX: menuStatus ? 0 : 1,
  }),
};
const lineVariantThird = {
  animate: (menuStatus: boolean) => ({
    y: menuStatus ? -10 : 0,
    rotate: menuStatus ? "-45deg" : "0",
  }),
};
