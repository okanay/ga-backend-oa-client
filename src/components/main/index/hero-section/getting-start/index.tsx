import { GetStartedBtn } from "@/components/main/index/hero-section/getting-start/get-started-btn.tsx";
import { LearnMoreBtn } from "@/components/main/index/hero-section/getting-start/learn-more-btn.tsx";
import { Description } from "@/components/main/index/hero-section/getting-start/description.tsx";
import { Title } from "@/components/main/index/hero-section/getting-start/title.tsx";

export const GettingStart = () => {
  return (
    <div className={"flex h-full items-center justify-center"}>
      <div className="relative z-20 mx-auto flex w-full max-w-[48rem] flex-col items-center justify-center gap-12">
        <Title />
        <Description />
        <div className={"flex items-center justify-center gap-4"}>
          <GetStartedBtn />
          <LearnMoreBtn />
        </div>
      </div>
    </div>
  );
};
