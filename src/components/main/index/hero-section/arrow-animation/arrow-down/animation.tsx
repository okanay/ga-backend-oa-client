import { m } from "framer-motion";
import { getMaxWidth } from "../random-values.ts";
import { getMaxHeight } from "../random-values.ts";

export const ArrowDown = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        repeat: Infinity,
        duration: Math.random() * 4 + 1.75,
        repeatDelay: Math.random() * 2,
        delay: Math.random() * 12,
        repeatType: "reverse",
      }}
    >
      <img
        src={"/arrow-down.svg"}
        loading={"lazy"}
        alt={"hero-icon-arrow-up"}
        className={"relative opacity-85"}
        style={{
          width: getMaxWidth(),
          height: getMaxHeight(),
          right: `${Math.floor(Math.random() * -25)}px`,
          left: `${Math.floor(Math.random() * 45)}px`,
          top: `${Math.floor(Math.random() * 25)}px`,
        }}
      />
    </m.div>
  );
};
