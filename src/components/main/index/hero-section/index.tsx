import { Browser } from "./browser";
import { GettingStart } from "./getting-start";
import { ArrowAnimation } from "./arrow-animation";

export const HeroSection = () => {
  return (
    <div className="relative h-full min-h-svh w-full bg-secondary-700 sm:min-h-0">
      <div className="relative mx-auto h-full w-full max-w-7xl px-4">
        <div className="flex h-svh flex-col items-center justify-center gap-16 sm:min-h-[1000px]">
          <Browser />
          <GettingStart />
        </div>
      </div>
      <ArrowAnimation />
    </div>
  );
};
