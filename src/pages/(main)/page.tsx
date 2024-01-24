import { Browser } from "@/components/main/index/hero-section/browser";
import { GettingStart } from "@/components/main/index/hero-section/getting-start";
import { ArrowAnimation } from "@/components/main/index/hero-section/arrow-animation";

export const MainPage = () => {
  return (
    <main>
      <div className={"relative h-svh w-full"}>
        <div className="relative mx-auto h-full w-full max-w-7xl px-4 sm:min-h-[56rem]">
          <Browser />
          <GettingStart />
        </div>
        <ArrowAnimation />
      </div>
    </main>
  );
};
