import { GetStartedBtn } from "./get-started-btn.tsx";
import { LearnMoreBtn } from "./learn-more-btn.tsx";
import { Description } from "./description.tsx";
import { Title } from "./title.tsx";

export const GettingStart = () => {
  return (
    <div className="relative z-30 flex w-full max-w-5xl flex-col items-center justify-center gap-8 base-phone:gap-12">
      <Title />
      <Description />
      <div className={"flex items-center justify-center gap-2 sm:gap-4"}>
        <GetStartedBtn />
        <LearnMoreBtn />
      </div>
    </div>
  );
};
