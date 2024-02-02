import { FeatureItemIndex } from "@/components/main/index/feature-section/feature-item-index.tsx";

export const FeatureItemHeader = ({
  children,
  index,
  rotate = "start",
  isInView,
}: {
  children: React.ReactNode;
  index: number;
  rotate: "start" | "end";
  isInView: boolean;
}) => {
  return (
    <div className={"flex items-center gap-4"}>
      <FeatureItemIndex order={rotate === "start" ? 0 : 1} isInView={isInView}>
        {index}
      </FeatureItemIndex>
      <h1 className={"font-plex-serif text-xl sm:text-2xl md:text-4xl"}>
        {children}
      </h1>
    </div>
  );
};
