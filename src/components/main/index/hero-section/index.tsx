import { Browser } from "@/components/main/index/hero-section/browser";
import { GettingStart } from "@/components/main/index/hero-section/getting-start";
import { ArrowAnimation } from "@/components/main/index/hero-section/arrow-animation";

export const HeroSection = () => {
  return (
    <div className={"relative h-svh w-full"}>
      <div className="relative mx-auto h-full w-full max-w-7xl px-4">
        <div className="flex h-full flex-col items-center justify-center gap-24">
          <Browser />
          <GettingStart />
        </div>
      </div>
      <ArrowAnimation />
    </div>
  );
};
