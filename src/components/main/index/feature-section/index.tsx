import { featuresData } from "@/constants/features/data.ts";
import { FeatureHeader } from "@/components/main/index/feature-section/feature-header.tsx";
import { FeatureItem } from "@/components/main/index/feature-section/feature-item.tsx";

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
