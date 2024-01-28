import { m } from "framer-motion";

export const FeatureItemIndex = ({
  children,
  isInView,
  order = 0,
}: {
  children: React.ReactNode;
  isInView: boolean;
  order: number;
}) => {
  return (
    <div
      style={{
        order,
      }}
      className={`relative flex size-6 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-secondary-700 text-xs sm:size-8 sm:text-base `}
    >
      <span>{children}</span>
      <m.div
        className={"absolute inset-0 bg-secondary-700"}
        animate={{ y: isInView ? "-100%" : "0%" }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.45,
          delay: 0.35,
        }}
      />
    </div>
  );
};
