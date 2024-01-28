import { featuresData } from "@/constants/features/data.ts";
import { FeatureHeader } from "@/components/main/index/feature-section/feature-header.tsx";
import { FeatureItem } from "@/components/main/index/feature-section/feature-item.tsx";

export const FeatureSection = () => {
  return (
    <section className={"bg-ebony-950 "}>
      <div className="relative mx-auto max-w-[64rem] space-y-12 px-8 pb-24 pt-12">
        <FeatureHeader />
        <div className={"flex w-full flex-col text-ebony-950"}>
          {featuresData.map((feature, index) => (
            <FeatureItem key={feature.header} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
