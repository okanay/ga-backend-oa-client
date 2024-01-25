import { m } from "framer-motion";

export const ArrowDown = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: -50 }}
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
        src={"/arrow-down.svg"}
        loading={"lazy"}
        alt={"hero-icon-arrow-up"}
        className={"relative opacity-85"}
        style={{
          //prettier-ignore
          width: `calc(clamp(${Math.floor(Math.random() * 80)}px, 1.5vw, 40px) * 0.5)`,
          //prettier-ignore
          height: `calc(clamp(${Math.floor(Math.random() * 80)}px, 2.5vw, 40px) * 0.5)`,
          right: `${Math.floor(Math.random() * 75)}px`,
          top: `${Math.floor(Math.random() * 25)}px`,
        }}
      />
    </m.div>
  );
};
