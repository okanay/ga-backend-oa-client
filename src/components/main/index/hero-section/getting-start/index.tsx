import { GetStartedBtn } from "./get-started-btn.tsx";
import { LearnMoreBtn } from "./learn-more-btn.tsx";
import { Description } from "./description.tsx";
import { Title } from "./title.tsx";

export const GettingStart = () => {
  return (
    <div className={"mb-16 flex items-center justify-center sm:mb-0"}>
      <div className="relative z-20 mx-auto flex w-full flex-col items-center justify-center gap-8 base-phone:gap-12">
        <Title />
        <Description />
        <div className={"flex items-center justify-center gap-2 sm:gap-4"}>
          <GetStartedBtn />
          <LearnMoreBtn />
        </div>
      </div>
    </div>
  );
};
