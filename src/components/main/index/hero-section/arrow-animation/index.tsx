import { AnimatePresence, m } from "framer-motion";

export const ArrowAnimation = () => {
  return (
    <div className={"absolute inset-0 overflow-hidden"}>
      <div className="grid h-full grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, columnIndex) => (
          <div
            key={`column-${columnIndex}`}
            className="grid h-full grid-rows-12 gap-4"
          >
            {Array.from({ length: 12 }).map((_, rowIndex) => (
              <ArrowRows key={`row-${rowIndex}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ArrowRows = () => {
  return (
    <div className="flex items-center justify-center text-xs">
      <AnimatePresence mode={"wait"}>
        <m.div
          exit={{ opacity: 0, y: -50 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 4 + 1.5,
            repeatDelay: Math.random() * 2.25,
            delay: Math.random() * 3.5,
            repeatType: "reverse",
          }}
        >
          <img
            src={"/arrow-up.svg"}
            alt={"hero-icon-arrow-up"}
            className={"relative opacity-85"}
            style={{
              width: `calc(clamp(${Math.floor(
                Math.random() * 45
              )}px, 2vw, 50px) * 0.4)`,
              height: `calc(clamp(${Math.floor(
                Math.random() * 60
              )}px, 2vw, 20px) * 0.3)`,
              left: `${Math.floor(Math.random() * 75)}px`,
              bottom: `${Math.floor(Math.random() * 25)}px`,
            }}
          />
        </m.div>
      </AnimatePresence>
    </div>
  );
};
