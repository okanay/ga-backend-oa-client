import { Feature } from "@/constants/features/data.ts";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { FeatureItemDescription } from "./feature-item-description.tsx";
import { FeatureItemHeader } from "./feature-item-header.tsx";
import { FeatureItemDivide } from "@/components/main/index/feature-section/feature-item-divide.tsx";
import { FeatureItemWrapper } from "@/components/main/index/feature-section/feature-item-wrapper.tsx";

interface FeatureItemProps extends Feature {
  index: number;
}

export const FeatureItem = ({
  rotate,
  description,
  header,
  index,
}: FeatureItemProps) => {
  //
  //
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <div ref={ref} className={"py-4 sm:py-8"}>
      <FeatureItemWrapper
        isInView={isInView}
        className={
          rotate === "left"
            ? "items-start justify-start text-start"
            : "items-end justify-end text-end"
        }
      >
        <FeatureItemHeader
          isInView={isInView}
          index={index + 1}
          rotate={rotate}
        >
          {header}
        </FeatureItemHeader>
        <FeatureItemDescription>{description}</FeatureItemDescription>
      </FeatureItemWrapper>

      <FeatureItemDivide isInView={isInView} />
    </div>
  );
};
