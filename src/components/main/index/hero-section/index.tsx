import { Browser } from "./browser";
import { GettingStart } from "./getting-start";
import { ArrowAnimation } from "./arrow-animation";

export const HeroSection = () => {
  return (
    <div className={"relative h-svh w-full bg-secondary-700 sm:min-h-[1000px]"}>
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
