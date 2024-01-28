import { Feature, featuresData } from "@/constants/features/data.ts";
import { twMerge } from "tailwind-merge";
import { FeatureHeader } from "@/components/main/index/feature-section/feature-header.tsx";
import { PropsWithChildren, useRef } from "react";
import { m, useInView } from "framer-motion";

export const FeatureSection = () => {
  return (
    <section className="relative mx-auto max-w-6xl space-y-12 bg-flower-50 px-4 py-12 sm:px-16 sm:py-24">
      <FeatureHeader />
      <div className={"flex w-full flex-col text-ebony-950"}>
        {featuresData.map((feature, index) => (
          <FeatureItem key={feature.header} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

interface FeatureItemProps extends Feature {
  index: number;
}

export const FeatureItem = ({
  className,
  rotate,
  description,
  header,
  index,
}: FeatureItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <div ref={ref} className={"py-4 sm:py-8"}>
      <m.div
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{
          type: "tween",
          ease: "easeIn",
          duration: 0.45,
        }}
        className={twMerge(className, "mb-8 flex flex-col space-y-4 sm:mb-12")}
      >
        <FeatureItemHeader
          isInView={isInView}
          index={index + 1}
          rotate={rotate}
        >
          {header}
        </FeatureItemHeader>
        <FeatureItemDescription>{description}</FeatureItemDescription>
      </m.div>

      <m.div
        variants={dividerAnimation}
        animate={isInView ? "visible" : "hidden"}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.45,
          delay: 0.05,
        }}
        custom={rotate ? 100 : -100}
        className={`h-[2px] w-full bg-secondary-700`}
      />
    </div>
  );
};

const dividerAnimation = {
  hidden: { clipPath: `inset(0% 100% 0% 100%)` },
  visible: { clipPath: `inset(0% 0% 0% 0%)` },
};

export const FeatureItemHeader = ({
  children,
  index,
  rotate = "left",
  isInView,
}: {
  children: React.ReactNode;
  index: number;
  rotate: "left" | "right";
  isInView: boolean;
}) => {
  return (
    <div className={"flex items-center gap-4"}>
      <FeatureItemIndex isInView={isInView} visible={rotate === "left"}>
        {index}
      </FeatureItemIndex>
      <h1 className={"font-plexSansSerif text-xl sm:text-2xl md:text-4xl"}>
        {children}
      </h1>
      <FeatureItemIndex isInView={isInView} visible={rotate === "right"}>
        {index}
      </FeatureItemIndex>
    </div>
  );
};

export const FeatureItemIndex = ({
  children,
  visible = true,
  isInView,
}: {
  children: React.ReactNode;
  isInView: boolean;
  visible?: boolean;
}) => {
  return (
    <div
      className={`relative flex size-6 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-secondary-700 text-xs sm:size-8 sm:text-base ${
        !visible && "hidden"
      }`}
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

export const FeatureItemDescription = ({ children }: PropsWithChildren) => {
  return <p className={"text-sm sm:text-lg lg:text-xl"}>{children}</p>;
};
