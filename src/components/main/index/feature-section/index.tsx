import { featuresData } from "@/constants/index/features/data.ts";
import { FeatureHeader } from "@/components/main/index/feature-section/feature-header.tsx";
import { FeatureItem } from "@/components/main/index/feature-section/feature-item.tsx";

export const FeatureSection = () => {
  return (
    <section
      id={"#features"}
      className="relative mx-auto space-y-12 bg-ebony-950 px-4 py-12"
    >
      <FeatureHeader />
      <div className="mx-auto flex w-full max-w-[64rem] flex-col text-ebony-950">
        {featuresData.map((feature, index) => (
          <FeatureItem key={feature.header} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};
