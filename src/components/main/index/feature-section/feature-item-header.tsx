import { FeatureItemIndex } from "@/components/main/index/feature-section/feature-item-index.tsx";

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
      <FeatureItemIndex order={rotate === "left" ? 0 : 1} isInView={isInView}>
        {index}
      </FeatureItemIndex>
      <h1 className={"font-plexSansSerif text-xl sm:text-2xl md:text-4xl"}>
        {children}
      </h1>
    </div>
  );
};
